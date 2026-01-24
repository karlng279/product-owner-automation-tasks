# Component Specification: Responsibility Diagram

**Component ID:** COMP-003
**Component Name:** Responsibility Diagram
**Wireframe ID(s):** WF-003
**Story ID(s):** ST-004
**Acceptance Criteria IDs:** AC-001 to AC-014
**Component Type:** Visualization
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Visual timeline diagram showing the journey of goods from seller to buyer, highlighting where costs and risks transfer for a specific Incoterm. Core educational visualization.

### Context
Appears on each Incoterm detail page (WF-003). One of the most important learning tools in the application.

### Key Functionality
- Display 7 shipping stages on horizontal timeline
- Color-code seller vs buyer responsibility zones
- Mark the transfer point with visual emphasis
- Show tooltips on hover for each stage
- Responsive: horizontal scroll on mobile

---

## 2. Component Structure

### Layout

**Container:**
- Width: 100%
- Padding: p-6
- Background: bg-muted/30
- Border: border rounded-lg

### Timeline Structure

**7 Stages (left to right):**
1. Seller's Premises
2. Export Customs
3. Origin Port/Terminal
4. Main Carriage (Ship/Plane/Truck)
5. Destination Port/Terminal
6. Import Customs
7. Buyer's Premises

### Responsive Behavior

**Mobile (< 640px):**
- Horizontal scroll container
- Fixed minimum width for diagram (600px)
- Scroll indicator arrows

**Desktop (>= 768px):**
- Full width, no scroll needed
- Larger stage labels

---

## 3. UI Elements & ShadCN Components

### Element 1: Stage Markers

**Element ID:** COMP-003-EL-001
**Type:** SVG circles with labels

**Visual:**
- Circle: w-8 h-8 (32px)
- Seller stages: bg-blue-500
- Buyer stages: bg-orange-500
- Active/Transfer stage: Pulse animation

**Labels:**
- Below each circle
- text-xs on mobile, text-sm on desktop

---

### Element 2: Connection Lines

**Element ID:** COMP-003-EL-002
**Type:** SVG path lines

**Visual:**
- Height: 4px
- Seller zone: bg-blue-500
- Buyer zone: bg-orange-500
- Connects between stage markers

---

### Element 3: Transfer Point Indicator

**Element ID:** COMP-003-EL-003
**Type:** Special marker at transfer point

**Visual:**
- Vertical line between seller/buyer zones
- Pulsing animation
- Label: "Risk Transfers Here"
- Arrow pointing down

---

### Element 4: Legend

**Element ID:** COMP-003-EL-004
**Type:** Legend box

**Content:**
- Blue square + "Seller Responsible"
- Orange square + "Buyer Responsible"
- Triangle + "Risk Transfer Point"

**Position:** Below diagram

---

### Element 5: Stage Tooltip

**Element ID:** COMP-003-EL-005
**ShadCN Component:** Tooltip or custom popover

**Content per stage:**
- Stage name
- What happens here
- Who is responsible at this point

**Trigger:** Hover (desktop) or tap (mobile)

---

## 4. Component Composition

```
ResponsibilityDiagram
├── DiagramContainer (scrollable on mobile)
│   ├── Timeline
│   │   ├── SellerZone (left portion)
│   │   │   ├── Stage: Seller's Premises
│   │   │   ├── Stage: Export Customs
│   │   │   ├── Stage: Origin Port
│   │   │   └── ConnectionLines
│   │   ├── TransferPoint (marker)
│   │   └── BuyerZone (right portion)
│   │       ├── Stage: Main Carriage
│   │       ├── Stage: Destination Port
│   │       ├── Stage: Import Customs
│   │       ├── Stage: Buyer's Premises
│   │       └── ConnectionLines
│   └── StageLabels (below timeline)
├── Legend
└── SummaryText
```

---

## 5. Component States

### Default State
Full diagram displayed with appropriate stages colored

### Hover State (on stage)
- Stage circle highlighted
- Tooltip appears with details

### Mobile Scroll State
- Left/right arrows if content overflows
- Visual fade on edges indicating more content

---

## 6. Props Interface

```typescript
interface ResponsibilityDiagramProps {
  incotermCode: string;
  transferPointIndex: number; // 0-6, which stage is transfer point
  stages: Stage[];
}

interface Stage {
  id: number;
  name: string;
  description: string;
  responsibility: "seller" | "buyer";
}
```

---

## 7. Configuration per Incoterm

| Incoterm | Transfer Point | Seller Stages | Buyer Stages |
|----------|---------------|---------------|--------------|
| EXW | 1 (Seller's premises) | 1 | 2-7 |
| FCA | 2-3 (To carrier) | 1-2 | 3-7 |
| FAS | 3 (Alongside ship) | 1-3 | 4-7 |
| FOB | 3-4 (On board) | 1-3 | 4-7 |
| CFR | 3-4 (On board, cost to dest) | 1-5 (cost) | 4-7 (risk from 4) |
| CIF | 3-4 (On board + insurance) | 1-5 (cost) | 4-7 (risk from 4) |
| CPT | 2-3 (To carrier, cost to dest) | 1-5 (cost) | 3-7 (risk from 3) |
| CIP | 2-3 (To carrier + insurance) | 1-5 (cost) | 3-7 (risk from 3) |
| DAP | 6 (At place, not unloaded) | 1-6 | 7 |
| DPU | 6 (At place, unloaded) | 1-6 | 7 |
| DDP | 7 (Duty paid at buyer's) | 1-7 | 7 (minimal) |

---

## 8. Accessibility

### Visual
- Patterns in addition to colors (stripes for colorblind)
- Alt text for SVG: "Responsibility diagram showing..."

### Keyboard
- Tab through stage markers
- Enter/Space to show tooltip
- Escape to close tooltip

### Screen Reader
- aria-describedby for diagram description
- Announce stage details on focus

---

## 9. Design Rules Applied

### Colors
- Seller zone: blue-500 (#3B82F6)
- Buyer zone: orange-500 (#F97316)
- Background: bg-muted/30
- Border: border-border

### Spacing
- Container padding: p-6
- Stage marker gap: even distribution
- Legend below with gap-4

### Animation
- Transfer point: pulse animation (2s interval)
- Tooltip: fade-in 150ms

---

## 10. Implementation Notes

### Technical Considerations
- Use SVG for diagram (scalable, accessible)
- React component with dynamic data
- Consider using Framer Motion for animations
- Mobile: use horizontal scroll with momentum

### Alternative Implementation
- Could use CSS grid instead of SVG
- Could use a library like D3.js for complex diagrams
- Start simple, iterate

---

**Status:** Draft
