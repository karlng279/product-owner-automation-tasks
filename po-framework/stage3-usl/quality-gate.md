# USL Quality Gate

Use this checklist to assess whether a User Story List (USL) is ready to move on to Stage 4 (USD).  Stories that fail to meet these criteria should be refined before writing acceptance criteria.

## Completeness

* [ ] Every story ID referenced in the USM appears exactly once in the USL.
* [ ] All mandatory columns (`story_id` through `tags`) are present in every row.
* [ ] The CSV file name follows the `USL‑XXX‑<feature-name>.csv` pattern.

## Quality of stories

* [ ] Each `summary` clearly states the story’s intent in one line.
* [ ] Each `user_story` follows the “As a … I want … so that …” pattern.
* [ ] Stories are INVEST compliant: independent, negotiable, valuable, estimable, small and testable.
* [ ] `moscow_priority` values are chosen from `Must‑have`, `Should‑have`, `Could‑have`, `Won't‑have`.

## Alignment and consistency

* [ ] `prd_id`, `usm_id`, `activity_id` and `step_id` fields match the PRD and USM.
* [ ] `status` is set to `Draft` or `Refined` and will be updated as AC are added.
* [ ] Tags are meaningful and will aid filtering and reporting.

When all checks are satisfied, the USL is considered ready for Stage 4 (USD generation).