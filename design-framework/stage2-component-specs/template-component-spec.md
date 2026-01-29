# Component Specification Template

**Component ID:** COMP-XXX
**Component Name:** [Descriptive Name]
**Wireframe ID(s):** WF-XXX, WF-XXX
**Story ID(s):** ST-XXX
**Acceptance Criteria IDs:** AC-XXX, AC-XXX, AC-XXX
**Component Type:** Form | Card | Modal | Navigation | Detail | List | Other
**Created:** [Date]
**Last Updated:** [Date]

---

## 1. Component Overview

### Purpose
[What this component does. 1-2 sentences explaining its purpose and functionality.]

### Context
[Where this component appears in the application. What page/screen? What user flow?]

### User Interaction
[How users interact with this component. What can they do? What actions can they take?]

### Key Functionality
- [Functionality 1]
- [Functionality 2]
- [Functionality 3]

---

## 2. Component Structure

### Layout

**Container:**
- Width: [e.g., "max-w-md", "full width", "80% of viewport"]
- Padding: [e.g., "p-6" (24px)]
- Background: [e.g., "bg-card"]
- Border: [e.g., "border border-border, rounded-lg"]
- Shadow: [e.g., "none", "shadow-lg"]

**Layout System:**
- Type: [Grid | Flexbox]
- Configuration: [e.g., "flex flex-col gap-4", "grid grid-cols-2 gap-6"]
- Spacing: [Between elements, e.g., "space-y-4" (16px between items)]

### Responsive Behavior

**Mobile (< 640px):**
- [Layout changes, e.g., "Stack vertically, full width, padding reduced to p-4"]

**Tablet (640px - 1024px):**
- [Layout changes, e.g., "2-column grid, padding p-6"]

**Desktop (> 1024px):**
- [Layout changes, e.g., "3-column grid, max width 1024px, centered"]

---

## 3. UI Elements & ShadCN Components

### Element 1: [Element Name from Wireframe]

**Element ID:** COMP-XXX-EL-001

**ShadCN Component:** [Component Name]
**Variant:** [e.g., "default", "secondary", "destructive", "outline"]
**Size:** [e.g., "default", "sm", "lg"]

**Props:**
- prop1: [value]
- prop2: [value]
- disabled: [true/false]
- required: [true/false]

**Content/Label:**
[Text content or label, e.g., "Email Address", "Submit Application"]

**States:**
- Default: [Description of default appearance]
- Hover: [Changes on hover, e.g., "bg-primary/90"]
- Focus: [Focus state, e.g., "ring-2 ring-ring"]
- Active: [While clicking/interacting]
- Disabled: [When disabled, e.g., "opacity-50, cursor-not-allowed"]
- Loading: [If applicable, e.g., "Show spinner, disable interaction"]
- Error: [If applicable, e.g., "border-destructive"]
- Success: [If applicable]

**Validation:** [If applicable]
- Rule: [e.g., "Required", "Email format", "Min 8 characters"]
- Error Message: [e.g., "Email is required", "Invalid email format"]
- Error Placement: [e.g., "Below input field"]
- Validation Timing: [e.g., "On blur", "On submit"]

**Accessibility:**
- ARIA Label: [If applicable, e.g., aria-label="Close dialog"]
- Keyboard: [Keyboard interaction, e.g., "Enter to submit", "Escape to close"]
- Focus Order: [Tab order position]
- Touch Target: [Size, e.g., "44x44px minimum"]

**Design Rules Applied:**
- Colors: [e.g., "bg-primary text-primary-foreground"]
- Spacing: [e.g., "px-4 py-2" (16px horizontal, 8px vertical)]
- Typography: [e.g., "text-base font-medium"]
- Component Standards: [Reference to component-standards.md section]

---

### Element 2: [Element Name]

**Element ID:** COMP-XXX-EL-002

[Same structure as Element 1...]

---

### Element 3: [Element Name]

**Element ID:** COMP-XXX-EL-003

[Same structure as Element 1...]

---

[Continue for all UI elements in the component...]

---

## 4. Component Composition

### Structure Hierarchy

```
[Parent Component Name]
├── [Child Component 1]
│   ├── [Nested Component 1a]
│   └── [Nested Component 1b]
├── [Child Component 2]
└── [Child Component 3]
    ├── [Nested Component 3a]
    └── [Nested Component 3b]
```

### Example: Login Form

```
Card (ShadCN)
├── CardHeader
│   ├── CardTitle: "Sign In"
│   └── CardDescription: "Enter your credentials to continue"
├── CardContent
│   └── Form
│       ├── FormField: Email
│       │   ├── FormLabel: "Email"
│       │   ├── FormControl: Input (type: email)
│       │   └── FormMessage: Error message
│       ├── FormField: Password
│       │   ├── FormLabel: "Password"
│       │   ├── FormControl: Input (type: password)
│       │   └── FormMessage: Error message
│       └── FormField: Remember Me
│           ├── FormControl: Checkbox
│           └── FormLabel: "Remember me"
└── CardFooter
    ├── Button (variant: default): "Sign In"
    └── Button (variant: link): "Forgot Password?"
```

---

## 5. Component States

### Default State
[Description of initial appearance when component first loads]

### Loading State
**Trigger:** [When does this state occur?]
**UI Changes:**
- [e.g., "Show skeleton placeholder"]
- [e.g., "Disable all interactions"]
- [e.g., "Display spinner"]

### Error State
**Trigger:** [When does this state occur?]
**UI Changes:**
- [e.g., "Show error Alert (variant: destructive)"]
- [e.g., "Display error message"]
- [e.g., "Highlight invalid fields with red border"]
**Error Message:** [Exact error message text]
**Recovery Action:** [e.g., "Retry button", "Clear error and allow re-entry"]

### Success State
**Trigger:** [When does this state occur?]
**UI Changes:**
- [e.g., "Show success Toast"]
- [e.g., "Display success message"]
- [e.g., "Navigate to next screen"]
**Success Message:** [Exact success message text]

### Empty State (if applicable)
**Trigger:** [When does this state occur?]
**UI Changes:**
- [e.g., "Show empty state illustration"]
- [e.g., "Display 'No items' message"]
- [e.g., "Show call-to-action button"]
**Message:** [Empty state message]
**Action:** [e.g., "Create First Item button"]

### Disabled State
**Trigger:** [When is component disabled?]
**UI Changes:**
- [e.g., "All inputs disabled, opacity-50"]
- [e.g., "Cursor: not-allowed"]

---

## 6. Interactions & Behavior

### User Actions

**Action 1: [Action Name]**
- **Trigger:** [How user initiates, e.g., "Click Submit button"]
- **Validation:** [Any validation before action, e.g., "Check all required fields filled"]
- **Behavior:** [What happens, e.g., "Submit form data to API"]
- **Feedback:** [User feedback, e.g., "Show loading spinner, then success toast"]
- **Next State:** [What state component enters, e.g., "Success state, then navigate"]

**Action 2: [Action Name]**
- **Trigger:** [...]
- **Validation:** [...]
- **Behavior:** [...]
- **Feedback:** [...]
- **Next State:** [...]

[Continue for all user actions...]

### Event Handlers

- **onSubmit:** [What happens on form submit]
- **onChange:** [What happens when input changes]
- **onClick:** [What happens on button click]
- **onFocus:** [What happens when input receives focus]
- **onBlur:** [What happens when input loses focus]
- **onClose:** [What happens when dialog closes]
- **onOpen:** [What happens when dialog opens]

[Add relevant event handlers...]

---

## 7. Validation & Error Handling

### Form Validation (if applicable)

**Field 1: [Field Name]**
- **Validation Rules:**
  - Required: [Yes/No]
  - Format: [e.g., "Email format", "Phone number format"]
  - Min Length: [e.g., "8 characters"]
  - Max Length: [e.g., "255 characters"]
  - Pattern: [e.g., "Alphanumeric only"]
  - Custom: [Any custom validation]
- **Error Messages:**
  - Required: "[Field] is required"
  - Format: "Invalid [field] format"
  - Min Length: "[Field] must be at least [N] characters"
  - Max Length: "[Field] must not exceed [N] characters"
- **Validation Timing:** [e.g., "On blur", "On submit", "On change (debounced 500ms)"]

**Field 2: [Field Name]**
[Same structure...]

### Error Handling

**Client-Side Errors:**
- Validation errors: [How displayed, e.g., "Below each field, red text"]
- Form-level errors: [How displayed, e.g., "Alert at top of form"]

**Server-Side Errors:**
- API errors: [How displayed, e.g., "Toast notification"]
- Network errors: [How displayed, e.g., "Alert with retry button"]

**Error Recovery:**
- [How user can recover from errors]
- [Retry mechanisms]
- [Clear error state]

---

## 8. Accessibility

### ARIA Attributes
- **role:** [If applicable, e.g., "dialog", "navigation"]
- **aria-label:** [Labels for icon buttons, e.g., "Close"]
- **aria-labelledby:** [Reference to label element]
- **aria-describedby:** [Reference to description element]
- **aria-required:** [For required fields]
- **aria-invalid:** [For invalid fields]
- **aria-live:** [For dynamic content, e.g., "polite"]
- **aria-modal:** [For modals, "true"]

### Keyboard Navigation
- **Tab Order:** [Describe focus order through component]
- **Enter:** [Action on Enter key]
- **Escape:** [Action on Escape key, e.g., "Close modal"]
- **Arrow Keys:** [If applicable, e.g., "Navigate dropdown items"]
- **Space:** [If applicable, e.g., "Toggle checkbox"]

### Focus Management
- **Initial Focus:** [Where focus goes when component opens]
- **Focus Trap:** [If applicable, e.g., "Trap focus within modal"]
- **Focus Return:** [Where focus returns after component closes]

### Screen Reader Support
- **Announcements:** [What screen reader announces]
- **Labels:** [Ensure all interactive elements have labels]
- **Descriptions:** [Additional descriptions for complex elements]

### Touch Targets
- **Minimum Size:** [44x44px for all interactive elements]
- **Spacing:** [8px minimum between touch targets]

### Color Contrast
- **Text:** [Verify 4.5:1 contrast ratio]
- **UI Components:** [Verify 3:1 contrast ratio]
- **Color Independence:** [Don't rely on color alone for information]

---

## 9. Design Rules Application

### Color System
**Colors Used:**
- [Element]: [Color token, e.g., "bg-primary text-primary-foreground"]
- [Element]: [Color token, e.g., "border-border"]
- [Element]: [Color token, e.g., "text-muted-foreground"]

**Color Rules Applied:**
- [Reference to design-rules/color-system.md section]
- [e.g., "Primary button uses bg-primary"]
- [e.g., "Error messages use text-destructive"]

### Spacing System
**Spacing Used:**
- Container padding: [e.g., "p-6" (24px)]
- Between elements: [e.g., "space-y-4" (16px)]
- Button padding: [e.g., "px-4 py-2" (16px/8px)]
- Input padding: [e.g., "px-3 py-2" (12px/8px)]

**Spacing Rules Applied:**
- [Reference to design-rules/spacing-system.md section]
- [e.g., "4px base unit followed throughout"]

### Typography
**Text Styles Used:**
- Title: [e.g., "text-2xl font-semibold"]
- Body: [e.g., "text-base font-normal"]
- Label: [e.g., "text-sm font-medium"]
- Helper text: [e.g., "text-sm text-muted-foreground"]
- Error text: [e.g., "text-sm text-destructive"]

**Typography Rules Applied:**
- [Reference to design-rules/typography.md section]
- [e.g., "Heading hierarchy: H1 → H2 → H3"]

### Layout System
**Layout Applied:**
- Container: [e.g., "max-w-md mx-auto"]
- Grid/Flex: [e.g., "flex flex-col gap-4"]
- Responsive: [e.g., "Mobile: 1 col, Desktop: 2 cols"]

**Layout Rules Applied:**
- [Reference to design-rules/layout-system.md section]
- [e.g., "Mobile-first approach followed"]

### Component Standards
**Standards Applied:**
- [Reference to design-rules/component-standards.md section]
- [e.g., "Button variant: default for primary action"]
- [e.g., "Input height: h-10 (40px)"]

### Animation System (MDS Theme)
**Entry Animation:**
- Animation: [e.g., "animate-reveal", "scroll-reveal", "fade-in", "none"]
- Trigger: [e.g., "on-load", "on-scroll", "on-mount"]
- Duration: [e.g., "1.0s", "500ms"]
- Delay: [e.g., "delay-100", "delay-200", "none"]
- Easing: [e.g., "cubic-bezier(0.16, 1, 0.3, 1)", "ease-out"]

**Hover/Interaction Animation:**
- Effect: [e.g., "shadow increase", "scale up", "background transition"]
- Duration: [e.g., "200ms", "150ms"]
- Properties: [e.g., "transition-shadow", "transition-transform", "transition-colors"]

**State Transition Animation:**
- Loading: [e.g., "spinner animate-spin", "skeleton pulse"]
- Success: [e.g., "check icon scale-in", "green border flash"]
- Error: [e.g., "shake animation", "red border pulse"]

**Reduced Motion:**
- Alternative: [e.g., "Instant state change, no animation"]

**Animation Rules Applied:**
- [Reference to design-rules/animation-system.md section]
- [e.g., "Uses MDS reveal-up for page entry"]
- [e.g., "Staggered delays for card grid"]

---

## 10. Traceability

### Wireframe Mapping

| Wireframe Element | Wireframe ID | Component Spec | Element ID |
|-------------------|--------------|----------------|------------|
| [Element from WF] | WF-XXX | [Component name] | COMP-XXX-EL-001 |
| [Element from WF] | WF-XXX | [Component name] | COMP-XXX-EL-002 |
| [Element from WF] | WF-XXX | [Component name] | COMP-XXX-EL-003 |

### Acceptance Criteria Mapping

| AC ID | Acceptance Criteria | Component Element | Status |
|-------|---------------------|-------------------|--------|
| AC-001 | [AC description] | COMP-XXX-EL-001 | ✅ Addressed |
| AC-002 | [AC description] | COMP-XXX-EL-002 | ✅ Addressed |
| AC-003 | [AC description] | COMP-XXX-EL-003 | ✅ Addressed |

### Coverage Checklist
- [ ] All wireframe elements from WF-XXX mapped
- [ ] All acceptance criteria addressed
- [ ] No orphaned UI elements (not mapped to ACs)
- [ ] All ACs have corresponding UI elements

---

## 11. Implementation Notes

### Technical Considerations
- [Any technical notes for developers]
- [Integration points with other components]
- [API endpoints needed]
- [State management approach]

### Dependencies
- [External dependencies, e.g., "react-hook-form", "zod"]
- [Component dependencies, e.g., "Requires UserAvatar component"]

### Performance Considerations
- [Any performance notes, e.g., "Debounce search input", "Lazy load images"]

### Testing Considerations
- [Key test scenarios]
- [Edge cases to test]
- [Accessibility testing needed]

---

## 12. Related Documents

- **Wireframe:** [WF-XXX - Link to wireframe file]
- **User Story:** [ST-XXX - Link to USD or USL]
- **Acceptance Criteria:** [Link to USD file]
- **Design Rules:** [Links to relevant design-rules files]
- **Related Components:** [Links to related component specs]

---

## 13. Revision History

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
