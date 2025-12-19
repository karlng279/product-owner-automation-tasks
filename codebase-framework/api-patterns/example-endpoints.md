# Example Endpoints

> Complete API endpoint examples

## Users CRUD

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

// GET /api/users
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)

  // Filtering
  const role = searchParams.get('role')
  const status = searchParams.get('status')

  // Pagination
  const page = parseInt(searchParams.get('page') || '1')
  const pageSize = parseInt(searchParams.get('pageSize') || '10')

  let filtered = users

  if (role) {
    filtered = filtered.filter(u => u.role === role)
  }

  if (status) {
    filtered = filtered.filter(u => u.status === status)
  }

  // Paginate
  const start = (page - 1) * pageSize
  const paginatedUsers = filtered.slice(start, start + pageSize)

  return NextResponse.json({
    data: paginatedUsers,
    page,
    pageSize,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / pageSize),
  })
}

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

```typescript
// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

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

// PUT /api/users/[id]
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

  const updated = { ...user, ...body, updatedAt: new Date().toISOString() }
  return NextResponse.json(updated)
}

// DELETE /api/users/[id]
export async function DELETE(
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

  return NextResponse.json({ success: true })
}
```

---

## Search Endpoint

```typescript
// app/api/search/route.ts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  const results = users.filter(user =>
    user.name.toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query)
  )

  return NextResponse.json({ results })
}
```

---

## Health Check

```typescript
// app/api/health/route.ts
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  })
}
```

---

**Last Updated:** 2025-12-19
