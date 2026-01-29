# Feedback Patterns

## Overview

Patterns for providing user feedback: loading states, success, errors, and notifications.

---

## Loading States

### Spinner

**Use when:** Page loading, async actions

```
⟳ Loading...
```

**Components:** Custom spinner component

**Sizes:** sm, md, lg
**Position:** Center of container or inline

---

### Skeleton Loader

**Use when:** Content placeholders during load

```
+--------------------------------------------------+
| ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← Title                        |
| ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  ← Paragraph    |
| ░░░░░░░░░░░░░░░░░░  ← Shorter line               |
+--------------------------------------------------+
```

**Components:** Skeleton (ShadCN)

**Pattern:** Match layout of actual content

---

### Progress Bar

**Use when:** Known progress (upload, multi-step)

```
[████████████░░░░░░░░] 60%
```

**Components:** Progress (ShadCN)

**Variants:**
- Determinate: Show percentage
- Indeterminate: Animated, unknown duration

---

### Button Loading State

```
Before: [Submit]
During: [Submitting... ⟳] (Disabled)
```

**Pattern:** Spinner + text change + disabled

---

## Success Feedback

### Toast Notification

**Use when:** Confirm action success

```
┌──────────────────────────┐
│ ✓ Item saved successfully│
└──────────────────────────┘
```

**Components:** Toast (ShadCN)

**Position:** Bottom-right or top-right
**Duration:** 3-5 seconds, auto-dismiss
**Action:** Optional undo button

**Accessibility:** aria-live="polite"

---

### Inline Success Message

```
✓ Changes saved
```

**Use when:** Form submitted, setting updated

**Components:** Alert (variant: default with green accent)

---

### Success Page/State

**Use when:** Flow completion (checkout, signup)

```
+---------------------------+
|    ✓                      |
|    Success!               |
|    [Description]          |
|    [Next Action]          |
+---------------------------+
```

---

## Error Feedback

### Toast Error

```
┌──────────────────────────┐
│ ✕ Failed to save item    │
│   [Retry]                │
└──────────────────────────┘
```

**Components:** Toast (variant: destructive)

**Duration:** Manual dismiss or 7+ seconds
**Action:** Retry or Dismiss

---

### Inline Error (Form Field)

```
Email *
<Input_____________________________________>  ← Red border
✕ Please enter a valid email address
```

**Components:** FormMessage (below input)

**Color:** text-destructive
**Icon:** Optional X icon

---

### Alert Banner

**Use when:** Page-level error, warning

```
+----------------------------------------------------------+
| ⚠ Warning: Your subscription expires in 3 days          |
|   [Renew Now]                                 [Dismiss]  |
+----------------------------------------------------------+
```

**Components:** Alert (variant: destructive or default)

**Position:** Top of page or section
**Dismissible:** Optional X button

---

### Error Page/State

**Use when:** Failed load, 404, 500 errors

```
+---------------------------+
|    ✕                      |
|    Error                  |
|    [Error description]    |
|    [Go Back] [Retry]      |
+---------------------------+
```

---

## Empty States

### No Data

```
+---------------------------+
|    📦                     |
|    No items found         |
|    Get started by         |
|    creating your first    |
|    item.                  |
|    [Create Item]          |
+---------------------------+
```

**Components:** Custom empty state component

**Elements:**
- Icon (large, muted color)
- Title
- Description
- Call-to-action button (optional)

---

### No Search Results

```
+---------------------------+
|    🔍                     |
|    No results found       |
|    Try adjusting your     |
|    search or filters      |
|    [Clear Filters]        |
+---------------------------+
```

---

### Zero State (First Time)

```
+---------------------------+
|    🎉                     |
|    Welcome!               |
|    You haven't created    |
|    any items yet.         |
|    [Get Started]          |
+---------------------------+
```

---

## Confirmation Dialogs

### Delete Confirmation

```
+-----------------------------------------------+
| Delete Item                             [X]   |
+-----------------------------------------------+
| Are you sure you want to delete this item?    |
| This action cannot be undone.                 |
|                                               |
| Item: [Item name]                             |
|                                               |
| [Cancel]                            [Delete]  |
+-----------------------------------------------+
```

**Components:** AlertDialog

**Button:** destructive variant for delete

---

### Discard Changes

```
+-----------------------------------------------+
| Unsaved Changes                         [X]   |
+-----------------------------------------------+
| You have unsaved changes. Are you sure you    |
| want to leave without saving?                 |
|                                               |
| [Cancel]  [Discard Changes]         [Save]    |
+-----------------------------------------------+
```

---

## Information Messages

### Info Alert

```
+----------------------------------------------------------+
| ℹ️ Tip: You can drag and drop files to upload them       |
|   [Got It]                                    [Dismiss]   |
+----------------------------------------------------------+
```

**Components:** Alert (variant: default with blue accent)

---

### Tooltip

**Use when:** Brief contextual help

```
Hover over [?] → ┌──────────────────┐
                  │ Helper text here │
                  └──────────────────┘
```

**Components:** Tooltip (ShadCN)

**Trigger:** Hover or focus
**Delay:** 300ms

---

## Loading Overlay

**Use when:** Blocking operation

```
+------------------------------------------------------------------+
|                          [Darkened overlay]                      |
|                                                                  |
|                          ⟳ Processing...                         |
|                                                                  |
+------------------------------------------------------------------+
```

**Components:** Custom overlay + spinner

**Behavior:**
- Blocks interaction
- Shows spinner + message
- Dismisses on complete

---

## Badge Status Indicators

```
[Active]    [Pending]    [Inactive]    [Error]
```

**Components:** Badge (ShadCN)

**Variants:**
- Active: default (green)
- Pending: secondary (yellow)
- Inactive: outline (gray)
- Error: destructive (red)

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Accessibility](../design-rules/accessibility.md)
