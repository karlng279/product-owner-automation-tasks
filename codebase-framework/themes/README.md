# Themes

This directory contains theme files for styling Next.js applications using Tailwind CSS v4 and ShadCN UI.

## Available Themes

### MDS Theme (`mds.css`)

The Modern Design System (MDS) theme provides:

**Brand Colors:**
- **Magenta** (`#bd1874`) - Primary CTA color
- **Teal** (`#004d6c`) - Secondary/navigation color
- **Teal Accent** (`#14b8a6`) - Highlight color

**Animations:**
- `animate-reveal` - Clip-path reveal with upward motion
- `scroll-reveal` - Viewport-triggered fade in
- `delay-100/200/300/500` - Staggered animation delays
- `beam-h/beam-v` - Decorative beam effects
- `animate-marquee` - Continuous scroll animation

**Utilities:**
- `mask-linear-fade` - Soft edge masking
- `duration-400` - Extended transition duration
- Custom scrollbar styling

## Usage

### Option 1: Replace globals.css (New Projects)

```bash
cp codebase-framework/themes/mds.css src/app/globals.css
```

### Option 2: Merge with Existing

Copy relevant sections from the theme file into your existing `globals.css`:

1. `@theme` block for Tailwind v4 color tokens
2. `:root` variables for CSS custom properties
3. Animation keyframes
4. Utility classes

## Documentation

- [Theming Guide](../component-patterns/theming.md)
- [Animation Patterns](../component-patterns/animations.md)
- [Design Framework: Color System](../../design-framework/design-rules/color-system.md)
- [Design Framework: Animation System](../../design-framework/design-rules/animation-system.md)

---

**Last Updated:** 2026-01-29
