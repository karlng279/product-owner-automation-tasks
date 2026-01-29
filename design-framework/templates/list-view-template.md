# List View Template

## Overview

Standard template for list/table-based wireframes displaying multiple items with filtering, sorting, and actions.

---

## Template

```
**Wireframe ID:** WF-XXX
**Screen Name:** [Screen Name]
**Story ID:** ST-XXX
**Acceptance Criteria:** AC-XXX, AC-XXX
**Screen Type:** List

---

## Purpose
[What this list displays and allows users to do]

## Desktop Layout (1024px+)

+------------------------------------------------------------------+
| {Logo} Navigation Links...                        [User Menu ▼] |
+------------------------------------------------------------------+
| [Breadcrumb] Home > Section > Current List                       |
+------------------------------------------------------------------+
|                                                                  |
|  Page Title (H1)                          [+ Create New Item]   |
|  Subtitle or description                                         |
|                                                                  |
|  <Search all items...________________> [Filter ▼] [Export ▼]    |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Column 1    | Column 2    | Column 3    | Status | Actions |  |
|  +------------------------------------------------------------+  |
|  | Item 1      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 2      | Data        | Data        | [Pending]| [⋮]  |  |
|  | Item 3      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 4      | Data        | Data        | [Inactive]| [⋮] |  |
|  | Item 5      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 6      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 7      | Data        | Data        | [Pending]| [⋮]  |  |
|  | Item 8      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 9      | Data        | Data        | [Active] | [⋮]  |  |
|  | Item 10     | Data        | Data        | [Active] | [⋮]  |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Showing 1-10 of 234                                             |
|  [<< First] [< Previous] [1] [2] [3] ... [24] [Next >] [Last >>]|
|  Rows per page: [10 ▼]                                           |
|                                                                  |
+------------------------------------------------------------------+
| Footer                                                           |
+------------------------------------------------------------------+

## Mobile Layout (< 640px)

+--------------------------------+
| ☰  {Logo}        [User Icon]   |
+--------------------------------+
|                                |
| Page Title (H1)                |
|                                |
| [+ Create New Item_________]   |
|                                |
| <Search..._______________> [≡] |
|                                |
| +----------------------------+ |
| | Item 1                     | |
| | Column 2: Data             | |
| | Column 3: Data             | |
| | Status: [Active]  [View >] | |
| +----------------------------+ |
|                                |
| +----------------------------+ |
| | Item 2                     | |
| | Column 2: Data             | |
| | Column 3: Data             | |
| | Status: [Pending] [View >] | |
| +----------------------------+ |
|                                |
| [Load More_________________]   |
|                                |
+--------------------------------+

## Components Required
- Table (ShadCN Table + Tanstack Table)
- Input (search)
- Button (Create, Filter, Export)
- Badge (status)
- DropdownMenu (actions)
- Pagination controls
- Select (rows per page)

## Interactions
1. Search: Type to filter globally (debounced 300ms)
2. Filter: Click to open filter dropdown
3. Sort: Click column header to sort
4. Actions: Click ⋮ to open action menu (View, Edit, Delete)
5. Pagination: Click page numbers or Next/Previous
6. Create: Click button to navigate to create form

## Table States
- Loading: Skeleton rows
- Empty: "No items found" message with Create button
- Error: Error alert with Retry button
- Filtered Empty: "No results match your filters" with Clear Filters

## Actions Menu (⋮)
- View: Navigate to detail page
- Edit: Navigate to edit form
- Separator
- Delete: Open confirmation dialog

## Responsive Behavior
- Desktop: Full table view
- Tablet: Hide less important columns
- Mobile: Card-based layout

## Accessibility
- Table headers: scope="col"
- Sortable headers: aria-sort
- Action buttons: aria-label="Actions for [item]"
- Keyboard: Tab through controls, Enter to activate
```

---

## Related
- [Tanstack Table Reference](../stage2-component-specs/tanstack-table-reference.md)
- [Data Display Patterns](../patterns/data-display-patterns.md)
