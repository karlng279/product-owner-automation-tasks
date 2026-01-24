# Component Specification: Incoterm Card

**Component ID:** COMP-002
**Component Name:** Incoterm Card
**Wireframe ID(s):** WF-002
**Story ID(s):** ST-002
**Acceptance Criteria IDs:** AC-001, AC-002, AC-005, AC-006
**Component Type:** Card
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Display a single Incoterm as a clickable card in the overview grid, showing the code, name, transport mode, and key summary to help users browse all 11 Incoterms.

### Context
Used in the Incoterms Overview page (WF-002) in a grid layout. Each card represents one of the 11 Incoterms 2020.

### Key Functionality
- Display Incoterm code prominently
- Show full name and transport mode
- One-line summary of key characteristic
- Clickable to navigate to detail page

---

## 2. Component Structure

### Layout

**Container:**
- Width: Full column width in grid
- Padding: p-6
- Background: bg-card
- Border: border border-border rounded-lg
- Shadow: shadow-sm

**Layout System:**
- Type: Flexbox
- Configuration: flex flex-col gap-2

### Responsive Behavior

**Mobile (< 640px):**
- Full width, stacked vertically

**Tablet (640px - 1024px):**
- 2 cards per row

**Desktop (> 1024px):**
- 3-4 cards per row

---

## 3. UI Elements & ShadCN Components

### Element 1: Incoterm Code

**Element ID:** COMP-002-EL-001
**Type:** Text heading

**Styling:**
- Typography: text-2xl font-bold
- Color: text-foreground

**Example:** "FOB", "CIF", "EXW"

---

### Element 2: Full Name

**Element ID:** COMP-002-EL-002
**Type:** Text

**Styling:**
- Typography: text-lg text-muted-foreground
-
**Example:** "Free On Board", "Cost, Insurance and Freight"

---

### Element 3: Transport Mode Badge

**Element ID:** COMP-002-EL-003
**ShadCN Component:** Badge

**Variants:**
- Sea Only: variant="secondary", icon: Ship
- Any Mode: variant="outline", icon: Truck

**Content:**
- "Sea Only" or "Any Mode"

---

### Element 4: Key Point

**Element ID:** COMP-002-EL-004
**Type:** Text (summary)

**Styling:**
- Typography: text-sm text-muted-foreground
- Max 2 lines

**Example:** "Risk transfers when goods are on board at origin port"

---

## 4. Component Composition

```
Card (ShadCN)
├── CardHeader (implicit via layout)
│   ├── Incoterm Code (h3)
│   └── Full Name (p)
├── Transport Mode Badge
└── Key Point (p)
```

---

## 5. Component States

### Default State
Card displayed with all information visible

### Hover State
- Border: border-primary/50
- Shadow: shadow-md
- Transform: translateY(-2px) (subtle lift)
- Cursor: pointer

### Focus State (keyboard)
- Ring: ring-2 ring-primary ring-offset-2

---

## 6. Interactions & Behavior

### User Actions

**Click Card:**
- Trigger: Click anywhere on card
- Behavior: Navigate to /learn/[code] (e.g., /learn/fob)
- Feedback: Hover state before click, standard navigation

---

## 7. Props Interface

```typescript
interface IncotermCardProps {
  code: string;           // e.g., "FOB"
  fullName: string;       // e.g., "Free On Board"
  transportMode: "sea" | "any";
  keyPoint: string;       // Short summary
  href: string;           // Link destination
}
```

---

## 8. Accessibility

### Keyboard Navigation
- Focusable via Tab
- Enter/Space to navigate

### ARIA Attributes
- role="article" or use semantic card structure
- Card is a link wrapper

### Touch Targets
- Minimum 48px touch target (entire card is clickable)

---

## 9. Design Rules Applied

### Colors
- Background: bg-card
- Border: border-border
- Text: text-foreground, text-muted-foreground
- Badge: uses ShadCN badge variants

### Spacing
- Padding: p-6 (24px)
- Gap between elements: gap-2 (8px)
- Border radius: rounded-lg

### Typography
- Code: text-2xl font-bold
- Name: text-lg
- Summary: text-sm

---

## 10. Implementation Notes

### Technical Considerations
- Wrap entire card in Next.js Link
- Use CSS transition for hover effects
- Lazy load if many cards (not needed for 11 items)

### Data Structure
```typescript
const incoterms = [
  {
    code: "EXW",
    fullName: "Ex Works",
    transportMode: "any",
    keyPoint: "Minimum seller obligation - buyer takes responsibility at seller's premises"
  },
  // ... all 11 terms
];
```

---

**Status:** Draft
