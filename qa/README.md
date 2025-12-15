# QA

This directory contains testing artifacts, test execution history, and quality assurance documentation.

## Directory Structure

```
qa/
├── test-runs/              # Dated test execution results
├── bug-reports/            # Bug documentation
└── regression-suites/      # Curated test subsets for regression
```

## Purpose

QA artifacts:
- **Execute** UAT test cases from specs
- **Track** test results over time
- **Document** bugs and issues
- **Maintain** regression test suites

## Subdirectories

### test-runs/
Historical test execution results:

**Organization:**
```
test-runs/
├── 2025-01-15-sprint-23/
│   ├── shipment-overview-uat.csv    # Copy of UAT with test_result updated
│   ├── booking-flow-uat.csv
│   └── test-summary.md              # Overall results summary
├── 2025-01-29-sprint-24/
│   └── ...
└── README.md
```

**Naming Convention:**
- Folder: `YYYY-MM-DD-sprint-{number}` or `YYYY-MM-DD-{release-name}`
- Files: Copy UAT CSVs from `/specs/{feature}/uat.csv`

**test-summary.md Template:**
```markdown
# Test Run Summary - Sprint 23
**Date:** 2025-01-15
**Tester:** [Name]
**Environment:** Staging | Production
**Build/Version:** v1.2.3

## Features Tested
- Shipment Overview (UAT-001)
- Booking Flow (UAT-002)

## Results
| Feature | Total Tests | Passed | Failed | Not Testable | Pass Rate |
|---------|-------------|--------|--------|--------------|-----------|
| Shipment Overview | 20 | 18 | 2 | 0 | 90% |
| Booking Flow | 15 | 15 | 0 | 0 | 100% |
| **Total** | **35** | **33** | **2** | **0** | **94%** |

## Failed Tests
1. **TC-005** (Shipment Overview)
   - Issue: Filter by date range not working
   - Bug: BUG-042

2. **TC-012** (Shipment Overview)
   - Issue: Export CSV returns 500 error
   - Bug: BUG-043

## Blockers
- [None / List blockers]

## Notes
- [Additional observations]

## Sign-off
- [ ] All P0 tests passed
- [ ] All bugs documented
- [ ] Ready for release: YES / NO / WITH KNOWN ISSUES
```

### bug-reports/
Bug documentation and tracking:

**Organization:**
```
bug-reports/
├── BUG-001-filter-date-range-broken.md
├── BUG-002-export-csv-500-error.md
└── README.md
```

**Naming Convention:**
- `BUG-{number}-{short-description}.md`
- Number increments globally across all bugs

**Bug Report Template:**
```markdown
# BUG-XXX: [Short Title]
**Status:** Open | In Progress | Fixed | Won't Fix | Duplicate
**Severity:** P0 (Critical) | P1 (High) | P2 (Medium) | P3 (Low)
**Feature:** [Feature name]
**Found In:** [Version/Build]
**Environment:** Dev | Staging | Production

## Description
[Clear description of the bug]

## Steps to Reproduce
1. [Step 1]
2. [Step 2]
3. [Step 3]

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Screenshots/Logs
[Attach or link to screenshots, error logs, network traces]

## Related Test Case
- **UAT Test:** TC-XXX from UAT-001
- **Story:** ST-XXX from USL-001
- **AC:** AC-XXX from USD-001

## Impact
[How does this affect users/business?]

## Workaround
[Temporary workaround if available, or "None"]

## Fix Notes
**Fixed By:** [Developer name]
**Fixed In:** [Version/commit]
**Fix Description:** [What was changed]
**Verification:** [How to verify fix]

## References
- JIRA: [JIRA-123](link)
- GitHub Issue: [#456](link)
- Slack Thread: [link]
```

### regression-suites/
Curated subsets of UAT for regression testing:

**Purpose:** Not every UAT test needs to run on every deployment. Regression suites are prioritized subsets.

**Organization:**
```
regression-suites/
├── smoke-test-suite.csv        # P0 tests only, runs on every deploy
├── full-regression-suite.csv   # All tests, runs weekly
├── pre-release-suite.csv       # Comprehensive, runs before releases
└── README.md
```

**CSV Format:**
Same as UAT CSV, but with additional column:
```csv
suite_name,story_id,test_case_id,scenario,given,when,then,priority,test_result
smoke,ST-001,TC-001,"Open Shipment Overview",...
```

**Suite Definitions:**
- **Smoke Test:** P0 tests only, covers critical paths, runs on every deploy
- **Full Regression:** All P0 + P1 tests, runs weekly or before major releases
- **Pre-Release:** All tests (P0 + P1 + P2), runs before production releases

## Workflow

### UAT → Test Execution Flow

```
1. Development Complete
   └─> Feature ready for testing

2. Copy UAT to Test Run
   └─> cp /specs/{feature}/uat.csv /qa/test-runs/{date}/

3. Execute Tests
   └─> Update test_result column: Pass | Failed | Not Testable

4. Document Failures
   └─> Create bug reports in /qa/bug-reports/

5. Create Test Summary
   └─> Write test-summary.md with results

6. Update Regression Suite
   └─> Add P0/P1 tests to appropriate suites
```

### Bug Lifecycle

```
1. Bug Found
   └─> Create BUG-XXX.md in /qa/bug-reports/
   └─> Status: Open

2. Triaged
   └─> Assign severity (P0-P3)
   └─> Link to JIRA/GitHub

3. In Development
   └─> Status: In Progress
   └─> Developer assigned

4. Fixed
   └─> Status: Fixed
   └─> Document fix version
   └─> Add verification steps

5. Verified
   └─> Re-run test case
   └─> Update test_result to Pass
   └─> Close bug
```

## Test Result Values

In UAT CSV `test_result` column:

| Value | Meaning |
|-------|---------|
| `Pass` | Test executed successfully, all assertions passed |
| `Failed` | Test executed but assertions failed (bug found) |
| `Not Testable` | Cannot execute (blocked, environment issue, or not implemented yet) |
| `Skipped` | Intentionally skipped for this run |

## Best Practices

### Do:
- ✅ Copy UAT from /specs/ before testing (don't edit originals)
- ✅ Update test_result for every test case
- ✅ Create bug reports for all failures
- ✅ Link bugs to test cases, stories, and ACs
- ✅ Maintain regression suites
- ✅ Archive old test runs (keep last 6 months)

### Don't:
- ❌ Edit UAT files in /specs/ during testing (use copies)
- ❌ Skip documenting bugs ("will remember later")
- ❌ Mark tests as "Pass" without executing
- ❌ Forget to update test summaries
- ❌ Leave bugs without severity/priority

## Metrics & Reporting

### Key Metrics to Track
- **Pass Rate:** (Passed / Total Executed) × 100
- **Test Coverage:** Stories with UAT / Total Stories
- **Bug Density:** Bugs Found / Stories Tested
- **Fix Rate:** Bugs Fixed / Total Bugs

### Weekly QA Report Template
```markdown
# QA Report - Week of [Date]

## Testing Activity
- Features Tested: [List]
- Total Tests Executed: [Number]
- Pass Rate: [Percentage]

## Bugs
- New Bugs: [Number]
- Bugs Fixed: [Number]
- Open Bugs: [Number] (P0: X, P1: Y, P2: Z)

## Blockers
- [List or None]

## Next Week
- [Planned testing activities]
```

## Integration with CI/CD

For automated testing:
- Regression suites can be converted to automated tests
- Test results can be imported from CI/CD tools
- See `/tooling/pipelines/` for automation scripts

## Related Directories

- `/specs/{feature}/uat.csv` - Source UAT test cases
- `/specs/{feature}/usd.csv` - Acceptance criteria being tested
- `/tooling/` - Test automation tools and scripts
