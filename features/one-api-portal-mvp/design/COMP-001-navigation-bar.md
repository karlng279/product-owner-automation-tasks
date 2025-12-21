# COMP-001: Navigation Bar Component Specification

**Feature:** ONE API Portal MVP
**Component Type:** Layout Component
**Wireframes:** WF-001, WF-002, WF-003 (Used on all pages)
**ShadCN Components:** None (custom component using Tailwind)
**Created:** 2025-12-21
**Status:** Draft

---

## Purpose

The Navigation Bar is the primary navigation component appearing at the top of every page. It provides:
- Brand identity (ONE LINE logo)
- Main navigation links (API Reference, Getting Started, Changelog)
- Search functionality
- Responsive mobile menu

---

## ShadCN UI Mapping

**Base Components:**
- No direct ShadCN component (custom layout)
- Uses Tailwind CSS utility classes
- Optional: shadcn/ui `Sheet` component for mobile menu overlay

**Related Patterns:**
- Fixed header pattern (Tailwind: `fixed top-0 z-50`)
- Flexbox layout for alignment
- Responsive visibility utilities

---

## Component Structure

### Desktop View (≥1024px)

```tsx
<header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
  <div className="container mx-auto px-4 h-16 flex items-center justify-between">
    {/* Logo - Left */}
    <Link href="/" className="flex items-center gap-2">
      <img src="/logo.svg" alt="ONE LINE" className="h-8" />
      <span className="text-xl font-semibold text-gray-900">
        API Docs
      </span>
    </Link>

    {/* Navigation Links - Center/Right */}
    <nav className="hidden md:flex items-center gap-6">
      <Link href="/api-reference" className="nav-link">
        API Reference
      </Link>
      <Link href="/getting-started" className="nav-link">
        Getting Started
      </Link>
      <Link href="/changelog" className="nav-link">
        Changelog
      </Link>
    </nav>

    {/* Search - Far Right */}
    <button
      className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-600
                 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      onClick={openSearch}
    >
      <SearchIcon className="w-4 h-4" />
      <span>Search...</span>
      <kbd className="px-2 py-1 text-xs bg-white rounded border">⌘K</kbd>
    </button>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-2 text-gray-600 hover:text-gray-900"
      onClick={toggleMobileMenu}
      aria-label="Toggle menu"
    >
      <MenuIcon className="w-6 h-6" />
    </button>
  </div>
</header>
```

### Mobile View (<768px)

```tsx
{/* Mobile Menu Overlay (using shadcn Sheet component) */}
<Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>

    <nav className="flex flex-col gap-4 mt-6">
      <Link href="/api-reference" className="mobile-nav-link">
        API Reference
      </Link>
      <Link href="/getting-started" className="mobile-nav-link">
        Getting Started
      </Link>
      <Link href="/changelog" className="mobile-nav-link">
        Changelog
      </Link>

      <hr className="my-2" />

      <button
        className="flex items-center gap-2 text-left"
        onClick={openSearch}
      >
        <SearchIcon className="w-5 h-5" />
        Search documentation
      </button>
    </nav>
  </SheetContent>
</Sheet>
```

---

## Props / Configuration

```typescript
interface NavigationBarProps {
  currentPath?: string;        // For active link highlighting
  onSearchOpen?: () => void;    // Callback when search is triggered
  variant?: 'default' | 'transparent'; // Background style
}
```

---

## Styling Specifications

### Typography
- **Logo Text:** 20px (1.25rem), font-weight: 600 (semibold)
- **Nav Links:** 15px (0.9375rem), font-weight: 500 (medium)
- **Mobile Nav Links:** 16px (1rem), font-weight: 500

### Colors
- **Background:** White (#FFFFFF)
- **Border:** Gray-200 (#E5E7EB)
- **Logo Text:** Gray-900 (#111827)
- **Nav Links Default:** Gray-600 (#4B5563)
- **Nav Links Hover:** Gray-900 (#111827)
- **Nav Links Active:** Blue-600 (#2563EB)
- **Search Button BG:** Gray-100 (#F3F4F6)
- **Search Button Hover:** Gray-200 (#E5E7EB)

### Spacing
- **Header Height:** 64px (h-16)
- **Horizontal Padding:** 16px (px-4)
- **Link Gap:** 24px (gap-6)
- **Logo-to-text Gap:** 8px (gap-2)

### States

**Nav Link States:**
```css
/* Default */
.nav-link {
  @apply text-gray-600 hover:text-gray-900 transition-colors;
  padding: 8px 12px;
  border-radius: 6px;
}

/* Hover */
.nav-link:hover {
  @apply text-gray-900 bg-gray-50;
}

/* Active (current page) */
.nav-link[data-active="true"] {
  @apply text-blue-600 bg-blue-50 font-semibold;
}

/* Focus (keyboard) */
.nav-link:focus-visible {
  @apply outline-2 outline-blue-500 outline-offset-2;
}
```

**Mobile Nav Link:**
```css
.mobile-nav-link {
  @apply text-gray-700 hover:text-blue-600 py-3 px-4 rounded-md
         hover:bg-blue-50 transition-colors;
  font-size: 16px;
}

.mobile-nav-link[data-active="true"] {
  @apply text-blue-600 bg-blue-50 font-semibold;
}
```

---

## Behavior Specifications

### 1. Active Link Highlighting
```tsx
const NavigationBar = ({ currentPath }: NavigationBarProps) => {
  const isActive = (path: string) => currentPath?.startsWith(path);

  return (
    <Link
      href="/api-reference"
      className="nav-link"
      data-active={isActive('/api-reference')}
    >
      API Reference
    </Link>
  );
};
```

### 2. Search Trigger
- **Desktop:** Click search button OR press `Cmd+K` (Mac) / `Ctrl+K` (Windows)
- **Mobile:** Click search icon → Opens full-screen search overlay
- **Keyboard shortcut:** Works globally on all pages

```tsx
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      onSearchOpen?.();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [onSearchOpen]);
```

### 3. Mobile Menu Toggle
```tsx
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

const toggleMobileMenu = () => {
  setMobileMenuOpen(!mobileMenuOpen);
};

// Close menu when route changes
useEffect(() => {
  setMobileMenuOpen(false);
}, [currentPath]);
```

### 4. Scroll Behavior (Optional Enhancement)
```tsx
// Add shadow when scrolled down
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

<header className={cn(
  "fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow",
  scrolled && "shadow-sm"
)}>
```

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| `< 768px` | Show hamburger menu + search icon only. Hide nav links. |
| `768px - 1023px` | Show nav links + search. May adjust spacing. |
| `≥ 1024px` | Full desktop layout with all elements visible. |

---

## Accessibility Requirements

### ARIA Labels
```tsx
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    {/* Navigation links */}
  </nav>

  <button
    aria-label="Open search"
    aria-keyshortcuts="Control+K"
    onClick={openSearch}
  >
    {/* Search button */}
  </button>

  <button
    aria-label="Toggle menu"
    aria-expanded={mobileMenuOpen}
    onClick={toggleMobileMenu}
  >
    {/* Mobile menu button */}
  </button>
</header>
```

### Keyboard Navigation
- **Tab Order:** Logo → Nav Links → Search → Mobile Menu (if visible)
- **Enter/Space:** Activates links and buttons
- **Escape:** Closes mobile menu
- **Cmd+K / Ctrl+K:** Opens search from anywhere

### Focus Management
- All interactive elements must have visible focus indicators
- Focus trap in mobile menu (can't tab outside while open)
- Focus returns to hamburger button when menu closes

### Screen Reader
- Header has `role="banner"`
- Nav has `role="navigation"` with `aria-label`
- Mobile menu has `aria-expanded` state
- Active link has `aria-current="page"`

---

## Component Dependencies

**Required:**
- React / Next.js
- Tailwind CSS
- lucide-react icons (SearchIcon, MenuIcon, XIcon)

**Optional:**
- shadcn/ui `Sheet` component for mobile menu
- clsx or cn utility for conditional classes
- React Router or Next.js Link for navigation

**Installation:**
```bash
# shadcn Sheet component (optional, for mobile menu)
npx shadcn-ui@latest add sheet

# Icons
npm install lucide-react
```

---

## Usage Example

```tsx
import { NavigationBar } from '@/components/layout/navigation-bar';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <NavigationBar
        currentPath={pathname}
        onSearchOpen={() => setSearchOpen(true)}
      />

      {/* Search Modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Main Content (with top padding to account for fixed header) */}
      <main className="pt-16">
        {children}
      </main>
    </>
  );
}
```

---

## Testing Checklist

- [ ] Logo links to homepage
- [ ] Active link highlighted correctly on all pages
- [ ] All nav links navigate to correct pages
- [ ] Search button opens search modal
- [ ] Cmd+K / Ctrl+K keyboard shortcut works
- [ ] Mobile menu opens/closes correctly
- [ ] Mobile menu closes on navigation
- [ ] Mobile menu closes on outside click
- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators visible
- [ ] Screen reader announces navigation correctly
- [ ] Works on mobile, tablet, desktop
- [ ] No layout shift when scrolling
- [ ] Shadow appears on scroll (if implemented)

---

## Performance Notes

- **Fixed Positioning:** Uses `position: fixed` to stay at top during scroll
- **Z-Index:** Set to 50 to appear above content but below modals (z-60+)
- **Transitions:** Smooth color transitions (150ms) for hover states
- **Mobile Menu:** Uses shadcn Sheet which handles body scroll locking
- **Icons:** Load from lucide-react (tree-shakeable)

---

## Design Decisions

**Why no dropdown menus?**
- Keep navigation simple and flat
- All main sections accessible in one click
- Better for keyboard navigation and screen readers

**Why fixed header?**
- Always accessible for navigation
- Search always available
- Common pattern in documentation sites (Stripe, Twilio, etc.)

**Why Cmd+K for search?**
- Industry standard (GitHub, Vercel, Linear, etc.)
- Familiar to developers
- Quick access without mouse

---

## Related Documents

- **Wireframes:** WF-001, WF-002, WF-003
- **Next Component:** COMP-002 (Sidebar Navigator)
- **Design System:** design-framework/design-rules/
- **shadcn Sheet:** https://ui.shadcn.com/docs/components/sheet
