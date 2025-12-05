# USM Quality Gate

Before generating the User Story List (USL), ensure the USM meets the following criteria.  A USM that fails any item should be refined before proceeding.

## Structure

* [ ] The USM file uses the canonical schema with `id`, `prd_id`, `owner`, `status` and `last_updated` fields.
* [ ] There are between 3 and 7 activities.
* [ ] Each activity has at least 2 steps but no more than 6.
* [ ] All activities and steps have IDs (`ACT‑XXX`, `STEP‑XXX`).
* [ ] Every step lists at least one story ID.

## Naming and language

* [ ] Activity and step names reflect user actions or goals, not UI components or technical implementations.
* [ ] Descriptions are concise and describe what the user does.
* [ ] No release slicing (MVP vs post‑MVP) appears in the USM; priorities will be handled in the USL.

## Alignment

* [ ] Activities map back to user goals or use cases in the PRD.
* [ ] Steps follow the narrative flows defined in the PRD.
* [ ] Story IDs in the USM will be created in the USL and referenced by USD and UAT.

Once every checkbox is satisfied, the USM is considered ready for Stage 3 (USL generation).