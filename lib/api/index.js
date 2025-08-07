// Main API exports
export { authAPI } from './auth'
export { obituaryAPI } from './obituary'
export { notificationAPI } from './notifications'
export { activityAPI } from './activity'
export { commentsAPI } from './comments'
export { storageAPI } from './storage'

// Enhanced API client
export { ApiClient, apiClient, adminApiClient } from './client'

// Error handling utilities
export { ErrorHandler, handleError, handleSuccess, withErrorHandling, withRetry, validateForm } from '../utils/errorHandler'

// Re-export Supabase clients
export { supabase, supabaseAdmin } from '../supabase'
export { createClient as createServerClient } from '../supabase-server'
export { createClient as createBrowserClient } from '../supabase-client'

// Helper functions
export const api = {
  auth: authAPI,
  obituary: obituaryAPI,
  notifications: notificationAPI,
  activity: activityAPI,
  comments: commentsAPI,
  storage: storageAPI
}

// Error handling utility
export const handleApiError = (error) => {
  console.error('API Error:', error)
  
  if (error?.message) {
    return error.message
  }
  
  if (typeof error === 'string') {
    return error
  }
  
  return 'An unexpected error occurred'
}

// Success response utility
export const createSuccessResponse = (data, message = 'Success') => ({
  success: true,
  data,
  message,
  error: null
})

// Error response utility
export const createErrorResponse = (error, message = 'An error occurred') => ({
  success: false,
  data: null,
  message,
  error: handleApiError(error)
})

// Pagination utility
export const createPaginationParams = (page = 1, limit = 10) => ({
  page: Math.max(1, parseInt(page)),
  limit: Math.min(100, Math.max(1, parseInt(limit)))
})

// Date range utility
export const createDateRange = (days = 30) => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)
  
  return {
    start: startDate.toISOString(),
    end: endDate.toISOString()
  }
}
