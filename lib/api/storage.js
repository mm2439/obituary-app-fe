import { supabase } from '../supabase'

export const storageAPI = {
  // Upload file to obituary-photos bucket
  uploadFile: async (file, path, options = {}) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: options.upsert || false,
          ...options
        })

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Upload file error:', error)
      return { data: null, error: error.message }
    }
  },

  // Upload multiple files
  uploadFiles: async (files, basePath = '') => {
    try {
      const uploadPromises = files.map(async (file, index) => {
        const fileName = `${Date.now()}_${index}_${file.name}`
        const filePath = basePath ? `${basePath}/${fileName}` : fileName
        
        return await storageAPI.uploadFile(file, filePath)
      })

      const results = await Promise.all(uploadPromises)
      
      const successful = results.filter(result => result.error === null)
      const failed = results.filter(result => result.error !== null)

      return {
        data: {
          successful: successful.map(result => result.data),
          failed: failed.map(result => result.error),
          total: files.length,
          successCount: successful.length,
          failCount: failed.length
        },
        error: failed.length > 0 ? `${failed.length} files failed to upload` : null
      }
    } catch (error) {
      console.error('Upload multiple files error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get public URL for a file
  getPublicUrl: (path) => {
    try {
      const { data } = supabase.storage
        .from('obituary-photos')
        .getPublicUrl(path)

      return { data: data.publicUrl, error: null }
    } catch (error) {
      console.error('Get public URL error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get signed URL for private file access
  getSignedUrl: async (path, expiresIn = 3600) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .createSignedUrl(path, expiresIn)

      if (error) throw error

      return { data: data.signedUrl, error: null }
    } catch (error) {
      console.error('Get signed URL error:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete file
  deleteFile: async (path) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .remove([path])

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Delete file error:', error)
      return { data: null, error: error.message }
    }
  },

  // Delete multiple files
  deleteFiles: async (paths) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .remove(paths)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Delete multiple files error:', error)
      return { data: null, error: error.message }
    }
  },

  // List files in a directory
  listFiles: async (path = '', options = {}) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .list(path, {
          limit: options.limit || 100,
          offset: options.offset || 0,
          sortBy: options.sortBy || { column: 'name', order: 'asc' }
        })

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('List files error:', error)
      return { data: null, error: error.message }
    }
  },

  // Move/rename file
  moveFile: async (fromPath, toPath) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .move(fromPath, toPath)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Move file error:', error)
      return { data: null, error: error.message }
    }
  },

  // Copy file
  copyFile: async (fromPath, toPath) => {
    try {
      const { data, error } = await supabase.storage
        .from('obituary-photos')
        .copy(fromPath, toPath)

      if (error) throw error

      return { data, error: null }
    } catch (error) {
      console.error('Copy file error:', error)
      return { data: null, error: error.message }
    }
  },

  // Helper function to generate unique file path
  generateFilePath: (userId, fileName, subfolder = '') => {
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = fileName.split('.').pop()
    const cleanFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_')
    
    const basePath = subfolder ? `${subfolder}/${userId}` : userId
    return `${basePath}/${timestamp}_${randomString}_${cleanFileName}`
  },

  // Validate file before upload
  validateFile: (file, options = {}) => {
    const maxSize = options.maxSize || 10 * 1024 * 1024 // 10MB default
    const allowedTypes = options.allowedTypes || [
      'image/jpeg',
      'image/jpg',
      'image/png',
      'image/gif',
      'image/webp'
    ]

    const errors = []

    if (file.size > maxSize) {
      errors.push(`File size must be less than ${maxSize / 1024 / 1024}MB`)
    }

    if (!allowedTypes.includes(file.type)) {
      errors.push(`File type must be one of: ${allowedTypes.join(', ')}`)
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  },

  // Compress image before upload
  compressImage: async (file, options = {}) => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()

      img.onload = () => {
        const maxWidth = options.maxWidth || 1920
        const maxHeight = options.maxHeight || 1080
        const quality = options.quality || 0.8

        let { width, height } = img

        // Calculate new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width
            width = maxWidth
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height
            height = maxHeight
          }
        }

        canvas.width = width
        canvas.height = height

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height)
        
        canvas.toBlob(
          (blob) => {
            resolve(new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now()
            }))
          },
          file.type,
          quality
        )
      }

      img.onerror = reject
      img.src = URL.createObjectURL(file)
    })
  },

  // Upload obituary photo with compression and validation
  uploadObituaryPhoto: async (file, obituaryId, userId) => {
    try {
      // Validate file
      const validation = storageAPI.validateFile(file)
      if (!validation.isValid) {
        return { data: null, error: validation.errors.join(', ') }
      }

      // Compress image if it's too large
      let processedFile = file
      if (file.size > 2 * 1024 * 1024) { // 2MB
        processedFile = await storageAPI.compressImage(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.8
        })
      }

      // Generate file path
      const filePath = storageAPI.generateFilePath(
        userId,
        processedFile.name,
        `obituaries/${obituaryId}`
      )

      // Upload file
      const uploadResult = await storageAPI.uploadFile(processedFile, filePath)
      
      if (uploadResult.error) {
        return uploadResult
      }

      // Get public URL
      const urlResult = storageAPI.getPublicUrl(filePath)
      
      return {
        data: {
          path: filePath,
          url: urlResult.data,
          originalSize: file.size,
          compressedSize: processedFile.size,
          fileName: processedFile.name
        },
        error: null
      }
    } catch (error) {
      console.error('Upload obituary photo error:', error)
      return { data: null, error: error.message }
    }
  },

  // Get storage usage statistics
  getStorageStats: async (userId = null) => {
    try {
      const path = userId ? userId : ''
      const { data: files, error } = await storageAPI.listFiles(path, { limit: 1000 })
      
      if (error) throw error

      const stats = {
        totalFiles: files.length,
        totalSize: files.reduce((sum, file) => sum + (file.metadata?.size || 0), 0),
        fileTypes: {},
        oldestFile: null,
        newestFile: null
      }

      files.forEach(file => {
        const extension = file.name.split('.').pop()?.toLowerCase()
        if (extension) {
          stats.fileTypes[extension] = (stats.fileTypes[extension] || 0) + 1
        }

        const fileDate = new Date(file.created_at)
        if (!stats.oldestFile || fileDate < new Date(stats.oldestFile.created_at)) {
          stats.oldestFile = file
        }
        if (!stats.newestFile || fileDate > new Date(stats.newestFile.created_at)) {
          stats.newestFile = file
        }
      })

      return { data: stats, error: null }
    } catch (error) {
      console.error('Get storage stats error:', error)
      return { data: null, error: error.message }
    }
  }
}
