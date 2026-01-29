# Component Standards

## Overview

Standard component patterns using **ShadCN UI** components. Reference ShadCN documentation for full component APIs.

## Buttons

### Button Variants

**Primary:** Main call-to-action
- Variant: `default`
- Colors: `bg-primary text-primary-foreground`
- Usage: Submit forms, primary actions

**Secondary:** Supporting actions
- Variant: `secondary`
- Colors: `bg-secondary text-secondary-foreground`
- Usage: Cancel, secondary actions

**Destructive:** Dangerous actions
- Variant: `destructive`
- Colors: `bg-destructive text-destructive-foreground`
- Usage: Delete, remove, destructive actions

**Outline:** Low emphasis
- Variant: `outline`
- Colors: `border border-input bg-background`
- Usage: Tertiary actions, filters

**Ghost:** Minimal emphasis
- Variant: `ghost`
- Colors: Transparent, hover shows background
- Usage: Icon buttons, subtle actions

**Link:** Text-only
- Variant: `link`
- Usage: In-text actions, navigation

### Button Sizes

- **sm:** `h-9 px-3 text-xs` - Compact spaces
- **default:** `h-10 px-4 py-2 text-sm` - Standard
- **lg:** `h-11 px-8 text-base` - Prominent actions
- **icon:** `h-10 w-10` - Icon-only buttons

### Button States

- **Default:** Normal state
- **Hover:** Slightly darker/lighter
- **Focus:** Ring visible (`focus-visible:ring-2 focus-visible:ring-ring`)
- **Disabled:** `opacity-50 cursor-not-allowed`
- **Loading:** Show spinner, disable interaction

## Inputs

### Input Field Standards

**Default Input:**
- Height: `h-10` (40px)
- Padding: `px-3 py-2`
- Border: `border border-input`
- Background: `bg-background`
- Text: `text-base`

**States:**
- Focus: `focus:outline-none focus:ring-2 focus:ring-ring`
- Error: `border-destructive`
- Disabled: `disabled:opacity-50 disabled:cursor-not-allowed`

### Form Layout

```
Label (text-sm font-medium)
  ↓ 8px gap
Input Field
  ↓ 4px gap
Helper/Error Text (text-sm text-muted-foreground)
```

## Cards

### Card Structure

```
Card (bg-card border border-border rounded-lg)
├── CardHeader (p-6)
│   ├── CardTitle (text-2xl font-semibold)
│   └── CardDescription (text-sm text-muted-foreground)
├── CardContent (p-6 pt-0)
│   └── Main content
└── CardFooter (p-6 pt-0)
    └── Actions
```

### Card Variants

**Standard:** Default card with border
**Elevated:** Add shadow (`shadow-lg`)
**Interactive:** Add hover state (`hover:shadow-lg transition-shadow`)

## Dialogs/Modals

### Modal Structure

```
Dialog Overlay (fixed inset-0 bg-background/80)
└── Dialog Content (max-w-lg p-6)
    ├── Dialog Header
    │   ├── Dialog Title (text-lg font-semibold)
    │   └── Dialog Description (text-sm text-muted-foreground)
    ├── Dialog Body
    │   └── Content
    └── Dialog Footer
        └── Actions (flex gap-2 justify-end)
```

### Modal Sizes

- **sm:** `max-w-sm` (384px)
- **md:** `max-w-lg` (512px) - Default
- **lg:** `max-w-2xl` (672px)
- **xl:** `max-w-4xl` (896px)
- **full:** `max-w-full`

## Tables

### Table Structure (Tanstack Table)

```
Table Container (rounded-md border)
└── Table
    ├── Table Header
    │   └── Table Row
    │       └── Table Head (h-12 px-4 text-left font-medium)
    └── Table Body
        └── Table Row (hover:bg-muted/50)
            └── Table Cell (p-4)
```

### Table Features

**Required:**
- Column headers
- Row hover state
- Proper padding

**Optional (based on needs):**
- Sorting (ascending/descending icons)
- Filtering (filter inputs)
- Pagination (page controls)
- Row selection (checkboxes)
- Column resizing

## Forms

### Form Layout Pattern

```html
<form class="space-y-4">
  <!-- Field Group -->
  <div>
    <label class="text-sm font-medium">Label</label>
    <input class="mt-2" />
    <p class="mt-1 text-sm text-muted-foreground">Helper text</p>
  </div>

  <!-- Actions -->
  <div class="flex gap-2 mt-6">
    <button variant="default">Submit</button>
    <button variant="outline">Cancel</button>
  </div>
</form>
```

## Navigation

### Top Navigation

```
Header (sticky top-0 bg-background border-b)
├── Logo/Brand
├── Nav Links (flex gap-6)
└── User Menu / Actions
```

### Sidebar Navigation

```
Sidebar (w-64 bg-card border-r)
├── Logo/Header
├── Nav Items (space-y-1)
│   └── Nav Item (px-3 py-2 rounded-md hover:bg-accent)
└── Footer
```

## Lists

### Standard List

```html
<ul class="space-y-2">
  <li class="px-4 py-2 rounded-md hover:bg-accent">
    List item
  </li>
</ul>
```

### Interactive List

```html
<div class="divide-y divide-border">
  <div class="px-4 py-3 hover:bg-accent cursor-pointer">
    List item with actions
  </div>
</div>
```

## Badges & Tags

**Badge:** Small label for status/count
- Padding: `px-2 py-0.5`
- Text: `text-xs font-semibold`
- Border radius: `rounded-full`
- Variants: default, secondary, destructive, outline

## Tooltips & Popovers

**Tooltip:** Brief helper text
- Background: `bg-popover`
- Text: `text-popover-foreground text-sm`
- Padding: `px-3 py-1.5`
- Arrow: Optional

**Popover:** Rich content overlay
- Max width: `max-w-sm`
- Padding: `p-4`
- Shadow: `shadow-md`

## Loading States

**Spinner:** Circular loading indicator
**Skeleton:** Placeholder content shimmer
**Progress Bar:** Linear progress indicator

## Empty States

```
Empty State Container (text-center py-12)
├── Icon (text-muted-foreground)
├── Title (text-lg font-semibold)
├── Description (text-sm text-muted-foreground)
└── Action Button (optional)
```

## Component Animations (MDS Theme)

### Button Animations
- **Hover:** `transition-colors duration-200` or `hover:bg-primary/90`
- **Active/Click:** `active:scale-95` (optional, 100ms)
- **Loading:** Spinner with `animate-spin`

### Card Animations
- **Entry:** `.scroll-reveal` for cards appearing on scroll
- **Hover:** `hover:shadow-lg transition-shadow duration-200`
- **Interactive:** `hover:-translate-y-1 transition-transform duration-200`

### Modal/Dialog Animations
- **Open:** Fade in with scale from 95% (200ms)
- **Close:** Fade out with scale to 95% (150ms)
- **Backdrop:** `animate-in fade-in-0` (Tailwind animate plugin)

### Navigation Animations
- **Mobile menu:** Slide from left/right (300ms)
- **Dropdown:** `animate-in fade-in-0 slide-in-from-top-2`
- **Active indicator:** Underline slide transition

### Form Field Animations
- **Focus:** `transition-all duration-150` for ring/border
- **Error shake:** Optional `animate-shake` (300ms)
- **Success:** Check icon scale in

### Toast/Notification Animations
- **Enter:** Slide in from edge + fade (300ms)
- **Exit:** Slide out + fade (200ms)

### Page Entry Animations
- **Hero content:** `.animate-reveal` with staggered delays
- **Section content:** `.scroll-reveal` triggered by viewport entry
- **Staggered items:** Use `.delay-100`, `.delay-200`, `.delay-300`

### Animation Timing
- **Default easing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)
- **Quick interactions:** 150-200ms
- **Content reveals:** 500ms-1s
- **Decorative:** 1s+ for ambient effects

---

## Quality Gates

- [ ] Components use ShadCN variants
- [ ] Proper spacing applied
- [ ] States defined (hover, focus, disabled)
- [ ] Accessibility attributes present
- [ ] Responsive behavior specified
- [ ] Consistent with other components
- [ ] Animation timing follows MDS guidelines
- [ ] Reduced motion alternatives considered

---

**Reference:** [ShadCN UI Docs](https://ui.shadcn.com), [Tanstack Table Docs](https://tanstack.com/table), [Animation System](animation-system.md)
