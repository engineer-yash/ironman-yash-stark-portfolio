# Tony Stark Portfolio - Backend Integration Contracts

## Overview
Frontend-only Tony Stark portfolio is complete with mock data. This document outlines the backend integration plan.

## Mock Data Currently Used
Located in `/app/frontend/src/mockData.js`:

### Personal Information
- Name, title, bio, location, contact details
- Profile image URL (using provided photo)
- Social links (GitHub, LinkedIn, Resume PDF)

### Skills & Experience
- Technical skills with proficiency levels
- Professional experience at The One Technologies
- Project portfolio (SimpleTix, SpectrOm'23, Dairy Farm Management)
- Education details (Om Engineering College)
- Certifications and achievements

### JARVIS Responses
- Mock AI responses for different user queries
- Voice assistant interactions
- Contextual responses about skills, projects, experience

## Backend API Endpoints Needed

### 1. Contact Form API
**Endpoint**: `POST /api/contact`
**Purpose**: Handle contact form submissions
**Request Body**:
```json
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}
```
**Response**: Success/failure status

### 2. JARVIS AI Integration
**Endpoint**: `POST /api/jarvis/chat`
**Purpose**: Real AI responses instead of mock responses
**Request Body**:
```json
{
  "message": "string",
  "context": "portfolio_data"
}
```
**Response**: 
```json
{
  "response": "string",
  "timestamp": "datetime"
}
```

### 3. Analytics & Visitor Tracking (Optional)
**Endpoint**: `POST /api/analytics/visit`
**Purpose**: Track portfolio views and interactions
**Request Body**:
```json
{
  "page": "string",
  "action": "string",
  "timestamp": "datetime"
}
```

## Database Schema

### Contact Messages
```sql
contact_messages:
- id (Primary Key)
- name (VARCHAR)
- email (VARCHAR) 
- subject (VARCHAR)
- message (TEXT)
- created_at (TIMESTAMP)
- status (ENUM: 'new', 'read', 'replied')
```

### Chat History (Optional)
```sql
jarvis_chats:
- id (Primary Key)
- session_id (VARCHAR)
- user_message (TEXT)
- jarvis_response (TEXT)
- created_at (TIMESTAMP)
```

## Frontend Integration Changes Needed

### 1. Contact Form
- File: `/app/frontend/src/pages/Contact.js`
- Replace mock form submission with real API call
- Add proper error handling and loading states

### 2. JARVIS Assistant
- File: `/app/frontend/src/components/JarvisAssistant.js`
- File: `/app/frontend/src/context/JarvisContext.js` 
- Replace `getAIResponse()` mock with real API integration
- Requires AI API key (OpenAI GPT-4o or Claude recommended)

### 3. Environment Variables
Add to `/app/frontend/.env`:
```
REACT_APP_BACKEND_URL=<existing_value>
# AI integration will need API keys in backend .env
```

Add to `/app/backend/.env`:
```
OPENAI_API_KEY=<user_provided>
# or
ANTHROPIC_API_KEY=<user_provided>
```

## Links to be Implemented
From resume extraction:
- GitHub repository links (currently placeholder)
- Blog links (Blog1, Blog2, Blog3 - currently placeholder)
- Project live demo links
- LinkedIn profile integration

## Current Status
✅ **Frontend Complete**: All pages functional with Iron Man theme
✅ **Responsive Design**: Mobile and desktop optimized
✅ **Navigation**: Improved navbar with photo and proper styling
✅ **JARVIS System**: Offline by default, activatable by user
✅ **Resume Integration**: All resume content properly displayed
✅ **Download Functionality**: Resume PDF download working

## Next Steps for Backend
1. Create contact form API endpoint
2. Set up AI integration for JARVIS responses
3. Replace mock data with backend integration
4. Add proper error handling and loading states
5. Test all functionality end-to-end

## Theme Compliance
- ✅ Iron Man color scheme (red/gold instead of JARVIS green)
- ✅ Minimal animations for performance  
- ✅ Eye-catching buttons matching theme
- ✅ Professional photo used in navigation
- ✅ All resume details accurately represented