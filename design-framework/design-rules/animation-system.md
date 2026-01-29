# Animation System

## Overview

The MDS (Modern Design System) animation system provides consistent, performant animations for creating engaging user experiences. All animations follow accessibility guidelines and can be disabled for users who prefer reduced motion.

---

## Core Animation Principles

### 1. Purpose-Driven
Every animation should serve a purpose:
- **Feedback:** Confirm user actions
- **Orientation:** Show spatial relationships
- **Focus:** Direct attention to important elements
- **Delight:** Add personality without distraction

### 2. Performance-First
- Use CSS transforms and opacity (GPU-accelerated)
- Avoid animating layout properties (width, height, margin)
- Keep animations under 300ms for interactions
- Use `will-change` sparingly and only when needed

### 3. Accessibility
- Respect `prefers-reduced-motion` media query
- Provide alternatives for motion-sensitive users
- Ensure content is accessible during animations

---

## MDS Animation Library

### Entry Animations

#### Reveal Up Animation
Clip-path reveal with upward movement for dramatic entrances.

**Class:** `.animate-reveal`
**Duration:** 1.0s
**Timing:** `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo)

**Usage:**
- Hero sections
- Page titles
- Feature cards on landing pages
- Modal content

**CSS Definition:**
```css
@keyframes reveal-up {
    0% {
        clip-path: inset(100% 0 0 0);
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        clip-path: inset(0 0 0 0);
        transform: translateY(0);
        opacity: 1;
    }
}

.animate-reveal {
    opacity: 0;
    animation: reveal-up 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
```

#### Fade In Animation
Simple opacity transition for subtle entrances.

**Class:** `.animate-fade-in` (or use Tailwind's built-in)
**Duration:** Variable
**Timing:** Linear or ease-out

**Usage:**
- Lazy-loaded images
- Secondary content
- Tooltips and popovers

---

### Scroll-Triggered Animations

#### Scroll Reveal
Elements animate when they enter the viewport.

**Class:** `.scroll-reveal`
**Active Class:** `.is-visible`
**Duration:** 1.0s
**Timing:** `cubic-bezier(0.16, 1, 0.3, 1)`

**Initial State:**
- `opacity: 0`
- `transform: translateY(20px)`

**Visible State:**
- `opacity: 1`
- `transform: translateY(0)`

**Usage:**
- Content sections on scroll
- Cards in a grid
- Timeline items
- Feature lists

**CSS Definition:**
```css
.scroll-reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-reveal.is-visible {
    opacity: 1;
    transform: translateY(0);
}
```

**Implementation Note:** Requires JavaScript IntersectionObserver to add `.is-visible` class when element enters viewport.

---

### Delay Utilities

Stagger animations for sequential reveal effects.

| Class | Delay | Use Case |
|-------|-------|----------|
| `.delay-100` | 100ms | First item in sequence |
| `.delay-200` | 200ms | Second item |
| `.delay-300` | 300ms | Third item |
| `.delay-500` | 500ms | Delayed emphasis |

**Usage Pattern:**
```html
<div class="animate-reveal delay-100">First</div>
<div class="animate-reveal delay-200">Second</div>
<div class="animate-reveal delay-300">Third</div>
```

**CSS Definition:**
```css
.delay-100 { animation-delay: 0.1s; transition-delay: 0.1s; }
.delay-200 { animation-delay: 0.2s; transition-delay: 0.2s; }
.delay-300 { animation-delay: 0.3s; transition-delay: 0.3s; }
.delay-500 { animation-delay: 0.5s; transition-delay: 0.5s; }
```

---

### Decorative Animations

#### Beam Effects
Animated light beams for visual flair on hero sections.

**Horizontal Beam:**
- Class: `.beam-h`
- Size: 200px width × 1px height
- Color: Linear gradient with magenta (`var(--primary-magenta)`)

**Vertical Beam:**
- Class: `.beam-v`
- Size: 1px width × 200px height
- Color: Linear gradient with magenta (`var(--primary-magenta)`)

**Usage:**
- Hero section backgrounds
- Decorative grid overlays
- Loading states
- Brand-focused landing pages

**CSS Definition:**
```css
@keyframes beam-h {
    0% { left: -200px; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { left: 100%; opacity: 0; }
}

@keyframes beam-v {
    0% { top: -200px; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { top: 100%; opacity: 0; }
}

.beam-h {
    position: absolute;
    height: 1px;
    width: 200px;
    background: linear-gradient(90deg, transparent, var(--primary-magenta), transparent);
    z-index: 10;
    opacity: 0;
}

.beam-v {
    position: absolute;
    width: 1px;
    height: 200px;
    background: linear-gradient(180deg, transparent, var(--primary-magenta), transparent);
    z-index: 10;
    opacity: 0;
}
```

#### Marquee Animation
Continuous horizontal scrolling for content strips.

**Class:** `.animate-marquee`
**Duration:** 20s
**Timing:** Linear, infinite

**Usage:**
- Logo carousels
- Testimonial tickers
- News/announcement strips
- Partner logos

**CSS Definition:**
```css
@keyframes marquee-scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.animate-marquee {
    animation: marquee-scroll 20s linear infinite;
}
```

**Implementation Note:** Content should be duplicated to create seamless loop.

---

### Utility Classes

#### Mask Linear Fade
Soft fade edges for marquee and carousel content.

**Class:** `.mask-linear-fade`

**Effect:** Transparent → Black → Black → Transparent gradient mask

**CSS Definition:**
```css
.mask-linear-fade {
    mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
}
```

#### Duration Utility
Extended transition duration.

**Class:** `.duration-400`
**Value:** 400ms

---

## Animation Timing Functions

### Recommended Curves

| Name | Value | Use Case |
|------|-------|----------|
| **Ease Out Expo** | `cubic-bezier(0.16, 1, 0.3, 1)` | Entry animations, reveals |
| **Ease Out** | `ease-out` | General exits |
| **Ease In Out** | `ease-in-out` | Continuous animations |
| **Linear** | `linear` | Infinite loops, marquees |

### MDS Default Timing
The MDS theme uses `cubic-bezier(0.16, 1, 0.3, 1)` as the primary easing function. This creates a smooth, professional feel with quick initial movement that gently settles.

---

## Animation Specifications in Wireframes

When specifying animations in wireframes, use this format:

```
Animation: [Animation Name]
- Trigger: [on-load | on-scroll | on-hover | on-click]
- Duration: [time in ms or s]
- Delay: [delay class or time]
- Easing: [timing function]
```

### Example:
```
Hero Title:
Animation: reveal-up
- Trigger: on-load
- Duration: 1.0s
- Delay: delay-100
- Easing: cubic-bezier(0.16, 1, 0.3, 1)

Feature Cards:
Animation: scroll-reveal
- Trigger: on-scroll (viewport entry)
- Duration: 1.0s
- Delay: delay-100, delay-200, delay-300 (staggered)
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
```

---

## Component Animation Guidelines

### Buttons
- **Hover:** Scale or background color transition (150-200ms)
- **Click/Active:** Slight scale down (100ms)
- **Loading:** Spinner rotation (infinite)

### Cards
- **Entry:** scroll-reveal or fade-in
- **Hover:** Subtle shadow/elevation increase (200ms)
- **Click:** Scale down slightly (100ms)

### Modals/Dialogs
- **Open:** Fade in + scale up from 95% (200ms)
- **Close:** Fade out + scale down (150ms)
- **Backdrop:** Fade in (200ms)

### Navigation
- **Mobile menu:** Slide in from side (300ms)
- **Dropdown:** Fade in + slide down (150ms)
- **Active indicator:** Slide/morph (200ms)

### Forms
- **Focus:** Ring transition (150ms)
- **Error:** Shake animation (optional, 300ms)
- **Success:** Check mark scale in (200ms)

### Toasts/Notifications
- **Enter:** Slide in + fade (300ms)
- **Exit:** Slide out + fade (200ms)

---

## Accessibility Considerations

### Reduced Motion Support

Always wrap motion-intensive animations with reduced motion query:

```css
@media (prefers-reduced-motion: reduce) {
    .animate-reveal,
    .scroll-reveal,
    .animate-marquee {
        animation: none;
        transition: none;
        opacity: 1;
        transform: none;
    }
}
```

### Guidelines

1. **Essential animations only:** Only keep animations that convey meaning
2. **Instant alternatives:** Provide instant state changes instead
3. **No auto-playing:** Avoid animations that start without user action
4. **Pause controls:** Provide pause/stop for continuous animations

---

## Quality Gates

Before finalizing animation specifications:

- [ ] Animation serves a clear purpose (feedback, orientation, focus, delight)
- [ ] Duration is appropriate (< 300ms for interactions, < 1s for reveals)
- [ ] Uses GPU-accelerated properties (transform, opacity)
- [ ] Reduced motion alternative specified
- [ ] Consistent with MDS timing functions
- [ ] Delay utilities used for staggered effects
- [ ] No jarring or disorienting movements

---

## Related Rules

- [Color System](color-system.md) - MDS brand colors for animations
- [Component Standards](component-standards.md) - Component-specific animations
- [Accessibility](accessibility.md) - Motion accessibility requirements

---

**Reference:** MDS Theme (`mds.css`) contains all animation definitions.
