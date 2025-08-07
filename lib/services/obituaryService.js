import { obituaryAPI, storageAPI, activityAPI } from '../api'
import { NotificationService } from './notificationService'

/**
 * Enhanced Obituary Service
 * Integrates Supabase with existing obituary functionality
 */
export class ObituaryService {
  
  // Create new obituary with Supabase integration
  static async createObituary(obituaryData, userId) {
    try {
      // Handle file uploads first if present
      let pictureUrl = null
      let deathReportUrl = null

      if (obituaryData.picture) {
        const pictureResult = await storageAPI.uploadObituaryPhoto(
          obituaryData.picture,
          `temp_${Date.now()}`, // Temporary ID, will be updated after obituary creation
          userId
        )
        
        if (pictureResult.error) {
          throw new Error(`Picture upload failed: ${pictureResult.error}`)
        }
        
        pictureUrl = pictureResult.data.url
      }

      if (obituaryData.deathReport) {
        const reportPath = storageAPI.generateFilePath(
          userId,
          obituaryData.deathReport.name,
          'death-reports'
        )
        
        const reportResult = await storageAPI.uploadFile(
          obituaryData.deathReport,
          reportPath
        )
        
        if (reportResult.error) {
          throw new Error(`Death report upload failed: ${reportResult.error}`)
        }
        
        deathReportUrl = storageAPI.getPublicUrl(reportPath).data
      }

      // Prepare obituary data for Supabase
      const supabaseData = {
        title: obituaryData.title || `${obituaryData.name} ${obituaryData.sirName}`,
        name: obituaryData.name,
        sir_name: obituaryData.sirName,
        birth_date: obituaryData.birthDate,
        death_date: obituaryData.deathDate,
        birth_place: obituaryData.birthPlace,
        death_place: obituaryData.deathPlace,
        residence: obituaryData.residence,
        obituary_text: obituaryData.obituary || obituaryData.obituaryText,
        funeral_date: obituaryData.funeralDate,
        funeral_time: obituaryData.funeralTime,
        funeral_location: obituaryData.funeralLocation,
        cemetery: obituaryData.cemetery,
        city: obituaryData.city,
        region: obituaryData.region,
        picture_url: pictureUrl,
        death_report_url: deathReportUrl,
        death_report_exists: obituaryData.deathReportExists || false,
        events: obituaryData.events ? JSON.stringify(obituaryData.events) : null,
        status: 'draft',
        visits: 0
      }

      // Create obituary in Supabase
      const result = await obituaryAPI.create(supabaseData, userId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      const obituary = result.data

      // Update file paths with actual obituary ID if files were uploaded
      if (pictureUrl) {
        const newPicturePath = storageAPI.generateFilePath(
          userId,
          obituaryData.picture.name,
          `obituaries/${obituary.id}`
        )
        
        await storageAPI.moveFile(
          pictureResult.data.path,
          newPicturePath
        )
        
        // Update obituary with new picture URL
        await obituaryAPI.update(obituary.id, {
          picture_url: storageAPI.getPublicUrl(newPicturePath).data
        }, userId)
      }

      // Log activity
      await activityAPI.logObituaryCreate(userId, obituary.id, obituary.title)

      // Send notification
      await NotificationService.notifyObituaryCreated(obituary, userId)

      return {
        success: true,
        data: obituary,
        message: 'Obituary created successfully!'
      }
    } catch (error) {
      console.error('Create obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to create obituary'
      }
    }
  }

  // Update existing obituary
  static async updateObituary(obituaryId, obituaryData, userId) {
    try {
      // Get existing obituary
      const existingResult = await obituaryAPI.getById(obituaryId)
      if (existingResult.error) {
        throw new Error('Obituary not found')
      }

      const existingObituary = existingResult.data

      // Handle file uploads
      let pictureUrl = existingObituary.picture_url
      let deathReportUrl = existingObituary.death_report_url

      if (obituaryData.picture) {
        const pictureResult = await storageAPI.uploadObituaryPhoto(
          obituaryData.picture,
          obituaryId,
          userId
        )
        
        if (pictureResult.error) {
          throw new Error(`Picture upload failed: ${pictureResult.error}`)
        }
        
        pictureUrl = pictureResult.data.url

        // Delete old picture if exists
        if (existingObituary.picture_url) {
          // Extract path from URL and delete
          const oldPath = existingObituary.picture_url.split('/').pop()
          if (oldPath) {
            await storageAPI.deleteFile(oldPath)
          }
        }
      }

      if (obituaryData.deathReport) {
        const reportPath = storageAPI.generateFilePath(
          userId,
          obituaryData.deathReport.name,
          `obituaries/${obituaryId}/death-reports`
        )
        
        const reportResult = await storageAPI.uploadFile(
          obituaryData.deathReport,
          reportPath
        )
        
        if (reportResult.error) {
          throw new Error(`Death report upload failed: ${reportResult.error}`)
        }
        
        deathReportUrl = storageAPI.getPublicUrl(reportPath).data
      }

      // Prepare update data
      const updateData = {
        title: obituaryData.title || `${obituaryData.name} ${obituaryData.sirName}`,
        name: obituaryData.name,
        sir_name: obituaryData.sirName,
        birth_date: obituaryData.birthDate,
        death_date: obituaryData.deathDate,
        birth_place: obituaryData.birthPlace,
        death_place: obituaryData.deathPlace,
        residence: obituaryData.residence,
        obituary_text: obituaryData.obituary || obituaryData.obituaryText,
        funeral_date: obituaryData.funeralDate,
        funeral_time: obituaryData.funeralTime,
        funeral_location: obituaryData.funeralLocation,
        cemetery: obituaryData.cemetery,
        city: obituaryData.city,
        region: obituaryData.region,
        picture_url: pictureUrl,
        death_report_url: deathReportUrl,
        death_report_exists: obituaryData.deathReportExists || false,
        events: obituaryData.events ? JSON.stringify(obituaryData.events) : null
      }

      // Update obituary in Supabase
      const result = await obituaryAPI.update(obituaryId, updateData, userId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      // Log activity
      await activityAPI.logObituaryUpdate(userId, obituaryId, result.data.title)

      return {
        success: true,
        data: result.data,
        message: 'Obituary updated successfully!'
      }
    } catch (error) {
      console.error('Update obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to update obituary'
      }
    }
  }

  // Get obituary by ID or slug
  static async getObituary(identifier, isSlug = false) {
    try {
      let result
      if (isSlug) {
        result = await obituaryAPI.getBySlugKey(identifier)
      } else {
        result = await obituaryAPI.getById(identifier)
      }
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        success: true,
        data: result.data
      }
    } catch (error) {
      console.error('Get obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get obituary'
      }
    }
  }

  // Get all obituaries with filters
  static async getObituaries(filters = {}) {
    try {
      const result = await obituaryAPI.getAll(filters)
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        success: true,
        data: result.data || []
      }
    } catch (error) {
      console.error('Get obituaries error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get obituaries'
      }
    }
  }

  // Publish obituary
  static async publishObituary(obituaryId, userId) {
    try {
      const result = await obituaryAPI.publish(obituaryId, userId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      // Log activity
      await activityAPI.logObituaryPublish(userId, obituaryId, result.data.title)

      // Send notification
      await NotificationService.notifyObituaryPublished(result.data, userId)

      return {
        success: true,
        data: result.data,
        message: 'Obituary published successfully!'
      }
    } catch (error) {
      console.error('Publish obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to publish obituary'
      }
    }
  }

  // Delete obituary
  static async deleteObituary(obituaryId, userId) {
    try {
      // Get obituary first to get file URLs
      const obituaryResult = await obituaryAPI.getById(obituaryId)
      if (obituaryResult.data) {
        const obituary = obituaryResult.data

        // Delete associated files
        if (obituary.picture_url) {
          const picturePath = obituary.picture_url.split('/').pop()
          if (picturePath) {
            await storageAPI.deleteFile(picturePath)
          }
        }

        if (obituary.death_report_url) {
          const reportPath = obituary.death_report_url.split('/').pop()
          if (reportPath) {
            await storageAPI.deleteFile(reportPath)
          }
        }
      }

      const result = await obituaryAPI.delete(obituaryId, userId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      // Log activity
      await activityAPI.logObituaryDelete(userId, obituaryId, result.data.title)

      return {
        success: true,
        data: result.data,
        message: 'Obituary deleted successfully!'
      }
    } catch (error) {
      console.error('Delete obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to delete obituary'
      }
    }
  }

  // Admin functions
  static async getPendingObituaries() {
    try {
      const result = await obituaryAPI.getPending()
      
      if (result.error) {
        throw new Error(result.error)
      }

      return {
        success: true,
        data: result.data || []
      }
    } catch (error) {
      console.error('Get pending obituaries error:', error)
      return {
        success: false,
        error: error.message || 'Failed to get pending obituaries'
      }
    }
  }

  static async approveObituary(obituaryId, adminUserId) {
    try {
      const result = await obituaryAPI.approve(obituaryId, adminUserId)
      
      if (result.error) {
        throw new Error(result.error)
      }

      // Send notification to obituary owner
      await NotificationService.notifyObituaryApproved(result.data, result.data.user_id)

      return {
        success: true,
        data: result.data,
        message: 'Obituary approved successfully!'
      }
    } catch (error) {
      console.error('Approve obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to approve obituary'
      }
    }
  }

  static async rejectObituary(obituaryId, adminUserId, reason = '') {
    try {
      const result = await obituaryAPI.reject(obituaryId, adminUserId, reason)
      
      if (result.error) {
        throw new Error(result.error)
      }

      // Send notification to obituary owner
      await NotificationService.notifyObituaryRejected(result.data, result.data.user_id, reason)

      return {
        success: true,
        data: result.data,
        message: 'Obituary rejected successfully!'
      }
    } catch (error) {
      console.error('Reject obituary error:', error)
      return {
        success: false,
        error: error.message || 'Failed to reject obituary'
      }
    }
  }
}

export default ObituaryService
