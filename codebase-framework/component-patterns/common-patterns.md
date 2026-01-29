# Common UI Patterns

> Reusable patterns for common UI needs

## Overview

This guide covers common UI patterns you'll use across your application - modals, toasts, loading states, empty states, and error handling.

---

## Loading States

### Skeleton Loader

```typescript
import { Skeleton } from '@/components/ui/skeleton'

export function UserCardSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

### Loading Spinner

```typescript
import { Loader2 } from 'lucide-react'

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-8">
      <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  )
}
```

### Page Loading

```typescript
// app/users/loading.tsx
import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <Skeleton className="h-12 w-[200px]" />
      <Skeleton className="h-[400px] w-full" />
    </div>
  )
}
```

---

## Empty States

### Basic Empty State

```typescript
import { Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <Users className="h-12 w-12 text-muted-foreground mb-4" />
      <h3 className="text-lg font-semibold mb-2">No users found</h3>
      <p className="text-sm text-muted-foreground mb-4 max-w-sm">
        Get started by adding your first user to the system
      </p>
      <Button>Add User</Button>
    </div>
  )
}
```

### Search Empty State

```typescript
export function SearchEmpty({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <p className="text-lg font-medium mb-2">No results found</p>
      <p className="text-sm text-muted-foreground">
        No results for "{query}". Try a different search term.
      </p>
    </div>
  )
}
```

---

## Error States

### Error Message

```typescript
import { AlertCircle } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export function ErrorMessage({
  title = 'Error',
  message,
  onRetry,
}: {
  title?: string
  message: string
  onRetry?: () => void
}) {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription className="flex items-center justify-between">
        <span>{message}</span>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="ml-4"
          >
            Retry
          </Button>
        )}
      </AlertDescription>
    </Alert>
  )
}
```

### Error Page

```typescript
// app/users/error.tsx
'use client'

import { useEffect } from 'react'
import { AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center space-y-4">
        <AlertCircle className="h-12 w-12 text-destructive" />
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-muted-foreground text-center max-w-md">
          {error.message || 'An unexpected error occurred'}
        </p>
        <Button onClick={reset}>Try again</Button>
      </div>
    </div>
  )
}
```

---

## Confirmation Dialogs

```typescript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

export function DeleteConfirmation({
  onConfirm,
}: {
  onConfirm: () => void
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the
            item from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

---

## Toast Notifications

```typescript
'use client'

import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

export function ToastExample() {
  const { toast } = useToast()

  return (
    <>
      {/* Success */}
      <Button
        onClick={() =>
          toast({
            title: 'Success',
            description: 'Your changes have been saved.',
          })
        }
      >
        Show Success
      </Button>

      {/* Error */}
      <Button
        onClick={() =>
          toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: 'There was a problem with your request.',
          })
        }
      >
        Show Error
      </Button>

      {/* With Action */}
      <Button
        onClick={() =>
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
            action: (
              <Button variant="outline" size="sm">
                Undo
              </Button>
            ),
          })
        }
      >
        With Action
      </Button>
    </>
  )
}
```

---

## Badges & Status Indicators

```typescript
import { Badge } from '@/components/ui/badge'

export function StatusBadge({ status }: { status: string }) {
  const config = {
    active: { label: 'Active', variant: 'default' as const },
    inactive: { label: 'Inactive', variant: 'secondary' as const },
    pending: { label: 'Pending', variant: 'outline' as const },
  }

  const { label, variant } = config[status] || config.inactive

  return <Badge variant={variant}>{label}</Badge>
}
```

---

## Search Input

```typescript
'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function SearchInput({
  onSearch,
}: {
  onSearch: (query: string) => void
}) {
  const [query, setQuery] = useState('')

  return (
    <div className="relative">
      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
          onSearch(e.target.value)
        }}
        className="pl-8"
      />
    </div>
  )
}
```

---

## Pagination

```typescript
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </p>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
```

---

**Last Updated:** 2025-12-19
