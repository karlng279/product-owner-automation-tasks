# AI Prompts for Interaction Specifications

## Overview

Use these prompts to generate interaction specifications with state diagrams using AI assistance. Each prompt provides context and instructions for creating complete interaction flows.

---

## Prompt 1: Generate Interaction Spec from Component Spec

### Purpose
Create a complete interaction specification with state diagram from an existing component specification.

### Prompt Template

```
I need you to create an interaction specification with a state diagram based on the following component specification.

**Context:**
- Feature: [Feature name]
- Component ID: [COMP-XXX]
- Wireframe ID: [WF-XXX]
- Story ID: [ST-XXX]
- Acceptance Criteria: [AC-XXX, AC-XXX, ...]

**Component Specification:**
[Paste component spec or relevant sections]

**Component States (from spec):**
- [State 1]: [Description]
- [State 2]: [Description]
- [State 3]: [Description]
- [Continue...]

**User Actions (from spec):**
- [Action 1]: [Trigger and behavior]
- [Action 2]: [Trigger and behavior]
- [Continue...]

**Requirements:**
- Create ASCII state diagram showing all state transitions
- Use state diagram notation: States in boxes, transitions as arrows
- Include triggers, conditions [if X], and actions /action on transitions
- Document all states with State IDs (INT-XXX-ST-YYY)
- Document all transitions with triggers, conditions, actions
- Include edge cases and error scenarios
- Map states and transitions to acceptance criteria
- Ensure all error recovery paths exist

**Interaction Type:** [Form Flow | Modal Flow | Navigation Flow | Multi-Step | Data Table]

Please generate a complete interaction specification following the template at:
[design-framework/stage3-interactions/template-interaction-flow.md]

Include:
1. Interaction overview (purpose, context, user goal, components)
2. ASCII state diagram with proper notation
3. State definitions for each state
4. Transition definitions for each transition
5. User flow description (happy path + alternatives)
6. Edge cases and error scenarios
7. Data flow (if applicable)
8. API integration (if applicable)
9. Timing & performance considerations
10. Accessibility considerations (keyboard flow, screen reader, focus)
11. Traceability mapping (states/transitions to ACs)
```

### Example Usage

```
I need you to create an interaction specification with a state diagram based on the following component specification.

**Context:**
- Feature: User Authentication
- Component ID: COMP-001
- Wireframe ID: WF-001
- Story ID: ST-001
- Acceptance Criteria: AC-001, AC-002, AC-003

**Component States (from COMP-001 spec):**
- Default: Empty form
- Loading: Submitting credentials
- Error: Invalid credentials
- Success: Authenticated, navigating

**User Actions:**
- Submit form: Validates and calls API
- Retry: After error, resets form

**Interaction Type:** Form Flow
```

---

## Prompt 2: Generate State Diagram Only

### Purpose
Create just the ASCII state diagram from a description of component behavior.

### Prompt Template

```
I need you to create an ASCII state diagram for the following component interaction.

**Component Behavior Description:**
[Describe the component behavior, user actions, state changes]

**States:**
[List all states]
- [State 1]
- [State 2]
- [Continue...]

**Transitions:**
[List all transitions]
- From [State A] to [State B]: [Trigger]
- [Continue...]

**Edge Cases:**
[List edge cases and error scenarios]
- [Case 1]
- [Case 2]

**Requirements:**
- Use ASCII art state diagram notation
- States in boxes: +------+
- Transitions as arrows with labels
- Include initial state indicator →
- Include final state indicator ⊗ (if applicable)
- Label transitions with: trigger [condition] /action
- Ensure all states have exit paths (no dead ends)
- Include error recovery paths

Please generate an ASCII state diagram following the format in:
[design-framework/stage3-interactions/template-state-diagram.md]

Make the diagram:
- Readable and well-formatted
- Properly aligned
- Complete (all paths represented)
- Clear with descriptive labels
```

---

## Prompt 3: Refine Existing State Diagram

### Purpose
Improve or update an existing state diagram.

### Prompt Template

```
I have an existing state diagram that needs refinement. Please review and improve it.

**Existing State Diagram:**
[Paste existing ASCII state diagram]

**Issues to Address:**
- [Issue 1, e.g., "Missing error states"]
- [Issue 2, e.g., "No recovery path from error"]
- [Issue 3, e.g., "Unclear transition labels"]

**Additional States/Transitions Needed:**
- [New state or transition]
- [New state or transition]

**Edge Cases to Handle:**
- [Edge case 1]
- [Edge case 2]

Please update the state diagram to:
1. Address all listed issues
2. Add missing states and transitions
3. Include edge cases and error scenarios
4. Ensure all states have exit paths
5. Improve readability and formatting
6. Use proper notation (triggers, conditions [if X], actions /action)

Provide the updated state diagram with change notes explaining what was added/changed.
```

---

## Prompt 4: Generate Multi-Step Flow Interaction

### Purpose
Create interaction specification for multi-step forms or wizards.

### Prompt Template

```
I need an interaction specification for a multi-step form/wizard.

**Flow Description:**
[Describe the multi-step process]

**Steps:**
1. **Step 1:** [Name]
   - Fields: [List fields]
   - Validation: [Validation rules]

2. **Step 2:** [Name]
   - Fields: [List fields]
   - Validation: [Validation rules]

3. **Step 3:** [Name]
   - Purpose: [e.g., Review, Summary]

[Continue for all steps...]

**Navigation:**
- Next button: [Behavior, validation requirements]
- Back button: [Behavior, preserve data?]
- Cancel button: [Behavior]

**Final Submission:**
- API endpoint: [Endpoint]
- On success: [What happens]
- On error: [What happens]

**Requirements:**
- Create state diagram with states for each step
- Include validation states
- Include back/forward navigation
- Include error handling
- Document data persistence across steps
- Map progress indicator to states

Generate complete interaction specification with:
- State diagram showing all steps
- State definitions for each step
- Transition definitions for Next/Back
- User flow description
- Edge cases (user abandons mid-way, validation errors, etc.)
```

---

## Prompt 5: Generate Modal/Dialog Interaction

### Purpose
Create interaction specification for modal/dialog flows.

### Prompt Template

```
I need an interaction specification for a modal/dialog interaction.

**Dialog Description:**
[Describe the dialog purpose and behavior]

**Dialog Type:** [Confirmation | Form | Alert | Info]

**Trigger:**
[What opens the dialog]

**Dialog Content:**
- Title: [Title text]
- Description: [Description text]
- Form fields: [If form dialog, list fields]
- Actions: [Primary action, Secondary action, Cancel]

**Behavior:**
- Open: [Animation, focus trap]
- Close: [How to close - X button, Escape, overlay click, Cancel button]
- Primary Action: [What happens when user confirms/submits]
  - Success: [Next state]
  - Error: [Error handling]
- Cancel: [What happens when user cancels]

**Requirements:**
- Create state diagram with Closed, Opening, Open, Processing, Closing states
- Include error state for failed actions
- Document focus management (initial focus, focus trap, focus return)
- Document accessibility (keyboard navigation, screen reader)
- Include animation states

Generate complete interaction specification including state diagram and all required sections.
```

---

## Prompt 6: Generate Data Table Interaction

### Purpose
Create interaction specification for data table interactions (sorting, filtering, pagination).

### Prompt Template

```
I need an interaction specification for data table interactions.

**Table:** [Table name]
**Component ID:** [COMP-XXX]

**Table Features:**
- [ ] Sorting (single or multi-column)
- [ ] Global search
- [ ] Column filters
- [ ] Pagination
- [ ] Row selection
- [ ] Row actions

**Interactions:**
1. **Sorting:**
   - User clicks column header
   - [Single or multi-column]
   - Effect: [Re-fetch data or client-side sort]

2. **Filtering:**
   - User enters search/filter
   - Debounce: [e.g., 300ms]
   - Effect: [Re-fetch data or client-side filter]

3. **Pagination:**
   - User changes page or page size
   - Effect: [Re-fetch data]

4. **Row Selection:**
   - User selects rows
   - Bulk actions: [List actions]

5. **Row Actions:**
   - [Action 1]: [Behavior]
   - [Action 2]: [Behavior]

**States:**
- Idle: Data displayed
- Loading: Fetching data
- Empty: No results
- Error: Fetch failed

**Requirements:**
- Create state diagram showing data fetching cycle
- Include transitions for sort/filter/page changes
- Include loading, empty, error states
- Document debouncing for filters
- Document bulk action flows (if applicable)

Generate complete interaction specification.
```

---

## Prompt 7: Validate Interaction Spec Against Quality Gate

### Purpose
Check if an interaction specification meets all quality gate requirements.

### Prompt Template

```
Please validate the following interaction specification against the quality gate checklist.

**Interaction Spec:**
[Paste interaction spec]

**Quality Gate Checklist:**
[Paste relevant sections from quality-gate.md]

**Validation Requirements:**
- State diagram is complete and readable
- All states defined with State IDs
- All transitions documented with triggers, conditions, actions
- All edge cases handled
- All error scenarios documented
- No dead-end states (all states have exits)
- Error recovery paths exist
- Traceability complete (states/transitions to ACs)
- Accessibility considerations documented
- API integration documented (if applicable)

Please review the interaction spec and provide:
1. **Pass/Fail Status** for each quality gate requirement
2. **Issues Found**: List of any missing or incomplete items
3. **Recommendations**: Suggestions for improvement
4. **Updated Spec**: If needed, provide corrected sections

Format output as:
- ✅ PASS: [Requirement]
- ❌ FAIL: [Requirement] - [Issue description]
```

---

## Prompt 8: Generate Accessibility Flow

### Purpose
Create detailed accessibility considerations for an interaction.

### Prompt Template

```
I need comprehensive accessibility specifications for the following interaction.

**Interaction:**
[Paste interaction overview or state diagram]

**States:**
[List all states]

**Transitions:**
[List all transitions]

**Requirements:**
- Document keyboard navigation flow through all states
- Specify focus management for each state transition
- Document screen reader announcements for each state
- Ensure ARIA live regions for dynamic content
- Verify all states are keyboard accessible
- Document focus trap behavior (for modals)
- Ensure focus return after closing/completing

Please provide:

### 1. Keyboard Navigation Flow
[Document Tab order and keyboard shortcuts for each state]

**State: [State Name]**
- Tab order: [Elements in tab order]
- Enter: [Action]
- Escape: [Action]
- Arrow keys: [Action if applicable]

[Repeat for all states]

### 2. Focus Management
**Transition: [From State] → [To State]**
- Initial focus: [Where focus goes]
- Focus trap: [Yes/No, details]
- Focus return: [Where focus returns]

[Repeat for all transitions]

### 3. Screen Reader Announcements
**State: [State Name]**
- Announcement: "[What is announced]"
- ARIA live: [polite | assertive]
- Timing: [When announced]

[Repeat for all states]

### 4. ARIA Attributes by State
[List ARIA attributes needed for each state]

### 5. Testing Checklist
- [ ] Keyboard navigation tested
- [ ] Screen reader tested (NVDA, JAWS, VoiceOver)
- [ ] Focus indicators visible
- [ ] Focus management works correctly
- [ ] No keyboard traps (except intentional for modals)
```

---

## Prompt 9: Convert Interaction Spec to Test Cases

### Purpose
Generate test cases from an interaction specification.

### Prompt Template

```
Convert this interaction specification into a comprehensive test suite.

**Interaction Spec:**
[Paste interaction spec or state diagram]

**Output Format:**

## Test Suite: [Interaction Name]

### Unit Tests

#### Test 1: [State Name]
**Given:** [Initial state]
**When:** [User action]
**Then:** [Expected state and UI changes]

[Continue for all states and transitions...]

### Integration Tests

#### Test 1: [Flow Name - Happy Path]
**Scenario:** [Describe scenario]
**Steps:**
1. [Step 1]
2. [Step 2]
3. [Continue...]
**Expected Result:** [Final state and outcome]

#### Test 2: [Flow Name - Error Path]
[Same structure...]

### Edge Case Tests

#### Test 1: [Edge Case Name]
**Scenario:** [Describe edge case]
**Steps:** [...]
**Expected Result:** [...]

### Accessibility Tests

#### Test 1: Keyboard Navigation
**Steps:**
1. Use only keyboard (Tab, Enter, Escape, Arrows)
2. Navigate through entire flow
3. Verify all interactions accessible
**Expected:** All functionality accessible via keyboard

#### Test 2: Screen Reader
**Steps:**
1. Enable screen reader
2. Navigate through flow
3. Verify announcements
**Expected:** All state changes announced, all content accessible

### API Integration Tests

#### Test 1: [API Call Name]
**API:** [Endpoint]
**Mock Response:** [Success/Error]
**Expected State:** [State after API response]

[Continue for all API calls...]

Generate complete test suite covering:
- All states
- All transitions
- All edge cases
- All error scenarios
- Keyboard accessibility
- Screen reader accessibility
- API integration
```

---

## Usage Tips

1. **Provide Complete Context**: Include component specs, wireframes, and ACs
2. **Be Specific About Flow Type**: Clearly state if it's form, modal, multi-step, etc.
3. **Reference Templates**: Point AI to correct template files
4. **Iterate**: Start with state diagram, then expand to full spec
5. **Validate**: Always run generated specs through quality gate
6. **Cross-Reference**: Ensure states match component spec states

---

## Prompt Chaining Example

For complex interactions, chain multiple prompts:

1. **Generate initial state diagram** (Prompt 2)
2. **Refine state diagram** (Prompt 3)
3. **Generate full interaction spec** (Prompt 1)
4. **Generate accessibility spec** (Prompt 8)
5. **Validate against quality gate** (Prompt 7)
6. **Generate test cases** (Prompt 9)

This ensures comprehensive, validated interaction specifications ready for implementation.

---

**Related:**
- [Interaction Flow Template](template-interaction-flow.md)
- [State Diagram Template](template-state-diagram.md)
- [Examples](examples.md)
- [Rules](rules.md)
