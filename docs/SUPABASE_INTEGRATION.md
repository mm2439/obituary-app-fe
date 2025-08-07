# Supabase Integration Documentation

## Overview

This document describes the comprehensive Supabase integration implemented in the Obituary Application. The integration provides modern authentication, real-time features, file storage, and database management while maintaining backward compatibility with the existing system.

## Architecture

### Core Components

1. **Database Layer** (`lib/supabase/`)
   - Supabase client configuration
   - Server-side and client-side clients
   - Admin client for privileged operations

2. **API Layer** (`lib/api/`)
   - Modular API services for different features
   - Enhanced error handling and retry logic
   - Consistent response formatting

3. **Context Providers** (`lib/contexts/`)
   - React contexts for state management
   - Real-time subscriptions
   - Centralized business logic

4. **Services** (`lib/services/`)
   - High-level business logic
   - Integration between old and new systems
   - Notification and activity management

## Database Schema

### Core Tables

#### `profiles`
User profile information extending Supabase auth.users
```sql
- id (uuid, primary key, references auth.users)
- name (text)
- email (text)
- role (text) - 'User', 'Admin', 'Funeral', 'Florist'
- company (text)
- region (text)
- city (text)
- slug_key (text, unique)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### `obituaries`
Main obituary content
```sql
- id (uuid, primary key)
- user_id (uuid, references profiles.id)
- title (text)
- name (text)
- sir_name (text)
- birth_date (date)
- death_date (date)
- obituary_text (text)
- picture_url (text)
- status ('draft', 'pending', 'published', 'rejected')
- visits (integer, default 0)
- created_at (timestamptz)
- updated_at (timestamptz)
```

#### `obituary_comments`
User comments on obituaries
```sql
- id (uuid, primary key)
- obituary_id (uuid, references obituaries.id)
- user_id (uuid, references profiles.id, nullable)
- author_name (text)
- author_email (text)
- content (text)
- status ('pending', 'approved', 'rejected')
- created_at (timestamptz)
```

#### `notifications`
User notifications
```sql
- id (uuid, primary key)
- user_id (uuid, references profiles.id)
- type (text) - 'comment', 'obituary', 'system', 'admin'
- title (text)
- message (text)
- data (jsonb)
- read (boolean, default false)
- created_at (timestamptz)
```

#### `activity_logs`
System activity tracking
```sql
- id (uuid, primary key)
- user_id (uuid, references profiles.id)
- action (text)
- entity_type (text)
- entity_id (text)
- description (text)
- metadata (jsonb)
- created_at (timestamptz)
```

### Storage Buckets

#### `obituary-photos`
- Stores obituary photos
- Public read access
- Authenticated write access
- Automatic image optimization

## API Services

### Authentication API (`lib/api/auth.js`)

```javascript
import { authAPI } from '@/lib/api'

// Sign up new user
const result = await authAPI.signUp(email, password, userData)

// Sign in user
const result = await authAPI.signIn(email, password)

// Sign out user
const result = await authAPI.signOut()

// Update user profile
const result = await authAPI.updateProfile(userId, profileData)
```

### Obituary API (`lib/api/obituary.js`)

```javascript
import { obituaryAPI } from '@/lib/api'

// Create obituary
const result = await obituaryAPI.create(obituaryData, userId)

// Get obituary by ID
const result = await obituaryAPI.getById(obituaryId)

// Get all obituaries with filters
const result = await obituaryAPI.getAll({ status: 'published', city: 'Ljubljana' })

// Update obituary
const result = await obituaryAPI.update(obituaryId, updateData, userId)
```

### Comments API (`lib/api/comments.js`)

```javascript
import { commentsAPI } from '@/lib/api'

// Get comments for obituary
const result = await commentsAPI.getForObituary(obituaryId)

// Create comment
const result = await commentsAPI.create(commentData)

// Approve comment (admin)
const result = await commentsAPI.approve(commentId, adminUserId)
```

### Storage API (`lib/api/storage.js`)

```javascript
import { storageAPI } from '@/lib/api'

// Upload obituary photo
const result = await storageAPI.uploadObituaryPhoto(file, obituaryId, userId)

// Get public URL
const result = storageAPI.getPublicUrl(filePath)

// Delete file
const result = await storageAPI.deleteFile(filePath)
```

## Context Providers

### Auth Context

```javascript
import { useAuth } from '@/lib/contexts/AuthContext'

function MyComponent() {
  const { user, signIn, signOut, isAuthenticated, isAdmin } = useAuth()
  
  // Use authentication state and methods
}
```

### Notifications Context

```javascript
import { useNotifications } from '@/lib/contexts/NotificationContext'

function MyComponent() {
  const { notifications, unreadCount, markAsRead } = useNotifications()
  
  // Use notification state and methods
}
```

### Comments Context

```javascript
import { useComments } from '@/lib/contexts/CommentsContext'

function MyComponent() {
  const { loadComments, createComment, approveComment } = useComments()
  
  // Use comment methods
}
```

## Real-time Features

### Notifications
- Real-time notification delivery
- Automatic unread count updates
- Toast notifications for new items

### Comments
- Live comment updates on obituary pages
- Admin real-time moderation
- Instant approval/rejection feedback

### Activity Tracking
- Real-time activity logs
- Admin dashboard live updates
- User action tracking

## Error Handling

### ErrorHandler Utility

```javascript
import { ErrorHandler, handleError, withErrorHandling } from '@/lib/utils/errorHandler'

// Handle errors with toast notifications
const handleApiCall = async () => {
  const result = await withErrorHandling(
    () => apiCall(),
    'API Operation',
    true // Show toast
  )
  
  if (result.success) {
    // Handle success
  } else {
    // Error already handled and displayed
  }
}

// Form validation
const validateUserForm = (formData) => {
  return ErrorHandler.validateForm(formData, {
    email: { required: true, type: 'email', label: 'E-mail' },
    password: { required: true, type: 'password', minLength: 6, label: 'Geslo' },
    name: { required: true, minLength: 2, label: 'Ime' }
  })
}
```

## Migration Strategy

### Backward Compatibility
- Existing localStorage authentication still works
- Legacy API calls are wrapped with new error handling
- Gradual migration of components to use new contexts

### Data Migration
- User data automatically synced between systems
- Existing obituaries remain accessible
- Comments migrated to new moderation system

## Security Features

### Row Level Security (RLS)
- Users can only access their own data
- Admins have elevated permissions
- Public content properly filtered

### Authentication
- Secure JWT tokens
- Automatic session refresh
- Proper logout handling

### File Upload Security
- File type validation
- Size limits enforced
- Automatic image optimization

## Performance Optimizations

### Caching
- Public URLs cached for 1 hour
- Database queries optimized with indexes
- Real-time subscriptions efficiently managed

### Image Optimization
- Automatic compression for large images
- WebP format support
- Responsive image sizing

### Database Optimization
- Proper indexing on frequently queried columns
- Efficient pagination
- Connection pooling

## Monitoring and Analytics

### Activity Tracking
- All user actions logged
- Admin actions specially tracked
- System events recorded

### Error Monitoring
- Client-side error tracking
- API error logging
- Performance metrics

## Deployment Considerations

### Environment Variables
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Database Setup
1. Run migration scripts in `supabase/migrations/`
2. Set up Row Level Security policies
3. Configure storage buckets
4. Set up real-time subscriptions

### Production Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] RLS policies enabled
- [ ] Storage buckets configured
- [ ] Error monitoring setup
- [ ] Backup strategy implemented

## Troubleshooting

### Common Issues

1. **Authentication Errors**
   - Check environment variables
   - Verify RLS policies
   - Ensure proper session handling

2. **Real-time Not Working**
   - Check subscription setup
   - Verify database triggers
   - Ensure proper cleanup

3. **File Upload Issues**
   - Check storage bucket permissions
   - Verify file size limits
   - Ensure proper CORS setup

### Debug Mode
Enable debug logging by setting:
```javascript
localStorage.setItem('supabase.debug', 'true')
```

## Future Enhancements

### Planned Features
- Advanced analytics dashboard
- Automated backup system
- Multi-language support
- Advanced search capabilities
- Mobile app integration

### Performance Improvements
- Edge function implementation
- Advanced caching strategies
- Database query optimization
- CDN integration

## Support

For technical support or questions about the Supabase integration:
1. Check this documentation
2. Review error logs
3. Test with debug mode enabled
4. Contact the development team

## Testing Guide

### Manual Testing Checklist

#### Authentication Testing
- [ ] User registration works
- [ ] Email verification (if enabled)
- [ ] User login works
- [ ] Password reset works
- [ ] Session persistence across page refreshes
- [ ] Automatic logout on token expiry
- [ ] Role-based access control

#### Obituary Management Testing
- [ ] Create new obituary
- [ ] Upload obituary photo
- [ ] Edit existing obituary
- [ ] Publish obituary
- [ ] Delete obituary
- [ ] View obituary details
- [ ] Search and filter obituaries

#### Comments System Testing
- [ ] Add comment to obituary
- [ ] Edit own comment
- [ ] Delete own comment
- [ ] Admin approve/reject comments
- [ ] Real-time comment updates
- [ ] Comment notifications

#### Notifications Testing
- [ ] Receive notifications for new comments
- [ ] Mark notifications as read
- [ ] Real-time notification updates
- [ ] Notification history
- [ ] Admin broadcast notifications

#### File Upload Testing
- [ ] Upload valid image files
- [ ] Reject invalid file types
- [ ] Enforce file size limits
- [ ] Image compression works
- [ ] File deletion works
- [ ] Public URL generation

#### Admin Panel Testing
- [ ] Admin dashboard loads
- [ ] User management functions
- [ ] Content moderation works
- [ ] Activity logs display
- [ ] System statistics accurate
- [ ] Bulk operations work

#### Real-time Features Testing
- [ ] Comments update in real-time
- [ ] Notifications appear instantly
- [ ] Activity logs update live
- [ ] Multiple users see same updates
- [ ] Subscriptions cleanup properly

#### Error Handling Testing
- [ ] Network errors handled gracefully
- [ ] Invalid data rejected with clear messages
- [ ] Rate limiting works
- [ ] Retry mechanism functions
- [ ] Offline mode handling

#### Mobile Responsiveness Testing
- [ ] All pages work on mobile
- [ ] Touch interactions work
- [ ] File upload works on mobile
- [ ] Real-time features work on mobile
- [ ] Performance acceptable on mobile

### Automated Testing

#### Unit Tests
```javascript
// Example test for auth service
import { authAPI } from '@/lib/api'

describe('Auth API', () => {
  test('should sign up user successfully', async () => {
    const userData = {
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    }

    const result = await authAPI.signUp(userData.email, userData.password, userData)
    expect(result.error).toBeNull()
    expect(result.data.user).toBeDefined()
  })
})
```

#### Integration Tests
```javascript
// Example integration test
describe('Obituary Creation Flow', () => {
  test('should create obituary with photo', async () => {
    // 1. Sign in user
    const authResult = await authAPI.signIn('test@example.com', 'password123')
    expect(authResult.error).toBeNull()

    // 2. Upload photo
    const file = new File(['test'], 'test.jpg', { type: 'image/jpeg' })
    const uploadResult = await storageAPI.uploadObituaryPhoto(file, 'test-id', authResult.data.user.id)
    expect(uploadResult.error).toBeNull()

    // 3. Create obituary
    const obituaryData = {
      title: 'Test Obituary',
      name: 'John',
      sir_name: 'Doe',
      picture_url: uploadResult.data.url
    }

    const obituaryResult = await obituaryAPI.create(obituaryData, authResult.data.user.id)
    expect(obituaryResult.error).toBeNull()
  })
})
```

### Performance Testing

#### Load Testing
- Test with multiple concurrent users
- Verify real-time features under load
- Check database performance
- Monitor memory usage
- Test file upload limits

#### Stress Testing
- Maximum concurrent connections
- Database connection limits
- Storage bandwidth limits
- API rate limiting effectiveness

---

*Last updated: January 2025*
