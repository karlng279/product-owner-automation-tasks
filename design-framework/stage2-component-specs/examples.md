# Component Specification Examples

## Overview

This document provides complete examples of component specifications using the ShadCN UI library and Tanstack Table.

**Examples Included:**
1. Login Form (Form Component)
2. Dashboard Header (Navigation Component)
3. Confirmation Dialog (Modal Component)
4. Status Card (Card Component)
5. Shipment List Table (Tanstack Table)
6. User Profile Form (Complex Form)

---

## Example 1: Login Form

**Component ID:** COMP-001
**Component Name:** Login Form
**Wireframe ID(s):** WF-001
**Story ID(s):** ST-001
**Acceptance Criteria IDs:** AC-001, AC-002, AC-003, AC-004, AC-005
**Component Type:** Form

---

### 1. Component Overview

**Purpose:** Allow users to authenticate by entering email and password credentials.

**Context:** Appears on the login page (/login), first screen users see when not authenticated.

**User Interaction:** Users enter email and password, optionally select "Remember me", and click "Sign In" to authenticate.

**Key Functionality:**
- Email and password input with validation
- Remember me checkbox
- Form submission with loading state
- Error handling for invalid credentials
- Link to forgot password flow

---

### 2. Component Structure

**Container:**
- Width: max-w-md (448px)
- Padding: p-0 (Card provides padding)
- Background: bg-card
- Border: Card border
- Shadow: shadow-lg

**Layout System:**
- Type: Flexbox
- Configuration: flex flex-col (vertical stack)
- Spacing: Card sections handle spacing

**Responsive Behavior:**
- Mobile (< 640px): Full width, mx-4 (16px margins)
- Tablet (640px - 1024px): max-w-md, centered
- Desktop (> 1024px): max-w-md, centered

---

### 3. UI Elements & ShadCN Components

#### Element 1: Card Container

**Element ID:** COMP-001-EL-001

**ShadCN Component:** Card
**Variant:** default
**Size:** default

**Props:**
- className: "max-w-md mx-auto"

**Content:** Contains all login form elements

**Design Rules Applied:**
- Background: bg-card
- Border: border border-border, rounded-lg

---

#### Element 2: Card Header

**Element ID:** COMP-001-EL-002

**ShadCN Component:** CardHeader
**Variant:** default

**Content:**
- CardTitle: "Sign In"
  - Typography: text-2xl font-semibold
- CardDescription: "Enter your credentials to access your account"
  - Typography: text-sm text-muted-foreground

---

#### Element 3: Email Input Field

**Element ID:** COMP-001-EL-003

**ShadCN Component:** Form + FormField + Input
**Variant:** default
**Size:** default (h-10)

**Props:**
- type: "email"
- placeholder: "name@example.com"
- required: true
- autoComplete: "email"

**Content/Label:** "Email"

**States:**
- Default: border border-input
- Focus: ring-2 ring-ring
- Error: border-destructive
- Disabled: opacity-50

**Validation:**
- Required: "Email is required"
- Format: "Please enter a valid email address"
- Validation Timing: On blur

**Accessibility:**
- Label: "Email" (associated via htmlFor)
- aria-required: true
- aria-invalid: true (when error)
- aria-describedby: "email-error" (when error)

**Design Rules Applied:**
- Height: h-10 (40px)
- Padding: px-3 py-2
- Typography: text-base
- Colors: border-input, bg-background

---

#### Element 4: Password Input Field

**Element ID:** COMP-001-EL-004

**ShadCN Component:** Form + FormField + Input
**Variant:** default
**Size:** default (h-10)

**Props:**
- type: "password"
- placeholder: "Enter your password"
- required: true
- autoComplete: "current-password"

**Content/Label:** "Password"

**States:**
- Default: border border-input
- Focus: ring-2 ring-ring
- Error: border-destructive
- Disabled: opacity-50

**Validation:**
- Required: "Password is required"
- Min Length: "Password must be at least 8 characters"
- Validation Timing: On blur

**Accessibility:**
- Label: "Password" (associated via htmlFor)
- aria-required: true
- aria-invalid: true (when error)
- aria-describedby: "password-error" (when error)

**Design Rules Applied:**
- Height: h-10 (40px)
- Padding: px-3 py-2
- Typography: text-base
- Colors: border-input, bg-background

---

#### Element 5: Remember Me Checkbox

**Element ID:** COMP-001-EL-005

**ShadCN Component:** Form + FormField + Checkbox
**Variant:** default
**Size:** h-4 w-4

**Props:**
- checked: false (default)
- disabled: false

**Content/Label:** "Remember me"

**States:**
- Unchecked: border border-input
- Checked: bg-primary, checkmark icon
- Focus: ring-2 ring-ring
- Disabled: opacity-50

**Accessibility:**
- Label: "Remember me" (associated)
- role: "checkbox"
- aria-checked: true/false

**Design Rules Applied:**
- Size: h-4 w-4 (16x16px)
- Colors: bg-primary (when checked)
- Touch target: Entire label clickable (minimum 44x44px)

---

#### Element 6: Sign In Button

**Element ID:** COMP-001-EL-006

**ShadCN Component:** Button
**Variant:** default (primary)
**Size:** default

**Props:**
- type: "submit"
- disabled: false (true when loading or form invalid)
- className: "w-full"

**Content/Label:** "Sign In" (or "Signing in..." with spinner when loading)

**States:**
- Default: bg-primary text-primary-foreground
- Hover: bg-primary/90
- Focus: ring-2 ring-ring
- Active: bg-primary/80
- Disabled: opacity-50 cursor-not-allowed
- Loading: Spinner icon + "Signing in..." text, disabled

**Accessibility:**
- Touch target: h-10 (40px), full width
- Keyboard: Enter to submit form
- aria-busy: true (when loading)

**Design Rules Applied:**
- Height: h-10 (40px)
- Padding: px-4 py-2
- Typography: text-sm font-medium
- Colors: bg-primary text-primary-foreground

---

#### Element 7: Forgot Password Link

**Element ID:** COMP-001-EL-007

**ShadCN Component:** Button (variant: link)
**Variant:** link
**Size:** sm

**Props:**
- type: "button"
- asChild: true (wraps link)

**Content/Label:** "Forgot your password?"

**States:**
- Default: text-primary underline
- Hover: text-primary/80
- Focus: ring-2 ring-ring

**Behavior:**
- Click: Navigate to /forgot-password

**Accessibility:**
- role: "link"
- Keyboard: Enter/Space to activate

**Design Rules Applied:**
- Typography: text-sm
- Colors: text-primary

---

### 4. Component Composition

```
Card
├── CardHeader
│   ├── CardTitle: "Sign In"
│   └── CardDescription: "Enter your credentials..."
├── CardContent
│   └── Form
│       ├── FormField: Email
│       │   ├── FormLabel: "Email"
│       │   ├── FormControl: Input (type: email)
│       │   └── FormMessage: Error message (if error)
│       ├── FormField: Password
│       │   ├── FormLabel: "Password"
│       │   ├── FormControl: Input (type: password)
│       │   └── FormMessage: Error message (if error)
│       └── FormField: Remember Me
│           ├── FormControl: Checkbox
│           └── FormLabel: "Remember me"
└── CardFooter
    ├── Button (type: submit, full width): "Sign In"
    └── Button (variant: link): "Forgot your password?"
```

---

### 5. Component States

**Default State:** Empty form, all fields enabled, sign in button enabled

**Loading State:**
- Trigger: Form submitted, waiting for API response
- UI Changes:
  - Sign in button: Shows spinner + "Signing in..." text, disabled
  - All inputs: Disabled (opacity-50)
  - Forgot password link: Disabled

**Error State:**
- Trigger: Invalid credentials or API error
- UI Changes:
  - Alert (variant: destructive) at top of form: "Invalid email or password"
  - Invalid field borders: border-destructive
  - FormMessage below invalid fields: Error text in text-destructive
- Error Messages:
  - Invalid credentials: "Invalid email or password. Please try again."
  - Network error: "Unable to connect. Please check your internet connection."
  - Server error: "Something went wrong. Please try again later."

**Success State:**
- Trigger: Successful authentication
- UI Changes:
  - Success Toast: "Welcome back!"
  - Navigate to dashboard (/dashboard)

---

### 6. Interactions & Behavior

**Action 1: Submit Form**
- Trigger: Click "Sign In" button or press Enter
- Validation: Check all fields valid (email format, password not empty)
- Behavior: POST to /api/auth/login with email and password
- Feedback: Show loading spinner on button, disable form
- Next State: Success (navigate) or Error (show error message)

**Action 2: Forgot Password**
- Trigger: Click "Forgot your password?" link
- Behavior: Navigate to /forgot-password
- Next State: Leave login page

---

### 7. Validation & Error Handling

**Email Field:**
- Required: "Email is required"
- Format: "Please enter a valid email address"
- Validation Timing: On blur

**Password Field:**
- Required: "Password is required"
- Min Length: "Password must be at least 8 characters"
- Validation Timing: On blur

**Form-Level Validation:**
- All fields valid before submit button enabled
- Client-side validation prevents submit if invalid

**Server-Side Errors:**
- 401 Unauthorized: "Invalid email or password. Please try again."
- 500 Server Error: "Something went wrong. Please try again later."
- Network Error: "Unable to connect. Please check your internet connection."

---

### 8. Traceability

| AC ID | Acceptance Criteria | Component Element | Status |
|-------|---------------------|-------------------|--------|
| AC-001 | User can enter email | COMP-001-EL-003 | ✅ |
| AC-002 | User can enter password | COMP-001-EL-004 | ✅ |
| AC-003 | User can select "Remember me" | COMP-001-EL-005 | ✅ |
| AC-004 | User can submit form | COMP-001-EL-006 | ✅ |
| AC-005 | User can access forgot password | COMP-001-EL-007 | ✅ |

---

## Example 2: Dashboard Header

**Component ID:** COMP-010
**Component Name:** Dashboard Header
**Wireframe ID(s):** WF-010
**Story ID(s):** ST-010
**Acceptance Criteria IDs:** AC-050, AC-051, AC-052, AC-053
**Component Type:** Navigation

---

### 1. Component Overview

**Purpose:** Provide navigation, branding, and user menu for the dashboard.

**Context:** Appears at the top of all dashboard pages as a sticky header.

**User Interaction:** Users can navigate to different sections, access user menu, and see notifications.

**Key Functionality:**
- Logo and branding
- Navigation links (Dashboard, Shipments, Reports)
- User menu dropdown (Profile, Settings, Logout)
- Notifications icon with badge

---

### 2. UI Elements & ShadCN Components

#### Element 1: Logo

**Element ID:** COMP-010-EL-001

**ShadCN Component:** Link (using Button variant: ghost, asChild)
**Content:** Logo image or text

**Behavior:** Click to navigate to dashboard home

**Design Rules:**
- Size: h-8 (32px height)
- Spacing: mr-8 (32px right margin)

---

#### Element 2: Navigation Links

**Element ID:** COMP-010-EL-002

**ShadCN Component:** NavigationMenu
**Variant:** default

**Links:**
1. Dashboard (/)
2. Shipments (/shipments)
3. Reports (/reports)

**States:**
- Active: bg-accent text-accent-foreground
- Hover: hover:bg-accent/50
- Focus: ring-2 ring-ring

**Design Rules:**
- Spacing: gap-6 (24px between links)
- Typography: text-sm font-medium

---

#### Element 3: Notifications Icon

**Element ID:** COMP-010-EL-003

**ShadCN Component:** Button (variant: ghost, size: icon) + Badge

**Content:**
- Icon: Bell icon
- Badge: Notification count (if > 0)

**Behavior:** Click to open notifications popover

**Badge:**
- Variant: destructive (red)
- Position: top-right of icon
- Size: h-4 w-4 (16x16px), text-xs
- Content: Notification count number

**Design Rules:**
- Touch target: 44x44px minimum
- Colors: Badge uses bg-destructive

---

#### Element 4: User Menu

**Element ID:** COMP-010-EL-004

**ShadCN Component:** DropdownMenu

**Trigger:**
- Component: Button (variant: ghost)
- Content: User avatar + name + chevron icon
- Avatar: Avatar component (40x40px)

**Menu Items:**
1. Profile - Navigate to /profile
2. Settings - Navigate to /settings
3. Separator
4. Logout - Trigger logout action

**States:**
- Default: Avatar visible, name visible (desktop only)
- Hover: bg-accent
- Open: bg-accent, chevron rotated

**Design Rules:**
- Avatar: h-10 w-10 (40x40px)
- Typography: text-sm
- Spacing: gap-2 between avatar and name

---

### 3. Component Composition

```
Header (sticky top-0 bg-background border-b)
├── Container (flex items-center justify-between px-6 h-16)
    ├── Left Section (flex items-center)
    │   ├── Logo (Link)
    │   └── NavigationMenu
    │       ├── NavigationMenuItem: Dashboard
    │       ├── NavigationMenuItem: Shipments
    │       └── NavigationMenuItem: Reports
    └── Right Section (flex items-center gap-4)
        ├── Notifications Button + Badge
        └── User Menu (DropdownMenu)
            ├── DropdownMenuTrigger: Avatar + Name
            └── DropdownMenuContent
                ├── DropdownMenuItem: Profile
                ├── DropdownMenuItem: Settings
                ├── DropdownMenuSeparator
                └── DropdownMenuItem: Logout
```

---

### 4. Responsive Behavior

**Mobile (< 640px):**
- Hide navigation links (use hamburger menu instead)
- Hide user name (show avatar only)
- Reduce spacing (px-4 instead of px-6)

**Tablet (640px - 1024px):**
- Show navigation links
- Show user name
- Standard spacing

**Desktop (> 1024px):**
- Full layout
- All elements visible

---

### 5. Traceability

| AC ID | Acceptance Criteria | Component Element | Status |
|-------|---------------------|-------------------|--------|
| AC-050 | User can navigate to main sections | COMP-010-EL-002 | ✅ |
| AC-051 | User can see notifications | COMP-010-EL-003 | ✅ |
| AC-052 | User can access profile/settings | COMP-010-EL-004 | ✅ |
| AC-053 | User can logout | COMP-010-EL-004 | ✅ |

---

## Example 3: Confirmation Dialog (Delete Shipment)

**Component ID:** COMP-020
**Component Name:** Delete Shipment Confirmation Dialog
**Wireframe ID(s):** WF-020
**Story ID(s):** ST-015
**Acceptance Criteria IDs:** AC-075, AC-076
**Component Type:** Modal

---

### 1. Component Overview

**Purpose:** Confirm user's intent to delete a shipment before performing destructive action.

**Context:** Triggered when user clicks "Delete" action on a shipment.

**User Interaction:** User reviews shipment details and confirms or cancels deletion.

**Key Functionality:**
- Display shipment information
- Warn about irreversible action
- Allow cancel or confirm
- Handle deletion with loading state

---

### 2. UI Elements & ShadCN Components

#### Element 1: Dialog Container

**Element ID:** COMP-020-EL-001

**ShadCN Component:** AlertDialog
**Size:** max-w-lg (512px)

**Props:**
- open: boolean (controlled)
- onOpenChange: callback

**Design Rules:**
- Background: bg-background
- Border: border border-border, rounded-lg
- Shadow: shadow-lg
- Overlay: bg-background/80

---

#### Element 2: Dialog Trigger

**Element ID:** COMP-020-EL-002

**ShadCN Component:** AlertDialogTrigger (Button variant: ghost, icon)

**Content:** Trash icon

**Behavior:** Opens dialog

**Design Rules:**
- Touch target: 44x44px
- Icon color: text-destructive

---

#### Element 3: Dialog Header

**Element ID:** COMP-020-EL-003

**ShadCN Components:**
- AlertDialogHeader
- AlertDialogTitle: "Delete Shipment"
  - Typography: text-lg font-semibold
- AlertDialogDescription: "Are you sure you want to delete this shipment? This action cannot be undone."
  - Typography: text-sm text-muted-foreground

---

#### Element 4: Shipment Info Display

**Element ID:** COMP-020-EL-004

**Custom Content:**
- Shipment Number: "SHP-2024-001"
- Customer: "Acme Corp"
- Status: Badge (current status)

**Design Rules:**
- Layout: Grid, 2 columns
- Spacing: space-y-2
- Background: bg-muted, p-4, rounded-md

---

#### Element 5: Cancel Button

**Element ID:** COMP-020-EL-005

**ShadCN Component:** AlertDialogCancel (Button variant: outline)
**Variant:** outline
**Size:** default

**Content/Label:** "Cancel"

**Behavior:** Close dialog without action

**Design Rules:**
- Colors: border border-input, bg-background

---

#### Element 6: Delete Button

**Element ID:** COMP-020-EL-006

**ShadCN Component:** AlertDialogAction (Button variant: destructive)
**Variant:** destructive
**Size:** default

**Content/Label:** "Delete" (or "Deleting..." with spinner when loading)

**States:**
- Default: bg-destructive text-destructive-foreground
- Hover: bg-destructive/90
- Focus: ring-2 ring-ring
- Loading: Spinner + "Deleting..." text, disabled

**Behavior:** Trigger delete API call

**Design Rules:**
- Colors: bg-destructive text-destructive-foreground

---

### 3. Component Composition

```
AlertDialog
├── AlertDialogTrigger: Delete button (in table actions)
└── AlertDialogContent (max-w-lg)
    ├── AlertDialogHeader
    │   ├── AlertDialogTitle: "Delete Shipment"
    │   └── AlertDialogDescription: "Are you sure..."
    ├── Shipment Info Display (custom)
    │   ├── Shipment Number
    │   ├── Customer
    │   └── Status Badge
    └── AlertDialogFooter
        ├── AlertDialogCancel: "Cancel"
        └── AlertDialogAction: "Delete"
```

---

### 4. Component States

**Default State:** Dialog closed

**Open State:**
- Dialog visible with overlay
- Focus on dialog content
- Focus trap active
- Body scroll disabled

**Loading State:**
- Trigger: Delete button clicked
- UI Changes:
  - Delete button: Spinner + "Deleting..." text, disabled
  - Cancel button: Disabled

**Success State:**
- Trigger: Successful deletion
- UI Changes:
  - Close dialog
  - Show success Toast: "Shipment deleted successfully"
  - Remove row from table

**Error State:**
- Trigger: Deletion failed
- UI Changes:
  - Show error Alert in dialog: "Failed to delete shipment. Please try again."
  - Re-enable buttons

---

### 5. Accessibility

**ARIA Attributes:**
- role="alertdialog"
- aria-modal="true"
- aria-labelledby: Dialog title ID
- aria-describedby: Dialog description ID

**Keyboard Navigation:**
- Escape: Close dialog (cancel)
- Tab: Cycle between Cancel and Delete buttons
- Enter: Activate focused button

**Focus Management:**
- Initial focus: Cancel button (safer default)
- Focus trap: Tab cycles within dialog
- Focus return: Return to Delete trigger button on close

---

### 6. Traceability

| AC ID | Acceptance Criteria | Component Element | Status |
|-------|---------------------|-------------------|--------|
| AC-075 | User must confirm before deletion | COMP-020-EL-003 | ✅ |
| AC-076 | User can cancel deletion | COMP-020-EL-005 | ✅ |

---

## Example 4: Shipment List Table (Tanstack Table)

**Table ID:** TBL-001
**Component ID:** COMP-030
**Table Name:** Shipment List Table
**Wireframe ID(s):** WF-030
**Story ID(s):** ST-020
**Acceptance Criteria IDs:** AC-100, AC-101, AC-102, AC-103, AC-104, AC-105

---

### 1. Table Overview

**Purpose:** Display list of all shipments with sorting, filtering, and actions.

**Context:** Main table on shipments page (/shipments).

**User Interaction:** Users can sort, filter, search, select rows, and perform actions (view, edit, delete).

**Key Features:**
- Multi-column sorting
- Global search + column filters
- Pagination (10/20/50/100 per page)
- Row selection with bulk delete
- Row actions (View, Edit, Delete)

---

### 2. Data Structure

**Endpoint:** /api/shipments
**Method:** GET
**Data Fetching:** React Query

**Object Shape:**
```json
{
  "id": "SHP-001",
  "shipmentNumber": "SHP-2024-001",
  "status": "in_transit" | "pending" | "delivered" | "cancelled",
  "customer": {
    "id": "CUST-001",
    "name": "Acme Corp"
  },
  "origin": "New York, NY",
  "destination": "Los Angeles, CA",
  "weight": 150.5,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

---

### 3. Column Definitions

#### Column 1: Shipment Number

**Column ID:** COL-001
- accessorKey: "shipmentNumber"
- header: "Shipment #"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "includesString"
- size: 150

#### Column 2: Customer

**Column ID:** COL-002
- accessorFn: (row) => row.customer.name
- id: "customerName"
- header: "Customer"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "includesString"
- size: 200

#### Column 3: Status

**Column ID:** COL-003
- accessorKey: "status"
- header: "Status"
- cell: Custom (Badge component)
  - pending → Badge variant="secondary" (yellow)
  - in_transit → Badge variant="default" (blue)
  - delivered → Badge variant="default" (green)
  - cancelled → Badge variant="outline" (gray)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "equalsString"
- Filter UI: Select dropdown (All, Pending, In Transit, Delivered, Cancelled)
- size: 120

#### Column 4: Origin

**Column ID:** COL-004
- accessorKey: "origin"
- header: "Origin"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: false
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- size: 180

#### Column 5: Destination

**Column ID:** COL-005
- accessorKey: "destination"
- header: "Destination"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: false
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- size: 180

#### Column 6: Weight

**Column ID:** COL-006
- accessorKey: "weight"
- header: "Weight (kg)"
- cell: Custom (format: "X.X kg")
- enableSorting: true
- enableColumnFilter: false
- enableGlobalFilter: false
- sortingFn: "number"
- size: 100

#### Column 7: Created Date

**Column ID:** COL-007
- accessorKey: "createdAt"
- header: "Created"
- cell: Custom (format: "MMM DD, YYYY")
- enableSorting: true
- enableColumnFilter: false
- enableGlobalFilter: false
- sortingFn: "datetime"
- Default Sort: DESC (newest first)
- size: 120

#### Actions Column

**Column ID:** COL-ACTIONS
- id: "actions"
- header: "Actions"
- cell: Custom (DropdownMenu)
  - Trigger: Button (variant="ghost", size="icon", icon: "⋮")
  - Menu Items:
    1. View (Navigate to /shipments/[id])
    2. Edit (Navigate to /shipments/[id]/edit)
    3. Separator
    4. Delete (Open confirmation dialog)
- enableSorting: false
- size: 80

---

### 4. Sorting Configuration

**Type:** Multi-column sorting
**Default Sort:** createdAt DESC
**Sort Indicator:** Arrow icon with number (1↑ 2↓)
**Behavior:** Click to toggle, Shift+Click for multi-sort

---

### 5. Filtering Configuration

**Global Search:**
- Enabled: Yes
- Placeholder: "Search shipments..."
- Position: Above table, top-left
- Debounce: 300ms

**Column Filters:**
- Status Filter: Select dropdown (All, Pending, In Transit, Delivered, Cancelled)
- Position: Below column header in popover

**Clear Filters Button:** Yes, above table, top-right

---

### 6. Pagination Configuration

**Enabled:** Yes
**Page Size Options:** [10, 20, 50, 100]
**Default Page Size:** 10
**Pagination UI:**
- Page size selector: Bottom-left
- Page info: "Showing 1-10 of 234" (bottom-center)
- Navigation: First, Previous, Page numbers, Next, Last (bottom-right)

---

### 7. Row Selection Configuration

**Enabled:** Yes
**Type:** Multi-select (checkboxes)

**Selection UI:**
- Select All checkbox in header
- Checkbox in first column of each row

**Selection State:**
- Show count: "3 rows selected"
- Bulk Actions:
  - Bulk Delete button (variant: destructive)

---

### 8. Table States

**Loading State:** Skeleton rows (5 rows), message: "Loading shipments..."

**Empty State:**
- Icon: Empty box
- Title: "No shipments found"
- Description: "Create your first shipment to get started"
- Action: "Create Shipment" button

**Error State:**
- Alert (variant: destructive)
- Title: "Failed to load shipments"
- Description: Error message
- Action: "Retry" button

---

### 9. Traceability

| AC ID | Acceptance Criteria | Table Feature | Status |
|-------|---------------------|---------------|--------|
| AC-100 | Display shipment list | All columns | ✅ |
| AC-101 | Sort by any column | Multi-column sorting | ✅ |
| AC-102 | Filter by status | Status column filter | ✅ |
| AC-103 | Search all fields | Global search | ✅ |
| AC-104 | Paginate results | Pagination | ✅ |
| AC-105 | Perform actions | Actions column | ✅ |

---

## Summary

These examples demonstrate:
1. **Form components** with validation and states
2. **Navigation components** with dropdowns
3. **Modal components** with confirmation patterns
4. **Data tables** with full Tanstack Table configuration

Each example includes:
- Complete component structure
- All UI elements with ShadCN components
- States and interactions
- Accessibility considerations
- Design rules application
- Traceability to ACs

Use these as templates when creating your own component specifications.
