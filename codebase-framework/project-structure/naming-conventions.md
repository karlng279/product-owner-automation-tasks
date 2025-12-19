# Naming Conventions

> Consistent naming patterns for files, folders, components, and variables

## Overview

Consistent naming makes code easier to read, search, and maintain. This guide establishes naming rules for all code elements in your Next.js project.

**Principle:** Names should be descriptive, consistent, and follow community conventions.

---

## Table of Contents

1. [Files and Folders](#files-and-folders)
2. [Components](#components)
3. [Functions and Variables](#functions-and-variables)
4. [TypeScript Types](#typescript-types)
5. [Constants](#constants)
6. [CSS Classes](#css-classes)
7. [Quick Reference](#quick-reference)

---

## Files and Folders

### Next.js Special Files

Follow Next.js conventions exactly:

Pattern | Example | Purpose
---|---|---
`page.tsx` | `app/users/page.tsx` | Route page
`layout.tsx` | `app/layout.tsx` | Layout
`loading.tsx` | `app/loading.tsx` | Loading UI
`error.tsx` | `app/error.tsx` | Error boundary
`not-found.tsx` | `app/not-found.tsx` | 404 page
`route.ts` | `app/api/users/route.ts` | API route
`middleware.ts` | `middleware.ts` | Middleware

### Component Files

**Rule:** Use `kebab-case.tsx` for component files

```
components/
├── user-card.tsx          ✅ Good
├── data-table.tsx         ✅ Good
├── search-input.tsx       ✅ Good
│
├── UserCard.tsx           ❌ Bad (use kebab-case)
├── dataTable.tsx          ❌ Bad (use kebab-case)
└── search_input.tsx       ❌ Bad (use hyphens not underscores)
```

**Why kebab-case?**
- Matches ShadCN UI convention
- Easier to read
- Avoids case-sensitivity issues
- Consistent with URL slugs

### Non-Component Files

**Rule:** Use `kebab-case.ts` for utilities, types, configs

```
lib/
├── utils.ts               ✅ Good
├── api-client.ts          ✅ Good
├── date-utils.ts          ✅ Good
│
├── apiClient.ts           ❌ Bad
└── dateUtils.ts           ❌ Bad
```

### Folders

**Rule:** Use `kebab-case` for folders

```
app/
├── user-settings/         ✅ Good
├── api-keys/              ✅ Good
│
├── userSettings/          ❌ Bad
└── api_keys/              ❌ Bad
```

**Exception:** Dynamic routes use `[param]` format

```
app/users/[id]/            ✅ Correct (Next.js convention)
```

### Data Files

**Rule:** Use `kebab-case.json`

```
data/
├── users.json             ✅ Good
├── api-keys.json          ✅ Good
│
├── Users.json             ❌ Bad
└── api_keys.json          ❌ Bad
```

---

## Components

### Component Names

**Rule:** Use `PascalCase` for component names

```typescript
// ✅ Good
export function UserCard() { ... }
export function DataTable() { ... }
export function SearchInput() { ... }

// ❌ Bad
export function userCard() { ... }
export function dataTable() { ... }
export function search_input() { ... }
```

### File to Component Mapping

```typescript
// File: user-card.tsx
export function UserCard() { ... }

// File: data-table.tsx
export function DataTable() { ... }

// File: search-input.tsx
export function SearchInput() { ... }
```

**Pattern:** `kebab-case.tsx` → `PascalCase` component

### Component Naming Patterns

**Descriptive + Type:**

Pattern | Example | Use Case
---|---|---
[Noun]Card | `UserCard`, `ProductCard` | Card displays
[Noun]List | `UserList`, `ProductList` | List displays
[Noun]Form | `UserForm`, `ProductForm` | Forms
[Noun]Table | `UserTable`, `ProductTable` | Tables
[Noun]Modal | `UserModal`, `ProductModal` | Modals
[Noun]Badge | `StatusBadge`, `RoleBadge` | Badges

**Action-based:**

Pattern | Example | Use Case
---|---|---
[Action]Button | `SubmitButton`, `DeleteButton` | Action buttons
[Action]Dialog | `ConfirmDialog`, `DeleteDialog` | Dialogs

**State-based:**

Pattern | Example | Use Case
---|---|---
Loading[Noun] | `LoadingSpinner`, `LoadingState` | Loading states
Empty[Noun] | `EmptyState`, `EmptyList` | Empty states
Error[Noun] | `ErrorMessage`, `ErrorBoundary` | Error states

---

## Functions and Variables

### Functions

**Rule:** Use `camelCase` for functions

```typescript
// ✅ Good
function getUserById(id: number) { ... }
function formatCurrency(amount: number) { ... }
function validateEmail(email: string) { ... }

// ❌ Bad
function get_user_by_id(id: number) { ... }
function GetUserById(id: number) { ... }
```

**Naming Patterns:**

Type | Pattern | Example
---|---|---
Get data | `get[Noun]` | `getUser`, `getUsers`
Set data | `set[Noun]` | `setUser`, `setTheme`
Create | `create[Noun]` | `createUser`, `createOrder`
Update | `update[Noun]` | `updateUser`, `updateSettings`
Delete | `delete[Noun]` | `deleteUser`, `deleteProduct`
Validate | `validate[Noun]` | `validateEmail`, `validateForm`
Check boolean | `is[Adjective]`, `has[Noun]` | `isActive`, `hasPermission`
Format | `format[Type]` | `formatDate`, `formatCurrency`
Parse | `parse[Type]` | `parseJson`, `parseDate`
Transform | `to[Type]` | `toString`, `toNumber`

### Event Handlers

**Rule:** Prefix with `handle` or use `on` prefix

```typescript
// ✅ Good - handle prefix
const handleClick = () => { ... }
const handleSubmit = () => { ... }
const handleChange = () => { ... }

// ✅ Also good - on prefix
const onClick = () => { ... }
const onSubmit = () => { ... }
const onChange = () => { ... }

// ❌ Bad
const click = () => { ... }
const submit = () => { ... }
```

**In Components:**

```typescript
function UserForm() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleEmailChange} />
    </form>
  )
}
```

### Variables

**Rule:** Use `camelCase` for variables

```typescript
// ✅ Good
const userId = 123
const userName = 'John'
const isActive = true
const hasPermission = false

// ❌ Bad
const user_id = 123
const UserName = 'John'
const is_active = true
```

**Boolean Variables:**

Prefix with `is`, `has`, `should`, or `can`:

```typescript
const isLoading = true
const hasAccess = false
const shouldRedirect = true
const canEdit = false
```

---

## TypeScript Types

### Interfaces

**Rule:** Use `PascalCase` with `Interface` or plain name

```typescript
// ✅ Good - Plain name (preferred)
interface User {
  id: number
  name: string
}

interface Product {
  id: number
  price: number
}

// ✅ Also good - Interface suffix (if needed for clarity)
interface UserInterface {
  id: number
  name: string
}

// ❌ Bad
interface user { ... }
interface IUser { ... }  // Don't use I prefix (C# convention)
```

### Type Aliases

**Rule:** Use `PascalCase` with `Type` suffix or plain name

```typescript
// ✅ Good - Plain name
type Theme = 'light' | 'dark'
type Status = 'active' | 'inactive'

// ✅ Also good - Type suffix (if needed for clarity)
type UserRole = 'admin' | 'user'
type SortDirection = 'asc' | 'desc'

// ❌ Bad
type theme = 'light' | 'dark'
type TTheme = 'light' | 'dark'  // Don't use T prefix
```

### Props Types

**Rule:** Use `[Component]Props` pattern

```typescript
// ✅ Good
interface UserCardProps {
  user: User
  onEdit: () => void
}

function UserCard({ user, onEdit }: UserCardProps) {
  return <div>...</div>
}

// ✅ Also good - Inline for simple props
function UserBadge({ name }: { name: string }) {
  return <span>{name}</span>
}
```

### Generic Types

**Rule:** Use single uppercase letter or descriptive name

```typescript
// ✅ Good - Single letter
function identity<T>(value: T): T {
  return value
}

// ✅ Good - Descriptive
function createArray<Item>(length: number, value: Item): Item[] {
  return Array(length).fill(value)
}

// ❌ Bad
function identity<type>(value: type): type { ... }
```

---

## Constants

### Global Constants

**Rule:** Use `SCREAMING_SNAKE_CASE`

```typescript
// lib/constants.ts

// ✅ Good
export const API_BASE_URL = '/api'
export const ITEMS_PER_PAGE = 10
export const MAX_FILE_SIZE = 5_000_000
export const DEFAULT_THEME = 'light'

// ❌ Bad
export const apiBaseUrl = '/api'
export const itemsPerPage = 10
```

### Enum Values

**Rule:** Use `PascalCase` for enum, `SCREAMING_SNAKE_CASE` for values

```typescript
// ✅ Good
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}

// ❌ Bad
enum userRole { ... }
enum UserRole {
  admin = 'admin',  // Should be ADMIN
}
```

### Const Objects (Preferred over Enums)

```typescript
// ✅ Good - More flexible than enums
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const

export const HTTP_STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
} as const

type UserRole = typeof USER_ROLES[keyof typeof USER_ROLES]
```

---

## CSS Classes

### Tailwind Classes

**Rule:** Order by category (layout → visual → interaction)

```typescript
// ✅ Good - Organized order
<div className="flex items-center gap-4 p-4 bg-white rounded-lg hover:bg-gray-50">

// ❌ Bad - Random order
<div className="hover:bg-gray-50 flex bg-white gap-4 p-4 items-center rounded-lg">
```

**Recommended Order:**
1. Layout: `flex`, `grid`, `block`
2. Positioning: `absolute`, `relative`, `top`, `left`
3. Sizing: `w-full`, `h-screen`
4. Spacing: `p-4`, `m-2`, `gap-4`
5. Typography: `text-lg`, `font-bold`
6. Visual: `bg-white`, `border`, `rounded`
7. Interactive: `hover:`, `focus:`, `active:`

### Custom CSS Classes

**Rule:** Use `kebab-case` with BEM-like naming

```css
/* ✅ Good */
.user-card { ... }
.user-card__header { ... }
.user-card__title { ... }
.user-card--featured { ... }

/* ❌ Bad */
.userCard { ... }
.user_card { ... }
.UserCard { ... }
```

---

## Quick Reference

### Files & Folders
- Component files: `kebab-case.tsx`
- Other files: `kebab-case.ts`
- Folders: `kebab-case/`
- Next.js special: `page.tsx`, `layout.tsx`, etc.

### Code Elements
- Components: `PascalCase`
- Functions: `camelCase`
- Variables: `camelCase`
- Booleans: `isX`, `hasX`, `shouldX`, `canX`
- Event handlers: `handleX` or `onX`
- Types/Interfaces: `PascalCase`
- Props: `ComponentProps`
- Constants: `SCREAMING_SNAKE_CASE`
- Enums: `PascalCase` name, `SCREAMING_SNAKE_CASE` values

### Patterns

**Component Naming:**
```
[Noun]Card, [Noun]List, [Noun]Form
[Action]Button, [Action]Dialog
Loading[Noun], Empty[Noun], Error[Noun]
```

**Function Naming:**
```
get[Noun], set[Noun]
create[Noun], update[Noun], delete[Noun]
validate[Noun], format[Type], parse[Type]
is[Adjective], has[Noun], should[Verb], can[Verb]
```

**Type Naming:**
```
[Component]Props
[Domain]Interface
[Type]Type
```

---

## Examples

### ✅ Good Example

```typescript
// File: components/user-card.tsx

interface UserCardProps {
  user: User
  onEdit: () => void
  onDelete: () => void
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const hasAccess = checkUserAccess(user)

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)

  const handleEditClick = () => {
    if (hasAccess) {
      onEdit()
    }
  }

  return (
    <div
      className="flex items-center p-4 bg-white rounded-lg hover:bg-gray-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <UserAvatar user={user} />
      <UserInfo user={user} />
      {hasAccess && (
        <ActionButtons
          onEdit={handleEditClick}
          onDelete={onDelete}
        />
      )}
    </div>
  )
}
```

### ❌ Bad Example

```typescript
// File: Components/UserCard.tsx  ❌ Wrong folder/file name

interface props {  ❌ Should be UserCardProps
  User: user  ❌ Wrong casing
  EditHandler: () => void  ❌ Should be onEdit
}

export function user_card({ User, EditHandler }: props) {  ❌ Wrong name
  const [Hovered, SetHovered] = useState(false)  ❌ Wrong casing
  const access = checkUserAccess(User)  ❌ Not descriptive

  const mouse_enter = () => SetHovered(true)  ❌ Wrong name/casing

  return (
    <div onClick={EditHandler}>  ❌ Should be button
      {User.name}
    </div>
  )
}
```

---

**Related Guides:**
- [Project Structure](README.md)
- [Folder Organization](folder-organization.md)
- [Next.js App Router](nextjs-app-router.md)

---

**Last Updated:** 2025-12-19
