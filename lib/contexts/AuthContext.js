'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { createBrowserClient } from '@supabase/ssr'
import { authAPI, activityAPI } from '../api'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const AuthContext = createContext({})

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)
  const router = useRouter()

  // Create Supabase client
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  // Initialize auth state
  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        // Get initial session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error getting session:', error)
          return
        }

        if (session?.user && mounted) {
          await handleUserSession(session.user)
        }
      } catch (error) {
        console.error('Error initializing auth:', error)
      } finally {
        if (mounted) {
          setLoading(false)
          setInitialized(true)
        }
      }
    }

    initializeAuth()

    return () => {
      mounted = false
    }
  }, [])

  // Listen for auth changes
  useEffect(() => {
    if (!initialized) return

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event, session?.user?.id)

        if (event === 'SIGNED_IN' && session?.user) {
          await handleUserSession(session.user)
          
          // Log login activity
          await activityAPI.logLogin(session.user.id)
          
        } else if (event === 'SIGNED_OUT') {
          await handleSignOut()
        } else if (event === 'TOKEN_REFRESHED' && session?.user) {
          await handleUserSession(session.user)
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [initialized])

  // Handle user session
  const handleUserSession = async (user) => {
    try {
      setUser(user)

      // Get user profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        setProfile(null)
      } else {
        setProfile(profileData)
        
        // Update localStorage for backward compatibility
        const legacyUser = {
          id: user.id,
          email: user.email,
          role: profileData.role,
          slugKey: profileData.slug_key,
          name: profileData.name,
          company: profileData.company,
          region: profileData.region,
          city: profileData.city
        }
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('user', JSON.stringify(legacyUser))
        }
      }
    } catch (error) {
      console.error('Error handling user session:', error)
    }
  }

  // Handle sign out
  const handleSignOut = async () => {
    try {
      // Log logout activity if user exists
      if (user) {
        await activityAPI.logLogout(user.id)
      }

      setUser(null)
      setProfile(null)

      // Clear localStorage for backward compatibility
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
        localStorage.removeItem('access-token')
        localStorage.removeItem('refresh-token')
      }
    } catch (error) {
      console.error('Error handling sign out:', error)
    }
  }

  // Sign up function
  const signUp = async (email, password, userData = {}) => {
    try {
      setLoading(true)
      const result = await authAPI.signUp(email, password, userData)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Registration successful! Please check your email to verify your account.')
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error.message || 'Registration failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Sign in function
  const signIn = async (email, password) => {
    try {
      setLoading(true)
      const result = await authAPI.signIn(email, password)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Login successful!')
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error.message || 'Login failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Sign out function
  const signOut = async () => {
    try {
      setLoading(true)
      const result = await authAPI.signOut()
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Logged out successfully!')
      router.push('/')
      return { success: true }
    } catch (error) {
      const errorMessage = error.message || 'Logout failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Update profile function
  const updateProfile = async (profileData) => {
    try {
      if (!user) {
        throw new Error('No user logged in')
      }

      setLoading(true)
      const result = await authAPI.updateProfile(user.id, profileData)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Update local state
      setProfile(result.data)
      
      // Update localStorage for backward compatibility
      const legacyUser = {
        id: user.id,
        email: user.email,
        role: result.data.role,
        slugKey: result.data.slug_key,
        name: result.data.name,
        company: result.data.company,
        region: result.data.region,
        city: result.data.city
      }
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(legacyUser))
      }

      // Log activity
      await activityAPI.logProfileUpdate(user.id)

      toast.success('Profile updated successfully!')
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error.message || 'Profile update failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Reset password function
  const resetPassword = async (email) => {
    try {
      setLoading(true)
      const result = await authAPI.resetPassword(email)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Password reset email sent!')
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error.message || 'Password reset failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Update password function
  const updatePassword = async (newPassword) => {
    try {
      if (!user) {
        throw new Error('No user logged in')
      }

      setLoading(true)
      const result = await authAPI.updatePassword(newPassword)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Log activity
      await activityAPI.logPasswordChange(user.id)

      toast.success('Password updated successfully!')
      return { success: true, data: result.data }
    } catch (error) {
      const errorMessage = error.message || 'Password update failed'
      toast.error(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  // Helper functions
  const isAuthenticated = () => !!user
  const isAdmin = () => profile?.role === 'Admin' || profile?.role === 'SUPERADMIN'
  const isUser = () => profile?.role === 'User'
  const isFuneral = () => profile?.role === 'Funeral'
  const isFlorist = () => profile?.role === 'Florist'

  const value = {
    user,
    profile,
    loading,
    initialized,
    signUp,
    signIn,
    signOut,
    updateProfile,
    resetPassword,
    updatePassword,
    isAuthenticated,
    isAdmin,
    isUser,
    isFuneral,
    isFlorist,
    supabase
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
