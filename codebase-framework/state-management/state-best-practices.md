# State Management Best Practices

> Guidelines for effective state management

## Overview

This guide provides best practices for managing state in your React/Next.js application.

---

## Core Principles

### 1. Keep State as Local as Possible

```typescript
// ✅ Good - Local state
function SearchInput() {
  const [query, setQuery] = useState('')
  return <input value={query} onChange={e => setQuery(e.target.value)} />
}

// ❌ Bad - Unnecessarily lifted
function Page() {
  const [query, setQuery] = useState('')
  return <SearchInput value={query} onChange={setQuery} />
}
```

### 2. Lift State When Sharing

Only lift state when multiple components need it:

```typescript
// ✅ Good - Shared state lifted
function UserPage() {
  const [selectedUser, setSelectedUser] = useState(null)

  return (
    <>
      <UserList onSelect={setSelectedUser} />
      <UserDetails user={selectedUser} />
    </>
  )
}
```

### 3. Use URL for Shareable State

```typescript
// ✅ Good - Filters in URL
const searchParams = useSearchParams()
const filter = searchParams.get('filter')

// Users can share URLs with filters applied
```

### 4. Avoid Prop Drilling

Use Context when passing through 3+ levels:

```typescript
// ❌ Bad - Prop drilling
<App>
  <Layout theme={theme}>
    <Sidebar theme={theme}>
      <Nav theme={theme} />
    </Sidebar>
  </Layout>
</App>

// ✅ Good - Context
<ThemeProvider>
  <App>
    <Layout>
      <Sidebar>
        <Nav /> {/* Gets theme from context */}
      </Sidebar>
    </Layout>
  </App>
</ThemeProvider>
```

### 5. Separate Concerns

```typescript
// ✅ Good - Focused contexts
<ThemeProvider>
  <UserProvider>
    <App />
  </UserProvider>
</ThemeProvider>

// ❌ Bad - Everything in one
<GlobalProvider value={{ theme, user, settings, ... }}>
```

---

## Server vs Client State

### Prefer Server Components

```typescript
// ✅ Good - Server Component
export default async function UsersPage() {
  const users = await fetch('...').then(r => r.json())
  return <UserList users={users} />
}

// Use client only when needed
'use client'
function InteractiveFilter() {
  const [filter, setFilter] = useState('')
  // ...
}
```

---

## Common Patterns

### Loading States

```typescript
const [data, setData] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)

useEffect(() => {
  fetch('/api/data')
    .then(r => r.json())
    .then(setData)
    .catch(setError)
    .finally(() => setLoading(false))
}, [])
```

### Optimistic Updates

```typescript
async function handleDelete(id: string) {
  // Optimistic update
  setItems(items => items.filter(item => item.id !== id))

  try {
    await fetch(`/api/items/${id}`, { method: 'DELETE' })
  } catch (error) {
    // Revert on error
    setItems(originalItems)
    toast({ title: 'Failed to delete', variant: 'destructive' })
  }
}
```

---

**Last Updated:** 2025-12-19
