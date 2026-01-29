# Form Patterns

> Building forms with React Hook Form and Zod validation

## Overview

This guide shows how to build forms using React Hook Form for form state management and Zod for validation, integrated with ShadCN UI components.

**Stack:**
- React Hook Form (form state)
- Zod (validation schemas)
- ShadCN Form components (UI)

---

## Setup

### Install Dependencies

```bash
npm install react-hook-form zod @hookform/resolvers
npx shadcn-ui@latest add form
```

---

## Basic Form

### Simple Login Form

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

// Define schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  async function onSubmit(data: LoginFormData) {
    console.log(data)
    // Handle login
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  )
}
```

---

## Complete User Form

### Schema Definition

```typescript
// lib/validations.ts
import { z } from 'zod'

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  role: z.enum(['admin', 'user'], {
    required_error: 'Please select a role',
  }),
  bio: z.string().max(500, 'Bio must be less than 500 characters').optional(),
  notifications: z.boolean().default(false),
})

export type UserFormData = z.infer<typeof userSchema>
```

### Form Component

```typescript
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, UserFormData } from '@/lib/validations'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export function UserForm({ user }: { user?: UserFormData }) {
  const { toast } = useToast()

  const form = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
    defaultValues: user || {
      name: '',
      email: '',
      role: 'user',
      bio: '',
      notifications: false,
    },
  })

  async function onSubmit(data: UserFormData) {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to save')

      toast({
        title: 'Success',
        description: 'User saved successfully',
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to save user',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Role Select */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bio Textarea */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself..."
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief description for your profile
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notifications Switch */}
        <FormField
          control={form.control}
          name="notifications"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">
                  Email Notifications
                </FormLabel>
                <FormDescription>
                  Receive emails about your account activity
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Submit */}
        <div className="flex gap-2">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Saving...' : 'Save'}
          </Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
```

---

## Common Validation Patterns

### String Validations

```typescript
const schema = z.object({
  // Required
  name: z.string().min(1, 'Name is required'),

  // Min/max length
  username: z.string().min(3).max(20),

  // Email
  email: z.string().email('Invalid email'),

  // URL
  website: z.string().url('Invalid URL'),

  // Regex pattern
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),

  // Optional
  nickname: z.string().optional(),

  // With default
  language: z.string().default('en'),
})
```

### Number Validations

```typescript
const schema = z.object({
  // Number with min/max
  age: z.number().min(18, 'Must be 18+').max(120),

  // Positive/negative
  price: z.number().positive('Price must be positive'),

  // Integer
  quantity: z.number().int('Must be a whole number'),

  // Transform string to number
  amount: z.coerce.number(),
})
```

### Date Validations

```typescript
const schema = z.object({
  // Date
  birthdate: z.date(),

  // Date with min
  startDate: z.date().min(new Date(), 'Must be in the future'),

  // Transform string to date
  createdAt: z.coerce.date(),
})
```

### Array Validations

```typescript
const schema = z.object({
  // Array with min/max items
  tags: z.array(z.string()).min(1, 'At least one tag required').max(5),

  // Array of objects
  addresses: z.array(z.object({
    street: z.string(),
    city: z.string(),
    zip: z.string(),
  })),
})
```

### Conditional Validations

```typescript
const schema = z.object({
  hasCompany: z.boolean(),
  companyName: z.string().optional(),
}).refine((data) => {
  if (data.hasCompany && !data.companyName) {
    return false
  }
  return true
}, {
  message: 'Company name is required when "Has company" is checked',
  path: ['companyName'],
})
```

---

## Advanced Patterns

### Multi-Step Form

```typescript
'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const step1Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

const step2Schema = z.object({
  address: z.string().min(5),
  city: z.string().min(2),
})

const fullSchema = step1Schema.merge(step2Schema)

type FormData = z.infer<typeof fullSchema>

export function MultiStepForm() {
  const [step, setStep] = useState(1)

  const form = useForm<FormData>({
    resolver: zodResolver(step === 1 ? step1Schema : fullSchema),
    mode: 'onChange',
  })

  async function onSubmit(data: FormData) {
    if (step === 1) {
      setStep(2)
    } else {
      console.log('Final submit:', data)
      // Handle final submission
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {step === 1 && (
          <>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {step === 2 && (
          <>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        <div className="flex gap-2">
          {step === 2 && (
            <Button type="button" variant="outline" onClick={() => setStep(1)}>
              Back
            </Button>
          )}
          <Button type="submit">
            {step === 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </form>
    </Form>
  )
}
```

### Dynamic Fields

```typescript
'use client'

import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, Trash } from 'lucide-react'

const schema = z.object({
  emails: z.array(z.object({
    value: z.string().email(),
  })).min(1, 'At least one email required'),
})

type FormData = z.infer<typeof schema>

export function DynamicFieldsForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      emails: [{ value: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'emails',
  })

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2">
            <FormField
              control={form.control}
              name={`emails.${index}.value`}
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {fields.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => remove(index)}
              >
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={() => append({ value: '' })}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Email
        </Button>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

---

## Best Practices

### 1. Separate Schema Definitions

```typescript
// ✅ Good - Centralized in lib/validations.ts
export const userSchema = z.object({ ... })

// ❌ Bad - Inline in component
const schema = z.object({ ... })
```

### 2. Use Type Inference

```typescript
// ✅ Good - Infer types from schema
type UserFormData = z.infer<typeof userSchema>

// ❌ Bad - Manually duplicate types
interface UserFormData {
  name: string
  email: string
}
```

### 3. Handle Loading States

```typescript
<Button type="submit" disabled={form.formState.isSubmitting}>
  {form.formState.isSubmitting ? 'Saving...' : 'Save'}
</Button>
```

### 4. Show Error Toast on Submit Failure

```typescript
async function onSubmit(data: FormData) {
  try {
    await saveData(data)
    toast({ title: 'Success' })
  } catch (error) {
    toast({
      variant: 'destructive',
      title: 'Error',
      description: error.message,
    })
  }
}
```

### 5. Reset Form After Success

```typescript
async function onSubmit(data: FormData) {
  await saveData(data)
  form.reset() // Clear form
}
```

---

**Related Documentation:**
- [ShadCN Usage](shadcn-usage.md)
- [Component Patterns](README.md)
- [State Management](../state-management/README.md)

**External Resources:**
- [React Hook Form Docs](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)
- [ShadCN Form Component](https://ui.shadcn.com/docs/components/form)

---

**Last Updated:** 2025-12-19
