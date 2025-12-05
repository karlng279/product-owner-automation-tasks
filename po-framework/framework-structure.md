# Repository Structure and Relationships

This document describes how the specification repository is organised and how each file relates to the automated PO workflow.

## Top‑Level Layout

```
product-po-automation-spec/
│
├── README.md                # Overview of the repository
├── project-structure.md     # This document
│
├── stage1-prd/              # Stage 1: PRD (Product Requirements Document)
│   ├── rules.md             # How to create and maintain PRDs
│   ├── example.md           # Example PRD for a shipment dashboard
│   ├── prompts.md           # Prompt templates for PRD generation, review and update
│   └── quality-gate.md      # Criteria for a PRD to be considered automation-ready
│
├── stage2-usm/              # Stage 2: USM (User Story Map)
│   ├── rules.md
│   ├── example.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage3-usl/              # Stage 3: USL (User Story List)
│   ├── rules.md
│   ├── example.csv
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage4-usd/              # Stage 4: USD (User Story Details)
│   ├── rules.md
│   ├── example.csv
│   ├── prompts.md
│   └── quality-gate.md
│
└── stage5-uat/              # Stage 5: UAT (User Acceptance Testing)
    ├── rules.md
    ├── example.csv
    ├── prompts.md
    └── quality-gate.md
```

## Stage Relationships

The automation pipeline follows a strict one‑to‑many relationship:

* **PRD → USM:**  One PRD produces one User Story Map.  The PRD defines the problem space and goals; the USM structures those goals into user activities and steps.
* **USM → USL:**  Each step in the USM maps to one or more user stories.  The USL is a flat CSV backlog of those stories with metadata.
* **USL → USD:**  Every story in the USL has a corresponding row in the USD.  The USD holds detailed acceptance criteria and non‑functional requirements.
* **USD → UAT:**  Each acceptance criterion in the USD generates one or more BDD test scenarios.  The UAT lists these scenarios with explicit `Given/When/Then` clauses and a `test_result` column used during test execution.

Downstream artefacts depend on the IDs defined upstream.  For example, `story_id` values appear in USM, USL, USD and UAT.  Changing an ID in an upstream file requires updating all downstream references.