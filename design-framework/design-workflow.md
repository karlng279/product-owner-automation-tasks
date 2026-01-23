# Design Workflow Guide

## Overview

This guide walks you through the complete design workflow: from acceptance criteria to ready-to-implement specifications.

**Duration:** Varies by complexity (simple form: 2-4 hours, complex dashboard: 1-2 days)

**Output:** Complete design specifications ready for development

---

## Workflow at a Glance

```
Input: USD files (usd/*.md) with Acceptance Criteria (AC-XXX)
   ↓
Stage 1: Wireframes (WF-XXX)
   ↓ Pass Quality Gate
Stage 2: Component Specs (COMP-XXX)
   ↓ Pass Quality Gate
Stage 3: Interactions (INT-XXX)
   ↓ Pass Quality Gate
Output: Ready for Code Implementation
```

---

## Prerequisites

Before starting:
- [✓] USD files (`usd/*.md`) with Acceptance Criteria complete
- [✓] Design Rules understood ([design-rules/](design-rules/))
- [✓] ShadCN UI component library familiar ([shadcn-component-catalog.md](stage2-component-specs/shadcn-component-catalog.md))
- [✓] Workflow stages understood (read this document)

---

## Stage 1: Wireframes

**Goal:** Translate acceptance criteria into visual layout using text + ASCII art

**Input:** USD files (`usd/*.md`) with Acceptance Criteria (AC-XXX)
**Output:** Wireframes (WF-XXX)
**Time:** 1-2 hours per screen

---

### Step 1.1: Review Acceptance Criteria

Read through all acceptance criteria for the user story.

**Example ACs for Login Form:**
- AC-001: User can enter email address
- AC-002: User can enter password
- AC-003: User can submit login form
- AC-004: User sees error for invalid credentials
- AC-005: User redirected to dashboard on success

**Identify:**
- UI elements needed (inputs, buttons, etc.)
- User interactions (click, submit, etc.)
- States (default, loading, error, success)
- Validation rules
- Navigation/flow

---

### Step 1.2: Choose Template

Select appropriate wireframe template:

- **Form:** [form-layout-template.md](templates/form-layout-template.md)
- **List/Table:** [list-view-template.md](templates/list-view-template.md)
- **Detail View:** [detail-view-template.md](templates/detail-view-template.md)
- **Dashboard:** [dashboard-template.md](templates/dashboard-template.md)
- **Modal:** [modal-template.md](templates/modal-template.md)

**For Login Form:** Use form-layout-template.md

---

### Step 1.3: Create Text Description

Write text description of the wireframe:

**Purpose:** Allow users to authenticate

**Layout Structure:**
- Desktop: Centered card, max-width 448px
- Mobile: Full width with margins

**UI Elements:**
- Email input field (required)
- Password input field (required)
- "Remember me" checkbox
- "Sign In" button (primary)
- "Forgot password?" link

**Interactions:**
- User enters email and password
- Form validates on blur
- User clicks "Sign In"
- Show loading state during API call
- Navigate to dashboard on success
- Show error alert on failure

---

### Step 1.4: Draw ASCII Wireframes

Create ASCII art for desktop, tablet, mobile.

**Desktop (1024px+):**
```
+------------------------------------------------------------------+
| {Logo} Navigation Links...                        [User Menu ▼] |
+------------------------------------------------------------------+
|                                                                  |
|                    +---------------------------+                 |
|                    | Sign In                   |                 |
|                    | Enter your credentials    |                 |
|                    |                           |                 |
|                    | Email *                   |                 |
|                    | <Input_________________> |                 |
|                    |                           |                 |
|                    | Password *                |                 |
|                    | <Input_________________> |                 |
|                    |                           |                 |
|                    | [×] Remember me           |                 |
|                    |                           |                 |
|                    | [Sign In_______________] |                 |
|                    |                           |                 |
|                    | [Forgot password?]        |                 |
|                    +---------------------------+                 |
|                                                                  |
+------------------------------------------------------------------+
```

**Mobile (< 640px):**
```
+------------------------------+
| {Logo}                       |
+------------------------------+
|                              |
| Sign In                      |
| Enter your credentials       |
|                              |
| Email *                      |
| <Input___________________>   |
|                              |
| Password *                   |
| <Input___________________>   |
|                              |
| [×] Remember me              |
|                              |
| [Sign In_________________]   |
|                              |
| [Forgot password?]           |
|                              |
+------------------------------+
```

---

### Step 1.5: List Components Required

Identify ShadCN components needed:

- Card (container)
- CardHeader (title + description)
- CardContent (form fields)
- Input (email)
- Input (password)
- Checkbox (remember me)
- Button (sign in)
- Button (forgot password - variant: link)
- Form (react-hook-form wrapper)
- Alert (for errors)

---

### Step 1.6: Map to Acceptance Criteria

Create AC mapping table:

| Wireframe Element | WF ID | AC ID | Notes |
|-------------------|-------|-------|-------|
| Email Input | WF-001 | AC-001 | Required field |
| Password Input | WF-001 | AC-002 | Required field |
| Sign In Button | WF-001 | AC-003 | Triggers submission |
| Error Alert | WF-001 | AC-004 | Shows on failure |
| Success Navigation | WF-001 | AC-005 | Redirects on success |

**Verify:** All ACs addressed, no orphaned elements

---

### Step 1.7: Document Responsive Behavior

Specify how layout adapts:

**Desktop (> 1024px):**
- Centered card, max-width 448px
- Standard spacing (space-6)

**Tablet (640px - 1024px):**
- Same as desktop

**Mobile (< 640px):**
- Full width with margins (mx-4)
- Reduced spacing (space-4)
- Buttons full width

---

### Step 1.8: Apply Design Rules

Ensure compliance with design rules:

- **Colors:** bg-card, text-foreground, bg-primary (buttons)
- **Spacing:** space-4 between fields, p-6 card padding
- **Typography:** text-2xl (title), text-base (inputs), text-sm (helper text)
- **Accessibility:** 44x44px touch targets, WCAG AA contrast
- **Responsive:** Mobile-first approach

---

### Step 1.9: Validate Against Quality Gate

Check [stage1-wireframes/quality-gate.md](stage1-wireframes/quality-gate.md):

- [ ] All required elements present
- [ ] ASCII wireframes readable
- [ ] All ACs addressed
- [ ] Design rules followed
- [ ] Responsive views shown
- [ ] Components listed
- [ ] AC mapping complete

**If passes:** Proceed to Stage 2
**If fails:** Fix issues, re-validate

---

## Stage 2: Component Specifications

**Goal:** Define which ShadCN components to use and how to configure them

**Input:** Approved wireframes (WF-XXX)
**Output:** Component specs (COMP-XXX)
**Time:** 2-4 hours per component

---

### Step 2.1: Create Component Spec File

Use [template-component-spec.md](stage2-component-specs/template-component-spec.md)

**File naming:** `comp-001-login-form.md`

**Metadata:**
```
Component ID: COMP-001
Component Name: Login Form
Wireframe ID: WF-001
Story ID: ST-001
Acceptance Criteria: AC-001, AC-002, AC-003, AC-004, AC-005
Component Type: Form
```

---

### Step 2.2: Component Overview

Write overview:

**Purpose:** Authenticate user with email and password credentials

**Context:** Login page (/login), first screen for unauthenticated users

**User Interaction:** User enters credentials, optionally selects "Remember me", clicks "Sign In"

**Key Functionality:**
- Email and password validation
- Form submission with loading state
- Error handling
- Success navigation to dashboard

---

### Step 2.3: Map Wireframe Elements to ShadCN Components

For each element from wireframe, specify ShadCN component:

**Element 1: Email Input**
- Element ID: COMP-001-EL-001
- ShadCN Component: Input
- Variant: default
- Size: default (h-10)
- Props: type="email", required=true, placeholder="name@example.com"
- States: default, focus, error, disabled
- Validation: Required, email format
- Error Messages:
  - Required: "Email is required"
  - Format: "Please enter a valid email address"

**Element 2: Password Input**
- Element ID: COMP-001-EL-002
- ShadCN Component: Input
- Variant: default
- Size: default (h-10)
- Props: type="password", required=true
- States: default, focus, error, disabled
- Validation: Required, min 8 characters
- Error Messages:
  - Required: "Password is required"
  - Min length: "Password must be at least 8 characters"

**Element 3: Remember Me Checkbox**
- Element ID: COMP-001-EL-003
- ShadCN Component: Checkbox
- Size: h-4 w-4
- Props: checked=false (default)
- States: unchecked, checked, disabled
- Label: "Remember me"

**Element 4: Sign In Button**
- Element ID: COMP-001-EL-004
- ShadCN Component: Button
- Variant: default (primary)
- Size: default
- Props: type="submit", disabled=false, className="w-full"
- States: default, hover, focus, active, disabled, loading
- Label: "Sign In" (or "Signing in..." when loading)
- Loading: Shows spinner + text change + disabled

**Element 5: Forgot Password Link**
- Element ID: COMP-001-EL-005
- ShadCN Component: Button (variant: link)
- Size: sm
- Props: asChild=true (wraps Next.js Link)
- Label: "Forgot your password?"

---

### Step 2.4: Define Component Composition

Show component hierarchy:

```
Card
├── CardHeader
│   ├── CardTitle: "Sign In"
│   └── CardDescription: "Enter your credentials"
├── CardContent
│   └── Form (react-hook-form)
│       ├── FormField: Email
│       │   ├── FormLabel
│       │   ├── FormControl: Input
│       │   └── FormMessage
│       ├── FormField: Password
│       │   ├── FormLabel
│       │   ├── FormControl: Input
│       │   └── FormMessage
│       └── FormField: Remember Me
│           ├── FormControl: Checkbox
│           └── FormLabel
└── CardFooter
    ├── Button (submit): "Sign In"
    └── Button (link): "Forgot password?"
```

---

### Step 2.5: Document All States

**Default State:** Empty form, all fields enabled

**Filling State:** User actively entering data

**Validating State:** Form validating inputs (< 100ms)

**Invalid State:** Validation errors shown, fields highlighted in red

**Valid State:** All fields valid, ready to submit

**Submitting State:** API call in progress
- Submit button: Spinner + "Signing in..." + disabled
- All inputs: Disabled

**Success State:** Authentication successful
- Toast: "Welcome back!"
- Navigate to /dashboard

**Error State:** Authentication failed
- Alert (variant: destructive): "Invalid email or password"
- Re-enable form
- Allow retry

---

### Step 2.6: Define Validation Rules

**Email Field:**
- Required: true
- Format: Email
- Error on blur: true
- Error messages:
  - Required: "Email is required"
  - Invalid: "Please enter a valid email address"

**Password Field:**
- Required: true
- Min length: 8
- Error on blur: true
- Error messages:
  - Required: "Password is required"
  - Min length: "Password must be at least 8 characters"

**Form-Level:**
- Submit disabled if invalid
- Validate all fields on submit

---

### Step 2.7: Specify Accessibility

**ARIA Attributes:**
- Email input: aria-required="true", aria-invalid (when error), aria-describedby (error message ID)
- Password input: Same as email
- Checkbox: role="checkbox", aria-checked
- Submit button: aria-busy="true" (when loading)

**Keyboard Navigation:**
- Tab order: Email → Password → Checkbox → Submit → Forgot Password
- Enter: Submits form (when focused on inputs or button)
- Escape: Clears focus (if applicable)

**Focus Management:**
- Initial focus: Email input
- After error: Focus first invalid field
- After submit: Maintain focus or navigate

**Screen Reader:**
- Announces field labels
- Announces validation errors
- Announces loading state: "Signing in, please wait"

**Touch Targets:**
- All interactive elements: Minimum 44x44px
- Checkbox label: Full clickable area

---

### Step 2.8: Apply Design Rules

**Colors:**
- Inputs: border-input, bg-background
- Error borders: border-destructive
- Submit button: bg-primary text-primary-foreground

**Spacing:**
- Card padding: p-6
- Between fields: space-y-4 (16px)
- Label to input: mb-2 (8px)

**Typography:**
- Card title: text-2xl font-semibold
- Card description: text-sm text-muted-foreground
- Labels: text-sm font-medium
- Inputs: text-base
- Error messages: text-sm text-destructive

---

### Step 2.9: Create Traceability Mapping

| Wireframe Element | Component Element | AC ID | Status |
|-------------------|-------------------|-------|--------|
| Email Input | COMP-001-EL-001 | AC-001 | ✅ |
| Password Input | COMP-001-EL-002 | AC-002 | ✅ |
| Sign In Button | COMP-001-EL-004 | AC-003 | ✅ |
| Error Alert | (State: Error) | AC-004 | ✅ |
| Navigation | (State: Success) | AC-005 | ✅ |

---

### Step 2.10: Validate Against Quality Gate

Check [stage2-component-specs/quality-gate.md](stage2-component-specs/quality-gate.md):

- [ ] All wireframe elements mapped
- [ ] ShadCN components valid
- [ ] All states defined
- [ ] Validation rules complete
- [ ] Accessibility specified
- [ ] Design rules applied
- [ ] Traceability complete

**If passes:** Proceed to Stage 3
**If fails:** Fix issues, re-validate

---

## Stage 3: Interactions

**Goal:** Document how component behaves using state diagrams

**Input:** Approved component specs (COMP-XXX)
**Output:** Interaction specs (INT-XXX)
**Time:** 2-3 hours per interaction

---

### Step 3.1: Create Interaction Spec File

Use [template-interaction-flow.md](stage3-interactions/template-interaction-flow.md)

**File naming:** `int-001-login-submission.md`

**Metadata:**
```
Interaction ID: INT-001
Interaction Name: Login Form Submission Flow
Component ID: COMP-001
Wireframe ID: WF-001
Story ID: ST-001
Acceptance Criteria: AC-001, AC-002, AC-003, AC-004, AC-005
Interaction Type: Form Flow
```

---

### Step 3.2: Draw State Diagram

Create ASCII state diagram using notation from [template-state-diagram.md](stage3-interactions/template-state-diagram.md):

```
→ +------------------+
  | Idle             |
  +------------------+
         |
         | user enters data
         v
  +------------------+
  | Filling          |
  +------------------+
         |
         | on blur /validate
         v
  +------------------+
  | Validating       |
  +------------------+
         |
    +----+----+
    |         |
[if valid] [if invalid]
    |         |
    |         v
    |    +------------------+
    |    | Invalid          |
    |    +------------------+
    |         |
    +----+----+
         |
         v
  +------------------+
  | Ready            |
  +------------------+
         |
         | submit [if valid] /call API
         v
  +------------------+
  | Submitting       |
  +------------------+
         |
    +----+----+
    |         |
 success    error
 /navigate  /show alert
    |         |
    v         v
+--------+ +------------------+
| Success| | Error            |
+--------+ +------------------+
   ⊗            |
                | retry
                v
           +------------------+
           | Idle             |
           +------------------+
```

---

### Step 3.3: Define All States

For each state in diagram, provide:

**State 1: Idle**
- State ID: INT-001-ST-001
- Description: Initial state, form empty
- Component State: COMP-001 - Default
- UI: Empty inputs, submit enabled
- Available Actions: Enter email, enter password
- Exit Conditions: User starts typing → Filling

**State 2: Filling**
- State ID: INT-001-ST-002
- Description: User actively entering data
- Component State: COMP-001 - Default (with data)
- UI: Inputs contain text
- Available Actions: Continue typing, blur field, submit
- Exit Conditions: Blur field → Validating

[Continue for all states...]

---

### Step 3.4: Define All Transitions

For each transition, provide:

**Transition: Idle → Filling**
- Trigger: User starts typing in email or password field
- Condition: N/A (always occurs)
- Action: None
- Duration: Immediate

**Transition: Filling → Validating**
- Trigger: User blurs field (moves focus away)
- Condition: Field has value
- Action: /validate field
- Validation: Check required, format (email), min length (password)
- Duration: < 100ms

**Transition: Validating → Invalid**
- Trigger: Validation fails
- Condition: [if invalid]
- Action: /show error message
- Error Display: Red border, error text below field
- Duration: Immediate

**Transition: Ready → Submitting**
- Trigger: User clicks "Sign In" or presses Enter
- Condition: [if all fields valid]
- Action: /call API (POST /api/auth/login)
- Loading Indicator: Spinner on button, "Signing in..."
- Duration: 1-3 seconds (API call)

**Transition: Submitting → Success**
- Trigger: API returns 200 OK
- Condition: [if success]
- Action: /navigate to dashboard, /show toast "Welcome back!"
- Duration: Toast 3 seconds, navigation immediate

**Transition: Submitting → Error**
- Trigger: API returns error (401, 500, network error)
- Condition: [if error]
- Action: /show error alert
- Error Message: "Invalid email or password. Please try again."
- Duration: Alert persists until dismissed

---

### Step 3.5: Document User Flow

**Happy Path:**
1. User opens login page → Idle state
2. User enters email → Filling state
3. User blurs email field → Validating state (< 100ms)
4. Validation passes → Ready state (no visible change, field valid)
5. User enters password → Filling state
6. User blurs password → Validating → Ready
7. User clicks "Sign In" → Validating (< 100ms) → Submitting state
8. API call to /api/auth/login → Submitting state (1-3s)
9. API returns success → Success state
10. Toast appears: "Welcome back!"
11. User redirected to dashboard

**Alternative Path: Invalid Credentials**
1-7. Same as happy path through Submitting state
8. API returns 401 Unauthorized → Error state
9. Error alert appears: "Invalid email or password"
10. User corrects email → Filling state
11. User submits again → Submitting state
12. API success → Success state

---

### Step 3.6: Document Edge Cases

**Edge Case 1: User submits with validation errors**
- Scenario: User has invalid email format, tries to submit
- Handling: Re-validate form, stay in Invalid state, show errors
- Recovery: User fixes errors → Ready → Submit again

**Edge Case 2: Network timeout**
- Scenario: API call takes > 10 seconds
- Handling: Timeout, transition to Error state
- Error Message: "Unable to connect. Please check your internet."
- Recovery: User clicks Retry

**Edge Case 3: User navigates away mid-submission**
- Scenario: User clicks browser back during Submitting state
- Handling: Cancel API call (if possible), navigate away
- No confirmation needed (no data entered yet)

---

### Step 3.7: Document API Integration

**Endpoint:** POST /api/auth/login
**Authentication:** Not required (this is the auth endpoint)

**Request:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "rememberMe": true
}
```

**Success Response (200):**
```json
{
  "status": "success",
  "data": {
    "token": "jwt_token_here",
    "user": {
      "id": "user_123",
      "name": "John Doe"
    }
  }
}
```

**Error Response (401):**
```json
{
  "status": "error",
  "message": "Invalid email or password"
}
```

**State Transitions:**
- Before Call: Ready
- During Call: Submitting
- On Success (200): Success
- On Error (401): Error

---

### Step 3.8: Document Accessibility Flow

**Keyboard Navigation:**
- State: Idle → Tab through Email, Password, Checkbox, Submit, Forgot Password
- State: Ready → Enter key submits form
- State: Error → Tab to Retry or edit fields

**Screen Reader Announcements:**
- State: Submitting → "Signing in, please wait" (aria-live="polite")
- State: Invalid → "Email is required" announced when error appears
- State: Error → "Invalid email or password" announced (aria-live="assertive")
- State: Success → "Welcome back" toast announced

**Focus Management:**
- Initial: Email input has focus
- On Error: First invalid field receives focus
- On API Error: Focus remains on Submit button

---

### Step 3.9: Create Traceability Mapping

| State/Transition | AC ID | Status |
|------------------|-------|--------|
| Idle state (email input) | AC-001 | ✅ |
| Idle state (password input) | AC-002 | ✅ |
| Transition: Ready → Submitting | AC-003 | ✅ |
| Error state | AC-004 | ✅ |
| Success state | AC-005 | ✅ |

**Coverage:** All ACs addressed

---

### Step 3.10: Validate Against Quality Gate

Check [stage3-interactions/quality-gate.md](stage3-interactions/quality-gate.md):

- [ ] State diagram complete
- [ ] All states defined
- [ ] All transitions defined
- [ ] User flow documented
- [ ] Edge cases handled
- [ ] API integration documented
- [ ] Accessibility flow complete
- [ ] Traceability complete

**If passes:** Ready for development!
**If fails:** Fix issues, re-validate

---

## Post-Stage 3: Handoff to Development

Once all three stages pass quality gates:

1. **Package Artifacts:**
   - Wireframes (WF-XXX)
   - Component Specs (COMP-XXX)
   - Interaction Specs (INT-XXX)

2. **Developer Briefing:**
   - Walk through state diagrams
   - Explain complex interactions
   - Clarify any ambiguities

3. **Implementation:**
   - Developers implement based on specs
   - Link code files to component IDs
   - Create tests based on UAT + interaction specs

4. **Verification:**
   - Review implementation against specs
   - Verify all ACs addressed
   - Run accessibility tests
   - Confirm responsive behavior

---

## AI-Assisted Workflow

Use AI prompts at each stage to speed up work:

**Stage 1:**
```
Generate wireframe from acceptance criteria [paste ACs]
```
Use: [stage1-wireframes/prompts.md](stage1-wireframes/prompts.md)

**Stage 2:**
```
Generate component spec from wireframe [paste wireframe]
```
Use: [stage2-component-specs/prompts.md](stage2-component-specs/prompts.md)

**Stage 3:**
```
Generate state diagram from component spec [paste component spec]
```
Use: [stage3-interactions/prompts.md](stage3-interactions/prompts.md)

**Validation:**
```
Validate [wireframe/component spec/interaction spec] against quality gate
```

---

## Tips for Success

1. **Start Small:** Begin with simple components (login form, search box)
2. **Use Templates:** Don't start from scratch, adapt templates
3. **Reference Patterns:** Check patterns/ for common solutions
4. **Follow Design Rules:** Apply design system rules from the start
5. **Validate Early:** Don't wait until end to check quality gates
6. **AI Assistance:** Use provided prompts to generate initial drafts
7. **Iterate:** Refine based on feedback
8. **Document Edge Cases:** Think through error scenarios
9. **Accessibility First:** Build WCAG AA compliance into every stage
10. **Traceability Always:** Link every artifact back to ACs

---

## Common Mistakes to Avoid

❌ **Skipping wireframes:** Jumping straight to component specs
❌ **Vague component specs:** Not specifying variants, sizes, props
❌ **Missing states:** Forgetting loading, error, empty states
❌ **No error handling:** Not documenting error scenarios
❌ **Breaking traceability:** Losing connection to acceptance criteria
❌ **Ignoring accessibility:** Not including ARIA, keyboard nav
❌ **Desktop-only thinking:** Forgetting mobile/tablet layouts
❌ **Skipping quality gates:** Moving forward without validation

---

## Summary

**The design workflow ensures:**
- Complete traceability from requirements to implementation
- Consistent application of design system rules
- Accessibility built-in from the start
- All states and interactions documented
- Ready-to-implement specifications for developers

**Key Success Factors:**
- Follow all three stages
- Pass quality gates
- Apply design rules
- Document all states and transitions
- Maintain traceability

**Ready to start?** Pick your first user story and begin with Stage 1!

---

**Related:**
- [Design Framework README](README.md)
- [Stage 1: Wireframes](stage1-wireframes/)
- [Stage 2: Component Specs](stage2-component-specs/)
- [Stage 3: Interactions](stage3-interactions/)
- [Design Rules](design-rules/)
- [Templates](templates/)
- [Patterns](patterns/)
