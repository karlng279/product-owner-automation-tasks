# Wireframe: Wizard Questions Page

**Wireframe ID:** WF-011
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-014 - Answer scenario questions
**Addresses:** AC-001 to AC-017
**Screen Type:** Form / Wizard Step

---

## Purpose

Guide users through scenario questions with clear, plain-language options to determine which Incoterms best fit their shipping situation.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  Step 2 of 5                                     ████████░░░░░░ 40%    ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|                                                                                |
|                   Who will arrange the main shipping?                          |
|                                                                                |
|             Select the party responsible for booking and paying                |
|             for the main transport (ocean freight, air freight, etc.)          |
|                                                                                |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |                                                                        |    |
|  |  🏭  The Seller                                                        |    |
|  |                                                                        |    |
|  |  The seller (exporter/supplier) will book and pay for shipping         |    |
|  |  to your destination.                                                  |    |
|  |                                                                        |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |                                                                        |    |
|  |  🏢  The Buyer (Me)                                                    |    |
|  |                                                                        |    |
|  |  You (the buyer/importer) will arrange your own shipping from the      |    |
|  |  origin country.                                                       |    |
|  |                                                                        |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |                                                                        |    |
|  |  🤷  I'm not sure yet                                                  |    |
|  |                                                                        |    |
|  |  You haven't decided or want to see options for both scenarios.        |    |
|  |                                                                        |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  💡 Help me understand                                          [▼]   │    |
|  ├────────────────────────────────────────────────────────────────────────┤    |
|  │  If the SELLER arranges shipping, you pay a single price that         │    |
|  │  includes freight. This is simpler but gives you less control.        │    |
|  │                                                                        │    |
|  │  If the BUYER arranges shipping, you handle logistics yourself.       │    |
|  │  This gives you more control and potentially better rates if you      │    |
|  │  have a trusted freight forwarder.                                    │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|                                                                                |
|                [← Back]                              [Next →]                  |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Selected State

```
+------------------------------------------------------------------------+
║                                                              SELECTED  ║
║  🏢  The Buyer (Me)                                              ✓     ║
║                                                                        ║
║  You (the buyer/importer) will arrange your own shipping...           ║
║                                                       (Primary border) ║
+========================================================================+
```

### All 5 Questions

**Q1: Mode of Transport**
- Sea/Ocean shipping
- Air freight
- Road/Rail transport
- Multiple modes (multimodal)

**Q2: Who arranges main shipping?**
- The Seller
- The Buyer (Me)
- I'm not sure yet

**Q3: Who handles export customs?**
- The Seller (standard)
- The Buyer (unusual)
- I'm not sure

**Q4: Do you need seller to provide insurance?**
- Yes, I want insurance included
- No, I'll arrange my own
- I'm not sure

**Q5: Where should risk transfer to you?**
- As early as possible (at seller's location)
- Somewhere during transit
- As late as possible (at my location)

---

## UI Elements Detail

### Progress Header

**Elements:**
- Step counter: "Step X of 5"
- Progress bar

### Question

**Elements:**
- Question text (h2, large)
- Helper text (muted)

### Answer Options

**Elements:**
- Large clickable cards
- Icon for each option
- Title and description
- Selected state with checkmark

### Help Accordion

**Elements:**
- Collapsible section
- Additional context/explanation
- Starts collapsed

### Navigation

**Elements:**
- Back button (except on step 1)
- Next button (disabled until selection)

---

## Interactions

### Primary Interactions

1. **Select Answer**
   - Trigger: Click on answer card
   - Response: Card highlighted, Next enabled
   - Feedback: Primary border, checkmark

2. **Toggle Help**
   - Trigger: Click "Help me understand"
   - Response: Expand/collapse explanation
   - Feedback: Arrow rotation

3. **Navigate**
   - Trigger: Click Back/Next
   - Response: Go to prev/next question
   - Feedback: Slide animation

---

## Components Required

### ShadCN Components

- [ ] Progress (for progress bar)
- [ ] Card (for answer options)
- [ ] Collapsible (for help section)
- [ ] Button (for navigation)

### Custom Components

- [ ] AnswerOptionCard: Selectable answer card
- [ ] WizardProgress: Progress header

---

**Created:** 2026-01-23
**Status:** Draft
