# PRD Quality Gate

Use this checklist to determine whether a PRD is ready to feed into automated generation of downstream artefacts.  If any item is unchecked, refine the PRD before moving on.

## Mandatory sections

* [ ] The Summary succinctly explains the feature, the user and the value.
* [ ] The Problem Statement lists specific pain points and, if relevant, opportunities.
* [ ] Goals & Non‑Goals are present and clearly measurable; at least two non‑goals are listed.
* [ ] The Narrative includes at least two short use cases drawn from real user behaviour.
* [ ] Scope & Constraints clearly define what is in scope, out of scope and any assumptions.
* [ ] Success Metrics have IDs, descriptions and numeric or otherwise falsifiable targets.
* [ ] Links include either valid URLs or `N/A` for design_figma, and point to markdown files for wireframes and notes.
* [ ] Technical Considerations summarise the frontend, backend, infrastructure and logging strategy.
* [ ] Risks & Open Questions include at least two risks with mitigations and any outstanding questions.

## Naming and IDs

* [ ] `id` follows the `PRD‑XXX` pattern and matches the file name.
* [ ] `version` starts at `0.1` and increments with significant changes.
* [ ] `status` is set to `draft`, `approved` or `deprecated` as appropriate.
* [ ] The file name uses kebab‑case: `PRD‑<id>-<feature-name>.md`.

## Alignment and clarity

* [ ] The problem statement and goals align; the PRD does not propose solutions in the problem section.
* [ ] The narrative flows are consistent with the goals and scope.
* [ ] All text is clear and free of jargon or ambiguous language.

If all boxes are checked, the PRD is considered *automation‑ready* and can be passed to Stage 2 (USM generation).