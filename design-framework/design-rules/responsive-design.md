# Responsive Design

## Overview

**Mobile-first** responsive design using Tailwind's breakpoint system. Start with mobile, enhance for larger screens.

## Breakpoint Strategy

### Tailwind Breakpoints

| Prefix | Min Width | Device | Usage |
|--------|-----------|--------|-------|
| (none) | 0px | Mobile | Default, all screens |
| `sm:` | 640px | Large phone / Small tablet | Phone landscape |
| `md:` | 768px | Tablet | iPad portrait |
| `lg:` | 1024px | Desktop | Laptop, small desktop |
| `xl:` | 1280px | Large desktop | Desktop monitors |
| `2xl:` | 1536px | Extra large | Large monitors |

### Mobile-First Approach

**Start small, grow larger:**

```html
<!-- Base (mobile): 1 column -->
<!-- Tablet: 2 columns -->
<!-- Desktop: 3 columns -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards -->
</div>
```

## Responsive Patterns

### Layout

**Container Padding:**
```html
<div class="px-4 md:px-6 lg:px-8">
  <!-- More padding on larger screens -->
</div>
```

**Grid Columns:**
```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  <!-- 1 col mobile, 2 tablet, 4 desktop -->
</div>
```

**Flex Direction:**
```html
<div class="flex flex-col md:flex-row gap-4">
  <!-- Stack vertically on mobile, horizontal on tablet+ -->
</div>
```

### Typography

**Responsive Text Sizes:**
```html
<h1 class="text-3xl md:text-4xl lg:text-5xl">
  <!-- Larger headings on larger screens -->
</h1>

<p class="text-base md:text-lg">
  <!-- Slightly larger body text on larger screens -->
</p>
```

### Spacing

**Responsive Spacing:**
```html
<div class="space-y-4 md:space-y-6 lg:space-y-8">
  <!-- More spacing on larger screens -->
</div>

<section class="py-8 md:py-12 lg:py-16">
  <!-- More vertical padding on larger screens -->
</section>
```

### Visibility

**Show/Hide at Breakpoints:**
```html
<!-- Show only on mobile -->
<div class="block md:hidden">Mobile only</div>

<!-- Hide on mobile, show on desktop -->
<div class="hidden lg:block">Desktop only</div>

<!-- Show on tablet and desktop, hide on mobile -->
<div class="hidden md:block">Tablet and up</div>
```

## Component Behavior

### Navigation

**Mobile:**
- Hamburger menu
- Full-screen overlay or slide-in drawer
- Vertical stack

**Desktop:**
- Horizontal nav bar
- Visible links
- Dropdown menus

```html
<!-- Mobile: hamburger -->
<button class="md:hidden">☰</button>

<!-- Desktop: horizontal links -->
<nav class="hidden md:flex gap-6">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
</nav>
```

### Sidebar

**Mobile:**
- Slide-in drawer (overlay)
- Toggle button

**Desktop:**
- Fixed sidebar
- Always visible

```html
<!-- Mobile: hidden by default -->
<aside class="fixed inset-y-0 left-0 z-50 w-64 bg-card
              transform -translate-x-full md:translate-x-0
              transition-transform">
  <!-- Sidebar content -->
</aside>

<!-- Toggle button (mobile only) -->
<button class="md:hidden">Toggle Sidebar</button>
```

### Cards

**Mobile:**
- Full width
- Stack vertically

**Desktop:**
- Grid layout
- Multiple columns

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-card p-6">Card 1</div>
  <div class="bg-card p-6">Card 2</div>
  <div class="bg-card p-6">Card 3</div>
</div>
```

### Forms

**Mobile:**
- Full-width inputs
- Stack vertically

**Desktop:**
- Multi-column layout
- Inline labels (optional)

```html
<form class="space-y-4">
  <!-- Mobile: stacked, Desktop: 2 columns -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label>First Name</label>
      <input class="w-full" />
    </div>
    <div>
      <label>Last Name</label>
      <input class="w-full" />
    </div>
  </div>
</form>
```

### Tables

**Mobile:**
- Card-based layout
- Stack cells vertically
- Hide less important columns

**Desktop:**
- Standard table
- All columns visible

```html
<!-- Desktop: table -->
<table class="hidden md:table">
  <thead>...</thead>
  <tbody>...</tbody>
</table>

<!-- Mobile: cards -->
<div class="md:hidden space-y-4">
  <div class="bg-card p-4 rounded-lg">
    <!-- Card representation of row -->
  </div>
</div>
```

## Image Handling

### Responsive Images

**Use srcset for different sizes:**
```html
<img
  src="image.jpg"
  srcset="image-small.jpg 640w,
          image-medium.jpg 1024w,
          image-large.jpg 1920w"
  sizes="(max-width: 640px) 100vw,
         (max-width: 1024px) 50vw,
         33vw"
  alt="Description"
/>
```

**Object Fit:**
```html
<!-- Cover: fill container, crop if needed -->
<img class="object-cover w-full h-64" />

<!-- Contain: fit within container, letterbox if needed -->
<img class="object-contain w-full h-64" />
```

## Touch vs Mouse

### Touch-Friendly

- Minimum touch targets: 44x44px
- Larger spacing between interactive elements
- Avoid hover-only interactions
- Use tap/click for all interactions

### Hover States (Desktop Only)

```html
<button class="hover:bg-primary/90 transition-colors">
  <!-- Hover only applies on devices with hover capability -->
</button>
```

## Performance

### Mobile Optimization

- Lazy load images
- Minimize initial bundle size
- Prioritize above-the-fold content
- Use responsive images
- Optimize fonts

## Testing

### Devices to Test

**Mobile:**
- iPhone SE (small)
- iPhone 14 Pro (medium)
- iPad Mini (tablet)

**Desktop:**
- 1366x768 (common laptop)
- 1920x1080 (common desktop)

### Chrome DevTools

- Use device toolbar (Cmd/Ctrl + Shift + M)
- Test at common breakpoints
- Test landscape orientation
- Test touch interactions

## Common Patterns

### Hero Section

```html
<section class="py-12 md:py-20 lg:py-32 text-center">
  <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
    Hero Title
  </h1>
  <p class="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
    Subtitle
  </p>
</section>
```

### Two-Column Layout

```html
<!-- Mobile: stack, Desktop: side-by-side -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### Dashboard Grid

```html
<!-- Mobile: 1 col, Tablet: 2 col, Desktop: 4 col -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <div class="bg-card p-4">Stat 1</div>
  <div class="bg-card p-4">Stat 2</div>
  <div class="bg-card p-4">Stat 3</div>
  <div class="bg-card p-4">Stat 4</div>
</div>
```

## Quality Gates

- [ ] Tested on mobile (< 640px)
- [ ] Tested on tablet (640px - 1024px)
- [ ] Tested on desktop (> 1024px)
- [ ] Touch targets meet 44x44px minimum
- [ ] Content readable at all sizes
- [ ] Images load appropriately for screen size
- [ ] Navigation works on mobile and desktop
- [ ] No horizontal scroll at any breakpoint
- [ ] Typography scales appropriately

---

**Related:** [Layout System](layout-system.md), [Spacing System](spacing-system.md), [Typography](typography.md)
