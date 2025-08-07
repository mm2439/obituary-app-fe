'use client'

import React, { useState, useEffect } from 'react'
import { useNotifications } from '@/lib/contexts/NotificationContext'
import { useAuth } from '@/lib/contexts/AuthContext'
import { formatDistanceToNow, format } from 'date-fns'
import { sl } from 'date-fns/locale'
import { useRouter } from 'next/navigation'

const NotificationsPage = () => {
  const { 
    notifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead, 
    deleteNotification, 
    loading,
    getNotificationsByType 
  } = useNotifications()
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [filter, setFilter] = useState('all')
  const [selectedNotifications, setSelectedNotifications] = useState([])

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/registracija')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated()) {
    return null
  }

  const handleNotificationClick = async (notification) => {
    if (!notification.read) {
      await markAsRead(notification.id)
    }

    // Handle navigation based on notification type
    if (notification.data?.obituary_id) {
      router.push(`/nekrolog/${notification.data.obituary_id}`)
    } else if (notification.data?.comment_id) {
      router.push(`/nekrolog/${notification.data.obituary_id}#comment-${notification.data.comment_id}`)
    }
  }

  const handleSelectNotification = (notificationId) => {
    setSelectedNotifications(prev => 
      prev.includes(notificationId)
        ? prev.filter(id => id !== notificationId)
        : [...prev, notificationId]
    )
  }

  const handleSelectAll = () => {
    if (selectedNotifications.length === filteredNotifications.length) {
      setSelectedNotifications([])
    } else {
      setSelectedNotifications(filteredNotifications.map(n => n.id))
    }
  }

  const handleBulkMarkAsRead = async () => {
    for (const notificationId of selectedNotifications) {
      await markAsRead(notificationId)
    }
    setSelectedNotifications([])
  }

  const handleBulkDelete = async () => {
    for (const notificationId of selectedNotifications) {
      await deleteNotification(notificationId)
    }
    setSelectedNotifications([])
  }

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'comment':
        return '💬'
      case 'obituary':
        return '📝'
      case 'system':
        return '⚙️'
      case 'admin':
        return '👨‍💼'
      default:
        return '🔔'
    }
  }

  const getNotificationColor = (type) => {
    switch (type) {
      case 'comment':
        return 'border-l-blue-500'
      case 'obituary':
        return 'border-l-green-500'
      case 'system':
        return 'border-l-yellow-500'
      case 'admin':
        return 'border-l-red-500'
      default:
        return 'border-l-gray-500'
    }
  }

  // Filter notifications based on selected filter
  const filteredNotifications = filter === 'all' 
    ? notifications 
    : filter === 'unread'
    ? notifications.filter(n => !n.read)
    : getNotificationsByType(filter)

  const notificationTypes = [
    { key: 'all', label: 'Vsa obvestila', count: notifications.length },
    { key: 'unread', label: 'Neprebrana', count: unreadCount },
    { key: 'comment', label: 'Komentarji', count: getNotificationsByType('comment').length },
    { key: 'obituary', label: 'Osmrtnice', count: getNotificationsByType('obituary').length },
    { key: 'system', label: 'Sistem', count: getNotificationsByType('system').length },
    { key: 'admin', label: 'Administracija', count: getNotificationsByType('admin').length },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Obvestila</h1>
          <p className="mt-2 text-gray-600">
            Upravljajte svoja obvestila in ostanite na tekočem z najnovejšimi posodobitvami.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Označi vse kot prebrano ({unreadCount})
                </button>
              )}
              
              {selectedNotifications.length > 0 && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleBulkMarkAsRead}
                    className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    Označi kot prebrano ({selectedNotifications.length})
                  </button>
                  <button
                    onClick={handleBulkDelete}
                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    Izbriši ({selectedNotifications.length})
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedNotifications.length === filteredNotifications.length && filteredNotifications.length > 0}
                  onChange={handleSelectAll}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-700">Izberi vse</span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filtri</h3>
              <nav className="space-y-2">
                {notificationTypes.map((type) => (
                  <button
                    key={type.key}
                    onClick={() => setFilter(type.key)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      filter === type.key
                        ? 'bg-blue-100 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{type.label}</span>
                      {type.count > 0 && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          filter === type.key
                            ? 'bg-blue-200 text-blue-800'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {type.count}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content - Notifications List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              {loading ? (
                <div className="p-8 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                  <p className="mt-4 text-gray-500">Nalaganje obvestil...</p>
                </div>
              ) : filteredNotifications.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="text-6xl mb-4">🔔</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Ni obvestil
                  </h3>
                  <p className="text-gray-500">
                    {filter === 'all' 
                      ? 'Nimate nobenih obvestil.'
                      : `Ni obvestil za filter "${notificationTypes.find(t => t.key === filter)?.label}".`
                    }
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredNotifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 hover:bg-gray-50 transition-colors border-l-4 ${getNotificationColor(notification.type)} ${
                        !notification.read ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        {/* Checkbox */}
                        <input
                          type="checkbox"
                          checked={selectedNotifications.includes(notification.id)}
                          onChange={() => handleSelectNotification(notification.id)}
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />

                        {/* Notification Icon */}
                        <div className="flex-shrink-0 mt-1">
                          <span className="text-2xl">
                            {getNotificationIcon(notification.type)}
                          </span>
                        </div>

                        {/* Notification Content */}
                        <div 
                          className="flex-1 min-w-0 cursor-pointer"
                          onClick={() => handleNotificationClick(notification)}
                        >
                          <div className="flex items-center justify-between">
                            <h4 className={`text-sm font-medium ${
                              !notification.read ? 'text-gray-900' : 'text-gray-700'
                            }`}>
                              {notification.title}
                            </h4>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-gray-500">
                                {format(new Date(notification.created_at), 'dd.MM.yyyy HH:mm')}
                              </span>
                              {!notification.read && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                              )}
                            </div>
                          </div>
                          
                          <p className={`text-sm mt-1 ${
                            !notification.read ? 'text-gray-800' : 'text-gray-600'
                          }`}>
                            {notification.message}
                          </p>
                          
                          <p className="text-xs text-gray-500 mt-2">
                            {formatDistanceToNow(new Date(notification.created_at), {
                              addSuffix: true,
                              locale: sl
                            })}
                          </p>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            deleteNotification(notification.id)
                          }}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Delete notification"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationsPage
