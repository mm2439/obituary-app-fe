'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { activityAPI } from '../api'

const ActivityContext = createContext({})

export const useActivity = () => {
  const context = useContext(ActivityContext)
  if (!context) {
    throw new Error('useActivity must be used within an ActivityProvider')
  }
  return context
}

export const ActivityProvider = ({ children }) => {
  const { user, isAuthenticated, isAdmin } = useAuth()
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)
  const [stats, setStats] = useState(null)

  // Load activities when user is authenticated
  useEffect(() => {
    if (isAuthenticated() && user) {
      loadActivities()
      subscribeToActivities()
    } else {
      setActivities([])
      setStats(null)
      if (subscription) {
        activityAPI.unsubscribeFromActivity(subscription)
        setSubscription(null)
      }
    }

    return () => {
      if (subscription) {
        activityAPI.unsubscribeFromActivity(subscription)
      }
    }
  }, [user, isAuthenticated])

  // Load activities from database
  const loadActivities = async (limit = 50, offset = 0) => {
    if (!user) return

    try {
      setLoading(true)
      
      let result
      if (isAdmin()) {
        // Admin can see all activities
        result = await activityAPI.getAll(limit, offset)
      } else {
        // Regular users see only their activities
        result = await activityAPI.getForUser(user.id, limit, offset)
      }
      
      if (result.error) {
        console.error('Error loading activities:', result.error)
        return
      }

      if (offset === 0) {
        setActivities(result.data || [])
      } else {
        setActivities(prev => [...prev, ...(result.data || [])])
      }
    } catch (error) {
      console.error('Error loading activities:', error)
    } finally {
      setLoading(false)
    }
  }

  // Subscribe to real-time activities
  const subscribeToActivities = () => {
    if (!user) return

    let sub
    if (isAdmin()) {
      // Admin subscribes to all activities
      sub = activityAPI.subscribeToAllActivity((payload) => {
        console.log('New activity received:', payload)
        
        if (payload.eventType === 'INSERT') {
          const newActivity = payload.new
          setActivities(prev => [newActivity, ...prev])
        }
      })
    } else {
      // Regular users subscribe to their activities
      sub = activityAPI.subscribeToActivity(user.id, (payload) => {
        console.log('New user activity received:', payload)
        
        if (payload.eventType === 'INSERT') {
          const newActivity = payload.new
          setActivities(prev => [newActivity, ...prev])
        }
      })
    }

    setSubscription(sub)
  }

  // Load activity statistics
  const loadStats = async (dateFrom = null, dateTo = null) => {
    if (!user) return

    try {
      const userId = isAdmin() ? null : user.id
      const result = await activityAPI.getStats(userId, dateFrom, dateTo)
      
      if (result.error) {
        console.error('Error loading activity stats:', result.error)
        return
      }

      setStats(result.data)
    } catch (error) {
      console.error('Error loading activity stats:', error)
    }
  }

  // Get activities for a specific entity
  const getActivitiesForEntity = async (entityType, entityId, limit = 20) => {
    try {
      const result = await activityAPI.getForEntity(entityType, entityId, limit)
      
      if (result.error) {
        console.error('Error loading entity activities:', result.error)
        return []
      }

      return result.data || []
    } catch (error) {
      console.error('Error loading entity activities:', error)
      return []
    }
  }

  // Log activity functions
  const logActivity = async (activityData) => {
    try {
      const result = await activityAPI.log(activityData)
      
      if (result.error) {
        console.error('Error logging activity:', result.error)
        return false
      }

      return true
    } catch (error) {
      console.error('Error logging activity:', error)
      return false
    }
  }

  // Specific logging functions
  const logLogin = async (ipAddress = null) => {
    if (!user) return false
    return await activityAPI.logLogin(user.id, ipAddress)
  }

  const logLogout = async () => {
    if (!user) return false
    return await activityAPI.logLogout(user.id)
  }

  const logObituaryCreate = async (obituaryId, obituaryTitle) => {
    if (!user) return false
    return await activityAPI.logObituaryCreate(user.id, obituaryId, obituaryTitle)
  }

  const logObituaryUpdate = async (obituaryId, obituaryTitle) => {
    if (!user) return false
    return await activityAPI.logObituaryUpdate(user.id, obituaryId, obituaryTitle)
  }

  const logObituaryDelete = async (obituaryId, obituaryTitle) => {
    if (!user) return false
    return await activityAPI.logObituaryDelete(user.id, obituaryId, obituaryTitle)
  }

  const logObituaryPublish = async (obituaryId, obituaryTitle) => {
    if (!user) return false
    return await activityAPI.logObituaryPublish(user.id, obituaryId, obituaryTitle)
  }

  const logCommentCreate = async (commentId, obituaryId) => {
    if (!user) return false
    return await activityAPI.logCommentCreate(user.id, commentId, obituaryId)
  }

  const logProfileUpdate = async () => {
    if (!user) return false
    return await activityAPI.logProfileUpdate(user.id)
  }

  const logPasswordChange = async () => {
    if (!user) return false
    return await activityAPI.logPasswordChange(user.id)
  }

  const logAdminAction = async (action, entityType, entityId, description) => {
    if (!user || !isAdmin()) return false
    return await activityAPI.logAdminAction(user.id, action, entityType, entityId, description)
  }

  // Filter activities
  const getActivitiesByAction = (action) => {
    return activities.filter(activity => activity.action === action)
  }

  const getActivitiesByEntityType = (entityType) => {
    return activities.filter(activity => activity.entity_type === entityType)
  }

  const getActivitiesByDateRange = (startDate, endDate) => {
    return activities.filter(activity => {
      const activityDate = new Date(activity.created_at)
      return activityDate >= startDate && activityDate <= endDate
    })
  }

  // Get recent activities (last 24 hours)
  const getRecentActivities = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    
    return activities.filter(activity => 
      new Date(activity.created_at) > yesterday
    )
  }

  // Load more activities (pagination)
  const loadMoreActivities = async () => {
    const currentCount = activities.length
    await loadActivities(50, currentCount)
  }

  // Refresh activities
  const refresh = async () => {
    await loadActivities()
  }

  // Get activity icon based on action and entity type
  const getActivityIcon = (activity) => {
    const { action, entity_type } = activity

    if (entity_type === 'auth') {
      return action === 'login' ? '🔐' : '🚪'
    } else if (entity_type === 'obituary') {
      switch (action) {
        case 'create': return '📝'
        case 'update': return '✏️'
        case 'delete': return '🗑️'
        case 'publish': return '📢'
        default: return '📄'
      }
    } else if (entity_type === 'comment') {
      return '💬'
    } else if (entity_type === 'profile') {
      return '👤'
    } else {
      return '📋'
    }
  }

  // Get activity color based on action
  const getActivityColor = (activity) => {
    const { action } = activity

    switch (action) {
      case 'create': return 'text-green-600'
      case 'update': return 'text-blue-600'
      case 'delete': return 'text-red-600'
      case 'publish': return 'text-purple-600'
      case 'login': return 'text-green-500'
      case 'logout': return 'text-gray-500'
      default: return 'text-gray-600'
    }
  }

  const value = {
    activities,
    loading,
    stats,
    loadActivities,
    loadStats,
    getActivitiesForEntity,
    logActivity,
    logLogin,
    logLogout,
    logObituaryCreate,
    logObituaryUpdate,
    logObituaryDelete,
    logObituaryPublish,
    logCommentCreate,
    logProfileUpdate,
    logPasswordChange,
    logAdminAction,
    getActivitiesByAction,
    getActivitiesByEntityType,
    getActivitiesByDateRange,
    getRecentActivities,
    loadMoreActivities,
    refresh,
    getActivityIcon,
    getActivityColor
  }

  return (
    <ActivityContext.Provider value={value}>
      {children}
    </ActivityContext.Provider>
  )
}
