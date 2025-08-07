import { notificationAPI } from '../api'

/**
 * Notification Service
 * Centralized service for creating and managing notifications throughout the application
 */
export class NotificationService {
  
  // Obituary-related notifications
  static async notifyObituaryCreated(obituaryData, userId) {
    try {
      await notificationAPI.createObituaryNotification(
        userId,
        obituaryData.id,
        'obituary_created',
        `Vaša osmrtnica "${obituaryData.title}" je bila uspešno ustvarjena.`
      )
    } catch (error) {
      console.error('Error creating obituary created notification:', error)
    }
  }

  static async notifyObituaryPublished(obituaryData, userId) {
    try {
      await notificationAPI.createObituaryNotification(
        userId,
        obituaryData.id,
        'obituary_published',
        `Vaša osmrtnica "${obituaryData.title}" je bila objavljena.`
      )
    } catch (error) {
      console.error('Error creating obituary published notification:', error)
    }
  }

  static async notifyObituaryApproved(obituaryData, userId) {
    try {
      await notificationAPI.createObituaryNotification(
        userId,
        obituaryData.id,
        'obituary_approved',
        `Vaša osmrtnica "${obituaryData.title}" je bila odobrena in objavljena.`
      )
    } catch (error) {
      console.error('Error creating obituary approved notification:', error)
    }
  }

  static async notifyObituaryRejected(obituaryData, userId, reason = '') {
    try {
      const message = reason 
        ? `Vaša osmrtnica "${obituaryData.title}" je bila zavrnjena. Razlog: ${reason}`
        : `Vaša osmrtnica "${obituaryData.title}" je bila zavrnjena.`
      
      await notificationAPI.createObituaryNotification(
        userId,
        obituaryData.id,
        'obituary_rejected',
        message
      )
    } catch (error) {
      console.error('Error creating obituary rejected notification:', error)
    }
  }

  static async notifyObituaryExpiring(obituaryData, userId, daysLeft) {
    try {
      await notificationAPI.createObituaryNotification(
        userId,
        obituaryData.id,
        'obituary_expiring',
        `Vaša osmrtnica "${obituaryData.title}" bo potekla čez ${daysLeft} dni.`
      )
    } catch (error) {
      console.error('Error creating obituary expiring notification:', error)
    }
  }

  // Comment-related notifications
  static async notifyNewComment(obituaryData, commentData, obituaryOwnerId) {
    try {
      await notificationAPI.createCommentNotification(
        obituaryOwnerId,
        obituaryData.id,
        commentData.id,
        commentData.author_name
      )
    } catch (error) {
      console.error('Error creating new comment notification:', error)
    }
  }

  static async notifyCommentApproved(commentData, userId) {
    try {
      await notificationAPI.create({
        user_id: userId,
        type: 'comment',
        title: 'Komentar odobren',
        message: 'Vaš komentar je bil odobren in objavljen.',
        data: { 
          comment_id: commentData.id,
          obituary_id: commentData.obituary_id 
        },
        read: false
      })
    } catch (error) {
      console.error('Error creating comment approved notification:', error)
    }
  }

  static async notifyCommentRejected(commentData, userId, reason = '') {
    try {
      const message = reason 
        ? `Vaš komentar je bil zavrnjen. Razlog: ${reason}`
        : 'Vaš komentar je bil zavrnjen.'
      
      await notificationAPI.create({
        user_id: userId,
        type: 'comment',
        title: 'Komentar zavrnjen',
        message: message,
        data: { 
          comment_id: commentData.id,
          obituary_id: commentData.obituary_id 
        },
        read: false
      })
    } catch (error) {
      console.error('Error creating comment rejected notification:', error)
    }
  }

  // System notifications
  static async notifySystemMaintenance(userId, maintenanceDate, duration) {
    try {
      await notificationAPI.createSystemNotification(
        userId,
        'Sistemsko vzdrževanje',
        `Sistem bo v vzdrževanju ${maintenanceDate} za približno ${duration}. Prosimo za razumevanje.`,
        { maintenance_date: maintenanceDate, duration: duration }
      )
    } catch (error) {
      console.error('Error creating system maintenance notification:', error)
    }
  }

  static async notifySystemUpdate(userId, updateDetails) {
    try {
      await notificationAPI.createSystemNotification(
        userId,
        'Posodobitev sistema',
        `Sistem je bil posodobljen z novimi funkcionalnostmi: ${updateDetails}`,
        { update_details: updateDetails }
      )
    } catch (error) {
      console.error('Error creating system update notification:', error)
    }
  }

  static async notifyPasswordChanged(userId) {
    try {
      await notificationAPI.createSystemNotification(
        userId,
        'Geslo spremenjeno',
        'Vaše geslo je bilo uspešno spremenjeno. Če to niste bili vi, se takoj obrnite na podporo.',
        { security_alert: true }
      )
    } catch (error) {
      console.error('Error creating password changed notification:', error)
    }
  }

  static async notifyProfileUpdated(userId) {
    try {
      await notificationAPI.createSystemNotification(
        userId,
        'Profil posodobljen',
        'Vaš profil je bil uspešno posodobljen.',
        {}
      )
    } catch (error) {
      console.error('Error creating profile updated notification:', error)
    }
  }

  // Admin notifications
  static async notifyAdminNewUser(adminUserId, newUserData) {
    try {
      await notificationAPI.createAdminNotification(
        adminUserId,
        'Nov uporabnik',
        `Nov uporabnik se je registriral: ${newUserData.email} (${newUserData.role})`,
        { user_id: newUserData.id, user_email: newUserData.email }
      )
    } catch (error) {
      console.error('Error creating admin new user notification:', error)
    }
  }

  static async notifyAdminNewObituary(adminUserId, obituaryData, userData) {
    try {
      await notificationAPI.createAdminNotification(
        adminUserId,
        'Nova osmrtnica za pregled',
        `${userData.name || userData.email} je ustvaril novo osmrtnico "${obituaryData.title}" za pregled.`,
        { obituary_id: obituaryData.id, user_id: userData.id }
      )
    } catch (error) {
      console.error('Error creating admin new obituary notification:', error)
    }
  }

  static async notifyAdminNewComment(adminUserId, commentData, obituaryData) {
    try {
      await notificationAPI.createAdminNotification(
        adminUserId,
        'Nov komentar za pregled',
        `Nov komentar od ${commentData.author_name} na osmrtnici "${obituaryData.title}" čaka na pregled.`,
        { 
          comment_id: commentData.id, 
          obituary_id: obituaryData.id,
          author_name: commentData.author_name 
        }
      )
    } catch (error) {
      console.error('Error creating admin new comment notification:', error)
    }
  }

  // Broadcast notifications
  static async broadcastToAllUsers(title, message, data = {}) {
    try {
      await notificationAPI.broadcastToRole('User', title, message, data)
      await notificationAPI.broadcastToRole('Funeral', title, message, data)
      await notificationAPI.broadcastToRole('Florist', title, message, data)
    } catch (error) {
      console.error('Error broadcasting to all users:', error)
    }
  }

  static async broadcastToRole(role, title, message, data = {}) {
    try {
      await notificationAPI.broadcastToRole(role, title, message, data)
    } catch (error) {
      console.error(`Error broadcasting to role ${role}:`, error)
    }
  }

  static async broadcastMaintenanceNotice(maintenanceDate, duration) {
    try {
      await this.broadcastToAllUsers(
        'Sistemsko vzdrževanje',
        `Sistem bo v vzdrževanju ${maintenanceDate} za približno ${duration}. Prosimo za razumevanje.`,
        { 
          type: 'maintenance',
          maintenance_date: maintenanceDate, 
          duration: duration 
        }
      )
    } catch (error) {
      console.error('Error broadcasting maintenance notice:', error)
    }
  }

  static async broadcastNewFeature(featureName, featureDescription) {
    try {
      await this.broadcastToAllUsers(
        'Nova funkcionalnost',
        `Predstavljamo novo funkcionalnost: ${featureName}. ${featureDescription}`,
        { 
          type: 'feature',
          feature_name: featureName,
          feature_description: featureDescription 
        }
      )
    } catch (error) {
      console.error('Error broadcasting new feature:', error)
    }
  }

  // Utility methods
  static async createCustomNotification(userId, type, title, message, data = {}) {
    try {
      await notificationAPI.create({
        user_id: userId,
        type: type,
        title: title,
        message: message,
        data: data,
        read: false
      })
    } catch (error) {
      console.error('Error creating custom notification:', error)
    }
  }

  static async notifyMultipleUsers(userIds, type, title, message, data = {}) {
    try {
      const promises = userIds.map(userId => 
        this.createCustomNotification(userId, type, title, message, data)
      )
      await Promise.all(promises)
    } catch (error) {
      console.error('Error notifying multiple users:', error)
    }
  }
}

export default NotificationService
