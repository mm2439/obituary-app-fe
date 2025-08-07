'use client'

import React, { useState } from 'react'
import { storageAPI } from '@/lib/api'
import { useAuth } from '@/lib/contexts/AuthContext'
import toast from 'react-hot-toast'
import Image from 'next/image'

const ObituaryPhotoUpload = ({
  obituaryId = null,
  onUploadComplete,
  onUploadError,
  currentPhotoUrl = null,
  className = ''
}) => {
  const { user } = useAuth()
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState(currentPhotoUrl)
  const [dragActive, setDragActive] = useState(false)

  const handleFileSelect = async (file) => {
    if (!file) return

    // Validate file
    const validation = storageAPI.validateFile(file, {
      maxSize: 10 * 1024 * 1024, // 10MB
      allowedTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    })

    if (!validation.isValid) {
      toast.error(validation.errors.join(', '))
      return
    }

    await uploadPhoto(file)
  }

  const uploadPhoto = async (file) => {
    if (!user) {
      toast.error('Please log in to upload photos')
      return
    }

    try {
      setUploading(true)

      // Show preview immediately
      const reader = new FileReader()
      reader.onload = (e) => setPreview(e.target.result)
      reader.readAsDataURL(file)

      // Use the specialized obituary photo upload function
      const result = await storageAPI.uploadObituaryPhoto(
        file,
        obituaryId || `temp_${Date.now()}`,
        user.id
      )

      if (result.error) {
        throw new Error(result.error)
      }

      toast.success('Photo uploaded successfully!')

      if (onUploadComplete) {
        onUploadComplete(result.data)
      }

    } catch (error) {
      console.error('Photo upload error:', error)
      toast.error(error.message || 'Photo upload failed')
      
      // Reset preview on error
      setPreview(currentPhotoUrl)
      
      if (onUploadError) {
        onUploadError(error)
      }
    } finally {
      setUploading(false)
    }
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    const files = e.dataTransfer.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleInputChange = (e) => {
    const files = e.target.files
    if (files && files[0]) {
      handleFileSelect(files[0])
    }
  }

  const handleClick = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/jpeg,image/jpg,image/png,image/gif,image/webp'
    input.onchange = handleInputChange
    input.click()
  }

  const removePhoto = () => {
    setPreview(null)
    if (onUploadComplete) {
      onUploadComplete(null)
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Upload area */}
      <div
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg overflow-hidden cursor-pointer transition-colors
          ${dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
          ${uploading ? 'pointer-events-none' : ''}
          ${preview ? 'border-solid border-gray-200' : ''}
        `}
        style={{ aspectRatio: '4/3', minHeight: '200px' }}
      >
        {preview ? (
          <div className="relative w-full h-full">
            <Image
              src={preview}
              alt="Obituary photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
              <div className="opacity-0 hover:opacity-100 transition-opacity duration-200">
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <p className="text-sm text-gray-700 mb-2">Change photo</p>
                  <div className="flex gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleClick()
                      }}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                    >
                      Upload
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        removePhoto()
                      }}
                      className="px-3 py-1 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading overlay */}
            {uploading && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-700">Uploading...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="text-4xl mb-4">📷</div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Upload Photo
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Drag and drop a photo here, or click to select
            </p>
            <div className="text-xs text-gray-400">
              <p>Supported formats: JPEG, PNG, GIF, WebP</p>
              <p>Max size: 10MB</p>
              <p>Recommended: 800x600px or larger</p>
            </div>

            {/* Loading state */}
            {uploading && (
              <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                  <p className="text-sm text-gray-700">Processing...</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Upload tips */}
      {!preview && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <h4 className="text-sm font-medium text-blue-800 mb-1">Photo Tips:</h4>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Use a high-quality, clear photo</li>
            <li>• Portrait orientation works best</li>
            <li>• Ensure good lighting and contrast</li>
            <li>• Photos will be automatically optimized</li>
          </ul>
        </div>
      )}

      {/* File info */}
      {preview && currentPhotoUrl && (
        <div className="mt-2 text-xs text-gray-500 text-center">
          Photo uploaded and optimized for web display
        </div>
      )}
    </div>
  )
}

export default ObituaryPhotoUpload
