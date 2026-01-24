# Component Specification: Comparison Table

**Component ID:** COMP-005
**Component Name:** Comparison Table
**Wireframe ID(s):** WF-009
**Story ID(s):** ST-012
**Acceptance Criteria IDs:** AC-001 to AC-018
**Component Type:** Table
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Side-by-side comparison table displaying 2-3 Incoterms with all key attributes, highlighting differences to help users make informed decisions.

### Context
Used on the Comparison View page (WF-009). Core feature for understanding differences between Incoterms.

### Key Functionality
- Display 2-3 Incoterms as columns
- Compare multiple attributes (rows)
- Highlight differences between terms
- Remove individual terms
- Mobile: switch to card layout

---

## 2. Component Structure

### Desktop Layout (Table)

**Container:**
- Width: 100%, max-w-4xl
- Overflow: auto (for horizontal scroll if needed)

**Table Structure:**
- First column: Attribute labels (sticky)
- Additional columns: One per Incoterm (2-3)

### Mobile Layout (Cards)

**Container:**
- Stack cards vertically
- Each Incoterm as a separate card

---

## 3. Table Rows (Attributes)

| Row | Attribute | Example Values |
|-----|-----------|----------------|
| 1 | Full Name | "Free On Board", "Cost, Insurance and Freight" |
| 2 | Transport Mode | Sea Only / Any Mode |
| 3 | Risk Transfer Point | At origin port / At destination |
| 4 | Cost Transfer Point | At origin / At destination |
| 5 | Seller's Key Responsibilities | Bullet list |
| 6 | Buyer's Key Responsibilities | Bullet list |
| 7 | Insurance Requirement | Not included / Included |
| 8 | Best Used When | Scenario descriptions |

---

## 4. UI Elements & ShadCN Components

### Element 1: Column Header

**Element ID:** COMP-005-EL-001
**Type:** Table header cell

**Content:**
- Incoterm code (large, bold)
- Full name (smaller)
- Remove button (×)

**Styling:**
- Background: bg-muted
- Position: sticky top
- Padding: p-4

---

### Element 2: Row Label

**Element ID:** COMP-005-EL-002
**Type:** Table row header

**Styling:**
- Position: sticky left
- Background: bg-background
- Width: 180px
- Font: font-medium

---

### Element 3: Cell Content

**Element ID:** COMP-005-EL-003
**Type:** Table cell

**Styling:**
- Padding: p-4
- Border: border-b border-border

---

### Element 4: Difference Indicator

**Element ID:** COMP-005-EL-004
**ShadCN Component:** Badge

**Visual:**
- "DIFFERENT" badge on rows where values differ
- Highlighted background on differing cells
- Icon: lightning bolt or similar

---

### Element 5: Remove Button

**Element ID:** COMP-005-EL-005
**ShadCN Component:** Button (variant: ghost, size: icon)

**Icon:** X

**Behavior:**
- Click: Remove this Incoterm from comparison
- If only 1 remains: Show prompt to add more

---

## 5. Component States

### Default State
Table displayed with 2-3 columns, all rows visible

### Difference Highlighted State
Cells with different values have highlighted background

### Single Column State (after removal)
Show message: "Add another Incoterm to compare"
Button to return to selection

---

## 6. Props Interface

```typescript
interface ComparisonTableProps {
  incoterms: Incoterm[]; // 2-3 items
  onRemove: (code: string) => void;
}

interface Incoterm {
  code: string;
  fullName: string;
  transportMode: string;
  riskTransfer: string;
  costTransfer: string;
  sellerResponsibilities: string[];
  buyerResponsibilities: string[];
  insurance: string;
  bestUsedWhen: string[];
}
```

---

## 7. Responsive Behavior

### Desktop (>= 768px)
- Standard table layout
- Sticky row labels on left
- Sticky headers on top

### Mobile (< 768px)
- Switch to card layout
- One card per Incoterm
- Cards stacked vertically
- Each card shows all attributes

---

## 8. Accessibility

### Table Semantics
- Use proper table, thead, tbody, th, td
- scope="col" for column headers
- scope="row" for row headers

### Keyboard Navigation
- Tab through interactive elements
- Focus visible on remove buttons

### Screen Reader
- Announce column headers with cell content
- Announce "different" when values differ

---

## 9. Design Rules Applied

### Colors
- Header: bg-muted
- Difference highlight: bg-yellow-50 dark:bg-yellow-950
- Border: border-border

### Spacing
- Cell padding: p-4
- Border: 1px

### Typography
- Headers: font-bold
- Labels: font-medium
- Content: text-sm

---

## 10. Implementation Notes

### Technical Considerations
- Use HTML table for accessibility
- CSS table-layout: fixed for consistent columns
- Detect differences by comparing values
- URL state: encode selected terms in query params

---

**Status:** Draft
