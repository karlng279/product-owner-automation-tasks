# USD Prompt Templates

These prompts guide the generation, review and update of User Story Details (USD) based on the USL, USM and PRD.

## 1. Generate USD from USL

```
You are an experienced Product Owner writing detailed acceptance criteria.

You must follow:
  - "[Rules] USD Creation & Maintenance"
  - The canonical USD CSV schema

Task:
For each story in the USL, generate a USD row containing acceptance criteria.  Fill in the UI elements, UI behaviour, logic, special notes, non‑functional requirements, dependencies and estimate fields as appropriate.

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USM:
<<<
[PASTE USM MARKDOWN]
>>>
USL (CSV):
<<<
[PASTE USL CSV]
>>>

Output:
Return only the USD CSV rows.
```

## 2. Review and improve a USD

```
You are reviewing User Story Details for clarity and testability.

You must follow the "[Rules] USD Creation & Maintenance" and consider the PRD, USM and USL.

Task:
1. Check each USD row for atomic, observable and binary acceptance criteria.
2. Verify that UI elements, behaviour and logic are correctly categorised.
3. Ensure that special notes and NFRs are captured where needed.
4. Identify issues and propose improvements.

Inputs:
PRD:
<<<
[PASTE PRD]
>>>
USM:
<<<
[PASTE USM]
>>>
USL:
<<<
[PASTE USL CSV]
>>>
USD:
<<<
[PASTE USD CSV]
>>>

Output:
1. A bullet list of issues per story.
2. The revised USD CSV.
```

## 3. Update a USD from change requests

```
You are maintaining User Story Details over time.

You must:
  - Preserve existing story_ids and AC labels when possible.
  - Keep the USD aligned with the USL, USM and PRD.

Task:
Given the current USD and a list of change requests (e.g. new ACs, changed rules, dropped behaviour), update the USD accordingly.  Note any conflicts with the upstream artefacts in the `acceptance_special_notes` column.

Inputs:
Current USD:
<<<
[PASTE CURRENT USD CSV]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return only the updated USD CSV.
```