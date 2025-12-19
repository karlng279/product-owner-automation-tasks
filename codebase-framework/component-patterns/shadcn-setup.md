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
npx shadcn-ui@latest init
```

### Step 2: Answer Configuration Questions

```
Would you like to use TypeScript? › Yes
Which style would you like to use? › Default
Which color would you like to use as base color? › Slate
Where is your global CSS file? › app/globals.css
Would you like to use CSS variables for colors? › Yes
Where is your tailwind.config.js located? › tailwind.config.ts
Configure the import alias for components: › @/components
Configure the import alias for utils: › @/lib/utils
```

**Recommended Answers:**
- TypeScript: **Yes**
- Style: **Default** (or New York for more compact)
- Base color: **Slate** (neutral, professional)
- CSS variables: **Yes** (easier theming)
- Aliases: Use defaults (`@/components`, `@/lib/utils`)

---

## What Gets Created

### 1. Configuration Files

#### `components.json`
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

#### `tailwind.config.ts` (Updated)
```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
```

#### `app/globals.css` (Updated)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
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
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input

# Install multiple at once
npx shadcn-ui@latest add button card input select
```

### Component Files

Each component is added to `components/ui/`:

```
components/ui/
├── button.tsx          # After: npx shadcn-ui add button
├── card.tsx            # After: npx shadcn-ui add card
└── input.tsx           # After: npx shadcn-ui add input
```

### Essential Components to Install

For most projects, start with these:

```bash
npx shadcn-ui@latest add button \
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

Edit CSS variables in `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%;  /* Purple */
  --primary-foreground: 210 40% 98%;
}
```

Or use Tailwind's color system:

```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#8B5CF6',  // Purple
        foreground: '#FFFFFF',
      },
    },
  },
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
npx shadcn-ui@latest add button

# It will ask if you want to overwrite
? Component button already exists. Would you like to overwrite? › (y/N)
```

---

## Next Steps

1. **Install Essential Components**
   ```bash
   npx shadcn-ui@latest add button card input form table
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
- [Component Patterns](README.md)
- [Quick Start](../QUICK_START.md)

**External Resources:**
- [ShadCN UI Official](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

**Last Updated:** 2025-12-19
