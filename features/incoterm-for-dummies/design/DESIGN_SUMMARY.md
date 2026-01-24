# Incoterm for Dummies - Design Summary

**Created:** 2026-01-23
**Status:** Draft - Ready for Code Phase

---

## Overview

This document summarizes all design artifacts for the Incoterm for Dummies application, providing a quick reference for developers implementing the frontend.

---

## Design Artifacts

### Wireframes (12 screens)

| ID | Screen | Story | Priority |
|----|--------|-------|----------|
| [WF-001](WF-001-landing-page.md) | Landing Page | ST-001 | Must-have |
| [WF-002](WF-002-incoterms-overview.md) | Incoterms Overview | ST-002 | Must-have |
| [WF-003](WF-003-incoterm-detail.md) | Incoterm Detail | ST-003, ST-004, ST-005 | Must-have |
| [WF-004](WF-004-quiz-start.md) | Quiz Start | ST-006 | Should-have |
| [WF-005](WF-005-quiz-question.md) | Quiz Question | ST-007 | Should-have |
| [WF-006](WF-006-quiz-results.md) | Quiz Results | ST-008 | Should-have |
| [WF-007](WF-007-reference-page.md) | Quick Reference | ST-010 | Must-have |
| [WF-008](WF-008-comparison-selection.md) | Comparison Selection | ST-011 | Must-have |
| [WF-009](WF-009-comparison-view.md) | Comparison View | ST-012 | Must-have |
| [WF-010](WF-010-wizard-start.md) | Wizard Start | ST-013 | Could-have |
| [WF-011](WF-011-wizard-questions.md) | Wizard Questions | ST-014 | Could-have |
| [WF-012](WF-012-wizard-results.md) | Wizard Results | ST-015 | Could-have |

### Component Specifications (7 components)

| ID | Component | Used In |
|----|-----------|---------|
| [COMP-001](COMP-001-navigation-header.md) | Navigation Header | All screens |
| [COMP-002](COMP-002-incoterm-card.md) | Incoterm Card | WF-002 |
| [COMP-003](COMP-003-responsibility-diagram.md) | Responsibility Diagram | WF-003 |
| [COMP-004](COMP-004-quiz-answer-card.md) | Quiz Answer Card | WF-005 |
| [COMP-005](COMP-005-comparison-table.md) | Comparison Table | WF-009 |
| [COMP-006](COMP-006-wizard-progress.md) | Wizard Progress | WF-010, WF-011, WF-012 |
| [COMP-007](COMP-007-recommendation-card.md) | Recommendation Card | WF-012 |

### Interaction Diagrams (3 flows)

| ID | Flow | Stories |
|----|------|---------|
| [INT-001](INT-001-quiz-flow.md) | Quiz Flow | ST-006, ST-007, ST-008 |
| [INT-002](INT-002-comparison-flow.md) | Comparison Flow | ST-011, ST-012 |
| [INT-003](INT-003-wizard-flow.md) | Wizard Flow | ST-013, ST-014, ST-015 |

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| Styling | TailwindCSS |
| UI Components | ShadCN UI |
| State | React Context + useState |
| Data | Static JSON files |
| Deployment | Vercel |

---

## ShadCN Components Used

### Core Components
- Button (variants: default, secondary, outline, ghost, destructive)
- Card (CardHeader, CardContent, CardFooter)
- Input (text, search)
- Badge
- Progress
- Tooltip

### Form Components
- RadioGroup
- Checkbox
- Select

### Layout Components
- Sheet (mobile navigation)
- Collapsible / Accordion
- Breadcrumb

### Feedback Components
- Alert
- Toast (via Sonner)

---

## Page Routes

```
/                       → Landing Page (WF-001)
/learn                  → Incoterms Overview (WF-002)
/learn/[code]           → Incoterm Detail (WF-003)
/quiz                   → Quiz Start (WF-004)
/quiz/question          → Quiz Question (WF-005)
/quiz/results           → Quiz Results (WF-006)
/reference              → Quick Reference (WF-007)
/compare                → Comparison Selection (WF-008)
/compare/view           → Comparison View (WF-009)
/find                   → Wizard Start (WF-010)
/find/question          → Wizard Questions (WF-011)
/find/results           → Wizard Results (WF-012)
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger nav, stacked cards |
| Tablet | 640px - 1024px | 2-column grids, partial nav visible |
| Desktop | > 1024px | Full layout, all nav visible, 3+ column grids |

---

## Color Tokens

| Token | Usage |
|-------|-------|
| `bg-background` | Page background |
| `bg-card` | Card backgrounds |
| `bg-muted` | Subtle backgrounds |
| `bg-primary` | Primary actions, selected states |
| `text-foreground` | Main text |
| `text-muted-foreground` | Secondary text |
| `border-border` | Default borders |
| `border-primary` | Active/selected borders |

### Semantic Colors
| Color | Usage |
|-------|-------|
| Green (500) | Correct answers, success states |
| Red (500) | Incorrect answers, errors |
| Blue (500) | Seller responsibility (diagram) |
| Orange (500) | Buyer responsibility (diagram) |
| Yellow (50/500) | Differences highlighted |

---

## Data Structure

### Incoterm Data
```typescript
interface Incoterm {
  code: string;           // "FOB"
  fullName: string;       // "Free On Board"
  transportMode: "sea" | "any";
  keyPoint: string;
  description: string;    // Full explanation
  whenToUse: string[];
  commonMistakes: string[];
  riskTransferPoint: number;
  costTransferPoint: number;
  sellerResponsibilities: Responsibility[];
  buyerResponsibilities: Responsibility[];
}
```

### Quiz Data
```typescript
interface QuizQuestion {
  id: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedIncoterm: string;
}
```

---

## Implementation Priority

### Phase 1: MVP (Must-have)
1. Landing Page (WF-001)
2. Incoterms Overview (WF-002)
3. Incoterm Detail (WF-003)
4. Quick Reference (WF-007)
5. Comparison Selection & View (WF-008, WF-009)

### Phase 2: Enhancement (Should-have)
6. Quiz Start (WF-004)
7. Quiz Question (WF-005)
8. Quiz Results (WF-006)

### Phase 3: Advanced (Could-have)
9. Wizard Start (WF-010)
10. Wizard Questions (WF-011)
11. Wizard Results (WF-012)

---

## Files Structure

```
features/incoterm-for-dummies/
├── po/                          # PO artifacts
│   ├── prd.md
│   ├── usm.md
│   ├── usl.md
│   ├── usd/                     # 15 story details
│   └── uat/                     # 15 test case files
│
├── design/                      # Design artifacts
│   ├── DESIGN_SUMMARY.md        # This file
│   ├── WF-001-landing-page.md
│   ├── WF-002-incoterms-overview.md
│   ├── WF-003-incoterm-detail.md
│   ├── WF-004-quiz-start.md
│   ├── WF-005-quiz-question.md
│   ├── WF-006-quiz-results.md
│   ├── WF-007-reference-page.md
│   ├── WF-008-comparison-selection.md
│   ├── WF-009-comparison-view.md
│   ├── WF-010-wizard-start.md
│   ├── WF-011-wizard-questions.md
│   ├── WF-012-wizard-results.md
│   ├── COMP-001-navigation-header.md
│   ├── COMP-002-incoterm-card.md
│   ├── COMP-003-responsibility-diagram.md
│   ├── COMP-004-quiz-answer-card.md
│   ├── COMP-005-comparison-table.md
│   ├── COMP-006-wizard-progress.md
│   ├── COMP-007-recommendation-card.md
│   ├── INT-001-quiz-flow.md
│   ├── INT-002-comparison-flow.md
│   └── INT-003-wizard-flow.md
│
├── code/                        # Next: Implementation
│   └── [Next.js app]
│
└── tasks/                       # Task tracking
```

---

## Next Steps

1. **Code Phase**: Set up Next.js project with ShadCN UI
2. **Data**: Create static JSON files for Incoterm content
3. **Components**: Build reusable components per specs
4. **Pages**: Implement pages per wireframes
5. **Testing**: Execute UAT test cases

---

**Status:** Design Phase Complete - Ready for Implementation
