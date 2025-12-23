# Wireframe: Seller Dashboard

**Wireframe ID:** WF-003
**Feature:** Container Auction & Marketplace (PRD-002)
**Story:** US-003 (Seller Dashboard)
**Addresses:** AC-024 to AC-031
**Screen Type:** Dashboard

---

## Purpose

The command center for Sellers to manage their inventory, track active auctions, and view sales performance.

---

## Layout Structure

### Desktop (> 1024px)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Dashboard  My Listings  Settings          [User Menu ▼]  [Sell Item] │
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────┐
│  Seller Dashboard                                     [ + Create Listing ]   │
│                                                                              │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐            │
│  │ Active Listings  │  │ Total Sales      │  │ Pending Actions  │            │
│  │      5           │  │    € 12,500      │  │       1          │            │
│  │ [ View All ]     │  │ ↗️ +15% vs last  │  │ ⚠️ Ship Item #45 │            │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘            │
│                                                                              │
│  Active Auctions                                                             │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Item                 │ Price    │ Bids │ Time Left    │ Actions        │  │
│  ├──────────────────────┼──────────┼──────┼──────────────┼────────────────┤  │
│  │ [img] 20ft Dry...    │ € 1,200  │  3   │ 02h 15m      │ [Edit] [View]  │  │
│  ├──────────────────────┼──────────┼──────┼──────────────┼────────────────┤  │
│  │ [img] 40ft HC...     │ € 3,500  │  8   │ 04h 00m      │ [Edit] [View]  │  │
│  ├──────────────────────┼──────────┼──────┼──────────────┼────────────────┤  │
│  │ [img] 20ft Dmg...    │ € 800    │  0   │ 2d 10h       │ [Edit] [View]  │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  Recent Sales                                                                │
│  ┌────────────────────────────────────────────────────────────────────────┐  │
│  │ Item                 │ Final Price │ Winner       │ Status             │  │
│  ├──────────────────────┼─────────────┼──────────────┼────────────────────┤  │
│  │ [img] 40ft Std...    │ € 2,100     │ Logistics BV │ ✅ Paid            │  │
│  └────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

### Mobile (< 640px)

```
┌──────────────────────────────────────┐
│ [LOGO] [≡]                           │
└──────────────────────────────────────┘
│ Seller Dashboard                     │
│ [ + Create Listing ]                 │
├──────────────────────────────────────┤
│ Active: 5 | Sales: €12k | Action: 1  │
├──────────────────────────────────────┤
│ Active Auctions                      │
│ ┌──────────────────────────────────┐ │
│ │ [img] 20ft Dry Container         │ │
│ │ Bid: € 1,200 (3 bids)            │ │
│ │ Time: 02h 15m                    │ │
│ │ [ Edit ] [ View ]                │ │
│ └──────────────────────────────────┘ │
│ ┌──────────────────────────────────┐ │
│ │ [img] 40ft High Cube             │ │
│ │ ...                              │ │
│ └──────────────────────────────────┘ │
└──────────────────────────────────────┘
```

**Page Structure:**
- **Header:** Standard.
- **Main Content:** Single column with cards/sections.
- **Footer:** Standard.

**Content Zones:**

1. **Zone A (Page Header):**
   - **Elements:**
     - [Title] ("Seller Dashboard")
     - [Button] "Create New Listing" (Primary, Right-aligned)
   - **Purpose:** Orientation and primary action.

2. **Zone B (Stats Cards):**
   - **Elements:**
     - [Card 1] "Active Listings" (Count: 5)
     - [Card 2] "Total Sales" (Value: € 12,500)
     - [Card 3] "Pending Actions" (Count: 1 - e.g., "Shipment Pending")
   - **Purpose:** High-level overview.

3. **Zone C (Active Listings Table):**
   - **Elements:**
     - [Section Title] "Active Auctions"
     - [Table]:
       - Col 1: Item (Image + Title)
       - Col 2: Current Price
       - Col 3: Bids (Count)
       - Col 4: Time Left
       - Col 5: Actions (Edit, View)
   - **Purpose:** Manage live inventory.

4. **Zone D (Ended/Sold Listings Table):**
   - **Elements:**
     - [Section Title] "Recent Sales"
     - [Table]:
       - Col 1: Item
       - Col 2: Final Price
       - Col 3: Winner
       - Col 4: Status (Payment Pending, Paid, Completed)
   - **Purpose:** Fulfillment tracking.

### Tablet & Mobile

**Layout Changes:**
- **Tables:** Convert to "Card List" view. Each row becomes a card with label-value pairs.
- **Stats:** Stack vertically.

---

## Interaction Notes

- **Row Actions:** "Edit" is disabled if bids > 0 (shows tooltip explanation).
- **Clicking Row:** Navigates to Listing Detail.
