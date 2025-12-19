# Form Patterns

## Overview

Common form layout patterns and input combinations using ShadCN UI components and react-hook-form.

---

## Basic Form Field

**Pattern:**
```
Label *
<Input_____________________________________>
Helper text or requirements
```

**Components:** FormField, FormLabel, FormControl (Input), FormDescription, FormMessage

**States:**
- Default: border-input
- Focus: ring-2 ring-ring
- Error: border-destructive, error message below
- Disabled: opacity-50

**Accessibility:**
- Label associated (htmlFor)
- Required: aria-required="true"
- Error: aria-invalid="true", aria-describedby

---

## Two-Column Layout

**Use when:** Multiple related fields, save vertical space

```
Label 1                    Label 2
<Input_______________>     <Input_________________>
```

**Responsive:**
- Desktop: 2 columns (grid-cols-2)
- Tablet: 2 columns
- Mobile: 1 column (grid-cols-1)

---

## Textarea Field

**Use when:** Multi-line text input (descriptions, comments)

```
Label *
<Textarea_________________________________________________
_________________________________________________________>
0/500 characters
```

**Character counter:** Optional, show remaining/total

**Resize:** Default allow vertical resize

---

## Select Dropdown

```
Label *
[v] Select an option
```

**Components:** Select, SelectTrigger, SelectContent, SelectItem

**States:**
- Closed: Show selected value or placeholder
- Open: Dropdown menu with options
- Disabled: Grayed out

**Accessibility:**
- Keyboard: Arrow keys to navigate, Enter to select
- role="combobox"

---

## Radio Button Group

**Use when:** Single selection from 2-5 options

```
Choose one:
(×) Option 1    ( ) Option 2    ( ) Option 3
```

**Horizontal:** For short labels, 2-4 options
**Vertical:** For longer labels, 5+ options

```
( ) Option 1 with longer descriptive text
( ) Option 2 with longer descriptive text
( ) Option 3 with longer descriptive text
```

**Components:** RadioGroup, RadioGroupItem, Label

**Accessibility:**
- Arrow keys to navigate
- Selected: aria-checked="true"

---

## Checkbox

**Use when:** Boolean option, opt-in

**Single:**
```
[×] I agree to the terms and conditions
```

**Multiple (Checkbox Group):**
```
Select features:
[×] Feature 1
[ ] Feature 2
[×] Feature 3
```

**Components:** Checkbox, Label

**Accessibility:**
- Entire label clickable (minimum 44x44px touch target)
- Checked: aria-checked="true"

---

## Date Picker

```
Label *
[📅 MM/DD/YYYY] → Opens calendar popup
```

**Components:** Custom date picker (Popover + Calendar)

**Interactions:**
- Click input or icon → Open calendar
- Select date → Update input, close calendar
- Keyboard: Arrow keys navigate dates, Enter selects

---

## File Upload

```
Label *
+----------------------------------+
| Drop files here or               |
| [Browse...]                      |
+----------------------------------+
Accepted formats: PDF, PNG, JPG (Max 5MB)
```

**Uploaded files:**
```
• document.pdf (2.3 MB) [Remove]
• image.png (1.1 MB) [Remove]
```

**States:**
- Empty: Dotted border, prompt text
- Dragging: Highlighted border
- Uploaded: List of files with remove option
- Error: File too large or wrong type

---

## Search Input

```
[🔍 Search____________________________________]
```

**Features:**
- Magnifying glass icon
- Clear button (X) when text entered
- Debounce: 300ms before triggering search

**Components:** Input with icon

**Accessibility:**
- aria-label="Search"
- role="search" on container

---

## Form Sections

**Use when:** Long forms, group related fields

```
+------------------------------------------------------------+
| Section Heading (H2)                                       |
+------------------------------------------------------------+
| Field 1                                                    |
| <Input>                                                    |
|                                                            |
| Field 2                                                    |
| <Input>                                                    |
+------------------------------------------------------------+

+------------------------------------------------------------+
| Another Section (H2)                                       |
+------------------------------------------------------------+
| Field 3                                                    |
| <Input>                                                    |
+------------------------------------------------------------+
```

**Visual separation:** Card borders or background color change

---

## Inline Form

**Use when:** Quick actions, add item to list

```
<Input__________________________________> [Add Item]
```

**Example use:** Add tag, create quick note, add to list

---

## Required Field Indicator

**Pattern:** Asterisk `*` after label

```
Email *
<Input>
```

**Accessibility:** Screen reader announces "required"

**Legend:** At top of form: "* indicates required field"

---

## Field Validation

### Client-Side Validation

**Timing:**
- On blur: Validate when user leaves field
- On submit: Validate all fields before submission
- On change: Real-time for specific fields (password strength)

**Error Display:**
```
Label *
<Input_____________________________________>  ← Red border
Error message in red text below
```

**Success (optional):**
```
Label *
<Input_____________________________________>  ← Green border or checkmark
```

### Validation Messages

**Required:** "[Field] is required"
**Format:** "Please enter a valid [field type]"
**Min/Max Length:** "[Field] must be at least [N] characters"
**Pattern:** "[Field] format is invalid"
**Custom:** Specific business rule message

---

## Multi-Step Form

**Use when:** Complex forms, 5+ fields

```
Step 1 of 3
●━━━○━━━○

[Step 1 Content]

[Back (if not first)]    [Next/Submit]
```

**Components:** Custom stepper + form for each step

**Behavior:**
- Next: Validate current step before proceeding
- Back: No validation, preserve data
- Progress: Visual indicator (dots, bar, numbers)

**Accessibility:**
- Announce current step to screen reader
- Keyboard: Enter for Next, Escape to cancel

---

## Form Actions

**Standard:**
```
[Cancel]                              [Submit Form]
```

**Position:** Bottom of form, right-aligned

**Button Variants:**
- Cancel: outline or ghost
- Submit: default (primary)

**Disabled Submit:** If form invalid or submitting

**Loading Submit:**
```
[Submitting... ⟳]  (Spinner + text, disabled)
```

---

## Form Validation Summary

**Use when:** Multiple errors, show summary at top

```
+----------------------------------------------------------+
| ⚠ Please correct the following errors:                  |
| • Email is required                                      |
| • Password must be at least 8 characters                 |
| • Please accept terms and conditions                     |
+----------------------------------------------------------+
```

**Components:** Alert (variant: destructive)

**Behavior:** Jump to first error on click

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Accessibility](../design-rules/accessibility.md)
- [Form Layout Template](../templates/form-layout-template.md)
