'use client'

import React, { useEffect, useState } from 'react'
import { useComments } from '@/lib/contexts/CommentsContext'
import { useAuth } from '@/lib/contexts/AuthContext'
import { formatDistanceToNow, format } from 'date-fns'
import { sl } from 'date-fns/locale'

const PendingComments = () => {
  const { 
    pendingComments, 
    loadPendingComments, 
    subscribeToPendingComments,
    approveComment,
    rejectComment,
    bulkApprove,
    bulkReject,
    loading 
  } = useComments()
  const { isAdmin } = useAuth()
  const [selectedComments, setSelectedComments] = useState([])
  const [showRejectModal, setShowRejectModal] = useState(false)
  const [rejectReason, setRejectReason] = useState('')
  const [rejectingCommentId, setRejectingCommentId] = useState(null)

  useEffect(() => {
    if (isAdmin()) {
      loadPendingComments()
      subscribeToPendingComments()
    }
  }, [isAdmin])

  if (!isAdmin()) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-600">Nimate dovoljenja za dostop do te strani.</p>
      </div>
    )
  }

  const handleSelectComment = (commentId) => {
    setSelectedComments(prev => 
      prev.includes(commentId)
        ? prev.filter(id => id !== commentId)
        : [...prev, commentId]
    )
  }

  const handleSelectAll = () => {
    if (selectedComments.length === pendingComments.length) {
      setSelectedComments([])
    } else {
      setSelectedComments(pendingComments.map(comment => comment.id))
    }
  }

  const handleBulkApprove = async () => {
    if (selectedComments.length === 0) return
    
    if (window.confirm(`Ali ste prepričani, da želite odobriti ${selectedComments.length} komentarjev?`)) {
      await bulkApprove(selectedComments)
      setSelectedComments([])
    }
  }

  const handleBulkReject = async () => {
    if (selectedComments.length === 0) return
    
    const reason = window.prompt('Razlog za zavrnitev (neobvezno):')
    if (reason !== null) { // User didn't cancel
      await bulkReject(selectedComments, reason)
      setSelectedComments([])
    }
  }

  const handleSingleApprove = async (commentId) => {
    await approveComment(commentId)
  }

  const handleSingleReject = (commentId) => {
    setRejectingCommentId(commentId)
    setShowRejectModal(true)
  }

  const confirmReject = async () => {
    if (rejectingCommentId) {
      await rejectComment(rejectingCommentId, rejectReason)
      setShowRejectModal(false)
      setRejectingCommentId(null)
      setRejectReason('')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            Komentarji za pregled ({pendingComments.length})
          </h2>
          
          {selectedComments.length > 0 && (
            <div className="flex space-x-2">
              <button
                onClick={handleBulkApprove}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                Odobri ({selectedComments.length})
              </button>
              <button
                onClick={handleBulkReject}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                Zavrni ({selectedComments.length})
              </button>
            </div>
          )}
        </div>

        {pendingComments.length > 0 && (
          <div className="mt-4 flex items-center">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={selectedComments.length === pendingComments.length && pendingComments.length > 0}
                onChange={handleSelectAll}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-700">Izberi vse</span>
            </label>
          </div>
        )}
      </div>

      {/* Comments List */}
      <div className="divide-y divide-gray-200">
        {loading ? (
          <div className="p-6 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-500">Nalaganje komentarjev...</p>
          </div>
        ) : pendingComments.length === 0 ? (
          <div className="p-6 text-center">
            <div className="text-4xl mb-2">✅</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Ni komentarjev za pregled
            </h3>
            <p className="text-gray-500">
              Vsi komentarji so bili pregledani.
            </p>
          </div>
        ) : (
          pendingComments.map((comment) => (
            <div key={comment.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start space-x-4">
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={selectedComments.includes(comment.id)}
                  onChange={() => handleSelectComment(comment.id)}
                  className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />

                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-medium">
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
                      <span className="text-xs text-gray-500">
                        ({comment.author_email})
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Čaka na pregled
                      </span>
                    </div>
                    
                    <span className="text-xs text-gray-500">
                      {format(new Date(comment.created_at), 'dd.MM.yyyy HH:mm')}
                    </span>
                  </div>
                  
                  {/* Obituary Info */}
                  {comment.obituaries && (
                    <div className="mt-1">
                      <span className="text-xs text-blue-600">
                        Osmrtnica: {comment.obituaries.title}
                      </span>
                    </div>
                  )}
                  
                  {/* Comment Text */}
                  <div className="mt-2">
                    <p className="text-sm text-gray-800 whitespace-pre-wrap">
                      {comment.content}
                    </p>
                  </div>

                  {/* Time ago */}
                  <p className="text-xs text-gray-500 mt-2">
                    {formatDistanceToNow(new Date(comment.created_at), {
                      addSuffix: true,
                      locale: sl
                    })}
                  </p>

                  {/* Action Buttons */}
                  <div className="mt-4 flex space-x-2">
                    <button
                      onClick={() => handleSingleApprove(comment.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700 transition-colors"
                    >
                      Odobri
                    </button>
                    <button
                      onClick={() => handleSingleReject(comment.id)}
                      className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700 transition-colors"
                    >
                      Zavrni
                    </button>
                    <a
                      href={`/nekrolog/${comment.obituary_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors"
                    >
                      Poglej osmrtnico
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Zavrni komentar
            </h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Razlog za zavrnitev (neobvezno)
              </label>
              <textarea
                value={rejectReason}
                onChange={(e) => setRejectReason(e.target.value)}
                placeholder="Vnesite razlog za zavrnitev..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            
            <div className="flex space-x-3">
              <button
                onClick={confirmReject}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Zavrni komentar
              </button>
              <button
                onClick={() => {
                  setShowRejectModal(false)
                  setRejectingCommentId(null)
                  setRejectReason('')
                }}
                className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Prekliči
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PendingComments
