# Wireframe: Listing Detail (Auction View)

**Wireframe ID:** WF-002
**Feature:** Container Auction & Marketplace (PRD-002)
**Story:** US-007, US-008, US-009, US-010
**Addresses:** AC-059 to AC-086
**Screen Type:** Detail

---

## Purpose

The decision-making screen where buyers view full details, check the condition, monitor the auction status, and place bids.

---

## Layout Structure

### Desktop (> 1024px)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ [LOGO]  Auctions  How it Works                    [Search...]  [Login] [Sell]│
└──────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────┐ ┌─────────────────────────────────┐
│ [ Breadcrumbs: Home > Auctions > #123 ]  │ │                                 │
│                                          │ │  40ft High Cube - Grade A       │
│ ┌──────────────────────────────────────┐ │ │  Sold by: Maersk Line ⭐ 4.8    │
│ │                                      │ │ ├─────────────────────────────────┤
│ │                                      │ │ │  TIME REMAINING                 │
│ │           MAIN IMAGE                 │ │ │  🔴 02d 14h 33m 10s             │
│ │                                      │ │ ├─────────────────────────────────┤
│ │                                      │ │ │  CURRENT BID                    │
│ └──────────────────────────────────────┘ │ │  € 2,400                        │
│ ┌────┐ ┌────┐ ┌────┐ ┌────┐              │ │  (12 Bids)                      │
│ │img1│ │img2│ │img3│ │ +3 │              │ ├─────────────────────────────────┤
│ └────┘ └────┘ └────┘ └────┘              │ │  [ € 2,450       ]              │
│                                          │ │  Min bid: € 2,450               │
│ [ Tab: Description ] [ Specs ] [ Bids ]  │ │                                 │
│ ┌──────────────────────────────────────┐ │ │  [ PLACE BID (Primary)      ]   │
│ │ Description                          │ │ │                                 │
│ │ This 40ft HC container is in good    │ │ │  [ ♡ Watch Listing          ]   │
│ │ condition. Wind and water tight.     │ │ └─────────────────────────────────┘
│ │ Located at Rotterdam World Gateway.  │ │                                   │
│ │                                      │ │  Safe Payment Guarantee 🛡️        │
│ └──────────────────────────────────────┘ │                                   │
└──────────────────────────────────────────┘ └─────────────────────────────────┘
```

### Tablet & Mobile

```
┌──────────────────────────────────────┐
│ [LOGO] [≡]                           │
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ ┌──────────────────────────────────┐ │
│ │           MAIN IMAGE             │ │
│ └──────────────────────────────────┘ │
│ 40ft High Cube - Grade A             │
│ Sold by: Maersk Line                 │
├──────────────────────────────────────┤
│ 🔴 02d 14h 33m 10s                   │
│ Current Bid: € 2,400                 │
│ [ PLACE BID                      ]   │
├──────────────────────────────────────┤
│ [ Description ] [ Specs ] [ Bids ]   │
│                                      │
│ Specs:                               │
│ - Length: 40ft                       │
│ - Type: High Cube                    │
│ - Year: 2018                         │
└──────────────────────────────────────┘
```

**Page Structure:**
- **Header:** Standard.
- **Main Content:** Two-column layout. Left (Images/Info) + Right (Auction Action Box).
- **Footer:** Standard.

**Content Zones:**

1. **Zone A (Hero / Images - Left Col):**
   - **Elements:**
     - [Main Image] (Large, high-res)
     - [Thumbnail Gallery] (Row of smaller images below)
   - **Purpose:** Visual inspection of the container.

2. **Zone B (Auction Action Box - Right Col - Sticky):**
   - **Elements:**
     - [Title] ("40ft High Cube Container - Grade A")
     - [Seller Info] (Avatar + Name + Rating)
     - [Timer] (Large Countdown: "02d 14h 33m 10s")
     - [Current Price] (Large text: "€ 2,400")
     - [Bid Input] (Number field)
     - [Helper Text] ("Minimum bid: € 2,450")
     - [Button] "Place Bid" (Primary, Full Width)
     - [Watch Button] (Secondary, Icon)
   - **Purpose:** The primary conversion point. Always visible.

3. **Zone C (Details Tabs - Left Col, below images):**
   - **Elements:**
     - [Tabs Navigation] ("Description", "Specifications", "Bid History")
     - **Tab 1: Description:** Text block describing condition.
     - **Tab 2: Specs:** Table (Length, Width, Height, Year, Location).
     - **Tab 3: Bid History:** Table (Bidder Name, Amount, Time).
   - **Purpose:** Detailed information for due diligence.

### Tablet & Mobile

**Layout Changes:**
- **Stacking:** Right Column (Auction Box) moves *below* the Images but *above* the Details Tabs.
- **Sticky Action:** On Mobile, the "Place Bid" button might be a fixed footer bar so it's always accessible.

---

## Interaction Notes

- **Timer:** Updates every second. Turns red when < 1 hour.
- **Bid Input:** Validates immediately (cannot be < min bid).
- **Place Bid:** Triggers a confirmation modal ("Confirm bid of € 2,450?").
- **Real-time:** If another bid comes in, toast notification appears "New bid placed!".
