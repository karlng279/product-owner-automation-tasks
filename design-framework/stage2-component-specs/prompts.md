# AI Prompts for Component Specifications

## Overview

Use these prompts to generate component specifications from wireframes using AI assistance. Each prompt provides context and instructions for creating complete component specs.

---

## Prompt 1: Generate Component Spec from Wireframe

### Purpose
Create a complete component specification from an existing wireframe.

### Prompt Template

```
I need you to create a component specification based on the following wireframe.

**Context:**
- Feature: [Feature name]
- Wireframe ID: [WF-XXX]
- Story ID: [ST-XXX]
- Acceptance Criteria: [AC-XXX, AC-XXX, ...]

**Wireframe:**
[Paste wireframe text description and ASCII art]

**Acceptance Criteria:**
[Paste relevant acceptance criteria]

**Requirements:**
- Use ShadCN UI components only
- Follow the component specification template structure
- Specify all component variants, sizes, and props
- Define all states (default, hover, focus, disabled, loading, error, success)
- Include validation rules for all inputs
- Ensure WCAG AA accessibility compliance
- Apply design rules from the design system (colors, spacing, typography)
- Map each UI element to acceptance criteria

**Component Type:** [Form | Card | Modal | Navigation | Table | Other]

Please generate a complete component specification following the template at:
[design-framework/stage2-component-specs/template-component-spec.md]

Include:
1. Component overview (purpose, context, interactions, functionality)
2. Component structure (layout, container, responsive behavior)
3. UI elements mapped to ShadCN components with full specifications
4. Component composition hierarchy
5. All states with UI changes
6. Interactions and behavior
7. Validation and error handling
8. Accessibility (ARIA, keyboard, focus, screen reader, touch targets)
9. Design rules application
10. Traceability mapping (wireframe elements to components, ACs to elements)
```

### Example Usage

```
I need you to create a component specification based on the following wireframe.

**Context:**
- Feature: User Authentication
- Wireframe ID: WF-001
- Story ID: ST-001
- Acceptance Criteria: AC-001, AC-002, AC-003

**Wireframe:**
[Wireframe text and ASCII for Login Form]

**Acceptance Criteria:**
- AC-001: User can enter email
- AC-002: User can enter password
- AC-003: User can submit form

**Requirements:**
[Requirements list...]

**Component Type:** Form
```

---

## Prompt 2: Generate Table Spec from Wireframe

### Purpose
Create a complete Tanstack Table specification from an existing wireframe.

### Prompt Template

```
I need you to create a data table specification using Tanstack Table based on the following wireframe.

**Context:**
- Feature: [Feature name]
- Wireframe ID: [WF-XXX]
- Story ID: [ST-XXX]
- Acceptance Criteria: [AC-XXX, AC-XXX, ...]

**Wireframe:**
[Paste wireframe showing table structure]

**Acceptance Criteria:**
[Paste relevant acceptance criteria]

**Data Structure:**
[Provide expected data structure/API response format]

**Requirements:**
- Use Tanstack Table for table logic
- Use ShadCN Table components for UI rendering
- Provide complete column definitions
- Specify sorting configuration (single or multi-column)
- Specify filtering configuration (global search, column filters)
- Specify pagination configuration
- Specify row selection behavior (if applicable)
- Define all states (loading, empty, error)
- Include row actions if applicable
- Ensure WCAG AA accessibility compliance
- Apply design rules from the design system

**Table Features Needed:**
- [ ] Sorting (single or multi-column)
- [ ] Global search
- [ ] Column filters
- [ ] Pagination
- [ ] Row selection
- [ ] Row actions

Please generate a complete table specification following the template at:
[design-framework/stage2-component-specs/template-table-spec.md]

Include:
1. Table overview
2. Data structure (API endpoint, data shape, fetching)
3. Complete column definitions with all properties
4. Sorting configuration
5. Filtering configuration
6. Pagination configuration
7. Row selection configuration (if applicable)
8. All states (loading, empty, error)
9. Styling with ShadCN Table components
10. Responsive behavior
11. Accessibility
12. Traceability mapping
```

### Example Usage

```
I need you to create a data table specification using Tanstack Table based on the following wireframe.

**Context:**
- Feature: Shipment Management
- Wireframe ID: WF-030
- Story ID: ST-020
- Acceptance Criteria: AC-100, AC-101, AC-102

**Wireframe:**
[Wireframe showing shipment list table]

**Data Structure:**
{
  "id": "SHP-001",
  "shipmentNumber": "SHP-2024-001",
  "status": "in_transit",
  "customer": { "name": "Acme Corp" },
  "createdAt": "2024-01-15T10:30:00Z"
}

**Table Features Needed:**
- [x] Multi-column sorting
- [x] Global search
- [x] Column filters (status)
- [x] Pagination
- [x] Row selection
- [x] Row actions (View, Edit, Delete)
```

---

## Prompt 3: Refine Existing Component Spec

### Purpose
Improve or update an existing component specification.

### Prompt Template

```
I have an existing component specification that needs refinement. Please review and improve it based on the following criteria.

**Existing Component Spec:**
[Paste existing component spec]

**Issues to Address:**
- [Issue 1, e.g., "Missing error states"]
- [Issue 2, e.g., "Validation rules incomplete"]
- [Issue 3, e.g., "Accessibility attributes missing"]

**Additional Requirements:**
- [Requirement 1]
- [Requirement 2]

**Design Rules to Verify:**
- Color system compliance
- Spacing system (4px base unit)
- Typography standards
- Component standards (ShadCN variants)
- Accessibility (WCAG AA)
- Responsive design (mobile-first)

Please update the component specification to:
1. Address all listed issues
2. Ensure all required sections are complete
3. Verify design rules are properly applied
4. Ensure accessibility compliance
5. Add any missing states or interactions
6. Improve clarity and completeness

Provide the updated specification with change notes.
```

---

## Prompt 4: Generate Component Specs for Multiple Screens

### Purpose
Create component specifications for multiple related screens/wireframes in a user flow.

### Prompt Template

```
I need component specifications for a multi-screen user flow.

**User Flow:** [Flow name, e.g., "Shipment Creation Flow"]

**Screens/Wireframes:**
1. [WF-XXX]: [Screen name]
   - Purpose: [Description]
   - ACs: [AC-XXX, AC-XXX]

2. [WF-XXX]: [Screen name]
   - Purpose: [Description]
   - ACs: [AC-XXX, AC-XXX]

3. [WF-XXX]: [Screen name]
   - Purpose: [Description]
   - ACs: [AC-XXX, AC-XXX]

**Wireframes:**
[Paste all wireframes]

**Shared Components:**
[List any components used across multiple screens]

**Requirements:**
- Use ShadCN UI components
- Maintain consistency across screens
- Follow design system rules
- Ensure smooth transitions between screens
- Map all ACs to components

Please generate component specifications for all screens, ensuring:
1. Consistent naming conventions
2. Shared components are identified and reused
3. Navigation between screens is clear
4. All states for each screen are defined
5. Complete traceability for all ACs

Generate one component spec per screen following the template.
```

---

## Prompt 5: Validate Component Spec Against Quality Gate

### Purpose
Check if a component specification meets all quality gate requirements.

### Prompt Template

```
Please validate the following component specification against the quality gate checklist.

**Component Spec:**
[Paste component spec]

**Quality Gate Checklist:**
[Paste relevant sections from quality-gate.md]

**Validation Requirements:**
- All required sections present
- All wireframe elements mapped to components
- All ACs addressed
- Component names match ShadCN library
- All states defined
- Validation rules specified (for forms)
- Accessibility requirements met
- Design rules properly applied
- Responsive behavior specified
- Traceability complete

Please review the component spec and provide:
1. **Pass/Fail Status** for each quality gate requirement
2. **Issues Found**: List of any missing or incomplete items
3. **Recommendations**: Suggestions for improvement
4. **Updated Spec**: If needed, provide corrected version

Format output as:
- ✅ PASS: [Requirement]
- ❌ FAIL: [Requirement] - [Issue description]
```

---

## Prompt 6: Map Wireframe Elements to ShadCN Components

### Purpose
Identify which ShadCN components to use for each wireframe element.

### Prompt Template

```
I have a wireframe and need help mapping each UI element to the appropriate ShadCN UI component.

**Wireframe Elements:**
[List all UI elements from wireframe]

**ShadCN Component Catalog:**
[Reference to shadcn-component-catalog.md or list available components]

**Requirements:**
- Choose the most appropriate ShadCN component for each element
- Specify the variant (default, secondary, outline, etc.)
- Specify the size (sm, default, lg)
- Note any special props needed
- Consider accessibility and usability

Please provide a mapping table:

| Wireframe Element | ShadCN Component | Variant | Size | Props | Notes |
|-------------------|------------------|---------|------|-------|-------|
| [Element 1] | [Component] | [Variant] | [Size] | [Props] | [Notes] |
| [Element 2] | [Component] | [Variant] | [Size] | [Props] | [Notes] |

Then create Element specifications for each:

### Element 1: [Name]
- ShadCN Component: [...]
- Variant: [...]
- [Full specification...]
```

---

## Prompt 7: Generate Validation Rules for Form

### Purpose
Create comprehensive validation rules for a form component.

### Prompt Template

```
I need comprehensive validation rules for a form component.

**Form Fields:**
[List all form fields with field type]

**Acceptance Criteria:**
[Paste validation-related ACs]

**Business Rules:**
[Any business-specific validation rules]

**Requirements:**
- Client-side validation using react-hook-form + zod
- Validation timing (on blur, on submit, on change)
- Error messages (user-friendly, specific)
- Error placement (below field, inline)
- Format validation (email, phone, etc.)
- Cross-field validation (if applicable)

Please provide for each field:

### Field: [Field Name]

**Validation Rules:**
- Required: [Yes/No]
  - Error: "[Error message]"
- Format: [e.g., "Email format", "Phone number"]
  - Error: "[Error message]"
- Min Length: [number]
  - Error: "[Error message]"
- Max Length: [number]
  - Error: "[Error message]"
- Pattern: [regex or description]
  - Error: "[Error message]"
- Custom: [Custom rule]
  - Error: "[Error message]"

**Validation Timing:** [On blur | On submit | On change]

**Zod Schema (if using zod):**
```typescript
[field]: z.string()
  .min(X, "Error message")
  .max(Y, "Error message")
  .email("Error message")
```
```

---

## Prompt 8: Generate Accessibility Specification

### Purpose
Create comprehensive accessibility specifications for a component.

### Prompt Template

```
I need complete accessibility specifications for the following component.

**Component:**
[Paste component overview or description]

**Component Type:** [Form | Modal | Navigation | Table | Other]

**Interactive Elements:**
[List all interactive elements]

**Requirements:**
- WCAG 2.1 Level AA compliance
- ARIA attributes
- Keyboard navigation
- Focus management
- Screen reader support
- Touch targets (44x44px minimum)
- Color contrast (4.5:1 for text, 3:1 for UI)

Please provide:

### 1. ARIA Attributes
[For each element that needs ARIA]

### 2. Keyboard Navigation
- Tab order: [...]
- Key bindings: [...]
  - Enter: [Action]
  - Escape: [Action]
  - Arrow keys: [Action]

### 3. Focus Management
- Initial focus: [...]
- Focus trap: [If applicable]
- Focus return: [...]

### 4. Screen Reader Support
- Announcements: [...]
- Labels: [...]
- Descriptions: [...]

### 5. Touch Targets
[List all interactive elements with sizes, ensure 44x44px minimum]

### 6. Color Contrast
[Verify all text and UI elements meet contrast ratios]

### 7. Testing Checklist
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Focus indicators visible
- [ ] Touch targets meet minimum size
- [ ] Color contrast passes
```

---

## Prompt 9: Convert Component Spec to Implementation Checklist

### Purpose
Create a developer-friendly checklist from a component specification.

### Prompt Template

```
Convert this component specification into a developer implementation checklist.

**Component Spec:**
[Paste component spec]

**Output Format:**

## Implementation Checklist: [Component Name]

### 1. Setup
- [ ] Install dependencies: [list]
- [ ] Import components from ShadCN: [list]
- [ ] Setup form library (if form): [react-hook-form + zod]

### 2. Component Structure
- [ ] Create component file: [filename]
- [ ] Define props interface
- [ ] Setup component composition

### 3. UI Elements
- [ ] Implement Element 1: [Name]
  - [ ] ShadCN Component: [Component]
  - [ ] Variant: [...]
  - [ ] Props: [...]
  - [ ] States: [...]
- [ ] Implement Element 2: [Name]
  - [Same structure...]

### 4. State Management
- [ ] Define component state
- [ ] Setup form state (if applicable)
- [ ] Handle loading state
- [ ] Handle error state
- [ ] Handle success state

### 5. Validation (if form)
- [ ] Define zod schema
- [ ] Setup react-hook-form
- [ ] Implement field validations
- [ ] Display error messages

### 6. Interactions
- [ ] Implement Action 1: [...]
- [ ] Implement Action 2: [...]
- [ ] Handle API calls
- [ ] Handle navigation

### 7. Accessibility
- [ ] Add ARIA attributes
- [ ] Implement keyboard navigation
- [ ] Setup focus management
- [ ] Test with screen reader
- [ ] Verify touch targets

### 8. Styling
- [ ] Apply design system colors
- [ ] Apply spacing system
- [ ] Apply typography
- [ ] Implement responsive behavior

### 9. Testing
- [ ] Unit tests for component logic
- [ ] Integration tests for user interactions
- [ ] Accessibility tests (axe, pa11y)
- [ ] Visual regression tests

### 10. Documentation
- [ ] Add JSDoc comments
- [ ] Update Storybook (if using)
- [ ] Document props and usage
```

---

## Usage Tips

1. **Provide Complete Context**: Always include wireframes, ACs, and any business rules
2. **Be Specific**: Specify exactly which features are needed (sorting, filtering, etc.)
3. **Reference Templates**: Point AI to the correct template file
4. **Iterate**: Start with basic spec, then refine with follow-up prompts
5. **Validate**: Always run generated specs through quality gate validation
6. **Cross-Reference**: Ensure consistency with design rules and wireframes

---

## Prompt Chaining Example

For complex components, chain multiple prompts:

1. **Generate initial spec** (Prompt 1)
2. **Validate against quality gate** (Prompt 5)
3. **Refine based on feedback** (Prompt 3)
4. **Generate accessibility spec** (Prompt 8)
5. **Create implementation checklist** (Prompt 9)

This ensures comprehensive, validated component specifications ready for implementation.
