# AI Prompts for Wireframes

## Overview

Use these prompts with AI agents (Claude, GPT-4, etc.) to generate wireframes from USD acceptance criteria.

---

## Prompt 1: Generate Wireframe from USD

```
I have a User Story with acceptance criteria. Please create a wireframe following these requirements:

**Input:**
- Story ID: ST-XXX
- Story Title: [title]
- Acceptance Criteria: AC-XXX, AC-YYY, AC-ZZZ (from USD file)

**Output Format:**
1. Text description following template-text-wireframe.md format
2. ASCII wireframe following template-ascii-wireframe.md format
3. Component list (ShadCN components needed)
4. AC mapping (which AC each element addresses)

**Design Rules:**
- Follow design-rules/color-system.md
- Follow design-rules/spacing-system.md
- Follow design-rules/layout-system.md
- Follow design-rules/responsive-design.md

**Acceptance Criteria:**
[Paste AC list from USD here]

Please generate the wireframe.
```

---

## Prompt 2: Create Multiple Screen Wireframes

```
I need wireframes for a user flow with multiple screens.

**Flow:** [e.g., "User Registration Flow"]
**Screens:** [e.g., "1. Registration Form, 2. Email Verification, 3. Profile Setup, 4. Success"]

**Story IDs:** ST-XXX, ST-YYY, ST-ZZZ
**Acceptance Criteria:** AC-XXX through AC-YYY

For each screen, provide:
1. Wireframe ID (WF-001, WF-002, etc.)
2. Text description
3. ASCII wireframe
4. Navigation between screens
5. Components required

Follow the wireframe template format.
```

---

## Prompt 3: Generate Responsive Wireframes

```
Create responsive wireframes showing mobile, tablet, and desktop layouts.

**Story:** ST-XXX - [title]
**Screen:** [screen name]
**Acceptance Criteria:** [paste ACs]

Show three versions:
1. Mobile (< 640px) - single column, stacked
2. Tablet (640-1024px) - adapted layout
3. Desktop (> 1024px) - full layout

Use ASCII art for each breakpoint.
```

---

## Prompt 4: Refine Existing Wireframe

```
I have a wireframe that needs refinement.

**Current Wireframe:** [paste wireframe]

**Issues to address:**
1. [Issue 1 - e.g., "Missing error states"]
2. [Issue 2 - e.g., "Unclear navigation"]
3. [Issue 3 - e.g., "Not mobile-friendly"]

**Additional Requirements:**
- [Any new ACs or requirements]

Please refine the wireframe to address these issues.
```

---

## Prompt 5: Validate Wireframe Against ACs

```
Validate this wireframe against acceptance criteria.

**Wireframe:** [paste wireframe]

**Acceptance Criteria:**
[paste AC list from USD]

Check if:
1. All ACs are addressed by UI elements
2. All UI elements map to ACs
3. Layout follows design rules
4. Components are appropriate
5. Responsive behavior is defined

Provide feedback on gaps or issues.
```

---

## Prompt 6: Generate ASCII Art from Description

```
Convert this text description into ASCII wireframe art.

**Text Description:**
[paste text description]

**Requirements:**
- Use Level 2 detail (zones + elements)
- Width: 60-80 characters
- Show: [specific elements to highlight]
- Include legend if using custom symbols

Generate the ASCII wireframe.
```

---

## Prompt 7: Create Data Table Wireframe

```
Create a wireframe for a data table.

**Story:** ST-XXX - View [Entity] List
**Acceptance Criteria:**
- AC-XXX: Table shows columns [list columns]
- AC-YYY: Table supports sorting
- AC-ZZZ: Table supports filtering
- AC-AAA: Table has pagination

**Requirements:**
- Use Tanstack Table
- Show sorting indicators
- Show filter UI
- Show pagination controls
- Include empty state

Generate both text description and ASCII wireframe.
```

---

## Prompt 8: Create Form Wireframe

```
Create a wireframe for a form.

**Story:** ST-XXX - Create/Update [Entity]
**Acceptance Criteria:**
[paste AC list]

**Form Fields:**
[list fields with types and validation]

**Requirements:**
- Mark required fields
- Show validation error placement
- Include submit/cancel buttons
- Show field helper text
- Consider multi-step if complex

Generate wireframe with both text and ASCII.
```

---

## Context to Provide AI

When using these prompts, always provide:

1. **Framework Templates:**
   - Link to template-text-wireframe.md
   - Link to template-ascii-wireframe.md
   - Link to rules.md

2. **Design Rules:**
   - Color system
   - Spacing system
   - Typography
   - Component standards
   - Accessibility requirements

3. **PO Artifacts:**
   - PRD context
   - Story details from USM
   - Acceptance criteria from USD files (`usd/*.md`)

4. **Examples:**
   - Link to examples.md
   - Reference similar wireframes

---

## Best Practices

**Do:**
- Provide complete AC list
- Reference existing design patterns
- Specify responsive requirements
- Include edge cases (empty, error, loading states)

**Don't:**
- Ask for implementation code (this is design stage)
- Forget to specify component library (ShadCN)
- Skip AC mapping
- Ignore accessibility

---

## Example Complete Prompt

```
Create a wireframe for a login screen.

**Context:**
- Feature: User Authentication (PRD-001)
- Story: ST-001 - User can log in with email and password
- Template: Use template-text-wireframe.md format

**Acceptance Criteria:**
- AC-001: Login form is visible with email input field
- AC-002: Login form has password input field with show/hide toggle
- AC-003: Login form has "Remember me" checkbox
- AC-004: Login form has "Forgot password?" link
- AC-005: Login button is disabled until both fields are filled
- AC-006: Form shows validation errors below each field
- AC-007: Successful login redirects to dashboard

**Design Requirements:**
- Use ShadCN Input, Button, Checkbox components
- Follow design-rules/spacing-system.md for spacing
- Center the form on the page
- Show mobile and desktop layouts
- Include error state wireframe

**Output:**
1. Wireframe ID: WF-001
2. Text description with all sections
3. ASCII wireframe for desktop
4. ASCII wireframe for mobile
5. Component list
6. AC mapping table

Generate the complete wireframe.
```

---

**Related:**
- [Wireframe Rules](rules.md)
- [Quality Gate](quality-gate.md)
- [Examples](examples.md)
