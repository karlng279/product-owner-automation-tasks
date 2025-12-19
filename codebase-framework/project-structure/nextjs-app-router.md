# Next.js App Router Conventions

> Understanding the App Router file system and routing patterns

## Overview

Next.js 14+ uses the App Router (`/app` directory) for routing, layouts, and API endpoints. This guide explains the conventions and patterns you need to know.

**Key Concept:** File system = Routing system. The folder structure in `/app` directly maps to URL routes.

---

## Basic Routing

### Pages

**Convention:** `page.tsx` files create routes

```
app/
├── page.tsx                 → /
├── about/
│   └── page.tsx             → /about
├── users/
│   └── page.tsx             → /users
└── products/
    └── page.tsx             → /products
```

**Example:**

```typescript
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>
}
```

---

## Dynamic Routes

### Single Parameter

Use `[param]` for dynamic segments:

```
app/users/[id]/page.tsx      → /users/123
```

**Implementation:**

```typescript
// app/users/[id]/page.tsx
export default function UserPage({ params }: { params: { id: string } }) {
  return <h1>User ID: {params.id}</h1>
}
```

### Multiple Parameters

```
app/products/[category]/[id]/page.tsx  → /products/electronics/456
```

```typescript
export default function ProductPage({
  params
}: {
  params: { category: string; id: string }
}) {
  return (
    <div>
      <h1>Product {params.id}</h1>
      <p>Category: {params.category}</p>
    </div>
  )
}
```

### Catch-All Routes

Use `[...param]` to catch all segments:

```
app/docs/[...slug]/page.tsx  → /docs/a
                              → /docs/a/b
                              → /docs/a/b/c
```

```typescript
export default function DocsPage({ params }: { params: { slug: string[] } }) {
  return <div>Path: {params.slug.join('/')}</div>
}
```

---

## Special Files

### `layout.tsx` - Shared Layouts

Wraps pages and persists across navigation.

**Root Layout (Required):**

```typescript
// app/layout.tsx
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>My App</header>
        <main>{children}</main>
        <footer>© 2025</footer>
      </body>
    </html>
  )
}
```

**Nested Layouts:**

```
app/
├── layout.tsx               # Root layout
└── dashboard/
    ├── layout.tsx           # Dashboard layout
    └── page.tsx             # Dashboard page
```

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="dashboard">
      <aside>Sidebar</aside>
      <main>{children}</main>
    </div>
  )
}
```

### `loading.tsx` - Loading UI

Shows while page loads (uses React Suspense).

```typescript
// app/users/loading.tsx
export default function Loading() {
  return <div>Loading users...</div>
}
```

### `error.tsx` - Error Handling

Catches errors in a route segment.

```typescript
// app/users/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  )
}
```

### `not-found.tsx` - 404 Page

```typescript
// app/not-found.tsx
export default function NotFound() {
  return <h1>404 - Page Not Found</h1>
}
```

Or for specific routes:

```typescript
// app/users/[id]/not-found.tsx
export default function UserNotFound() {
  return <h1>User not found</h1>
}
```

Trigger with:

```typescript
import { notFound } from 'next/navigation'

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)

  if (!user) {
    notFound() // Shows not-found.tsx
  }

  return <div>{user.name}</div>
}
```

---

## API Routes

### `route.ts` - API Endpoints

**Convention:** `route.ts` files in `/app/api` create API endpoints.

```
app/api/
├── users/
│   └── route.ts             → GET/POST /api/users
└── products/
    └── route.ts             → GET/POST /api/products
```

**Example:**

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET() {
  return NextResponse.json(users)
}

export async function POST(request: Request) {
  const body = await request.json()
  // Handle create user
  return NextResponse.json({ success: true })
}
```

### Dynamic API Routes

```
app/api/users/[id]/route.ts  → /api/users/123
```

```typescript
// app/api/users/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = await getUser(params.id)
  return NextResponse.json(user)
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  // Update user
  return NextResponse.json({ success: true })
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Delete user
  return NextResponse.json({ success: true })
}
```

---

## Route Groups

Group routes without affecting URL structure using `(folder)`:

```
app/
├── (marketing)/
│   ├── layout.tsx           # Marketing layout
│   ├── page.tsx             → /
│   └── about/page.tsx       → /about
│
└── (app)/
    ├── layout.tsx           # App layout
    ├── dashboard/page.tsx   → /dashboard
    └── users/page.tsx       → /users
```

**Benefits:**
- Organize related routes
- Apply different layouts
- Don't affect URLs

**Example:**

```typescript
// app/(marketing)/layout.tsx
export default function MarketingLayout({ children }) {
  return (
    <div>
      <nav>Marketing Nav</nav>
      {children}
    </div>
  )
}

// app/(app)/layout.tsx
export default function AppLayout({ children }) {
  return (
    <div>
      <nav>App Nav</nav>
      {children}
    </div>
  )
}
```

---

## Server vs Client Components

### Server Components (Default)

All components are Server Components by default.

```typescript
// app/users/page.tsx
// This is a Server Component (no 'use client')
export default async function UsersPage() {
  // Can directly fetch data
  const res = await fetch('https://api.example.com/users')
  const users = await res.json()

  return <div>{users.map(u => <div key={u.id}>{u.name}</div>)}</div>
}
```

**Benefits:**
- Fetch data server-side
- Reduce JavaScript bundle
- Keep secrets on server
- Better SEO

### Client Components

Use `'use client'` for interactive components.

```typescript
// components/user-filter.tsx
'use client'

import { useState } from 'react'

export function UserFilter() {
  const [filter, setFilter] = useState('')

  return (
    <input
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  )
}
```

**When to use:**
- Event listeners (onClick, onChange, etc.)
- State (useState, useReducer)
- Effects (useEffect)
- Browser APIs (localStorage, etc.)
- Custom hooks

### Mixing Server and Client

```typescript
// app/users/page.tsx (Server Component)
import { UserFilter } from '@/components/user-filter' // Client Component

export default async function UsersPage() {
  const users = await getUsers() // Server-side

  return (
    <div>
      {/* Client Component for interactivity */}
      <UserFilter />

      {/* Server Component for data display */}
      <UserList users={users} />
    </div>
  )
}
```

---

## Data Fetching

### In Server Components

```typescript
// Fetch data directly
export default async function UsersPage() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store' // Don't cache (always fresh)
  })
  const users = await res.json()

  return <div>...</div>
}
```

### In Client Components

```typescript
'use client'

import { useEffect, useState } from 'react'

export default function UsersPage() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return <div>...</div>
}
```

---

## Metadata

### Static Metadata

```typescript
// app/about/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our company',
}

export default function AboutPage() {
  return <h1>About Us</h1>
}
```

### Dynamic Metadata

```typescript
// app/users/[id]/page.tsx
export async function generateMetadata({ params }: { params: { id: string } }) {
  const user = await getUser(params.id)

  return {
    title: user.name,
    description: `Profile of ${user.name}`,
  }
}
```

---

## Common Patterns

### Dashboard with Sidebar

```
app/
└── dashboard/
    ├── layout.tsx           # Sidebar layout
    ├── page.tsx             # /dashboard
    ├── users/page.tsx       # /dashboard/users
    └── settings/page.tsx    # /dashboard/settings
```

```typescript
// app/dashboard/layout.tsx
export default function DashboardLayout({ children }) {
  return (
    <div className="flex">
      <aside className="w-64">
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/users">Users</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  )
}
```

### Authenticated Routes

```typescript
// app/(app)/layout.tsx
import { redirect } from 'next/navigation'

export default async function AppLayout({ children }) {
  const session = await getSession()

  if (!session) {
    redirect('/login')
  }

  return <div>{children}</div>
}
```

### CRUD Routes

```
app/users/
├── page.tsx                 # List (GET)
├── new/page.tsx             # Create form
├── [id]/
│   ├── page.tsx             # View (GET)
│   └── edit/page.tsx        # Update form
└── api/
    └── route.ts             # POST (create)
```

---

## Best Practices

### 1. Prefer Server Components

Default to Server Components, only use Client Components when needed.

### 2. Fetch Data Close to Usage

```typescript
// ✅ Good - Fetch where used
export default async function UsersPage() {
  const users = await getUsers()
  return <UserList users={users} />
}

// ❌ Bad - Fetch in layout and pass down
```

### 3. Use Route Groups for Organization

```
app/
├── (marketing)/
├── (app)/
└── (admin)/
```

### 4. Colocate Related Files

```
app/users/
├── page.tsx
├── loading.tsx
├── error.tsx
└── components/
    └── user-card.tsx
```

### 5. Use TypeScript

```typescript
interface PageProps {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: PageProps) {
  // ...
}
```

---

## Quick Reference

File | Purpose | URL
---|---|---
`page.tsx` | Route page | Defines the route
`layout.tsx` | Shared layout | Wraps pages
`loading.tsx` | Loading UI | Shows while loading
`error.tsx` | Error boundary | Catches errors
`not-found.tsx` | 404 page | Missing routes
`route.ts` | API endpoint | API route
`[param]` | Dynamic segment | `/users/123`
`[...param]` | Catch-all | `/docs/a/b/c`
`(folder)` | Route group | No URL impact

---

**Related Guides:**
- [Project Structure](README.md)
- [Folder Organization](folder-organization.md)
- [Naming Conventions](naming-conventions.md)

**External Resources:**
- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [Routing Fundamentals](https://nextjs.org/docs/app/building-your-application/routing)

---

**Last Updated:** 2025-12-19
