# Data Fetching Patterns

> Fetching data in Next.js Server and Client Components

## Overview

Next.js 14 App Router provides multiple ways to fetch data. This guide shows when and how to use each pattern.

---

## Server Components (Preferred)

### Basic Fetch

```typescript
// app/users/page.tsx
export default async function UsersPage() {
  const res = await fetch('http://localhost:3000/api/users', {
    cache: 'no-store' // Always fresh
  })
  const users = await res.json()

  return <UserList users={users} />
}
```

### With Error Handling

```typescript
export default async function UsersPage() {
  try {
    const res = await fetch('http://localhost:3000/api/users')

    if (!res.ok) {
      throw new Error('Failed to fetch')
    }

    const users = await res.json()
    return <UserList users={users} />
  } catch (error) {
    return <div>Error loading users</div>
  }
}
```

### Parallel Fetching

```typescript
export default async function DashboardPage() {
  const [users, products, orders] = await Promise.all([
    fetch('/api/users').then(r => r.json()),
    fetch('/api/products').then(r => r.json()),
    fetch('/api/orders').then(r => r.json()),
  ])

  return (
    <div>
      <UserStats users={users} />
      <ProductStats products={products} />
      <OrderStats orders={orders} />
    </div>
  )
}
```

---

## Client Components

### Basic useEffect Pattern

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
export function useApi<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch')
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

## Mutations

### POST Request

```typescript
async function createUser(data: UserFormData) {
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to create user')
  }

  return response.json()
}

// Usage in component
async function handleSubmit(data: UserFormData) {
  try {
    await createUser(data)
    toast({ title: 'User created successfully' })
    router.push('/users')
  } catch (error) {
    toast({
      title: 'Error',
      description: error.message,
      variant: 'destructive',
    })
  }
}
```

### PUT/PATCH Request

```typescript
async function updateUser(id: string, data: Partial<User>) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to update user')
  }

  return response.json()
}
```

### DELETE Request

```typescript
async function deleteUser(id: string) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error('Failed to delete user')
  }

  return response.json()
}
```

---

## Revalidation

### Revalidate After Mutation

```typescript
import { revalidatePath } from 'next/cache'

// In Server Action
export async function createUser(data: UserFormData) {
  await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
  })

  revalidatePath('/users') // Refresh users page
}
```

---

## Best Practices

1. **Use Server Components for initial data**
2. **Use Client Components for interactive data**
3. **Handle loading and error states**
4. **Show optimistic updates**
5. **Revalidate after mutations**

---

**Last Updated:** 2025-12-19
