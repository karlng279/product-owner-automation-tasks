# Stage 2: Component Specifications - Rules

## Overview

Component specifications translate wireframes (Stage 1) into concrete component and data table definitions using **ShadCN UI** components and **Tanstack Table** for data tables.

This stage merges component specs and data table specs into one unified stage.

---

## Purpose

Component specs serve as the bridge between design wireframes and code implementation:

1. **Identify Components**: Which ShadCN components to use
2. **Define Variants**: Which component variants (primary, secondary, etc.)
3. **Specify Props**: What props/configuration each component needs
4. **Configure Tables**: Full Tanstack Table configuration for data tables
5. **Maintain Traceability**: Link to wireframes and acceptance criteria

---

## When to Create Component Specs

Create component specs after:
- Stage 1 wireframes are approved
- Wireframes have passed quality gate
- All acceptance criteria are mapped

Before moving to:
- Stage 3 (Interactions)
- Code implementation

---

## Component Specification Approach

### Approach A: Simple Component References (Current Approach)

**What to Include:**
- Component name (e.g., "Button from ShadCN")
- Variant (e.g., "variant: default")
- Size (e.g., "size: default")
- Key props (e.g., "disabled: false")
- States (default, hover, focus, disabled)
- Content/labels

**What NOT to Include:**
- Code snippets
- Implementation details
- CSS classes (except high-level like "rounded-lg")
- Internal component logic

**Example:**
```
Component: Button (ShadCN)
Variant: default (primary)
Size: default
Label: "Submit Application"
States: default, hover, focus, disabled, loading
Disabled: false
```

### Why Simple References?

- Designer may lack deep technical knowledge
- Focus on "what" not "how"
- Component library docs provide implementation details
- Easier to maintain and update

---

## Data Table Approach

### Full Configuration (Required for Tanstack Table)

**What to Include:**
- Column definitions (all columns)
- Column properties (accessor, header, cell rendering)
- Sorting configuration
- Filtering configuration
- Pagination settings
- Row selection (if applicable)
- Actions column (if applicable)
- Empty state
- Loading state
- Error state

**Why Full Configuration?**

- Tanstack Table is headless (no default UI)
- Developer needs complete specification
- Column behavior must be explicit
- State management must be defined upfront

**Example:**
```
Table: Shipment List (Tanstack Table)

Columns:
1. Shipment ID (accessor: "id", sortable: true, filterable: true)
2. Status (accessor: "status", sortable: true, filterable: true, badge variant)
3. Customer (accessor: "customer.name", sortable: true, filterable: true)
4. Created Date (accessor: "createdAt", sortable: true, date format: "MMM DD, YYYY")
5. Actions (cell: action buttons - View, Edit, Delete)

Pagination: Enabled, 10 rows per page
Sorting: Multi-column, default: createdAt DESC
Filtering: Global search + column filters
Row Selection: Multi-select with checkboxes
```

---

## ID System

### Component IDs

**Format:** `COMP-XXX`

**Examples:**
- `COMP-001` - Login Form
- `COMP-002` - Dashboard Header
- `COMP-003` - Shipment List Table

**Rules:**
- Globally unique across all features
- Incremental numbering
- Prefix indicates component spec

### Element IDs

**Format:** `COMP-XXX-EL-YYY`

**Examples:**
- `COMP-001-EL-001` - Email input field
- `COMP-001-EL-002` - Password input field
- `COMP-001-EL-003` - Submit button

**Rules:**
- YYY is sequential within a component
- Used for individual UI elements within a component
- Links to wireframe elements

---

## Required Sections

Every component spec must include:

### 1. Metadata
- **Component ID**: `COMP-XXX`
- **Component Name**: Descriptive name
- **Wireframe ID(s)**: Which wireframes this implements (e.g., `WF-001`)
- **Story ID(s)**: Related user stories (e.g., `ST-001`)
- **Acceptance Criteria IDs**: Which ACs this addresses (e.g., `AC-001, AC-002`)
- **Component Type**: Form, Table, Card, Modal, Navigation, etc.

### 2. Component Overview
- **Purpose**: What this component does
- **Context**: Where it appears in the application
- **User Interaction**: How users interact with it
- **Key Functionality**: Main features

### 3. ShadCN Component Mapping

For each UI element from the wireframe:
- **Element Name**: From wireframe (e.g., "Email Input")
- **ShadCN Component**: Component name (e.g., "Input")
- **Variant**: Component variant (e.g., "default")
- **Size**: Component size (e.g., "default", "sm", "lg")
- **Props**: Key properties
- **States**: All states (default, hover, focus, error, disabled, loading)
- **Validation**: Validation rules (if applicable)

### 4. Data Table Configuration (if applicable)

For data tables using Tanstack Table:
- **Table ID**: Unique identifier
- **Data Source**: Where data comes from
- **Columns**: Full column definitions
- **Sorting**: Sorting configuration
- **Filtering**: Filter configuration
- **Pagination**: Pagination settings
- **Row Selection**: Selection behavior
- **Actions**: Row-level actions
- **States**: Empty, loading, error states

### 5. Layout Structure

- **Container**: Layout container specifications
- **Grid/Flex**: Layout system (grid or flexbox)
- **Spacing**: Spacing between elements (using design system)
- **Responsive Behavior**: How layout adapts (mobile, tablet, desktop)

### 6. Component Composition

If component contains other components:
- **Parent Component**: Top-level component
- **Child Components**: Nested components
- **Composition Structure**: How components nest

Example:
```
Dialog (ShadCN)
├── DialogTrigger: Button
├── DialogContent
│   ├── DialogHeader
│   │   ├── DialogTitle: "Delete Shipment"
│   │   └── DialogDescription: "This action cannot be undone"
│   ├── DialogBody: Confirmation text
│   └── DialogFooter
│       ├── Button (variant: outline): "Cancel"
│       └── Button (variant: destructive): "Delete"
```

### 7. States

All possible component states:
- **Default State**: Initial appearance
- **Hover State**: Mouse hover (desktop)
- **Focus State**: Keyboard focus
- **Active State**: While interacting
- **Disabled State**: When disabled
- **Loading State**: During async operations
- **Error State**: When validation fails or error occurs
- **Success State**: After successful action
- **Empty State**: No data (for tables/lists)

### 8. Validation & Error Handling

For forms and inputs:
- **Validation Rules**: Required, format, length, etc.
- **Error Messages**: Specific error text
- **Error Placement**: Where errors appear
- **Validation Timing**: When validation occurs (on blur, on submit, etc.)

### 9. Accessibility

- **ARIA Labels**: Required ARIA attributes
- **Keyboard Navigation**: Tab order, keyboard shortcuts
- **Focus Management**: Focus behavior
- **Screen Reader**: Screen reader announcements
- **Touch Targets**: Minimum size compliance (44x44px)

### 10. Design Rules Application

Reference which design rules apply:
- **Colors**: Color tokens used (e.g., `bg-primary`, `text-foreground`)
- **Spacing**: Spacing tokens used (e.g., `space-4`, `space-6`)
- **Typography**: Text sizes and weights (e.g., `text-base`, `font-medium`)
- **Component Standards**: Which component standards followed

### 11. Traceability

**AC Mapping Table:**

| Wireframe Element | Component Spec | Acceptance Criteria | Notes |
|-------------------|----------------|---------------------|-------|
| Email Input | COMP-001-EL-001 | AC-001, AC-003 | Required field, email format |
| Submit Button | COMP-001-EL-003 | AC-005 | Disabled until valid |

**Coverage:**
- [ ] All wireframe elements mapped to components
- [ ] All ACs addressed
- [ ] No orphaned elements

---

## Component Types

### Form Components

**Required Elements:**
- Input fields (all types)
- Labels
- Helper text
- Error messages
- Submit/Cancel buttons
- Validation rules
- Form state management

**ShadCN Components:**
- Input, Textarea, Select, Checkbox, Radio, Switch
- Label, Button, Form (with react-hook-form)

### Table Components

**Required Elements:**
- Column definitions
- Data structure
- Sorting behavior
- Filtering options
- Pagination
- Row actions
- Empty/loading/error states

**Tanstack Table Configuration:**
- Columns array
- Column helpers
- Sorting state
- Filter state
- Pagination state
- Row selection state

### Card Components

**Required Elements:**
- Card structure (header, content, footer)
- Card styling
- Card actions
- Card states (default, hover, interactive)

**ShadCN Components:**
- Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

### Modal/Dialog Components

**Required Elements:**
- Trigger element
- Dialog structure (header, body, footer)
- Close behavior (X button, Escape, overlay click)
- Focus management
- Actions (primary, secondary)

**ShadCN Components:**
- Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter

### Navigation Components

**Required Elements:**
- Navigation structure
- Navigation items
- Active state
- Responsive behavior (mobile hamburger, desktop horizontal)
- Dropdown menus (if applicable)

**ShadCN Components:**
- NavigationMenu, Sheet (for mobile drawer)

---

## Design Rules Integration

Component specs must reference and apply design rules:

### Color System
- Use CSS variable references: `bg-primary`, `text-foreground`
- No hardcoded colors
- Semantic color usage

### Spacing System
- Follow 4px base unit
- Use spacing notation: `space-4`, `space-6`
- Apply component-specific spacing rules

### Typography
- Use design system text sizes: `text-base`, `text-xl`
- Proper heading hierarchy
- Font weight specifications

### Layout System
- Container usage
- Grid/Flexbox definitions
- Responsive breakpoints

### Component Standards
- ShadCN component variants
- Proper component sizing
- State definitions

### Accessibility
- WCAG AA compliance
- Focus states
- Keyboard navigation
- ARIA labels
- Touch target sizes

### Responsive Design
- Mobile-first approach
- Breakpoint behavior
- Component adaptation

---

## Quality Gates

Before moving to Stage 3 (Interactions):

### Completeness
- [ ] All wireframe elements mapped to components
- [ ] All ShadCN components specified with variants
- [ ] All data tables fully configured
- [ ] All states defined
- [ ] All validation rules specified

### Accuracy
- [ ] Component names match ShadCN library
- [ ] Variants are valid ShadCN variants
- [ ] Table configuration is complete
- [ ] Props are appropriate for each component

### Design Rules Compliance
- [ ] Color system followed
- [ ] Spacing system applied
- [ ] Typography standards met
- [ ] Accessibility requirements addressed
- [ ] Responsive behavior specified

### Traceability
- [ ] All wireframe IDs referenced
- [ ] All ACs mapped
- [ ] Component IDs assigned
- [ ] Element IDs assigned (for complex components)

### Documentation
- [ ] All required sections present
- [ ] Clear and unambiguous descriptions
- [ ] Examples provided where needed
- [ ] Naming conventions followed

---

## Common Mistakes to Avoid

❌ **Don't Include Code**: Focus on specification, not implementation
❌ **Don't Skip States**: All states must be defined (default, hover, focus, disabled, error, loading)
❌ **Don't Forget Responsive**: Specify mobile, tablet, desktop behavior
❌ **Don't Ignore Accessibility**: ARIA labels, keyboard nav, touch targets are required
❌ **Don't Use Invalid Variants**: Check ShadCN docs for valid variants
❌ **Don't Incomplete Tables**: Tanstack Table needs full configuration
❌ **Don't Break Traceability**: Link to wireframes and ACs
❌ **Don't Hardcode Colors**: Use design system tokens

---

## Template Usage

Use the provided templates:
- **template-component-spec.md**: For standard components (forms, cards, modals, etc.)
- **template-table-spec.md**: For data tables using Tanstack Table

Templates include all required sections and examples.

---

## Next Steps After Completion

Once component specs pass quality gate:
1. Move to Stage 3: Interactions
2. Create interaction flows and state diagrams
3. Prepare for code implementation
4. Link component IDs to code files

---

**Related:**
- [ShadCN Component Catalog](shadcn-component-catalog.md)
- [Tanstack Table Reference](tanstack-table-reference.md)
- [Component Spec Template](template-component-spec.md)
- [Table Spec Template](template-table-spec.md)
- [Examples](examples.md)
- [Quality Gate](quality-gate.md)
- [Design Rules](../design-rules/)
