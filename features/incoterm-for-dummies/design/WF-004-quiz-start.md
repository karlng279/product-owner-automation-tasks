# Wireframe: Quiz Start Page

**Wireframe ID:** WF-004
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-006 - Start Incoterm quiz
**Addresses:** AC-001, AC-002, AC-003, AC-004, AC-005, AC-006, AC-007, AC-008
**Screen Type:** Landing / Entry

---

## Purpose

Introduce the quiz feature, explain the format, allow difficulty selection, and provide a clear starting point for users to test their Incoterms knowledge.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Quiz                                                                    |
+--------------------------------------------------------------------------------+
|                                                                                |
|                                                                                |
|                         Test Your Incoterms Knowledge                          |
|                                                                                |
|            Answer multiple-choice questions about Incoterms 2020               |
|            and see how well you understand international trade terms.          |
|                                                                                |
|                                                                                |
|            +----------------------------------------------------------+        |
|            |                                                          |        |
|            |  📝 Quiz Format                                          |        |
|            |  • Multiple choice questions (4 options each)            |        |
|            |  • Instant feedback after each answer                    |        |
|            |  • Learn from your mistakes with explanations            |        |
|            |                                                          |        |
|            +----------------------------------------------------------+        |
|                                                                                |
|                                                                                |
|            Choose Your Difficulty                                              |
|            --------------------------------------------------------            |
|                                                                                |
|            +------------------+  +------------------+  +-----------------+     |
|            |  (•) Beginner    |  |  ( ) Intermediate|  |  ( ) Advanced   |     |
|            |                  |  |                  |  |                 |     |
|            |  10 questions    |  |  15 questions    |  |  20 questions   |     |
|            |  Basic concepts  |  |  Deeper details  |  |  Edge cases     |     |
|            |  ~5 minutes      |  |  ~8 minutes      |  |  ~12 minutes    |     |
|            +------------------+  +------------------+  +-----------------+     |
|                                                                                |
|                                                                                |
|            ┌──────────────────────────────────────────────────────────┐        |
|            │ 💡 Don't worry if you don't know all the answers -       │        |
|            │    this is a learning tool! You'll see explanations      │        |
|            │    for every question.                                   │        |
|            └──────────────────────────────────────────────────────────┘        |
|                                                                                |
|                                                                                |
|                              [Start Quiz]                                      |
|                                                                                |
|                                                                                |
|                    Progress is not saved if you leave.                         |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Mobile (< 640px)

```
+----------------------------------+
| ≡  Incoterm for Dummies          |
+----------------------------------+
| Home > Quiz                      |
+----------------------------------+
|                                  |
|  Test Your Incoterms             |
|  Knowledge                       |
|                                  |
|  Answer multiple-choice          |
|  questions and test your         |
|  understanding.                  |
|                                  |
|  +----------------------------+  |
|  | 📝 Quiz Format             |  |
|  | • Multiple choice          |  |
|  | • Instant feedback         |  |
|  | • Learn from mistakes      |  |
|  +----------------------------+  |
|                                  |
|  Choose Difficulty               |
|  ----------------------------    |
|                                  |
|  +----------------------------+  |
|  | (•) Beginner               |  |
|  | 10 questions | ~5 min      |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | ( ) Intermediate           |  |
|  | 15 questions | ~8 min      |  |
|  +----------------------------+  |
|                                  |
|  +----------------------------+  |
|  | ( ) Advanced               |  |
|  | 20 questions | ~12 min     |  |
|  +----------------------------+  |
|                                  |
|  💡 This is a learning tool!     |
|                                  |
|  [Start Quiz]                    |
|                                  |
+----------------------------------+
```

---

## UI Elements Detail

### Page Header

**Elements:**
- Title: "Test Your Incoterms Knowledge" (h1)
- Subtitle: Descriptive text about the quiz

### Quiz Format Card

**Elements:**
- Icon: Clipboard/pencil
- Bullet list explaining format

### Difficulty Selector

**Elements:**
- Three radio button cards
- Each showing: Name, Question count, Description, Time estimate
- Default: Beginner selected

### Encouragement Callout

**Elements:**
- Highlighted tip box
- Encouraging message

### Start Button

**Elements:**
- Large primary button "Start Quiz"
- Warning text about progress not being saved

---

## Interactions

### Primary Interactions

1. **Select Difficulty**
   - Trigger: Click on difficulty card
   - Response: Radio selection updates
   - Feedback: Card highlight

2. **Start Quiz**
   - Trigger: Click "Start Quiz" button
   - Response: Navigate to first question
   - Feedback: Button loading state

---

## Components Required

### ShadCN Components

- [ ] RadioGroup (for difficulty selection)
- [ ] Card (for format info and callout)
- [ ] Button (size: lg, for Start Quiz)

### Custom Components

- [ ] DifficultyCard: Radio card with details

---

**Created:** 2026-01-23
**Status:** Draft
