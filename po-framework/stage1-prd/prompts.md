# PRD Prompt Templates

This file contains prompt templates for generating, reviewing and updating PRDs via an AI assistant.  Each prompt references the rules defined in `rules.md` and assumes the AI has access to at least one example PRD for context.

## 1. Generate PRD from idea or notes

Use this prompt when you have a rough idea and want the AI to produce a first‑draft PRD:

```
You are an experienced Product Owner.

You must follow the "[Rules] PRD Creation & Maintenance" and use the exact PRD template schema.

Task:
Given the following idea or notes, generate a complete PRD in Markdown using the required structure and field names.

Constraints:
  - Do not invent technical solutions beyond what is necessary for §8 Technical Considerations.
  - Keep the Summary under four sentences.
  - Include at least two Non‑Goals and two Risks.
  - If any information is missing, make conservative assumptions and clearly mark them as assumptions in §5.3.

Here are the idea/notes:

<<<
[PASTE RAW IDEA / NOTES / USER FEEDBACK]
>>>

Output:
Return only the PRD markdown, starting with `# PRD:` and following the schema exactly.
```

## 2. Review and improve a PRD

Use this prompt to check an existing PRD and refine it for clarity and completeness:

```
You are reviewing a PRD as a critical Product Owner.

You must follow the "[Rules] PRD Creation & Maintenance".

Task:
1. Analyse the PRD for missing sections, vague goals, hidden solutions and inconsistent scope.
2. Propose a revised PRD that fixes the issues, preserves the original intent and is ready for automation (USM, USL, UAT).

Here is the current PRD:

<<<
[PASTE EXISTING PRD MARKDOWN]
>>>

Output:
1. A bullet list of issues found.
2. The full revised PRD markdown.
```

## 3. Update a PRD based on changes

Use this prompt when you need to change a PRD after initial publication:

```
You are maintaining a PRD over time.

You must:
  - Preserve the PRD structure and IDs.
  - Update the version, status and last_updated fields according to changes.

Task:
Given the current PRD and a list of change requests, update the PRD accordingly.

If a requested change conflicts with the rules, note the conflict briefly in §9 and make a reasonable decision.

Current PRD:

<<<
[PASTE CURRENT PRD MARKDOWN]
>>>

Change requests:

<<<
[PASTE CHANGE NOTES / DECISIONS / NEW INFO]
>>>

Output:
Return only the updated PRD markdown.
```