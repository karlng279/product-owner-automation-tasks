# Interaction Diagram: Quiz Flow

**Interaction ID:** INT-001
**Feature:** Incoterm for Dummies (PRD-001)
**Stories:** ST-006, ST-007, ST-008
**Wireframes:** WF-004, WF-005, WF-006
**Components:** COMP-004 (Quiz Answer Card)
**Created:** 2026-01-23

---

## 1. Overview

This interaction diagram documents the complete quiz flow from starting a quiz to viewing results.

---

## 2. State Diagram

```
                         ┌─────────────────┐
                         │  Quiz Landing   │
                         │    (WF-004)     │
                         └────────┬────────┘
                                  │
                         [Click Start Quiz]
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        QUIZ IN PROGRESS                         │
│                                                                 │
│   ┌─────────────────┐      ┌─────────────────┐                 │
│   │   Unanswered    │      │    Answered     │                 │
│   │   Question      │─────▶│    Question     │                 │
│   │   (WF-005)      │      │   (Feedback)    │                 │
│   └─────────────────┘      └────────┬────────┘                 │
│          ▲                          │                          │
│          │                  [Click Next]                       │
│          │                          │                          │
│          │          ┌───────────────┴───────────────┐          │
│          │          │                               │          │
│          │          ▼                               ▼          │
│   [More Questions]                          [Last Question]    │
│          │                                          │          │
│          └──────────────────────────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                                  │
                         [Complete Last Question]
                                  │
                                  ▼
                         ┌─────────────────┐
                         │  Quiz Results   │
                         │    (WF-006)     │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
      [Retake Quiz]        [Learn More]        [Back to Home]
              │                   │                   │
              ▼                   ▼                   ▼
      Quiz Landing         Incoterm Detail      Landing Page
```

---

## 3. Question State Machine

```
┌──────────────────────────────────────────────────────────────────┐
│                     SINGLE QUESTION FLOW                         │
└──────────────────────────────────────────────────────────────────┘

           ┌─────────────┐
           │  IDLE       │  ◀──────────────────────────────────┐
           │  (No        │                                      │
           │  Selection) │                                      │
           └──────┬──────┘                                      │
                  │                                             │
         [Select Answer A/B/C/D]                                │
                  │                                             │
                  ▼                                             │
           ┌─────────────┐                                      │
           │  SELECTED   │                                      │
           │  (Awaiting  │───[Select Different Answer]──────────┤
           │  Confirm)   │                                      │
           └──────┬──────┘                                      │
                  │                                             │
         [Answer Auto-Submitted on Selection]                   │
                  │                                             │
                  ▼                                             │
       ┌─────────────────────┐                                  │
       │                     │                                  │
       ▼                     ▼                                  │
┌─────────────┐       ┌─────────────┐                          │
│  CORRECT    │       │  INCORRECT  │                          │
│  (Green)    │       │  (Red)      │                          │
└──────┬──────┘       └──────┬──────┘                          │
       │                     │                                  │
       └──────────┬──────────┘                                  │
                  │                                             │
         [Click Next Question]                                  │
                  │                                             │
                  ▼                                             │
           ┌─────────────┐                                      │
           │  TRANSITION │                                      │
           │  (Slide)    │──────────────────────────────────────┘
           └─────────────┘
                  │
          [If Last Question]
                  │
                  ▼
           ┌─────────────┐
           │  COMPLETE   │
           │  (Results)  │
           └─────────────┘
```

---

## 4. User Actions

### Quiz Landing Page (WF-004)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Start Quiz | Click "Start Quiz" | None | Navigate to Q1 | Button loading |
| Select Difficulty | Click option | None | Update selection | Radio highlight |

### Question Page (WF-005)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Select Answer | Click card or 1-4 key | Not already answered | Mark selected | Card highlight |
| View Feedback | Auto on selection | Answer selected | Show correct/incorrect | Color change |
| Next Question | Click "Next" | Answer selected | Go to next Q | Slide animation |

### Results Page (WF-006)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Expand Question | Click collapsed card | None | Show details | Expand animation |
| Learn More | Click link | None | Navigate to detail | Standard nav |
| Retake Quiz | Click button | None | Reset & restart | Confirm optional |

---

## 5. Data Flow

```
┌──────────────────────────────────────────────────────────────┐
│                       QUIZ STATE                             │
├──────────────────────────────────────────────────────────────┤
│  {                                                           │
│    difficulty: "beginner" | "intermediate" | "advanced",     │
│    questions: Question[],                                    │
│    currentIndex: number,                                     │
│    answers: { [questionId]: selectedAnswer }[],              │
│    isComplete: boolean                                       │
│  }                                                           │
└──────────────────────────────────────────────────────────────┘

                         │
                         ▼
┌──────────────────────────────────────────────────────────────┐
│                     DERIVED STATE                            │
├──────────────────────────────────────────────────────────────┤
│  - currentQuestion: questions[currentIndex]                  │
│  - progress: (currentIndex + 1) / questions.length           │
│  - score: count of correct answers                           │
│  - incorrectAnswers: filter where answer !== correct         │
└──────────────────────────────────────────────────────────────┘
```

---

## 6. Error Handling

| Error | Trigger | Display | Recovery |
|-------|---------|---------|----------|
| No questions loaded | API/data error | Error message | Retry or go home |
| Invalid question ID | URL manipulation | Redirect to start | Auto redirect |

---

## 7. Accessibility Interactions

- **Keyboard**: 1-4 to select, Enter for next, Tab navigation
- **Screen Reader**: Announce question, answer selected, result
- **Focus**: Move to first answer on question load

---

**Status:** Draft
