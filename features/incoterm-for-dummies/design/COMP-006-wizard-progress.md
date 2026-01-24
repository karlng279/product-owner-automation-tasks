# Component Specification: Wizard Progress Indicator

**Component ID:** COMP-006
**Component Name:** Wizard Progress Indicator
**Wireframe ID(s):** WF-010, WF-011, WF-012
**Story ID(s):** ST-013, ST-014
**Acceptance Criteria IDs:** AC-005, AC-007 (ST-013), AC-001 (ST-014)
**Component Type:** Navigation / Progress
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Display wizard progress with step counter and visual progress bar, helping users understand where they are in the flow and how much remains.

### Context
Used at the top of wizard pages (start, questions, results). Shows current step out of total steps.

### Key Functionality
- Display "Step X of Y" text
- Visual progress bar
- Dot indicators (optional)
- Animate between steps

---

## 2. Component Structure

### Layout

**Container:**
- Width: 100%
- Padding: py-4
- Background: bg-muted/50
- Border radius: rounded-lg

**Layout System:**
- Type: Flexbox
- Configuration: flex flex-col gap-2

---

## 3. UI Elements

### Element 1: Step Counter

**Element ID:** COMP-006-EL-001
**Type:** Text

**Content:** "Step {current} of {total}"
**Styling:** text-sm font-medium text-muted-foreground

---

### Element 2: Progress Bar

**Element ID:** COMP-006-EL-002
**ShadCN Component:** Progress

**Props:**
- value: (current / total) * 100
- className: h-2

**Styling:**
- Track: bg-muted
- Indicator: bg-primary
- Border radius: rounded-full

---

### Element 3: Step Dots (Optional)

**Element ID:** COMP-006-EL-003
**Type:** Dot indicators

**Visual:**
- Completed: bg-primary, filled
- Current: bg-primary, with ring
- Future: bg-muted, empty

---

## 4. Props Interface

```typescript
interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
  showDots?: boolean;
}
```

---

## 5. Component States

### Step 1
- Progress: 20%
- First dot active

### Mid Steps
- Progress: 40-80%
- Corresponding dot active

### Complete (Results)
- Progress: 100%
- All dots filled

---

## 6. Design Rules Applied

### Colors
- Progress track: bg-muted
- Progress indicator: bg-primary
- Text: text-muted-foreground

### Spacing
- Container padding: py-4
- Progress bar height: h-2 (8px)

### Animation
- Progress bar: transition-all duration-300

---

**Status:** Draft
