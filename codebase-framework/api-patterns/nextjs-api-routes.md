# Next.js API Routes

> Creating API endpoints in Next.js 14 App Router

## Overview

Next.js API Routes let you create API endpoints as part of your Next.js application. In the App Router, these are called Route Handlers and use the `route.ts` naming convention.

---

## Basic Route Handler

```typescript
// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: 'Hello World' })
}
```

**URL:** `http://localhost:3000/api/hello`

---

## HTTP Methods

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

// GET /api/users
export async function GET(request: Request) {
  return NextResponse.json(users)
}

// POST /api/users
export async function POST(request: Request) {
  const body = await request.json()

  const newUser = {
    id: users.length + 1,
    ...body,
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newUser, { status: 201 })
}

// PUT, PATCH, DELETE work similarly
export async function PUT(request: Request) {
  // Handle update
}

export async function DELETE(request: Request) {
  // Handle delete
}
```

---

## Dynamic Routes

```typescript
// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

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

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  const user = users.find(u => u.id === parseInt(params.id))

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  const updated = { ...user, ...body }
  return NextResponse.json(updated)
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  return NextResponse.json({ success: true })
}
```

---

## Query Parameters

```typescript
// GET /api/users?role=admin&status=active
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const role = searchParams.get('role')
  const status = searchParams.get('status')
  const page = parseInt(searchParams.get('page') || '1')

  let filtered = users

  if (role) {
    filtered = filtered.filter(u => u.role === role)
  }

  if (status) {
    filtered = filtered.filter(u => u.status === status)
  }

  return NextResponse.json(filtered)
}
```

---

## Request Body

```typescript
export async function POST(request: Request) {
  const body = await request.json()

  // Validation
  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: 'Name and email are required' },
      { status: 400 }
    )
  }

  // Process
  const newUser = {
    id: Date.now(),
    ...body,
    createdAt: new Date().toISOString(),
  }

  return NextResponse.json(newUser, { status: 201 })
}
```

---

## Headers

```typescript
export async function GET() {
  return NextResponse.json(
    { message: 'Success' },
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  )
}
```

---

## Error Handling

```typescript
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const user = users.find(u => u.id === parseInt(params.id))

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

---

## Common Patterns

### Pagination

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')

  const start = (page - 1) * pageSize
  const end = start + pageSize

  const paginatedUsers = users.slice(start, end)

  return NextResponse.json({
    data: paginatedUsers,
    page,
    pageSize,
    total: users.length,
    totalPages: Math.ceil(users.length / pageSize),
  })
}
```

### Sorting

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  const sortBy = searchParams.get('sortBy') || 'name'
  const order = searchParams.get('order') || 'asc'

  const sorted = [...users].sort((a, b) => {
    if (order === 'asc') {
      return a[sortBy] > b[sortBy] ? 1 : -1
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1
    }
  })

  return NextResponse.json(sorted)
}
```

### Search

```typescript
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()

  if (!query) {
    return NextResponse.json(users)
  }

  const results = users.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query)
  )

  return NextResponse.json(results)
}
```

---

## CORS

```typescript
export async function GET() {
  return NextResponse.json(
    { message: 'Success' },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
```

---

**Last Updated:** 2025-12-19
