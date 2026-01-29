# Spacing System

## Overview

The spacing system uses a **4px base unit** aligned with Tailwind CSS's spacing scale, ensuring consistent spacing throughout the application.

## Spacing Scale

### Base Unit: 4px

All spacing follows multiples of 4px for visual consistency and alignment.

| Token | Pixels | Tailwind Class | Usage |
|-------|--------|----------------|-------|
| `space-0` | 0px | `m-0`, `p-0` | No spacing |
| `space-0.5` | 2px | `m-0.5`, `p-0.5` | Minimal spacing |
| `space-1` | 4px | `m-1`, `p-1` | Extra tight spacing |
| `space-2` | 8px | `m-2`, `p-2` | Tight spacing |
| `space-3` | 12px | `m-3`, `p-3` | Compact spacing |
| `space-4` | 16px | `m-4`, `p-4` | Standard spacing |
| `space-5` | 20px | `m-5`, `p-5` | Comfortable spacing |
| `space-6` | 24px | `m-6`, `p-6` | Spacious |
| `space-8` | 32px | `m-8`, `p-8` | Large spacing |
| `space-10` | 40px | `m-10`, `p-10` | Extra large |
| `space-12` | 48px | `m-12`, `p-12` | Section spacing |
| `space-16` | 64px | `m-16`, `p-16` | Major section spacing |
| `space-20` | 80px | `m-20`, `p-20` | Page section spacing |
| `space-24` | 96px | `m-24`, `p-24` | Large page sections |

## Spacing Conventions

### Component Internal Spacing (Padding)

**Extra Tight (4-8px):**
- Button padding
- Badge padding
- Tag padding

**Standard (12-16px):**
- Card padding
- Input padding
- Modal content padding

**Spacious (24-32px):**
- Page container padding
- Section padding
- Large card padding

### Component External Spacing (Margin)

**Between Related Elements (8-12px):**
- Form field to form field
- Button to button in a group
- List items

**Between Sections (16-24px):**
- Form sections
- Card to card
- Content blocks

**Between Major Sections (32-48px):**
- Page sections
- Major content areas

## Component-Specific Spacing

### Buttons

**Internal Padding:**
- Small: `px-3 py-1.5` (12px horizontal, 6px vertical)
- Default: `px-4 py-2` (16px horizontal, 8px vertical)
- Large: `px-6 py-3` (24px horizontal, 12px vertical)

**External Spacing:**
- Between buttons: `gap-2` (8px) or `gap-3` (12px)
- From form fields: `mt-4` (16px)

### Forms

**Field Spacing:**
- Between fields: `space-y-4` (16px vertical)
- Label to input: `mb-2` (8px)
- Error message: `mt-1` (4px)

**Section Spacing:**
- Between form sections: `space-y-6` (24px)
- Form to submit button: `mt-6` (24px)

### Cards

**Internal Padding:**
- Compact: `p-4` (16px all sides)
- Standard: `p-6` (24px all sides)
- Spacious: `p-8` (32px all sides)

**External Spacing:**
- Between cards: `gap-4` (16px) or `gap-6` (24px)
- Card grid: `gap-6` (24px)

### Lists

**Internal Spacing:**
- List item padding: `px-4 py-2` (16px horizontal, 8px vertical)
- Nested list indent: `pl-6` (24px)

**External Spacing:**
- Between lists: `space-y-4` (16px)

### Modals/Dialogs

**Internal Padding:**
- Header: `p-6` (24px)
- Content: `p-6` (24px)
- Footer: `p-6` (24px)

**Between Elements:**
- Header to content: No additional spacing (rely on padding)
- Content to footer: Border or divider

### Navigation

**Internal Padding:**
- Nav item: `px-4 py-2` (16px horizontal, 8px vertical)
- Dropdown item: `px-3 py-2` (12px horizontal, 8px vertical)

**External Spacing:**
- Between nav items: `gap-1` (4px) or `gap-2` (8px)

## Layout Spacing

### Containers

**Page Container:**
- Default padding: `px-4 md:px-6 lg:px-8`
  - Mobile: 16px
  - Tablet: 24px
  - Desktop: 32px

### Grid Gaps

**Standard Grid:**
- Tight: `gap-4` (16px)
- Comfortable: `gap-6` (24px)
- Spacious: `gap-8` (32px)

**Data Grids/Tables:**
- Column gap: `gap-4` (16px)
- Row gap: `gap-2` (8px)

### Sections

**Page Sections:**
- Between major sections: `space-y-12` (48px) or `space-y-16` (64px)
- Section internal padding: `py-8` (32px) or `py-12` (48px)

## Responsive Spacing

Use responsive utilities to adjust spacing at different breakpoints:

**Pattern:** `{property}-{size} {breakpoint}:{property}-{size}`

**Examples:**
```
p-4 md:p-6 lg:p-8          /* Increase padding on larger screens */
space-y-4 md:space-y-6     /* Increase vertical spacing */
gap-4 lg:gap-6             /* Increase grid gap on desktop */
```

### Mobile-First Approach

Start with mobile spacing, then increase for larger screens:

```
/* Mobile: tight spacing */
p-4 gap-4 space-y-4

/* Tablet: moderate spacing */
md:p-6 md:gap-6 md:space-y-6

/* Desktop: generous spacing */
lg:p-8 lg:gap-8 lg:space-y-8
```

## Spacing Guidelines

### Do's

✅ **Use the spacing scale**
- Stick to defined increments (4, 8, 12, 16, 24, 32, 48, 64)
- Use Tailwind classes, not arbitrary values

✅ **Be consistent**
- Use same spacing for similar components
- Follow established patterns

✅ **Consider hierarchy**
- More space = more separation = distinct sections
- Less space = related elements

✅ **Use logical spacing utilities**
- `space-y-*` for consistent vertical spacing between children
- `gap-*` for grid/flex gaps
- `divide-y-*` for borders between elements

### Don'ts

❌ **Don't use arbitrary spacing**
- Avoid: `p-[13px]` or `m-[27px]`
- Use scale values instead

❌ **Don't over-space**
- Too much whitespace = disconnected UI
- Find the balance

❌ **Don't under-space**
- Too little whitespace = cramped, hard to read
- Respect minimum touch targets (44x44px)

❌ **Don't mix spacing systems**
- Stick to the 4px base unit
- Don't introduce 5px or 7px spacing

## Wireframe Spacing Notation

When creating wireframes, indicate spacing using bracket notation:

**Format:** `[space-{size}]` or `{size}px`

**Examples:**
```
Card:
  [space-6] padding
  +------------------+
  |  Card Content    |
  |  [space-4] gap   |
  |  More Content    |
  +------------------+

Form:
  Input Field
  [space-4] ↓
  Input Field
  [space-6] ↓
  Submit Button
```

## Common Spacing Patterns

### Form Spacing Pattern

```
<form class="space-y-4">          <!-- 16px between fields -->
  <div>
    <label class="mb-2">...</label>  <!-- 8px label to input -->
    <input class="p-3">...</input>   <!-- 12px internal padding -->
    <p class="mt-1 text-destructive">...</p>  <!-- 4px error spacing -->
  </div>

  <div class="mt-6">              <!-- 24px to submit -->
    <button class="px-4 py-2">...</button>
  </div>
</form>
```

### Card Grid Pattern

```
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">  <!-- 24px gap -->
  <div class="p-6">...</div>     <!-- 24px card padding -->
  <div class="p-6">...</div>
  <div class="p-6">...</div>
</div>
```

### Section Spacing Pattern

```
<div class="space-y-12">         <!-- 48px between sections -->
  <section class="py-8">...</section>  <!-- 32px section padding -->
  <section class="py-8">...</section>
  <section class="py-8">...</section>
</div>
```

## Quality Gates

Before finalizing spacing:

- [ ] All spacing uses the 4px scale
- [ ] No arbitrary spacing values
- [ ] Responsive spacing applied for mobile/tablet/desktop
- [ ] Related elements have appropriate proximity
- [ ] Touch targets meet 44x44px minimum (see [accessibility.md](accessibility.md))
- [ ] Spacing creates clear visual hierarchy
- [ ] Consistent spacing for similar components

## Related Rules

- [Layout System](layout-system.md) - Container and grid spacing
- [Component Standards](component-standards.md) - Component-specific spacing
- [Accessibility](accessibility.md) - Touch target sizing
- [Responsive Design](responsive-design.md) - Breakpoint-based spacing

---

**Remember:** Consistent spacing creates rhythm and hierarchy. Follow the 4px scale for a harmonious interface.
