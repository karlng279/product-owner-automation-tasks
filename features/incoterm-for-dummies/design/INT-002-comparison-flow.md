# Interaction Diagram: Comparison Flow

**Interaction ID:** INT-002
**Feature:** Incoterm for Dummies (PRD-001)
**Stories:** ST-011, ST-012
**Wireframes:** WF-008, WF-009
**Components:** COMP-005 (Comparison Table)
**Created:** 2026-01-23

---

## 1. Overview

This interaction diagram documents the flow of selecting Incoterms for comparison and viewing the comparison results.

---

## 2. State Diagram

```
                         ┌─────────────────┐
                         │   Navigation    │
                         │ Click "Compare" │
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Selection     │
                         │   Page          │
                         │   (WF-008)      │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       [0 Selected]        [1 Selected]        [2-3 Selected]
              │                   │                   │
              ▼                   ▼                   ▼
       Compare: Disabled   Compare: Disabled   Compare: Enabled
                                                      │
                                              [Click Compare]
                                                      │
                                                      ▼
                                             ┌─────────────────┐
                                             │   Comparison    │
                                             │   View          │
                                             │   (WF-009)      │
                                             └────────┬────────┘
                                                      │
                    ┌─────────────────────────────────┼────────────────────────┐
                    │                                 │                        │
                    ▼                                 ▼                        ▼
           [Remove Column]                   [Add Another]           [Compare Different]
                    │                                 │                        │
                    ▼                                 ▼                        ▼
           ┌───────────────┐                 ┌───────────────┐        ┌───────────────┐
           │ If 2+ remain  │                 │ Selection     │        │ Selection     │
           │ Update view   │                 │ Page          │        │ Page          │
           └───────────────┘                 │ (preserved)   │        │ (cleared)     │
                    │                        └───────────────┘        └───────────────┘
                    │
           ┌───────────────┐
           │ If 1 remains  │
           │ Show prompt   │
           └───────────────┘
```

---

## 3. Selection State Machine

```
┌──────────────────────────────────────────────────────────────────┐
│                    SELECTION STATE                               │
└──────────────────────────────────────────────────────────────────┘

           ┌─────────────┐
           │  EMPTY      │
           │  (0 items)  │
           └──────┬──────┘
                  │
          [Click Incoterm Chip]
                  │
                  ▼
           ┌─────────────┐
           │  PARTIAL    │◀──────[Deselect to 1]──────────┐
           │  (1 item)   │                                 │
           └──────┬──────┘                                 │
                  │                                        │
          [Click Another Chip]                             │
                  │                                        │
                  ▼                                        │
           ┌─────────────┐                                │
           │  VALID      │◀──────[Deselect to 2]──────────┤
           │  (2 items)  │                                │
           │  CAN        │                                │
           │  COMPARE    │                                │
           └──────┬──────┘                                │
                  │                                        │
          [Click Another Chip]                             │
                  │                                        │
                  ▼                                        │
           ┌─────────────┐                                │
           │  MAXIMUM    │─────[Try to add 4th]────▶ Show tooltip
           │  (3 items)  │                          "Max 3 items"
           │  CAN        │                                │
           │  COMPARE    │────────────────────────────────┘
           └─────────────┘
```

---

## 4. URL State Sync

```
Selection State ◀────────▶ URL Query Params

Example:
- 0 selected: /compare
- 2 selected: /compare?items=fob,cif
- 3 selected: /compare?items=fob,cif,exw

On page load:
1. Parse query params
2. Validate Incoterm codes
3. Pre-select valid items
4. Ignore invalid codes

On selection change:
1. Update state
2. Update URL (replace, not push)
3. Enable sharing
```

---

## 5. User Actions

### Selection Page (WF-008)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Select Incoterm | Click chip | Max 3 | Add to selection | Chip highlight |
| Deselect | Click selected chip | Min 0 | Remove from selection | Chip unhighlight |
| Use Preset | Click preset button | None | Clear & select preset | Instant update |
| Compare | Click "Compare Now" | 2+ selected | Navigate to view | Standard nav |

### Comparison View (WF-009)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Remove Column | Click × on header | Min 1 remains | Remove & reflow | Animate out |
| Add Another | Click + button | Max 3 | Go to selection | Preserve current |
| Compare Different | Click button | None | Go to selection | Clear current |
| Copy URL | Browser share | None | URL copied | Toast notification |

---

## 6. Difference Detection

```
For each comparison row:
1. Get value for each selected Incoterm
2. Compare values:
   - If all same: No highlight
   - If different: Add "DIFFERENT" badge, highlight cells
3. Apply highlighting:
   - Yellow background on differing cells
   - Badge in row header
```

---

## 7. Responsive Transitions

| Viewport | Selection Layout | Comparison Layout |
|----------|------------------|-------------------|
| Mobile | Chips stacked | Cards stacked |
| Tablet | Chips 2-column | Table 2-col |
| Desktop | Chips inline | Table 2-3 col |

---

**Status:** Draft
