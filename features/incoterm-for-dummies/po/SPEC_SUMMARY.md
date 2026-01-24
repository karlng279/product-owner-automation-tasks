# Incoterm for Dummies - PO Specification Summary

**Created:** 2026-01-23
**Status:** Draft - Ready for Design Phase

---

## Overview

Incoterm for Dummies is an all-in-one learning platform for International Commercial Terms (Incoterms 2020). The application combines educational content, interactive quizzes, reference guides, and comparison tools to help import/export beginners and students understand and apply Incoterms effectively.

---

## Target Audience

- Import/Export Beginners
- Supply Chain and International Business Students

---

## Key Features

| Feature | Priority | Stories |
|---------|----------|---------|
| **Landing & Navigation** | Must-have | ST-001 |
| **Education Module** | Must-have | ST-002, ST-003, ST-004, ST-005 |
| **Quiz Module** | Should-have | ST-006, ST-007, ST-008 |
| **Reference Module** | Must-have | ST-009, ST-010 |
| **Comparison Tool** | Must-have | ST-011, ST-012 |
| **Selector Wizard** | Could-have | ST-013, ST-014, ST-015 |

---

## Story Summary

| Priority | Count | Story Points |
|----------|-------|--------------|
| Must-have | 10 | 34 |
| Should-have | 3 | 11 |
| Could-have | 3 | 8 |
| **Total** | **16** | **53** |

---

## PO Artifacts

### Stage 1: PRD
- [prd.md](./prd.md) - Product Requirements Document

### Stage 2: USM
- [usm.md](./usm.md) - User Story Map with 5 activities, 14 steps

### Stage 3: USL
- [usl.md](./usl.md) - User Story List with 15 stories

### Stage 4: USD (Acceptance Criteria)
| Story | File | ACs |
|-------|------|-----|
| ST-001 | [usd/ST-001.md](./usd/ST-001.md) | 12 |
| ST-002 | [usd/ST-002.md](./usd/ST-002.md) | 12 |
| ST-003 | [usd/ST-003.md](./usd/ST-003.md) | 17 |
| ST-004 | [usd/ST-004.md](./usd/ST-004.md) | 14 |
| ST-005 | [usd/ST-005.md](./usd/ST-005.md) | 13 |
| ST-006 | [usd/ST-006.md](./usd/ST-006.md) | 14 |
| ST-007 | [usd/ST-007.md](./usd/ST-007.md) | 17 |
| ST-008 | [usd/ST-008.md](./usd/ST-008.md) | 15 |
| ST-009 | [usd/ST-009.md](./usd/ST-009.md) | 18 |
| ST-010 | [usd/ST-010.md](./usd/ST-010.md) | 16 |
| ST-011 | [usd/ST-011.md](./usd/ST-011.md) | 18 |
| ST-012 | [usd/ST-012.md](./usd/ST-012.md) | 18 |
| ST-013 | [usd/ST-013.md](./usd/ST-013.md) | 13 |
| ST-014 | [usd/ST-014.md](./usd/ST-014.md) | 17 |
| ST-015 | [usd/ST-015.md](./usd/ST-015.md) | 17 |

### Stage 5: UAT (Test Cases)
| Story | File | Test Cases |
|-------|------|------------|
| ST-001 | [uat/ST-001.md](./uat/ST-001.md) | 4 |
| ST-002 | [uat/ST-002.md](./uat/ST-002.md) | 4 |
| ST-003 | [uat/ST-003.md](./uat/ST-003.md) | 4 |
| ST-004 | [uat/ST-004.md](./uat/ST-004.md) | 4 |
| ST-005 | [uat/ST-005.md](./uat/ST-005.md) | 4 |
| ST-006 | [uat/ST-006.md](./uat/ST-006.md) | 3 |
| ST-007 | [uat/ST-007.md](./uat/ST-007.md) | 5 |
| ST-008 | [uat/ST-008.md](./uat/ST-008.md) | 4 |
| ST-009 | [uat/ST-009.md](./uat/ST-009.md) | 5 |
| ST-010 | [uat/ST-010.md](./uat/ST-010.md) | 4 |
| ST-011 | [uat/ST-011.md](./uat/ST-011.md) | 5 |
| ST-012 | [uat/ST-012.md](./uat/ST-012.md) | 5 |
| ST-013 | [uat/ST-013.md](./uat/ST-013.md) | 3 |
| ST-014 | [uat/ST-014.md](./uat/ST-014.md) | 5 |
| ST-015 | [uat/ST-015.md](./uat/ST-015.md) | 6 |

**Total Test Cases:** 65

---

## MVP Scope Recommendation

For MVP release, focus on **Must-have** stories (34 story points):

1. **Landing & Navigation** (ST-001)
2. **Education Module** (ST-002, ST-003, ST-004, ST-005)
3. **Reference Module** (ST-009, ST-010)
4. **Comparison Tool** (ST-011, ST-012)

**Phase 2** can include:
- Quiz Module (ST-006, ST-007, ST-008) - Should-have
- Selector Wizard (ST-013, ST-014, ST-015) - Could-have

---

## Tech Stack (Recommended)

- **Frontend:** Next.js 14+ with App Router
- **UI:** TailwindCSS + ShadCN UI
- **Data:** Static JSON files (no database for MVP)
- **State:** React Context
- **Deployment:** Vercel

---

## Next Steps

1. **Design Phase** - Create wireframes, component specs, and interaction specs using the Design Framework
2. **Code Phase** - Implement Next.js application following the Codebase Framework
3. **Testing Phase** - Execute UAT test cases

---

## Files Structure

```
features/incoterm-for-dummies/
├── po/
│   ├── SPEC_SUMMARY.md     # This file
│   ├── prd.md              # Product Requirements Document
│   ├── usm.md              # User Story Map
│   ├── usl.md              # User Story List
│   ├── usd/                # User Story Details
│   │   ├── ST-001.md
│   │   ├── ST-002.md
│   │   └── ... (15 files)
│   └── uat/                # User Acceptance Tests
│       ├── ST-001.md
│       ├── ST-002.md
│       └── ... (15 files)
├── design/                 # (Next: Design specs)
├── code/                   # (Next: Implementation)
└── tasks/                  # (Task tracking)
```
