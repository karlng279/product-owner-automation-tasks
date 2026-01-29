# ShadCN Usage Guide

> Practical examples of using ShadCN UI components

## Overview

This guide provides practical examples of using ShadCN UI components in your Next.js application. Each section includes code examples and common use cases.

---

## Button

### Basic Usage

```typescript
import { Button } from '@/components/ui/button'

<Button>Click me</Button>
```

### Variants

```typescript
// Primary (default)
<Button variant="default">Primary</Button>

// Secondary
<Button variant="secondary">Secondary</Button>

// Destructive (danger)
<Button variant="destructive">Delete</Button>

// Outline
<Button variant="outline">Outline</Button>

// Ghost (minimal)
<Button variant="ghost">Ghost</Button>

// Link styled
<Button variant="link">Link</Button>
```

### Sizes

```typescript
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon"><Plus /></Button>
```

### With Icons

```typescript
import { Mail, Loader2 } from 'lucide-react'

<Button>
  <Mail className="mr-2 h-4 w-4" />
  Email
</Button>

// Loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

### As Link

```typescript
import Link from 'next/link'

<Button asChild>
  <Link href="/users">View Users</Link>
</Button>
```

---

## Card

### Basic Card

```typescript
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Stats Card

```typescript
<Card>
  <CardHeader>
    <CardTitle>Total Users</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="text-4xl font-bold">12,543</div>
    <p className="text-sm text-muted-foreground">
      +20% from last month
    </p>
  </CardContent>
</Card>
```

---

## Input

### Text Input

```typescript
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
  />
</div>
```

### With State

```typescript
'use client'

const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type here..."
/>
```

### Disabled

```typescript
<Input disabled placeholder="Disabled input" />
```

---

## Select

### Basic Select

```typescript
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

### Controlled Select

```typescript
'use client'

const [value, setValue] = useState('')

<Select value={value} onValueChange={setValue}>
  <SelectTrigger>
    <SelectValue placeholder="Choose..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="admin">Admin</SelectItem>
    <SelectItem value="user">User</SelectItem>
  </SelectContent>
</Select>
```

---

## Dialog (Modal)

### Basic Dialog

```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <div className="flex justify-end gap-2">
      <Button variant="outline">Cancel</Button>
      <Button>Confirm</Button>
    </div>
  </DialogContent>
</Dialog>
```

### Controlled Dialog

```typescript
'use client'

const [open, setOpen] = useState(false)

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content</p>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </DialogContent>
</Dialog>
```

---

## Toast (Notifications)

### Setup

```bash
npx shadcn-ui@latest add toast
```

### Usage

```typescript
'use client'

import { useToast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

export function ToastExample() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
```

### Toast Variants

```typescript
// Success
toast({
  title: "Success",
  description: "Operation completed successfully.",
})

// Error
toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong.",
})

// With action
toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2023 at 5:57 PM",
  action: <Button size="sm">Undo</Button>,
})
```

### Add Toaster to Layout

```typescript
// app/layout.tsx
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
```

---

## Table

### Basic Table

```typescript
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Role</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
```

For advanced tables with sorting/filtering, see [table-patterns.md](table-patterns.md).

---

## Dropdown Menu

### Basic Dropdown

```typescript
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

### User Menu

```typescript
import { User } from 'lucide-react'

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <User className="h-5 w-5" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuLabel>
      <div className="flex flex-col">
        <p className="font-medium">John Doe</p>
        <p className="text-sm text-muted-foreground">john@example.com</p>
      </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Badge

### Basic Badges

```typescript
import { Badge } from '@/components/ui/badge'

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Status Badges

```typescript
function StatusBadge({ status }: { status: string }) {
  const variant = status === 'active' ? 'default' : 'secondary'

  return (
    <Badge variant={variant}>
      {status}
    </Badge>
  )
}
```

---

## Textarea

### Basic Textarea

```typescript
import { Textarea } from '@/components/ui/textarea'

<Textarea placeholder="Enter your message..." />
```

### Controlled

```typescript
'use client'

const [value, setValue] = useState('')

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Type your message..."
  rows={4}
/>
```

---

## Checkbox

### Basic Checkbox

```typescript
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

### Controlled

```typescript
'use client'

const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onCheckedChange={setChecked}
/>
```

---

## Radio Group

### Basic Radio Group

```typescript
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Option 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Option 2</Label>
  </div>
</RadioGroup>
```

---

## Switch

### Basic Switch

```typescript
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>
```

### Controlled

```typescript
'use client'

const [enabled, setEnabled] = useState(false)

<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
/>
```

---

## Tabs

### Basic Tabs

```typescript
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <p>Account settings</p>
  </TabsContent>
  <TabsContent value="password">
    <p>Password settings</p>
  </TabsContent>
</Tabs>
```

---

## Separator

```typescript
import { Separator } from '@/components/ui/separator'

<div>
  <p>Content above</p>
  <Separator className="my-4" />
  <p>Content below</p>
</div>
```

---

## Avatar

### Basic Avatar

```typescript
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

<Avatar>
  <AvatarImage src="/avatars/john.jpg" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Avatar with Status

```typescript
<div className="relative">
  <Avatar>
    <AvatarImage src="/avatars/john.jpg" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
</div>
```

---

## Skeleton (Loading)

```typescript
import { Skeleton } from '@/components/ui/skeleton'

<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

---

## Alert

```typescript
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>

// Destructive variant
<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

---

## Common Patterns

### Form Field

```typescript
<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
  <p className="text-sm text-muted-foreground">
    We'll never share your email.
  </p>
</div>
```

### Card with Actions

```typescript
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Users</CardTitle>
      <Button size="sm">Add User</Button>
    </div>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
</Card>
```

### Empty State

```typescript
<Card>
  <CardContent className="flex flex-col items-center justify-center py-12">
    <Users className="h-12 w-12 text-muted-foreground mb-4" />
    <CardTitle className="mb-2">No users found</CardTitle>
    <CardDescription className="mb-4">
      Get started by adding your first user
    </CardDescription>
    <Button>Add User</Button>
  </CardContent>
</Card>
```

---

## Best Practices

1. **Use `asChild` for Links**
   ```typescript
   <Button asChild>
     <Link href="/users">View Users</Link>
   </Button>
   ```

2. **Always Add Labels to Inputs**
   ```typescript
   <Label htmlFor="email">Email</Label>
   <Input id="email" />
   ```

3. **Use Proper ARIA Labels**
   ```typescript
   <Button aria-label="Close dialog">
     <X className="h-4 w-4" />
   </Button>
   ```

4. **Maintain Consistent Spacing**
   ```typescript
   <div className="space-y-4">
     <Input />
     <Input />
     <Button />
   </div>
   ```

---

## MDS Theme Integration

### Using Brand Colors with ShadCN

The MDS theme overrides ShadCN's primary color with magenta. All default buttons and primary elements use the brand color automatically.

```typescript
// Default button uses magenta primary
<Button>Primary Action</Button>

// Using brand colors directly
<Button className="bg-magenta hover:bg-magenta-dark">
  Brand Button
</Button>

// Secondary with teal
<Button className="bg-teal text-white hover:bg-teal/90">
  Secondary Action
</Button>
```

### Adding Brand Variants

Extend button variants for brand-specific styling:

```typescript
// In components/ui/button.tsx
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        brand: "bg-magenta text-white hover:bg-magenta-dark",
        brandOutline: "border-2 border-magenta text-magenta hover:bg-magenta hover:text-white",
        teal: "bg-teal text-white hover:bg-teal/90",
        // ... existing variants
      },
    },
  }
)
```

### Cards with Brand Accents

```typescript
<Card className="border-l-4 border-l-magenta">
  <CardHeader>
    <CardTitle className="text-teal">Featured</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Content with brand accent</p>
  </CardContent>
  <CardFooter>
    <Button>Learn More</Button>
  </CardFooter>
</Card>
```

### Badges with Brand Colors

```typescript
// Status badge with teal accent
<Badge className="bg-teal-accent/20 text-teal-accent border-teal-accent">
  Active
</Badge>

// Brand badge
<Badge className="bg-magenta text-white">
  New
</Badge>
```

### Alerts with Brand Styling

```typescript
// Success with teal accent
<Alert className="border-teal-accent bg-teal-accent/10">
  <CheckCircle className="h-4 w-4 text-teal-accent" />
  <AlertTitle className="text-teal-accent">Success</AlertTitle>
  <AlertDescription>Operation completed successfully.</AlertDescription>
</Alert>

// Brand highlight
<Alert className="border-magenta bg-magenta/10">
  <AlertTitle className="text-magenta">Important</AlertTitle>
  <AlertDescription>Brand-highlighted message.</AlertDescription>
</Alert>
```

---

**Related Documentation:**
- [ShadCN Setup](shadcn-setup.md)
- [MDS Theming Guide](theming.md)
- [Animation Patterns](animations.md)
- [Form Patterns](form-patterns.md)
- [Component Patterns](README.md)

**External Resources:**
- [ShadCN UI Components](https://ui.shadcn.com/docs/components)
- [Radix UI Primitives](https://www.radix-ui.com/primitives)

---

**Last Updated:** 2026-01-29
