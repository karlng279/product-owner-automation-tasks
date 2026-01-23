# Repository Structure and Relationships

This document describes how the specification repository is organised and how each file relates to the automated PO workflow.

## Top-Level Layout

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
│   ├── rules.md             # Rules for single aggregate Markdown file
│   ├── example.md           # Example USL with stories table and details
│   ├── template.md          # Blank template for new USL files
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage4-usd/              # Stage 4: USD (User Story Details)
│   ├── rules.md             # Rules for per-story Markdown files
│   ├── example.md           # Example USD file for one story
│   ├── template.md          # Blank template for new USD files
│   ├── prompts.md
│   └── quality-gate.md
│
└── stage5-uat/              # Stage 5: UAT (User Acceptance Testing)
    ├── rules.md             # Rules for per-story test case files
    ├── example.md           # Example UAT file for one story
    ├── template.md          # Blank template for new UAT files
    ├── prompts.md
    └── quality-gate.md
```

## Feature Folder Layout

Each feature produces artefacts in a consistent folder structure:

```
features/{feature-name}/po/
├── prd.md                   # Product Requirements Document
├── usm.md                   # User Story Map
├── usl.md                   # User Story List (all stories in one file)
├── usd/                     # User Story Details (one file per story)
│   ├── ST-001.md
│   ├── ST-002.md
│   └── ...
└── uat/                     # User Acceptance Testing (one file per story)
    ├── ST-001.md
    ├── ST-002.md
    └── ...
```

## Stage Relationships

The automation pipeline follows a strict one-to-many relationship:

* **PRD → USM:** One PRD produces one User Story Map. The PRD defines the problem space and goals; the USM structures those goals into user activities and steps.
* **USM → USL:** Each step in the USM maps to one or more user stories. The USL is a single Markdown file with a summary table and detailed story entries.
* **USL → USD:** Every story in the USL has a corresponding USD file in the `usd/` folder. Each USD file holds detailed acceptance criteria and non-functional requirements for one story.
* **USD → UAT:** Each acceptance criterion in the USD generates one or more BDD test scenarios. Each story has a corresponding UAT file in the `uat/` folder with explicit `Given/When/Then` clauses and test results.

**Artefact Flow:**
```
PRD → USM → USL (usl.md) → USD (usd/*.md) → UAT (uat/*.md)
```

Downstream artefacts depend on the IDs defined upstream. For example, `story_id` values appear in USM, USL, USD and UAT. Changing an ID in an upstream file requires updating all downstream references.

## File Format Summary

| Stage | Format | Files |
|-------|--------|-------|
| PRD | Markdown | Single `prd.md` |
| USM | Markdown | Single `usm.md` |
| USL | Markdown | Single `usl.md` (aggregate) |
| USD | Markdown | Per-story files in `usd/` folder |
| UAT | Markdown | Per-story files in `uat/` folder |
