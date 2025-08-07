import toast from 'react-hot-toast'

/**
 * Comprehensive Error Handler
 * Provides consistent error handling across the application
 */
export class ErrorHandler {
  
  // Error types
  static ERROR_TYPES = {
    NETWORK: 'network',
    AUTH: 'auth',
    VALIDATION: 'validation',
    PERMISSION: 'permission',
    NOT_FOUND: 'not_found',
    SERVER: 'server',
    CLIENT: 'client',
    UNKNOWN: 'unknown'
  }

  // Determine error type from error object
  static getErrorType(error) {
    if (!error) return this.ERROR_TYPES.UNKNOWN

    // Network errors
    if (error.name === 'NetworkError' || error.message?.includes('fetch')) {
      return this.ERROR_TYPES.NETWORK
    }

    // Auth errors
    if (error.message?.includes('auth') || error.status === 401) {
      return this.ERROR_TYPES.AUTH
    }

    // Permission errors
    if (error.status === 403) {
      return this.ERROR_TYPES.PERMISSION
    }

    // Not found errors
    if (error.status === 404) {
      return this.ERROR_TYPES.NOT_FOUND
    }

    // Validation errors
    if (error.status === 400 || error.message?.includes('validation')) {
      return this.ERROR_TYPES.VALIDATION
    }

    // Server errors
    if (error.status >= 500) {
      return this.ERROR_TYPES.SERVER
    }

    // Client errors
    if (error.status >= 400 && error.status < 500) {
      return this.ERROR_TYPES.CLIENT
    }

    return this.ERROR_TYPES.UNKNOWN
  }

  // Get user-friendly error message
  static getUserMessage(error, context = '') {
    const errorType = this.getErrorType(error)
    const contextPrefix = context ? `${context}: ` : ''

    switch (errorType) {
      case this.ERROR_TYPES.NETWORK:
        return `${contextPrefix}Preverite internetno povezavo in poskusite znova.`
      
      case this.ERROR_TYPES.AUTH:
        return `${contextPrefix}Prosimo, prijavite se ponovno.`
      
      case this.ERROR_TYPES.PERMISSION:
        return `${contextPrefix}Nimate dovoljenja za to dejanje.`
      
      case this.ERROR_TYPES.NOT_FOUND:
        return `${contextPrefix}Zahtevani vir ni bil najden.`
      
      case this.ERROR_TYPES.VALIDATION:
        return error.message || `${contextPrefix}Prosimo, preverite vnesene podatke.`
      
      case this.ERROR_TYPES.SERVER:
        return `${contextPrefix}Prišlo je do napake na strežniku. Poskusite znova.`
      
      case this.ERROR_TYPES.CLIENT:
        return error.message || `${contextPrefix}Prišlo je do napake. Poskusite znova.`
      
      default:
        return error.message || `${contextPrefix}Prišlo je do nepričakovane napake.`
    }
  }

  // Handle error with toast notification
  static handleError(error, context = '', showToast = true) {
    const userMessage = this.getUserMessage(error, context)
    
    // Log error for debugging
    console.error(`Error in ${context}:`, error)
    
    // Show toast notification
    if (showToast) {
      toast.error(userMessage)
    }

    // Return structured error object
    return {
      type: this.getErrorType(error),
      message: userMessage,
      originalError: error,
      context: context,
      timestamp: new Date().toISOString()
    }
  }

  // Handle success with toast notification
  static handleSuccess(message, showToast = true) {
    if (showToast) {
      toast.success(message)
    }

    return {
      success: true,
      message: message,
      timestamp: new Date().toISOString()
    }
  }

  // Async error wrapper
  static async withErrorHandling(asyncFunction, context = '', showToast = true) {
    try {
      const result = await asyncFunction()
      return { success: true, data: result, error: null }
    } catch (error) {
      const handledError = this.handleError(error, context, showToast)
      return { success: false, data: null, error: handledError }
    }
  }

  // Retry mechanism
  static async withRetry(asyncFunction, maxRetries = 3, delay = 1000, context = '') {
    let lastError = null

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const result = await asyncFunction()
        return { success: true, data: result, error: null }
      } catch (error) {
        lastError = error
        
        if (attempt === maxRetries) {
          break
        }

        // Don't retry auth or permission errors
        const errorType = this.getErrorType(error)
        if (errorType === this.ERROR_TYPES.AUTH || errorType === this.ERROR_TYPES.PERMISSION) {
          break
        }

        // Wait before retrying
        await new Promise(resolve => setTimeout(resolve, delay * attempt))
      }
    }

    const handledError = this.handleError(lastError, `${context} (after ${maxRetries} attempts)`)
    return { success: false, data: null, error: handledError }
  }

  // Validation helpers
  static validateRequired(value, fieldName) {
    if (!value || (typeof value === 'string' && !value.trim())) {
      throw new Error(`${fieldName} je obvezen.`)
    }
  }

  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw new Error('Prosimo, vnesite veljaven e-mail naslov.')
    }
  }

  static validatePassword(password, minLength = 6) {
    if (password.length < minLength) {
      throw new Error(`Geslo mora imeti vsaj ${minLength} znakov.`)
    }
  }

  static validateFileSize(file, maxSizeInMB = 10) {
    const maxSizeInBytes = maxSizeInMB * 1024 * 1024
    if (file.size > maxSizeInBytes) {
      throw new Error(`Datoteka je prevelika. Največja dovoljena velikost je ${maxSizeInMB}MB.`)
    }
  }

  static validateFileType(file, allowedTypes = []) {
    if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
      throw new Error(`Nepodprt tip datoteke. Dovoljeni tipi: ${allowedTypes.join(', ')}`)
    }
  }

  // Form validation
  static validateForm(data, rules) {
    const errors = {}

    Object.keys(rules).forEach(field => {
      const rule = rules[field]
      const value = data[field]

      try {
        if (rule.required) {
          this.validateRequired(value, rule.label || field)
        }

        if (value && rule.type === 'email') {
          this.validateEmail(value)
        }

        if (value && rule.type === 'password') {
          this.validatePassword(value, rule.minLength)
        }

        if (value && rule.minLength && value.length < rule.minLength) {
          throw new Error(`${rule.label || field} mora imeti vsaj ${rule.minLength} znakov.`)
        }

        if (value && rule.maxLength && value.length > rule.maxLength) {
          throw new Error(`${rule.label || field} lahko ima največ ${rule.maxLength} znakov.`)
        }

        if (value && rule.pattern && !rule.pattern.test(value)) {
          throw new Error(rule.patternMessage || `${rule.label || field} ni v pravilni obliki.`)
        }

        if (rule.custom && typeof rule.custom === 'function') {
          rule.custom(value)
        }
      } catch (error) {
        errors[field] = error.message
      }
    })

    if (Object.keys(errors).length > 0) {
      const errorMessage = Object.values(errors)[0] // Show first error
      throw new Error(errorMessage)
    }

    return true
  }

  // Loading state manager
  static createLoadingManager() {
    const loadingStates = new Map()

    return {
      setLoading: (key, isLoading) => {
        loadingStates.set(key, isLoading)
      },
      
      isLoading: (key) => {
        return loadingStates.get(key) || false
      },
      
      isAnyLoading: () => {
        return Array.from(loadingStates.values()).some(loading => loading)
      },
      
      clearAll: () => {
        loadingStates.clear()
      }
    }
  }

  // API response wrapper
  static wrapApiResponse(data, message = null) {
    return {
      success: true,
      data: data,
      message: message,
      timestamp: new Date().toISOString()
    }
  }

  static wrapApiError(error, context = '') {
    return {
      success: false,
      data: null,
      error: this.handleError(error, context, false),
      timestamp: new Date().toISOString()
    }
  }

  // Debounce utility for API calls
  static debounce(func, wait) {
    let timeout
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout)
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  // Rate limiting
  static createRateLimiter(maxCalls = 10, timeWindow = 60000) {
    const calls = []

    return {
      canMakeCall: () => {
        const now = Date.now()
        const validCalls = calls.filter(callTime => now - callTime < timeWindow)
        calls.length = 0
        calls.push(...validCalls)
        
        return validCalls.length < maxCalls
      },
      
      recordCall: () => {
        calls.push(Date.now())
      }
    }
  }

  // Connection status checker
  static checkConnection() {
    return navigator.onLine
  }

  static onConnectionChange(callback) {
    window.addEventListener('online', () => callback(true))
    window.addEventListener('offline', () => callback(false))
  }
}

// Export convenience functions
export const handleError = ErrorHandler.handleError.bind(ErrorHandler)
export const handleSuccess = ErrorHandler.handleSuccess.bind(ErrorHandler)
export const withErrorHandling = ErrorHandler.withErrorHandling.bind(ErrorHandler)
export const withRetry = ErrorHandler.withRetry.bind(ErrorHandler)
export const validateForm = ErrorHandler.validateForm.bind(ErrorHandler)

export default ErrorHandler
