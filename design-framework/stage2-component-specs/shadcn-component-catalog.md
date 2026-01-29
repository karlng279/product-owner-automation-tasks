# ShadCN Component Catalog

## Overview

Quick reference guide for ShadCN UI components. Use this catalog when creating component specifications.

**Approach:** Simple component references (no code snippets)

**Full Documentation:** [ShadCN UI Docs](https://ui.shadcn.com)

---

## Buttons

### Button

**Purpose:** Interactive element for actions

**Variants:**
- `default` - Primary button (bg-primary, text-primary-foreground)
- `secondary` - Secondary action (bg-secondary, text-secondary-foreground)
- `destructive` - Dangerous action (bg-destructive, text-destructive-foreground)
- `outline` - Low emphasis (border, transparent bg)
- `ghost` - Minimal emphasis (transparent, hover shows bg)
- `link` - Text link style

**Sizes:**
- `sm` - Small (h-9, px-3, text-xs)
- `default` - Standard (h-10, px-4, text-sm)
- `lg` - Large (h-11, px-8, text-base)
- `icon` - Icon only (h-10, w-10)

**States:** default, hover, focus, disabled, loading

**Common Props:**
- disabled: true/false
- type: "button" | "submit" | "reset"
- asChild: true (for wrapping links)

**Usage:**
- Primary actions: variant="default"
- Cancel actions: variant="outline" or "secondary"
- Delete actions: variant="destructive"
- Subtle actions: variant="ghost"

---

## Form Elements

### Input

**Purpose:** Single-line text input

**Types:**
- text (default)
- email
- password
- number
- tel
- url
- search

**Size:** h-10 (40px), px-3, text-base

**States:** default, focus, disabled, error

**Common Props:**
- placeholder: string
- disabled: true/false
- required: true/false
- type: input type

**Usage:**
- Text fields
- Email fields
- Password fields
- Search bars

### Textarea

**Purpose:** Multi-line text input

**Size:** min-h-20 (80px), px-3, py-2, text-base

**States:** default, focus, disabled, error

**Common Props:**
- placeholder: string
- disabled: true/false
- rows: number
- required: true/false

**Usage:**
- Comments
- Descriptions
- Long text input

### Label

**Purpose:** Form field label

**Size:** text-sm, font-medium

**States:** default, disabled

**Common Props:**
- htmlFor: input id

**Usage:**
- All form inputs should have labels
- Associate with input via htmlFor

### Select

**Purpose:** Dropdown selection

**Components:**
- Select (container)
- SelectTrigger (button to open)
- SelectContent (dropdown menu)
- SelectItem (option)
- SelectValue (displays selected value)

**States:** default, open, focus, disabled

**Common Props:**
- defaultValue: string
- disabled: true/false
- required: true/false

**Usage:**
- Dropdown lists
- Single-select options
- Country/state selectors

### Checkbox

**Purpose:** Boolean selection (checked/unchecked)

**Size:** h-4, w-4

**States:** unchecked, checked, indeterminate, disabled

**Common Props:**
- checked: true/false
- disabled: true/false
- required: true/false

**Usage:**
- Toggle options
- Multi-select lists
- Agreement checkboxes

### RadioGroup

**Purpose:** Single selection from multiple options

**Components:**
- RadioGroup (container)
- RadioGroupItem (individual radio)

**Size:** h-4, w-4

**States:** selected, unselected, disabled

**Common Props:**
- defaultValue: string
- disabled: true/false
- required: true/false

**Usage:**
- Mutually exclusive options
- Single choice selection

### Switch

**Purpose:** Toggle on/off

**Size:** h-6, w-11

**States:** on (checked), off (unchecked), disabled

**Common Props:**
- checked: true/false
- disabled: true/false

**Usage:**
- Enable/disable features
- Settings toggles
- Boolean preferences

### Form

**Purpose:** Form wrapper with validation (react-hook-form integration)

**Components:**
- Form (container)
- FormField (field wrapper)
- FormItem (item container)
- FormLabel (label)
- FormControl (input wrapper)
- FormDescription (helper text)
- FormMessage (error message)

**Usage:**
- Wrap all forms
- Provides validation
- Error handling

---

## Cards

### Card

**Purpose:** Container for grouped content

**Components:**
- Card (container)
- CardHeader (top section)
- CardTitle (heading)
- CardDescription (subheading)
- CardContent (main content)
- CardFooter (bottom section)

**Styling:**
- bg-card
- border, border-border
- rounded-lg
- shadow (optional)

**Variants:**
- Standard: default with border
- Elevated: add shadow-lg
- Interactive: add hover:shadow-lg

**States:** default, hover (if interactive)

**Usage:**
- Content grouping
- Dashboard widgets
- List items
- Feature cards

---

## Dialogs & Modals

### Dialog

**Purpose:** Modal overlay for focused content

**Components:**
- Dialog (container)
- DialogTrigger (button to open)
- DialogContent (modal content)
- DialogHeader (top section)
- DialogTitle (heading)
- DialogDescription (subheading)
- DialogFooter (bottom actions)
- DialogClose (close button)

**Sizes:**
- sm: max-w-sm (384px)
- default: max-w-lg (512px)
- lg: max-w-2xl (672px)
- xl: max-w-4xl (896px)

**Behavior:**
- Focus trap (Tab cycles within modal)
- Close on Escape
- Overlay click closes (optional)
- Restores focus on close

**Usage:**
- Confirmations
- Forms
- Detailed views
- Alerts

### AlertDialog

**Purpose:** Alert/confirmation dialog

**Components:**
- AlertDialog (container)
- AlertDialogTrigger (button)
- AlertDialogContent (content)
- AlertDialogHeader (header)
- AlertDialogTitle (title)
- AlertDialogDescription (description)
- AlertDialogFooter (actions)
- AlertDialogAction (confirm button)
- AlertDialogCancel (cancel button)

**Usage:**
- Destructive confirmations
- Important alerts
- User confirmation required

### Sheet

**Purpose:** Slide-in panel from edge

**Components:**
- Sheet (container)
- SheetTrigger (button)
- SheetContent (panel content)
- SheetHeader (header)
- SheetTitle (title)
- SheetDescription (description)
- SheetFooter (footer)

**Sides:** top, right, bottom, left

**Usage:**
- Mobile navigation
- Sidebars
- Filters
- Details panels

---

## Navigation

### NavigationMenu

**Purpose:** Top-level navigation with dropdowns

**Components:**
- NavigationMenu (container)
- NavigationMenuList (list)
- NavigationMenuItem (item)
- NavigationMenuTrigger (dropdown trigger)
- NavigationMenuContent (dropdown content)
- NavigationMenuLink (link)

**Usage:**
- Top navigation
- Header menus
- Dropdown navigation

### Tabs

**Purpose:** Tabbed interface for content switching

**Components:**
- Tabs (container)
- TabsList (tab buttons container)
- TabsTrigger (individual tab button)
- TabsContent (tab panel content)

**States:** active, inactive

**Usage:**
- Content sections
- Settings panels
- Multi-view displays

---

## Feedback

### Alert

**Purpose:** Important messages and notifications

**Variants:**
- default - Neutral (bg-background)
- destructive - Error (bg-destructive)

**Components:**
- Alert (container)
- AlertTitle (heading)
- AlertDescription (message)

**Usage:**
- Error messages
- Success messages
- Warning messages
- Info messages

### Toast

**Purpose:** Temporary notification

**Variants:**
- default - Neutral
- destructive - Error

**Components:**
- Toast (container)
- ToastTitle (heading)
- ToastDescription (message)
- ToastAction (action button)
- ToastClose (close button)

**Duration:** Auto-dismiss (configurable)

**Usage:**
- Success confirmations
- Error notifications
- Info messages
- Undo actions

### Progress

**Purpose:** Progress indicator

**Type:** Linear progress bar

**States:** determinate (known progress), indeterminate (unknown)

**Common Props:**
- value: number (0-100)

**Usage:**
- Loading progress
- Upload progress
- Multi-step forms

### Skeleton

**Purpose:** Loading placeholder

**Usage:**
- Content loading
- Shimmer effect
- Placeholder for async content

---

## Data Display

### Table

**Purpose:** Simple data table (use with Tanstack Table for advanced features)

**Components:**
- Table (container)
- TableHeader (thead)
- TableBody (tbody)
- TableRow (tr)
- TableHead (th)
- TableCell (td)
- TableCaption (caption)

**Note:** For advanced tables (sorting, filtering, pagination), use Tanstack Table. See [Tanstack Table Reference](tanstack-table-reference.md).

**Usage:**
- Simple data display
- Basic tables
- Static data

### Badge

**Purpose:** Small label for status/count

**Variants:**
- default - Primary (bg-primary)
- secondary - Secondary (bg-secondary)
- destructive - Error (bg-destructive)
- outline - Bordered

**Size:** px-2, py-0.5, text-xs, rounded-full

**Usage:**
- Status indicators
- Tags
- Counts
- Labels

### Avatar

**Purpose:** User profile image

**Components:**
- Avatar (container)
- AvatarImage (image)
- AvatarFallback (fallback text/icon)

**Sizes:** h-10, w-10 (default), configurable

**Usage:**
- User profiles
- User lists
- Comments

---

## Overlays

### Popover

**Purpose:** Rich content overlay

**Components:**
- Popover (container)
- PopoverTrigger (trigger element)
- PopoverContent (content)

**Size:** max-w-sm (default)

**Usage:**
- Additional info
- Small forms
- Contextual content

### Tooltip

**Purpose:** Brief helper text

**Components:**
- Tooltip (container)
- TooltipTrigger (trigger element)
- TooltipContent (content)

**Size:** px-3, py-1.5, text-sm

**Usage:**
- Icon explanations
- Help text
- Additional context

### DropdownMenu

**Purpose:** Action menu

**Components:**
- DropdownMenu (container)
- DropdownMenuTrigger (trigger)
- DropdownMenuContent (menu)
- DropdownMenuItem (menu item)
- DropdownMenuSeparator (divider)
- DropdownMenuLabel (label)
- DropdownMenuCheckboxItem (checkbox item)
- DropdownMenuRadioGroup (radio group)
- DropdownMenuRadioItem (radio item)
- DropdownMenuSub (submenu)

**Usage:**
- Action menus
- Context menus
- User menus
- More actions (...)

---

## Layout

### Separator

**Purpose:** Visual divider

**Orientation:** horizontal, vertical

**Usage:**
- Section dividers
- List separators

### Accordion

**Purpose:** Expandable content sections

**Components:**
- Accordion (container)
- AccordionItem (item)
- AccordionTrigger (expand button)
- AccordionContent (content)

**Type:** single (one open), multiple (many open)

**Usage:**
- FAQs
- Expandable sections
- Settings panels

### Collapsible

**Purpose:** Simple expand/collapse

**Components:**
- Collapsible (container)
- CollapsibleTrigger (trigger)
- CollapsibleContent (content)

**Usage:**
- Simple expand/collapse
- Sidebar sections
- Filter sections

---

## Component Combination Patterns

### Form Field Pattern

Standard form field structure:
1. Label (FormLabel)
2. Input/Select/Textarea (FormControl)
3. Helper text (FormDescription) - optional
4. Error message (FormMessage) - shown on error

### Card with Actions Pattern

Standard card structure:
1. CardHeader (title + description)
2. CardContent (main content)
3. CardFooter (action buttons)

### Dialog with Form Pattern

Standard dialog with form:
1. DialogTrigger (button to open)
2. DialogContent
   - DialogHeader (title + description)
   - Form fields
   - DialogFooter (submit + cancel buttons)

### Table with Actions Pattern

Standard table structure:
1. Table with columns
2. Actions column (last column)
   - DropdownMenu with actions
   - Or individual action buttons (View, Edit, Delete)

---

## Component Selection Guide

**When to use what:**

| Need | Component |
|------|-----------|
| Button | Button |
| Text input | Input |
| Multi-line text | Textarea |
| Dropdown selection | Select |
| Boolean toggle | Checkbox or Switch |
| Single choice | RadioGroup |
| Modal dialog | Dialog or AlertDialog |
| Side panel | Sheet |
| Notification | Toast |
| Status indicator | Badge |
| Content grouping | Card |
| Navigation | NavigationMenu or Tabs |
| Data table | Table + Tanstack Table |
| Loading state | Skeleton or Progress |
| User profile | Avatar |
| Action menu | DropdownMenu |
| Help text | Tooltip |
| Error message | Alert or Toast |

---

**Reference:** [ShadCN UI Documentation](https://ui.shadcn.com)
