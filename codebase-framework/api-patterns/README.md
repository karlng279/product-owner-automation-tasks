# API Patterns

> Building APIs with Next.js API routes and dummy data

## Overview

This guide covers API patterns for building backend functionality using Next.js API routes and dummy JSON data. This approach lets you build working frontends without a real database or backend infrastructure.

**Philosophy:** Simulate real APIs with dummy data to validate UX before investing in backend infrastructure.

---

## The Dummy Data Strategy

### Why Dummy Data?

Instead of building a real backend first, use dummy JSON files:

**Benefits:**
- ✅ No database setup needed
- ✅ No backend infrastructure required
- ✅ Easy deployment (static hosting)
- ✅ Fast iteration on frontend
- ✅ Realistic API patterns
- ✅ Easy to swap for real backend later

**When to Upgrade:**
- After validating UX with stakeholders
- When you need real user data
- When you need persistence across sessions
- When dummy data becomes too complex to manage

---

## API Architecture

### File Structure

```
/
├── app/api/                    # API routes
│   ├── users/
│   │   ├── route.ts            # GET/POST /api/users
│   │   └── [id]/
│   │       └── route.ts        # GET/PUT/DELETE /api/users/[id]
│   ├── products/
│   │   └── route.ts
│   └── health/
│       └── route.ts
│
└── data/                       # Dummy JSON files
    ├── users.json
    ├── products.json
    └── orders.json
```

### Request Flow

```
Client Request
    ↓
Next.js API Route (/app/api/users/route.ts)
    ↓
Read from JSON file (/data/users.json)
    ↓
Process & Transform
    ↓
Return Response
```

---

## Quick Example

### Dummy Data File

```json
// data/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "status": "active",
    "createdAt": "2025-01-15T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "user",
    "status": "active",
    "createdAt": "2025-02-20T14:45:00Z"
  }
]
```

### API Route

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET() {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300))

  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()

  // Validate
  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    )
  }

  // Simulate creation
  const newUser = {
    id: users.length + 1,
    ...body,
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newUser, { status: 201 })
}
```

### Usage

```typescript
// Client Component
const response = await fetch('/api/users')
const users = await response.json()

// Server Component
const users = await fetch('http://localhost:3000/api/users')
  .then(r => r.json())
```

---

## Key Concepts

### 1. RESTful Routes

Follow REST conventions:

```
GET    /api/users          → List all users
POST   /api/users          → Create user
GET    /api/users/[id]     → Get single user
PUT    /api/users/[id]     → Update user
DELETE /api/users/[id]     → Delete user
```

### 2. Response Formats

Consistent response structure:

```typescript
// Success
{
  "data": [...],
  "message": "Success"
}

// Error
{
  "error": "Error message",
  "details": "Optional details"
}

// Paginated
{
  "data": [...],
  "page": 1,
  "pageSize": 10,
  "total": 100
}
```

### 3. Status Codes

Use proper HTTP status codes:

```typescript
200 OK              → Success
201 Created         → Resource created
400 Bad Request     → Validation error
404 Not Found       → Resource not found
500 Server Error    → Server error
```

### 4. Simulating Reality

Make dummy APIs feel real:

```typescript
// Network delay
await new Promise(resolve => setTimeout(resolve, 300))

// Pagination
const page = parseInt(searchParams.get('page') || '1')
const pageSize = 10
const start = (page - 1) * pageSize
const paginatedUsers = users.slice(start, start + pageSize)

// Filtering
const role = searchParams.get('role')
const filtered = role ? users.filter(u => u.role === role) : users

// Sorting
const sortBy = searchParams.get('sortBy') || 'name'
const sorted = [...users].sort((a, b) =>
  a[sortBy].localeCompare(b[sortBy])
)
```

---

## Documentation Index

### Setup & Organization
- **[Dummy Data Organization](dummy-data-organization.md)** - Structuring JSON files
- **[API Conventions](api-conventions.md)** - REST patterns and response formats

### Implementation
- **[Next.js API Routes](nextjs-api-routes.md)** - Creating API endpoints
- **[Example Endpoints](example-endpoints.md)** - Common endpoint patterns

### Data Fetching
- **[Server-Side Fetching](data-fetching-server.md)** - Server Components
- **[Client-Side Fetching](data-fetching-client.md)** - Client Components

---

## Best Practices

### 1. Realistic Data

Create realistic dummy data:

```json
{
  "id": 1,
  "name": "John Doe",               // Realistic name
  "email": "john@example.com",      // Valid email format
  "avatar": "/avatars/john.jpg",    // Valid file paths
  "createdAt": "2025-01-15T10:30:00Z"  // ISO 8601 dates
}
```

### 2. Consistent IDs

Use consistent ID formats:

```typescript
// ✅ Good - Sequential IDs
{ "id": 1 }, { "id": 2 }, { "id": 3 }

// ✅ Also good - UUID format (for realism)
{ "id": "550e8400-e29b-41d4-a716-446655440000" }
```

### 3. Include Relationships

Show relationships between entities:

```json
// users.json
{ "id": 1, "name": "John" }

// posts.json
{
  "id": 1,
  "userId": 1,           // Foreign key
  "title": "My Post",
  "author": {            // Embedded relationship
    "id": 1,
    "name": "John"
  }
}
```

### 4. Error Simulation

Simulate errors for testing:

```typescript
// Simulate 404
if (id === '999') {
  return NextResponse.json(
    { error: 'User not found' },
    { status: 404 }
  )
}

// Simulate validation error
if (!body.email.includes('@')) {
  return NextResponse.json(
    { error: 'Invalid email' },
    { status: 400 }
  )
}
```

### 5. Network Delays

Add realistic delays:

```typescript
// Fast (< 100ms)
await new Promise(resolve => setTimeout(resolve, 50))

// Normal (100-500ms)
await new Promise(resolve => setTimeout(resolve, 300))

// Slow (500ms+) - for testing loading states
await new Promise(resolve => setTimeout(resolve, 1000))
```

---

## Common Patterns

### List Endpoint

```typescript
// GET /api/users
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Pagination
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')

  // Filtering
  const role = searchParams.get('role')

  let filtered = users
  if (role) {
    filtered = users.filter(u => u.role === role)
  }

  // Pagination
  const start = (page - 1) * pageSize
  const paginatedUsers = filtered.slice(start, start + pageSize)

  return NextResponse.json({
    data: paginatedUsers,
    page,
    pageSize,
    total: filtered.length,
  })
}
```

### Detail Endpoint

```typescript
// GET /api/users/[id]
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = users.find(u => u.id === parseInt(params.id))

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(user)
}
```

### Create Endpoint

```typescript
// POST /api/users
export async function POST(request: Request) {
  const body = await request.json()

  // Validation
  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    )
  }

  // Simulate creation
  const newUser = {
    id: users.length + 1,
    ...body,
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newUser, { status: 201 })
}
```

---

## Migration Path

When ready to switch to a real backend:

1. **Keep the same API routes** (`/api/users`, etc.)
2. **Replace JSON imports** with database calls
3. **Client code stays the same** - same fetch URLs
4. **Add real persistence** - writes now save to database

```typescript
// Before (dummy data)
import users from '@/data/users.json'
const user = users.find(u => u.id === id)

// After (real database)
import { db } from '@/lib/database'
const user = await db.users.findUnique({ where: { id } })
```

---

## Quick Reference

Concept | Implementation
---|---
Dummy Data | JSON files in `/data`
API Routes | TypeScript files in `/app/api`
List Endpoint | `GET /api/users`
Detail Endpoint | `GET /api/users/[id]`
Create | `POST /api/users`
Update | `PUT /api/users/[id]`
Delete | `DELETE /api/users/[id]`
Pagination | Query params: `?page=1&pageSize=10`
Filtering | Query params: `?role=admin`
Sorting | Query params: `?sortBy=name&order=asc`

---

**Related Documentation:**
- [Dummy Data Organization](dummy-data-organization.md)
- [Next.js API Routes](nextjs-api-routes.md)
- [State Management](../state-management/README.md)
- [Quick Start Guide](../QUICK_START.md)

**External Resources:**
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [REST API Best Practices](https://restfulapi.net/)

---

**Last Updated:** 2025-12-19
