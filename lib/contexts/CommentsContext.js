'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { commentsAPI } from '../api'
import toast from 'react-hot-toast'

const CommentsContext = createContext({})

export const useComments = () => {
  const context = useContext(CommentsContext)
  if (!context) {
    throw new Error('useComments must be used within a CommentsProvider')
  }
  return context
}

export const CommentsProvider = ({ children }) => {
  const { user, isAuthenticated, isAdmin } = useAuth()
  const [comments, setComments] = useState({}) // Keyed by obituary ID
  const [pendingComments, setPendingComments] = useState([])
  const [loading, setLoading] = useState(false)
  const [subscriptions, setSubscriptions] = useState({})

  // Load comments for a specific obituary
  const loadComments = async (obituaryId, includeAll = false) => {
    try {
      setLoading(true)
      
      const status = includeAll || isAdmin() ? null : 'approved'
      const result = await commentsAPI.getForObituary(obituaryId, status)
      
      if (result.error) {
        console.error('Error loading comments:', result.error)
        return
      }

      setComments(prev => ({
        ...prev,
        [obituaryId]: result.data || []
      }))
    } catch (error) {
      console.error('Error loading comments:', error)
    } finally {
      setLoading(false)
    }
  }

  // Load pending comments (admin only)
  const loadPendingComments = async () => {
    if (!isAdmin()) return

    try {
      setLoading(true)
      const result = await commentsAPI.getPending()
      
      if (result.error) {
        console.error('Error loading pending comments:', result.error)
        return
      }

      setPendingComments(result.data || [])
    } catch (error) {
      console.error('Error loading pending comments:', error)
    } finally {
      setLoading(false)
    }
  }

  // Subscribe to real-time comments for an obituary
  const subscribeToComments = (obituaryId) => {
    if (subscriptions[obituaryId]) return // Already subscribed

    const subscription = commentsAPI.subscribeToComments(
      obituaryId,
      (payload) => {
        console.log('Comment update received:', payload)
        
        const { eventType, new: newComment, old: oldComment } = payload

        setComments(prev => {
          const obituaryComments = prev[obituaryId] || []
          
          switch (eventType) {
            case 'INSERT':
              // Only show approved comments to non-admins
              if (!isAdmin() && newComment.status !== 'approved') {
                return prev
              }
              return {
                ...prev,
                [obituaryId]: [...obituaryComments, newComment]
              }
              
            case 'UPDATE':
              return {
                ...prev,
                [obituaryId]: obituaryComments.map(comment =>
                  comment.id === newComment.id ? newComment : comment
                )
              }
              
            case 'DELETE':
              return {
                ...prev,
                [obituaryId]: obituaryComments.filter(comment =>
                  comment.id !== oldComment.id
                )
              }
              
            default:
              return prev
          }
        })
      }
    )

    setSubscriptions(prev => ({
      ...prev,
      [obituaryId]: subscription
    }))
  }

  // Subscribe to pending comments (admin only)
  const subscribeToPendingComments = () => {
    if (!isAdmin()) return

    const subscription = commentsAPI.subscribeToPendingComments((payload) => {
      console.log('Pending comment received:', payload)
      
      if (payload.eventType === 'INSERT') {
        setPendingComments(prev => [payload.new, ...prev])
        toast.success('New comment awaiting approval', {
          icon: '💬'
        })
      }
    })

    setSubscriptions(prev => ({
      ...prev,
      pending: subscription
    }))
  }

  // Unsubscribe from comments
  const unsubscribeFromComments = (obituaryId) => {
    const subscription = subscriptions[obituaryId]
    if (subscription) {
      commentsAPI.unsubscribeFromComments(subscription)
      setSubscriptions(prev => {
        const newSubs = { ...prev }
        delete newSubs[obituaryId]
        return newSubs
      })
    }
  }

  // Create new comment
  const createComment = async (commentData) => {
    try {
      const result = await commentsAPI.create(commentData)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Comment submitted for approval!')
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error creating comment:', error)
      toast.error('Failed to submit comment')
      return { success: false, error: error.message }
    }
  }

  // Update comment
  const updateComment = async (commentId, commentData) => {
    if (!user) return { success: false, error: 'Not authenticated' }

    try {
      const result = await commentsAPI.update(commentId, commentData, user.id)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Comment updated successfully!')
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error updating comment:', error)
      toast.error('Failed to update comment')
      return { success: false, error: error.message }
    }
  }

  // Delete comment
  const deleteComment = async (commentId) => {
    if (!user) return { success: false, error: 'Not authenticated' }

    try {
      const result = await commentsAPI.delete(commentId, user.id)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      toast.success('Comment deleted successfully!')
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error deleting comment:', error)
      toast.error('Failed to delete comment')
      return { success: false, error: error.message }
    }
  }

  // Admin functions
  const approveComment = async (commentId) => {
    if (!isAdmin() || !user) return { success: false, error: 'Not authorized' }

    try {
      const result = await commentsAPI.approve(commentId, user.id)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Remove from pending comments
      setPendingComments(prev => prev.filter(comment => comment.id !== commentId))
      
      toast.success('Comment approved!')
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error approving comment:', error)
      toast.error('Failed to approve comment')
      return { success: false, error: error.message }
    }
  }

  const rejectComment = async (commentId, reason = '') => {
    if (!isAdmin() || !user) return { success: false, error: 'Not authorized' }

    try {
      const result = await commentsAPI.reject(commentId, user.id, reason)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Remove from pending comments
      setPendingComments(prev => prev.filter(comment => comment.id !== commentId))
      
      toast.success('Comment rejected!')
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error rejecting comment:', error)
      toast.error('Failed to reject comment')
      return { success: false, error: error.message }
    }
  }

  // Bulk operations
  const bulkApprove = async (commentIds) => {
    if (!isAdmin() || !user) return { success: false, error: 'Not authorized' }

    try {
      const result = await commentsAPI.bulkApprove(commentIds, user.id)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Remove from pending comments
      setPendingComments(prev => 
        prev.filter(comment => !commentIds.includes(comment.id))
      )
      
      toast.success(`${commentIds.length} comments approved!`)
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error bulk approving comments:', error)
      toast.error('Failed to approve comments')
      return { success: false, error: error.message }
    }
  }

  const bulkReject = async (commentIds, reason = '') => {
    if (!isAdmin() || !user) return { success: false, error: 'Not authorized' }

    try {
      const result = await commentsAPI.bulkReject(commentIds, user.id, reason)
      
      if (result.error) {
        toast.error(result.error)
        return { success: false, error: result.error }
      }

      // Remove from pending comments
      setPendingComments(prev => 
        prev.filter(comment => !commentIds.includes(comment.id))
      )
      
      toast.success(`${commentIds.length} comments rejected!`)
      return { success: true, data: result.data }
    } catch (error) {
      console.error('Error bulk rejecting comments:', error)
      toast.error('Failed to reject comments')
      return { success: false, error: error.message }
    }
  }

  // Get comments for a specific obituary
  const getCommentsForObituary = (obituaryId) => {
    return comments[obituaryId] || []
  }

  // Get comment statistics
  const getCommentStats = async (obituaryId = null) => {
    try {
      const result = await commentsAPI.getStats(obituaryId)
      
      if (result.error) {
        console.error('Error getting comment stats:', result.error)
        return null
      }

      return result.data
    } catch (error) {
      console.error('Error getting comment stats:', error)
      return null
    }
  }

  // Cleanup subscriptions on unmount
  useEffect(() => {
    return () => {
      Object.values(subscriptions).forEach(subscription => {
        commentsAPI.unsubscribeFromComments(subscription)
      })
    }
  }, [])

  const value = {
    comments,
    pendingComments,
    loading,
    loadComments,
    loadPendingComments,
    subscribeToComments,
    subscribeToPendingComments,
    unsubscribeFromComments,
    createComment,
    updateComment,
    deleteComment,
    approveComment,
    rejectComment,
    bulkApprove,
    bulkReject,
    getCommentsForObituary,
    getCommentStats
  }

  return (
    <CommentsContext.Provider value={value}>
      {children}
    </CommentsContext.Provider>
  )
}
