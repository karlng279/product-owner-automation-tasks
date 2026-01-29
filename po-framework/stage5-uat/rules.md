# Stage 5 – UAT Creation & Maintenance Rules

The User Acceptance Testing (UAT) files are stored as individual Markdown files—one per story—containing BDD scenarios that verify the behaviour defined in the USD. Each file can be executed manually or automated.

## 1. Purpose

* Provide a human-readable set of tests that confirm the system meets user stories' acceptance criteria.
* Maintain a clear traceability chain from PRD → USM → USL → USD → UAT.
* Capture test results (`Pass`, `Failed`, `Not Tested`, `Blocked`) for each scenario.
* Enable easy editing and review of individual story test cases.

## 2. Relationship to Other Artefacts

* Each UAT file corresponds to exactly one story in the USL and one USD file.
* Test cases reference AC labels from the corresponding USD file.
* UAT is the final artefact in the pipeline before implementation and QA sign-off.
* Test execution results are stored in the `Test Result` field.

**Artefact Flow:**
```
PRD → USM → USL (usl.md) → USD (usd/*.md) → UAT (uat/*.md)
```

## 3. File Format

UAT files are stored as individual Markdown files in a `uat/` subfolder, one file per story.

### File Location
```
features/{feature-name}/po/uat/
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
# ST-XXX: Test Cases

**Story:** [Story summary from USL]
**USD Reference:** [Link to USD file]
**Last Updated:** YYYY-MM-DD

---

## TC-001: [Scenario Name] (P0)

**Scenario:** [One-line description]
**Precondition:** [Context or "None"]

| Step | Description |
|------|-------------|
| **Given** | [Initial state] |
| **When** | [User action] |
| **Then** | [Expected outcome] |

- **AC References:** AC-001, AC-002
- **Test Result:** Not Tested
- **Notes:** [Extra information]

---

## TC-002: [Scenario Name] (P1)
...

---

## Summary

| Test Case | Priority | AC Coverage | Result |
|-----------|----------|-------------|--------|
| TC-001 | P0 | AC-001, AC-002 | Not Tested |

---

## AC Coverage Matrix

| AC ID | Test Cases |
|-------|------------|
| AC-001 | TC-001 |
```

## 4. Section Definitions

### Header
* **Story:** Copy the summary from the USL
* **USD Reference:** Link to the story's USD file (`../usd/ST-XXX.md`)
* **Last Updated:** Date of last modification (YYYY-MM-DD)

### Test Case Section

| Field | Purpose |
|-------|---------|
| **TC-XXX** | Unique test case ID within the file |
| **Priority** | Importance: P0 (critical), P1 (important), P2 (nice-to-have) |
| **Scenario** | One-line description of what the test validates |
| **Precondition** | Context that must hold before the scenario starts |
| **Given** | User state or system state at the start |
| **When** | User action being tested |
| **Then** | Expected outcomes |
| **AC References** | AC labels from USD that this scenario covers |
| **Test Result** | Execution outcome |
| **Notes** | Extra information (test data, browser requirements) |

### Summary Table
Quick reference of all test cases with priority, AC coverage, and results.

### AC Coverage Matrix
Shows which test cases cover each AC to identify coverage gaps.

## 5. Test Case Formatting Rules

### Labeling
* Each test case uses a label: `TC-001`, `TC-002`, `TC-003`, ...
* Labels are sequential within the file (not globally unique).
* Priority is included in the heading: `## TC-001: Scenario Name (P0)`

### Priority Levels

| Priority | Description | When to Use |
|----------|-------------|-------------|
| **P0** | Critical | Happy path for must-have stories |
| **P1** | Important | Key edge cases, error scenarios |
| **P2** | Nice-to-have | Performance checks, rare edge cases |

### Test Result Values

| Value | Description |
|-------|-------------|
| **Not Tested** | Initial state before execution |
| **Pass** | Test passed during execution |
| **Failed** | Test failed during execution |
| **Blocked** | Test could not be executed due to dependencies |

### Writing Good BDD Scenarios

**FIRST principles:** Ensure each scenario is:
* **Fast:** Can be executed quickly
* **Independent:** Does not depend on other test execution
* **Repeatable:** Same result every time
* **Self-validating:** Clear pass/fail outcome
* **Timely:** Written alongside or before implementation

**Good Examples:**
```
Given: I am a logged-in operations user
When: I open the Shipment Overview page
Then: I see a table with columns: Booking No, Customer Reference, POL, POD

Given: I am on the Shipment Overview with no active shipments
When: The page loads
Then: I see an empty state message instead of a blank table
```

**Bad Examples (avoid):**
```
Given: The system is ready              ❌ Vague
When: I do something                    ❌ Not specific
Then: It works correctly                ❌ Not observable
```

## 6. Mapping Rules: USD → UAT

1. **Create file:** For each story in the USL, create `uat/ST-XXX.md`.
2. **Copy header info:** Use story summary and create USD file link.
3. **Group ACs:** Collect AC bullets from the USD. Group them into logical clusters:
   - Happy path (primary user journey)
   - Edge cases (boundary conditions)
   - Error cases (failure scenarios)
4. **Create scenarios:** For each cluster, write a test case:
   - `Scenario`: summarises the cluster's intent
   - `Precondition`: context not captured in the Given clause
   - `Given/When/Then`: BDD steps using AC language
   - `AC References`: list the AC labels that the scenario validates
   - `Priority`: P0 for must-have happy paths; P1/P2 for others
   - `Test Result`: set to `Not Tested`
5. **Add Summary:** Create summary table listing all test cases.
6. **Add Coverage Matrix:** Map each AC to its test cases.

## 7. Naming Conventions

* **Folder:** `uat/` (lowercase)
* **File names:** `ST-001.md`, `ST-002.md` (matches story ID)
* **Test case labels:** `TC-001`, `TC-002`, ... (sequential within file)
* **Priority tags:** `(P0)`, `(P1)`, `(P2)`

## 8. Quality Gate

A UAT file is **execution-ready** when:

* File exists in `uat/` folder with correct naming.
* Every must-have AC has at least one test case covering it.
* At least one happy-path scenario exists (usually TC-001 with P0).
* Key edge cases and error scenarios are covered.
* `Given`, `When` and `Then` clauses are clear and business-readable.
* `AC References` map back to actual AC labels in the USD.
* `Test Result` is initialised to `Not Tested` for all scenarios.
* Summary table and AC Coverage Matrix are present and accurate.

See [quality-gate.md](quality-gate.md) for the complete checklist.

## 9. Example

See [example.md](example.md) for a complete UAT file example.

## 10. Template

See [template.md](template.md) for a blank UAT template with instructions.
