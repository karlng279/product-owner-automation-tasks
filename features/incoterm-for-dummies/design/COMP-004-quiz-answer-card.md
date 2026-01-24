# Component Specification: Quiz Answer Card

**Component ID:** COMP-004
**Component Name:** Quiz Answer Card
**Wireframe ID(s):** WF-005
**Story ID(s):** ST-007
**Acceptance Criteria IDs:** AC-004, AC-007, AC-008, AC-010, AC-011
**Component Type:** Interactive Card
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Selectable answer option for quiz questions, providing clear visual feedback for selection, correct, and incorrect states.

### Context
Used in the Quiz Question page (WF-005). 4 answer cards per question. One must be selected before proceeding.

### Key Functionality
- Display answer option (A, B, C, D) with text
- Selectable (radio-like behavior)
- Show immediate feedback (correct/incorrect)
- Keyboard accessible (1-4 keys)

---

## 2. Component Structure

### Layout

**Container:**
- Width: 100%
- Padding: p-4
- Background: bg-card (default), varies by state
- Border: border-2 rounded-lg
- Min height: h-16

**Layout System:**
- Type: Flexbox
- Configuration: flex items-center gap-3

---

## 3. UI Elements & ShadCN Components

### Element 1: Option Letter

**Element ID:** COMP-004-EL-001
**Type:** Badge/Circle

**Visual:**
- Width/Height: w-8 h-8
- Border radius: rounded-full
- Typography: font-bold text-center
- Content: A, B, C, D

---

### Element 2: Answer Text

**Element ID:** COMP-004-EL-002
**Type:** Text

**Styling:**
- Typography: text-base md:text-lg
- Color: varies by state

---

### Element 3: Status Icon

**Element ID:** COMP-004-EL-003
**Type:** Icon (appears after selection)

**Icons:**
- Correct: CheckCircle (green)
- Incorrect: XCircle (red)
- Position: Right side of card

---

## 4. Component States

### Default State
```
Border: border-border
Background: bg-card
Letter badge: bg-muted
Cursor: pointer
```

### Hover State
```
Border: border-primary/50
Background: bg-accent
Transform: none (or subtle scale)
```

### Selected State (before submit)
```
Border: border-primary (2px)
Background: bg-primary/10
Letter badge: bg-primary text-primary-foreground
```

### Correct State
```
Border: border-green-500 (2px)
Background: bg-green-50 dark:bg-green-950
Letter badge: bg-green-500 text-white
Icon: CheckCircle (green)
```

### Incorrect State
```
Border: border-red-500 (2px)
Background: bg-red-50 dark:bg-red-950
Letter badge: bg-red-500 text-white
Icon: XCircle (red)
```

### Correct Answer Revealed (when user was wrong)
```
Border: border-green-500 (2px)
Background: bg-green-50 dark:bg-green-950
Letter badge: bg-green-500 text-white
Label: "Correct Answer" badge
```

### Disabled State
```
Opacity: 0.5
Cursor: not-allowed
Pointer-events: none
```

---

## 5. Props Interface

```typescript
interface QuizAnswerCardProps {
  letter: "A" | "B" | "C" | "D";
  text: string;
  isSelected: boolean;
  isDisabled: boolean;
  result?: "correct" | "incorrect" | "revealed" | null;
  onSelect: () => void;
}
```

---

## 6. Interactions & Behavior

### User Actions

**Click Card:**
- Trigger: Click anywhere on card
- Condition: Not disabled, no result yet
- Behavior: Select this answer
- Feedback: Selected state applied

**Keyboard 1-4:**
- Trigger: Press 1, 2, 3, or 4
- Behavior: Select corresponding answer
- Feedback: Same as click

---

## 7. Accessibility

### Keyboard Navigation
- Tab to focus card
- Enter/Space to select
- Number keys 1-4 as shortcuts

### ARIA Attributes
- role="radio"
- aria-checked={isSelected}
- aria-disabled={isDisabled}

### Focus Visible
- ring-2 ring-primary ring-offset-2

---

## 8. Design Rules Applied

### Colors
- Default: border-border, bg-card
- Selected: border-primary, bg-primary/10
- Correct: green-500, bg-green-50
- Incorrect: red-500, bg-red-50

### Spacing
- Padding: p-4 (16px)
- Gap: gap-3 (12px)
- Border width: 2px

### Typography
- Letter: font-bold
- Answer: text-base md:text-lg

### Animation
- Transition: transition-all duration-150
- Transform on select: subtle scale or none

---

## 9. Implementation Notes

### Technical Considerations
- Use radio group pattern for accessibility
- State managed by parent (QuizQuestion component)
- Immediate feedback after selection
- Disable all cards after answer submitted

---

**Status:** Draft
