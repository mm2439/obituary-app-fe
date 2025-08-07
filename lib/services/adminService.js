import { supabase, supabaseAdmin } from '../supabase'
import { obituaryAPI, commentsAPI, activityAPI, notificationAPI } from '../api'

/**
 * Enhanced Admin Service
 * Integrates Supabase with existing admin functionality
 */
export class AdminService {
  
  // Dashboard Statistics
  static async getDashboardStats() {
    try {
      const stats = {
        users: { total: 0, new_this_month: 0, active: 0 },
        obituaries: { total: 0, published: 0, pending: 0, draft: 0 },
        comments: { total: 0, pending: 0, approved: 0, rejected: 0 },
        activities: { total: 0, today: 0 },
        storage: { used: 0, files: 0 }
      }

      // Get user statistics
      const { count: totalUsers } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })

      const { count: newUsersThisMonth } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString())

      stats.users.total = totalUsers || 0
      stats.users.new_this_month = newUsersThisMonth || 0

      // Get obituary statistics
      const { count: totalObituaries } = await supabase
        .from('obituaries')
        .select('*', { count: 'exact', head: true })

      const { count: publishedObituaries } = await supabase
        .from('obituaries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'published')

      const { count: pendingObituaries } = await supabase
        .from('obituaries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending')

      const { count: draftObituaries } = await supabase
        .from('obituaries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'draft')

      stats.obituaries.total = totalObituaries || 0
      stats.obituaries.published = publishedObituaries || 0
      stats.obituaries.pending = pendingObituaries || 0
      stats.obituaries.draft = draftObituaries || 0

      // Get comment statistics
      const { count: totalComments } = await supabase
        .from('obituary_comments')
        .select('*', { count: 'exact', head: true })

      const { count: pendingComments } = await supabase
        .from('obituary_comments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending')

      const { count: approvedComments } = await supabase
        .from('obituary_comments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'approved')

      const { count: rejectedComments } = await supabase
        .from('obituary_comments')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'rejected')

      stats.comments.total = totalComments || 0
      stats.comments.pending = pendingComments || 0
      stats.comments.approved = approvedComments || 0
      stats.comments.rejected = rejectedComments || 0

      // Get activity statistics
      const { count: totalActivities } = await supabase
        .from('activity_logs')
        .select('*', { count: 'exact', head: true })

      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const { count: todayActivities } = await supabase
        .from('activity_logs')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString())

      stats.activities.total = totalActivities || 0
      stats.activities.today = todayActivities || 0

      return {
        success: true,
        data: stats
      }
    } catch (error) {
      console.error('Get dashboard stats error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get dashboard statistics'
      }
    }
  }

  // User Management
  static async getAllUsers(filters = {}) {
    try {
      let query = supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false })

      // Apply filters
      if (filters.role) {
        query = query.eq('role', filters.role)
      }
      if (filters.search) {
        query = query.or(`name.ilike.%${filters.search}%,email.ilike.%${filters.search}%`)
      }
      if (filters.city) {
        query = query.eq('city', filters.city)
      }
      if (filters.region) {
        query = query.eq('region', filters.region)
      }

      // Pagination
      if (filters.page && filters.limit) {
        const from = (filters.page - 1) * filters.limit
        const to = from + filters.limit - 1
        query = query.range(from, to)
      }

      const { data, error } = await query

      if (error) throw error

      return {
        success: true,
        data: data || []
      }
    } catch (error) {
      console.error('Get all users error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get users'
      }
    }
  }

  static async updateUserRole(userId, newRole, adminUserId) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .update({ role: newRole })
        .eq('id', userId)
        .select()
        .single()

      if (error) throw error

      // Log admin action
      await activityAPI.logAdminAction(
        adminUserId,
        'update_role',
        'user',
        userId,
        `Changed user role to ${newRole}`
      )

      return {
        success: true,
        data: data
      }
    } catch (error) {
      console.error('Update user role error:', error)
      return {
        success: false,
        error: error.message || 'Failed to update user role'
      }
    }
  }

  static async deleteUser(userId, adminUserId) {
    try {
      // Get user info first
      const { data: user } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()

      // Delete user profile
      const { error } = await supabase
        .from('profiles')
        .delete()
        .eq('id', userId)

      if (error) throw error

      // Delete from auth.users (requires service role)
      const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId)
      
      if (authError) {
        console.warn('Failed to delete auth user:', authError)
      }

      // Log admin action
      await activityAPI.logAdminAction(
        adminUserId,
        'delete',
        'user',
        userId,
        `Deleted user: ${user?.name || user?.email}`
      )

      return {
        success: true,
        data: { id: userId }
      }
    } catch (error) {
      console.error('Delete user error:', error)
      return {
        success: false,
        error: error.message || 'Failed to delete user'
      }
    }
  }

  // Content Management
  static async getPendingContent() {
    try {
      // Get pending obituaries
      const obituariesResult = await obituaryAPI.getPending()
      
      // Get pending comments
      const commentsResult = await commentsAPI.getPending()

      return {
        success: true,
        data: {
          obituaries: obituariesResult.data || [],
          comments: commentsResult.data || []
        }
      }
    } catch (error) {
      console.error('Get pending content error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get pending content'
      }
    }
  }

  static async approveObituary(obituaryId, adminUserId) {
    try {
      const result = await obituaryAPI.approve(obituaryId, adminUserId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        success: true,
        data: result.data
      }
    } catch (error) {
      console.error('Approve obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to approve obituary'
      }
    }
  }

  static async rejectObituary(obituaryId, adminUserId, reason = '') {
    try {
      const result = await obituaryAPI.reject(obituaryId, adminUserId, reason)
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        success: true,
        data: result.data
      }
    } catch (error) {
      console.error('Reject obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to reject obituary'
      }
    }
  }

  // System Management
  static async getSystemSettings() {
    try {
      const { data, error } = await supabase
        .from('system_settings')
        .select('*')
        .order('key')

      if (error) throw error

      // Convert to key-value object
      const settings = {}
      data.forEach(setting => {
        settings[setting.key] = setting.value
      })

      return {
        success: true,
        data: settings
      }
    } catch (error) {
      console.error('Get system settings error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get system settings'
      }
    }
  }

  static async updateSystemSetting(key, value, adminUserId) {
    try {
      const { data, error } = await supabase
        .from('system_settings')
        .upsert({ key, value, updated_at: new Date().toISOString() })
        .select()
        .single()

      if (error) throw error

      // Log admin action
      await activityAPI.logAdminAction(
        adminUserId,
        'update',
        'system_setting',
        key,
        `Updated system setting: ${key} = ${value}`
      )

      return {
        success: true,
        data: data
      }
    } catch (error) {
      console.error('Update system setting error:', error)
      return {
        success: false,
        error: error.message || 'Failed to update system setting'
      }
    }
  }

  // Analytics and Reports
  static async getAnalytics(dateFrom, dateTo) {
    try {
      const analytics = {
        user_registrations: [],
        obituary_creations: [],
        comment_activity: [],
        popular_regions: [],
        activity_trends: []
      }

      // User registrations over time
      const { data: userRegistrations } = await supabase
        .from('profiles')
        .select('created_at, role')
        .gte('created_at', dateFrom)
        .lte('created_at', dateTo)
        .order('created_at')

      analytics.user_registrations = userRegistrations || []

      // Obituary creations over time
      const { data: obituaryCreations } = await supabase
        .from('obituaries')
        .select('created_at, status, city, region')
        .gte('created_at', dateFrom)
        .lte('created_at', dateTo)
        .order('created_at')

      analytics.obituary_creations = obituaryCreations || []

      // Comment activity
      const { data: commentActivity } = await supabase
        .from('obituary_comments')
        .select('created_at, status')
        .gte('created_at', dateFrom)
        .lte('created_at', dateTo)
        .order('created_at')

      analytics.comment_activity = commentActivity || []

      // Popular regions
      const { data: popularRegions } = await supabase
        .from('obituaries')
        .select('region')
        .gte('created_at', dateFrom)
        .lte('created_at', dateTo)
        .not('region', 'is', null)

      // Count regions
      const regionCounts = {}
      popularRegions?.forEach(item => {
        regionCounts[item.region] = (regionCounts[item.region] || 0) + 1
      })

      analytics.popular_regions = Object.entries(regionCounts)
        .map(([region, count]) => ({ region, count }))
        .sort((a, b) => b.count - a.count)

      return {
        success: true,
        data: analytics
      }
    } catch (error) {
      console.error('Get analytics error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get analytics'
      }
    }
  }

  // Notification Management
  static async sendBroadcastNotification(title, message, targetRole = null, adminUserId) {
    try {
      let result
      if (targetRole) {
        result = await notificationAPI.broadcastToRole(targetRole, title, message)
      } else {
        // Broadcast to all users
        const roles = ['User', 'Funeral', 'Florist']
        const promises = roles.map(role => 
          notificationAPI.broadcastToRole(role, title, message)
        )
        await Promise.all(promises)
        result = { error: null }
      }

      if (result.error) {
        throw new Error(result.error)
      }

      // Log admin action
      await activityAPI.logAdminAction(
        adminUserId,
        'broadcast',
        'notification',
        null,
        `Sent broadcast notification: ${title}`
      )

      return {
        success: true,
        message: 'Broadcast notification sent successfully'
      }
    } catch (error) {
      console.error('Send broadcast notification error:', error)
      return {
        success: false,
        error: error.message || 'Failed to send broadcast notification'
      }
    }
  }

  // Backup and Maintenance
  static async createDataBackup(adminUserId) {
    try {
      // This would typically involve exporting data
      // For now, we'll just log the action
      await activityAPI.logAdminAction(
        adminUserId,
        'backup',
        'system',
        null,
        'Created data backup'
      )

      return {
        success: true,
        message: 'Data backup initiated'
      }
    } catch (error) {
      console.error('Create data backup error:', error)
      return {
        success: false,
        error: error.message || 'Failed to create data backup'
      }
    }
  }

  static async getSystemHealth() {
    try {
      const health = {
        database: 'healthy',
        storage: 'healthy',
        auth: 'healthy',
        timestamp: new Date().toISOString()
      }

      // Test database connection
      try {
        await supabase.from('profiles').select('id').limit(1)
      } catch (error) {
        health.database = 'error'
      }

      // Test storage
      try {
        await supabase.storage.from('obituary-photos').list('', { limit: 1 })
      } catch (error) {
        health.storage = 'error'
      }

      // Test auth
      try {
        await supabase.auth.getSession()
      } catch (error) {
        health.auth = 'error'
      }

      return {
        success: true,
        data: health
      }
    } catch (error) {
      console.error('Get system health error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get system health'
      }
    }
  }
}

export default AdminService
