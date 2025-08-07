import { supabase } from '../supabase'

export const activityAPI = {
  // Get activity logs for a user
  getForUser: async (userId, limit = 50, offset = 0) => {
    try {
      const { data, error } = await supabase
        .from('activity_logs')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get user activity error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get all activity logs (admin only)
  getAll: async (limit = 100, offset = 0, filters = {}) => {
    try {
      let query = supabase
        .from('activity_logs')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          )
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1)

      // Apply filters
      if (filters.action) {
        query = query.eq('action', filters.action)
      }
      if (filters.entity_type) {
        query = query.eq('entity_type', filters.entity_type)
      }
      if (filters.user_id) {
        query = query.eq('user_id', filters.user_id)
      }
      if (filters.date_from) {
        query = query.gte('created_at', filters.date_from)
      }
      if (filters.date_to) {
        query = query.lte('created_at', filters.date_to)
      }

      const { data, error } = await query

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get all activity error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get activity logs for a specific entity
  getForEntity: async (entityType, entityId, limit = 20) => {
    try {
      const { data, error } = await supabase
        .from('activity_logs')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          )
        `)
        .eq('entity_type', entityType)
        .eq('entity_id', entityId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get entity activity error:', error)
      return { data: null, error: error.message }
    }
  },

  // Log a new activity
  log: async (activityData) => {
    try {
      const { data, error } = await supabase
        .from('activity_logs')
        .insert({
          ...activityData,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Log activity error:', error)
      return { data: null, error: error.message }
    }
  },

  // Subscribe to real-time activity updates
  subscribeToActivity: (userId, callback) => {
    return supabase
      .channel('activity_logs')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'activity_logs',
          filter: `user_id=eq.${userId}`
        },
        callback
      )
      .subscribe()
  },

  // Subscribe to all activity updates (admin only)
  subscribeToAllActivity: (callback) => {
    return supabase
      .channel('all_activity_logs')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'activity_logs'
        },
        callback
      )
      .subscribe()
  },

  // Unsubscribe from activity updates
  unsubscribeFromActivity: (subscription) => {
    if (subscription) {
      supabase.removeChannel(subscription)
    }
  },

  // Helper functions for logging specific activities
  logLogin: async (userId, ipAddress = null) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'login',
      entity_type: 'auth',
      entity_id: userId,
      description: 'User logged in',
      metadata: { ip_address: ipAddress }
    })
  },

  logLogout: async (userId) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'logout',
      entity_type: 'auth',
      entity_id: userId,
      description: 'User logged out'
    })
  },

  logObituaryCreate: async (userId, obituaryId, obituaryTitle) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'create',
      entity_type: 'obituary',
      entity_id: obituaryId,
      description: `Created obituary: ${obituaryTitle}`
    })
  },

  logObituaryUpdate: async (userId, obituaryId, obituaryTitle) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'update',
      entity_type: 'obituary',
      entity_id: obituaryId,
      description: `Updated obituary: ${obituaryTitle}`
    })
  },

  logObituaryDelete: async (userId, obituaryId, obituaryTitle) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'delete',
      entity_type: 'obituary',
      entity_id: obituaryId,
      description: `Deleted obituary: ${obituaryTitle}`
    })
  },

  logObituaryPublish: async (userId, obituaryId, obituaryTitle) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'publish',
      entity_type: 'obituary',
      entity_id: obituaryId,
      description: `Published obituary: ${obituaryTitle}`
    })
  },

  logCommentCreate: async (userId, commentId, obituaryId) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'create',
      entity_type: 'comment',
      entity_id: commentId,
      description: 'Created comment on obituary',
      metadata: { obituary_id: obituaryId }
    })
  },

  logProfileUpdate: async (userId) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'update',
      entity_type: 'profile',
      entity_id: userId,
      description: 'Updated profile information'
    })
  },

  logPasswordChange: async (userId) => {
    return await activityAPI.log({
      user_id: userId,
      action: 'update',
      entity_type: 'auth',
      entity_id: userId,
      description: 'Changed password'
    })
  },

  logAdminAction: async (adminUserId, action, entityType, entityId, description) => {
    return await activityAPI.log({
      user_id: adminUserId,
      action: action,
      entity_type: entityType,
      entity_id: entityId,
      description: `Admin action: ${description}`,
      metadata: { admin_action: true }
    })
  },

  // Get activity statistics
  getStats: async (userId = null, dateFrom = null, dateTo = null) => {
    try {
      let query = supabase
        .from('activity_logs')
        .select('action, entity_type, created_at')

      if (userId) {
        query = query.eq('user_id', userId)
      }
      if (dateFrom) {
        query = query.gte('created_at', dateFrom)
      }
      if (dateTo) {
        query = query.lte('created_at', dateTo)
      }

      const { data, error } = await query

      if (error) throw error

      // Process data to create statistics
      const stats = {
        total: data.length,
        by_action: {},
        by_entity_type: {},
        by_date: {}
      }

      data.forEach(log => {
        // Count by action
        stats.by_action[log.action] = (stats.by_action[log.action] || 0) + 1
        
        // Count by entity type
        stats.by_entity_type[log.entity_type] = (stats.by_entity_type[log.entity_type] || 0) + 1
        
        // Count by date
        const date = new Date(log.created_at).toDateString()
        stats.by_date[date] = (stats.by_date[date] || 0) + 1
      })

      return { data: stats, error: null }
    } catch (error) {
      console.error('Get activity stats error:', error)
      return { data: null, error: error.message }
    }
  }
}
