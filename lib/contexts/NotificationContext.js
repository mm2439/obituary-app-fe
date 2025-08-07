'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { notificationAPI } from '../api'
import toast from 'react-hot-toast'

const NotificationContext = createContext({})

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

export const NotificationProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth()
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  // Load notifications when user is authenticated
  useEffect(() => {
    if (isAuthenticated() && user) {
      loadNotifications()
      subscribeToNotifications()
    } else {
      setNotifications([])
      setUnreadCount(0)
      if (subscription) {
        notificationAPI.unsubscribeFromNotifications(subscription)
        setSubscription(null)
      }
    }

    return () => {
      if (subscription) {
        notificationAPI.unsubscribeFromNotifications(subscription)
      }
    }
  }, [user, isAuthenticated])

  // Load notifications from database
  const loadNotifications = async () => {
    if (!user) return

    try {
      setLoading(true)
      const result = await notificationAPI.getForUser(user.id)
      
      if (result.error) {
        console.error('Error loading notifications:', result.error)
        return
      }

      setNotifications(result.data || [])
      
      // Count unread notifications
      const unread = (result.data || []).filter(n => !n.read).length
      setUnreadCount(unread)
    } catch (error) {
      console.error('Error loading notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  // Subscribe to real-time notifications
  const subscribeToNotifications = () => {
    if (!user) return

    const sub = notificationAPI.subscribeToNotifications(
      user.id,
      (payload) => {
        console.log('New notification received:', payload)
        
        if (payload.eventType === 'INSERT') {
          const newNotification = payload.new
          
          // Add to notifications list
          setNotifications(prev => [newNotification, ...prev])
          
          // Update unread count
          setUnreadCount(prev => prev + 1)
          
          // Show toast notification
          toast.success(newNotification.title || 'New notification', {
            duration: 4000,
            icon: '🔔'
          })
        }
      }
    )

    setSubscription(sub)
  }

  // Mark notification as read
  const markAsRead = async (notificationId) => {
    try {
      const result = await notificationAPI.markAsRead(notificationId)
      
      if (result.error) {
        console.error('Error marking notification as read:', result.error)
        return false
      }

      // Update local state
      setNotifications(prev => 
        prev.map(n => 
          n.id === notificationId 
            ? { ...n, read: true, read_at: new Date().toISOString() }
            : n
        )
      )

      // Update unread count
      setUnreadCount(prev => Math.max(0, prev - 1))

      return true
    } catch (error) {
      console.error('Error marking notification as read:', error)
      return false
    }
  }

  // Mark all notifications as read
  const markAllAsRead = async () => {
    if (!user) return false

    try {
      const result = await notificationAPI.markAllAsRead(user.id)
      
      if (result.error) {
        console.error('Error marking all notifications as read:', result.error)
        return false
      }

      // Update local state
      setNotifications(prev => 
        prev.map(n => ({ 
          ...n, 
          read: true, 
          read_at: new Date().toISOString() 
        }))
      )

      setUnreadCount(0)

      return true
    } catch (error) {
      console.error('Error marking all notifications as read:', error)
      return false
    }
  }

  // Delete notification
  const deleteNotification = async (notificationId) => {
    if (!user) return false

    try {
      const result = await notificationAPI.delete(notificationId, user.id)
      
      if (result.error) {
        console.error('Error deleting notification:', result.error)
        return false
      }

      // Update local state
      const notification = notifications.find(n => n.id === notificationId)
      setNotifications(prev => prev.filter(n => n.id !== notificationId))

      // Update unread count if notification was unread
      if (notification && !notification.read) {
        setUnreadCount(prev => Math.max(0, prev - 1))
      }

      return true
    } catch (error) {
      console.error('Error deleting notification:', error)
      return false
    }
  }

  // Create notification (for admin/system use)
  const createNotification = async (notificationData) => {
    try {
      const result = await notificationAPI.create(notificationData)
      
      if (result.error) {
        console.error('Error creating notification:', result.error)
        return false
      }

      return true
    } catch (error) {
      console.error('Error creating notification:', error)
      return false
    }
  }

  // Helper functions for specific notification types
  const createObituaryNotification = async (userId, obituaryId, type, message) => {
    return await notificationAPI.createObituaryNotification(userId, obituaryId, type, message)
  }

  const createCommentNotification = async (userId, obituaryId, commentId, commenterName) => {
    return await notificationAPI.createCommentNotification(userId, obituaryId, commentId, commenterName)
  }

  const createSystemNotification = async (userId, title, message, data = {}) => {
    return await notificationAPI.createSystemNotification(userId, title, message, data)
  }

  const createAdminNotification = async (userId, title, message, data = {}) => {
    return await notificationAPI.createAdminNotification(userId, title, message, data)
  }

  const broadcastToRole = async (role, title, message, data = {}) => {
    return await notificationAPI.broadcastToRole(role, title, message, data)
  }

  // Get notifications by type
  const getNotificationsByType = (type) => {
    return notifications.filter(n => n.type === type)
  }

  // Get recent notifications (last 24 hours)
  const getRecentNotifications = () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    
    return notifications.filter(n => 
      new Date(n.created_at) > yesterday
    )
  }

  // Refresh notifications
  const refresh = async () => {
    await loadNotifications()
  }

  const value = {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    createNotification,
    createObituaryNotification,
    createCommentNotification,
    createSystemNotification,
    createAdminNotification,
    broadcastToRole,
    getNotificationsByType,
    getRecentNotifications,
    refresh,
    loadNotifications
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}
