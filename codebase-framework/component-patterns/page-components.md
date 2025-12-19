# Page Components

> Structuring Next.js pages effectively

## Overview

Page components are route-level components that define what users see at each URL. This guide shows patterns for building well-structured pages.

---

## Basic Page Structure

```typescript
// app/users/page.tsx
export default function UsersPage() {
  return (
    <div className="container mx-auto py-6 space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button>Add User</Button>
      </div>

      {/* Content */}
      <Card>
        <CardContent>
          {/* Main content here */}
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## List Page Pattern

```typescript
// app/users/page.tsx
import { DataTable } from '@/components/shared/data-table'
import { columns } from './columns'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function UsersPage() {
  const users = await fetch('http://localhost:3000/api/users').then(r => r.json())

  return (
    <div className="container mx-auto py-10 space-y-6">
      {/* Header with actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground">
            Manage your users and their permissions
          </p>
        </div>
        <Button asChild>
          <Link href="/users/new">Add User</Link>
        </Button>
      </div>

      {/* Data table */}
      <DataTable columns={columns} data={users} />
    </div>
  )
}
```

---

## Detail Page Pattern

```typescript
// app/users/[id]/page.tsx
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function UserDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const user = await fetch(`http://localhost:3000/api/users/${params.id}`)
    .then(r => r.ok ? r.json() : null)

  if (!user) {
    notFound()
  }

  return (
    <div className="container mx-auto py-10 space-y-6">
      {/* Breadcrumb / Back button */}
      <div>
        <Button variant="ghost" asChild>
          <Link href="/users">← Back to Users</Link>
        </Button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/users/${user.id}/edit`}>Edit</Link>
          </Button>
          <Button variant="destructive">Delete</Button>
        </div>
      </div>

      {/* Details */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium">Role</p>
              <p className="text-sm text-muted-foreground">{user.role}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Status</p>
              <p className="text-sm text-muted-foreground">{user.status}</p>
            </div>
            <div>
              <p className="text-sm font-medium">Joined</p>
              <p className="text-sm text-muted-foreground">{user.createdAt}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Recent activity appears here
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

---

## Form Page Pattern

```typescript
// app/users/new/page.tsx
import { UserForm } from '../components/user-form'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function NewUserPage() {
  return (
    <div className="container max-w-2xl mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>Create User</CardTitle>
        </CardHeader>
        <CardContent>
          <UserForm />
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## Dashboard Pattern

```typescript
// app/dashboard/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const stats = await fetch('http://localhost:3000/api/stats').then(r => r.json())

  return (
    <div className="container mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalUsers}</div>
            <p className="text-xs text-muted-foreground">
              +20% from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${stats.revenue}</div>
            <p className="text-xs text-muted-foreground">
              +15% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts / Additional Content */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Activity list */}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Quick action buttons */}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

---

## Settings Page Pattern

```typescript
// app/settings/page.tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function SettingsPage() {
  return (
    <div className="container max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <Tabs defaultValue="profile">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Profile form */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Account settings */}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              {/* Security settings */}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
```

---

## Best Practices

1. **Consistent Container Width**
   ```typescript
   <div className="container mx-auto">
   ```

2. **Consistent Vertical Spacing**
   ```typescript
   <div className="space-y-6">
   ```

3. **Clear Page Headers**
   ```typescript
   <div>
     <h1 className="text-3xl font-bold">Page Title</h1>
     <p className="text-muted-foreground">Description</p>
   </div>
   ```

4. **Action Buttons in Header**
   ```typescript
   <div className="flex items-center justify-between">
     <h1>Title</h1>
     <Button>Action</Button>
   </div>
   ```

---

**Last Updated:** 2025-12-19
