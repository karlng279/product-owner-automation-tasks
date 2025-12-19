# Interaction Flow Examples

## Overview

This document provides complete examples of interaction specifications with state diagrams.

**Examples Included:**
1. Login Form Submission (Form Flow)
2. Delete Confirmation Dialog (Modal Flow)
3. Shipment Creation Multi-Step Form (Multi-Step Flow)
4. Table Filtering and Sorting (Data Table Interaction)

---

## Example 1: Login Form Submission

**Interaction ID:** INT-001
**Interaction Name:** Login Form Submission Flow
**Component ID(s):** COMP-001 (Login Form)
**Wireframe ID(s):** WF-001
**Story ID(s):** ST-001
**Acceptance Criteria IDs:** AC-001, AC-002, AC-003, AC-004, AC-005
**Interaction Type:** Form Flow

---

### 1. Interaction Overview

**Purpose:** Authenticate user by validating credentials and establishing a session.

**Context:** Occurs on the login page (/login) when user attempts to sign in.

**User Goal:** Successfully log in to access their account and navigate to the dashboard.

**Components Involved:**
- COMP-001: Login Form (Email input, Password input, Submit button)

---

### 2. State Diagram

```
→ +------------------+
  | Idle             |
  | (Empty form)     |
  +------------------+
         |
         | user enters email/password
         v
  +------------------+
  | Filling          |
  | (Typing)         |
  +------------------+
         |
         | on blur /validate field
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
    |    | (Show errors)    |
    |    +------------------+
    |         |
    |         | user fixes errors
    |         |
    |    +----+
    |    |
    v    v
  +------------------+
  | Ready            |
  | (Form valid)     |
  +------------------+
         |
         | user clicks Submit [if valid] /call API
         v
  +------------------+
  | Submitting       |
  | (API call)       |
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
| (Dash) | | (Failed login)   |
+--------+ +------------------+
   ⊗            |
                | user clicks Retry
                v
           +------------------+
           | Idle             |
           +------------------+
```

---

### 3. State Definitions

#### State 1: Idle (Empty form)

**State ID:** INT-001-ST-001

**Description:** Initial state. Form is empty, waiting for user input.

**Component State:** COMP-001 - Default state

**UI Appearance:**
- Email input: Empty, placeholder visible
- Password input: Empty, placeholder visible
- Remember me checkbox: Unchecked
- Submit button: Enabled but not actionable (form not yet filled)

**Available Actions:**
- Enter email
- Enter password
- Check/uncheck "Remember me"
- Click "Forgot password?" link

**Exit Conditions:**
- User starts typing in email or password field

---

#### State 2: Filling (Typing)

**State ID:** INT-001-ST-002

**Description:** User is actively filling out the form fields.

**Component State:** COMP-001 - Default state (with data)

**UI Appearance:**
- Email input: Contains text
- Password input: Contains text (masked)
- No validation errors shown yet
- Submit button: Enabled

**Available Actions:**
- Continue typing
- Blur field (triggers validation)
- Submit form

**Exit Conditions:**
- User blurs a field (moves focus away) → Validating
- User clicks Submit → Validating

---

#### State 3: Validating

**State ID:** INT-001-ST-003

**Description:** System is validating form input fields.

**Component State:** COMP-001 - Validating state

**UI Appearance:**
- Brief moment (< 100ms), usually not visible to user
- Fields may show subtle loading indicator

**Available Actions:**
- None (momentary state)

**Exit Conditions:**
- If validation passes → Ready
- If validation fails → Invalid

**Data:**
- Email value
- Password value
- Validation rules

---

#### State 4: Invalid (Show errors)

**State ID:** INT-001-ST-004

**Description:** Form contains validation errors.

**Component State:** COMP-001 - Error state

**UI Appearance:**
- Invalid fields: Red border (border-destructive)
- Error messages: Below each invalid field in red text
- Submit button: Enabled (user can attempt submit, will re-validate)

**Available Actions:**
- Fix errors by editing fields
- Attempt to submit (will re-validate)

**Exit Conditions:**
- User edits invalid field → Filling
- User fixes all errors → Ready (via Validating)

**Data:**
- Field values
- Error messages for each invalid field

---

#### State 5: Ready (Form valid)

**State ID:** INT-001-ST-005

**Description:** All form fields are valid, ready to submit.

**Component State:** COMP-001 - Valid state

**UI Appearance:**
- All fields: Valid (green checkmark icons optional)
- No error messages
- Submit button: Enabled and highlighted

**Available Actions:**
- Edit fields (returns to Filling)
- Click Submit button
- Press Enter key (submits form)

**Exit Conditions:**
- User edits field → Filling
- User clicks Submit → Submitting

---

#### State 6: Submitting (API call)

**State ID:** INT-001-ST-006

**Description:** Form data is being sent to authentication API.

**Component State:** COMP-001 - Loading state

**UI Appearance:**
- Submit button: Shows spinner, text changes to "Signing in...", disabled
- All inputs: Disabled (opacity-50)
- Forgot password link: Disabled

**Available Actions:**
- None (waiting for API response)

**Exit Conditions:**
- API returns success → Success
- API returns error → Error
- Timeout (10s) → Error

**Data:**
- Email value (being sent)
- Password value (being sent)
- Remember me value

---

#### State 7: Success (Dashboard)

**State ID:** INT-001-ST-007 (Final State)

**Description:** Authentication successful, navigating to dashboard.

**Component State:** COMP-001 - Success state

**UI Appearance:**
- Success Toast: "Welcome back!"
- Redirecting to dashboard (/dashboard)
- Login form may show brief success indicator before redirect

**Available Actions:**
- None (automatic navigation)

**Exit Conditions:**
- None (final state)

---

#### State 8: Error (Failed login)

**State ID:** INT-001-ST-008

**Description:** Authentication failed due to invalid credentials or server error.

**Component State:** COMP-001 - Error state

**UI Appearance:**
- Alert (variant: destructive) at top of form
- Error message: "Invalid email or password. Please try again."
- All inputs: Re-enabled
- Submit button: Shows "Sign In" again, enabled

**Available Actions:**
- Edit credentials
- Click Retry (resets to Idle)
- Click Forgot Password

**Exit Conditions:**
- User edits field → Filling
- User clicks Retry → Idle

---

### 4. User Flow Description (Happy Path)

1. User navigates to login page → **Idle state**
2. User enters email → **Filling state**
3. User enters password → **Filling state**
4. User blurs password field → **Validating state** (< 100ms)
5. Validation passes → **Ready state**
6. User clicks "Sign In" button → **Validating state** (< 100ms) → **Submitting state**
7. API call to /api/auth/login → **Submitting state** (1-3 seconds)
8. API returns success → **Success state**
9. Success toast appears: "Welcome back!"
10. User is redirected to dashboard → **Final**

---

### 5. Alternative Path: Invalid Credentials

1. User fills form → **Ready state**
2. User clicks Submit → **Submitting state**
3. API returns 401 Unauthorized → **Error state**
4. Error alert shows: "Invalid email or password. Please try again."
5. User edits email → **Filling state**
6. User corrects credentials → **Ready state**
7. User clicks Submit again → **Submitting state**
8. API returns success → **Success state**

---

### 6. Edge Cases & Error Scenarios

#### Edge Case 1: User Clicks Submit While Invalid

**Scenario:** User has validation errors but clicks Submit anyway.

**Handling:** Re-validate form, stay in Invalid state, show validation errors.

**User Experience:** Error messages highlight invalid fields, focus moves to first invalid field.

**Recovery:** User fixes errors, form validates, user can submit.

---

#### Error Scenario 1: Network Error

**Error Type:** Network Error

**Trigger:** API call fails due to network disconnection

**Current State:** Submitting

**Error State:** Error

**Error Message:** "Unable to connect. Please check your internet connection."

**User Actions:**
- Retry: Clicks Retry button → Returns to Idle, user can attempt again
- Cancel: Closes error, stays on login page

**Recovery Path:**
1. User checks internet connection
2. User clicks Retry
3. Returns to Idle state
4. User submits form again

---

#### Error Scenario 2: Server Error (500)

**Error Type:** Server Error

**Trigger:** API returns 500 Internal Server Error

**Error Message:** "Something went wrong. Please try again later."

**User Actions:**
- Retry: Attempts submission again
- Cancel: Stays on login page

---

### 7. API Integration

**Endpoint:** /api/auth/login
**Method:** POST
**Authentication:** Not required (this is the authentication endpoint)

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
      "name": "John Doe",
      "email": "user@example.com"
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
- On Success (200): Success → Navigate to dashboard
- On Error (401): Error → Show error message
- On Error (500): Error → Show server error message

---

### 8. Traceability

| AC ID | Acceptance Criteria | State/Transition | Status |
|-------|---------------------|------------------|--------|
| AC-001 | User can enter email | Filling state | ✅ |
| AC-002 | User can enter password | Filling state | ✅ |
| AC-003 | Form validates before submit | Validating → Ready/Invalid | ✅ |
| AC-004 | User can submit valid form | Ready → Submitting | ✅ |
| AC-005 | User sees error for invalid credentials | Error state | ✅ |

---

## Example 2: Delete Confirmation Dialog

**Interaction ID:** INT-002
**Interaction Name:** Delete Shipment Confirmation Flow
**Component ID(s):** COMP-020 (Delete Confirmation Dialog)
**Wireframe ID(s):** WF-020
**Story ID(s):** ST-015
**Acceptance Criteria IDs:** AC-075, AC-076, AC-077
**Interaction Type:** Modal Flow

---

### 1. Interaction Overview

**Purpose:** Confirm user's intent to delete a shipment before performing destructive action.

**Context:** Triggered when user clicks "Delete" action in shipment table row actions.

**User Goal:** Safely delete a shipment with confirmation to prevent accidental deletion.

**Components Involved:**
- COMP-020: Delete Confirmation Dialog
- COMP-030: Shipment List Table (trigger)

---

### 2. State Diagram

```
→ +------------------+
  | Closed           |
  +------------------+
         |
         | user clicks Delete /open dialog
         v
  +------------------+
  | Opening          |
  | (Animating)      |
  +------------------+
         |
         | animation complete /trap focus
         v
  +------------------+
  | Open             |
  | (Showing)        |
  +------------------+
         |
    +----+----+----------+
    |         |          |
user clicks user clicks  Escape
 Confirm    Cancel       pressed
    |         |          |
    |         +----------+
    |         |
    v         v
+----------+ +------------------+
|Processing| | Closing          |
+----------+ | (Animating)      |
    |        +------------------+
    |                |
    +-----+          | animation complete /restore focus
    |     |          v
success  error  +------------------+
    |     |     | Closed           |
    |     |     +------------------+
    |     v
    | +------------------+
    | | Error            |
    | | (Show error)     |
    | +------------------+
    |     |
    |     | user clicks Retry
    |     v
    | +------------------+
    | | Open             |
    | +------------------+
    |
    | /remove row
    | /show toast
    v
+------------------+
| Closed           | ⊗
| (Deleted)        |
+------------------+
```

---

### 3. State Definitions

#### State 1: Closed

**State ID:** INT-002-ST-001

**Description:** Dialog is not visible. Initial state and final state after deletion or cancellation.

**Component State:** COMP-020 - Closed

**UI Appearance:**
- Dialog: Not rendered or hidden
- Table: Visible with all shipments
- Delete button in table: Visible and enabled

**Available Actions:**
- Click Delete button in table row

**Exit Conditions:**
- User clicks Delete button → Opening

---

#### State 2: Opening (Animating)

**State ID:** INT-002-ST-002

**Description:** Dialog is animating into view.

**Component State:** COMP-020 - Opening

**UI Appearance:**
- Overlay: Fading in (bg-background/80)
- Dialog: Sliding/fading in from center
- Duration: 200ms

**Available Actions:**
- None (brief animation)

**Exit Conditions:**
- Animation completes → Open

---

#### State 3: Open (Showing)

**State ID:** INT-002-ST-003

**Description:** Dialog is fully visible, waiting for user decision.

**Component State:** COMP-020 - Open

**UI Appearance:**
- Overlay: Visible, darkens background
- Dialog: Fully visible, centered
- Title: "Delete Shipment"
- Description: "Are you sure you want to delete this shipment? This action cannot be undone."
- Shipment info: Shipment number, customer, status displayed
- Cancel button: Enabled, focused (default focus)
- Delete button: Enabled, destructive variant

**Available Actions:**
- Click Cancel button
- Click Delete button
- Press Escape key
- Click overlay (optional, same as Cancel)

**Exit Conditions:**
- User clicks Cancel → Closing
- User presses Escape → Closing
- User clicks Delete → Processing

**Focus Management:**
- Focus trapped within dialog
- Initial focus: Cancel button (safer default)
- Tab cycles: Cancel → Delete → Cancel

---

#### State 4: Processing

**State ID:** INT-002-ST-004

**Description:** Delete API call is in progress.

**Component State:** COMP-020 - Loading

**UI Appearance:**
- Delete button: Spinner + "Deleting..." text, disabled
- Cancel button: Disabled
- Dialog content: Disabled (overlay semi-transparent)

**Available Actions:**
- None (waiting for API response)

**Exit Conditions:**
- API success → Closed (success path)
- API error → Error

---

#### State 5: Closing (Animating)

**State ID:** INT-002-ST-005

**Description:** Dialog is animating out of view.

**Component State:** COMP-020 - Closing

**UI Appearance:**
- Dialog: Sliding/fading out
- Overlay: Fading out
- Duration: 200ms

**Available Actions:**
- None (brief animation)

**Exit Conditions:**
- Animation completes → Closed

---

#### State 6: Error (Show error)

**State ID:** INT-002-ST-006

**Description:** Delete operation failed.

**Component State:** COMP-020 - Error

**UI Appearance:**
- Alert (variant: destructive) appears in dialog
- Error message: "Failed to delete shipment. Please try again."
- Delete button: Re-enabled, shows "Delete" again
- Cancel button: Re-enabled

**Available Actions:**
- Click Retry (Delete button)
- Click Cancel

**Exit Conditions:**
- User clicks Retry → Processing
- User clicks Cancel → Closing

---

### 4. User Flow Description (Happy Path)

1. User views shipment list table → **Closed state**
2. User clicks "Delete" in row actions → **Opening state** (200ms)
3. Dialog animates in → **Open state**
4. User reviews shipment info in dialog
5. User clicks "Delete" button → **Processing state**
6. API call to DELETE /api/shipments/{id} → **Processing state** (1-2 seconds)
7. API returns success → **Closing state** (200ms)
8. Dialog closes, shipment row removed from table
9. Success toast appears: "Shipment deleted successfully" → **Closed state (success)**

---

### 5. Alternative Path: User Cancels

1. Dialog is **Open**
2. User clicks "Cancel" button → **Closing state** (200ms)
3. Dialog closes, no deletion occurs → **Closed state**
4. User returns to table view, shipment still present

---

### 6. Edge Cases & Error Scenarios

#### Edge Case 1: User Presses Escape

**Scenario:** User presses Escape key while dialog is open.

**Handling:** Same as clicking Cancel button.

**User Experience:** Dialog closes with animation, no deletion.

**Recovery:** N/A (expected behavior)

---

#### Error Scenario 1: API Error (500)

**Error Type:** Server Error

**Trigger:** DELETE API returns 500

**Current State:** Processing

**Error State:** Error

**Error Message:** "Failed to delete shipment. Please try again."

**User Actions:**
- Retry: Attempts delete again
- Cancel: Closes dialog, shipment remains

**Recovery:**
1. User clicks Retry
2. Returns to Processing state
3. API call retried

---

### 7. API Integration

**Endpoint:** /api/shipments/{id}
**Method:** DELETE
**Authentication:** Required

**Request:**
- URL Param: Shipment ID
- Body: None

**Success Response (200):**
```json
{
  "status": "success",
  "message": "Shipment deleted successfully"
}
```

**Error Response (404):**
```json
{
  "status": "error",
  "message": "Shipment not found"
}
```

**Error Response (500):**
```json
{
  "status": "error",
  "message": "Server error"
}
```

**State Transitions:**
- Before Call: Open
- During Call: Processing
- On Success (200): Closing → Closed, remove row, show toast
- On Error (404/500): Error, show error alert in dialog

---

### 8. Traceability

| AC ID | Acceptance Criteria | State/Transition | Status |
|-------|---------------------|------------------|--------|
| AC-075 | User must confirm before deletion | Open state | ✅ |
| AC-076 | User can cancel deletion | Open → Closing (Cancel) | ✅ |
| AC-077 | User sees feedback after deletion | Success toast | ✅ |

---

## Example 3: Multi-Step Form (Shipment Creation)

**Interaction ID:** INT-003
**Interaction Name:** Create Shipment Multi-Step Flow
**Component ID(s):** COMP-040, COMP-041, COMP-042 (Step 1, 2, 3 forms)
**Wireframe ID(s):** WF-040, WF-041, WF-042
**Story ID(s):** ST-025
**Acceptance Criteria IDs:** AC-120, AC-121, AC-122, AC-123, AC-124
**Interaction Type:** Multi-Step Flow

---

### 1. Interaction Overview

**Purpose:** Guide user through multi-step process to create a new shipment.

**Context:** Create Shipment page (/shipments/create) with 3 steps.

**User Goal:** Successfully create a shipment by providing all required information across multiple steps.

**Components Involved:**
- COMP-040: Step 1 Form (Customer & Origin)
- COMP-041: Step 2 Form (Destination & Details)
- COMP-042: Step 3 Form (Review & Submit)

---

### 2. State Diagram

```
→ +------------------+
  | Step 1 Active    |
  | (Customer form)  |
  +------------------+
         |
         | user clicks Next [if valid] /store data
         v
  +------------------+
  | Validating       |
  | Step 1           |
  +------------------+
         |
    +----+----+
    |         |
 [valid]  [invalid]
    |         |
    |         v
    |    +------------------+
    |    | Step 1 Invalid   |
    |    | (Show errors)    |
    |    +------------------+
    |         |
    |         | user fixes
    |         |
    +----+----+
         |
         v
  +------------------+
  | Step 2 Active    |
  | (Destination)    |
  +------------------+
         |
    +----+----+
    |         |
user clicks user clicks
  Next      Back
    |         |
    |         v
    |    +------------------+
    |    | Step 1 Active    |
    |    +------------------+
    |
    v
  +------------------+
  | Validating       |
  | Step 2           |
  +------------------+
         |
    +----+----+
    |         |
 [valid]  [invalid]
    |         |
    |         v
    |    +------------------+
    |    | Step 2 Invalid   |
    |    +------------------+
    |         |
    +----+----+
         |
         v
  +------------------+
  | Step 3 Active    |
  | (Review)         |
  +------------------+
         |
    +----+----+
    |         |
user clicks user clicks
 Submit     Back
    |         |
    |         v
    |    +------------------+
    |    | Step 2 Active    |
    |    +------------------+
    |
    v
  +------------------+
  | Submitting       |
  | (API call)       |
  +------------------+
         |
    +----+----+
    |         |
 success   error
    |         |
    v         v
+--------+ +------------------+
| Success| | Error            |
| (Done) | | (Failed submit)  |
+--------+ +------------------+
   ⊗            |
                | user clicks Retry
                v
           +------------------+
           | Step 3 Active    |
           +------------------+
```

---

### 3. State Definitions

#### State 1: Step 1 Active (Customer form)

**State ID:** INT-003-ST-001

**Description:** User is filling out Step 1 form (Customer & Origin information).

**Component State:** COMP-040 - Active

**UI Appearance:**
- Progress indicator: Step 1 of 3 active
- Step 1 form: Customer name, Email, Origin address fields
- Next button: Enabled
- Back button: Hidden (first step)
- Cancel button: Enabled (returns to shipments list)

**Available Actions:**
- Fill form fields
- Click Next (validates and proceeds)
- Click Cancel (abandon creation)

**Exit Conditions:**
- User clicks Next → Validating Step 1

**Data:**
- Customer name
- Customer email
- Origin address

---

#### State 2: Validating Step 1

**State ID:** INT-003-ST-002

**Description:** System validating Step 1 form data.

**Validation:** Customer name (required), Email (required, format), Origin (required)

**Exit Conditions:**
- If all valid → Step 2 Active
- If any invalid → Step 1 Invalid

---

[Additional states follow same pattern for Step 2, Step 3, Submitting, Success, Error...]

---

### 4. User Flow Description (Happy Path)

1. User navigates to /shipments/create → **Step 1 Active**
2. User fills Customer name, Email, Origin
3. User clicks "Next" → **Validating Step 1** (< 100ms)
4. Validation passes → **Step 2 Active**, data from Step 1 stored
5. User fills Destination, Weight, Dimensions
6. User clicks "Next" → **Validating Step 2** (< 100ms)
7. Validation passes → **Step 3 Active**, data from Step 2 stored
8. User reviews all entered information
9. User clicks "Submit" → **Submitting** (2-4 seconds)
10. API returns success → **Success**
11. Success message: "Shipment created successfully!"
12. User redirected to shipment detail page

---

### 5. Alternative Path: User Goes Back

1. User is on **Step 2 Active**
2. User clicks "Back" button (no validation) → **Step 1 Active**
3. Step 1 form shows previously entered data
4. User can edit or proceed

**Note:** Going back does NOT require validation, preserves data.

---

### 6. API Integration

**Endpoint:** /api/shipments
**Method:** POST
**Request:**
```json
{
  "customer": {
    "name": "Acme Corp",
    "email": "contact@acme.com"
  },
  "origin": "New York, NY",
  "destination": "Los Angeles, CA",
  "weight": 150.5,
  "dimensions": {
    "length": 50,
    "width": 30,
    "height": 40
  }
}
```

**Success Response (201):**
```json
{
  "status": "success",
  "data": {
    "id": "SHP-001",
    "shipmentNumber": "SHP-2024-001"
  }
}
```

---

### 7. Traceability

| AC ID | Acceptance Criteria | State/Transition | Status |
|-------|---------------------|------------------|--------|
| AC-120 | User can enter customer info | Step 1 Active | ✅ |
| AC-121 | User can proceed to next step | Step 1 → Step 2 | ✅ |
| AC-122 | User can go back without losing data | Back button | ✅ |
| AC-123 | User can review before submit | Step 3 Active | ✅ |
| AC-124 | User sees confirmation on success | Success state | ✅ |

---

## Summary

These examples demonstrate:
1. **Form flows** with validation and API integration
2. **Modal flows** with confirmation patterns
3. **Multi-step flows** with progress and navigation
4. **Complete state diagrams** with ASCII notation
5. **Edge cases and error handling**
6. **Traceability** to acceptance criteria

Use these as templates when creating your own interaction specifications.
