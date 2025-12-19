# Stage 3: Interactions - Rules

## Overview

Interaction specifications document how components behave and transition between states using **state diagrams** and **interaction flows**.

This stage focuses on dynamic behavior, user flows, and state transitions that bring components to life.

---

## Purpose

Interaction specs serve as the behavior documentation:

1. **Define State Transitions**: How components move between states
2. **Document User Flows**: Multi-step interactions across components
3. **Specify Triggers**: What causes state changes
4. **Map Conditions**: When transitions occur
5. **Clarify Edge Cases**: Handle unexpected scenarios
6. **Maintain Traceability**: Link to wireframes, components, and ACs

---

## When to Create Interaction Specs

Create interaction specs after:
- Stage 2 component specs are approved
- Component specs have passed quality gate
- All components and their states are defined

Before moving to:
- Code implementation
- Developer handoff

---

## Interaction Specification Approach

### State Diagrams (Format B - Chosen Approach)

**What to Include:**
- States (nodes/boxes)
- Transitions (arrows)
- Triggers/Events (labels on arrows)
- Conditions (guards on transitions)
- Actions (what happens during transition)

**Notation:**
- ASCII art for diagrams
- Clear state names
- Labeled transitions
- Condition notation [condition]
- Action notation /action

**Why State Diagrams?**
- Visual representation of behavior
- Clear state machine pattern
- Easy to validate completeness
- Maps well to code implementation
- Handles complex flows effectively

---

## State Diagram Notation

### States

**Notation:**
```
+------------------+
| State Name       |
+------------------+
```

**State Types:**
- **Initial State:** Entry point (indicated with →)
- **Active States:** Regular states
- **Final State:** End point (indicated with ⊗)

**Example:**
```
→ +------------------+
  | Idle             |
  +------------------+

  +------------------+
  | Loading          |
  +------------------+

  +------------------+
  | Success          | ⊗
  +------------------+
```

### Transitions

**Notation:**
```
[State A] --event/action--> [State B]
```

**Arrow Symbols:**
- `-->` Standard transition
- `→` Initial state indicator

**Example:**
```
+----------+  submit form  +----------+
| Idle     | ------------> | Loading  |
+----------+               +----------+
```

### Triggers/Events

**Notation:** Label on transition arrow

**Examples:**
- `user clicks submit`
- `API returns success`
- `validation fails`
- `timeout occurs`

### Conditions (Guards)

**Notation:** `[condition]` before action

**Examples:**
- `[if valid]`
- `[if error]`
- `[if unauthorized]`
- `[if empty]`

### Actions

**Notation:** `/action` after trigger

**Examples:**
- `/validate form`
- `/call API`
- `/show error`
- `/navigate to dashboard`

### Complete Transition Example

```
+----------+  submit [if valid]  +----------+  success  +----------+
| Idle     | ------------------> | Loading  | --------> | Success  |
+----------+  /call API          +----------+  /close   +----------+
                                       |
                                       | error
                                       | /show error
                                       v
                                 +----------+
                                 | Error    |
                                 +----------+
```

---

## ID System

### Interaction IDs

**Format:** `INT-XXX`

**Examples:**
- `INT-001` - Login Form Submission Flow
- `INT-002` - Delete Confirmation Flow
- `INT-003` - Multi-Step Form Navigation

**Rules:**
- Globally unique across all features
- Incremental numbering
- Prefix indicates interaction spec

### State IDs (within interaction)

**Format:** `INT-XXX-ST-YYY`

**Examples:**
- `INT-001-ST-001` - Idle state
- `INT-001-ST-002` - Validating state
- `INT-001-ST-003` - Submitting state

**Rules:**
- YYY is sequential within an interaction
- Used for referencing specific states
- Links to component states

---

## Required Sections

Every interaction spec must include:

### 1. Metadata
- **Interaction ID**: `INT-XXX`
- **Interaction Name**: Descriptive name
- **Component ID(s)**: Related components (e.g., `COMP-001`)
- **Wireframe ID(s)**: Related wireframes (e.g., `WF-001`)
- **Story ID(s)**: Related user stories (e.g., `ST-001`)
- **Acceptance Criteria IDs**: Which ACs this addresses (e.g., `AC-010`)
- **Interaction Type**: Form Flow, Modal Flow, Navigation Flow, Multi-Step, etc.

### 2. Interaction Overview
- **Purpose**: What this interaction accomplishes
- **Context**: When/where this interaction occurs
- **User Goal**: What user is trying to achieve
- **Components Involved**: List of components in the flow

### 3. State Diagram (ASCII)
- Visual representation of all states and transitions
- All states labeled clearly
- All transitions with triggers, conditions, actions
- Initial and final states marked
- Layout readable and well-formatted

### 4. State Definitions
For each state in the diagram:
- **State ID**: `INT-XXX-ST-YYY`
- **State Name**: Name from diagram
- **Description**: What this state represents
- **Component State**: Link to component spec state
- **UI Appearance**: What user sees
- **Available Actions**: What user can do
- **Exit Conditions**: How to leave this state

### 5. Transition Definitions
For each transition in the diagram:
- **From State**: Source state
- **To State**: Target state
- **Trigger**: What initiates transition
- **Condition**: When transition occurs `[if X]`
- **Action**: What happens during transition `/action`
- **Validation**: Any validation before transition
- **Error Handling**: What if transition fails

### 6. User Flow Description
Step-by-step narrative of the interaction:
1. User starts in [State]
2. User performs [Action]
3. System validates [Condition]
4. System transitions to [State]
5. [Continue...]

### 7. Edge Cases & Error Scenarios
- What happens if validation fails?
- What happens if API call fails?
- What happens if user cancels mid-flow?
- What happens if timeout occurs?
- What happens if user navigates away?

### 8. Data Flow
- What data is collected/validated?
- What data is sent to API?
- What data is received from API?
- What data is stored (state, localStorage, etc.)?

### 9. API Integration (if applicable)
- **Endpoints**: API endpoints called
- **Methods**: HTTP methods (GET, POST, PUT, DELETE)
- **Request Format**: Request body/params
- **Response Format**: Expected response
- **Error Responses**: Possible error responses

### 10. Timing & Performance
- **Expected Duration**: How long each state typically lasts
- **Timeouts**: Any timeout constraints
- **Loading Indicators**: When/where loading shown
- **Debouncing**: Any debounced inputs (e.g., search)

### 11. Accessibility Considerations
- **Keyboard Flow**: How keyboard users navigate the flow
- **Screen Reader**: What screen reader announces at each state
- **Focus Management**: Where focus moves during transitions
- **ARIA Live Regions**: What announces dynamically

### 12. Traceability
**AC Mapping Table:**

| State/Transition | Acceptance Criteria | Notes |
|------------------|---------------------|-------|
| State: Idle | AC-010 | User can initiate flow |
| Transition: Submit | AC-011 | Form validates before submit |
| State: Success | AC-012 | User sees success feedback |

**Component Mapping:**

| State | Component | Component State |
|-------|-----------|-----------------|
| Idle | COMP-001 | Default state |
| Loading | COMP-001 | Loading state |
| Success | COMP-001 | Success state |

**Coverage:**
- [ ] All states map to component states
- [ ] All transitions address ACs
- [ ] All edge cases handled
- [ ] All error scenarios documented

---

## Interaction Types

### Form Submission Flow

**Characteristics:**
- Validation before submit
- Loading during API call
- Success/error feedback
- Optional redirect after success

**States:**
- Idle (empty form)
- Validating
- Invalid (show errors)
- Valid (ready to submit)
- Submitting (API call in progress)
- Success (submission complete)
- Error (submission failed)

**Common Transitions:**
- User enters data → Validating
- Validation passes → Valid
- Validation fails → Invalid
- User submits → Submitting
- API success → Success
- API error → Error

---

### Modal/Dialog Flow

**Characteristics:**
- Open/close states
- Focus trap
- Confirmation before action
- Overlay interaction

**States:**
- Closed
- Opening (animation)
- Open
- Confirming (user clicking action)
- Processing (action in progress)
- Closing (animation)
- Closed

**Common Transitions:**
- User clicks trigger → Opening
- Animation complete → Open
- User clicks action → Confirming
- User confirms → Processing
- Action complete → Closing
- User clicks cancel/escape → Closing
- Animation complete → Closed

---

### Multi-Step Form Flow

**Characteristics:**
- Multiple steps/screens
- Forward/backward navigation
- Step validation
- Progress indicator
- Final submission

**States:**
- Step 1
- Validating Step 1
- Step 2
- Validating Step 2
- Step 3 (final)
- Submitting
- Success

**Common Transitions:**
- User clicks Next → Validating Step X
- Validation passes → Step X+1
- Validation fails → Stay on Step X (show errors)
- User clicks Back → Step X-1 (no validation)
- User submits → Submitting

---

### Navigation Flow

**Characteristics:**
- Page/screen transitions
- Loading states
- Authentication checks
- Data persistence

**States:**
- Screen A
- Navigating (leaving Screen A)
- Loading (fetching Screen B)
- Screen B
- Error (navigation failed)

**Common Transitions:**
- User clicks link → Navigating
- Navigation starts → Loading
- Data loaded → Screen B
- Load error → Error
- Authentication required → Redirect to Login

---

### Data Table Interaction Flow

**Characteristics:**
- Sorting state changes
- Filtering state changes
- Pagination state changes
- Row selection
- Bulk actions

**States:**
- Idle (data displayed)
- Filtering (applying filters)
- Sorting (applying sort)
- Paginating (loading new page)
- Loading (fetching data)
- Error (fetch failed)
- Empty (no results)

**Common Transitions:**
- User enters filter → Filtering → Loading → Idle/Empty
- User clicks sort → Sorting → Loading → Idle
- User changes page → Paginating → Loading → Idle
- Fetch error → Error
- No results → Empty

---

## Quality Gates

Before moving to code implementation:

### Completeness
- [ ] All states identified and documented
- [ ] All transitions documented with triggers, conditions, actions
- [ ] All edge cases handled
- [ ] All error scenarios documented
- [ ] Initial and final states clear

### Clarity
- [ ] State diagram is readable and well-formatted
- [ ] State names are descriptive
- [ ] Transition labels are clear
- [ ] Flow is easy to follow
- [ ] User flow narrative matches diagram

### Accuracy
- [ ] States match component spec states
- [ ] Transitions are logically sound
- [ ] Conditions are realistic
- [ ] Actions are appropriate
- [ ] Data flow is accurate

### Traceability
- [ ] All states map to component states
- [ ] All transitions address ACs
- [ ] Component IDs referenced correctly
- [ ] Wireframe IDs referenced correctly

### Implementability
- [ ] State machine can be implemented in code
- [ ] Transitions are deterministic
- [ ] No circular dependencies (unless intentional)
- [ ] Error recovery paths exist
- [ ] Performance considerations noted

---

## Common Mistakes to Avoid

❌ **Don't Skip Edge Cases**: Always document what happens when things go wrong
❌ **Don't Forget Error States**: Every interaction can fail
❌ **Don't Ignore Timeout**: Long-running operations need timeout handling
❌ **Don't Break Focus Management**: Document where focus goes at each step
❌ **Don't Assume Happy Path**: Users will do unexpected things
❌ **Don't Leave Dead Ends**: Every state needs an exit path
❌ **Don't Forget Loading States**: Users need feedback during async operations
❌ **Don't Miss Accessibility**: Keyboard and screen reader users need the full flow

---

## Template Usage

Use the provided templates:
- **template-state-diagram.md**: For state diagram format and notation
- **template-interaction-flow.md**: For complete interaction specification

Templates include all required sections and examples.

---

## Next Steps After Completion

Once interaction specs pass quality gate:
1. Prepare for code implementation
2. Share with developers for state machine implementation
3. Link interaction IDs to code files
4. Use for test case generation (UAT → Tests)

---

**Related:**
- [State Diagram Template](template-state-diagram.md)
- [Interaction Flow Template](template-interaction-flow.md)
- [Examples](examples.md)
- [Quality Gate](quality-gate.md)
- [Component Specs](../stage2-component-specs/)
- [Wireframes](../stage1-wireframes/)
