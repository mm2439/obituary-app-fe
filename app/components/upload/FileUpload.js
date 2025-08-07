'use client'

import React, { useState, useRef } from 'react'
import { storageAPI } from '@/lib/api'
import { useAuth } from '@/lib/contexts/AuthContext'
import toast from 'react-hot-toast'

const FileUpload = ({
  onUploadComplete,
  onUploadError,
  acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'],
  maxSize = 10 * 1024 * 1024, // 10MB
  multiple = false,
  subfolder = '',
  showPreview = true,
  className = '',
  children
}) => {
  const { user } = useAuth()
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [preview, setPreview] = useState(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileSelect = (files) => {
    if (!files || files.length === 0) return

    const fileArray = Array.from(files)
    
    if (!multiple && fileArray.length > 1) {
      toast.error('Please select only one file')
      return
    }

    // Validate files
    for (const file of fileArray) {
      const validation = storageAPI.validateFile(file, {
        maxSize,
        allowedTypes: acceptedTypes
      })

      if (!validation.isValid) {
        toast.error(validation.errors.join(', '))
        return
      }
    }

    if (multiple) {
      uploadMultipleFiles(fileArray)
    } else {
      uploadSingleFile(fileArray[0])
    }
  }

  const uploadSingleFile = async (file) => {
    if (!user) {
      toast.error('Please log in to upload files')
      return
    }

    try {
      setUploading(true)
      setUploadProgress(0)

      // Show preview for images
      if (showPreview && file.type.startsWith('image/')) {
        const reader = new FileReader()
        reader.onload = (e) => setPreview(e.target.result)
        reader.readAsDataURL(file)
      }

      // Compress image if needed
      let processedFile = file
      if (file.type.startsWith('image/') && file.size > 2 * 1024 * 1024) {
        setUploadProgress(20)
        processedFile = await storageAPI.compressImage(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.8
        })
        toast.success('Image compressed successfully')
      }

      setUploadProgress(50)

      // Generate file path
      const filePath = storageAPI.generateFilePath(
        user.id,
        processedFile.name,
        subfolder
      )

      // Upload file
      const uploadResult = await storageAPI.uploadFile(processedFile, filePath)
      
      if (uploadResult.error) {
        throw new Error(uploadResult.error)
      }

      setUploadProgress(80)

      // Get public URL
      const urlResult = storageAPI.getPublicUrl(filePath)
      
      if (urlResult.error) {
        throw new Error(urlResult.error)
      }

      setUploadProgress(100)

      const result = {
        file: processedFile,
        path: filePath,
        url: urlResult.data,
        originalSize: file.size,
        compressedSize: processedFile.size,
        fileName: processedFile.name
      }

      toast.success('File uploaded successfully!')
      
      if (onUploadComplete) {
        onUploadComplete(result)
      }

    } catch (error) {
      console.error('Upload error:', error)
      toast.error(error.message || 'Upload failed')
      
      if (onUploadError) {
        onUploadError(error)
      }
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  const uploadMultipleFiles = async (files) => {
    if (!user) {
      toast.error('Please log in to upload files')
      return
    }

    try {
      setUploading(true)
      setUploadProgress(0)

      const results = []
      const totalFiles = files.length

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setUploadProgress((i / totalFiles) * 100)

        // Compress if needed
        let processedFile = file
        if (file.type.startsWith('image/') && file.size > 2 * 1024 * 1024) {
          processedFile = await storageAPI.compressImage(file)
        }

        // Generate file path
        const filePath = storageAPI.generateFilePath(
          user.id,
          processedFile.name,
          subfolder
        )

        // Upload file
        const uploadResult = await storageAPI.uploadFile(processedFile, filePath)
        
        if (uploadResult.error) {
          console.error(`Failed to upload ${file.name}:`, uploadResult.error)
          continue
        }

        // Get public URL
        const urlResult = storageAPI.getPublicUrl(filePath)
        
        if (urlResult.data) {
          results.push({
            file: processedFile,
            path: filePath,
            url: urlResult.data,
            originalSize: file.size,
            compressedSize: processedFile.size,
            fileName: processedFile.name
          })
        }
      }

      setUploadProgress(100)

      if (results.length > 0) {
        toast.success(`${results.length} files uploaded successfully!`)
        
        if (onUploadComplete) {
          onUploadComplete(results)
        }
      } else {
        throw new Error('No files were uploaded successfully')
      }

    } catch (error) {
      console.error('Multiple upload error:', error)
      toast.error(error.message || 'Upload failed')
      
      if (onUploadError) {
        onUploadError(error)
      }
    } finally {
      setUploading(false)
      setUploadProgress(0)
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
    handleFileSelect(files)
  }

  const handleInputChange = (e) => {
    const files = e.target.files
    handleFileSelect(files)
  }

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const removePreview = () => {
    setPreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept={acceptedTypes.join(',')}
        multiple={multiple}
        onChange={handleInputChange}
        className="hidden"
      />

      {/* Upload area */}
      <div
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`
          border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${dragActive 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 hover:border-gray-400'
          }
          ${uploading ? 'pointer-events-none opacity-50' : ''}
        `}
      >
        {children || (
          <div>
            <div className="text-4xl mb-2">📁</div>
            <p className="text-lg font-medium text-gray-700 mb-2">
              {multiple ? 'Upload Files' : 'Upload File'}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Drag and drop {multiple ? 'files' : 'a file'} here, or click to select
            </p>
            <p className="text-xs text-gray-400">
              Supported formats: {acceptedTypes.map(type => type.split('/')[1]).join(', ')}
              <br />
              Max size: {Math.round(maxSize / 1024 / 1024)}MB
            </p>
          </div>
        )}
      </div>

      {/* Upload progress */}
      {uploading && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Uploading...</span>
            <span className="text-sm text-gray-600">{Math.round(uploadProgress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>
      )}

      {/* Preview */}
      {showPreview && preview && !uploading && (
        <div className="mt-4 relative">
          <img
            src={preview}
            alt="Preview"
            className="max-w-full h-48 object-cover rounded-lg border"
          />
          <button
            onClick={removePreview}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default FileUpload
