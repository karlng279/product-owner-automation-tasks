# USD Prompt Templates

These prompts guide the generation, review and update of User Story Details (USD) files based on the USL, USM and PRD.

## 1. Generate USD File from USL Story

```
You are an experienced Product Owner writing detailed acceptance criteria.

You must follow:
  - "[Rules] USD Creation & Maintenance" (rules.md)
  - The USD Markdown format (see template.md and example.md)

Task:
For the given story from the USL, generate a complete USD Markdown file containing acceptance criteria. Fill in all sections: UI Elements, UI Behavior, Logic, Special Notes, NFRs, Dependencies, and Estimate.

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USM:
<<<
[PASTE USM MARKDOWN]
>>>
Story from USL:
<<<
[PASTE THE SPECIFIC STORY SECTION FROM USL]
>>>

Output:
Return the complete USD Markdown file content.
File should be named: ST-XXX.md (matching the story ID)
```

## 2. Generate All USD Files for a Feature

```
You are an experienced Product Owner writing detailed acceptance criteria.

You must follow:
  - "[Rules] USD Creation & Maintenance" (rules.md)
  - The USD Markdown format (see template.md)

Task:
For each story in the USL, generate a separate USD Markdown file. Each file should contain all acceptance criteria sections with properly labeled ACs.

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USM:
<<<
[PASTE USM MARKDOWN]
>>>
USL:
<<<
[PASTE COMPLETE USL MARKDOWN]
>>>

Output:
Return each USD file separately, clearly marked with the filename:

--- FILE: usd/ST-001.md ---
[content]

--- FILE: usd/ST-002.md ---
[content]

(continue for all stories)
```

## 3. Review and Improve a USD File

```
You are reviewing a User Story Details file for clarity and testability.

You must follow the "[Rules] USD Creation & Maintenance" and consider the PRD, USM and USL.

Task:
1. Check each AC for being atomic, observable, and binary.
2. Verify that UI elements, behavior, and logic are correctly categorized.
3. Ensure NFRs have specific metrics (no vague terms).
4. Check that dependencies are valid.
5. Identify issues and propose improvements.

Inputs:
Story from USL:
<<<
[PASTE THE STORY FROM USL]
>>>
USD File:
<<<
[PASTE USD MARKDOWN FILE CONTENT]
>>>

Output:
1. A bullet list of issues found.
2. The revised USD Markdown file.
```

## 4. Update USD File from Change Requests

```
You are maintaining a User Story Details file over time.

You must:
  - Preserve existing AC labels when possible.
  - Add new ACs with the next sequential number.
  - Keep the file aligned with the USL and PRD.
  - Update the Last Updated date.

Task:
Given the current USD file and a list of change requests (new ACs, changed rules, dropped behavior), update the file accordingly.

Inputs:
Current USD File:
<<<
[PASTE CURRENT USD MARKDOWN]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return the complete updated USD Markdown file.
```

## 5. Convert CSV USD Row to Markdown File

```
You are migrating a legacy CSV-format USD row to the new Markdown file format.

You must:
  - Parse the CSV columns into the appropriate Markdown sections.
  - Preserve all AC labels and content.
  - Format according to template.md structure.

Task:
Convert the following CSV USD row to a Markdown USD file.

Inputs:
CSV Headers:
story_id,acceptance_ui_elements,acceptance_ui_behavior,acceptance_logic,acceptance_special_notes,non_functional_requirements,dependencies,estimate_story_points

CSV Row:
<<<
[PASTE CSV ROW]
>>>

Story info from USL:
<<<
[PASTE STORY SUMMARY AND METADATA]
>>>

Output:
Return the complete USD Markdown file content.
```

## 6. Add Traceability to USD File

```
You are adding traceability links to a USD file after UAT and Design specs are created.

Task:
Update the Traceability section of the USD file to link each AC to its corresponding UAT test cases and Design references.

Inputs:
USD File:
<<<
[PASTE USD MARKDOWN]
>>>
UAT File:
<<<
[PASTE UAT MARKDOWN FOR THIS STORY]
>>>
Design References (optional):
<<<
[LIST ANY WF-XXX, COMP-XXX, INT-XXX REFERENCES]
>>>

Output:
Return the USD file with updated Traceability section.
```
