import { supabase, supabaseAdmin } from '../supabase'
import { ErrorHandler } from '../utils/errorHandler'

/**
 * Enhanced API Client
 * Provides consistent API operations with error handling and retry logic
 */
export class ApiClient {
  
  constructor(client = supabase) {
    this.client = client
    this.rateLimiter = ErrorHandler.createRateLimiter(100, 60000) // 100 calls per minute
  }

  // Generic query method with error handling
  async query(operation, context = 'API Query') {
    // Check rate limiting
    if (!this.rateLimiter.canMakeCall()) {
      throw new Error('Rate limit exceeded. Please try again later.')
    }

    // Check connection
    if (!ErrorHandler.checkConnection()) {
      throw new Error('No internet connection. Please check your network.')
    }

    try {
      this.rateLimiter.recordCall()
      const result = await operation()
      
      if (result.error) {
        throw new Error(result.error.message || 'Database operation failed')
      }

      return result
    } catch (error) {
      throw error
    }
  }

  // Select operations
  async select(table, options = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).select(options.select || '*')

      // Apply filters
      if (options.filters) {
        Object.entries(options.filters).forEach(([key, value]) => {
          if (value !== null && value !== undefined) {
            query = query.eq(key, value)
          }
        })
      }

      // Apply search
      if (options.search) {
        Object.entries(options.search).forEach(([columns, term]) => {
          query = query.or(columns.split(',').map(col => `${col}.ilike.%${term}%`).join(','))
        })
      }

      // Apply ordering
      if (options.orderBy) {
        const { column, ascending = true } = options.orderBy
        query = query.order(column, { ascending })
      }

      // Apply pagination
      if (options.pagination) {
        const { page, limit } = options.pagination
        const from = (page - 1) * limit
        const to = from + limit - 1
        query = query.range(from, to)
      }

      // Apply limit
      if (options.limit) {
        query = query.limit(options.limit)
      }

      return await query
    }, `Select from ${table}`)
  }

  // Insert operations
  async insert(table, data, options = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).insert(data)

      if (options.select) {
        query = query.select(options.select)
      }

      if (options.single) {
        query = query.single()
      }

      return await query
    }, `Insert into ${table}`)
  }

  // Update operations
  async update(table, data, filters, options = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).update(data)

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value)
      })

      if (options.select) {
        query = query.select(options.select)
      }

      if (options.single) {
        query = query.single()
      }

      return await query
    }, `Update ${table}`)
  }

  // Delete operations
  async delete(table, filters, options = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).delete()

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        query = query.eq(key, value)
      })

      if (options.select) {
        query = query.select(options.select)
      }

      if (options.single) {
        query = query.single()
      }

      return await query
    }, `Delete from ${table}`)
  }

  // Count operations
  async count(table, filters = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).select('*', { count: 'exact', head: true })

      // Apply filters
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          query = query.eq(key, value)
        }
      })

      return await query
    }, `Count ${table}`)
  }

  // Upsert operations
  async upsert(table, data, options = {}) {
    return await this.query(async () => {
      let query = this.client.from(table).upsert(data)

      if (options.select) {
        query = query.select(options.select)
      }

      if (options.single) {
        query = query.single()
      }

      return await query
    }, `Upsert ${table}`)
  }

  // RPC (Remote Procedure Call) operations
  async rpc(functionName, params = {}) {
    return await this.query(async () => {
      return await this.client.rpc(functionName, params)
    }, `RPC ${functionName}`)
  }

  // Storage operations
  async uploadFile(bucket, path, file, options = {}) {
    return await this.query(async () => {
      return await this.client.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: options.upsert || false,
          ...options
        })
    }, `Upload file to ${bucket}`)
  }

  async downloadFile(bucket, path) {
    return await this.query(async () => {
      return await this.client.storage
        .from(bucket)
        .download(path)
    }, `Download file from ${bucket}`)
  }

  async deleteFile(bucket, paths) {
    return await this.query(async () => {
      return await this.client.storage
        .from(bucket)
        .remove(Array.isArray(paths) ? paths : [paths])
    }, `Delete file from ${bucket}`)
  }

  async getPublicUrl(bucket, path) {
    const { data } = this.client.storage
      .from(bucket)
      .getPublicUrl(path)
    
    return { data: data.publicUrl, error: null }
  }

  async createSignedUrl(bucket, path, expiresIn = 3600) {
    return await this.query(async () => {
      return await this.client.storage
        .from(bucket)
        .createSignedUrl(path, expiresIn)
    }, `Create signed URL for ${bucket}`)
  }

  // Auth operations
  async signUp(email, password, options = {}) {
    return await this.query(async () => {
      return await this.client.auth.signUp({
        email,
        password,
        options
      })
    }, 'Sign up')
  }

  async signIn(email, password) {
    return await this.query(async () => {
      return await this.client.auth.signInWithPassword({
        email,
        password
      })
    }, 'Sign in')
  }

  async signOut() {
    return await this.query(async () => {
      return await this.client.auth.signOut()
    }, 'Sign out')
  }

  async getUser() {
    return await this.query(async () => {
      return await this.client.auth.getUser()
    }, 'Get user')
  }

  async getSession() {
    return await this.query(async () => {
      return await this.client.auth.getSession()
    }, 'Get session')
  }

  async updateUser(attributes) {
    return await this.query(async () => {
      return await this.client.auth.updateUser(attributes)
    }, 'Update user')
  }

  async resetPassword(email, options = {}) {
    return await this.query(async () => {
      return await this.client.auth.resetPasswordForEmail(email, options)
    }, 'Reset password')
  }

  // Real-time subscriptions
  subscribe(table, callback, filters = {}) {
    let channel = this.client.channel(`${table}_changes`)

    const subscription = {
      event: '*',
      schema: 'public',
      table: table
    }

    // Apply filters
    if (Object.keys(filters).length > 0) {
      const filterString = Object.entries(filters)
        .map(([key, value]) => `${key}=eq.${value}`)
        .join(',')
      subscription.filter = filterString
    }

    channel = channel.on('postgres_changes', subscription, callback)

    return channel.subscribe()
  }

  unsubscribe(subscription) {
    if (subscription) {
      this.client.removeChannel(subscription)
    }
  }

  // Batch operations
  async batch(operations) {
    const results = []
    const errors = []

    for (const operation of operations) {
      try {
        const result = await operation()
        results.push(result)
      } catch (error) {
        errors.push(error)
      }
    }

    return {
      results,
      errors,
      success: errors.length === 0
    }
  }

  // Transaction-like operations (using RPC)
  async transaction(operations) {
    try {
      // Start transaction
      await this.rpc('begin_transaction')

      const results = []
      for (const operation of operations) {
        const result = await operation()
        results.push(result)
      }

      // Commit transaction
      await this.rpc('commit_transaction')

      return {
        success: true,
        results
      }
    } catch (error) {
      // Rollback transaction
      try {
        await this.rpc('rollback_transaction')
      } catch (rollbackError) {
        console.error('Rollback failed:', rollbackError)
      }

      throw error
    }
  }

  // Health check
  async healthCheck() {
    try {
      await this.select('profiles', { limit: 1 })
      return { healthy: true, timestamp: new Date().toISOString() }
    } catch (error) {
      return { 
        healthy: false, 
        error: error.message, 
        timestamp: new Date().toISOString() 
      }
    }
  }
}

// Create default instances
export const apiClient = new ApiClient(supabase)
export const adminApiClient = new ApiClient(supabaseAdmin)

export default ApiClient
