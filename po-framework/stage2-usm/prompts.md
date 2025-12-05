# USM Prompt Templates

These prompts help generate, review and update a User Story Map based on a PRD and design notes.

## 1. Generate USM from a PRD

```
You are an experienced Product Owner.

You must follow:
  - "[Rules] USM Creation & Maintenance"
  - The canonical USM schema
  - An example USM if available

Task:
Given the PRD below, generate a USM in Markdown that:
  - Identifies 3–7 user activities matching the PRD’s user goals and use cases.
  - Defines 2–6 steps per activity following the narrative flows.
  - Allocates story IDs (ST‑XXX) to each step.

Constraints:
  - Do not include release slicing.
  - Do not use technical or UI jargon in names.
  - Keep descriptions short and action‑oriented.

PRD:
<<<
[PASTE PRD MARKDOWN HERE]
>>>

Output:
Return only the USM markdown starting with `# USM:`.
```

## 2. Review and improve a USM

```
You are reviewing a USM for consistency and quality.

You must follow the "[Rules] USM Creation & Maintenance" and the PRD that this USM is based on.

Task:
1. Compare the USM against the PRD: do activities align with user goals and use cases?  Do steps follow logical flows?  Are key flows missing?
2. Identify vague names, missing IDs or mis‑grouped stories.
3. Propose an improved USM that fixes the issues and preserves the original intent.

Inputs:
PRD:
<<<
[PASTE PRD HERE]
>>>
USM:
<<<
[PASTE USM HERE]
>>>

Output:
1. A bullet list of issues found.
2. The full revised USM markdown.
```

## 3. Update a USM from change requests

```
You are maintaining a USM over time.

You must:
  - Preserve existing IDs where possible.
  - Keep the USM aligned with the PRD and USM rules.

Task:
Given the current USM and a list of change requests, update the USM accordingly.

If a requested change conflicts with the USM rules or the PRD, make a reasonable decision and note the conflict briefly in the `## Notes` section.

Inputs:
Current USM:
<<<
[PASTE CURRENT USM]
>>>
Change requests:
<<<
[PASTE CHANGE NOTES]
>>>

Output:
Return only the updated USM markdown.
```