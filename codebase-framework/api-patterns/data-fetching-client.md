# Client-Side Data Fetching

> Fetching data in Client Components

## Overview

Client Components fetch data on the client side using `useEffect` and `fetch`. Use this when you need interactivity or when data must be fetched after user actions.

---

## Basic Pattern

```typescript
'use client'

import { useEffect, useState } from 'react'

export function UsersList() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

---

## Custom Hook

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
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url])

  return { data, loading, error }
}

// Usage
function UsersList() {
  const { data: users, loading, error } = useApi<User[]>('/api/users')

  if (loading) return <LoadingSpinner />
  if (error) return <ErrorMessage message={error.message} />

  return <UserList users={users} />
}
```

---

## POST/PUT/DELETE

```typescript
'use client'

import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'

export function CreateUserForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function handleSubmit(data: UserFormData) {
    setLoading(true)

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to create user')
      }

      const newUser = await response.json()

      toast({ title: 'User created successfully' })

      // Redirect or update UI
      router.push('/users')
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    } finally {
      setLoading(false)
    }
  }

  return <UserForm onSubmit={handleSubmit} loading={loading} />
}
```

---

**Last Updated:** 2025-12-19
