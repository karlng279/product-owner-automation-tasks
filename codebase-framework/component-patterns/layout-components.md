# Layout Components

> Building site-wide layout components

## Overview

Layout components provide the structure for your application - headers, footers, sidebars, and navigation. They persist across page navigations.

---

## Header Component

```typescript
// components/layout/header.tsx
import Link from 'next/link'
import { MainNav } from './main-nav'
import { UserMenu } from './user-menu'
import { ThemeToggle } from '@/components/theme-toggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">My App</span>
        </Link>

        {/* Navigation */}
        <MainNav />

        {/* Right side */}
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
          <UserMenu />
        </div>
      </div>
    </header>
  )
}
```

---

## Main Navigation

```typescript
// components/layout/main-nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const routes = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/users', label: 'Users' },
  { href: '/products', label: 'Products' },
  { href: '/settings', label: 'Settings' },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-6 text-sm font-medium">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === route.href
              ? 'text-foreground'
              : 'text-foreground/60'
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}
```

---

## Sidebar Navigation

```typescript
// components/layout/sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home, Users, Settings, BarChart } from 'lucide-react'

const routes = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/users', label: 'Users', icon: Users },
  { href: '/analytics', label: 'Analytics', icon: BarChart },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <span className="font-bold">My App</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {routes.map((route) => {
          const Icon = route.icon
          return (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                pathname === route.href
                  ? 'bg-secondary text-secondary-foreground'
                  : 'text-muted-foreground hover:bg-secondary/50 hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {route.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
```

---

## Footer Component

```typescript
// components/layout/footer.tsx
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <Link href="/" className="font-medium underline underline-offset-4">
              Your Company
            </Link>
            . The source code is available on{' '}
            <Link href="/" className="font-medium underline underline-offset-4">
              GitHub
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
```

---

## Mobile Navigation

```typescript
// components/layout/mobile-nav.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const routes = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/users', label: 'Users' },
  { href: '/products', label: 'Products' },
  { href: '/settings', label: 'Settings' },
]

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="flex flex-col space-y-4">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={() => setOpen(false)}
              className="text-lg font-medium"
            >
              {route.label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
```

---

## Layout Usage

```typescript
// app/layout.tsx
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

// app/(app)/layout.tsx - With sidebar
import { Sidebar } from '@/components/layout/sidebar'

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
```

---

**Last Updated:** 2025-12-19
