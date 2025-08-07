import { supabase } from '../supabase'
import { notificationAPI } from './notifications'

export const commentsAPI = {
  // Get comments for an obituary
  getForObituary: async (obituaryId, status = 'approved') => {
    try {
      let query = supabase
        .from('obituary_comments')
        .select('*')
        .eq('obituary_id', obituaryId)
        .order('created_at', { ascending: true })

      if (status) {
        query = query.eq('status', status)
      }

      const { data, error } = await query

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get comments error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get all pending comments (admin only)
  getPending: async () => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .select(`
          *,
          obituaries:obituary_id (
            id,
            title,
            user_id
          )
        `)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get pending comments error:', error)
      return { data: null, error: error.message }
    }
  },

  // Create a new comment
  create: async (commentData) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .insert({
          ...commentData,
          status: 'pending', // All comments start as pending
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error

      // Get obituary owner to send notification
      const { data: obituary, error: obituaryError } = await supabase
        .from('obituaries')
        .select('user_id, title')
        .eq('id', commentData.obituary_id)
        .single()

      if (!obituaryError && obituary) {
        // Create notification for obituary owner
        await notificationAPI.createCommentNotification(
          obituary.user_id,
          commentData.obituary_id,
          data.id,
          commentData.author_name
        )
      }

      return { data, error: null }
    } catch (error) {
      console.error('Create comment error:', error)
      return { data: null, error: error.message }
    }
  },

  // Update comment
  update: async (commentId, commentData, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .update({
          ...commentData,
          updated_at: new Date().toISOString()
        })
        .eq('id', commentId)
        .eq('user_id', userId) // Ensure user owns the comment
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Update comment error:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete comment
  delete: async (commentId, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .delete()
        .eq('id', commentId)
        .eq('user_id', userId) // Ensure user owns the comment
        .select()
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Delete comment error:', error)
      return { data: null, error: error.message }
    }
  },

  // Approve comment (admin only)
  approve: async (commentId, adminUserId) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .update({ 
          status: 'approved',
          approved_at: new Date().toISOString(),
          approved_by: adminUserId
        })
        .eq('id', commentId)
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: adminUserId,
        p_action: 'approve',
        p_entity_type: 'comment',
        p_entity_id: commentId,
        p_description: 'Approved comment'
      })

      return { data, error: null }
    } catch (error) {
      console.error('Approve comment error:', error)
      return { data: null, error: error.message }
    }
  },

  // Reject comment (admin only)
  reject: async (commentId, adminUserId, reason = '') => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .update({ 
          status: 'rejected',
          rejection_reason: reason,
          rejected_at: new Date().toISOString(),
          rejected_by: adminUserId
        })
        .eq('id', commentId)
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: adminUserId,
        p_action: 'reject',
        p_entity_type: 'comment',
        p_entity_id: commentId,
        p_description: `Rejected comment: ${reason}`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Reject comment error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get comment by ID
  getById: async (commentId) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .select(`
          *,
          obituaries:obituary_id (
            id,
            title,
            user_id
          )
        `)
        .eq('id', commentId)
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get comment by ID error:', error)
      return { data: null, error: error.message }
    }
  },

  // Subscribe to real-time comment updates for an obituary
  subscribeToComments: (obituaryId, callback) => {
    return supabase
      .channel(`comments_${obituaryId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'obituary_comments',
          filter: `obituary_id=eq.${obituaryId}`
        },
        callback
      )
      .subscribe()
  },

  // Subscribe to pending comments (admin only)
  subscribeToPendingComments: (callback) => {
    return supabase
      .channel('pending_comments')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'obituary_comments',
          filter: 'status=eq.pending'
        },
        callback
      )
      .subscribe()
  },

  // Unsubscribe from comment updates
  unsubscribeFromComments: (subscription) => {
    if (subscription) {
      supabase.removeChannel(subscription)
    }
  },

  // Get comment statistics
  getStats: async (obituaryId = null, dateFrom = null, dateTo = null) => {
    try {
      let query = supabase
        .from('obituary_comments')
        .select('status, created_at')

      if (obituaryId) {
        query = query.eq('obituary_id', obituaryId)
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
        approved: data.filter(c => c.status === 'approved').length,
        pending: data.filter(c => c.status === 'pending').length,
        rejected: data.filter(c => c.status === 'rejected').length,
        by_date: {}
      }

      data.forEach(comment => {
        const date = new Date(comment.created_at).toDateString()
        stats.by_date[date] = (stats.by_date[date] || 0) + 1
      })

      return { data: stats, error: null }
    } catch (error) {
      console.error('Get comment stats error:', error)
      return { data: null, error: error.message }
    }
  },

  // Bulk approve comments (admin only)
  bulkApprove: async (commentIds, adminUserId) => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .update({ 
          status: 'approved',
          approved_at: new Date().toISOString(),
          approved_by: adminUserId
        })
        .in('id', commentIds)
        .select()

      if (error) throw error

      // Log activity for each comment
      for (const commentId of commentIds) {
        await supabase.rpc('log_activity', {
          p_user_id: adminUserId,
          p_action: 'approve',
          p_entity_type: 'comment',
          p_entity_id: commentId,
          p_description: 'Bulk approved comment'
        })
      }

      return { data, error: null }
    } catch (error) {
      console.error('Bulk approve comments error:', error)
      return { data: null, error: error.message }
    }
  },

  // Bulk reject comments (admin only)
  bulkReject: async (commentIds, adminUserId, reason = '') => {
    try {
      const { data, error } = await supabase
        .from('obituary_comments')
        .update({ 
          status: 'rejected',
          rejection_reason: reason,
          rejected_at: new Date().toISOString(),
          rejected_by: adminUserId
        })
        .in('id', commentIds)
        .select()

      if (error) throw error

      // Log activity for each comment
      for (const commentId of commentIds) {
        await supabase.rpc('log_activity', {
          p_user_id: adminUserId,
          p_action: 'reject',
          p_entity_type: 'comment',
          p_entity_id: commentId,
          p_description: `Bulk rejected comment: ${reason}`
        })
      }

      return { data, error: null }
    } catch (error) {
      console.error('Bulk reject comments error:', error)
      return { data: null, error: error.message }
    }
  }
}
