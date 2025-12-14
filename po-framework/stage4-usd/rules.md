# Stage 4 – USD Creation & Maintenance Rules

The User Story Details (USD) file records structured acceptance criteria and non‑functional requirements for each story.  It ensures that the story can be implemented and tested consistently.

## 1. Purpose

* Translate high‑level user stories into concrete, testable conditions.
* Provide a contract between Product, Development and QA for each story.
* Serve as the input for generating UAT scenarios.

## 2. Relationship to other artefacts

* Each row in the USD corresponds to exactly one story in the USL.
* Acceptance criteria (AC) in the USD will be turned into BDD scenarios in the UAT.
* Changes to a story’s scope or ID must be reflected across USL, USD and UAT.

## 3. CSV schema

The USD is stored as a CSV file with one row per story and these columns:

```csv
story_id,
acceptance_ui_elements,
acceptance_ui_behavior,
acceptance_logic,
acceptance_special_notes,
non_functional_requirements,
dependencies,
estimate_story_points
```

### Column definitions

* **story_id:** Unique identifier matching a row in the USL (e.g. `ST‑001`).
* **acceptance_ui_elements:** Markdown‑style bullet list of UI components and fields.  Use labels like `AC‑001`, `AC‑002`, …
* **acceptance_ui_behavior:** Bullet list of dynamic behaviours and interactions.
* **acceptance_logic:** Bullet list of business and system rules that govern the story.
* **acceptance_special_notes:** Bullet list of edge cases, localisation, accessibility or other special considerations.
* **non_functional_requirements:** Bullet list of performance, security or other NFRs relevant to this story.
* **dependencies:** Comma‑separated list of other story IDs or technical tasks that must be completed first.
* **estimate_story_points:** Numeric estimate (e.g. `3`, `5`, `8`) or blank/TBD if not yet estimated.

### AC formatting rules

* Each bullet must be prefixed with a local AC label (`AC‑NNN`).  Labels need not be globally unique but must be consistent within a story.
* Each bullet describes exactly one behaviour or condition.
* Bullets must be observable and testable; avoid vague terms like “fast” or “intuitive.”

## 4. Mapping rules: USL → USD

1. **Gather inputs:**  For each story, review the PRD, the USM step description and any designs.
2. **Derive UI Elements:**  Identify the fields, labels and controls that must exist for the story.
3. **Derive UI Behaviour:**  Describe dynamic behaviours (e.g. auto‑loading data, refreshing on filter change).
4. **Derive Logic:**  Define business rules, data filters and selection criteria.
5. **Add Special Notes:**  Capture localisation, copy text and other edge cases.
6. **Add NFRs:**  Note performance, security or reliability expectations if they matter at this level.
7. **Dependencies:**  List prerequisite stories or technical tasks.

## 5. Quality gate

A USD is **automation‑ready** when:

* Every story in the USL has a corresponding row in the USD.
* Each acceptance criteria column contains at least one bullet where relevant.
* Bullets are atomic, observable and binary (pass/fail) statements.
* NFRs are noted for any critical performance or reliability requirement.
* Dependencies and estimates are filled in or marked as TBD.

If any criteria are missing or vague, refine the USD before generating UAT scenarios.