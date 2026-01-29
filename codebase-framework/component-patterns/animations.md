# MDS Animation Patterns

> Implementation guide for MDS theme animations in Next.js applications

## Overview

The MDS theme includes a comprehensive animation system for creating engaging user experiences. This guide covers how to implement each animation pattern in your components.

---

## Entry Animations

### Reveal Up Animation

A dramatic clip-path reveal with upward motion, perfect for hero content.

**Class:** `animate-reveal`

```tsx
// Basic usage
<h1 className="animate-reveal">
  Welcome to Our Platform
</h1>

// With delay for staggered effect
<div className="animate-reveal delay-100">First element</div>
<div className="animate-reveal delay-200">Second element</div>
<div className="animate-reveal delay-300">Third element</div>
```

**Hero Section Example:**

```tsx
export function HeroSection() {
  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold animate-reveal">
        Build Something Amazing
      </h1>
      <p className="text-xl text-muted-foreground animate-reveal delay-200">
        Start your journey with our platform
      </p>
      <div className="flex gap-4 animate-reveal delay-300">
        <Button>Get Started</Button>
        <Button variant="outline">Learn More</Button>
      </div>
    </section>
  )
}
```

---

## Scroll-Triggered Animations

### Scroll Reveal

Elements animate when they enter the viewport. Requires JavaScript IntersectionObserver.

**Class:** `scroll-reveal` (initial) → add `is-visible` (when in viewport)

### Implementation

#### 1. Create the Hook

```typescript
// hooks/use-scroll-reveal.ts
'use client'

import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            // Optional: unobserve after revealing
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before fully in view
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return ref
}
```

#### 2. Create a Component

```tsx
// components/scroll-reveal.tsx
'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: 100 | 200 | 300 | 500
}

export function ScrollReveal({ children, className, delay }: ScrollRevealProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-reveal',
        delay && `delay-${delay}`,
        className
      )}
    >
      {children}
    </div>
  )
}
```

#### 3. Usage

```tsx
import { ScrollReveal } from '@/components/scroll-reveal'

export function FeatureSection() {
  return (
    <section className="py-20">
      <ScrollReveal>
        <h2 className="text-3xl font-bold">Our Features</h2>
      </ScrollReveal>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <ScrollReveal delay={100}>
          <Card>Feature 1</Card>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <Card>Feature 2</Card>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <Card>Feature 3</Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

---

## Decorative Animations

### Beam Effects

Animated light beams for visual flair on hero sections.

```tsx
// Horizontal beam
<div className="relative overflow-hidden">
  <div
    className="beam-h"
    style={{
      animation: 'beam-h 3s ease-in-out infinite',
      top: '50%'
    }}
  />
  {/* Your content */}
</div>

// Vertical beam
<div className="relative overflow-hidden">
  <div
    className="beam-v"
    style={{
      animation: 'beam-v 4s ease-in-out infinite',
      left: '25%'
    }}
  />
  {/* Your content */}
</div>
```

**Hero with Beams Example:**

```tsx
export function HeroWithBeams() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="beam-h"
          style={{
            animation: 'beam-h 4s ease-in-out infinite',
            top: '30%'
          }}
        />
        <div
          className="beam-h"
          style={{
            animation: 'beam-h 5s ease-in-out infinite 1s',
            top: '70%'
          }}
        />
        <div
          className="beam-v"
          style={{
            animation: 'beam-v 4s ease-in-out infinite 0.5s',
            left: '20%'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-20">
        <h1 className="animate-reveal">Welcome</h1>
      </div>
    </section>
  )
}
```

### Marquee Animation

Continuous horizontal scrolling for content strips.

```tsx
// components/marquee.tsx
interface MarqueeProps {
  children: React.ReactNode
  speed?: number // seconds for one complete scroll
}

export function Marquee({ children, speed = 20 }: MarqueeProps) {
  return (
    <div className="overflow-hidden mask-linear-fade">
      <div
        className="flex animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Content duplicated for seamless loop */}
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0">{children}</div>
      </div>
    </div>
  )
}
```

**Usage:**

```tsx
<Marquee speed={30}>
  <div className="flex gap-8 px-4">
    <img src="/logo1.svg" alt="Partner 1" className="h-12" />
    <img src="/logo2.svg" alt="Partner 2" className="h-12" />
    <img src="/logo3.svg" alt="Partner 3" className="h-12" />
    <img src="/logo4.svg" alt="Partner 4" className="h-12" />
  </div>
</Marquee>
```

---

## Component Animations

### Animated Card

```tsx
// components/animated-card.tsx
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import { cn } from '@/lib/utils'

interface AnimatedCardProps {
  title: string
  children: React.ReactNode
  delay?: 100 | 200 | 300 | 500
  hoverable?: boolean
}

export function AnimatedCard({
  title,
  children,
  delay,
  hoverable = true
}: AnimatedCardProps) {
  const ref = useScrollReveal<HTMLDivElement>()

  return (
    <Card
      ref={ref}
      className={cn(
        'scroll-reveal',
        delay && `delay-${delay}`,
        hoverable && 'hover:shadow-lg hover:-translate-y-1 transition-all duration-300'
      )}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}
```

### Animated Button

```tsx
// Button with scale effect
<Button className="transition-transform active:scale-95">
  Click Me
</Button>

// Button with glow effect on hover
<Button className="relative overflow-hidden group">
  <span className="relative z-10">Hover Me</span>
  <div className="absolute inset-0 bg-magenta-dark opacity-0 group-hover:opacity-100 transition-opacity" />
</Button>
```

### Animated Modal

Using ShadCN Dialog with custom animations:

```tsx
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

// The Dialog already has animations via tailwindcss-animate
// Customize with data attributes:
<DialogContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
  <DialogHeader>
    <DialogTitle>Animated Modal</DialogTitle>
  </DialogHeader>
  {/* Content */}
</DialogContent>
```

---

## Loading States

### Skeleton with Pulse

```tsx
import { Skeleton } from '@/components/ui/skeleton'

// Standard skeleton (uses Tailwind animate-pulse)
<Skeleton className="h-4 w-full" />

// Card skeleton
<Card>
  <CardHeader>
    <Skeleton className="h-6 w-3/4" />
    <Skeleton className="h-4 w-1/2" />
  </CardHeader>
  <CardContent>
    <Skeleton className="h-20 w-full" />
  </CardContent>
</Card>
```

### Loading Spinner

```tsx
import { Loader2 } from 'lucide-react'

// Spinning loader
<Loader2 className="h-6 w-6 animate-spin text-magenta" />

// Button with loading state
<Button disabled>
  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
  Loading...
</Button>
```

---

## Accessibility

### Reduced Motion Support

Always respect user preferences:

```tsx
// hooks/use-reduced-motion.ts
'use client'

import { useEffect, useState } from 'react'

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)

    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return reducedMotion
}
```

**Usage:**

```tsx
function AnimatedComponent() {
  const reducedMotion = useReducedMotion()

  return (
    <div className={reducedMotion ? '' : 'animate-reveal'}>
      Content
    </div>
  )
}
```

### CSS Reduced Motion

The MDS theme CSS should include:

```css
@media (prefers-reduced-motion: reduce) {
  .animate-reveal,
  .scroll-reveal,
  .animate-marquee {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }

  .scroll-reveal {
    opacity: 1;
    transform: none;
  }
}
```

---

## Performance Tips

1. **Use CSS animations over JS when possible**
2. **Only animate `transform` and `opacity`** (GPU-accelerated)
3. **Use `will-change` sparingly** and remove after animation
4. **Unobserve elements after scroll-reveal** to reduce observer work
5. **Use `requestAnimationFrame`** for JS-driven animations
6. **Avoid animating during scroll** (causes jank)

---

## Animation Reference

| Class | Effect | Duration | Timing |
|-------|--------|----------|--------|
| `animate-reveal` | Clip-path reveal + translateY | 1.0s | ease-out-expo |
| `scroll-reveal` | Fade + translateY (on scroll) | 1.0s | ease-out-expo |
| `delay-100` | 100ms delay | - | - |
| `delay-200` | 200ms delay | - | - |
| `delay-300` | 300ms delay | - | - |
| `delay-500` | 500ms delay | - | - |
| `beam-h` | Horizontal light beam | 3-5s | ease-in-out |
| `beam-v` | Vertical light beam | 3-5s | ease-in-out |
| `animate-marquee` | Continuous scroll | 20s | linear |
| `mask-linear-fade` | Soft edge mask | - | - |
| `duration-400` | 400ms transition | 400ms | - |

---

**Related Documentation:**
- [MDS Theming Guide](theming.md)
- [ShadCN Usage](shadcn-usage.md)
- [Design Framework: Animation System](../../design-framework/design-rules/animation-system.md)

**Theme File:** `codebase-framework/themes/mds.css`

---

**Last Updated:** 2026-01-29
