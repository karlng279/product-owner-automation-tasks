# ST-XXX: Test Cases

**Story:** [Story Summary from USL]
**USD Reference:** [ST-XXX in usd/](../usd/ST-XXX.md)
**Last Updated:** YYYY-MM-DD

---

## TC-001: [Scenario Name] (P0)

**Scenario:** [One-line description of what this test validates]
**Precondition:** [Optional context that must hold before the scenario starts, or "None"]

| Step | Description |
|------|-------------|
| **Given** | [Initial state or context] |
| **When** | [User action being tested] |
| **Then** | [Expected outcome] |

- **AC References:** AC-001, AC-002
- **Test Result:** Not Tested
- **Notes:** [Extra information, test data requirements, browser requirements]

---

## TC-002: [Scenario Name] (P1)

**Scenario:** [One-line description]
**Precondition:** [Precondition or "None"]

| Step | Description |
|------|-------------|
| **Given** | [Initial state] |
| **When** | [User action] |
| **Then** | [Expected outcome] |

- **AC References:** AC-003
- **Test Result:** Not Tested
- **Notes:** [Notes]

---

## Summary

| Test Case | Priority | AC Coverage | Result |
|-----------|----------|-------------|--------|
| TC-001 | P0 | AC-001, AC-002 | Not Tested |
| TC-002 | P1 | AC-003 | Not Tested |

---

## AC Coverage Matrix

| AC ID | Test Cases |
|-------|------------|
| AC-001 | TC-001 |
| AC-002 | TC-001 |
| AC-003 | TC-002 |

---

<!--
TEMPLATE INSTRUCTIONS:

1. FILE NAMING
   - File name: ST-XXX.md (matches story ID from USL)
   - Location: features/{feature}/po/uat/ST-XXX.md

2. HEADER
   - Copy story summary from USL
   - Update USD Reference to point to the corresponding USD file
   - Update Last Updated date when making changes

3. TEST CASE STRUCTURE
   - Each test case gets its own section: ## TC-XXX: [Name] (Priority)
   - Include Scenario, Precondition, Given/When/Then table, AC References, Test Result, Notes
   - Use horizontal rules (---) to separate test cases

4. TEST CASE LABELING
   - Use sequential labels: TC-001, TC-002, TC-003...
   - Labels are unique within this file only (not globally)
   - Include priority in the heading: (P0), (P1), (P2)

5. PRIORITY LEVELS
   - P0: Critical happy path scenarios for must-have stories
   - P1: Important edge cases and error scenarios
   - P2: Nice-to-have scenarios, performance checks

6. GIVEN/WHEN/THEN
   - Given: User state or system state at the start
   - When: Single user action being tested
   - Then: Observable expected outcome
   - Keep language business-readable, avoid implementation details

7. AC REFERENCES
   - List the AC labels from the USD that this scenario validates
   - Each test should cover one or more ACs
   - Ensure all ACs have at least one test covering them

8. TEST RESULT VALUES
   - Not Tested: Initial state before execution
   - Pass: Test passed during execution
   - Failed: Test failed during execution
   - Blocked: Test could not be executed due to dependencies

9. SUMMARY TABLE
   - Lists all test cases with their priority, AC coverage, and result
   - Update as you add or modify test cases

10. AC COVERAGE MATRIX
    - Shows which test cases cover each AC
    - Helps identify coverage gaps
    - Update when adding test cases or AC references

11. QUALITY CHECKLIST
    Before marking this UAT complete:
    [ ] All must-have ACs have at least one test case
    [ ] Happy path scenario exists (usually TC-001)
    [ ] Key edge cases are covered
    [ ] Error scenarios are covered
    [ ] Given/When/Then are clear and business-readable
    [ ] AC References are accurate
    [ ] Test Results are initialized to "Not Tested"
-->
