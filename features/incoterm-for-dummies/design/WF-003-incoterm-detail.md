# Wireframe: Incoterm Detail Page

**Wireframe ID:** WF-003
**Feature:** Incoterm for Dummies (PRD-001)
**Stories:** ST-003, ST-004, ST-005
**Addresses:** AC-001 to AC-017 (from ST-003, ST-004, ST-005)
**Screen Type:** Detail Page

---

## Purpose

Provide comprehensive educational content for a single Incoterm, including plain-language explanation, visual responsibility diagram, and detailed breakdown of buyer/seller responsibilities.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Learn > FOB                                                             |
+--------------------------------------------------------------------------------+
|                                                                                |
|  FOB                                                              🚢 Sea Only  |
|  Free On Board                                                                 |
|  ============================================================================  |
|                                                                                |
|  ┌──────────────────────────────────────────────────────────────────────────┐  |
|  │ 💡 Key Point                                                             │  |
|  │ The seller delivers when goods pass the ship's rail at the named port.  │  |
|  │ Risk transfers from seller to buyer at this moment.                     │  |
|  └──────────────────────────────────────────────────────────────────────────┘  |
|                                                                                |
|  What does FOB mean?                                                           |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  FOB (Free On Board) means the seller is responsible for getting the goods    |
|  onto the ship at the origin port. Once the goods are loaded on board,        |
|  everything becomes the buyer's responsibility - including the cost of        |
|  shipping, insurance, and any risks during transit.                           |
|                                                                                |
|  Think of it like this: the seller's job is done when the goods are safely    |
|  on the ship. After that, it's all on the buyer.                              |
|                                                                                |
|  When should you use FOB?                                                      |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  • You're the buyer and have a trusted freight forwarder                      |
|  • You want control over the shipping process                                  |
|  • You can get better shipping rates than the seller                          |
|  • You're importing via ocean freight                                          |
|                                                                                |
|  Common mistakes to avoid                                                      |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  ⚠️ Don't use FOB for air freight - it's only for sea transport               |
|  ⚠️ Don't forget to arrange insurance - the seller doesn't provide it         |
|  ⚠️ Always specify the port name (e.g., "FOB Shanghai")                       |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  Responsibility Diagram                                                        |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  ┌─────────────────────────────────────────────────────────────────────────┐   |
|  │                                                                         │   |
|  │   Seller's Premises → Export → Origin Port → Ship → Dest Port → Buyer  │   |
|  │   ┌──────────────────────────────┐  ▼  ┌───────────────────────────┐   │   |
|  │   │      SELLER RESPONSIBLE      │ RISK│     BUYER RESPONSIBLE     │   │   |
|  │   │    (Costs, Risk, Tasks)      │TRANS│   (Costs, Risk, Tasks)    │   |
|  │   └──────────────────────────────┘  FER└───────────────────────────┘   │   |
|  │                                                                         │   |
|  │   [Seller's]  [Export]  [Origin]   🚢    [Dest]   [Import]  [Buyer's]  │   |
|  │   [Premises]  [Custom]  [Port  ]  SHIP   [Port]   [Custom]  [Premises] │   |
|  │      ███        ███       ███       ▼      ░░░       ░░░        ░░░    │   |
|  │                                                                         │   |
|  │   ███ = Seller responsible    ░░░ = Buyer responsible                   │   |
|  │                                                                         │   |
|  └─────────────────────────────────────────────────────────────────────────┘   |
|                                                                                |
|  With FOB, the seller is responsible until the goods are loaded on the ship   |
|  at the origin port. After that, the buyer takes over.                         |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  Who is Responsible for What?                                                  |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  +----------------------------------+  +----------------------------------+    |
|  | Seller's Responsibilities        |  | Buyer's Responsibilities         |    |
|  +----------------------------------+  +----------------------------------+    |
|  |                                  |  |                                  |    |
|  | ▼ Costs                          |  | ▼ Costs                          |    |
|  | ☑ Packaging and labeling         |  | ☑ Main freight/shipping          |    |
|  | ☑ Loading at origin              |  | ☑ Marine insurance (if wanted)   |    |
|  | ☑ Export customs clearance       |  | ☑ Unloading at destination       |    |
|  | ☑ Transport to port              |  | ☑ Import customs duties          |    |
|  |                                  |  | ☑ Delivery to final destination  |    |
|  | ▼ Risks                          |  |                                  |    |
|  | ☑ Until goods are on board       |  | ▼ Risks                          |    |
|  |                                  |  | ☑ From ship's rail onwards       |    |
|  | ▼ Tasks                          |  | ☑ During ocean transit           |    |
|  | ☑ Prepare goods for export       |  | ☑ At destination port            |    |
|  | ☑ Arrange export documentation   |  |                                  |    |
|  | ☑ Load goods onto vessel         |  | ▼ Tasks                          |    |
|  |                                  |  | ☑ Arrange ocean freight          |    |
|  +----------------------------------+  | ☑ Arrange insurance              |    |
|                                        | ☑ Handle import clearance        |    |
|                                        +----------------------------------+    |
|                                                                                |
|  ┌──────────────────────────────────────────────────────────────────────────┐  |
|  │ 💭 Did you know?                                                         │  |
|  │ FOB is one of the most commonly used Incoterms in international trade,  │  |
|  │ especially for ocean shipments from Asia to Western markets.            │  |
|  └──────────────────────────────────────────────────────────────────────────┘  |
|                                                                                |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  [← FCA]                  [Official ICC Definition ↗]              [CFR →]    |
|                                                                                |
+--------------------------------------------------------------------------------+
```

---

## Layout Structure

### Desktop (> 1024px)

**Page Structure:**
- Header: Fixed navigation
- Breadcrumb: Home > Learn > [Incoterm]
- Main Content: Centered, max-width 900px (article width)
- Sections: Sequential content sections

**Content Zones:**

1. **Zone A (Header):** Site-wide navigation

2. **Zone B (Title Section):**
   - Breadcrumb
   - Incoterm code (h1)
   - Full name
   - Transport mode badge

3. **Zone C (Key Point Callout):**
   - Highlighted callout box
   - Most important takeaway

4. **Zone D (Plain English Explanation):**
   - "What does X mean?" section
   - "When should you use X?" section
   - "Common mistakes to avoid" section

5. **Zone E (Responsibility Diagram):**
   - Visual timeline diagram
   - Transfer point indicator
   - Legend

6. **Zone F (Responsibilities Breakdown):**
   - Two-column layout
   - Seller vs Buyer columns
   - Accordion sections for Costs, Risks, Tasks

7. **Zone G (Navigation):**
   - Previous/Next Incoterm links
   - External link to ICC

---

## UI Elements Detail

### Key Point Callout

**Elements:**
- Icon: Lightbulb
- Background: Highlighted (primary/10 opacity)
- Text: Key takeaway summary

### Responsibility Diagram

**Elements:**
- Horizontal timeline with 7 stages
- Color-coded segments (seller = blue, buyer = orange)
- Transfer point marker with animation
- Legend explaining colors

**Behavior:**
- Hover on stage: Show tooltip with details
- Transfer point: Pulse animation

### Responsibility Columns

**Elements:**
- Two side-by-side columns
- Accordion sections: Costs, Risks, Tasks
- Checkbox-style icons (visual only)

**Behavior:**
- Desktop: All sections expanded
- Mobile: Sections collapsed by default
- Click header to toggle

---

## Interactions

### Primary Interactions

1. **Hover on Diagram Stage**
   - Trigger: Mouse enters stage
   - Response: Show tooltip with stage description
   - Feedback: Stage highlight

2. **Toggle Responsibility Section**
   - Trigger: Click on section header (mobile)
   - Response: Expand/collapse section
   - Feedback: Arrow icon rotation

3. **Click Previous/Next**
   - Trigger: Click navigation links
   - Response: Navigate to adjacent Incoterm
   - Feedback: Link highlight

---

## Components Required

### ShadCN Components

- [ ] Card (for callout boxes)
- [ ] Badge (for transport mode)
- [ ] Accordion (for responsibility sections on mobile)
- [ ] Tooltip (for diagram hover states)
- [ ] Breadcrumb

### Custom Components

- [ ] ResponsibilityDiagram: SVG timeline component
- [ ] KeyPointCallout: Highlighted tip box
- [ ] ResponsibilityColumn: Two-column responsibility display
- [ ] IncotermNavigation: Prev/Next navigation

---

## Acceptance Criteria Mapping

**From ST-003:**
- **AC-001:** Code displayed prominently → Title section
- **AC-002:** Full name shown → Subtitle
- **AC-003:** Plain English explanation → "What does X mean?" section
- **AC-007:** Breadcrumb navigation → Zone B

**From ST-004:**
- **AC-001:** Timeline with stages → Responsibility Diagram
- **AC-002:** Transfer point marked → Indicator on diagram
- **AC-003:** Color-coded segments → Legend and visual

**From ST-005:**
- **AC-001:** Two-column layout → Responsibility columns
- **AC-002:** Categorized items → Costs, Risks, Tasks sections

---

**Created:** 2026-01-23
**Last Updated:** 2026-01-23
**Designer:** AI
**Status:** Draft
