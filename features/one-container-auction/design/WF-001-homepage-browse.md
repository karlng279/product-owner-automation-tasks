# Wireframe: Homepage / Browse Listings

**Wireframe ID:** WF-001
**Feature:** Container Auction & Marketplace (PRD-002)
**Story:** US-006 (Browse Listings)
**Addresses:** AC-052, AC-053, AC-054, AC-055, AC-056
**Screen Type:** List / Grid

---

## Purpose

The main entry point for Buyers to discover available containers. It allows users to search, filter, and view a grid of active auctions to quickly find relevant inventory.

---

## Layout Structure

### Desktop (> 1024px)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Auctions  How it Works                    [Search...]  [Login] [Sell]│
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────┐ ┌─────────────────────────────────────────────────────┐
│ FILTERS              │ │  Showing 12 active auctions        Sort: [Ending ▼] │
│                      │ │                                                     │
│ Container Type       │ │ ┌────────────────┐ ┌────────────────┐ ┌───────────┐ │
│ [x] 20ft Standard    │ │ │ [ IMAGE      ] │ │ [ IMAGE      ] │ │ [ IMAGE ] │ │
│ [ ] 40ft Standard    │ │ │                │ │                │ │           │ │
│ [ ] 40ft High Cube   │ │ │ 🔴 2h 15m left │ │ 🔴 4h 00m left │ │ 🟢 2d left│ │
│                      │ │ ├────────────────┤ ├────────────────┤ ├───────────┤ │
│ Condition            │ │ │ 20ft Dry - Used│ │ 40ft HC - New  │ │ 20ft - Dmg│ │
│ [x] Used             │ │ │ RTM, NL        │ │ HAM, DE        │ │ ANT, BE   │ │
│ [ ] New              │ │ │ Bid: € 1,250   │ │ Bid: € 3,500   │ │ Bid: € 800│ │
│ [ ] Damaged          │ │ │ [ Bid Now ]    │ │ [ Bid Now ]    │ │ [ Bid Now]│ │
│                      │ │ └────────────────┘ └────────────────┘ └───────────┘ │
│ Price Range          │ │                                                     │
│ [ € 500 ] - [ € 5k ] │ │ ┌────────────────┐ ┌────────────────┐ ┌───────────┐ │
│                      │ │ │ [ IMAGE      ] │ │ [ IMAGE      ] │ │ [ IMAGE ] │ │
│ [ Apply Filters ]    │ │ │ ...            │ │ ...            │ │ ...       │ │
│                      │ │ └────────────────┘ └────────────────┘ └───────────┘ │
└──────────────────────┘ └─────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│ Footer Links | Copyright 2025                                                │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Tablet (640px - 1024px)

```
┌──────────────────────────────────────────────────────────────────┐
│ [LOGO] [Search...]                                     [≡ Menu]  │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────┐
│ [ Filter Icon ] Filters                Sort: [Ending Soonest ▼]  │
└──────────────────────────────────────────────────────────────────┘
┌──────────────────────────────┐  ┌──────────────────────────────┐
│ ┌──────────────────────────┐ │  │ ┌──────────────────────────┐ │
│ │ [ IMAGE                ] │ │  │ │ [ IMAGE                ] │ │
│ │ 🔴 2h 15m left           │ │  │ │ 🔴 4h 00m left           │ │
│ ├──────────────────────────┤ │  │ ├──────────────────────────┤ │
│ │ 20ft Dry Container       │ │  │ 40ft High Cube             │ │
│ │ Rotterdam, NL            │ │  │ Hamburg, DE                │ │
│ │ Current Bid: € 1,250     │ │  │ Current Bid: € 3,500       │ │
│ │ [ Bid Now              ] │ │  │ [ Bid Now              ] │ │
│ └──────────────────────────┘ │  │ └──────────────────────────┘ │
└──────────────────────────────┘  └──────────────────────────────┘
```

### Mobile (< 640px)

```
┌──────────────────────────────────────┐
│ [LOGO] [🔍] [≡]                      │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ [ Filter ] [ Sort ]                  │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │ [ IMAGE                        ] │ │
│ │ 🔴 2h 15m left                 │ │
│ ├──────────────────────────────────┤ │
│ │ 20ft Dry Container               │ │
│ │ Rotterdam, NL                    │ │
│ │ Current Bid: € 1,250             │ │
│ │ [ Bid Now                      ] │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**Page Structure:**
- **Header:** Fixed at top, full-width. Contains Navigation and User Actions.
- **Main Content:** Two-column layout. Left Sidebar (Filters) + Right Content (Grid).
- **Footer:** Standard footer.

**Content Zones:**

1. **Zone A (Header):**
   - **Elements:**
     - [Logo] (Left)
     - [Search Bar] (Center - "Search containers...")
     - [Nav Links] ("Auctions", "How it Works")
     - [User Menu] (Right - "Login" / "Register" or Avatar/Name)
     - [CTA Button] ("Sell Container")
   - **Purpose:** Navigation and primary actions.

2. **Zone B (Sidebar - Filters):**
   - **Elements:**
     - [Filter Group: Container Type] (Checkbox: 20ft, 40ft, 40ft HC)
     - [Filter Group: Condition] (Checkbox: New, Used, Damaged)
     - [Filter Group: Price Range] (Min/Max Inputs or Slider)
     - [Button] "Apply Filters" (or auto-apply)
   - **Purpose:** Refine search results.
   - **Width:** 250px fixed.

3. **Zone C (Listing Grid):**
   - **Elements:**
     - [Sort Dropdown] (Top Right - "Ending Soonest", "Price: Low to High")
     - [Results Count] ("Showing 12 active auctions")
     - [Grid] of [Listing Cards] (3 columns)
   - **Purpose:** Display inventory.

4. **Zone D (Listing Card Component):**
   - **Elements:**
     - [Image] (Top aspect-ratio 16:9)
     - [Status Badge] (Overlay: "Ends in 2h 15m")
     - [Title] ("20ft Dry Container - Used")
     - [Location] ("Rotterdam, NL")
     - [Current Bid] ("€ 1,250")
     - [Button] "Bid Now" (Primary)
   - **Purpose:** Summary of individual item.

### Tablet (640px - 1024px)

**Layout Changes:**
- Sidebar becomes a collapsible "Filters" drawer/modal triggered by a button.
- Grid reduces to 2 columns.

### Mobile (< 640px)

**Layout Changes:**
- Grid reduces to 1 column.
- Header simplifies (Hamburger menu).
- "Filters" button sticky at bottom or top of list.

---

## Interaction Notes

- **Hover State:** Listing Cards lift slightly and show shadow on hover.
- **Infinite Scroll / Pagination:** "Load More" button at bottom of grid.
- **Empty State:** If no results, show "No containers found" illustration and "Clear Filters" button.
