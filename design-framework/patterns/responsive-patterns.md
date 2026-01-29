# Responsive Design Patterns

## Overview

Common patterns for adapting layouts across device sizes using mobile-first approach.

---

## Layout Transformation Patterns

### Stack to Side-by-Side

**Mobile (< 640px):** Stack vertically
```
+-------------+
| Section A   |
+-------------+
| Section B   |
+-------------+
```

**Desktop (> 1024px):** Side-by-side
```
+-------------+-------------+
| Section A   | Section B   |
+-------------+-------------+
```

**CSS:** `flex flex-col md:flex-row`

---

### Grid Column Changes

**Mobile:** 1 column
```
+-------------+
| Card 1      |
+-------------+
| Card 2      |
+-------------+
| Card 3      |
+-------------+
```

**Tablet (640px+):** 2 columns
```
+-------------+-------------+
| Card 1      | Card 2      |
+-------------+-------------+
| Card 3      |             |
+-------------+-------------+
```

**Desktop (1024px+):** 4 columns
```
+-----+-----+-----+-----+
| C1  | C2  | C3  | C4  |
+-----+-----+-----+-----+
```

**CSS:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

---

## Navigation Patterns

### Horizontal to Hamburger

**Desktop:**
```
+------------------------------------------------------------------+
| {Logo}  Link 1  Link 2  Link 3  Link 4           [User Menu ▼]  |
+------------------------------------------------------------------+
```

**Mobile:**
```
+------------------------------+
| ☰  {Logo}      [User Icon]   |
+------------------------------+
```

**CSS:** `hidden md:flex` for links, `md:hidden` for hamburger

---

### Sidebar Patterns

**Desktop:** Fixed sidebar
```
+----------+--------------------+
| Sidebar  | Main Content       |
| (Fixed)  |                    |
+----------+--------------------+
```

**Mobile:** Slide-in drawer
```
+-----------------------------+
| Main Content (Full width)   |
| [☰] Toggle sidebar          |
+-----------------------------+
```

**Components:** Sheet (mobile drawer)

---

## Form Layout Patterns

### Two-Column to Single

**Desktop:** Two columns
```
| First Name__________  Last Name____________ |
| Email_______________________________________  |
```

**Mobile:** Single column
```
| First Name___________________ |
| Last Name____________________ |
| Email________________________ |
```

**CSS:** `grid grid-cols-1 md:grid-cols-2`

---

## Table Patterns

### Scroll Horizontally

**All Sizes:** Table scrolls horizontally
```
+------------------------------+
| [Table scrolls horizontally →|
+------------------------------+
```

**CSS:** `overflow-x-auto`

**Hint:** "Swipe to see more" on mobile

---

### Table to Cards

**Desktop:** Standard table
```
+--------------------------------+
| Name | Email | Status | Actions |
+--------------------------------+
| John | john@ | Active | [View]  |
+--------------------------------+
```

**Mobile:** Card layout
```
+---------------------+
| John Doe       [⋮]  |
| john@example.com    |
| Status: Active      |
+---------------------+
```

**CSS:** `hidden md:table` for table, `md:hidden` for cards

---

## Typography Scaling

**Pattern:** Larger text on larger screens

**Mobile:**
```
Page Title (text-2xl)
Body text (text-base)
```

**Desktop:**
```
Page Title (text-4xl)
Body text (text-lg)
```

**CSS:** `text-2xl md:text-3xl lg:text-4xl`

---

## Spacing Adjustments

**Pattern:** More spacing on larger screens

**Mobile:**
```
Padding: px-4 (16px)
Gap: gap-4 (16px)
```

**Desktop:**
```
Padding: px-6 lg:px-8 (24px-32px)
Gap: gap-6 lg:gap-8 (24px-32px)
```

**CSS:** `px-4 md:px-6 lg:px-8`

---

## Image Patterns

### Responsive Images

**Pattern:** Different image sizes for different screens

```html
<img
  srcset="image-small.jpg 640w,
          image-medium.jpg 1024w,
          image-large.jpg 1920w"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
/>
```

---

### Object Fit

**Pattern:** Maintain aspect ratio

**Cover:** Fill container, crop if needed
```
<img class="object-cover w-full h-64" />
```

**Contain:** Fit within container, letterbox if needed
```
<img class="object-contain w-full h-64" />
```

---

## Show/Hide Elements

### Desktop Only

**CSS:** `hidden lg:block`

**Use when:** Less critical information, sidebar ads

---

### Mobile Only

**CSS:** `block md:hidden`

**Use when:** Mobile-specific UI (hamburger menu)

---

### Show at Specific Breakpoints

**Tablet and up:** `hidden md:block`
**Only tablet:** `hidden md:block lg:hidden`

---

## Container Width Patterns

### Full Width

**Pattern:** Spans entire viewport
```
+------------------------------------------------------------------+
| Full-width content (no max-width)                                |
+------------------------------------------------------------------+
```

**CSS:** `w-full`

---

### Constrained Width

**Pattern:** Max width with auto margins (centered)
```
                +------------------------+
                | Max width container    |
                | (centered)             |
                +------------------------+
```

**CSS:** `max-w-lg mx-auto` (or max-w-xl, max-w-2xl, etc.)

---

## Modal Responsive

**Desktop:** Centered modal with max-width
```
     +----------------------+
     | Modal (max-w-lg)     |
     | Centered             |
     +----------------------+
```

**Mobile:** Full width with margins or slide up from bottom
```
+---------------------------+
| Modal (full width w/ mx-4)|
| or slide up from bottom   |
+---------------------------+
```

---

## Dashboard Grid

**Mobile:** 1 column
```
+-------------+
| Stat 1      |
+-------------+
| Stat 2      |
+-------------+
```

**Tablet:** 2 columns
```
+------+------+
| St 1 | St 2 |
+------+------+
| St 3 | St 4 |
+------+------+
```

**Desktop:** 4 columns
```
+--+--+--+--+
|S1|S2|S3|S4|
+--+--+--+--+
```

**CSS:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

---

## Touch Targets

**Pattern:** Larger targets on touch devices

**Desktop:** Standard button (h-10 = 40px)
**Mobile:** Ensure minimum 44x44px

**CSS:** Built into component standards

---

## Breakpoint Reference

| Breakpoint | Min Width | Tailwind | Usage |
|------------|-----------|----------|-------|
| Mobile | 0px | (none) | Default |
| Small | 640px | `sm:` | Large phone |
| Medium | 768px | `md:` | Tablet |
| Large | 1024px | `lg:` | Desktop |
| XL | 1280px | `xl:` | Large desktop |
| 2XL | 1536px | `2xl:` | Extra large |

---

## Best Practices

1. **Mobile-First:** Start with mobile styles, add breakpoints for larger
2. **Touch-Friendly:** 44x44px minimum touch targets
3. **Readable Text:** Minimum 16px font size
4. **No Horizontal Scroll:** Ensure content fits at all breakpoints
5. **Test on Devices:** Real devices, not just browser resize
6. **Performance:** Optimize images for mobile
7. **Progressive Enhancement:** Core functionality works on all devices

---

## Common Breakpoint Patterns

### Content Width
```
max-w-sm   (384px)  - Narrow forms
max-w-md   (448px)  - Standard forms
max-w-lg   (512px)  - Wide forms, modals
max-w-xl   (576px)  - Content pages
max-w-2xl  (672px)  - Wide content
max-w-4xl  (896px)  - Very wide
max-w-full (100%)   - Full width
```

### Grid Columns
```
grid-cols-1              - Mobile
md:grid-cols-2           - Tablet (2 col)
lg:grid-cols-3           - Desktop (3 col)
lg:grid-cols-4           - Desktop (4 col)
grid-cols-1 md:grid-cols-3 lg:grid-cols-4  - Progressive
```

### Spacing
```
px-4            - Mobile padding
md:px-6         - Tablet padding
lg:px-8         - Desktop padding
gap-4 md:gap-6  - Responsive gap
```

---

## Related
- [Responsive Design Rules](../design-rules/responsive-design.md)
- [Layout System](../design-rules/layout-system.md)
- [Component Standards](../design-rules/component-standards.md)
