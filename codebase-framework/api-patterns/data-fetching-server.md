# Server-Side Data Fetching

> Fetching data in Server Components

## Overview

Server Components fetch data on the server during rendering. This is the preferred method for initial page loads.

---

## Basic Pattern

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

---

## With Error Handling

```typescript
export default async function UsersPage() {
  try {
    const res = await fetch('http://localhost:3000/api/users')

    if (!res.ok) {
      throw new Error('Failed to fetch users')
    }

    const users = await res.json()
    return <UserList users={users} />
  } catch (error) {
    return <ErrorMessage message="Failed to load users" />
  }
}
```

---

## Parallel Fetching

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

## Caching

```typescript
// No caching (always fresh)
fetch('...', { cache: 'no-store' })

// Cache for 60 seconds
fetch('...', { next: { revalidate: 60 } })

// Cache forever (until revalidate)
fetch('...', { cache: 'force-cache' })
```

---

**Last Updated:** 2025-12-19
