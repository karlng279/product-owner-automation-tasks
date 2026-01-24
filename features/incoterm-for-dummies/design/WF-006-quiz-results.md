# Wireframe: Quiz Results Page

**Wireframe ID:** WF-006
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-008 - View quiz results and explanations
**Addresses:** AC-001 to AC-015
**Screen Type:** Results / Summary

---

## Purpose

Display quiz completion results with score, performance message, and detailed review of all questions with educational explanations for learning reinforcement.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
|                                                                                |
|                                                                                |
|                               Quiz Complete!                                   |
|                                                                                |
|                          ╔═══════════════════╗                                 |
|                          ║                   ║                                 |
|                          ║        80%        ║                                 |
|                          ║    ┌─────────┐    ║                                 |
|                          ║    │  8/10   │    ║                                 |
|                          ║    │ correct │    ║                                 |
|                          ║    └─────────┘    ║                                 |
|                          ║                   ║                                 |
|                          ╚═══════════════════╝                                 |
|                                                                                |
|                          Great job! You have a                                 |
|                          solid understanding.                                  |
|                                                                                |
|              [Retake Quiz]              [Back to Home]                         |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  Review Your Answers                                                           |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  Incorrect answers are shown first to help you learn.                          |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │ ✗  Q3: Under which Incoterm does the seller bear all costs...         │    |
|  ├────────────────────────────────────────────────────────────────────────┤    |
|  │    Your answer: EXW (Ex Works)                              INCORRECT  │    |
|  │    Correct answer: DDP (Delivered Duty Paid)                           │    |
|  │                                                                        │    |
|  │    EXW has minimum seller obligation, while DDP has maximum.          │    |
|  │                                                                        │    |
|  │    [Learn more about DDP →]                                            │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │ ✗  Q7: Which Incoterm requires the seller to provide insurance?       │    |
|  ├────────────────────────────────────────────────────────────────────────┤    |
|  │    Your answer: CFR (Cost and Freight)                      INCORRECT  │    |
|  │    Correct answer: CIF (Cost, Insurance, and Freight)                  │    |
|  │                                                                        │    |
|  │    CFR and CIF are similar, but CIF includes insurance.               │    |
|  │                                                                        │    |
|  │    [Learn more about CIF →]                                            │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │ ✓  Q1: What does FOB stand for?                              CORRECT   │    |
|  ├────────────────────────────────────────────────────────────────────────┤    |
|  │    Your answer: Free On Board                                ✓         │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │ ✓  Q2: Which Incoterms are for sea transport only?           CORRECT   │    |
|  ├────────────────────────────────────────────────────────────────────────┤    |
|  │    Your answer: FAS, FOB, CFR, CIF                           ✓         │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|  [Show all 10 questions ▼]                                                     |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  📚 Want to improve? Check out these topics:                           │    |
|  │                                                                        │    |
|  │  • DDP vs EXW - Understanding the extremes                             │    |
|  │  • CIF vs CFR - When insurance matters                                 │    |
|  │                                                                        │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
+--------------------------------------------------------------------------------+
```

---

## UI Elements Detail

### Score Display

**Elements:**
- Large percentage (text-6xl)
- Score fraction (8/10)
- Performance message
- Visual ring/circle indicator

**Performance Messages:**
- 90-100%: "Excellent! You're an Incoterms expert!"
- 70-89%: "Great job! You have a solid understanding."
- 50-69%: "Good effort! Review the topics below."
- Below 50%: "Keep learning! Check out our content."

### Action Buttons

**Elements:**
- "Retake Quiz" - Secondary button
- "Back to Home" - Outline button

### Answer Review

**Elements:**
- Collapsible cards for each question
- Incorrect questions shown first and expanded
- Correct questions collapsed by default
- Each card shows:
  - Question number and text (summary)
  - User's answer
  - Correct answer (if wrong)
  - Explanation
  - "Learn more" link

### Improvement Suggestions

**Elements:**
- Card with study recommendations
- Based on incorrect answers

---

## Interactions

### Primary Interactions

1. **Expand Question Review**
   - Trigger: Click on collapsed question card
   - Response: Card expands to show details
   - Feedback: Smooth expand animation

2. **Retake Quiz**
   - Trigger: Click "Retake Quiz"
   - Response: Navigate to quiz start, clear previous answers
   - Feedback: Questions re-randomized

3. **Learn More Link**
   - Trigger: Click "Learn more about X"
   - Response: Navigate to Incoterm detail page
   - Feedback: Standard link behavior

---

## Components Required

### ShadCN Components

- [ ] Card (for score display and reviews)
- [ ] Button (for actions)
- [ ] Collapsible (for question review items)
- [ ] Progress (for score ring)

### Custom Components

- [ ] ScoreDisplay: Circular score visualization
- [ ] ReviewCard: Expandable question review

---

**Created:** 2026-01-23
**Status:** Draft
