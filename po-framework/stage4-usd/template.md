# ST-XXX: Acceptance Criteria

**Story:** [Story Summary from USL]
**USL Reference:** [ST-XXX in usl.md](../usl.md#st-xxx-story-summary)
**Last Updated:** YYYY-MM-DD

---

## UI Elements

- **AC-001:** [Describe a UI element, field, or control that must exist]
- **AC-002:** [Describe another UI element]

---

## UI Behavior

- **AC-003:** [Describe how the UI responds to user actions]
- **AC-004:** [Describe dynamic behaviors, loading states, etc.]

---

## Logic

- **AC-005:** [Describe business rules and data filtering logic]
- **AC-006:** [Describe validation rules or selection criteria]

---

## Special Notes

- **AC-007:** [Edge cases, accessibility, localization considerations]
- **AC-008:** [UX copy specs, error message guidelines]

---

## Non-Functional Requirements

- **NFR-001:** [Performance requirement - be specific with metrics]
- **NFR-002:** [Security, reliability, or other NFR]

---

## Dependencies

| Type | ID | Description |
|------|-----|-------------|
| Story | ST-XXX | [What this story depends on] |
| Technical | TECH-XXX | [Technical dependency] |

*Use `—` or remove this section if no dependencies.*

---

## Estimate

**Story Points:** 0

---

## Traceability

| AC ID | UAT Reference | Design Reference |
|-------|---------------|------------------|
| AC-001 | TC-XXX | WF-XXX |

*Fill in after UAT and Design specs are created.*

---

<!--
TEMPLATE INSTRUCTIONS:

1. FILE NAMING
   - File name: ST-XXX.md (matches story ID from USL)
   - Location: features/{feature}/po/usd/ST-XXX.md

2. HEADER
   - Copy story summary from USL
   - Update USL Reference anchor to match story's anchor in usl.md
   - Update Last Updated date when making changes

3. ACCEPTANCE CRITERIA SECTIONS
   - UI Elements: What must exist on the page (fields, buttons, labels)
   - UI Behavior: How the UI responds to actions (clicks, inputs, navigation)
   - Logic: Business rules, data filtering, validation
   - Special Notes: Edge cases, accessibility, localization, UX specs

4. AC LABELING
   - Use sequential labels: AC-001, AC-002, AC-003...
   - Labels are unique within this file only (not globally)
   - Each AC must be:
     * Atomic (one testable condition)
     * Observable (can be verified)
     * Binary (pass or fail)

5. NON-FUNCTIONAL REQUIREMENTS
   - Be specific with metrics: "< 2 seconds" not "fast"
   - Include percentiles where relevant: "95% of requests"
   - Reference any performance/security standards

6. DEPENDENCIES
   - Story dependencies: Other ST-XXX that must be done first
   - Technical dependencies: TECH-XXX infrastructure/API work
   - Remove section if no dependencies

7. TRACEABILITY
   - Link ACs to UAT test cases (TC-XXX) after UAT is created
   - Link ACs to Design specs (WF-XXX, COMP-XXX) after design is done
   - This helps ensure complete coverage

8. QUALITY CHECKLIST
   Before marking this USD complete:
   [ ] All sections have relevant content
   [ ] Each AC is atomic and testable
   [ ] No vague terms (fast, nice, intuitive)
   [ ] NFRs have specific metrics
   [ ] Dependencies are accurate
   [ ] Story points estimated
-->
