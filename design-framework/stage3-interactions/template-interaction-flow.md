# Interaction Flow Template

**Interaction ID:** INT-XXX
**Interaction Name:** [Descriptive Name]
**Component ID(s):** COMP-XXX, COMP-XXX
**Wireframe ID(s):** WF-XXX
**Story ID(s):** ST-XXX
**Acceptance Criteria IDs:** AC-XXX, AC-XXX, AC-XXX
**Interaction Type:** Form Flow | Modal Flow | Navigation Flow | Multi-Step | Data Table | Other
**Created:** [Date]
**Last Updated:** [Date]

---

## 1. Interaction Overview

### Purpose
[What this interaction accomplishes. 1-2 sentences.]

### Context
[When and where this interaction occurs. What page/screen? What user flow?]

### User Goal
[What is the user trying to achieve with this interaction?]

### Components Involved
- COMP-XXX: [Component name]
- COMP-XXX: [Component name]
- [List all components that participate in this interaction]

---

## 2. State Diagram

```
[Insert ASCII state diagram here following the notation from template-state-diagram.md]

→ +------------------+
  | [Initial State]  |
  +------------------+
         |
         | [trigger] [condition] /action
         v
  +------------------+
  | [State 2]        |
  +------------------+
         |
         | [trigger]
         v
  +------------------+
  | [Final State]    | ⊗
  +------------------+
```

---

## 3. State Definitions

### State 1: [State Name]

**State ID:** INT-XXX-ST-001

**Description:**
[What this state represents. What is happening in this state?]

**Component State:**
- Component: COMP-XXX
- State: [State from component spec, e.g., "Default state", "Loading state"]

**UI Appearance:**
[What the user sees in this state. Visual description.]

**Available Actions:**
- [Action 1 user can take]
- [Action 2 user can take]
- [List all user actions available in this state]

**Exit Conditions:**
[What causes the component to leave this state?]
- [Condition 1]
- [Condition 2]

**Data:**
[What data is present/accessible in this state?]

---

### State 2: [State Name]

**State ID:** INT-XXX-ST-002

[Same structure as State 1...]

---

### State 3: [State Name]

**State ID:** INT-XXX-ST-003

[Same structure as State 1...]

---

[Continue for all states in the diagram...]

---

## 4. Transition Definitions

### Transition 1: [From State] → [To State]

**From State:** [State name]
**To State:** [State name]

**Trigger:**
[What initiates this transition? User action, system event, timer, etc.]

**Condition:**
[Under what condition does this transition occur? Use format: if X, then transition]
- Condition: `[if valid]` (example)
- Check: [What is validated or checked]

**Action:**
[What happens during this transition? What does the system do?]
- Action: `/call API` (example)
- Details: [Detailed description of what occurs]

**Validation:**
[Any validation that occurs before transition]
- Field 1: [Validation rule]
- Field 2: [Validation rule]

**Error Handling:**
[What happens if transition fails? Alternative paths?]
- If [error type]: [Error handling approach]

**Duration:**
[Expected duration of transition, if applicable]
- Typical: [e.g., "< 100ms for validation", "1-3s for API call"]

**User Feedback:**
[What feedback does user see during transition?]
- Visual: [e.g., "Loading spinner appears"]
- Screen Reader: [e.g., "Announces 'Loading, please wait'"]

---

### Transition 2: [From State] → [To State]

[Same structure as Transition 1...]

---

[Continue for all transitions in the diagram...]

---

## 5. User Flow Description

### Happy Path (Primary Flow)

**Step 1:**
User starts in [State name]

**Step 2:**
User performs [Action]
- Details: [Specific details about the action]

**Step 3:**
System validates [What is validated]
- Validation: [Validation rules]

**Step 4:**
[If validation passes], system transitions to [State name]
- Trigger: [What triggers the transition]
- Action: [What system does]

**Step 5:**
System displays [What user sees]
- UI Changes: [Specific UI changes]

[Continue step-by-step...]

**Final Step:**
User reaches [Final state] and [End result]

---

### Alternative Paths

#### Alternative Path 1: [Scenario Name]

**Scenario:** [When does this alternative path occur?]

**Steps:**
1. [Step 1]
2. [Step 2]
3. [Continue...]

**End Result:** [Where does user end up?]

#### Alternative Path 2: [Scenario Name]

[Same structure...]

---

## 6. Edge Cases & Error Scenarios

### Edge Case 1: [Case Name]

**Scenario:**
[When does this edge case occur?]

**Trigger:**
[What triggers this edge case?]

**Handling:**
[How is this edge case handled?]

**User Experience:**
[What does user see/experience?]

**Recovery:**
[How can user recover from this?]

---

### Error Scenario 1: [Error Name]

**Error Type:** [e.g., "Validation Error", "API Error", "Network Error"]

**Trigger:**
[What causes this error?]

**Current State:**
[What state is component in when error occurs?]

**Error State:**
[What state does component transition to?]

**Error Message:**
[Exact error message shown to user]
"[Error message text]"

**User Actions:**
[What can user do?]
- [Action 1, e.g., "Retry"]
- [Action 2, e.g., "Cancel"]
- [Action 3, e.g., "Edit and resubmit"]

**Recovery Path:**
[How does user get back to normal flow?]
1. [Step 1]
2. [Step 2]

**Prevention:**
[How can this error be prevented?]

---

### Error Scenario 2: [Error Name]

[Same structure...]

---

[Continue for all edge cases and error scenarios...]

---

## 7. Data Flow

### Data Collection

**Data Collected:**
- Field 1: [Field name] (Type: [type], Required: [yes/no])
  - Source: [Where data comes from]
  - Validation: [Validation rules]
- Field 2: [Field name] (Type: [type], Required: [yes/no])
  - [Same structure...]

### Data Validation

**Client-Side Validation:**
- [Validation rule 1]
- [Validation rule 2]
- Timing: [When validation occurs]

**Server-Side Validation:**
- [Validation rule 1]
- [Validation rule 2]

### Data Transmission

**API Call:**
- Endpoint: [API endpoint]
- Method: [HTTP method]
- Request Format:
```json
{
  "field1": "value",
  "field2": "value"
}
```

**Response:**
- Success Response:
```json
{
  "status": "success",
  "data": { }
}
```

- Error Response:
```json
{
  "status": "error",
  "message": "Error message"
}
```

### Data Storage

**Client-Side Storage:**
- LocalStorage: [What is stored]
- SessionStorage: [What is stored]
- State Management: [What is in app state]

**Server-Side Storage:**
- Database: [What is persisted]

---

## 8. API Integration

### Endpoint 1: [Endpoint Name]

**URL:** [Endpoint URL, e.g., "/api/auth/login"]
**Method:** [GET | POST | PUT | DELETE | PATCH]
**Authentication:** [Required/Not required]

**Request:**
- Headers: [Required headers]
- Body:
```json
{
  "param1": "value",
  "param2": "value"
}
```

**Response:**
- Success (200):
```json
{
  "status": "success",
  "data": { }
}
```

- Error (400):
```json
{
  "status": "error",
  "message": "Validation error",
  "errors": { }
}
```

- Error (401):
```json
{
  "status": "error",
  "message": "Unauthorized"
}
```

- Error (500):
```json
{
  "status": "error",
  "message": "Server error"
}
```

**State Transitions:**
- Before Call: [State before API call]
- During Call: [State during API call]
- On Success: [State after successful call]
- On Error: [State after error]

---

### Endpoint 2: [Endpoint Name]

[Same structure...]

---

## 9. Timing & Performance

### Expected Duration

**State Durations:**
- [State name]: [Duration, e.g., "User-controlled (idle)"]
- [State name]: [Duration, e.g., "< 100ms (validation)"]
- [State name]: [Duration, e.g., "1-3 seconds (API call)"]

### Timeouts

**Timeout Configurations:**
- API call timeout: [e.g., "10 seconds"]
- Debounce delay: [e.g., "300ms for search input"]
- Animation duration: [e.g., "200ms fade"]

**Timeout Handling:**
- If timeout occurs: [What happens]
- User feedback: [Error message]
- Recovery: [How to retry]

### Loading Indicators

**When Loading Indicators Appear:**
- State: [State name]
- UI: [What loading indicator is shown]
- Location: [Where it appears]
- Duration: [Expected duration]

### Debouncing

**Debounced Inputs:**
- Input: [Input field name]
- Delay: [Delay time, e.g., "300ms"]
- Reason: [Why debouncing is needed]

---

## 10. Accessibility Considerations

### Keyboard Flow

**Tab Order Through States:**
1. [Element 1] in [State]
2. [Element 2] in [State]
3. [Continue...]

**Keyboard Shortcuts:**
- Enter: [Action in which states]
- Escape: [Action in which states]
- Tab: [Navigate forward]
- Shift+Tab: [Navigate backward]
- [Other shortcuts]

**Focus During Transitions:**
- From [State A] to [State B]: Focus moves to [Element]
- From [State B] to [State C]: Focus moves to [Element]

### Screen Reader Announcements

**State Change Announcements:**

**[State Name]:**
- Announcement: "[What screen reader announces]"
- ARIA Live: [polite | assertive]
- Timing: [When announced]

**[State Name]:**
- [Same structure...]

**Transition Announcements:**
- [Transition description]: Announces "[announcement text]"

### Focus Management

**Initial Focus:**
[Where focus is placed when interaction starts]

**Focus Trap:**
[If applicable, describe focus trap behavior, e.g., for modals]

**Focus Return:**
[Where focus returns after interaction completes]

**Focus Indicators:**
[Ensure focus indicators visible in all states]

### ARIA Live Regions

**Live Regions:**
- Region 1: [Purpose]
  - aria-live: [polite | assertive]
  - Updates: [What updates]
- Region 2: [Purpose]
  - [Same structure...]

---

## 11. Security Considerations

**Sensitive Data:**
- [Data that is sensitive]
- Protection: [How it's protected]

**CSRF Protection:**
- [How CSRF is handled]

**XSS Prevention:**
- [How XSS is prevented]

**Authentication:**
- [Authentication requirements]

**Authorization:**
- [Authorization checks]

---

## 12. Traceability

### Acceptance Criteria Mapping

| AC ID | Acceptance Criteria | State/Transition | Status |
|-------|---------------------|------------------|--------|
| AC-XXX | [AC description] | [State or Transition] | ✅ Addressed |
| AC-XXX | [AC description] | [State or Transition] | ✅ Addressed |
| AC-XXX | [AC description] | [State or Transition] | ✅ Addressed |

### Component Mapping

| State | Component ID | Component State | Notes |
|-------|--------------|-----------------|-------|
| [State name] | COMP-XXX | [Component state] | [Notes] |
| [State name] | COMP-XXX | [Component state] | [Notes] |

### Wireframe Mapping

| State/Transition | Wireframe ID | Wireframe Element | Notes |
|------------------|--------------|-------------------|-------|
| [State] | WF-XXX | [Element] | [Notes] |

### Coverage Checklist

- [ ] All states map to component states
- [ ] All transitions address at least one AC
- [ ] All edge cases handled
- [ ] All error scenarios documented
- [ ] All user actions covered
- [ ] All API calls documented

---

## 13. Implementation Notes

### Technical Considerations
- [Technical note 1]
- [Technical note 2]
- [State management approach: e.g., "Use state machine library (XState)"]

### Dependencies
- [Dependency 1]
- [Dependency 2]

### State Machine Implementation
- [How to implement this state machine in code]
- [Recommended libraries or patterns]

### Testing Considerations
- [Key test scenarios]
- [State transitions to test]
- [Edge cases to verify]
- [Error scenarios to test]

### Performance Optimizations
- [Optimization 1]
- [Optimization 2]

---

## 14. Related Documents

- **Component Specs:** [COMP-XXX - Link to component spec]
- **Wireframes:** [WF-XXX - Link to wireframe]
- **User Story:** [ST-XXX - Link to USD or USL]
- **Acceptance Criteria:** [Link to USD file]
- **Related Interactions:** [Links to related interaction specs]
- **API Documentation:** [Link to API docs]

---

## 15. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial creation |
| 1.1 | [Date] | [Name] | [Description of changes] |

---

## Notes

[Any additional notes, open questions, or considerations that don't fit above sections]

---

**Status:** ☐ Draft ☐ In Review ☐ Approved ☐ Implemented

**Approved By:** [Name/Role]
**Approval Date:** [Date]
