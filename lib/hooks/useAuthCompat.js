'use client'

import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { redirectToRoleBasedRoute } from '@/utils/navigationUtils'

/**
 * Compatibility hook that provides the same interface as the legacy auth system
 * This allows existing components to work without modification during the transition
 */
export const useAuthCompat = () => {
  const auth = useAuth()
  const router = useRouter()

  // Legacy login function that matches the existing interface
  const login = async (credentials) => {
    try {
      const result = await auth.signIn(credentials.email, credentials.password)
      
      if (result.success && result.data?.user) {
        const user = result.data.user
        const profile = user.profile
        
        // Create legacy user object for backward compatibility
        const legacyUser = {
          id: user.id,
          email: user.email,
          role: profile?.role || 'User',
          slugKey: profile?.slug_key || `user_${Date.now()}`,
          name: profile?.name || '',
          company: profile?.company || '',
          region: profile?.region || '',
          city: profile?.city || ''
        }

        // Store in localStorage for existing components
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(legacyUser))
        }

        return {
          success: true,
          user: legacyUser,
          message: 'Login successful!'
        }
      }

      return {
        success: false,
        error: result.error || 'Login failed'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Login failed'
      }
    }
  }

  // Legacy logout function
  const logout = async () => {
    try {
      await auth.signOut()
      
      // Clear legacy storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        
        // Clear cookies
        document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "slugKey=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Logout failed'
      }
    }
  }

  // Legacy registration function
  const register = async (userData) => {
    try {
      const result = await auth.signUp(userData.email, userData.password, {
        role: userData.role || 'User',
        name: userData.name || '',
        company: userData.company || '',
        region: userData.region || '',
        city: userData.city || ''
      })

      if (result.success) {
        return {
          success: true,
          message: 'Registration successful! Please check your email to verify your account.',
          user: result.data?.user
        }
      }

      return {
        success: false,
        error: result.error || 'Registration failed'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message || 'Registration failed'
      }
    }
  }

  // Legacy user check functions
  const isAuthenticated = () => {
    // Check both Supabase auth and localStorage for backward compatibility
    if (auth.isAuthenticated()) {
      return true
    }
    
    // Fallback to localStorage check
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      return !!user
    }
    
    return false
  }

  const getUser = () => {
    // Try Supabase first
    if (auth.user && auth.profile) {
      return {
        id: auth.user.id,
        email: auth.user.email,
        role: auth.profile.role,
        slugKey: auth.profile.slug_key,
        name: auth.profile.name,
        company: auth.profile.company,
        region: auth.profile.region,
        city: auth.profile.city
      }
    }

    // Fallback to localStorage
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user')
      return user ? JSON.parse(user) : null
    }

    return null
  }

  // Legacy navigation helper
  const handleSuccessfulLogin = (user) => {
    if (user && user.role && user.slugKey) {
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 758
      redirectToRoleBasedRoute(user.role, user.slugKey, isDesktop)
    }
  }

  // Legacy auth service interface
  const authService = {
    login: async (credentials) => {
      const result = await login(credentials)
      if (result.success) {
        return {
          user: result.user,
          message: result.message
        }
      } else {
        return {
          error: result.error
        }
      }
    },
    logout
  }

  return {
    // New Supabase auth methods
    ...auth,
    
    // Legacy compatibility methods
    login,
    logout,
    register,
    isAuthenticated,
    getUser,
    handleSuccessfulLogin,
    authService,
    
    // Helper methods
    clearClientSideAuth: () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
        
        // Clear cookies
        const isProd = window.location.hostname.includes("osmrtnica.com")
        
        document.cookie = "accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        document.cookie = "slugKey=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        
        if (isProd) {
          document.cookie = "accessToken=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT"
          document.cookie = "role=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT"
          document.cookie = "slugKey=; path=/; domain=.osmrtnica.com; secure; sameSite=None; expires=Thu, 01 Jan 1970 00:00:00 GMT"
        }
      }
    },

    // Role checking helpers
    hasRole: (role) => {
      const user = getUser()
      return user?.role === role
    },

    isUserRole: () => {
      const user = getUser()
      return user?.role === 'User'
    },

    isAdminRole: () => {
      const user = getUser()
      return user?.role === 'Admin' || user?.role === 'SUPERADMIN'
    },

    isFuneralRole: () => {
      const user = getUser()
      return user?.role === 'Funeral'
    },

    isFloristRole: () => {
      const user = getUser()
      return user?.role === 'Florist'
    }
  }
}
