# Component Specification: Bid History Table

**Component ID:** COMP-003
**Component Name:** Bid History Table
**Wireframe ID(s):** WF-002
**Story ID(s):** US-009
**Acceptance Criteria IDs:** AC-077 to AC-081
**Component Type:** Table
**Created:** 2024-05-21
**Last Updated:** 2024-05-21

---

## 1. Component Overview

### Purpose
To display the chronological list of bids placed on a specific listing, providing transparency and social proof to potential buyers.

### Context
- **Listing Detail Page:** Usually located in a tab or a section below the main details.

### User Interaction
- **Read-only:** Users view the history. No direct interaction (sorting is usually fixed by time/amount).

### Key Functionality
- List bids (Bidder, Amount, Time).
- Mask bidder names for privacy (e.g., `u***123`).
- Highlight the current user's bids (e.g., "You").
- Sort by highest amount / most recent (default).

---

## 2. Component Structure

### Layout

**Container:**
- **Component:** `Table` (ShadCN)
- **Width:** 100%
- **Border:** Optional border around the table container.

**Columns:**
1.  **Bidder:** Text (Masked).
2.  **Amount:** Currency format.
3.  **Time:** Relative time (e.g., "2 mins ago") or Absolute (Date/Time).

### Responsive Behavior
- **Mobile:**
    -   Full width.
    -   If space is tight, "Time" column can be hidden or abbreviated.
    -   Alternatively, convert to a simple list/card view if table is too wide (though 3 columns usually fit).

---

## 3. ShadCN Components & Props

### 1. Table
- **Components:** `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableHead`, `TableCell`.
- **Props:** Standard.

### 2. Content Styling
- **Bidder:**
    -   If current user: `Badge` (variant: `outline`) or bold text "You".
- **Amount:**
    -   `font-mono` or `font-medium` for alignment.

---

## 4. Data Requirements

### Input Data
```typescript
interface Bid {
  id: string;
  bidderId: string;
  bidderName: string; // Real name, to be masked by component logic
  amount: number;
  timestamp: string; // ISO Date
}

interface BidHistoryProps {
  bids: Bid[];
  currentUserId?: string; // To identify "You"
}
```

### Logic
- **Masking:** Function `maskName(name)` -> `n***e`.
- **Sorting:** `bids.sort((a, b) => b.amount - a.amount)` (Highest first).

---

## 5. Accessibility (A11y)
- **Headers:** `TableHead` must properly label columns.
- **Caption:** Optional `TableCaption` describing the table (e.g., "Bid history for this container").
