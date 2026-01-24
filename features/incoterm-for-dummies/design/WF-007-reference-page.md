# Wireframe: Quick Reference Page

**Wireframe ID:** WF-007
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-010 - View quick reference card
**Addresses:** AC-001 to AC-016
**Screen Type:** List / Reference

---

## Purpose

Provide a compact, scannable reference view of all 11 Incoterms with key information visible at a glance, optimized for quick lookups.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Reference                                                               |
+--------------------------------------------------------------------------------+
|                                                                                |
|  Incoterms Quick Reference                                                     |
|  ============================================================================  |
|                                                                                |
|  [🔍 Search_____________]    [All]  [Sea Only]  [Any Mode]                     |
|                                                                                |
|  +--------------------+  +--------------------+  +--------------------+         |
|  |                    |  |                    |  |                    |         |
|  |  EXW               |  |  FCA               |  |  FAS               |         |
|  |  Ex Works          |  |  Free Carrier      |  |  Free Alongside    |         |
|  |                    |  |                    |  |  Ship              |         |
|  |  🚛 Any Mode       |  |  🚛 Any Mode       |  |  🚢 Sea Only       |         |
|  |                    |  |                    |  |                    |         |
|  |  Risk: At origin   |  |  Risk: To carrier  |  |  Risk: Alongside   |         |
|  |  Cost: At origin   |  |  Cost: To carrier  |  |  Cost: Alongside   |         |
|  |                    |  |                    |  |                    |         |
|  |  Minimum seller    |  |  Versatile term    |  |  Port delivery     |         |
|  |  responsibility    |  |  for any transport |  |  for bulk cargo    |         |
|  |                    |  |                    |  |                    |         |
|  |  [View Details →]  |  |  [View Details →]  |  |  [View Details →]  |         |
|  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                |
|  +--------------------+  +--------------------+  +--------------------+         |
|  |                    |  |                    |  |                    |         |
|  |  FOB               |  |  CFR               |  |  CIF               |         |
|  |  Free On Board     |  |  Cost and Freight  |  |  Cost, Insurance   |         |
|  |                    |  |                    |  |  and Freight       |         |
|  |  🚢 Sea Only       |  |  🚢 Sea Only       |  |  🚢 Sea Only       |         |
|  |                    |  |                    |  |                    |         |
|  |  Risk: On board    |  |  Risk: On board    |  |  Risk: On board    |         |
|  |  Cost: On board    |  |  Cost: To dest     |  |  Cost: To dest     |         |
|  |                    |  |                    |  |  + Insurance       |         |
|  |  Most popular sea  |  |  Seller pays       |  |  Seller pays       |         |
|  |  term              |  |  freight           |  |  freight+insurance |         |
|  |                    |  |                    |  |                    |         |
|  |  [View Details →]  |  |  [View Details →]  |  |  [View Details →]  |         |
|  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                |
|  +--------------------+  +--------------------+  +--------------------+         |
|  |  CPT               |  |  CIP               |  |  DAP               |         |
|  |  Carriage Paid To  |  |  Carriage &        |  |  Delivered At      |         |
|  |                    |  |  Insurance Paid To |  |  Place             |         |
|  |  🚛 Any Mode       |  |  🚛 Any Mode       |  |  🚛 Any Mode       |         |
|  |                    |  |                    |  |                    |         |
|  |  Risk: To carrier  |  |  Risk: To carrier  |  |  Risk: At dest     |         |
|  |  Cost: To dest     |  |  Cost: To dest     |  |  Cost: At dest     |         |
|  |                    |  |  + Insurance       |  |  (not unloaded)    |         |
|  |  [View Details →]  |  |  [View Details →]  |  |  [View Details →]  |         |
|  +--------------------+  +--------------------+  +--------------------+         |
|                                                                                |
|  +--------------------+  +--------------------+                                 |
|  |  DPU               |  |  DDP               |                                 |
|  |  Delivered At      |  |  Delivered Duty    |                                 |
|  |  Place Unloaded    |  |  Paid              |                                 |
|  |  🚛 Any Mode       |  |  🚛 Any Mode       |                                 |
|  |                    |  |                    |                                 |
|  |  Risk: Unloaded    |  |  Risk: At buyer's  |                                 |
|  |  Cost: Unloaded    |  |  Cost: Everything  |                                 |
|  |                    |  |  + Duties          |                                 |
|  |  [View Details →]  |  |  [View Details →]  |                                 |
|  +--------------------+  +--------------------+                                 |
|                                                                                |
+--------------------------------------------------------------------------------+
```

---

## UI Elements Detail

### Search and Filter

**Elements:**
- Search input: Filter by code or keyword
- Filter buttons: All, Sea Only, Any Mode
- Active filter highlighted

### Reference Cards

**Elements per card:**
- Incoterm code (large, bold)
- Full name
- Transport mode badge
- Risk transfer point
- Cost transfer point
- One-line summary
- "View Details" link

**Layout:**
- Desktop: 3 cards per row
- Tablet: 2 cards per row
- Mobile: 1 card per row (vertical list)

---

## Interactions

### Primary Interactions

1. **Filter by Transport Mode**
   - Trigger: Click filter button
   - Response: Cards animate in/out
   - Feedback: Active button highlighted

2. **Search**
   - Trigger: Type in search box
   - Response: Cards filtered in real-time
   - Feedback: Matching cards remain visible

3. **View Details**
   - Trigger: Click "View Details" link
   - Response: Navigate to detail page
   - Feedback: Link hover state

---

## Components Required

### ShadCN Components

- [ ] Input (for search)
- [ ] Button (for filters)
- [ ] Card (for reference cards)
- [ ] Badge (for transport mode)

### Custom Components

- [ ] ReferenceCard: Compact info card
- [ ] FilterTabs: Tab-style filter buttons

---

**Created:** 2026-01-23
**Status:** Draft
