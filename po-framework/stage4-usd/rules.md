# Stage 4 – USD Creation & Maintenance Rules

The User Story Details (USD) are stored as individual Markdown files—one per story—containing structured acceptance criteria and non-functional requirements. Each file ensures the story can be implemented and tested consistently.

## 1. Purpose

* Translate high-level user stories into concrete, testable conditions.
* Provide a contract between Product, Development and QA for each story.
* Serve as the input for generating UAT scenarios.
* Enable easy editing and review of individual story acceptance criteria.

## 2. Relationship to Other Artefacts

* Each USD file corresponds to exactly one story in the USL.
* Acceptance criteria (AC) in the USD will be turned into BDD scenarios in the UAT.
* Changes to a story's scope or ID must be reflected across USL, USD and UAT.

**Artefact Flow:**
```
PRD → USM → USL (usl.md) → USD (usd/*.md) → UAT (uat/*.md)
```

## 3. File Format

USD files are stored as individual Markdown files in a `usd/` subfolder, one file per story.

### File Location
```
features/{feature-name}/po/usd/
├── ST-001.md
├── ST-002.md
├── ST-003.md
└── ...
```

### File Naming
* File name matches the story ID: `ST-001.md`, `ST-002.md`, etc.
* Always use uppercase for the ID prefix and zero-padded numbers.

### File Structure

```markdown
# ST-XXX: Acceptance Criteria

**Story:** [Story summary from USL]
**USL Reference:** [Link to story in usl.md]
**Last Updated:** YYYY-MM-DD

---

## UI Elements
- **AC-001:** [UI element description]
- **AC-002:** [UI element description]

---

## UI Behavior
- **AC-003:** [Behavior description]

---

## Logic
- **AC-004:** [Business rule]

---

## Special Notes
- **AC-005:** [Edge case or special consideration]

---

## Non-Functional Requirements
- **NFR-001:** [Performance/security requirement]

---

## Dependencies

| Type | ID | Description |
|------|-----|-------------|
| Story | ST-XXX | Description |
| Technical | TECH-XXX | Description |

---

## Estimate

**Story Points:** X

---

## Traceability

| AC ID | UAT Reference | Design Reference |
|-------|---------------|------------------|
| AC-001 | TC-XXX | WF-XXX |
```

## 4. Section Definitions

### Header
* **Story:** Copy the summary from the USL
* **USL Reference:** Link to the story's anchor in usl.md
* **Last Updated:** Date of last modification (YYYY-MM-DD)

### Acceptance Criteria Sections

| Section | Purpose | Examples |
|---------|---------|----------|
| **UI Elements** | Physical components and fields that must exist | Buttons, inputs, labels, tables, columns |
| **UI Behavior** | Dynamic interactions and responses | Click handlers, loading states, navigation |
| **Logic** | Business rules and data processing | Filtering, validation, calculations |
| **Special Notes** | Edge cases and special considerations | Accessibility, localization, error states |

### Non-Functional Requirements
Performance, security, reliability requirements with specific metrics.

### Dependencies
Other story IDs or technical tasks that must be completed first.

### Estimate
Story point estimate (numeric value).

### Traceability
Links ACs to UAT test cases and Design specs for coverage tracking.

## 5. AC Formatting Rules

### Labeling
* Each AC uses a label: `AC-001`, `AC-002`, `AC-003`, ...
* Labels are sequential within the file (not globally unique).
* NFRs use: `NFR-001`, `NFR-002`, ...

### Writing Testable ACs
Each acceptance criterion must be:

* **Atomic:** Describes exactly one behavior or condition.
* **Observable:** Can be verified through the UI or system behavior.
* **Binary:** Results in pass or fail (no partial states).

**Good Examples:**
```
- **AC-001:** The page title shows "Shipment Overview".
- **AC-002:** Clicking "Save" submits the form and shows a success toast.
- **NFR-001:** Page loads within 2 seconds for 95% of users.
```

**Bad Examples (avoid):**
```
- The page looks nice.                    ❌ Vague, not testable
- The form works correctly.               ❌ Not specific
- Response is fast.                       ❌ No metric
```

## 6. Mapping Rules: USL → USD

1. **Create file:** For each story in the USL, create `usd/ST-XXX.md`.
2. **Copy header info:** Use story summary and create USL anchor link.
3. **Derive UI Elements:** Identify fields, labels, and controls from requirements/designs.
4. **Derive UI Behavior:** Describe dynamic behaviors and interactions.
5. **Derive Logic:** Define business rules, data filters, and validation.
6. **Add Special Notes:** Capture edge cases, accessibility, localization.
7. **Add NFRs:** Note performance, security expectations with metrics.
8. **List Dependencies:** Reference prerequisite stories or technical tasks.
9. **Estimate:** Add story point estimate or mark as TBD.

## 7. Naming Conventions

* **Folder:** `usd/` (lowercase)
* **File names:** `ST-001.md`, `ST-002.md` (matches story ID)
* **AC labels:** `AC-001`, `AC-002`, ... (sequential within file)
* **NFR labels:** `NFR-001`, `NFR-002`, ...

## 8. Quality Gate

A USD file is **ready for UAT creation** when:

* File exists in `usd/` folder with correct naming.
* All required sections are present with meaningful content.
* Each AC is atomic, observable, and binary.
* NFRs include specific metrics (no vague terms).
* Dependencies are listed or section is removed if none.
* Story points are estimated or marked TBD.
* USL reference link is correct.

See [quality-gate.md](quality-gate.md) for the complete checklist.

## 9. Example

See [example.md](example.md) for a complete USD file example.

## 10. Template

See [template.md](template.md) for a blank USD template with instructions.
