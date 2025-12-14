# Stage 3 – USL Creation & Maintenance Rules

The User Story List (USL) is a flat CSV backlog that indexes every user story for a feature.  It links the structure of the USM to detailed story specifications in the USD.

## 1. Purpose

* Provide a single source of truth for all stories belonging to a PRD.
* Capture essential metadata such as MoSCoW priority, status, module and tags.
* Feed the creation of detailed acceptance criteria (USD) and UAT scenarios.

## 2. Relationship to other artefacts

* Each row maps to exactly one story in the USM (via the `story_id`).
* USL is downstream of PRD and USM and upstream of USD and UAT.
* Changing a story ID in the USL requires updating the USM, USD and UAT.

## 3. CSV schema

The USL must be stored as a CSV file with these columns in order:

```csv
story_id,prd_id,usm_id,activity_id,step_id,module,summary,user_story,moscow_priority,status,jira_key,tags
```

### Column definitions

* **story_id:** Unique identifier (`ST‑001`, `ST‑002`, …) per PRD.  Must match the IDs listed in the USM.
* **prd_id:** References the parent PRD (e.g. `PRD‑001`).
* **usm_id:** References the parent USM (e.g. `USM‑001`).
* **activity_id / step_id:** IDs of the activity and step from the USM.
* **module:** Name of the functional area (e.g. `Shipment Overview`, `Filters`).
* **summary:** One‑line title for the story, used as a short description.
* **user_story:** Full “As a … I want … so that …” sentence.
* **moscow_priority:** One of `Must‑have`, `Should‑have`, `Could‑have`, `Won't‑have`.  Drives release sequencing.
* **status:** Life‑cycle status (`Draft`, `Refined`, `Ready`, `In progress`, `Done`, `Discarded`).
* **jira_key:** Optional field used to store the Jira ticket ID once created.
* **tags:** Comma‑separated labels for filtering (e.g. `search,shipment‑overview,MVP`).

### File naming

* The file should be named `USL‑XXX‑<feature-name>.csv` where `XXX` matches the PRD and USM IDs.

## 4. Mapping rules: USM → USL

1. **Create stories per step:**  For each step in the USM, create one or more stories that collectively cover the step’s intent.
2. **Populate metadata:**  Copy `prd_id`, `usm_id`, `activity_id` and `step_id` from the USM.  Assign a meaningful `module` name.
3. **Write user stories:**  Use the standard template: `As a <actor>, I want <action>, so that <benefit>`.
4. **Assign priorities:**  Determine the MoSCoW priority based on the PRD’s scope and goals.
5. **Set initial status:**  New stories usually start as `Draft`.  Update to `Refined` or `Ready` after AC are defined in the USD.

## 5. Story quality heuristics – INVEST & FIRST

Use these heuristics to decide whether a story is well formed before moving it to USD:

* **Independent:** The story can be delivered separately from other stories.
* **Negotiable:** The story is a starting point for conversation, not a fixed contract.
* **Valuable:** It delivers value to the customer or user.
* **Estimable:** The team can estimate its effort with reasonable accuracy.
* **Small:** The story is small enough to deliver within a sprint.
* **Testable:** It can be tested via acceptance criteria.

Each story should also be capable of generating FIRST‑compliant tests downstream (Fast, Independent, Repeatable, Self‑validating, Timely).

## 6. Quality gate

A USL is **automation‑ready** when:

* Every story in the USM appears exactly once in the USL.
* Story IDs, PRD and USM IDs are consistent and follow naming rules.
* Summaries and user_story texts are clear, valuable and follow the “As a … I want … so that …” pattern.
* `moscow_priority` values are chosen from the allowed set.
* The status and tags fields are filled in at least for high‑priority stories.

If any of these items are not met, refine the USL before moving to Stage 4.