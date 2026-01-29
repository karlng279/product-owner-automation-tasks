# Stage 3 – USL Creation & Maintenance Rules

The User Story List (USL) is a single Markdown file that indexes every user story for a feature. It provides a readable overview with summary tables and detailed story descriptions.

## 1. Purpose

* Provide a single source of truth for all stories belonging to a PRD.
* Capture essential metadata such as MoSCoW priority, status, module and tags.
* Enable easy navigation with anchor links between summary table and story details.
* Feed the creation of detailed acceptance criteria (USD) and UAT scenarios.

## 2. Relationship to Other Artefacts

* Each story maps to exactly one story in the USM (via the `story_id`).
* USL is downstream of PRD and USM, and upstream of USD and UAT.
* Changing a story ID in the USL requires updating the USM and creating/updating corresponding USD and UAT files.

**Artefact Flow:**
```
PRD → USM → USL (usl.md) → USD (usd/*.md) → UAT (uat/*.md)
```

## 3. File Format

The USL is stored as a single Markdown file named `usl.md` in the feature's `po/` folder.

### File Location
```
features/{feature-name}/po/usl.md
```

### File Structure

```markdown
# User Story List

**PRD:** PRD-XXX - Feature Name
**USM:** USM-XXX
**Last Updated:** YYYY-MM-DD

---

## Summary

| Priority | Count | Story Points |
|----------|-------|--------------|
| Must-have | X | XX |
| Should-have | X | XX |
| **Total** | **X** | **XX** |

---

## Stories by Module

### [Module Name]

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| [ST-001](#st-001-summary) | Summary | Must-have | Draft | 3 |

---

## Story Details

### ST-001: Summary

- **Activity:** ACT-XXX / **Step:** STEP-XXX
- **Module:** Module Name
- **Priority:** Must-have
- **Status:** Draft
- **Story Points:** 3
- **Tags:** tag1, tag2
- **Dependencies:** —
- **Jira:** —

> As a [user], I want [action] so that [benefit].
```

## 4. Field Definitions

### Header Fields
* **PRD:** Reference to parent PRD (e.g., `PRD-001 - Shipment Dashboard`)
* **USM:** Reference to parent USM (e.g., `USM-001`)
* **Last Updated:** Date of last modification (YYYY-MM-DD format)

### Summary Table
Aggregates story counts and points by MoSCoW priority. Keep this updated as stories are added or changed.

### Stories by Module Table
| Column | Description |
|--------|-------------|
| ID | Unique identifier (`ST-001`, `ST-002`, …). Links to story detail section. |
| Summary | One-line title for the story |
| Priority | MoSCoW priority |
| Status | Current lifecycle status |
| Points | Story point estimate |

### Story Detail Fields
| Field | Description | Required |
|-------|-------------|----------|
| **Activity/Step** | IDs from the USM | Yes |
| **Module** | Functional area name | Yes |
| **Priority** | `Must-have`, `Should-have`, `Could-have`, `Won't-have` | Yes |
| **Status** | `Draft`, `Refined`, `Ready`, `In Progress`, `Done`, `Discarded` | Yes |
| **Story Points** | Effort estimate | Yes |
| **Tags** | Comma-separated labels for filtering | Yes |
| **Dependencies** | Other story IDs this depends on, or `—` if none | Yes |
| **Jira** | Jira ticket ID once created, or `—` if none | Yes |
| **User Story** | Full "As a … I want … so that …" sentence (blockquote) | Yes |

## 5. Mapping Rules: USM → USL

1. **Create stories per step:** For each step in the USM, create one or more stories that collectively cover the step's intent.

2. **Populate metadata:** Copy `prd_id`, `usm_id`, `activity_id` and `step_id` from the USM. Assign a meaningful module name.

3. **Write user stories:** Use the standard template:
   ```
   As a <actor>, I want <action>, so that <benefit>.
   ```

4. **Assign priorities:** Determine the MoSCoW priority based on the PRD's scope and goals.

5. **Set initial status:** New stories usually start as `Draft`. Update to `Refined` or `Ready` after AC are defined in USD.

6. **Create anchor links:** Link each story ID in the table to its detail section:
   ```markdown
   | [ST-001](#st-001-summary-text) | Summary text | ...
   ```
   Anchor format: lowercase story ID + hyphenated summary (e.g., `#st-001-open-shipment-overview-page`)

## 6. Story Quality Heuristics – INVEST & FIRST

Use these heuristics to decide whether a story is well-formed before creating its USD:

* **Independent:** The story can be delivered separately from other stories.
* **Negotiable:** The story is a starting point for conversation, not a fixed contract.
* **Valuable:** It delivers value to the customer or user.
* **Estimable:** The team can estimate its effort with reasonable accuracy.
* **Small:** The story is small enough to deliver within a sprint.
* **Testable:** It can be tested via acceptance criteria.

Each story should also be capable of generating FIRST-compliant tests downstream (Fast, Independent, Repeatable, Self-validating, Timely).

## 7. Naming Conventions

* **File name:** `usl.md` (always lowercase)
* **Story IDs:** `ST-001`, `ST-002`, … (sequential, zero-padded)
* **Anchor format:** `#st-xxx-hyphenated-summary` (lowercase, hyphens for spaces)

## 8. Quality Gate

A USL is **ready for USD creation** when:

* Every story in the USM appears exactly once in the USL.
* All required fields are filled in for every story.
* Summaries and user stories are clear, valuable and follow the standard pattern.
* `moscow_priority` values are from the allowed set.
* Summary table totals match the actual story counts.
* All anchor links work correctly.

If any of these items are not met, refine the USL before moving to Stage 4.

## 9. Example

See [example.md](example.md) for a complete USL example.

## 10. Template

See [template.md](template.md) for a blank USL template with instructions.
