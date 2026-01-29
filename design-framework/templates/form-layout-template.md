# Form Layout Template

## Overview

Standard template for form-based wireframes. Use this template for create, edit, settings, or any data entry screens.

---

## Template Structure

```
**Wireframe ID:** WF-XXX
**Screen Name:** [Screen Name]
**Story ID:** ST-XXX
**Acceptance Criteria:** AC-XXX, AC-XXX
**Screen Type:** Form

---

## Purpose
[What this form accomplishes]

## Desktop Layout (1024px+)

+----------------------------------------------------------------+
| {Logo} Navigation Links...                      [User Menu ▼] |
+----------------------------------------------------------------+
| [Breadcrumb] Home > Section > Current Page                     |
+----------------------------------------------------------------+
|                                                                |
|  Form Title (H1)                                               |
|  Brief description of what this form does                      |
|                                                                |
|  +----------------------------------------------------------+  |
|  | Section 1 Heading (H2)                                   |  |
|  |                                                          |  |
|  | Label *                                                  |  |
|  | <Input Field________________________________________________>  |
|  | Helper text                                              |  |
|  |                                                          |  |
|  | Label *                                                  |  |
|  | <Textarea_____________________________________________   |  |
|  | ______________________________________________________>  |  |
|  | Helper text                                              |  |
|  +----------------------------------------------------------+  |
|                                                                |
|  +----------------------------------------------------------+  |
|  | Section 2 Heading (H2)                                   |  |
|  |                                                          |  |
|  | Label *                        Label                     |  |
|  | <Input_______________>         <Input_________________>  |  |
|  |                                                          |  |
|  | Label                                                    |  |
|  | [v] Dropdown Selector                                    |  |
|  |                                                          |  |
|  | (×) Option 1    ( ) Option 2    ( ) Option 3             |  |
|  +----------------------------------------------------------+  |
|                                                                |
|  +----------------------------------------------------------+  |
|  | [×] Accept terms and conditions                          |  |
|  +----------------------------------------------------------+  |
|                                                                |
|  [Cancel]                                      [Submit Form]   |
|                                                                |
+----------------------------------------------------------------+
| Footer                                                         |
+----------------------------------------------------------------+

## Mobile Layout (< 640px)

+------------------------------+
| ☰  {Logo}      [User Icon]   |
+------------------------------+
|                              |
| Form Title (H1)              |
| Description text             |
|                              |
| Section 1 Heading            |
|                              |
| Label *                      |
| <Input___________________>   |
| Helper text                  |
|                              |
| Label *                      |
| <Textarea________________    |
| ________________________>    |
| Helper text                  |
|                              |
| Section 2 Heading            |
|                              |
| Label *                      |
| <Input___________________>   |
|                              |
| Label                        |
| <Input___________________>   |
|                              |
| Label                        |
| [v] Dropdown Selector        |
|                              |
| (×) Option 1                 |
| ( ) Option 2                 |
| ( ) Option 3                 |
|                              |
| [×] Accept terms             |
|                              |
| [Submit Form______________]  |
| [Cancel___________________]  |
|                              |
+------------------------------+

## Components Required
- Form (react-hook-form wrapper)
- Input fields
- Textarea
- Select dropdown
- Radio buttons
- Checkbox
- Button (Primary: Submit, Secondary: Cancel)
- FormLabel
- FormMessage (error messages)

## Interactions
1. User fills form fields
2. Validation on blur or submit
3. Error messages appear below invalid fields
4. Submit button triggers validation
5. If valid → Submit to API → Success message → Navigate
6. If invalid → Show errors, stay on form

## States
- Default: Empty form
- Filling: User entering data
- Invalid: Validation errors shown
- Valid: No errors, ready to submit
- Submitting: Loading spinner on button
- Success: Redirect or success message
- Error: API error shown

## Responsive Behavior
- Desktop: 2-column layout for smaller fields
- Tablet: 2-column or single column
- Mobile: Single column, stack vertically

## Accessibility
- All fields have labels (htmlFor)
- Required fields marked with *
- Error messages linked to fields (aria-describedby)
- Tab order: Top to bottom, left to right
- Enter key submits form

## Validation
- Required fields validated on blur
- Format validation (email, phone, etc.)
- Error messages specific and helpful
```

---

## Usage Instructions

1. Copy this template
2. Replace placeholders with actual content:
   - `WF-XXX` → Your wireframe ID
   - `ST-XXX` → Your story ID
   - `AC-XXX` → Your acceptance criteria IDs
   - Form title and description
   - Section headings and field labels
3. Customize field types (Input, Textarea, Select, Radio, Checkbox)
4. Add/remove sections as needed
5. Specify validation rules for each field
6. Document specific interactions
7. Update components list if using custom components

---

## Common Form Patterns

### Two-Column Layout (Desktop)

```
| Label 1                    Label 2                     |
| <Input_______________>     <Input___________________>  |
```

### Full-Width Input

```
| Label *                                                |
| <Input_______________________________________________> |
```

### Dropdown with Label

```
| Label                                                  |
| [v] Select an option                                   |
```

### Radio Button Group

```
| Choose one:                                            |
| (×) Option 1    ( ) Option 2    ( ) Option 3           |
```

### Checkbox

```
| [×] I agree to the terms and conditions                |
```

### Action Buttons

```
| [Cancel]                                [Submit Form]  |
```

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Form Patterns](../patterns/form-patterns.md)
- [Stage 1 Wireframe Rules](../stage1-wireframes/rules.md)
