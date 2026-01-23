# UAT Prompt Templates

Prompts for generating, reviewing and updating UAT test case files based on the USD.

## 1. Generate UAT Files from USD

```
You are a QA-minded Product Owner writing UAT test cases in BDD style.

You must follow:
  - "[Rules] UAT Creation & Maintenance" (rules.md)
  - The UAT Markdown file format with per-story files

Task:
For each story in the USD folder, generate a corresponding UAT file in the uat/ folder. Each file should contain test cases covering logical clusters of acceptance criteria, including at least one happy path and any important edge or error cases. Set Test Result to "Not Tested".

Structure each UAT file as:
- Header with Story, USD Reference, Last Updated
- Test cases with TC-XXX labels, scenario, precondition, Given/When/Then table
- AC References, Test Result, Notes for each test case
- Summary table listing all test cases
- AC Coverage Matrix

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USL:
<<<
[PASTE usl.md CONTENT]
>>>
USD Files:
<<<
[PASTE USD FILE CONTENTS - one per story]
>>>

Output:
Return UAT Markdown files, one per story. Name each file ST-XXX.md matching the story ID.
```

## 2. Generate UAT for a Single Story

```
You are a QA-minded Product Owner writing UAT test cases in BDD style.

You must follow:
  - "[Rules] UAT Creation & Maintenance" (rules.md)
  - The UAT Markdown file format

Task:
Generate a UAT file for the given story. Include:
- At least one happy-path scenario (P0)
- Key edge cases (P1)
- Error scenarios if applicable (P1)
- Summary table and AC Coverage Matrix

Inputs:
Story ID: ST-XXX
Story Summary: [Summary from USL]
USD File:
<<<
[PASTE CONTENT OF usd/ST-XXX.md]
>>>

Output:
Return the complete UAT Markdown file content for uat/ST-XXX.md.
```

## 3. Review and Improve UAT Files

```
You are reviewing UAT test case files for clarity, coverage and traceability.

You must follow the "[Rules] UAT Creation & Maintenance" and consider the PRD, USL and USD.

Task:
1. Check that all must-have ACs have at least one test case covering them.
2. Verify at least one happy-path scenario exists (P0).
3. Ensure Given/When/Then clauses are clear and business-readable.
4. Verify AC References correctly map to AC labels in the corresponding USD file.
5. Check Summary table and AC Coverage Matrix are accurate.
6. Suggest improvements and produce revised UAT files.

Inputs:
PRD:
<<<
[PASTE PRD]
>>>
USL:
<<<
[PASTE usl.md]
>>>
USD Files:
<<<
[PASTE USD FILE CONTENTS]
>>>
UAT Files:
<<<
[PASTE UAT FILE CONTENTS]
>>>

Output:
1. A bullet list of issues found per file.
2. The revised UAT Markdown files.
```

## 4. Update UAT from Change Requests

```
You are maintaining UAT test case files as the product evolves.

You must:
  - Preserve existing test_case_id values where possible
  - Keep UAT aligned with the USD
  - Update Summary table and AC Coverage Matrix

Task:
Given the current UAT files and a list of change requests (new ACs, changed behaviour, dropped scope), update the UAT accordingly. Add new test cases or modify existing ones as required. Set Test Result to "Not Tested" for new or modified scenarios.

Inputs:
Current UAT File:
<<<
[PASTE CONTENT OF uat/ST-XXX.md]
>>>
Current USD File:
<<<
[PASTE CONTENT OF usd/ST-XXX.md]
>>>
Change Requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return the updated UAT Markdown file content.
```

## 5. Add Traceability to USD After UAT Creation

```
You are updating the USD file to link ACs to their test cases.

Task:
After UAT files have been created, update the Traceability section in each USD file to reference the test cases that cover each AC.

Inputs:
USD File:
<<<
[PASTE CONTENT OF usd/ST-XXX.md]
>>>
UAT File:
<<<
[PASTE CONTENT OF uat/ST-XXX.md]
>>>

Output:
Return the USD file with the updated Traceability table showing:
| AC ID | UAT Reference | Design Reference |
|-------|---------------|------------------|
| AC-001 | TC-001, TC-002 | WF-XXX |
```

## 6. Generate AC Coverage Report

```
You are generating a coverage report to identify gaps.

Task:
Analyse the USD and UAT files for a story and produce a coverage report showing:
1. Which ACs have test coverage
2. Which ACs are missing test coverage
3. Test cases with no AC references (orphaned tests)

Inputs:
USD File:
<<<
[PASTE CONTENT OF usd/ST-XXX.md]
>>>
UAT File:
<<<
[PASTE CONTENT OF uat/ST-XXX.md]
>>>

Output:
A coverage report in Markdown format with:
- Total AC count
- Covered AC count and percentage
- List of uncovered ACs
- List of orphaned test cases (if any)
- Recommendations
```
