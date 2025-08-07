'use client'

import React, { useState, useEffect } from 'react'
import { useActivity } from '@/lib/contexts/ActivityContext'
import { useAuth } from '@/lib/contexts/AuthContext'
import { formatDistanceToNow, format } from 'date-fns'
import { sl } from 'date-fns/locale'

const ActivityLog = ({ 
  entityType = null, 
  entityId = null, 
  limit = 20, 
  showFilters = true,
  showStats = false,
  className = "" 
}) => {
  const { 
    activities, 
    loading, 
    stats,
    loadActivities,
    loadStats,
    getActivitiesForEntity,
    getActivitiesByAction,
    getActivitiesByEntityType,
    getRecentActivities,
    loadMoreActivities,
    getActivityIcon,
    getActivityColor
  } = useActivity()
  
  const { isAdmin } = useAuth()
  const [filteredActivities, setFilteredActivities] = useState([])
  const [entityActivities, setEntityActivities] = useState([])
  const [filter, setFilter] = useState('all')
  const [dateFilter, setDateFilter] = useState('all')
  const [loadingEntity, setLoadingEntity] = useState(false)

  // Load entity-specific activities if entityType and entityId are provided
  useEffect(() => {
    if (entityType && entityId) {
      loadEntityActivities()
    }
  }, [entityType, entityId])

  // Filter activities based on selected filters
  useEffect(() => {
    let filtered = entityType && entityId ? entityActivities : activities

    // Apply action filter
    if (filter !== 'all') {
      filtered = filtered.filter(activity => activity.action === filter)
    }

    // Apply date filter
    if (dateFilter !== 'all') {
      const now = new Date()
      let startDate = new Date()

      switch (dateFilter) {
        case 'today':
          startDate.setHours(0, 0, 0, 0)
          break
        case 'week':
          startDate.setDate(now.getDate() - 7)
          break
        case 'month':
          startDate.setMonth(now.getMonth() - 1)
          break
        default:
          startDate = null
      }

      if (startDate) {
        filtered = filtered.filter(activity => 
          new Date(activity.created_at) >= startDate
        )
      }
    }

    setFilteredActivities(filtered)
  }, [activities, entityActivities, filter, dateFilter])

  // Load stats if requested
  useEffect(() => {
    if (showStats) {
      loadStats()
    }
  }, [showStats])

  const loadEntityActivities = async () => {
    if (!entityType || !entityId) return

    try {
      setLoadingEntity(true)
      const result = await getActivitiesForEntity(entityType, entityId, limit)
      setEntityActivities(result)
    } catch (error) {
      console.error('Error loading entity activities:', error)
    } finally {
      setLoadingEntity(false)
    }
  }

  const getActionLabel = (action) => {
    const labels = {
      create: 'Ustvarjeno',
      update: 'Posodobljeno',
      delete: 'Izbrisano',
      publish: 'Objavljeno',
      login: 'Prijava',
      logout: 'Odjava',
      approve: 'Odobreno',
      reject: 'Zavrnjeno'
    }
    return labels[action] || action
  }

  const getEntityTypeLabel = (entityType) => {
    const labels = {
      obituary: 'Osmrtnica',
      comment: 'Komentar',
      profile: 'Profil',
      auth: 'Avtentikacija',
      user: 'Uporabnik'
    }
    return labels[entityType] || entityType
  }

  const actionOptions = [
    { value: 'all', label: 'Vse aktivnosti' },
    { value: 'create', label: 'Ustvarjeno' },
    { value: 'update', label: 'Posodobljeno' },
    { value: 'delete', label: 'Izbrisano' },
    { value: 'publish', label: 'Objavljeno' },
    { value: 'login', label: 'Prijave' },
    { value: 'logout', label: 'Odjave' }
  ]

  const dateOptions = [
    { value: 'all', label: 'Ves čas' },
    { value: 'today', label: 'Danes' },
    { value: 'week', label: 'Zadnji teden' },
    { value: 'month', label: 'Zadnji mesec' }
  ]

  const isLoading = loading || loadingEntity

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            {entityType && entityId ? 'Zgodovina aktivnosti' : 'Dnevnik aktivnosti'}
          </h3>
          
          {showStats && stats && (
            <div className="text-sm text-gray-500">
              Skupaj: {stats.total} aktivnosti
            </div>
          )}
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Aktivnost
              </label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {actionOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Časovno obdobje
              </label>
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {dateOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Activity List */}
      <div className="max-h-96 overflow-y-auto">
        {isLoading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Nalaganje aktivnosti...</p>
          </div>
        ) : filteredActivities.length === 0 ? (
          <div className="p-6 text-center">
            <div className="text-4xl mb-2">📋</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ni aktivnosti
            </h3>
            <p className="text-gray-500">
              Za izbrane filtre ni najdenih aktivnosti.
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredActivities.map((activity) => (
              <div key={activity.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-3">
                  {/* Activity Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <span className="text-xl">
                      {getActivityIcon(activity)}
                    </span>
                  </div>

                  {/* Activity Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${getActivityColor(activity)}`}>
                          {getActionLabel(activity.action)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {getEntityTypeLabel(activity.entity_type)}
                        </span>
                      </div>
                      
                      <span className="text-xs text-gray-500">
                        {format(new Date(activity.created_at), 'dd.MM.yyyy HH:mm')}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-800 mt-1">
                      {activity.description}
                    </p>

                    {/* User info for admin view */}
                    {isAdmin() && activity.profiles && (
                      <p className="text-xs text-gray-500 mt-1">
                        Uporabnik: {activity.profiles.name || activity.profiles.email}
                        {activity.profiles.role && ` (${activity.profiles.role})`}
                      </p>
                    )}
                    
                    <p className="text-xs text-gray-500 mt-2">
                      {formatDistanceToNow(new Date(activity.created_at), {
                        addSuffix: true,
                        locale: sl
                      })}
                    </p>

                    {/* Metadata */}
                    {activity.metadata && Object.keys(activity.metadata).length > 0 && (
                      <div className="mt-2 text-xs text-gray-500">
                        {Object.entries(activity.metadata).map(([key, value]) => (
                          <span key={key} className="mr-3">
                            {key}: {String(value)}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Load More Button */}
      {!entityType && !entityId && filteredActivities.length > 0 && filteredActivities.length % 50 === 0 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <button
            onClick={loadMoreActivities}
            disabled={loading}
            className="w-full px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors"
          >
            {loading ? 'Nalaganje...' : 'Naloži več'}
          </button>
        </div>
      )}

      {/* Stats Summary */}
      {showStats && stats && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">
                {stats.by_action.create || 0}
              </div>
              <div className="text-xs text-gray-500">Ustvarjeno</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">
                {stats.by_action.update || 0}
              </div>
              <div className="text-xs text-gray-500">Posodobljeno</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {stats.by_action.publish || 0}
              </div>
              <div className="text-xs text-gray-500">Objavljeno</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-600">
                {stats.by_action.login || 0}
              </div>
              <div className="text-xs text-gray-500">Prijav</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ActivityLog
