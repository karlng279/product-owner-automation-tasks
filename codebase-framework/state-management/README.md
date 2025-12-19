# State Management

> Managing state with React Context and useState

## Overview

This framework uses React's built-in state management features - `useState` and Context API - instead of external libraries like Zustand or Redux. This keeps your stack simple while providing sufficient power for MVP-scale applications.

**Philosophy:** Start simple. Add complexity only when needed.

---

## State Management Strategy

### The Zero-Dependency Approach

We use:
- **useState** for component-local state
- **React Context** for shared state
- **URL** for navigation state
- **Native fetch** for server data

We don't use (initially):
- ❌ Redux/Zustand (external state libraries)
- ❌ React Query/SWR (data fetching libraries)
- ❌ Jotai/Recoil (atomic state libraries)

**Why?** These can be added later if needed. Start simple.

---

## State Types

### 1. Component State

**Use:** State used only within a single component

**Tool:** `useState`

```typescript
function SearchInput() {
  const [query, setQuery] = useState('')

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
```

### 2. Shared State

**Use:** State shared across multiple components

**Tool:** React Context

```typescript
// contexts/theme-context.tsx
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
```

### 3. Server State

**Use:** Data from APIs

**Tool:** Next.js Server Components or `useEffect` + fetch

```typescript
// Server Component (preferred)
export default async function UsersPage() {
  const users = await fetch('http://localhost:3000/api/users')
    .then(r => r.json())

  return <UserList users={users} />
}

// Client Component (when needed)
function UsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(setUsers)
  }, [])

  return <UserList users={users} />
}
```

### 4. URL State

**Use:** Navigation and filter state

**Tool:** Next.js router and searchParams

```typescript
'use client'

import { useSearchParams, useRouter } from 'next/navigation'

function UserFilters() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const role = searchParams.get('role') || 'all'

  const setRole = (newRole: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('role', newRole)
    router.push(`?${params.toString()}`)
  }

  return (
    <Select value={role} onValueChange={setRole}>
      <SelectItem value="all">All</SelectItem>
      <SelectItem value="admin">Admin</SelectItem>
      <SelectItem value="user">User</SelectItem>
    </Select>
  )
}
```

---

## When to Use What

```
Is state used by only one component?
├─ Yes → useState
└─ No → Is it from a server/API?
    ├─ Yes → Server Component or useEffect + fetch
    └─ No → Should it persist in URL?
        ├─ Yes → URL searchParams
        └─ No → React Context
```

---

## Common Contexts

### Theme Context

```typescript
// contexts/theme-context.tsx
'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({ theme: 'light', setTheme: () => {} })

export function ThemeProvider({ children }) {
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

### App Context

```typescript
// contexts/app-context.tsx
'use client'

import { createContext, useContext, useState } from 'react'

interface AppState {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const AppContext = createContext<AppState>({
  sidebarOpen: true,
  setSidebarOpen: () => {},
})

export function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
```

---

## Data Fetching Patterns

### Server Components (Preferred)

```typescript
// app/users/page.tsx
export default async function UsersPage() {
  const users = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store' // Always fresh
  }).then(r => r.json())

  return <UserList users={users} />
}
```

### Client Components

```typescript
'use client'

import { useEffect, useState } from 'react'

export function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>

  return <UserList users={users} />
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
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

// Usage
function UsersList() {
  const { data: users, loading, error } = useApi<User[]>('/api/users')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <UserList users={users} />
}
```

---

## Best Practices

### 1. Keep State Close to Usage

```typescript
// ✅ Good - State in component that uses it
function SearchForm() {
  const [query, setQuery] = useState('')
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}

// ❌ Bad - State lifted unnecessarily
function Page() {
  const [query, setQuery] = useState('')
  return <SearchForm query={query} setQuery={setQuery} />
}
```

### 2. Lift State Only When Needed

Lift state only when multiple components need access.

### 3. Use Server Components for Data

Prefer Server Components over client-side fetching when possible.

### 4. Avoid Prop Drilling

Use Context when passing props through many levels.

### 5. Keep Contexts Focused

Create separate contexts for different concerns.

```typescript
// ✅ Good - Focused contexts
ThemeContext  // Just theme
AppContext    // Just app UI state

// ❌ Bad - God context
GlobalContext // Everything
```

---

## Documentation Index

- **[Context Patterns](context-patterns.md)** - Creating and using contexts
- **[State Best Practices](state-best-practices.md)** - When to use what
- **[Data Fetching](data-fetching.md)** - Fetching patterns
- **[Example Contexts](example-contexts.md)** - Complete examples

---

## When to Add External Libraries

Consider adding external state libraries when:

- ✅ Your app has 20+ pages
- ✅ State updates are causing performance issues
- ✅ You need advanced features (time-travel debugging, dev tools)
- ✅ Your team prefers a specific library

But for MVP phase: **React Context + useState is sufficient**.

---

**Related Documentation:**
- [Component Patterns](../component-patterns/README.md)
- [Data Fetching Patterns](data-fetching.md)
- [Quick Start](../QUICK_START.md)

**External Resources:**
- [React Context Docs](https://react.dev/learn/passing-data-deeply-with-context)
- [useState Hook](https://react.dev/reference/react/useState)
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

**Last Updated:** 2025-12-19
