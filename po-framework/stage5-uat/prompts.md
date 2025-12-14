# UAT Prompt Templates

Prompts for generating, reviewing and updating UAT scenarios based on the USD.

## 1. Generate UAT from USD

```
You are a QA‑minded Product Owner writing UAT scenarios in BDD style.

You must follow:
  - "[Rules] UAT Creation & Maintenance"
  - The canonical UAT CSV schema

Task:
For each story in the USD, generate a set of UAT test cases.  Each scenario should cover a logical cluster of acceptance criteria, including at least one happy path and any important edge or error cases.  Set `test_result` to `Not Testable`.

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USL:
<<<
[PASTE USL CSV]
>>>
USD:
<<<
[PASTE USD CSV]
>>>

Output:
Return only the UAT CSV content.
```

## 2. Review and improve a UAT

```
You are reviewing UAT scenarios for clarity, coverage and traceability.

You must follow the "[Rules] UAT Creation & Maintenance" and consider the PRD, USL and USD.

Task:
1. Check that all must‑have stories have at least one happy‑path and one key edge case scenario.
2. Ensure that the Given/When/Then clauses are clear and business‑readable.
3. Verify that `ac_refs` correctly map to AC labels in the USD.
4. Suggest improvements and produce a revised UAT CSV.

Inputs:
PRD:
<<<
[PASTE PRD]
>>>
USL:
<<<
[PASTE USL CSV]
>>>
USD:
<<<
[PASTE USD CSV]
>>>
UAT:
<<<
[PASTE UAT CSV]
>>>

Output:
1. A bullet list of issues found.
2. The revised UAT CSV.
```

## 3. Update a UAT from change requests

```
You are maintaining UAT scenarios as the product evolves.

You must:
  - Preserve existing test_case_id values where possible.
  - Keep UAT aligned with the USD and USL.

Task:
Given the current UAT and a list of change requests (new ACs, changed behaviour, dropped scope), update the UAT accordingly.  Add new scenarios or modify existing ones as required, and initialise `test_result` for new scenarios to `Not Testable`.

Inputs:
Current UAT:
<<<
[PASTE CURRENT UAT CSV]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return only the updated UAT CSV.
```