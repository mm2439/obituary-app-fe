import { supabase } from '../supabase'

export const notificationAPI = {
  // Get notifications for a user
  getForUser: async (userId, limit = 50) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get notifications error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get unread notifications count
  getUnreadCount: async (userId) => {
    try {
      const { count, error } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read', false)

      if (error) throw error

      return { data: count, error: null }
    } catch (error) {
      console.error('Get unread count error:', error)
      return { data: 0, error: error.message }
    }
  },

  // Mark notification as read
  markAsRead: async (notificationId) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .update({ read: true, read_at: new Date().toISOString() })
        .eq('id', notificationId)
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Mark as read error:', error)
      return { data: null, error: error.message }
    }
  },

  // Mark all notifications as read for a user
  markAllAsRead: async (userId) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .update({ read: true, read_at: new Date().toISOString() })
        .eq('user_id', userId)
        .eq('read', false)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Mark all as read error:', error)
      return { data: null, error: error.message }
    }
  },

  // Create a new notification
  create: async (notificationData) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .insert({
          ...notificationData,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Create notification error:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete notification
  delete: async (notificationId, userId) => {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .delete()
        .eq('id', notificationId)
        .eq('user_id', userId) // Ensure user owns the notification
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Delete notification error:', error)
      return { data: null, error: error.message }
    }
  },

  // Subscribe to real-time notifications
  subscribeToNotifications: (userId, callback) => {
    return supabase
      .channel('notifications')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'notifications',
          filter: `user_id=eq.${userId}`
        },
        callback
      )
      .subscribe()
  },

  // Unsubscribe from notifications
  unsubscribeFromNotifications: (subscription) => {
    if (subscription) {
      supabase.removeChannel(subscription)
    }
  },

  // Helper functions for creating specific notification types
  createObituaryNotification: async (userId, obituaryId, type, message) => {
    return await notificationAPI.create({
      user_id: userId,
      type: type,
      title: 'Obituary Update',
      message: message,
      data: { obituary_id: obituaryId },
      read: false
    })
  },

  createCommentNotification: async (userId, obituaryId, commentId, commenterName) => {
    return await notificationAPI.create({
      user_id: userId,
      type: 'comment',
      title: 'New Comment',
      message: `${commenterName} commented on your obituary`,
      data: { 
        obituary_id: obituaryId,
        comment_id: commentId 
      },
      read: false
    })
  },

  createSystemNotification: async (userId, title, message, data = {}) => {
    return await notificationAPI.create({
      user_id: userId,
      type: 'system',
      title: title,
      message: message,
      data: data,
      read: false
    })
  },

  createAdminNotification: async (userId, title, message, data = {}) => {
    return await notificationAPI.create({
      user_id: userId,
      type: 'admin',
      title: title,
      message: message,
      data: data,
      read: false
    })
  },

  // Broadcast notification to all users with specific role
  broadcastToRole: async (role, title, message, data = {}) => {
    try {
      // Get all users with the specified role
      const { data: users, error: usersError } = await supabase
        .from('profiles')
        .select('id')
        .eq('role', role)

      if (usersError) throw usersError

      // Create notifications for all users
      const notifications = users.map(user => ({
        user_id: user.id,
        type: 'broadcast',
        title: title,
        message: message,
        data: data,
        read: false,
        created_at: new Date().toISOString()
      }))

      const { data, error } = await supabase
        .from('notifications')
        .insert(notifications)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Broadcast notification error:', error)
      return { data: null, error: error.message }
    }
  }
}
