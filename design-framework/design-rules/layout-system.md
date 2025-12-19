# Layout System

## Overview

Layout system based on Tailwind's container, grid, and flexbox utilities for responsive, consistent layouts.

## Containers

### Container Widths

| Breakpoint | Max Width | Padding |
|------------|-----------|---------|
| Mobile (< 640px) | 100% | 16px (`px-4`) |
| Tablet (640px+) | 640px | 24px (`px-6`) |
| Desktop (768px+) | 768px | 24px (`px-6`) |
| Large (1024px+) | 1024px | 32px (`px-8`) |
| XL (1280px+) | 1280px | 32px (`px-8`) |
| 2XL (1536px+) | 1536px | 32px (`px-8`) |

### Container Usage

```html
<!-- Standard container -->
<div class="container mx-auto px-4 md:px-6 lg:px-8">
  Content
</div>

<!-- Full-width section with container inside -->
<section class="w-full bg-muted">
  <div class="container mx-auto px-4 md:px-6 lg:px-8 py-12">
    Content
  </div>
</section>
```

## Responsive Breakpoints

Following Tailwind defaults:

| Breakpoint | Min Width | Usage |
|------------|-----------|-------|
| `sm:` | 640px | Small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Desktop |
| `xl:` | 1280px | Large desktop |
| `2xl:` | 1536px | Extra large |

**Mobile-first:** Start with mobile styles, add breakpoints for larger screens.

## Grid Layouts

### Standard Grid

**12-column grid** for flexible layouts:

```html
<!-- 2-column on mobile, 3-column on tablet, 4-column on desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  <div>Column 1</div>
  <div>Column 2</div>
  <div>Column 3</div>
  <div>Column 4</div>
</div>
```

### Common Grid Patterns

**Card Grid:**
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Cards -->
</div>
```

**Dashboard Grid:**
```html
<div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
  <div class="lg:col-span-8">Main content</div>
  <div class="lg:col-span-4">Sidebar</div>
</div>
```

**Data Grid:**
```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <!-- Stat cards -->
</div>
```

## Flexbox Layouts

### Common Flex Patterns

**Horizontal Stack:**
```html
<div class="flex items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Vertical Stack:**
```html
<div class="flex flex-col gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Space Between:**
```html
<div class="flex justify-between items-center">
  <div>Left</div>
  <div>Right</div>
</div>
```

**Centered Content:**
```html
<div class="flex justify-center items-center min-h-screen">
  <div>Centered content</div>
</div>
```

## Common Layout Compositions

### App Layout (Header + Main + Footer)

```
+----------------------------------+
| Header (sticky)                   |
+----------------------------------+
|                                  |
|  Main Content                    |
|                                  |
|                                  |
+----------------------------------+
| Footer                           |
+----------------------------------+
```

### Dashboard Layout (Sidebar + Main)

```
+--------+------------------------+
| Side-  |                       |
| bar    |  Main Content         |
|        |                       |
|        |                       |
+--------+------------------------+
```

### Two-Column Content

```
+------------------------+---------+
| Main Content           |  Side-  |
| (8 cols)               |  bar    |
|                        |  (4)    |
+------------------------+---------+
```

## Page Sections

### Section Spacing

```html
<div class="space-y-12 md:space-y-16">
  <section class="py-8 md:py-12">Section 1</section>
  <section class="py-8 md:py-12">Section 2</section>
  <section class="py-8 md:py-12">Section 3</section>
</div>
```

### Hero Section

```html
<section class="py-20 md:py-32 text-center">
  <div class="container mx-auto px-4">
    <h1 class="text-4xl md:text-5xl font-bold">Hero Title</h1>
    <p class="text-lg md:text-xl mt-4">Subtitle</p>
  </div>
</section>
```

## Layout Guidelines

### Do's

✅ Use container for content width
✅ Use grid for card layouts
✅ Use flexbox for navigation and toolbars
✅ Apply responsive breakpoints
✅ Use gap utilities for spacing

### Don'ts

❌ Don't use fixed widths (use responsive)
❌ Don't nest too many grids (use flexbox)
❌ Don't forget mobile layouts

## Quality Gates

- [ ] Container widths applied correctly
- [ ] Responsive breakpoints used
- [ ] Grid/flexbox chosen appropriately
- [ ] Mobile-first approach followed
- [ ] Proper spacing between sections

---

**Related:** [Spacing System](spacing-system.md), [Responsive Design](responsive-design.md)
