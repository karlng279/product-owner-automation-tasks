# Component Specification: Dashboard Stats Card

**Component ID:** COMP-004
**Component Name:** Dashboard Stats Card
**Wireframe ID(s):** WF-003
**Story ID(s):** US-003
**Acceptance Criteria IDs:** AC-024, AC-025
**Component Type:** Card
**Created:** 2024-05-21
**Last Updated:** 2024-05-21

---

## 1. Component Overview

### Purpose
To provide a quick summary metric to the user on their dashboard, such as "Active Listings", "Total Sales", or "Pending Actions".

### Context
- **Seller Dashboard:** Top row of key metrics.
- **Admin Dashboard:** System-wide metrics.

### User Interaction
- **Click (Optional):** Can act as a filter or link to a detailed view (e.g., clicking "Active Listings" filters the list below).

### Key Functionality
- Display a Label (Title).
- Display a Value (Number/Currency).
- Display an Icon (Visual cue).
- Optional: Trend indicator (e.g., "+5% from last month").

---

## 2. Component Structure

### Layout

**Container:**
- **Component:** `Card`
- **Padding:** `p-6`
- **Layout:** Flex row (Icon + Content) or Stacked.

**Internal Structure:**
1.  **Header:** Title + Icon.
2.  **Content:** Big Value.
3.  **Footer:** Subtext (optional).

### Responsive Behavior
- **Mobile:** Stacked vertically (1 column).
- **Desktop:** Grid (3-4 columns).

---

## 3. ShadCN Components & Props

### 1. Card
- **Component:** `Card`, `CardHeader`, `CardTitle`, `CardContent`.

### 2. Icon
- **Library:** `lucide-react` (standard with ShadCN).
- **Size:** `h-4 w-4` (muted) or larger depending on design.

### 3. Typography
- **Value:** `text-2xl font-bold`.
- **Label:** `text-sm font-medium text-muted-foreground`.

---

## 4. Data Requirements

### Input Data
```typescript
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ComponentType; // Lucide Icon
  description?: string; // e.g. "+20.1% from last month"
  onClick?: () => void;
}
```

---

## 5. Accessibility (A11y)
- **Reading Order:** Label then Value.
- **Icons:** Decorative icons should be `aria-hidden`.
