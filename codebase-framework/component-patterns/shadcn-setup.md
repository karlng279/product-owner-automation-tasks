# ShadCN Setup Guide

> Installing and configuring ShadCN UI for your Next.js project

## Overview

ShadCN UI is a collection of reusable components built with Radix UI and TailwindCSS. Unlike traditional component libraries, ShadCN copies component source code directly into your project, giving you full control.

**Key Benefit:** You own the code and can customize without limitations.

---

## Installation

### Prerequisites

Ensure you have:
- Node.js 18+ installed
- A Next.js 14+ project with App Router
- TailwindCSS configured

### Step 1: Initialize ShadCN

Run the initialization command:

```bash
npx shadcn@latest init
```

### Step 2: Answer Configuration Questions

```
Would you like to use TypeScript? › Yes
Which style would you like to use? › New York
Which color would you like to use as base color? › Zinc
Where is your global CSS file? › app/globals.css
Would you like to use CSS variables for colors? › Yes
Where is your tailwind.config.js located? › tailwind.config.ts
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
```

**Note:** With Tailwind v4, `shadcn` might simplify some of these choices or detect configuration automatically.

### Step 3: Apply MDS Theme

The MDS (Modern Design System) theme provides brand colors and animations. To apply it:

#### Option A: Replace globals.css (Recommended for new projects)

```bash
# Copy MDS theme to your project
cp codebase-framework/themes/mds.css src/app/globals.css
```

#### Option B: Merge with existing globals.css

Copy the following sections from `codebase-framework/themes/mds.css` into your existing `globals.css`:

1. **@theme block** - Tailwind v4 color tokens
2. **:root variables** - CSS custom properties
3. **Animation keyframes** - reveal-up, fade-in, beam effects
4. **Utility classes** - scroll-reveal, delay utilities

#### Option C: Apply external theme (Alternative)

```bash
npx shadcn@latest add <registry-url>
# Example: npx shadcn@latest add https://tweakcn.com/r/themes/modern-minimal.json
```

---

## MDS Theme Features

### Brand Colors
- **Magenta** (`#bd1874`) - Primary CTA color
- **Teal** (`#004d6c`) - Secondary/navigation color
- **Teal Accent** (`#14b8a6`) - Highlight color

### Animations
- **animate-reveal** - Clip-path reveal with upward motion
- **scroll-reveal** - Viewport-triggered fade in
- **delay-100/200/300/500** - Staggered animation delays
- **beam-h/beam-v** - Decorative beam effects
- **animate-marquee** - Continuous scroll animation

### Utilities
- **mask-linear-fade** - Soft edge masking
- **duration-400** - Extended transition duration
- Custom scrollbar styling

See [theming.md](theming.md) for detailed usage.

---

## What Gets Created

### 1. Configuration Files

#### `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

#### `tailwind.config.ts` (Optional in v4)

With Tailwind v4, much of the configuration moves to CSS variables in `@theme` blocks within your CSS file. You might still have a minimal config for content paths if needed, or rely on automatic detection.

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  // ... rest of config if needed
}
export default config
```

#### `app/globals.css` (Updated for Tailwind v4)
```css
@import "tailwindcss";

@plugin "tailwindcss-animate";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  /* ... other vars in oklch ... */
  --radius: 0.5rem;
}

.dark {
  --background: oklch(0.129 0.042 264.695);
  --foreground: oklch(0.984 0.003 247.858);
  /* ... other vars in oklch ... */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... map all other variables ... */
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
}
```

### 2. Utility Files

#### `lib/utils.ts`
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

This `cn()` utility merges Tailwind classes intelligently, handling conflicts.

---

## Adding Components

### Installing Individual Components

```bash
# Install specific components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input

# Install multiple at once
npx shadcn@latest add button card input select
```

### Component Files

Each component is added to `components/ui/`:

```
components/ui/
├── button.tsx          # After: npx shadcn add button
├── card.tsx            # After: npx shadcn add card
└── input.tsx           # After: npx shadcn add input
```

### Essential Components to Install

For most projects, start with these:

```bash
npx shadcn@latest add button \
  card \
  input \
  label \
  select \
  textarea \
  table \
  dialog \
  dropdown-menu \
  toast \
  form
```

---

## Theming

### Light/Dark Mode

ShadCN supports light/dark mode via CSS variables. Implement theme switching:

#### 1. Create Theme Context

```typescript
// contexts/theme-context.tsx
'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
}>({
  theme: 'system',
  setTheme: () => null,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system')

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
```

#### 2. Add to Root Layout

```typescript
// app/layout.tsx
import { ThemeProvider } from '@/contexts/theme-context'

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

#### 3. Theme Toggle Component

```typescript
// components/theme-toggle.tsx
'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'
import { Button } from '@/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

### Custom Colors

Edit CSS variables in `app/globals.css`. With Tailwind v4, we use Oklch colors:

```css
:root {
  --primary: oklch(0.627 0.265 303.9);  /* Purple */
  --primary-foreground: oklch(0.985 0 0);
}
```

---

## Dependencies

ShadCN installs these dependencies:

```json
{
  "dependencies": {
    "@radix-ui/react-*": "^1.0.0",  // Component primitives
    "class-variance-authority": "^0.7.0",  // Variant handling
    "clsx": "^2.0.0",  // Class merging
    "tailwind-merge": "^2.0.0",  // Tailwind class merging
    "tailwindcss-animate": "^1.0.7"  // Animations
  }
}
```

---

## Customization

### Modifying Components

Since ShadCN copies code to your project, you can edit freely:

```typescript
// components/ui/button.tsx

// ✅ Good - Customize as needed
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground",
        // Add your own variant
        custom: "bg-purple-500 text-white hover:bg-purple-600",
      },
    },
  }
)
```

### Creating Custom Components

Build on ShadCN primitives:

```typescript
// components/shared/loading-button.tsx
import { Button, ButtonProps } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean
}

export function LoadingButton({
  loading,
  children,
  disabled,
  ...props
}: LoadingButtonProps) {
  return (
    <Button disabled={loading || disabled} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
```

---

## Troubleshooting

### Issue: Components Not Found

**Error:** `Module not found: Can't resolve '@/components/ui/button'`

**Solution:**
```bash
# Ensure path alias is configured
# Check tsconfig.json has:
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Issue: Styling Not Applied

**Solution:**
```bash
# Ensure Tailwind is configured
# Check tailwind.config.ts includes:
content: [
  './components/**/*.{ts,tsx}',
  './app/**/*.{ts,tsx}',
],
```

### Issue: Dark Mode Not Working

**Solution:**
```typescript
// Ensure darkMode is set in tailwind.config.ts:
darkMode: ["class"],

// And suppressHydrationWarning in html tag:
<html suppressHydrationWarning>
```

---

## Updating Components

To update a component to the latest version:

```bash
# Re-run add command
npx shadcn@latest add button

# It will ask if you want to overwrite
? Component button already exists. Would you like to overwrite? › (y/N)
```

---

## Next Steps

1. **Install Essential Components**
   ```bash
   npx shadcn@latest add button card input form table
   ```

2. **Set Up Theme Provider**
   - Create theme context
   - Add to root layout
   - Create theme toggle

3. **Start Building**
   - See [shadcn-usage.md](shadcn-usage.md) for component examples
   - See [form-patterns.md](form-patterns.md) for form handling
   - See [table-patterns.md](table-patterns.md) for data tables

---

**Related Documentation:**
- [ShadCN Usage Guide](shadcn-usage.md)
- [MDS Theming Guide](theming.md)
- [Animation Patterns](animations.md)
- [Component Patterns](README.md)
- [Quick Start](../QUICK_START.md)

**External Resources:**
- [ShadCN UI Official](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

**Theme File:** `codebase-framework/themes/mds.css`

---

**Last Updated:** 2026-01-29
