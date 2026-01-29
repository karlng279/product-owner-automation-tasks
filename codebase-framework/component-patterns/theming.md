# MDS Theme Integration Guide

> How to apply and customize the MDS (Modern Design System) theme in your Next.js application

## Overview

The MDS theme provides a cohesive visual design system built on top of ShadCN UI and Tailwind CSS v4. It includes brand colors, animations, and utility classes for creating modern, engaging interfaces.

---

## Quick Start

### 1. Copy Theme File

Copy `mds.css` from the themes folder to your project:

```bash
# From project root
cp codebase-framework/themes/mds.css src/app/globals.css
# Or merge with existing globals.css
```

### 2. Import in Layout

Ensure your root layout imports the global styles:

```typescript
// app/layout.tsx
import './globals.css'
```

### 3. Start Using Theme Classes

```tsx
// Use brand colors
<button className="bg-magenta text-white hover:bg-magenta-dark">
  Primary CTA
</button>

// Use animations
<h1 className="animate-reveal delay-100">
  Welcome
</h1>
```

---

## MDS Brand Colors

### Color Tokens

| Token | Hex | CSS Variable | Tailwind Class |
|-------|-----|--------------|----------------|
| **Magenta** | `#bd1874` | `--color-magenta` | `bg-magenta`, `text-magenta` |
| **Magenta Dark** | `#a01462` | `--color-magenta-dark` | `bg-magenta-dark` |
| **Teal** | `#004d6c` | `--color-teal` | `bg-teal`, `text-teal` |
| **Teal Accent** | `#14b8a6` | `--color-teal-accent` | `text-teal-accent` |

### ShadCN Variable Mapping

The theme maps MDS colors to ShadCN's semantic variables:

```css
:root {
    --primary: 326 77% 42%;  /* Magenta as primary */
    --primary-foreground: 210 40% 98%;  /* White text on primary */
}
```

### Usage Examples

```tsx
// Primary button (uses magenta)
<Button>Submit</Button>

// Direct brand color usage
<div className="bg-teal text-white p-4">
  Navigation Header
</div>

// Accent highlights
<span className="text-teal-accent font-semibold">
  +15% increase
</span>

// Gradient with brand colors
<div className="bg-gradient-to-r from-magenta to-teal">
  Hero Banner
</div>
```

---

## Color Usage Guidelines

### When to Use Each Color

**Magenta (`#bd1874`)**
- Primary call-to-action buttons
- Important links
- Active/selected states
- Brand emphasis
- Hero section CTAs

**Teal (`#004d6c`)**
- Navigation bars and headers
- Secondary buttons
- Professional/corporate contexts
- Footer elements
- Sidebar backgrounds

**Teal Accent (`#14b8a6`)**
- Success indicators
- Positive metrics
- Decorative highlights
- Progress indicators
- Interactive accents

### Color Combinations

```tsx
// High contrast CTA
<Button className="bg-magenta hover:bg-magenta-dark text-white">
  Get Started
</Button>

// Professional header
<header className="bg-teal text-white">
  <nav>...</nav>
</header>

// Success message
<Alert className="border-teal-accent bg-teal-accent/10">
  <span className="text-teal-accent">Success!</span>
</Alert>

// Brand gradient
<section className="bg-gradient-to-br from-teal via-teal/80 to-magenta/20">
  Featured Content
</section>
```

---

## Animations

See [animations.md](animations.md) for detailed animation documentation.

### Quick Reference

```tsx
// Page entry animation
<h1 className="animate-reveal">Welcome</h1>

// Staggered entry
<div className="animate-reveal delay-100">First</div>
<div className="animate-reveal delay-200">Second</div>
<div className="animate-reveal delay-300">Third</div>

// Scroll-triggered (requires JS)
<Card className="scroll-reveal">
  Content appears on scroll
</Card>
```

---

## Customizing the Theme

### Overriding Colors

To customize brand colors, edit the `@theme` block:

```css
@theme {
    /* Override magenta with your brand color */
    --color-magenta: #your-brand-color;
    --color-magenta-dark: #your-darker-variant;
}
```

### Adding New Colors

```css
@theme {
    /* Add new brand colors */
    --color-brand-gold: #fbbf24;
    --color-brand-navy: #1e3a5f;
}
```

Then use in components:

```tsx
<div className="bg-brand-gold text-brand-navy">
  New brand element
</div>
```

### Adjusting ShadCN Primary

To change the primary color used by ShadCN components:

```css
:root {
    /* Change from magenta to teal */
    --primary: 195 100% 21%;  /* Teal HSL */
    --primary-foreground: 210 40% 98%;
}
```

---

## Dark Mode Support

### Current Implementation

The MDS theme currently focuses on light mode. To add dark mode:

```css
.dark {
    --background: #171717;
    --foreground: #ffffff;
    --primary-magenta: #d946ef;  /* Lighter magenta for dark mode */
    --primary-teal: #0891b2;     /* Lighter teal for dark mode */

    /* ShadCN dark variables */
    --card: 0 0% 10%;
    --card-foreground: 0 0% 100%;
    /* ... other dark mode variables */
}
```

### Theme Toggle

See [shadcn-setup.md](shadcn-setup.md) for theme toggle implementation.

---

## Integration with Components

### Button with Brand Colors

```tsx
// components/ui/button.tsx - Add brand variant
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        brand: "bg-magenta text-white hover:bg-magenta-dark",
        secondary: "bg-teal text-white hover:bg-teal/90",
        // ... other variants
      },
    },
  }
)
```

### Card with Animation

```tsx
// Animated card component
export function AnimatedCard({ children, delay = 0 }) {
  return (
    <Card className={cn(
      "scroll-reveal",
      delay && `delay-${delay}`
    )}>
      {children}
    </Card>
  )
}
```

### Navigation with Teal

```tsx
export function Navigation() {
  return (
    <nav className="bg-teal text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* Logo and nav items */}
      </div>
    </nav>
  )
}
```

---

## CSS Variables Reference

### MDS Theme Variables

```css
/* Brand Colors */
--color-magenta: #bd1874;
--color-magenta-dark: #a01462;
--color-teal: #004d6c;
--color-teal-accent: #14b8a6;

/* Base */
--color-background: #ffffff;
--color-foreground: #171717;

/* Legacy/Compatibility */
--primary-magenta: #bd1874;
--primary-teal: #004d6c;
--accent-teal: #14b8a6;
```

### ShadCN Variables (HSL format)

```css
--primary: 326 77% 42%;
--primary-foreground: 210 40% 98%;
--secondary: 210 40% 96.1%;
--secondary-foreground: 222.2 47.4% 11.2%;
--destructive: 0 84.2% 60.2%;
--muted: 210 40% 96.1%;
--accent: 210 40% 96.1%;
--border: 214.3 31.8% 91.4%;
--input: 214.3 31.8% 91.4%;
--ring: 222.2 84% 4.9%;
--radius: 0.5rem;
```

---

## Best Practices

### Do's

- Use semantic color names (`bg-magenta`) over hex values
- Apply brand colors consistently across the application
- Use teal for navigation, magenta for CTAs
- Combine with animations for engaging UX
- Test color combinations for accessibility

### Don'ts

- Don't mix arbitrary Tailwind colors with MDS colors
- Don't use magenta and teal in equal proportions (one should dominate)
- Don't forget hover/focus states when using brand colors
- Don't hardcode hex values in components

---

## Related Documentation

- [ShadCN Setup](shadcn-setup.md) - Initial ShadCN configuration
- [ShadCN Usage](shadcn-usage.md) - Component usage examples
- [Animations](animations.md) - MDS animation patterns
- [Design Framework: Color System](../../design-framework/design-rules/color-system.md) - Design specifications

---

**Theme File Location:** `codebase-framework/themes/mds.css`

**Last Updated:** 2026-01-29
