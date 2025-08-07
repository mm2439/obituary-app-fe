'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@/lib/contexts/AuthContext'
import { useActivity } from '@/lib/contexts/ActivityContext'
import { AdminService } from '@/lib/services/adminService'
import ActivityLog from '@/app/components/activity/ActivityLog'
import PendingComments from './PendingComments'

const AdminDashboard = () => {
  const { user, isAdmin } = useAuth()
  const { getRecentActivities } = useActivity()
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [pendingContent, setPendingContent] = useState(null)

  useEffect(() => {
    if (isAdmin()) {
      loadDashboardData()
    }
  }, [isAdmin])

  const loadDashboardData = async () => {
    try {
      setLoading(true)
      
      // Load dashboard statistics
      const statsResult = await AdminService.getDashboardStats()
      if (statsResult.success) {
        setStats(statsResult.data)
      }

      // Load pending content
      const pendingResult = await AdminService.getPendingContent()
      if (pendingResult.success) {
        setPendingContent(pendingResult.data)
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isAdmin()) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🚫</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access the admin panel.</p>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: 'overview', label: 'Pregled', icon: '📊' },
    { id: 'users', label: 'Uporabniki', icon: '👥' },
    { id: 'content', label: 'Vsebina', icon: '📝' },
    { id: 'comments', label: 'Komentarji', icon: '💬' },
    { id: 'activity', label: 'Aktivnost', icon: '📋' },
    { id: 'settings', label: 'Nastavitve', icon: '⚙️' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                Dobrodošli, {user?.profile?.name || user?.email}
              </span>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
                {user?.profile?.name?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {activeTab === 'overview' && (
              <OverviewTab stats={stats} pendingContent={pendingContent} />
            )}
            {activeTab === 'users' && <UsersTab />}
            {activeTab === 'content' && <ContentTab pendingContent={pendingContent} />}
            {activeTab === 'comments' && <PendingComments />}
            {activeTab === 'activity' && (
              <ActivityLog 
                showFilters={true} 
                showStats={true} 
                className="w-full"
              />
            )}
            {activeTab === 'settings' && <SettingsTab />}
          </>
        )}
      </div>
    </div>
  )
}

const OverviewTab = ({ stats, pendingContent }) => {
  if (!stats) return null

  const statCards = [
    {
      title: 'Skupaj uporabnikov',
      value: stats.users.total,
      change: `+${stats.users.new_this_month} ta mesec`,
      icon: '👥',
      color: 'blue'
    },
    {
      title: 'Objavljene osmrtnice',
      value: stats.obituaries.published,
      change: `${stats.obituaries.pending} čaka`,
      icon: '📝',
      color: 'green'
    },
    {
      title: 'Komentarji',
      value: stats.comments.approved,
      change: `${stats.comments.pending} čaka`,
      icon: '💬',
      color: 'purple'
    },
    {
      title: 'Aktivnost danes',
      value: stats.activities.today,
      change: `${stats.activities.total} skupaj`,
      icon: '📊',
      color: 'orange'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center">
              <div className={`p-2 rounded-lg bg-${card.color}-100`}>
                <span className="text-2xl">{card.icon}</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">{card.value}</p>
                <p className="text-xs text-gray-500">{card.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hitre akcije</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-2xl mb-2">📢</div>
            <h4 className="font-medium text-gray-900">Pošlji obvestilo</h4>
            <p className="text-sm text-gray-500">Pošlji obvestilo vsem uporabnikom</p>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-2xl mb-2">📊</div>
            <h4 className="font-medium text-gray-900">Izvozi poročilo</h4>
            <p className="text-sm text-gray-500">Generiraj mesečno poročilo</p>
          </button>
          
          <button className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <div className="text-2xl mb-2">🔧</div>
            <h4 className="font-medium text-gray-900">Sistemske nastavitve</h4>
            <p className="text-sm text-gray-500">Upravljaj sistemske nastavitve</p>
          </button>
        </div>
      </div>

      {/* Pending Content Summary */}
      {pendingContent && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Čaka na pregled</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-yellow-200 rounded-lg p-4 bg-yellow-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Osmrtnice</h4>
                  <p className="text-2xl font-bold text-yellow-600">
                    {pendingContent.obituaries?.length || 0}
                  </p>
                </div>
                <div className="text-3xl">📝</div>
              </div>
            </div>
            
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-gray-900">Komentarji</h4>
                  <p className="text-2xl font-bold text-blue-600">
                    {pendingContent.comments?.length || 0}
                  </p>
                </div>
                <div className="text-3xl">💬</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

const UsersTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upravljanje uporabnikov</h3>
      <p className="text-gray-600">Funkcionalnost upravljanja uporabnikov bo dodana v prihodnji posodobitvi.</p>
    </div>
  )
}

const ContentTab = ({ pendingContent }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Upravljanje vsebine</h3>
        
        {pendingContent?.obituaries?.length > 0 ? (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Osmrtnice za pregled ({pendingContent.obituaries.length})</h4>
            <div className="space-y-3">
              {pendingContent.obituaries.slice(0, 5).map((obituary) => (
                <div key={obituary.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div>
                    <h5 className="font-medium text-gray-900">{obituary.title}</h5>
                    <p className="text-sm text-gray-500">
                      Avtor: {obituary.profiles?.name || obituary.profiles?.email}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors">
                      Odobri
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors">
                      Zavrni
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-600">Ni osmrtnic za pregled.</p>
        )}
      </div>
    </div>
  )
}

const SettingsTab = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sistemske nastavitve</h3>
      <p className="text-gray-600">Sistemske nastavitve bodo dodane v prihodnji posodobitvi.</p>
    </div>
  )
}

export default AdminDashboard
