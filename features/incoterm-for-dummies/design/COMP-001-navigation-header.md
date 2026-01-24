# Component Specification: Navigation Header

**Component ID:** COMP-001
**Component Name:** Navigation Header
**Wireframe ID(s):** WF-001 to WF-012 (all screens)
**Story ID(s):** ST-001, ST-009
**Acceptance Criteria IDs:** AC-004 (ST-001), AC-001-018 (ST-009)
**Component Type:** Navigation
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Global navigation header providing site-wide navigation, branding, and search functionality for quick access to all major sections of the platform.

### Context
Appears at the top of every page. Fixed position, always visible. Primary way users navigate between Learn, Quiz, Reference, Compare, and Find sections.

### Key Functionality
- Site logo/branding (links to home)
- Main navigation links (5 sections)
- Global search with autocomplete
- Responsive: collapses to hamburger menu on mobile

---

## 2. Component Structure

### Layout

**Container:**
- Width: Full viewport width
- Height: 64px (h-16)
- Padding: px-4 md:px-6
- Background: bg-background
- Border: border-b border-border
- Shadow: none (or shadow-sm)
- Position: fixed top-0, z-50

### Responsive Behavior

**Mobile (< 768px):**
- Logo left, hamburger menu right
- Navigation in slide-out Sheet (mobile drawer)
- Search moves inside mobile menu

**Desktop (>= 768px):**
- Logo left, navigation center, search right
- Full navigation visible
- Search visible in header

---

## 3. UI Elements & ShadCN Components

### Element 1: Logo

**Element ID:** COMP-001-EL-001
**Type:** Link with Image/Text
**Content:** "Incoterm for Dummies" or logo mark

**Behavior:**
- Click: Navigate to home (/)
- Hover: opacity-80

**Accessibility:**
- aria-label: "Go to homepage"

---

### Element 2: Navigation Links

**Element ID:** COMP-001-EL-002
**ShadCN Component:** Button (variant: ghost)

**Links:**
| Label | Path | Icon (optional) |
|-------|------|-----------------|
| Learn | /learn | BookOpen |
| Quiz | /quiz | HelpCircle |
| Reference | /reference | FileText |
| Compare | /compare | GitCompare |
| Find | /find | Compass |

**States:**
- Default: text-muted-foreground
- Hover: text-foreground, bg-accent
- Active (current page): text-foreground, font-medium

**Accessibility:**
- aria-current="page" for active link

---

### Element 3: Search Input

**Element ID:** COMP-001-EL-003
**ShadCN Component:** Input
**Type:** Search with autocomplete

**Props:**
- placeholder: "Search Incoterms..."
- className: w-[200px] lg:w-[300px]

**Behavior:**
- Focus: Show autocomplete dropdown
- Type 2+ chars: Show results
- Click result: Navigate to detail page
- Press Enter: Navigate to search results page

**Autocomplete Dropdown:**
- Max 5 results
- Each result shows: Code, Full Name
- "No results" message if empty

---

### Element 4: Mobile Menu Button

**Element ID:** COMP-001-EL-004
**ShadCN Component:** Button (variant: ghost, size: icon)
**Icon:** Menu (hamburger)

**Visibility:** md:hidden (only on mobile)

**Behavior:**
- Click: Open Sheet (mobile drawer)

---

### Element 5: Mobile Navigation Sheet

**Element ID:** COMP-001-EL-005
**ShadCN Component:** Sheet (side: left)

**Content:**
- Logo at top
- Search input
- Navigation links (stacked vertically)
- Close button

---

## 4. Component Composition

```
Header (container)
├── Logo (link)
├── Desktop Navigation (hidden on mobile)
│   ├── NavLink: Learn
│   ├── NavLink: Quiz
│   ├── NavLink: Reference
│   ├── NavLink: Compare
│   └── NavLink: Find
├── Search Input (hidden on mobile)
├── Mobile Menu Button (hidden on desktop)
└── Mobile Sheet (slide-out)
    ├── Logo
    ├── Search Input
    ├── NavLink: Learn
    ├── NavLink: Quiz
    ├── NavLink: Reference
    ├── NavLink: Compare
    └── NavLink: Find
```

---

## 5. Component States

### Default State
Full navigation visible on desktop, hamburger on mobile

### Active Link State
Current page link highlighted with different styling

### Search Open State
Search autocomplete dropdown visible with results

---

## 6. Accessibility

### Keyboard Navigation
- Tab through all navigation links
- Enter to navigate
- Escape to close mobile menu/search dropdown

### ARIA Attributes
- nav role="navigation"
- aria-label="Main navigation"
- aria-current="page" on active link

---

## 7. Design Rules Applied

### Colors
- Background: bg-background
- Text: text-foreground
- Muted: text-muted-foreground
- Border: border-border

### Spacing
- Container padding: px-4 md:px-6
- Link spacing: gap-1 md:gap-2
- Height: h-16 (64px)

### Typography
- Logo: text-lg font-semibold
- Links: text-sm font-medium

---

## 8. Implementation Notes

### Technical Considerations
- Use Next.js Link component for navigation
- Use usePathname() to determine active link
- Search uses client-side filtering of static data
- Debounce search input (150ms)

### Dependencies
- lucide-react for icons
- @/components/ui/sheet for mobile menu
- @/components/ui/input for search

---

**Status:** Draft
