# Wireframe: Quiz Question Page

**Wireframe ID:** WF-005
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-007 - Answer quiz questions
**Addresses:** AC-001 to AC-017
**Screen Type:** Interactive Form

---

## Purpose

Display individual quiz questions with multiple-choice answers, provide immediate feedback, and track progress through the quiz.

---

## ASCII Wireframe

### Desktop - Unanswered State

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  Question 3 of 10                                   ████████░░░░ 30%   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │                                                                        │    |
|  │  Under which Incoterm does the seller bear all costs and risks         │    |
|  │  until the goods are delivered to the buyer's premises, including      │    |
|  │  import duties and taxes?                                              │    |
|  │                                                                        │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  A                                                                     |    |
|  |  EXW (Ex Works)                                                        |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  B                                                                     |    |
|  |  FOB (Free On Board)                                                   |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  C                                                                     |    |
|  |  CIF (Cost, Insurance, and Freight)                                    |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  D                                                                     |    |
|  |  DDP (Delivered Duty Paid)                                             |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|                                                                                |
|                          [Next Question] (disabled)                            |
|                                                                                |
|  Keyboard: Press 1-4 to select, Enter to continue                              |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Desktop - Correct Answer State

```
+--------------------------------------------------------------------------------+
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  Question 3 of 10                                   ████████░░░░ 30%   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  Under which Incoterm does the seller bear all costs and risks...      │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  A  EXW (Ex Works)                                                     |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  B  FOB (Free On Board)                                                |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  C  CIF (Cost, Insurance, and Freight)                                 |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  ✓  D  DDP (Delivered Duty Paid)                          CORRECT ✓   ║    |
|  ║                                                       (Green border)   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  ✓ Correct!                                                            │    |
|  │                                                                        │    |
|  │  DDP means the seller delivers the goods to the buyer's premises,      │    |
|  │  cleared for import, with all duties paid. It represents the maximum   │    |
|  │  obligation for the seller.                                            │    |
|  │                                                                        │    |
|  │  [Learn more about DDP →]                                              │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|                              [Next Question]                                   |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Desktop - Incorrect Answer State

```
+--------------------------------------------------------------------------------+
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  Question 3 of 10                                   ████████░░░░ 30%   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  Under which Incoterm does the seller bear all costs and risks...      │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  ✗  A  EXW (Ex Works)                              INCORRECT ✗        ║    |
|  ║                                                         (Red border)   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  B  FOB (Free On Board)                                                |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  +------------------------------------------------------------------------+    |
|  |  C  CIF (Cost, Insurance, and Freight)                                 |    |
|  +------------------------------------------------------------------------+    |
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║  ✓  D  DDP (Delivered Duty Paid)              CORRECT ANSWER ✓        ║    |
|  ║                                                       (Green border)   ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  ✗ Not quite!                                                          │    |
|  │                                                                        │    |
|  │  EXW actually has the MINIMUM seller obligation - the buyer takes      │    |
|  │  responsibility from the seller's premises.                            │    |
|  │                                                                        │    |
|  │  The correct answer is DDP, which has MAXIMUM seller obligation.       │    |
|  │                                                                        │    |
|  │  [Learn more about DDP →]  [Learn more about EXW →]                    │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|                              [Next Question]                                   |
|                                                                                |
+--------------------------------------------------------------------------------+
```

---

## UI Elements Detail

### Progress Header

**Elements:**
- Question counter: "Question X of Y"
- Progress bar: Visual percentage indicator

### Question Card

**Elements:**
- Question text: Large, readable (text-xl)
- Centered in container

### Answer Options

**Elements:**
- 4 answer cards (A, B, C, D)
- Each with letter prefix and answer text
- Full-width clickable area

**States:**
- Default: Neutral border
- Hover: Slight highlight
- Selected (before submit): Primary border
- Correct: Green border with checkmark
- Incorrect: Red border with X
- Correct answer revealed: Green border with checkmark

### Feedback Section

**Elements:**
- Success/Error header
- Explanation text
- "Learn more" link to relevant Incoterm

### Navigation

**Elements:**
- "Next Question" button
- Disabled until answer selected
- Keyboard hint text

---

## Interactions

### Primary Interactions

1. **Select Answer**
   - Trigger: Click answer card or press 1-4
   - Response: Card highlighted, feedback shown immediately
   - Feedback: Color coding (green/red)

2. **Next Question**
   - Trigger: Click button or press Enter
   - Response: Navigate to next question
   - Feedback: Slide transition

---

## Components Required

### ShadCN Components

- [ ] Progress (for progress bar)
- [ ] Card (for question and answers)
- [ ] Button (for Next Question)
- [ ] Alert (for feedback section)

### Custom Components

- [ ] AnswerCard: Selectable answer with state styling
- [ ] QuizProgress: Progress header component
- [ ] FeedbackPanel: Correct/incorrect explanation

---

**Created:** 2026-01-23
**Status:** Draft
