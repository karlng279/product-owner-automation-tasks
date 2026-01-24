# Wireframe: Comparison View Page

**Wireframe ID:** WF-009
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-012 - View side-by-side comparison
**Addresses:** AC-001 to AC-018
**Screen Type:** Comparison Table

---

## Purpose

Display a detailed side-by-side comparison of 2-3 Incoterms, highlighting key differences to help users understand which term best fits their needs.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Compare > FOB vs CIF                                                    |
+--------------------------------------------------------------------------------+
|                                                                                |
|  Comparing: FOB vs CIF                                    [+ Add Another]      |
|  ============================================================================  |
|                                                                                |
|  +----------------------------------+----------------------------------+       |
|  |             FOB                  |             CIF                  |       |
|  |        Free On Board             |    Cost, Insurance & Freight     |       |
|  |             [×]                  |             [×]                  |       |
|  +==================================+==================================+       |
|  | Full Name                                                           |       |
|  +----------------------------------+----------------------------------+       |
|  | Free On Board                    | Cost, Insurance and Freight      |       |
|  +----------------------------------+----------------------------------+       |
|  | Transport Mode                                                      |       |
|  +----------------------------------+----------------------------------+       |
|  | 🚢 Sea and Inland Waterway      | 🚢 Sea and Inland Waterway       |       |
|  +----------------------------------+----------------------------------+       |
|  | Risk Transfer Point                                      DIFFERENT  |       |
|  +----------------------------------+----------------------------------+       |
|  | When goods pass ship's rail      | When goods pass ship's rail      |       |
|  | at origin port                   | at origin port                   |       |
|  +----------------------------------+----------------------------------+       |
|  | Cost Transfer Point                                      DIFFERENT  |       |
|  +----------------------------------+----------------------------------+       |
|  | ⚡ At origin port (on board)     | ⚡ At destination port            |       |
|  |    Buyer pays freight            |    Seller pays freight           |       |
|  +----------------------------------+----------------------------------+       |
|  | Insurance Requirement                                    DIFFERENT  |       |
|  +----------------------------------+----------------------------------+       |
|  | ⚡ Not included                   | ⚡ Seller must provide            |       |
|  |    Buyer arranges if wanted      |    minimum insurance (110%)      |       |
|  +----------------------------------+----------------------------------+       |
|  | Seller's Key Responsibilities                                       |       |
|  +----------------------------------+----------------------------------+       |
|  | • Package goods                  | • Package goods                  |       |
|  | • Export clearance               | • Export clearance               |       |
|  | • Load onto vessel               | • Load onto vessel               |       |
|  |                                  | ⚡ • Pay freight to destination  |       |
|  |                                  | ⚡ • Provide marine insurance    |       |
|  +----------------------------------+----------------------------------+       |
|  | Buyer's Key Responsibilities                                        |       |
|  +----------------------------------+----------------------------------+       |
|  | ⚡ • Pay main freight            | • Unload at destination          |       |
|  | ⚡ • Arrange insurance           | • Import clearance               |       |
|  | • Unload at destination          | • Pay import duties              |       |
|  | • Import clearance               | • Delivery to premises           |       |
|  | • Pay import duties              |                                  |       |
|  +----------------------------------+----------------------------------+       |
|  | Best Used When                                                      |       |
|  +----------------------------------+----------------------------------+       |
|  | • Buyer has good freight rates   | • Seller has better rates        |       |
|  | • Buyer wants shipping control   | • Buyer wants simplicity         |       |
|  | • Buyer has own insurance        | • Buyer needs basic insurance    |       |
|  +----------------------------------+----------------------------------+       |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  Which should I choose?                                                        |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  Choose FOB if:                         Choose CIF if:                         |
|  • You have a trusted freight           • You prefer the seller to             |
|    forwarder                              handle shipping logistics            |
|  • You can get better shipping          • You want basic insurance             |
|    rates than the seller                  included automatically               |
|  • You want full control over           • You want a simpler, more             |
|    the shipping process                   predictable landed cost              |
|                                                                                |
|  [Compare Different Terms]                                                     |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Mobile (< 768px) - Card Layout

```
+----------------------------------+
| ≡  Incoterm for Dummies          |
+----------------------------------+
| Home > Compare                   |
+----------------------------------+
|                                  |
|  Comparing FOB vs CIF            |
|                                  |
|  +----------------------------+  |
|  |  FOB - Free On Board   [×] |  |
|  +----------------------------+  |
|  | Risk: At origin port       |  |
|  | Cost: At origin port       |  |
|  | Insurance: Not included    |  |
|  +----------------------------+  |
|  | Seller:                    |  |
|  | • Package goods            |  |
|  | • Export clearance         |  |
|  | • Load onto vessel         |  |
|  +----------------------------+  |
|  | Buyer:                     |  |
|  | • Pay main freight         |  |
|  | • Arrange insurance        |  |
|  | • Import clearance         |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  |  CIF - Cost, Insurance  [×]|  |
|  +----------------------------+  |
|  | Risk: At origin port       |  |
|  | Cost: At destination       |  |
|  | Insurance: Included ⚡     |  |
|  +----------------------------+  |
|  | Seller:                    |  |
|  | • Package goods            |  |
|  | • Export clearance         |  |
|  | • Pay freight ⚡           |  |
|  | • Provide insurance ⚡     |  |
|  +----------------------------+  |
|  | Buyer:                     |  |
|  | • Unload at destination    |  |
|  | • Import clearance         |  |
|  +----------------------------+  |
|                                  |
|  [Compare Different Terms]       |
|                                  |
+----------------------------------+
```

---

## UI Elements Detail

### Column Headers

**Elements:**
- Incoterm code (large)
- Full name
- Remove button (×)

### Comparison Rows

**Elements:**
- Row label (sticky on left)
- Values for each Incoterm
- "DIFFERENT" badge when values differ
- Highlight (⚡) on different values

### Guidance Section

**Elements:**
- "Which should I choose?" header
- Two columns with bullet points
- Clear decision criteria

---

## Interactions

### Primary Interactions

1. **Remove Incoterm**
   - Trigger: Click × on column header
   - Response: Column removed, layout adjusts
   - Feedback: If only 1 remains, show prompt

2. **Add Another**
   - Trigger: Click "+ Add Another" (if < 3)
   - Response: Navigate back to selection
   - Feedback: Current selections preserved

3. **Compare Different Terms**
   - Trigger: Click button
   - Response: Navigate to selection page
   - Feedback: Clear current comparison

---

## Components Required

### ShadCN Components

- [ ] Table (for comparison grid)
- [ ] Button (for actions)
- [ ] Badge (for "DIFFERENT" indicator)
- [ ] Card (for mobile layout)

### Custom Components

- [ ] ComparisonTable: Desktop table view
- [ ] ComparisonCards: Mobile card view
- [ ] DifferenceHighlight: Visual difference marker

---

**Created:** 2026-01-23
**Status:** Draft
