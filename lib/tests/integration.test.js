/**
 * Supabase Integration Tests
 * Basic tests to verify the integration is working correctly
 */

import { supabase } from '../supabase'
import { authAPI, obituaryAPI, commentsAPI, storageAPI } from '../api'
import { ErrorHandler } from '../utils/errorHandler'

// Test configuration
const TEST_USER = {
  email: 'test@example.com',
  password: 'testpassword123',
  name: 'Test User'
}

const TEST_OBITUARY = {
  title: 'Test Obituary',
  name: 'John',
  sir_name: 'Doe',
  birth_date: '1950-01-01',
  death_date: '2024-01-01',
  obituary_text: 'Test obituary content'
}

describe('Supabase Integration Tests', () => {
  let testUser = null
  let testObituary = null

  beforeAll(async () => {
    // Clean up any existing test data
    await cleanupTestData()
  })

  afterAll(async () => {
    // Clean up test data
    await cleanupTestData()
  })

  describe('Database Connection', () => {
    test('should connect to Supabase', async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('id')
        .limit(1)

      expect(error).toBeNull()
      expect(data).toBeDefined()
    })
  })

  describe('Authentication', () => {
    test('should sign up a new user', async () => {
      const result = await authAPI.signUp(
        TEST_USER.email,
        TEST_USER.password,
        { name: TEST_USER.name }
      )

      expect(result.error).toBeNull()
      expect(result.data.user).toBeDefined()
      expect(result.data.user.email).toBe(TEST_USER.email)
      
      testUser = result.data.user
    })

    test('should sign in user', async () => {
      const result = await authAPI.signIn(TEST_USER.email, TEST_USER.password)

      expect(result.error).toBeNull()
      expect(result.data.user).toBeDefined()
      expect(result.data.session).toBeDefined()
    })

    test('should get user profile', async () => {
      if (!testUser) return

      const result = await authAPI.getProfile(testUser.id)

      expect(result.error).toBeNull()
      expect(result.data).toBeDefined()
      expect(result.data.name).toBe(TEST_USER.name)
    })

    test('should update user profile', async () => {
      if (!testUser) return

      const updateData = { city: 'Ljubljana' }
      const result = await authAPI.updateProfile(testUser.id, updateData)

      expect(result.error).toBeNull()
      expect(result.data.city).toBe('Ljubljana')
    })
  })

  describe('Obituary Management', () => {
    test('should create obituary', async () => {
      if (!testUser) return

      const result = await obituaryAPI.create(TEST_OBITUARY, testUser.id)

      expect(result.error).toBeNull()
      expect(result.data).toBeDefined()
      expect(result.data.title).toBe(TEST_OBITUARY.title)
      expect(result.data.status).toBe('draft')
      
      testObituary = result.data
    })

    test('should get obituary by ID', async () => {
      if (!testObituary) return

      const result = await obituaryAPI.getById(testObituary.id)

      expect(result.error).toBeNull()
      expect(result.data).toBeDefined()
      expect(result.data.id).toBe(testObituary.id)
    })

    test('should update obituary', async () => {
      if (!testObituary || !testUser) return

      const updateData = { title: 'Updated Test Obituary' }
      const result = await obituaryAPI.update(testObituary.id, updateData, testUser.id)

      expect(result.error).toBeNull()
      expect(result.data.title).toBe('Updated Test Obituary')
    })

    test('should get all obituaries', async () => {
      const result = await obituaryAPI.getAll({ limit: 10 })

      expect(result.error).toBeNull()
      expect(Array.isArray(result.data)).toBe(true)
    })

    test('should publish obituary', async () => {
      if (!testObituary || !testUser) return

      const result = await obituaryAPI.publish(testObituary.id, testUser.id)

      expect(result.error).toBeNull()
      expect(result.data.status).toBe('published')
    })
  })

  describe('Comments System', () => {
    test('should create comment', async () => {
      if (!testObituary) return

      const commentData = {
        obituary_id: testObituary.id,
        author_name: 'Test Commenter',
        author_email: 'commenter@example.com',
        content: 'Test comment content'
      }

      const result = await commentsAPI.create(commentData)

      expect(result.error).toBeNull()
      expect(result.data).toBeDefined()
      expect(result.data.content).toBe(commentData.content)
      expect(result.data.status).toBe('pending')
    })

    test('should get comments for obituary', async () => {
      if (!testObituary) return

      const result = await commentsAPI.getForObituary(testObituary.id, null)

      expect(result.error).toBeNull()
      expect(Array.isArray(result.data)).toBe(true)
    })
  })

  describe('Storage Operations', () => {
    test('should validate file correctly', () => {
      const validFile = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
      const validation = storageAPI.validateFile(validFile)

      expect(validation.isValid).toBe(true)
      expect(validation.errors).toHaveLength(0)
    })

    test('should reject invalid file type', () => {
      const invalidFile = new File(['test'], 'test.txt', { type: 'text/plain' })
      const validation = storageAPI.validateFile(invalidFile)

      expect(validation.isValid).toBe(false)
      expect(validation.errors.length).toBeGreaterThan(0)
    })

    test('should generate correct file path', () => {
      const userId = 'test-user-id'
      const fileName = 'test.jpg'
      const subfolder = 'obituaries'

      const path = storageAPI.generateFilePath(userId, fileName, subfolder)

      expect(path).toContain(userId)
      expect(path).toContain(fileName)
      expect(path).toContain(subfolder)
    })

    test('should get public URL', () => {
      const filePath = 'test/path/file.jpg'
      const result = storageAPI.getPublicUrl(filePath)

      expect(result.data).toBeDefined()
      expect(result.data).toContain(filePath)
      expect(result.error).toBeNull()
    })
  })

  describe('Error Handling', () => {
    test('should handle network errors', async () => {
      const mockError = new Error('Network error')
      mockError.name = 'NetworkError'

      const errorType = ErrorHandler.getErrorType(mockError)
      expect(errorType).toBe(ErrorHandler.ERROR_TYPES.NETWORK)

      const userMessage = ErrorHandler.getUserMessage(mockError)
      expect(userMessage).toContain('internetno povezavo')
    })

    test('should validate form data', () => {
      const formData = {
        email: 'invalid-email',
        password: '123',
        name: ''
      }

      const rules = {
        email: { required: true, type: 'email', label: 'E-mail' },
        password: { required: true, type: 'password', minLength: 6, label: 'Geslo' },
        name: { required: true, label: 'Ime' }
      }

      expect(() => {
        ErrorHandler.validateForm(formData, rules)
      }).toThrow()
    })

    test('should handle async operations with error handling', async () => {
      const successOperation = async () => 'success'
      const result = await ErrorHandler.withErrorHandling(successOperation, 'Test', false)

      expect(result.success).toBe(true)
      expect(result.data).toBe('success')
      expect(result.error).toBeNull()
    })

    test('should retry failed operations', async () => {
      let attempts = 0
      const flakyOperation = async () => {
        attempts++
        if (attempts < 3) {
          throw new Error('Temporary failure')
        }
        return 'success'
      }

      const result = await ErrorHandler.withRetry(flakyOperation, 3, 100, 'Test')

      expect(result.success).toBe(true)
      expect(result.data).toBe('success')
      expect(attempts).toBe(3)
    })
  })

  describe('Real-time Features', () => {
    test('should create subscription', () => {
      const callback = jest.fn()
      const subscription = supabase
        .channel('test_channel')
        .on('postgres_changes', {
          event: '*',
          schema: 'public',
          table: 'profiles'
        }, callback)
        .subscribe()

      expect(subscription).toBeDefined()
      
      // Clean up
      supabase.removeChannel(subscription)
    })
  })
})

// Helper function to clean up test data
async function cleanupTestData() {
  try {
    // Delete test obituary
    if (testObituary) {
      await supabase
        .from('obituaries')
        .delete()
        .eq('id', testObituary.id)
    }

    // Delete test user profile
    if (testUser) {
      await supabase
        .from('profiles')
        .delete()
        .eq('id', testUser.id)
    }

    // Delete test comments
    await supabase
      .from('obituary_comments')
      .delete()
      .eq('author_email', 'commenter@example.com')

  } catch (error) {
    console.warn('Cleanup error:', error)
  }
}

// Export for use in other test files
export {
  TEST_USER,
  TEST_OBITUARY,
  cleanupTestData
}
