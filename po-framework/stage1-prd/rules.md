# Stage 1 – PRD Creation & Maintenance Rules

The Product Requirements Document (PRD) is the single source of truth for the *why* and *what* of a new feature.  It provides enough context that subsequent artefacts (USM, USL, USD and UAT) can be generated automatically.

## 1. When to write a PRD

Create a PRD when a new feature or module:

* Requires more than a few user stories.
* Impacts multiple user flows or teams.
* Will feed into the automation pipeline.

Do not write a full PRD for minor copy changes or purely technical refactors.

## 2. Required inputs

Before generating a PRD, gather at least:

* A clear **problem statement** (who is suffering and why).
* A description of the **target users or segments**.
* At least one **measurable business goal**.
* Known **constraints** (technical, legal, operational).

Without these, AI will invent details, which undermines consistency.

## 3. PRD template

Every PRD must follow this structure and naming convention:

```
# PRD: <Product / Feature name>
id: PRD‑XXX
version: 0.1
owner: <Name>
status: draft | approved | deprecated
last_updated: YYYY‑MM‑DD

## 1. Summary
<2–4 sentences: who, what and why>

## 2. Problem Statement
### 2.1 Pain Points
  - …
### 2.2 Opportunities (optional)
  - …

## 3. Goals & Non‑Goals
### 3.1 Business Goals
  - …
### 3.2 User Goals
  - …
### 3.3 Non‑Goals
  - …

## 4. Narrative / Use Cases
<2–4 short flows describing how users will interact with the feature>

## 5. Scope & Constraints
### 5.1 In Scope
  - …
### 5.2 Out of Scope
  - …
### 5.3 Constraints & Assumptions
  - …

## 6. Success Metrics
  - metric_id: MET‑001
    description: …
    target: …
  - …

## 7. Links
  - design_figma: <URL or `N/A`>
  - wireframe_text: ./wireframes/<file>.md
  - special_notes: ./notes/<file>.md

## 8. Technical Considerations
<High‑level tech stack and integration notes>

## 9. Risks & Open Questions
### 9.1 Risks
  - id: RISK‑001
    description: …
    mitigation: …
### 9.2 Open Questions
  - id: Q‑001
    description: …
    owner: …
```

### ID and file naming rules

* `id` must follow `PRD‑001`, `PRD‑002`, …
* File names must be kebab‑case: `PRD‑001‑shipment‑overview‑basic‑dashboard.md`.
* `version` increments on major revisions; `status` can be `draft`, `approved` or `deprecated`.

## 4. Section guidance

* **Summary:** concisely state the feature, user and value. No implementation details.
* **Problem Statement:** only user or business pain points; avoid prescribing solutions here.
* **Goals & Non‑Goals:** business goals must be measurable; list at least two explicit non‑goals to set scope boundaries.
* **Narrative:** short stories describing user journeys. These will drive the USM.
* **Scope & Constraints:** bulleted features in scope; features explicitly out of scope; constraints such as dependency on existing systems.
* **Success Metrics:** each metric has an id, description and target value; vanity metrics are discouraged.
* **Links:** `design_figma` is either a valid URL or `N/A`; other links point to supplementary markdown files.
* **Technical Considerations:** summarise frontend, backend, integrations and infrastructure; avoid one‑off hacks.
* **Risks & Open Questions:** each risk needs a mitigation; open questions need an owner.

## 5. Quality gate

A PRD is **automation‑ready** when:

* All mandatory sections exist.
* Problem, goals and narrative clearly align.
* Scope and non‑goals set boundaries.
* Success metrics are measurable.
* IDs and filenames follow the conventions.
* Links are either valid or explicitly marked as `N/A`.

If any of these conditions are not met, refine the PRD before generating downstream artefacts.