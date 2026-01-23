# USD Quality Gate

The User Story Details files must meet these conditions before UAT scenarios can be generated.

## File Structure

* [ ] File exists in `features/{feature}/po/usd/` folder.
* [ ] File name matches story ID: `ST-XXX.md`.
* [ ] File contains all required sections:
  - Header (Story, USL Reference, Last Updated)
  - UI Elements
  - UI Behavior
  - Logic
  - Special Notes
  - Non-Functional Requirements
  - Dependencies
  - Estimate
  - Traceability (can be empty initially)

## Completeness

* [ ] Every story in the USL has a corresponding USD file in `usd/` folder.
* [ ] Each section has meaningful content or is explicitly marked as N/A.
* [ ] Story summary matches the USL.
* [ ] USL Reference link is correct and functional.
* [ ] Last Updated date is current.

## Acceptance Criteria Quality

* [ ] All ACs use proper labels: `AC-001`, `AC-002`, etc.
* [ ] AC labels are sequential within the file.
* [ ] Each AC describes a single, testable condition.
* [ ] ACs are observable (can be verified through UI or system).
* [ ] ACs are binary (pass or fail, no partial states).
* [ ] No vague adjectives: "fast", "nice", "intuitive", "user-friendly".

## Section-Specific Checks

### UI Elements
* [ ] Lists all fields, buttons, and controls that must exist.
* [ ] Specifies required labels and placeholders.
* [ ] Identifies table columns if applicable.

### UI Behavior
* [ ] Describes responses to user actions (clicks, inputs).
* [ ] Covers loading states and transitions.
* [ ] Includes navigation behavior.

### Logic
* [ ] Defines business rules clearly.
* [ ] Specifies data filtering and validation rules.
* [ ] Covers edge cases in calculations.

### Special Notes
* [ ] Captures accessibility requirements.
* [ ] Notes localization considerations.
* [ ] References UX copy specs where applicable.
* [ ] Documents error handling behavior.

### Non-Functional Requirements
* [ ] All NFRs use proper labels: `NFR-001`, `NFR-002`, etc.
* [ ] Performance requirements include specific metrics.
* [ ] Metrics include percentiles where relevant (e.g., "95% of requests").
* [ ] No vague terms like "fast" or "responsive".

### Dependencies
* [ ] Lists story dependencies (ST-XXX) that must be completed first.
* [ ] Lists technical dependencies (TECH-XXX) if applicable.
* [ ] Dependencies reference valid, existing IDs.
* [ ] Section is removed or marked "—" if no dependencies.

### Estimate
* [ ] Story points are provided as a number.
* [ ] Or explicitly marked as "TBD" if not yet estimated.

## Formatting

* [ ] Markdown renders correctly.
* [ ] Horizontal rules (`---`) separate major sections.
* [ ] AC labels are bold: `**AC-001:**`.
* [ ] Tables are properly formatted.

---

## Gate Decision

**Pass:** All checks are satisfied. The USD file is ready for Stage 5 (UAT generation).

**Fail:** One or more checks failed. Address the issues before proceeding.

### Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing USD file | Create `usd/ST-XXX.md` for the story |
| Vague AC: "page loads fast" | Add metric: "page loads within 2 seconds for 95% of users" |
| AC not testable | Rewrite to be observable: "Button shows 'Loading...' during API call" |
| Multiple conditions in one AC | Split into separate ACs, each with one condition |
| Missing NFR metric | Add specific number: "< 500ms" instead of "quickly" |
| Invalid dependency ID | Verify the referenced story exists in USL |
| Broken USL link | Fix anchor to match format: `#st-xxx-story-summary` |
