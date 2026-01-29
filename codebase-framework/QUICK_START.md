# Quick Start Guide

> Get from zero to deployed in under an hour

## Overview

This guide will walk you through creating your first Next.js application using the Codebase Framework. By the end, you'll have a working application deployed to Vercel with dummy data.

**Time Required:** 45-60 minutes

**Prerequisites:**
- Node.js 18+ installed
- Basic familiarity with React
- A code editor (VS Code recommended)
- Git installed

---

## Table of Contents

1. [Step 1: Set Up Your Project](#step-1-set-up-your-project)
2. [Step 2: Understand the Structure](#step-2-understand-the-structure)
3. [Step 3: Add Your Dummy Data](#step-3-add-your-dummy-data)
4. [Step 4: Create Your First Page](#step-4-create-your-first-page)
5. [Step 5: Add an API Route](#step-5-add-an-api-route)
6. [Step 6: Connect Page to API](#step-6-connect-page-to-api)
7. [Step 7: Deploy to Vercel](#step-7-deploy-to-vercel)
8. [Next Steps](#next-steps)

---

## Step 1: Set Up Your Project

### Option A: Clone the Starter Template (Recommended)

```bash
# Navigate to where you want your project
cd ~/projects

# Copy the starter template
cp -r /path/to/codebase-framework/templates/nextjs-starter my-project

# Navigate to project
cd my-project

# Install dependencies
npm install
```

### Option B: Create from Scratch

```bash
# Create Next.js app
npx create-next-app@latest my-project --typescript --tailwind --app

cd my-project

# Install additional dependencies
npm install @radix-ui/react-icons class-variance-authority clsx tailwind-merge
npm install react-hook-form zod @hookform/resolvers
npm install @tanstack/react-table

# Set up ShadCN
npx shadcn-ui@latest init
```

### Verify Installation

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you should see the Next.js welcome page.

**Time: 5-10 minutes**

---

## Step 2: Understand the Structure

Your project should have this structure:

```
my-project/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── api/              # API routes (add this)
│
├── components/
│   ├── ui/               # ShadCN components
│   ├── layout/           # Headers, footers (you'll create)
│   └── shared/           # Shared components (you'll create)
│
├── lib/
│   ├── utils.ts          # Utility functions
│   └── types.ts          # TypeScript types (you'll create)
│
├── data/                 # Dummy JSON files (you'll create)
├── public/               # Static assets
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

### Key Directories

- **`app/`** - All your pages and API routes
- **`components/ui/`** - ShadCN components (auto-generated)
- **`data/`** - Your dummy JSON files (you'll create this)
- **`lib/`** - Utility functions and types

**Time: 2 minutes**

---

## Step 3: Add Your Dummy Data

Create dummy JSON files for your domain.

### Create the Data Directory

```bash
mkdir data
```

### Example: User Management App

Create `data/users.json`:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "Admin",
    "status": "active",
    "createdAt": "2025-01-15"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "role": "User",
    "status": "active",
    "createdAt": "2025-02-20"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bob@example.com",
    "role": "User",
    "status": "inactive",
    "createdAt": "2024-12-10"
  }
]
```

### Define TypeScript Types

Create `lib/types.ts`:

```typescript
export interface User {
  id: number
  name: string
  email: string
  role: 'Admin' | 'User'
  status: 'active' | 'inactive'
  createdAt: string
}
```

### Tips for Good Dummy Data

- Include 5-20 records (enough to show patterns)
- Use realistic names, emails, dates
- Include edge cases (empty fields, special characters)
- Match your domain (users, products, orders, etc.)
- Keep it simple - you can always add more later

**Time: 5-10 minutes**

---

## Step 4: Create Your First Page

Let's create a users list page.

### Install ShadCN Components

```bash
npx shadcn-ui@latest add card button table
```

### Create the Page

Create `app/users/page.tsx`:

```typescript
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function UsersPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button>Add User</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Loading users...
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
```

### Test It

Visit [http://localhost:3000/users](http://localhost:3000/users)

You should see the page with a header and empty card.

**Time: 5 minutes**

---

## Step 5: Add an API Route

Create an API endpoint to serve your dummy data.

### Create API Route

Create `app/api/users/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

// GET /api/users
export async function GET() {
  // Simulate network delay (optional, makes it feel more realistic)
  await new Promise(resolve => setTimeout(resolve, 300))

  return NextResponse.json(users)
}
```

### Test the API

Visit [http://localhost:3000/api/users](http://localhost:3000/api/users)

You should see your JSON data.

### Add More Routes

Create `app/api/users/[id]/route.ts` for single user:

```typescript
import { NextResponse } from 'next/server'
import users from '@/data/users.json'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const user = users.find(u => u.id === parseInt(params.id))

  if (!user) {
    return NextResponse.json(
      { error: 'User not found' },
      { status: 404 }
    )
  }

  return NextResponse.json(user)
}
```

**Time: 5-10 minutes**

---

## Step 6: Connect Page to API

Now let's fetch data and display it.

### Update the Users Page

Update `app/users/page.tsx`:

```typescript
'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { User } from '@/lib/types'

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Users</h1>
        <Button>Add User</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Users ({users.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p className="text-muted-foreground">Loading...</p>
          ) : (
            <div className="space-y-4">
              {users.map(user => (
                <div
                  key={user.id}
                  className="flex justify-between items-center p-4 border rounded"
                >
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{user.role}</p>
                    <p className={`text-xs ${
                      user.status === 'active'
                        ? 'text-green-600'
                        : 'text-gray-400'
                    }`}>
                      {user.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
```

### Test It

Visit [http://localhost:3000/users](http://localhost:3000/users)

You should see your users displayed!

**Time: 10 minutes**

---

## Step 7: Deploy to Vercel

Deploy your app to the web for free.

### Prerequisites

- Create a [Vercel account](https://vercel.com/signup) (free)
- Install Vercel CLI: `npm install -g vercel`

### Deploy

```bash
# Login to Vercel
vercel login

# Deploy (follow the prompts)
vercel

# Or deploy to production
vercel --prod
```

### Alternative: Deploy via Git

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Connect your GitHub repo
5. Click "Deploy"

### Your App is Live!

Vercel will give you a URL like: `https://my-project.vercel.app`

**Time: 5-10 minutes**

---

## What You've Built

Congratulations! You now have:

✅ A Next.js 14 app with TypeScript
✅ TailwindCSS styling
✅ ShadCN UI components
✅ Dummy JSON data
✅ API routes serving data
✅ A working users list page
✅ Deployed to production

---

## Next Steps

### 1. Add More Features

**Add a User Detail Page:**

Create `app/users/[id]/page.tsx`:

```typescript
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { User } from '@/lib/types'

export default function UserDetailPage() {
  const params = useParams()
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    fetch(`/api/users/${params.id}`)
      .then(res => res.json())
      .then(setUser)
  }, [params.id])

  if (!user) return <div>Loading...</div>

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>{user.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="space-y-2">
            <div>
              <dt className="font-semibold">Email</dt>
              <dd>{user.email}</dd>
            </div>
            <div>
              <dt className="font-semibold">Role</dt>
              <dd>{user.role}</dd>
            </div>
            <div>
              <dt className="font-semibold">Status</dt>
              <dd>{user.status}</dd>
            </div>
            <div>
              <dt className="font-semibold">Created</dt>
              <dd>{user.createdAt}</dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
```

### 2. Add a Data Table

Install TanStack Table:

```bash
npx shadcn-ui@latest add table
```

See [component-patterns/table-patterns.md](component-patterns/table-patterns.md) for examples.

### 3. Add Forms

```bash
npx shadcn-ui@latest add form input label
```

See [component-patterns/form-patterns.md](component-patterns/form-patterns.md) for examples.

### 4. Add Navigation

Create a layout with header and navigation:

Create `components/layout/header.tsx`:

```typescript
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My App
        </Link>
        <nav className="flex gap-4">
          <Link href="/users" className="hover:underline">
            Users
          </Link>
          <Link href="/settings" className="hover:underline">
            Settings
          </Link>
        </nav>
      </div>
    </header>
  )
}
```

Update `app/layout.tsx`:

```typescript
import { Header } from '@/components/layout/header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
```

### 5. Follow Your Specs

Now that you have the basics:

1. **Review your wireframes** - Implement the layout
2. **Check component specs** - Use specified ShadCN components
3. **Implement interactions** - Add state and handlers
4. **Write tests** - Convert UAT scenarios to Playwright tests

See [FRAMEWORK_INTEGRATION.md](FRAMEWORK_INTEGRATION.md) for detailed guidance.

---

## Troubleshooting

### "Module not found" errors

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### ShadCN components not found

```bash
# Install the component
npx shadcn-ui@latest add [component-name]
```

### API route not working

- Check file is in `app/api/` directory
- Verify file is named `route.ts` (not `route.tsx`)
- Restart dev server: `npm run dev`

### TypeScript errors

```bash
# Check your tsconfig.json has these paths:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Vercel deployment fails

- Check build passes locally: `npm run build`
- Verify `package.json` has correct scripts
- Check Vercel build logs for specific errors

---

## Getting Help

**Documentation:**
- [Framework Integration Guide](FRAMEWORK_INTEGRATION.md)
- [Component Patterns](component-patterns/)
- [Project Structure](project-structure/)

**External Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [ShadCN UI](https://ui.shadcn.com/)
- [TailwindCSS](https://tailwindcss.com/docs)

---

## Summary

You've learned how to:

✅ Set up a Next.js project with TypeScript and TailwindCSS
✅ Create dummy JSON data for your domain
✅ Build API routes to serve data
✅ Create pages that fetch and display data
✅ Use ShadCN UI components
✅ Deploy to Vercel

**Next:** Start building your actual features following your specs!

---

**Last Updated:** 2025-12-19
