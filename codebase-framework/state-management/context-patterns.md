# React Context Patterns

> Creating and using React Context effectively

## Overview

React Context provides a way to share state across components without prop drilling. This guide shows how to create and use contexts properly.

---

## Basic Context Pattern

### Creating a Context

```typescript
// contexts/user-context.tsx
'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface User {
  id: string
  name: string
  email: string
}

interface UserContextType {
  user: User | null
  setUser: (user: User | null) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
```

### Using the Context

```typescript
// app/layout.tsx
import { UserProvider } from '@/contexts/user-context'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}

// Any component
import { useUser } from '@/contexts/user-context'

function UserProfile() {
  const { user, setUser } = useUser()

  if (!user) return <div>Not logged in</div>

  return <div>Welcome, {user.name}</div>
}
```

---

## Complete Examples

All examples are in [example-contexts.md](example-contexts.md).

---

**Last Updated:** 2025-12-19
