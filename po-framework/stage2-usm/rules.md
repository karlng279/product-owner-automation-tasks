# Stage 2 – USM Creation & Maintenance Rules

The User Story Map (USM) is a structural artefact that bridges the high‑level narrative of the PRD with the backlog in the USL.  It organises the user’s journey into activities and steps and lists the stories that support each step.

## 1. Purpose

* Provide a shared map of user behaviour that reflects goals from the PRD.
* Serve as the parent structure for the User Story List (USL).
* Keep the focus on user goals and workflows, not UI components or technical solutions.

## 2. Inputs and outputs

**Inputs:**

* The PRD for the feature.
* Any wireframes or design notes that clarify flows (optional).

**Outputs:**

* A USM markdown file following the canonical schema below.
* Stable IDs (`USM‑XXX`, `ACT‑XXX`, `STEP‑XXX`, `ST‑XXX`) that will be referenced by the USL.

## 3. USM template

```
# USM: <Product / Feature name>
id: USM‑XXX
prd_id: PRD‑XXX
owner: <Name>
status: draft | approved | deprecated
last_updated: YYYY‑MM‑DD

## User Activities

  - activity_id: ACT‑XXX
    name: "Activity name"
    description: "Short user goal description"
    steps:
      - step_id: STEP‑XXX
        name: "Step name"
        description: "What the user does in this step"
        stories: [ST‑XXX, ST‑YYY]
      - …
  - …

## Notes
  - <Optional free‑text notes about trade‑offs, modelling decisions or future releases>
```

### ID and file naming rules

* `id` follows `USM‑001`, `USM‑002`, …
* File name pattern: `USM‑<id>-<feature-name>.md`.
* Activity IDs: `ACT‑001`, `ACT‑002`, … per USM.
* Step IDs: `STEP‑001`, `STEP‑002`, … per USM.
* Story IDs referenced in `stories` must exist later in the USL.

### Restricted content

* Do **not** include release slicing (MVP vs Post‑MVP) in the USM; use the `moscow_priority` field in the USL instead.
* Do **not** include UI terms such as “button” or “tab” in activity or step names.
* Keep the number of activities between three and seven; fewer than three suggests under‑modelling, more than seven suggests over‑segmentation.

## 4. Mapping rules: PRD → USM

1. **Identify Activities:**
   * Extract 3–7 high‑level user goals from the PRD’s narrative and user goals sections.
   * Activities should be user‑centric (e.g. “Monitor active shipments”, not “Homepage table”).

2. **Define Steps:**
   * For each activity, derive 2–6 sequential steps that represent the user’s workflow.
   * Step names should read like actions (e.g. “Filter by delayed shipments”).

3. **Link Stories:**
   * Each step must reference at least one story ID.  Story IDs will be defined in the USL; allocate them in reading order within the USM (top‑to‑bottom, left‑to‑right).

## 5. Quality gate

The USM is **automation‑ready** when:

* Every activity aligns with a user goal in the PRD.
* Each step follows logically from the narrative flows.
* Story IDs are assigned and will exist in the USL.
* There is no release slicing, UI naming or technical jargon.
* IDs and file names follow the conventions.