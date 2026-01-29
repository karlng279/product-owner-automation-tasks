# UAT Quality Gate

Use this checklist to ensure that UAT files are ready for execution by QA or automated test runners.

## File Structure

* [ ] File exists in `features/{feature}/po/uat/` folder.
* [ ] File name matches story ID: `ST-XXX.md`.
* [ ] File contains all required sections:
  - Header (Story, USD Reference, Last Updated)
  - Test cases (TC-XXX sections)
  - Summary table
  - AC Coverage Matrix

## Completeness

* [ ] Every story in the USL has a corresponding UAT file in `uat/` folder.
* [ ] Every must-have AC has at least one test case covering it.
* [ ] At least one happy-path scenario exists (usually TC-001 with P0).
* [ ] Key edge cases are covered where the USD defines them.
* [ ] Error scenarios are covered where the USD defines them.

## Test Case Quality

* [ ] All test cases use proper labels: `TC-001`, `TC-002`, etc.
* [ ] TC labels are sequential within the file.
* [ ] Each test case has a clear scenario description.
* [ ] Preconditions are specified or marked as "None".
* [ ] Priority is included in the heading: `(P0)`, `(P1)`, or `(P2)`.

## BDD Clause Quality

* [ ] Given clauses describe user state or system state clearly.
* [ ] When clauses describe a single user action.
* [ ] Then clauses describe observable expected outcomes.
* [ ] Clauses use business language, not implementation details.
* [ ] No chaining of unrelated actions in a single scenario.

## Traceability

* [ ] USD Reference link is correct and functional.
* [ ] AC References list one or more AC labels from the USD.
* [ ] All referenced ACs exist in the corresponding USD file.
* [ ] AC Coverage Matrix accurately reflects test case coverage.

## Execution Readiness

* [ ] Test Result is initialised to "Not Tested" for all test cases.
* [ ] Priorities (`P0`, `P1`, `P2`) reflect the importance of each scenario.
* [ ] Summary table is present and accurate.
* [ ] Notes field provides useful context (test data, browser requirements).

## Formatting

* [ ] Markdown renders correctly.
* [ ] Horizontal rules (`---`) separate test cases.
* [ ] Given/When/Then table is properly formatted.
* [ ] Summary table and AC Coverage Matrix tables render correctly.

---

## Gate Decision

**Pass:** All checks are satisfied. The UAT file is ready for test execution.

**Fail:** One or more checks failed. Address the issues before proceeding.

### Common Issues and Fixes

| Issue | Fix |
|-------|-----|
| Missing UAT file | Create `uat/ST-XXX.md` for the story |
| No happy-path scenario | Add TC-001 with P0 priority covering core ACs |
| Vague Then clause | Rewrite to be observable: "I see a table with X columns" |
| Missing AC coverage | Add test case that covers the uncovered AC |
| Invalid AC Reference | Verify the AC label exists in the corresponding USD file |
| Wrong Test Result value | Use only: Not Tested, Pass, Failed, Blocked |
| Missing Summary table | Add summary table listing all test cases |
| Missing Coverage Matrix | Add AC Coverage Matrix showing AC-to-TC mapping |
| Broken USD Reference | Fix link to match format: `../usd/ST-XXX.md` |

---

## Coverage Thresholds

For a story to be considered fully tested:

| Priority | Minimum Coverage |
|----------|-----------------|
| Must-have | 100% of ACs covered |
| Should-have | 80% of ACs covered |
| Could-have | 50% of ACs covered |
