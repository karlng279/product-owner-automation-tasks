# Detail View Template

## Overview

Standard template for detail/read-only view screens showing complete information about a single item.

---

## Template

```
**Wireframe ID:** WF-XXX
**Screen Name:** [Screen Name]
**Story ID:** ST-XXX
**Acceptance Criteria:** AC-XXX, AC-XXX
**Screen Type:** Detail

---

## Purpose
[What information this detail view displays]

## Desktop Layout (1024px+)

+------------------------------------------------------------------+
| {Logo} Navigation Links...                        [User Menu ▼] |
+------------------------------------------------------------------+
| [Breadcrumb] Home > Section > List > Item Name                   |
+------------------------------------------------------------------+
|                                                                  |
|  [← Back to List]                      [Edit] [Delete] [⋮ More]  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Item Name (H1)                                   [Status]  |  |
|  | Subtitle or identifier                                     |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Basic Information                                          |  |
|  +------------------------------------------------------------+  |
|  | Field Label:  Field Value                                  |  |
|  | Field Label:  Field Value                                  |  |
|  | Field Label:  Field Value                                  |  |
|  | Field Label:  Field Value                                  |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Additional Details                                         |  |
|  +------------------------------------------------------------+  |
|  | Field Label:  Field Value                                  |  |
|  | Field Label:  Field Value                                  |  |
|  | Field Label:  Field Value                                  |  |
|  | Description:  Lorem ipsum dolor sit amet, consectetur      |  |
|  |               adipiscing elit. Longer text wraps.          |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Related Items / Activity / History                         |  |
|  +------------------------------------------------------------+  |
|  | • Related Item 1                               [View]      |  |
|  | • Related Item 2                               [View]      |  |
|  | • Related Item 3                               [View]      |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Metadata:                                                       |
|  Created: Jan 15, 2024 by John Doe                              |
|  Last Modified: Jan 16, 2024 by Jane Smith                      |
|                                                                  |
+------------------------------------------------------------------+
| Footer                                                           |
+------------------------------------------------------------------+

## Mobile Layout (< 640px)

+--------------------------------+
| ☰  {Logo}        [User Icon]   |
+--------------------------------+
| [← Back]                       |
+--------------------------------+
|                                |
| Item Name (H1)                 |
| Subtitle             [Status]  |
|                                |
| [Edit_____] [Delete] [⋮]       |
|                                |
| Basic Information              |
| Field Label: Value             |
| Field Label: Value             |
| Field Label: Value             |
|                                |
| Additional Details             |
| Field Label: Value             |
| Field Label: Value             |
| Description: Lorem ipsum...    |
|                                |
| Related Items                  |
| • Item 1          [View]       |
| • Item 2          [View]       |
|                                |
| Created: Jan 15, 2024          |
| Modified: Jan 16, 2024         |
|                                |
+--------------------------------+

## Components Required
- Card (sections)
- Badge (status)
- Button (Edit, Delete, Back)
- DropdownMenu (More actions)
- Typography (labels and values)
- List (related items)

## Interactions
1. Back: Navigate to list view
2. Edit: Navigate to edit form
3. Delete: Open confirmation dialog
4. More actions: Open dropdown menu
5. Related items: Click to view related item details

## Actions
- Edit: Navigate to edit form
- Delete: Confirm and delete
- Export: Download as PDF/CSV
- Share: Copy link or share dialog
- Duplicate: Create copy

## States
- Loading: Skeleton placeholder
- Loaded: Display all information
- Error: Error message with Retry button
- Not Found: 404 message

## Responsive Behavior
- Desktop: Two-column layout for fields
- Tablet: Two-column or single
- Mobile: Single column, stack vertically

## Accessibility
- Semantic heading hierarchy
- Keyboard: Tab through actions
- Screen reader: Labels and values clearly associated
```

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Layout System](../design-rules/layout-system.md)
