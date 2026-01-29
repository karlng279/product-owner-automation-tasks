# Product Owner Automation Framework

## Overview

The PO Framework provides a structured 5-stage workflow for translating product ideas into detailed, implementable specifications. It systematically breaks down features from high-level requirements to testable acceptance criteria.

**Purpose:** Bridge the gap between product vision and development by creating complete, traceable specifications.

---

## The 5 Stages

The PO workflow transforms product ideas through five progressive stages:

| Stage | Artifact | Format | Description |
|-------|----------|--------|-------------|
| 1 | **PRD** | `prd.md` | Product Requirements Document – Defines the problem and goals |
| 2 | **USM** | `usm.md` | User Story Map – High-level user activities and steps |
| 3 | **USL** | `usl.md` | User Story List – All stories in one readable file |
| 4 | **USD** | `usd/*.md` | User Story Details – Per-story acceptance criteria |
| 5 | **UAT** | `uat/*.md` | User Acceptance Testing – Per-story BDD test cases |

---

## Feature Folder Structure

Each feature produces artifacts in a consistent structure:

```
features/{feature-name}/po/
├── prd.md                   # Product Requirements Document
├── usm.md                   # User Story Map
├── usl.md                   # User Story List (all stories)
├── usd/                     # User Story Details
│   ├── ST-001.md            # Acceptance criteria for story 1
│   ├── ST-002.md            # Acceptance criteria for story 2
│   └── ...
└── uat/                     # User Acceptance Testing
    ├── ST-001.md            # Test cases for story 1
    ├── ST-002.md            # Test cases for story 2
    └── ...
```

---

## Integration with Design Framework

The PO Framework outputs (particularly **USD with Acceptance Criteria**) serve as direct inputs to the [Design Framework](../design-framework/):

```
PO Framework Output → Design Framework Input
USD (usd/*.md) → Wireframes (WF-XXX)
```

**Complete Workflow:**
```
PRD → USM → USL → USD → UAT → Wireframes → Component Specs → Interactions → Code → Tests
└──────── PO Framework ────────┘   └────────── Design Framework ──────────┘
```

After completing the PO Framework stages, proceed to the Design Framework to create:
- Text-based wireframes
- ShadCN UI component specifications
- ASCII state diagrams for interactions

See [design-framework/README.md](../design-framework/README.md) for details.

---

## Framework Structure

Each stage has its own folder containing:

| File | Purpose |
|------|---------|
| **`rules.md`** | Detailed guidelines for creating and maintaining that artifact |
| **`example.md`** | Concrete example showing how to apply the rules |
| **`template.md`** | Blank template for new files (stages 3-5) |
| **`prompts.md`** | Prompt templates for generating, reviewing and updating via AI |
| **`quality-gate.md`** | Checklist for validating the artifact before proceeding |

---

## Getting Started

1. Start with [stage1-prd/](stage1-prd/) to understand how to write Product Requirements Documents
2. Progress sequentially through stages 2-5
3. Use the quality gates to validate each stage before proceeding
4. After completing UAT, proceed to the [Design Framework](../design-framework/)

---

## Additional Resources

- **PO Knowledge Hub:** [po-knowledge-hub/](po-knowledge-hub/) - Foundational business context, domain knowledge, and market insights that inform product decisions
- **Framework Structure:** See [framework-structure.md](framework-structure.md) for detailed folder layout
- **Sample Project:** [features/one-api-portal-mvp](../features/one-api-portal-mvp) - Complete example
