# Folder Organization

> Detailed guidelines for organizing components, utilities, and assets

## Overview

This guide provides specific rules for organizing different types of files in your Next.js project, ensuring consistency and maintainability.

---

## Components Organization

### `/components/ui` - ShadCN Components

**Purpose:** Auto-generated ShadCN UI components

**Rules:**
- Don't edit directly (re-run `npx shadcn-ui add` to update)
- All lowercase with hyphens: `button.tsx`, `data-table.tsx`
- One component per file

**Example:**
```
components/ui/
├── button.tsx
├── card.tsx
├── input.tsx
├── select.tsx
├── table.tsx
└── dialog.tsx
```

**Installation:**
```bash
npx shadcn-ui@latest add button card input
```

---

### `/components/layout` - Layout Components

**Purpose:** Site-wide layout components (header, footer, navigation)

**Rules:**
- Used in `app/layout.tsx` or route layouts
- Lowercase with hyphens: `header.tsx`, `main-nav.tsx`
- Export as named or default

**Example:**
```
components/layout/
├── header.tsx           # Site header
├── footer.tsx           # Site footer
├── sidebar.tsx          # Sidebar navigation
├── main-nav.tsx         # Main navigation menu
└── mobile-nav.tsx       # Mobile navigation
```

**Implementation:**
```typescript
// components/layout/header.tsx
import { MainNav } from './main-nav'

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center">
        <MainNav />
      </div>
    </header>
  )
}
```

**Usage:**
```typescript
// app/layout.tsx
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

---

### `/components/shared` - Shared Components

**Purpose:** Components used across multiple features

**Rules:**
- Used by 2+ different pages/features
- Lowercase with hyphens
- Include related sub-components

**Example:**
```
components/shared/
├── data-table.tsx       # TanStack Table wrapper
├── search-input.tsx     # Search field
├── pagination.tsx       # Pagination controls
├── loading-spinner.tsx  # Loading states
├── error-message.tsx    # Error display
├── empty-state.tsx      # Empty state UI
└── confirmation-dialog.tsx  # Confirmation modal
```

**Data Table Example:**
```typescript
// components/shared/data-table.tsx
'use client'

import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'
import { Table } from '@/components/ui/table'

export function DataTable({ columns, data }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <Table>
      {/* Table implementation */}
    </Table>
  )
}
```

---

### `/app/[feature]/components` - Feature-Specific Components

**Purpose:** Components used only within a specific feature

**When to Use:**
- Component is only used by one feature
- Component is tightly coupled to feature logic
- Feature is large enough to warrant isolation

**Example:**
```
app/users/
├── page.tsx
├── [id]/page.tsx
└── components/
    ├── user-card.tsx        # Only used in users feature
    ├── user-avatar.tsx      # Only used in users feature
    └── user-status-badge.tsx  # Only used in users feature
```

**Implementation:**
```typescript
// app/users/components/user-card.tsx
import { Card } from '@/components/ui/card'
import { User } from '@/lib/types'

export function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </Card>
  )
}
```

**Usage:**
```typescript
// app/users/page.tsx
import { UserCard } from './components/user-card'

export default function UsersPage() {
  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
```

---

## Library Organization (`/lib`)

### Purpose

Shared utilities, types, and configurations used across the application.

### File Structure

```
lib/
├── utils.ts             # Utility functions (cn, formatters, etc)
├── types.ts             # Shared TypeScript types
├── constants.ts         # App-wide constants
├── api-client.ts        # API client configuration
├── validations.ts       # Zod schemas for validation
└── helpers/             # Complex utilities (if needed)
    ├── date-utils.ts
    └── string-utils.ts
```

### `utils.ts` - General Utilities

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Tailwind class merge utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Date formatting
export function formatDate(date: string | Date): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Currency formatting
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text
  return text.slice(0, length) + '...'
}
```

### `types.ts` - Shared Types

```typescript
// lib/types.ts

// Domain types
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
  status: 'active' | 'inactive'
  createdAt: string
}

export interface Product {
  id: number
  name: string
  price: number
  category: string
}

// API types
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
}

// UI types
export type SortDirection = 'asc' | 'desc'

export interface TableColumn<T> {
  key: keyof T
  label: string
  sortable?: boolean
}
```

### `constants.ts` - Constants

```typescript
// lib/constants.ts

export const APP_NAME = 'My App'
export const APP_DESCRIPTION = 'Product description'

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api'

export const ITEMS_PER_PAGE = 10

export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
} as const

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
} as const

export const ROUTES = {
  HOME: '/',
  USERS: '/users',
  PRODUCTS: '/products',
  SETTINGS: '/settings',
} as const
```

### `validations.ts` - Zod Schemas

```typescript
// lib/validations.ts
import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user']),
})

export const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.number().positive('Price must be positive'),
  category: z.string().min(1, 'Category is required'),
})

export type UserFormData = z.infer<typeof userSchema>
export type ProductFormData = z.infer<typeof productSchema>
```

---

## Hooks Organization (`/hooks`)

### Purpose

Custom React hooks for reusable logic.

### File Structure

```
hooks/
├── use-api.ts              # Data fetching hook
├── use-local-storage.ts    # localStorage hook
├── use-debounce.ts         # Debounce hook
├── use-media-query.ts      # Responsive hook
└── [feature]/              # Feature-specific hooks (optional)
    └── use-user-filter.ts
```

### Example Hooks

```typescript
// hooks/use-api.ts
import { useEffect, useState } from 'react'

export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
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

```typescript
// hooks/use-debounce.ts
import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
```

---

## Contexts Organization (`/contexts`)

### Purpose

React Context providers for app-wide state.

### File Structure

```
contexts/
├── theme-context.tsx       # Theme (light/dark)
├── auth-context.tsx        # Authentication (when needed)
└── app-context.tsx         # General app state
```

### Example Context

```typescript
// contexts/theme-context.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
```

---

## Data Organization (`/data`)

### Purpose

Dummy JSON files for prototyping.

### File Structure

```
data/
├── users.json
├── products.json
├── orders.json
├── categories.json
└── README.md            # Data structure documentation
```

### Guidelines

**File Naming:**
- Plural nouns: `users.json`, `products.json`
- Lowercase with hyphens: `api-keys.json`, `user-roles.json`

**Data Structure:**
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
  }
]
```

**Best Practices:**
- Use arrays for collections
- Include 5-20 sample records
- Use realistic data
- Include all required fields
- Use ISO 8601 for dates
- Document schema in README.md

---

## Public Assets (`/public`)

### Purpose

Static files served directly from root URL.

### File Structure

```
public/
├── images/
│   ├── logo.svg
│   ├── hero.jpg
│   ├── avatars/
│   │   ├── user-1.jpg
│   │   └── user-2.jpg
│   └── products/
│       ├── product-1.jpg
│       └── product-2.jpg
├── fonts/
│   └── custom-font.woff2
├── favicon.ico
├── robots.txt
└── sitemap.xml
```

### Guidelines

**Images:**
- Use WebP for photos
- Use SVG for icons/logos
- Optimize before adding
- Use descriptive names: `hero-banner.jpg` not `img1.jpg`

**Fonts:**
- Only add if truly custom
- Prefer Next.js font optimization
- Use WOFF2 format

**Access:**
```tsx
// ✅ Correct
<img src="/images/logo.svg" alt="Logo" />

// ❌ Wrong
<img src="/public/images/logo.svg" alt="Logo" />
```

---

## Quick Decision Guide

### Where should this component go?

```
Is it auto-generated by ShadCN?
├─ Yes → components/ui/
└─ No
   ├─ Used site-wide (header, footer)?
   │  └─ Yes → components/layout/
   └─ Used by multiple features?
      ├─ Yes → components/shared/
      └─ No → app/[feature]/components/
```

### Where should this utility go?

```
Is it a general utility?
├─ Yes → lib/utils.ts
└─ No
   ├─ Is it a React hook?
   │  └─ Yes → hooks/
   └─ Is it feature-specific?
      └─ Yes → app/[feature]/lib/
```

### Where should this type go?

```
Used by multiple features?
├─ Yes → lib/types.ts
└─ No → app/[feature]/types.ts or inline
```

---

**Related Guides:**
- [Project Structure](README.md)
- [Next.js App Router](nextjs-app-router.md)
- [Naming Conventions](naming-conventions.md)

---

**Last Updated:** 2025-12-19
