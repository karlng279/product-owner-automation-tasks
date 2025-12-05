# USL Prompt Templates

These prompts help generate, review and update the User Story List from the USM and PRD.

## 1. Generate USL from USM and PRD

```
You are an experienced Product Owner.

You must follow:
  - "[Rules] USL Creation & Maintenance"
  - The canonical USL CSV schema
  - The provided USM and PRD for context

Task:
Generate a User Story List as CSV rows for the given PRD and USM.  For each step in the USM, create one or more user stories using the “As a … I want … so that …” template.  Assign MoSCoW priorities, initial status and tags.

Inputs:
PRD:
<<<
[PASTE PRD MARKDOWN]
>>>
USM:
<<<
[PASTE USM MARKDOWN]
>>>

Output:
Return only the CSV content (no extra explanation).
```

## 2. Review and improve a USL

```
You are reviewing a User Story List for clarity and consistency.

You must follow:
  - "[Rules] USL Creation & Maintenance"
  - The PRD and USM for this feature

Task:
1. Check that every story in the USM appears exactly once in the USL.
2. Ensure summaries and user_story sentences are clear, valuable and non‑duplicative.
3. Verify that MoSCoW priorities and statuses make sense.
4. Suggest improvements and produce a revised USL.

Inputs:
PRD:
<<<
[PASTE PRD HERE]
>>>
USM:
<<<
[PASTE USM HERE]
>>>
Current USL (CSV):
<<<
[PASTE CURRENT USL CSV]
>>>

Output:
1. A bullet list of issues.
2. The full revised USL CSV.
```

## 3. Update a USL based on changes

```
You are maintaining a User Story List over time.

You must:
  - Preserve existing `story_id` values where possible.
  - Keep the USL aligned with the USM and PRD.

Task:
Given the current USL and a list of change requests (new stories, removed stories, changed priorities), update the USL accordingly.  Flag any conflicts with the USM and adjust as necessary.

Inputs:
Current USL (CSV):
<<<
[PASTE CURRENT USL CSV]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return only the updated USL CSV.
```