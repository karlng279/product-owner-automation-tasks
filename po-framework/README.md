# Product Owner Automation Framework

## Overview

The PO Framework provides a structured 5-stage workflow for translating product ideas into detailed, implementable specifications. It systematically breaks down features from high-level requirements to testable acceptance criteria.

**Purpose:** Bridge the gap between product vision and development by creating complete, traceable specifications.

---

## The 5 Stages

The PO workflow transforms product ideas through five progressive stages:

1. **PRD (Product Requirements Document)** – Defines what problem we are solving and why
2. **USM (User Story Map)** – Describes high-level user activities, steps and stories
3. **USL (User Story List)** – CSV backlog index with priorities and status
4. **USD (User Story Details)** – Per-story acceptance criteria, NFRs and dependencies
5. **UAT (User Acceptance Testing)** – BDD test cases (Given/When/Then)

---

## Integration with Design Framework

The PO Framework outputs (particularly **USD with Acceptance Criteria**) serve as direct inputs to the [Design Framework](../design-framework/):

```
PO Framework Output → Design Framework Input
USD (Acceptance Criteria) → Wireframes (WF-XXX)
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

- **`rules.md`** – Detailed guidelines for creating and maintaining that artifact, including naming conventions, required fields and mapping rules from previous stages
- **`example.[md|csv]`** – Concrete example showing how to apply the rules to a realistic feature
- **`prompts.md`** – Prompt templates for generating, reviewing and updating the artifact via AI
- **`quality-gate.md`** – Checklist of conditions that must be met for an artifact to be considered ready for the next stage

---

## Getting Started

1. Start with [stage1-prd/](stage1-prd/) to understand how to write Product Requirements Documents
2. Progress sequentially through stages 2-5
3. Use the quality gates to validate each stage before proceeding
4. After completing UAT, proceed to the [Design Framework](../design-framework/)

---

## Additional Resources

- **PM Knowledge Hub:** [pm-knowledge-hub/](pm-knowledge-hub/) - Foundational business context, domain knowledge, and market insights that inform product decisions
- **Framework Structure:** See root [README.md](../README.md) for complete workflow overview
- **Sample Project:** [features/one-api-portal-mvp](../features/one-api-portal-mvp) - Complete example