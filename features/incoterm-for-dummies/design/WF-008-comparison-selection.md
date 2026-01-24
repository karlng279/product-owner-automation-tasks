# Wireframe: Comparison Selection Page

**Wireframe ID:** WF-008
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-011 - Select Incoterms to compare
**Addresses:** AC-001 to AC-018
**Screen Type:** Selection / Form

---

## Purpose

Allow users to select 2-3 Incoterms for side-by-side comparison, with presets for common comparisons and clear visual feedback on selection state.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Compare                                                                 |
+--------------------------------------------------------------------------------+
|                                                                                |
|  Compare Incoterms                                                             |
|  ============================================================================  |
|                                                                                |
|  Select 2-3 Incoterms to see a side-by-side comparison.                        |
|                                                                                |
|  Quick Presets:                                                                |
|  [FOB vs CIF]  [EXW vs DDP]  [CFR vs CIF]  [FCA vs FOB]                        |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  🚢 Sea and Inland Waterway Transport                                          |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|   [FAS]    [✓ FOB]    [CFR]    [✓ CIF]                                         |
|                                                                                |
|  🚛 Any Mode of Transport                                                       |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|   [EXW]    [FCA]    [CPT]    [CIP]    [DAP]    [DPU]    [DDP]                  |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|                       Selected: 2 of 3    FOB, CIF                             |
|                                                                                |
|                              [Compare Now]                                     |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  💡 Tip: FOB and CIF are the most commonly compared terms because     │    |
|  │     the main difference is whether the seller provides insurance.      │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Selection States

```
Default State:            Selected State:           Disabled (3 selected):
+--------+               +========+                +--------+
|  FOB   |               | ✓ FOB  |                |  EXW   |
+--------+               +========+                +--------+
  Gray border             Primary border            Muted, not clickable
```

---

## UI Elements Detail

### Quick Presets

**Elements:**
- Preset buttons for common comparisons
- Each preset auto-selects the relevant Incoterms

### Selection Chips

**Elements:**
- All 11 Incoterms as selectable chips
- Grouped by transport mode
- Visual states: Default, Selected, Disabled

### Selection Summary

**Elements:**
- Counter: "Selected: X of 3"
- List of selected terms
- "Compare Now" button

### Tip Callout

**Elements:**
- Contextual tip based on selections
- Educational insight

---

## Interactions

### Primary Interactions

1. **Select Incoterm**
   - Trigger: Click on chip
   - Response: Add to selection (max 3)
   - Feedback: Chip changes to selected state

2. **Deselect Incoterm**
   - Trigger: Click on selected chip
   - Response: Remove from selection
   - Feedback: Chip returns to default state

3. **Click Preset**
   - Trigger: Click preset button
   - Response: Clear current selection, select preset terms
   - Feedback: Chips update instantly

4. **Compare Now**
   - Trigger: Click button (enabled when 2+ selected)
   - Response: Navigate to comparison view
   - Feedback: URL updates with selection

---

## Components Required

### ShadCN Components

- [ ] Button (for presets and Compare Now)
- [ ] Toggle (for selection chips)
- [ ] Card (for tip callout)

### Custom Components

- [ ] SelectionChip: Toggleable Incoterm chip
- [ ] SelectionSummary: Counter and list

---

**Created:** 2026-01-23
**Status:** Draft
