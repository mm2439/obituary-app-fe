'use client'

import React, { useEffect, useState } from 'react'
import { useComments } from '@/lib/contexts/CommentsContext'
import { useAuth } from '@/lib/contexts/AuthContext'
import { formatDistanceToNow } from 'date-fns'
import { sl } from 'date-fns/locale'

const CommentsList = ({ obituaryId, showAddForm = true }) => {
  const { 
    getCommentsForObituary, 
    loadComments, 
    subscribeToComments, 
    unsubscribeFromComments,
    loading 
  } = useComments()
  const { isAdmin } = useAuth()
  const [showForm, setShowForm] = useState(false)

  const comments = getCommentsForObituary(obituaryId)

  useEffect(() => {
    if (obituaryId) {
      // Load comments and subscribe to real-time updates
      loadComments(obituaryId)
      subscribeToComments(obituaryId)

      // Cleanup subscription on unmount
      return () => {
        unsubscribeFromComments(obituaryId)
      }
    }
  }, [obituaryId])

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-500">Nalaganje komentarjev...</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">
            Komentarji ({comments.length})
          </h3>
          
          {showAddForm && (
            <button
              onClick={() => setShowForm(!showForm)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {showForm ? 'Prekliči' : 'Dodaj komentar'}
            </button>
          )}
        </div>
      </div>

      {/* Add Comment Form */}
      {showForm && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <CommentForm 
            obituaryId={obituaryId} 
            onSubmit={() => setShowForm(false)}
            onCancel={() => setShowForm(false)}
          />
        </div>
      )}

      {/* Comments List */}
      <div className="divide-y divide-gray-200">
        {comments.length === 0 ? (
          <div className="p-6 text-center">
            <div className="text-4xl mb-2">💬</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ni komentarjev
            </h3>
            <p className="text-gray-500">
              Bodite prvi, ki bo dodal komentar.
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <CommentItem 
              key={comment.id} 
              comment={comment} 
              obituaryId={obituaryId}
            />
          ))
        )}
      </div>
    </div>
  )
}

const CommentItem = ({ comment, obituaryId }) => {
  const { updateComment, deleteComment, approveComment, rejectComment } = useComments()
  const { user, isAdmin } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(comment.content)
  const [showActions, setShowActions] = useState(false)

  const canEdit = user && (user.id === comment.user_id || isAdmin())
  const canDelete = user && (user.id === comment.user_id || isAdmin())
  const canModerate = isAdmin() && comment.status === 'pending'

  const handleEdit = async () => {
    if (!editContent.trim()) return

    const result = await updateComment(comment.id, { content: editContent })
    if (result.success) {
      setIsEditing(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm('Ali ste prepričani, da želite izbrisati ta komentar?')) {
      await deleteComment(comment.id)
    }
  }

  const handleApprove = async () => {
    await approveComment(comment.id)
  }

  const handleReject = async () => {
    const reason = window.prompt('Razlog za zavrnitev (neobvezno):')
    await rejectComment(comment.id, reason || '')
  }

  const getStatusBadge = () => {
    switch (comment.status) {
      case 'pending':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            Čaka na odobritev
          </span>
        )
      case 'rejected':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            Zavrnjeno
          </span>
        )
      case 'approved':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Odobreno
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start space-x-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium">
            {comment.author_name?.charAt(0)?.toUpperCase() || '?'}
          </div>
        </div>

        {/* Comment Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-medium text-gray-900">
                {comment.author_name || 'Anonimen'}
              </h4>
              {comment.author_email && (
                <span className="text-xs text-gray-500">
                  ({comment.author_email})
                </span>
              )}
              {isAdmin() && getStatusBadge()}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(comment.created_at), {
                  addSuffix: true,
                  locale: sl
                })}
              </span>
              
              {(canEdit || canDelete || canModerate) && (
                <div className="relative">
                  <button
                    onClick={() => setShowActions(!showActions)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                  
                  {showActions && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                      <div className="py-1">
                        {canEdit && (
                          <button
                            onClick={() => {
                              setIsEditing(true)
                              setShowActions(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Uredi
                          </button>
                        )}
                        
                        {canModerate && (
                          <>
                            <button
                              onClick={() => {
                                handleApprove()
                                setShowActions(false)
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-green-700 hover:bg-green-50"
                            >
                              Odobri
                            </button>
                            <button
                              onClick={() => {
                                handleReject()
                                setShowActions(false)
                              }}
                              className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                            >
                              Zavrni
                            </button>
                          </>
                        )}
                        
                        {canDelete && (
                          <button
                            onClick={() => {
                              handleDelete()
                              setShowActions(false)
                            }}
                            className="block w-full text-left px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                          >
                            Izbriši
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Comment Text */}
          <div className="mt-2">
            {isEditing ? (
              <div className="space-y-3">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Vaš komentar..."
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleEdit}
                    className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                  >
                    Shrani
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false)
                      setEditContent(comment.content)
                    }}
                    className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400 transition-colors"
                  >
                    Prekliči
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-sm text-gray-800 whitespace-pre-wrap">
                {comment.content}
              </p>
            )}
          </div>

          {/* Rejection Reason */}
          {comment.status === 'rejected' && comment.rejection_reason && (
            <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700">
              <strong>Razlog za zavrnitev:</strong> {comment.rejection_reason}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const CommentForm = ({ obituaryId, onSubmit, onCancel }) => {
  const { createComment } = useComments()
  const { user, isAuthenticated } = useAuth()
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState(user?.profile?.name || '')
  const [authorEmail, setAuthorEmail] = useState(user?.email || '')
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!content.trim()) {
      return
    }

    if (!isAuthenticated() && (!authorName.trim() || !authorEmail.trim())) {
      alert('Prosimo, vnesite svoje ime in e-mail naslov.')
      return
    }

    try {
      setSubmitting(true)
      
      const commentData = {
        obituary_id: obituaryId,
        content: content.trim(),
        author_name: authorName.trim(),
        author_email: authorEmail.trim(),
        user_id: user?.id || null
      }

      const result = await createComment(commentData)
      
      if (result.success) {
        setContent('')
        if (!isAuthenticated()) {
          setAuthorName('')
          setAuthorEmail('')
        }
        onSubmit()
      }
    } catch (error) {
      console.error('Error submitting comment:', error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isAuthenticated() && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            placeholder="Vaše ime"
            required
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="email"
            value={authorEmail}
            onChange={(e) => setAuthorEmail(e.target.value)}
            placeholder="Vaš e-mail"
            required
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      )}
      
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Napišite svoj komentar..."
        required
        rows={4}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
      
      <div className="flex space-x-3">
        <button
          type="submit"
          disabled={submitting || !content.trim()}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {submitting ? 'Pošiljanje...' : 'Objavi komentar'}
        </button>
        
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
        >
          Prekliči
        </button>
      </div>
      
      <p className="text-xs text-gray-500">
        Vaš komentar bo objavljen po odobritvi moderatorja.
      </p>
    </form>
  )
}

export default CommentsList
