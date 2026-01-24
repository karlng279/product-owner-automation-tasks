# Wireframe: Incoterms Overview Page

**Wireframe ID:** WF-002
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-002 - Browse all Incoterms overview
**Addresses:** AC-001, AC-002, AC-003, AC-005, AC-006, AC-008, AC-010, AC-011
**Screen Type:** List / Overview

---

## Purpose

Display all 11 Incoterms 2020 in an organized, visually appealing layout that allows users to browse and navigate to detailed explanations for each term.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Learn                                                                   |
+--------------------------------------------------------------------------------+
|                                                                                |
|  All Incoterms 2020                                                            |
|  ============================================================================  |
|                                                                                |
|  Incoterms define who is responsible for what during international shipping.   |
|  Click any term below to learn more.                                           |
|                                                                                |
|  ┌─────────────────────────────────────────────────────────────────────────┐   |
|  │  🚢 Sea and Inland Waterway Transport Only                              │   |
|  │  These terms are exclusively for ocean and waterway shipping            │   |
|  └─────────────────────────────────────────────────────────────────────────┘   |
|                                                                                |
|  +------------------+  +------------------+  +------------------+               |
|  | FAS              |  | FOB              |  | CFR              |              |
|  | Free Alongside   |  | Free On Board    |  | Cost and Freight |              |
|  | Ship             |  |                  |  |                  |              |
|  |                  |  |                  |  |                  |              |
|  | 🚢 Sea only      |  | 🚢 Sea only      |  | 🚢 Sea only      |              |
|  | Risk: At vessel  |  | Risk: On board   |  | Risk: On board   |              |
|  +------------------+  +------------------+  +------------------+               |
|                                                                                |
|  +------------------+                                                          |
|  | CIF              |                                                          |
|  | Cost, Insurance  |                                                          |
|  | and Freight      |                                                          |
|  |                  |                                                          |
|  | 🚢 Sea only      |                                                          |
|  | Risk: On board   |                                                          |
|  +------------------+                                                          |
|                                                                                |
|  ┌─────────────────────────────────────────────────────────────────────────┐   |
|  │  🚛 Any Mode of Transport                                               │   |
|  │  These terms work for all transport modes (sea, air, road, rail)        │   |
|  └─────────────────────────────────────────────────────────────────────────┘   |
|                                                                                |
|  +------------------+  +------------------+  +------------------+               |
|  | EXW              |  | FCA              |  | CPT              |              |
|  | Ex Works         |  | Free Carrier     |  | Carriage Paid To |              |
|  |                  |  |                  |  |                  |              |
|  | 🚛 Any mode      |  | 🚛 Any mode      |  | 🚛 Any mode      |              |
|  | Risk: At origin  |  | Risk: To carrier |  | Risk: To carrier |              |
|  +------------------+  +------------------+  +------------------+               |
|                                                                                |
|  +------------------+  +------------------+  +------------------+               |
|  | CIP              |  | DAP              |  | DPU              |              |
|  | Carriage &       |  | Delivered At     |  | Delivered At     |              |
|  | Insurance Paid   |  | Place            |  | Place Unloaded   |              |
|  |                  |  |                  |  |                  |              |
|  | 🚛 Any mode      |  | 🚛 Any mode      |  | 🚛 Any mode      |              |
|  | + Insurance      |  | Risk: At dest    |  | Risk: Unloaded   |              |
|  +------------------+  +------------------+  +------------------+               |
|                                                                                |
|  +------------------+                                                          |
|  | DDP              |                                                          |
|  | Delivered Duty   |                                                          |
|  | Paid             |                                                          |
|  |                  |                                                          |
|  | 🚛 Any mode      |                                                          |
|  | Maximum seller   |                                                          |
|  | responsibility   |                                                          |
|  +------------------+                                                          |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Mobile (< 640px)

```
+----------------------------------+
| ≡  Incoterm for Dummies          |
+----------------------------------+
| Home > Learn                     |
+----------------------------------+
|                                  |
|  All Incoterms 2020              |
|  ============================    |
|                                  |
|  Click any term to learn more.   |
|                                  |
|  🚢 Sea Transport Only           |
|  ----------------------------    |
|                                  |
|  +----------------------------+  |
|  | FAS                        |  |
|  | Free Alongside Ship        |  |
|  | 🚢 Sea | Risk: At vessel   |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | FOB                        |  |
|  | Free On Board              |  |
|  | 🚢 Sea | Risk: On board    |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | CFR                        |  |
|  | Cost and Freight           |  |
|  | 🚢 Sea | Risk: On board    |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | CIF                        |  |
|  | Cost, Insurance, Freight   |  |
|  | 🚢 Sea | + Insurance       |  |
|  +----------------------------+  |
|                                  |
|  🚛 Any Mode of Transport        |
|  ----------------------------    |
|                                  |
|  +----------------------------+  |
|  | EXW                        |  |
|  | Ex Works                   |  |
|  | 🚛 Any | Minimum seller    |  |
|  +----------------------------+  |
|                                  |
|  ... (more cards)                |
|                                  |
+----------------------------------+
```

---

## Layout Structure

### Desktop (> 1024px)

**Page Structure:**
- Header: Fixed navigation
- Breadcrumb: Home > Learn
- Main Content: Centered container, max-width 1280px
- Cards: Grid layout grouped by transport mode

**Content Zones:**

1. **Zone A (Header):** Site-wide navigation

2. **Zone B (Page Header):**
   - Breadcrumb navigation
   - Page title "All Incoterms 2020"
   - Introductory paragraph

3. **Zone C (Sea Transport Group):**
   - Section header with icon
   - 4 Incoterm cards (FAS, FOB, CFR, CIF)

4. **Zone D (Any Mode Group):**
   - Section header with icon
   - 7 Incoterm cards (EXW, FCA, CPT, CIP, DAP, DPU, DDP)

---

## UI Elements Detail

### Incoterm Card

**Elements:**
- Incoterm Code: Large, bold (text-2xl, font-bold)
- Full Name: Medium text (text-lg)
- Transport Mode: Icon + label
- Key Point: One-line summary of risk transfer

**Behavior:**
- Hover: Card elevates with shadow
- Click: Navigate to detail page (/learn/[code])

### Group Headers

**Elements:**
- Icon: Ship icon for sea, Truck icon for any mode
- Title: Group name
- Description: Brief explanation of the group

---

## Interactions

### Primary Interactions

1. **Click Incoterm Card**
   - Trigger: User clicks on any card
   - Response: Navigate to /learn/[incoterm-code]
   - Feedback: Card hover elevation, brief transition

2. **Hover on Card (Desktop)**
   - Trigger: Mouse enters card
   - Response: Card elevates with shadow
   - Feedback: Visual lift effect

---

## Components Required

### ShadCN Components

- [ ] Card (with CardHeader, CardContent)
- [ ] Badge (for transport mode indicator)
- [ ] Breadcrumb (for navigation path)

### Custom Components

- [ ] IncotermCard: Specialized card for Incoterm display
- [ ] GroupHeader: Section header with icon and description

---

## Acceptance Criteria Mapping

- **AC-001:** Overview page displays all 11 Incoterms
  - **Addressed by:** Card grid in two groups
  - **How:** All 11 terms rendered as cards

- **AC-002:** Each card shows code, name, summary, transport mode
  - **Addressed by:** IncotermCard component
  - **How:** Card displays all required fields

- **AC-003:** Grouped by transport mode
  - **Addressed by:** Two group sections
  - **How:** Sea-only group (4) and Any-mode group (7)

- **AC-005:** Clicking card navigates to detail
  - **Addressed by:** Card onClick handler
  - **How:** Routes to /learn/[code]

- **AC-008:** All 11 Incoterms displayed
  - **Addressed by:** Static data rendering
  - **How:** JSON data for all 11 terms

---

**Created:** 2026-01-23
**Last Updated:** 2026-01-23
**Designer:** AI
**Status:** Draft
