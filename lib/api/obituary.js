import { supabase } from '../supabase'

export const obituaryAPI = {
  // Get all obituaries with filters
  getAll: async (filters = {}) => {
    try {
      let query = supabase
        .from('obituaries')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          )
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      // Apply filters
      if (filters.city) {
        query = query.eq('city', filters.city)
      }
      if (filters.region) {
        query = query.eq('region', filters.region)
      }
      if (filters.userId) {
        query = query.eq('user_id', filters.userId)
      }
      if (filters.date) {
        query = query.gte('created_at', filters.date)
      }
      if (filters.days) {
        const daysAgo = new Date()
        daysAgo.setDate(daysAgo.getDate() - filters.days)
        query = query.gte('created_at', daysAgo.toISOString())
      }

      // Pagination
      if (filters.page && filters.limit) {
        const from = (filters.page - 1) * filters.limit
        const to = from + filters.limit - 1
        query = query.range(from, to)
      }

      const { data, error } = await query

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get obituaries error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get obituary by ID
  getById: async (id) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          ),
          obituary_comments (
            id,
            content,
            author_name,
            author_email,
            status,
            created_at
          )
        `)
        .eq('id', id)
        .single()

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get obituary by ID error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get obituary by slug key
  getBySlugKey: async (slugKey) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          ),
          obituary_comments (
            id,
            content,
            author_name,
            author_email,
            status,
            created_at
          )
        `)
        .eq('slug_key', slugKey)
        .single()

      if (error) throw error

      // Update visit count
      if (data) {
        await supabase
          .from('obituaries')
          .update({ visits: (data.visits || 0) + 1 })
          .eq('id', data.id)
      }

      return { data, error: null }
    } catch (error) {
      console.error('Get obituary by slug error:', error)
      return { data: null, error: error.message }
    }
  },

  // Create new obituary
  create: async (obituaryData, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .insert({
          ...obituaryData,
          user_id: userId,
          status: 'draft',
          slug_key: `obituary_${Date.now()}`,
          created_at: new Date().toISOString()
        })
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: userId,
        p_action: 'create',
        p_entity_type: 'obituary',
        p_entity_id: data.id,
        p_description: `Created obituary: ${obituaryData.title || 'Untitled'}`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Create obituary error:', error)
      return { data: null, error: error.message }
    }
  },

  // Update obituary
  update: async (id, obituaryData, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .update({
          ...obituaryData,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('user_id', userId) // Ensure user owns the obituary
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: userId,
        p_action: 'update',
        p_entity_type: 'obituary',
        p_entity_id: id,
        p_description: `Updated obituary: ${obituaryData.title || 'Untitled'}`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Update obituary error:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete obituary
  delete: async (id, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .delete()
        .eq('id', id)
        .eq('user_id', userId) // Ensure user owns the obituary
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: userId,
        p_action: 'delete',
        p_entity_type: 'obituary',
        p_entity_id: id,
        p_description: `Deleted obituary`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Delete obituary error:', error)
      return { data: null, error: error.message }
    }
  },

  // Publish obituary
  publish: async (id, userId) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', id)
        .eq('user_id', userId)
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: userId,
        p_action: 'publish',
        p_entity_type: 'obituary',
        p_entity_id: id,
        p_description: `Published obituary`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Publish obituary error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get pending obituaries (admin only)
  getPending: async () => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .select(`
          *,
          profiles:user_id (
            name,
            email,
            role
          )
        `)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Get pending obituaries error:', error)
      return { data: null, error: error.message }
    }
  },

  // Approve obituary (admin only)
  approve: async (id, adminUserId) => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .update({ 
          status: 'published',
          published_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: adminUserId,
        p_action: 'approve',
        p_entity_type: 'obituary',
        p_entity_id: id,
        p_description: `Approved obituary for publication`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Approve obituary error:', error)
      return { data: null, error: error.message }
    }
  },

  // Reject obituary (admin only)
  reject: async (id, adminUserId, reason = '') => {
    try {
      const { data, error } = await supabase
        .from('obituaries')
        .update({ 
          status: 'rejected',
          rejection_reason: reason
        })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      // Log activity
      await supabase.rpc('log_activity', {
        p_user_id: adminUserId,
        p_action: 'reject',
        p_entity_type: 'obituary',
        p_entity_id: id,
        p_description: `Rejected obituary: ${reason}`
      })

      return { data, error: null }
    } catch (error) {
      console.error('Reject obituary error:', error)
      return { data: null, error: error.message }
    }
  }
}
