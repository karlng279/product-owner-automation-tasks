# Project Structure

> Organizing your Next.js codebase for scalability and maintainability

## Overview

This guide explains how to structure your Next.js project following industry best practices and the conventions established in this framework.

**Philosophy:** Clear structure reduces cognitive load, speeds up development, and makes onboarding easier.

---

## Table of Contents

1. [Overview](#overview)
2. [Standard Directory Structure](#standard-directory-structure)
3. [Directory Purposes](#directory-purposes)
4. [Key Principles](#key-principles)
5. [Related Guides](#related-guides)

---

## Standard Directory Structure

```
my-project/
├── app/                          # Next.js App Router (pages & API routes)
│   ├── (routes)/                 # Route groups (optional)
│   ├── api/                      # API endpoints
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Global styles
│   └── [feature]/                # Feature-based pages
│
├── components/                   # React components
│   ├── ui/                       # ShadCN components (auto-generated)
│   ├── layout/                   # Layout components (header, footer, nav)
│   ├── shared/                   # Shared/reusable components
│   └── [feature]/                # Feature-specific components
│
├── lib/                          # Utilities and configurations
│   ├── utils.ts                  # Utility functions (cn, formatters, etc)
│   ├── types.ts                  # Shared TypeScript types
│   ├── constants.ts              # App-wide constants
│   ├── api-client.ts             # API client configuration
│   └── validations.ts            # Shared validation schemas (Zod)
│
├── hooks/                        # Custom React hooks
│   ├── use-api.ts                # Data fetching hook
│   ├── use-local-storage.ts      # localStorage hook
│   ├── use-debounce.ts           # Debounce hook
│   └── use-[feature].ts          # Feature-specific hooks
│
├── contexts/                     # React Context providers
│   ├── theme-context.tsx         # Theme provider (light/dark)
│   ├── auth-context.tsx          # Auth provider (when needed)
│   └── app-context.tsx           # App-level state
│
├── data/                         # Dummy JSON files
│   ├── users.json                # User seed data
│   ├── products.json             # Product seed data
│   ├── README.md                 # Data structure documentation
│   └── [domain].json             # Domain-specific data
│
├── public/                       # Static assets (served from /)
│   ├── images/                   # Image files
│   ├── fonts/                    # Custom fonts (if any)
│   └── favicon.ico               # Favicon
│
├── tests/                        # Test files
│   ├── e2e/                      # End-to-end tests (Playwright)
│   ├── unit/                     # Unit tests (optional)
│   └── fixtures/                 # Test fixtures and data
│
├── config/                       # Configuration files (optional)
│   ├── site.ts                   # Site metadata
│   └── navigation.ts             # Navigation structure
│
├── .env.local                    # Local environment variables
├── .env.example                  # Example env vars (committed)
├── .gitignore                    # Git ignore rules
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
├── components.json               # ShadCN configuration
└── README.md                     # Project documentation
```

---

## Directory Purposes

### `/app` - Next.js App Router

**Purpose:** All pages, layouts, and API routes

**Key Files:**
- `layout.tsx` - Root layout wrapping all pages
- `page.tsx` - Route page component
- `loading.tsx` - Loading UI (optional)
- `error.tsx` - Error UI (optional)

**Examples:**
```
app/
├── page.tsx                    # Homepage (/)
├── users/
│   ├── page.tsx                # Users list (/users)
│   └── [id]/
│       └── page.tsx            # User detail (/users/123)
├── api/
│   └── users/
│       ├── route.ts            # GET /api/users
│       └── [id]/
│           └── route.ts        # GET /api/users/123
```

**See:** [nextjs-app-router.md](nextjs-app-router.md)

### `/components` - React Components

**Purpose:** All reusable UI components

**Organization:**

```
components/
├── ui/                   # ShadCN components (don't edit directly)
│   ├── button.tsx
│   ├── card.tsx
│   └── ...
│
├── layout/               # Layout components
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   ├── sidebar.tsx       # Sidebar nav
│   └── nav.tsx           # Navigation menu
│
├── shared/               # Shared across features
│   ├── data-table.tsx    # TanStack Table wrapper
│   ├── loading.tsx       # Loading spinners
│   ├── error-message.tsx # Error display
│   └── empty-state.tsx   # Empty state UI
│
└── users/                # Feature-specific (optional)
    ├── user-card.tsx     # User display card
    └── user-form.tsx     # User form
```

**See:** [folder-organization.md](folder-organization.md)

### `/lib` - Utilities

**Purpose:** Shared utilities, types, and configurations

**Common Files:**

```typescript
// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString()
}
```

```typescript
// lib/types.ts
export interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'user'
}

export interface ApiResponse<T> {
  data: T
  error?: string
}
```

```typescript
// lib/constants.ts
export const APP_NAME = 'My App'
export const API_BASE_URL = '/api'
export const ITEMS_PER_PAGE = 10
```

### `/hooks` - Custom Hooks

**Purpose:** Reusable React hooks

**Examples:**

```typescript
// hooks/use-api.ts
export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}
```

```typescript
// hooks/use-local-storage.ts
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key)
    return stored ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as const
}
```

### `/contexts` - React Context

**Purpose:** App-wide state management

**Example:**

```typescript
// contexts/theme-context.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: 'light', setTheme: () => {} })

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

### `/data` - Dummy JSON Files

**Purpose:** Prototype data for frontend development

**Organization:**

```
data/
├── users.json          # User records
├── products.json       # Product catalog
├── orders.json         # Order history
└── README.md           # Data structure docs
```

**Example:**

```json
// data/users.json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "admin",
    "avatar": "/images/avatars/john.jpg"
  }
]
```

### `/public` - Static Assets

**Purpose:** Files served directly from root URL

**Organization:**

```
public/
├── images/
│   ├── logo.svg
│   ├── avatars/
│   └── products/
├── fonts/
│   └── custom-font.woff2
└── favicon.ico
```

**Access:** Use `/images/logo.svg` (not `/public/images/logo.svg`)

### `/tests` - Test Files

**Purpose:** All test files

**Organization:**

```
tests/
├── e2e/                      # Playwright tests
│   ├── users.spec.ts
│   └── dashboard.spec.ts
├── fixtures/                 # Test data
│   └── users.json
└── playwright.config.ts
```

---

## Key Principles

### 1. Colocation

Keep related files close together:

```
# ✅ Good - Feature folder contains everything
app/users/
├── page.tsx              # Users page
└── components/
    ├── user-list.tsx     # Used only by this page
    └── user-card.tsx     # Used only by this page

# ❌ Bad - Scattered across directories
app/users/page.tsx
components/users/user-list.tsx
components/users/user-card.tsx
```

### 2. Feature-Based Organization (for larger apps)

Group by feature, not by type:

```
# ✅ Good for large apps
app/
├── users/
│   ├── components/
│   ├── hooks/
│   └── page.tsx
├── products/
│   ├── components/
│   ├── hooks/
│   └── page.tsx

# ❌ Bad for large apps
components/users/...
components/products/...
hooks/users/...
hooks/products/...
```

### 3. Shared vs Specific

- **Shared:** Used by 2+ features → `/components/shared`
- **Specific:** Used by 1 feature → `/app/[feature]/components`

### 4. Flat is Better Than Nested

Avoid deep nesting:

```
# ✅ Good - Flat structure
lib/
├── utils.ts
├── types.ts
├── constants.ts

# ❌ Bad - Unnecessary nesting
lib/
└── utilities/
    └── helpers/
        └── functions/
            └── utils.ts
```

### 5. Consistent Naming

See [naming-conventions.md](naming-conventions.md) for detailed rules.

---

## Scaling Patterns

### Small Project (< 10 pages)

```
app/
├── page.tsx
├── users/page.tsx
├── products/page.tsx

components/
├── ui/
└── shared/

lib/
data/
```

Simple, flat structure works well.

### Medium Project (10-30 pages)

```
app/
├── (marketing)/          # Route groups
│   ├── page.tsx
│   └── about/page.tsx
├── (app)/
│   ├── dashboard/
│   ├── users/
│   └── products/

components/
├── ui/
├── layout/
├── shared/
└── [feature]/            # Feature-specific

lib/
hooks/
contexts/
data/
```

Add route groups and feature components.

### Large Project (30+ pages)

```
app/
├── (marketing)/
├── (app)/
│   └── [feature]/
│       ├── components/   # Feature-scoped
│       ├── hooks/        # Feature-scoped
│       ├── lib/          # Feature-scoped
│       └── page.tsx

components/shared/        # Only truly shared
lib/                      # Only truly shared
```

Full feature isolation with shared resources minimized.

---

## Common Patterns

### API Route Organization

```
app/api/
├── users/
│   ├── route.ts          # GET /api/users, POST /api/users
│   └── [id]/
│       └── route.ts      # GET/PUT/DELETE /api/users/[id]
├── products/
│   └── route.ts
└── auth/
    ├── login/route.ts
    └── logout/route.ts
```

### Page Organization

```
app/
├── page.tsx              # /
├── about/page.tsx        # /about
├── users/
│   ├── page.tsx          # /users
│   ├── [id]/
│   │   ├── page.tsx      # /users/[id]
│   │   └── edit/page.tsx # /users/[id]/edit
│   └── new/page.tsx      # /users/new
```

### Component Organization

```
components/
├── ui/                   # ShadCN (auto-generated)
├── layout/               # Site-wide layout
│   ├── header.tsx
│   ├── footer.tsx
│   └── nav.tsx
├── shared/               # Used by multiple features
│   ├── data-table.tsx
│   ├── search-input.tsx
│   └── pagination.tsx
└── features/             # Feature-specific (optional)
    └── users/
        ├── user-card.tsx
        └── user-avatar.tsx
```

---

## Anti-Patterns to Avoid

### ❌ Too Much Nesting

```
# Bad
components/
└── organisms/
    └── molecules/
        └── atoms/
            └── button.tsx
```

### ❌ God Folders

```
# Bad - Everything in components/
components/
├── component1.tsx
├── component2.tsx
├── ... (100+ files)
```

### ❌ Inconsistent Naming

```
# Bad
components/UserCard.tsx
components/product-list.tsx
components/OrderSummary.tsx
```

Use consistent case (kebab-case or PascalCase, pick one).

### ❌ Mixing Concerns

```
# Bad - Mixing API and pages
app/
├── users.tsx            # Page?
└── api-users.ts         # API?
```

Keep pages in `/app` and API in `/app/api`.

---

## Related Guides

- **[Next.js App Router](nextjs-app-router.md)** - App Router conventions
- **[Folder Organization](folder-organization.md)** - Detailed folder rules
- **[Naming Conventions](naming-conventions.md)** - File and folder naming
- **[File Structure Example](file-structure-example.md)** - Complete example

---

## Quick Reference

Directory | Purpose | Example Files
---|---|---
`/app` | Pages & API routes | `page.tsx`, `route.ts`
`/components` | UI components | `button.tsx`, `card.tsx`
`/lib` | Utilities & types | `utils.ts`, `types.ts`
`/hooks` | Custom hooks | `use-api.ts`
`/contexts` | React Context | `theme-context.tsx`
`/data` | Dummy JSON | `users.json`
`/public` | Static assets | `logo.svg`
`/tests` | Test files | `users.spec.ts`

---

**Last Updated:** 2025-12-19
