# USL Quality Gate

Use this checklist to assess whether a User Story List (USL) is ready to move on to Stage 4 (USD). Stories that fail to meet these criteria should be refined before writing acceptance criteria.

## File Structure

* [ ] File is named `usl.md` and located in `features/{feature}/po/` folder.
* [ ] File contains all required sections: Header, Summary, Stories by Module, Story Details.
* [ ] Header includes PRD reference, USM reference, and Last Updated date.

## Completeness

* [ ] Every story ID referenced in the USM appears exactly once in the USL.
* [ ] All required fields are present for every story:
  - Activity/Step
  - Module
  - Priority
  - Status
  - Story Points
  - Tags
  - Dependencies (or `—`)
  - Jira (or `—`)
  - User Story (blockquote)

## Summary Table

* [ ] Summary table includes counts for all priority levels used.
* [ ] Story counts in summary table match actual number of stories.
* [ ] Story point totals in summary table are accurate.
* [ ] Total row is present and correct.

## Stories by Module Tables

* [ ] Stories are grouped by module with clear headers.
* [ ] Each story ID links to its detail section using anchor format.
* [ ] Anchor links follow the format: `#st-xxx-hyphenated-summary`.
* [ ] All anchor links are functional (no broken links).

## Quality of Stories

* [ ] Each summary clearly states the story's intent in one line.
* [ ] Each user story follows the "As a … I want … so that …" pattern.
* [ ] Stories are INVEST compliant: independent, negotiable, valuable, estimable, small and testable.
* [ ] `moscow_priority` values are from: `Must-have`, `Should-have`, `Could-have`, `Won't-have`.
* [ ] `status` values are from: `Draft`, `Refined`, `Ready`, `In Progress`, `Done`, `Discarded`.

## Alignment and Consistency

* [ ] Activity and Step IDs match the USM.
* [ ] Module names are consistent across all stories in the same functional area.
* [ ] Tags are meaningful and will aid filtering and reporting.
* [ ] Dependencies reference valid story IDs that exist in the USL.
* [ ] Story IDs are sequential and zero-padded (`ST-001`, `ST-002`, …).

## Formatting

* [ ] Markdown renders correctly (no broken tables or formatting).
* [ ] Horizontal rules (`---`) separate major sections.
* [ ] User stories are formatted as blockquotes (`>`).
* [ ] Field labels are bold (`**Field:**`).

---

## Gate Decision

**Pass:** All checks are satisfied. The USL is ready for Stage 4 (USD generation).

**Fail:** One or more checks failed. Address the issues before proceeding.

### Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing story from USM | Add the story to USL with all required fields |
| Summary totals incorrect | Recalculate counts and points from story list |
| Broken anchor link | Ensure anchor matches: lowercase, hyphens, no special chars |
| Invalid priority value | Use only: Must-have, Should-have, Could-have, Won't-have |
| User story not in standard format | Rewrite to: "As a [user], I want [action] so that [benefit]" |
| Duplicate story ID | Renumber stories to ensure unique sequential IDs |
