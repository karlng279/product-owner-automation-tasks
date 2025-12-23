# Component Specification: Listing Card

**Component ID:** COMP-001
**Component Name:** Listing Card
**Wireframe ID(s):** WF-001, WF-003
**Story ID(s):** US-006, US-003
**Acceptance Criteria IDs:** AC-052, AC-024
**Component Type:** Card
**Created:** 2024-05-21
**Last Updated:** 2024-05-21

---

## 1. Component Overview

### Purpose
To display a summary of a container listing in a grid or list view, allowing users to quickly scan available containers and navigate to details.

### Context
- **Browse Page:** Main grid of listings.
- **Seller Dashboard:** List of active/ended listings (potentially a list variant, but card is primary).

### User Interaction
- **Click Card:** Navigates to Listing Detail page.
- **Click "Bid Now" / "View":** Navigates to Listing Detail page.

### Key Functionality
- Display container image (thumbnail).
- Show key details: Type, Condition, Location.
- Show current price and bid count.
- Show countdown timer (Time Remaining).
- Visual indicator for "Ending Soon" (Red timer).

---

## 2. Component Structure

### Layout

**Container:**
- **Component:** `Card` (ShadCN)
- **Width:** 100% (responsive within grid col)
- **Border:** Standard border, rounded-lg.
- **Shadow:** `hover:shadow-md` transition.

**Internal Structure:**
1.  **Header (Image):** Aspect ratio 16:9 or 4:3.
2.  **Content:**
    -   Title (Type + Size)
    -   Badges (Condition, Location)
    -   Price Section (Current Bid)
    -   Time Remaining (Countdown)
3.  **Footer:** Action button.

### Responsive Behavior
- **Mobile:** Stacked vertically in a single column grid.
- **Desktop:** Grid layout (3-4 columns), card maintains aspect ratio.

---

## 3. ShadCN Components & Props

### 1. Card (Root)
- **Component:** `Card`
- **Props:** `className="overflow-hidden hover:shadow-lg transition-shadow"`

### 2. Image Area
- **Component:** `AspectRatio` (optional) or standard `img`
- **Props:** `ratio={16/9}`, `className="bg-muted"`

### 3. Badges
- **Component:** `Badge`
- **Variant:**
    -   Condition: `secondary` or `outline`
    -   Status (Active/Ended): `default` (if needed)

### 4. Price Display
- **Component:** `Typography` (Text)
- **Style:** `font-bold text-lg`

### 5. Action Button
- **Component:** `Button`
- **Variant:** `default` (Browse page) or `outline` (Dashboard)
- **Size:** `sm` or `default`
- **Label:** "View Details" or "Place Bid"

---

## 4. Data Requirements

### Input Data (Props)
```typescript
interface ListingCardProps {
  id: string;
  title: string; // e.g., "20ft Standard Dry Container"
  imageSrc: string;
  condition: 'New' | 'Used' | 'Damaged';
  location: string;
  currentPrice: number;
  currency: string; // e.g., "€" or "$"
  endTime: string; // ISO Date string
  bidCount: number;
}
```

### State
- **Hover:** Slight lift or shadow increase.
- **Countdown:** Client-side tick updating remaining time.

---

## 5. Accessibility (A11y)
- **Images:** Must have `alt` text (e.g., "20ft Container in Rotterdam").
- **Focus:** Entire card should be clickable or have a clear primary action button that is tab-navigable.
- **Contrast:** Ensure text contrast on badges and price.
