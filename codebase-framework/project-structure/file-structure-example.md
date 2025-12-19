# File Structure Example

> A complete, annotated example of a well-structured Next.js project

## Overview

This guide shows a complete, real-world project structure with annotations explaining each file's purpose. Use this as a reference when setting up your own projects.

---

## Complete Project Structure

```
my-saas-app/
├── app/                                    # Next.js App Router
│   ├── layout.tsx                          # Root layout with providers
│   ├── page.tsx                            # Homepage (/)
│   ├── globals.css                         # Global styles + Tailwind
│   │
│   ├── (marketing)/                        # Marketing route group
│   │   ├── layout.tsx                      # Marketing layout
│   │   ├── about/
│   │   │   └── page.tsx                    # /about
│   │   ├── pricing/
│   │   │   └── page.tsx                    # /pricing
│   │   └── contact/
│   │       └── page.tsx                    # /contact
│   │
│   ├── (app)/                              # App route group (authenticated)
│   │   ├── layout.tsx                      # App layout with sidebar
│   │   ├── dashboard/
│   │   │   ├── page.tsx                    # /dashboard
│   │   │   ├── loading.tsx                 # Loading state
│   │   │   └── components/
│   │   │       ├── metrics-card.tsx        # Dashboard-specific component
│   │   │       └── recent-activity.tsx     # Dashboard-specific component
│   │   │
│   │   ├── users/
│   │   │   ├── page.tsx                    # /users (list)
│   │   │   ├── new/
│   │   │   │   └── page.tsx                # /users/new (create form)
│   │   │   ├── [id]/
│   │   │   │   ├── page.tsx                # /users/[id] (view)
│   │   │   │   ├── edit/
│   │   │   │   │   └── page.tsx            # /users/[id]/edit
│   │   │   │   └── loading.tsx             # Loading for user detail
│   │   │   ├── components/
│   │   │   │   ├── user-card.tsx           # Users feature component
│   │   │   │   ├── user-table.tsx          # Users feature component
│   │   │   │   └── user-form.tsx           # Users feature component
│   │   │   └── error.tsx                   # Error boundary
│   │   │
│   │   ├── products/
│   │   │   ├── page.tsx                    # /products
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx                # /products/[id]
│   │   │   └── components/
│   │   │       └── product-card.tsx
│   │   │
│   │   └── settings/
│   │       ├── page.tsx                    # /settings
│   │       ├── profile/
│   │       │   └── page.tsx                # /settings/profile
│   │       └── security/
│   │           └── page.tsx                # /settings/security
│   │
│   ├── api/                                # API routes
│   │   ├── users/
│   │   │   ├── route.ts                    # GET/POST /api/users
│   │   │   └── [id]/
│   │   │       └── route.ts                # GET/PUT/DELETE /api/users/[id]
│   │   ├── products/
│   │   │   ├── route.ts                    # GET/POST /api/products
│   │   │   └── [id]/
│   │   │       └── route.ts                # GET/PUT/DELETE /api/products/[id]
│   │   └── health/
│   │       └── route.ts                    # GET /api/health
│   │
│   ├── login/
│   │   └── page.tsx                        # /login
│   ├── signup/
│   │   └── page.tsx                        # /signup
│   │
│   ├── not-found.tsx                       # Global 404 page
│   └── error.tsx                           # Global error boundary
│
├── components/                             # React components
│   ├── ui/                                 # ShadCN components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── table.tsx
│   │   ├── dialog.tsx
│   │   ├── toast.tsx
│   │   └── ...                             # Other ShadCN components
│   │
│   ├── layout/                             # Layout components
│   │   ├── header.tsx                      # Site header
│   │   ├── footer.tsx                      # Site footer
│   │   ├── sidebar.tsx                     # Sidebar navigation
│   │   ├── main-nav.tsx                    # Main navigation
│   │   └── mobile-nav.tsx                  # Mobile navigation
│   │
│   └── shared/                             # Shared across features
│       ├── data-table.tsx                  # TanStack Table wrapper
│       ├── search-input.tsx                # Search field
│       ├── pagination.tsx                  # Pagination controls
│       ├── loading-spinner.tsx             # Loading states
│       ├── error-message.tsx               # Error display
│       ├── empty-state.tsx                 # Empty state UI
│       ├── confirmation-dialog.tsx         # Confirmation modal
│       └── avatar.tsx                      # User avatar
│
├── lib/                                    # Utilities and shared code
│   ├── utils.ts                            # Utility functions (cn, formatters)
│   ├── types.ts                            # Shared TypeScript types
│   ├── constants.ts                        # App-wide constants
│   ├── api-client.ts                       # API client configuration
│   └── validations.ts                      # Zod schemas
│
├── hooks/                                  # Custom React hooks
│   ├── use-api.ts                          # Data fetching hook
│   ├── use-local-storage.ts                # localStorage hook
│   ├── use-debounce.ts                     # Debounce hook
│   ├── use-media-query.ts                  # Responsive hook
│   └── use-toast.ts                        # Toast notifications (from ShadCN)
│
├── contexts/                               # React Context providers
│   ├── theme-context.tsx                   # Theme provider (light/dark)
│   └── app-context.tsx                     # App-level state
│
├── data/                                   # Dummy JSON files
│   ├── users.json                          # User seed data
│   ├── products.json                       # Product seed data
│   ├── orders.json                         # Order seed data
│   └── README.md                           # Data structure docs
│
├── public/                                 # Static assets
│   ├── images/
│   │   ├── logo.svg                        # App logo
│   │   ├── hero.jpg                        # Hero image
│   │   └── avatars/                        # User avatars
│   │       ├── default.svg
│   │       └── ...
│   ├── favicon.ico
│   └── robots.txt
│
├── tests/                                  # Test files
│   ├── e2e/                                # End-to-end tests
│   │   ├── auth.spec.ts                    # Auth flow tests
│   │   ├── users.spec.ts                   # User management tests
│   │   └── dashboard.spec.ts               # Dashboard tests
│   ├── fixtures/                           # Test data
│   │   ├── users.json
│   │   └── products.json
│   └── playwright.config.ts                # Playwright config
│
├── config/                                 # Configuration files
│   ├── site.ts                             # Site metadata
│   └── navigation.ts                       # Navigation structure
│
├── .env.local                              # Local environment variables (not committed)
├── .env.example                            # Example env vars (committed)
├── .eslintrc.json                          # ESLint configuration
├── .gitignore                              # Git ignore rules
├── .prettierrc                             # Prettier configuration
├── components.json                         # ShadCN configuration
├── next.config.mjs                         # Next.js configuration
├── package.json                            # Dependencies and scripts
├── postcss.config.js                       # PostCSS configuration
├── README.md                               # Project documentation
├── tailwind.config.ts                      # Tailwind configuration
└── tsconfig.json                           # TypeScript configuration
```

---

## Key File Examples

### Root Layout

```typescript
// app/layout.tsx
import './globals.css'
import { ThemeProvider } from '@/contexts/theme-context'

export const metadata = {
  title: 'My SaaS App',
  description: 'Modern SaaS application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### Marketing Layout

```typescript
// app/(marketing)/layout.tsx
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
```

### App Layout (with Sidebar)

```typescript
// app/(app)/layout.tsx
import { Sidebar } from '@/components/layout/sidebar'
import { Header } from '@/components/layout/header'

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
```

### Users List Page

```typescript
// app/(app)/users/page.tsx
import { UserTable } from './components/user-table'

export default async function UsersPage() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store'
  })
  const users = await res.json()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button asChild>
          <Link href="/users/new">Add User</Link>
        </Button>
      </div>

      <UserTable users={users} />
    </div>
  )
}
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

### Shared Data Table Component

```typescript
// components/shared/data-table.tsx
'use client'

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
```

### Custom Hook

```typescript
// hooks/use-api.ts
import { useEffect, useState } from 'react'

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}
```

### Types

```typescript
// lib/types.ts
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
  avatar?: string
  createdAt: string
}

export interface Product {
  id: number
  name: string
  description: string
  price: number
  category: string
  inStock: boolean
}

export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}
```

### Constants

```typescript
// lib/constants.ts
export const APP_NAME = 'My SaaS App'
export const APP_DESCRIPTION = 'Modern SaaS application'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export const ITEMS_PER_PAGE = 10
export const MAX_FILE_SIZE = 5_000_000 // 5MB

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  USERS: '/users',
  PRODUCTS: '/products',
  SETTINGS: '/settings',
  LOGIN: '/login',
  SIGNUP: '/signup',
} as const
```

### Dummy Data

```json
// data/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "status": "active",
    "avatar": "/images/avatars/john.jpg",
    "createdAt": "2025-01-15T10:30:00Z"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "user",
    "status": "active",
    "avatar": "/images/avatars/jane.jpg",
    "createdAt": "2025-02-20T14:45:00Z"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "role": "user",
    "status": "inactive",
    "avatar": null,
    "createdAt": "2024-12-10T09:15:00Z"
  }
]
```

### Configuration Files

```typescript
// config/site.ts
export const siteConfig = {
  name: 'My SaaS App',
  description: 'Modern SaaS application built with Next.js',
  url: 'https://example.com',
  ogImage: 'https://example.com/og.jpg',
  links: {
    twitter: 'https://twitter.com/myapp',
    github: 'https://github.com/myapp',
  },
}
```

```typescript
// config/navigation.ts
export const navigationConfig = {
  main: [
    { title: 'Features', href: '/#features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' },
  ],
  app: [
    { title: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
    { title: 'Users', href: '/users', icon: 'users' },
    { title: 'Products', href: '/products', icon: 'products' },
    { title: 'Settings', href: '/settings', icon: 'settings' },
  ],
}
```

---

## Size Guidelines

### Small Project (< 10 pages)
- Flatten structure
- Put components in `/components/shared`
- Skip route groups
- Minimal API routes

### Medium Project (10-30 pages)
- Use route groups
- Add feature-specific components
- Organize by domain
- This example structure

### Large Project (30+ pages)
- Feature folders with own components/hooks/lib
- Microf rontends or monorepo
- Consider splitting into modules
- Advanced optimization

---

**Related Guides:**
- [Project Structure](README.md)
- [Next.js App Router](nextjs-app-router.md)
- [Folder Organization](folder-organization.md)
- [Naming Conventions](naming-conventions.md)

---

**Last Updated:** 2025-12-19
