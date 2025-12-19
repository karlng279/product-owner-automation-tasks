# Modal/Dialog Template

## Overview

Standard template for modal/dialog overlays used for confirmations, forms, or additional information.

---

## Template

```
**Wireframe ID:** WF-XXX
**Screen Name:** [Screen Name - Modal]
**Story ID:** ST-XXX
**Acceptance Criteria:** AC-XXX, AC-XXX
**Screen Type:** Modal

---

## Purpose
[What this modal accomplishes]

## Desktop Layout (Modal Overlay)

+------------------------------------------------------------------+
| Underlying Page (darkened/blurred background)                    |
|                                                                  |
|      +-----------------------------------------------+           |
|      | Dialog Title (H2)                       [X]   |           |
|      +-----------------------------------------------+           |
|      | Dialog description or subtitle text           |           |
|      |                                               |           |
|      | [Main content area - can be text, form,       |           |
|      |  or other components]                         |           |
|      |                                               |           |
|      | For confirmation dialogs:                     |           |
|      | Are you sure you want to proceed? This        |           |
|      | action cannot be undone.                      |           |
|      |                                               |           |
|      | For form dialogs:                             |           |
|      | Label *                                       |           |
|      | <Input_________________________________>      |           |
|      |                                               |           |
|      | Label                                         |           |
|      | <Textarea____________________________          |           |
|      | ______________________________________>       |           |
|      |                                               |           |
|      +-----------------------------------------------+           |
|      | [Cancel]                     [Confirm Action] |           |
|      +-----------------------------------------------+           |
|                                                                  |
+------------------------------------------------------------------+

## Mobile Layout (Modal Overlay)

+------------------------------+
| Underlying Page (darkened)   |
|                              |
|  +------------------------+  |
|  | Dialog Title     [X]   |  |
|  +------------------------+  |
|  | Description text       |  |
|  |                        |  |
|  | Content area           |  |
|  |                        |  |
|  | For confirmation:      |  |
|  | Are you sure?          |  |
|  |                        |  |
|  | For form:              |  |
|  | Label *                |  |
|  | <Input______________>  |  |
|  |                        |  |
|  +------------------------+  |
|  | [Cancel_____________]  |  |
|  | [Confirm____________]  |  |
|  +------------------------+  |
|                              |
+------------------------------+

## Modal Sizes

### Small (max-w-sm = 384px)
- Simple confirmations
- Single input forms
- Alerts

### Medium (max-w-lg = 512px) - Default
- Standard forms (2-4 fields)
- Confirmations with details
- Most dialogs

### Large (max-w-2xl = 672px)
- Complex forms (5+ fields)
- Content-heavy dialogs
- Multi-section forms

### Extra Large (max-w-4xl = 896px)
- Very complex forms
- Data tables in modals
- Image galleries

## Modal Types

### Confirmation Dialog (AlertDialog)
```
+-----------------------------------------------+
| Delete Item                             [X]   |
+-----------------------------------------------+
| Are you sure you want to delete this item?    |
| This action cannot be undone.                 |
|                                               |
| Item Name: [Item details shown here]          |
|                                               |
+-----------------------------------------------+
| [Cancel]                            [Delete]  |
+-----------------------------------------------+
```

### Form Dialog
```
+-----------------------------------------------+
| Create New Item                         [X]   |
+-----------------------------------------------+
| Fill in the details below                     |
|                                               |
| Name *                                        |
| <Input_____________________________________>  |
|                                               |
| Description                                   |
| <Textarea__________________________________   |
| _________________________________________>    |
|                                               |
| [Cancel]                             [Create] |
+-----------------------------------------------+
```

### Information Dialog
```
+-----------------------------------------------+
| Information                             [X]   |
+-----------------------------------------------+
| Here is some important information you        |
| should know before proceeding.                |
|                                               |
| • Point 1                                     |
| • Point 2                                     |
| • Point 3                                     |
|                                               |
| [Got It]                                      |
+-----------------------------------------------+
```

## Components Required
- Dialog or AlertDialog (ShadCN)
- DialogTrigger (button that opens dialog)
- DialogContent (main container)
- DialogHeader (title + description)
- DialogTitle (H2)
- DialogDescription (subtitle)
- DialogFooter (action buttons)
- DialogClose (X button)
- Form components (if form dialog)
- Button (Primary action, Cancel/Close)

## Interactions
1. Trigger: Click button or action that opens dialog
2. Open: Dialog animates in, focus trapped
3. Close options:
   - Click X button
   - Click Cancel button
   - Press Escape key
   - Click overlay (optional, configure)
4. Confirm: Click primary action button
5. Focus: Returns to trigger element after close

## States
- Closed: Not visible
- Opening: Animating in (200ms)
- Open: Fully visible, interactive
- Processing: Loading state (if action triggers API call)
- Closing: Animating out (200ms)
- Error: Show error alert within dialog (if action fails)

## Behaviors

### Focus Management
- Initial focus: Cancel button (safer default) or first input
- Focus trap: Tab cycles within dialog
- Focus return: Returns to trigger element on close

### Keyboard Navigation
- Escape: Close dialog (cancel)
- Enter: Submit form or confirm action (if appropriate)
- Tab: Cycle through focusable elements
- Shift+Tab: Cycle backward

### Animations
- Fade in: Overlay (200ms)
- Slide/Scale in: Dialog content (200ms)
- Fade out: Overlay (200ms)
- Slide/Scale out: Dialog content (200ms)

## Responsive Behavior
- Desktop: Centered, max-width based on size
- Tablet: Centered, may take more width
- Mobile: Full width with margins, or slide up from bottom

## Accessibility
- role="dialog" or role="alertdialog"
- aria-modal="true"
- aria-labelledby: Points to dialog title
- aria-describedby: Points to dialog description
- Focus trap active
- Escape key closes
- Focus returns to trigger on close
- Screen reader announces dialog opening

## Button Variants by Dialog Type

### Confirmation (Destructive Action)
- Cancel: variant="outline"
- Confirm: variant="destructive" (e.g., "Delete", "Remove")

### Confirmation (Non-Destructive)
- Cancel: variant="outline"
- Confirm: variant="default" (e.g., "Confirm", "Proceed")

### Form
- Cancel: variant="outline"
- Submit: variant="default" (e.g., "Create", "Save", "Submit")

### Information
- Close: variant="default" (e.g., "Got It", "OK", "Close")

## Common Use Cases
- Delete confirmation
- Create/Edit forms
- Information/help dialogs
- Alert messages
- Image/media lightbox
- Settings/preferences
```

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Accessibility](../design-rules/accessibility.md)
- [Modal Flow Pattern](../patterns/feedback-patterns.md)
