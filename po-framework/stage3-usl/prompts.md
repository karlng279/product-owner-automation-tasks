# USL Prompt Templates

These prompts help generate, review and update the User Story List from the USM and PRD.

## 1. Generate USL from USM and PRD

```
You are an experienced Product Owner.

You must follow:
  - "[Rules] USL Creation & Maintenance" (rules.md)
  - The USL Markdown format (see template.md and example.md)
  - The provided USM and PRD for context

Task:
Generate a User Story List as a Markdown file for the given PRD and USM. For each step in the USM, create one or more user stories using the "As a … I want … so that …" template. Assign MoSCoW priorities, initial status, story points, and tags.

The output must include:
1. Header with PRD, USM references and date
2. Summary table with priority counts and story points
3. Stories by Module table with anchor links
4. Story Details section with full metadata for each story

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
Return only the complete Markdown content (no extra explanation).
Use the format from template.md.
```

## 2. Review and Improve a USL

```
You are reviewing a User Story List for clarity and consistency.

You must follow:
  - "[Rules] USL Creation & Maintenance" (rules.md)
  - The PRD and USM for this feature

Task:
1. Check that every story in the USM appears exactly once in the USL.
2. Ensure summaries and user_story sentences are clear, valuable and non-duplicative.
3. Verify that MoSCoW priorities and statuses make sense.
4. Check that summary table totals are accurate.
5. Verify all anchor links are correctly formatted.
6. Suggest improvements and produce a revised USL.

Inputs:
PRD:
<<<
[PASTE PRD HERE]
>>>
USM:
<<<
[PASTE USM HERE]
>>>
Current USL (Markdown):
<<<
[PASTE CURRENT USL MARKDOWN]
>>>

Output:
1. A bullet list of issues found.
2. The full revised USL Markdown.
```

## 3. Update a USL Based on Changes

```
You are maintaining a User Story List over time.

You must:
  - Preserve existing `story_id` values where possible.
  - Keep the USL aligned with the USM and PRD.
  - Update the summary table totals.
  - Update the Last Updated date.

Task:
Given the current USL and a list of change requests (new stories, removed stories, changed priorities), update the USL accordingly. Flag any conflicts with the USM and adjust as necessary.

Inputs:
Current USL (Markdown):
<<<
[PASTE CURRENT USL MARKDOWN]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return only the updated USL Markdown.
```

## 4. Add New Stories to Existing USL

```
You are adding new user stories to an existing USL.

You must:
  - Assign the next available story_id (e.g., if ST-008 exists, use ST-009).
  - Place the story in the appropriate module section.
  - Update the summary table totals.
  - Create proper anchor links.
  - Update the Last Updated date.

Task:
Add the following new stories to the USL. Determine appropriate priorities, status, and tags based on the PRD goals.

Inputs:
Current USL (Markdown):
<<<
[PASTE CURRENT USL MARKDOWN]
>>>
New stories to add:
<<<
[DESCRIBE NEW STORIES - include user type, action, benefit for each]
>>>

Output:
Return the complete updated USL Markdown.
```

## 5. Convert CSV USL to Markdown Format

```
You are migrating a legacy CSV-format USL to the new Markdown format.

You must:
  - Preserve all story data from the CSV.
  - Create the proper Markdown structure with header, summary, module tables, and story details.
  - Calculate summary totals from the data.
  - Generate proper anchor links.

Task:
Convert the following CSV USL to Markdown format following the template.md structure.

Inputs:
CSV USL:
<<<
[PASTE CSV CONTENT]
>>>

Output:
Return the complete USL in Markdown format.
```
