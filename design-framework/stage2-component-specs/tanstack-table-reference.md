# Tanstack Table Reference

## Overview

Tanstack Table is a **headless UI library** for building powerful tables. Unlike ShadCN components which provide styled UI, Tanstack Table provides table logic without styling.

**Headless means:** You specify the data structure, behavior, and logic. You provide the UI styling.

**Full Configuration Required:** Because Tanstack Table is headless, component specs must provide complete configuration.

**Documentation:** [Tanstack Table Docs](https://tanstack.com/table)

---

## Why Tanstack Table?

**Features:**
- Sorting (single and multi-column)
- Filtering (global and column-specific)
- Pagination
- Row selection
- Column visibility toggle
- Column resizing
- Grouping/aggregation
- Virtual scrolling (performance)

**When to Use:**
- Data tables with 10+ rows
- Tables needing sorting
- Tables needing filtering
- Tables with complex interactions
- Tables with row actions

**When NOT to Use:**
- Simple static tables (< 10 rows, no interaction) - use ShadCN Table
- Read-only data display - use ShadCN Table

---

## Table Configuration Structure

Every Tanstack Table spec must define:

1. **Columns Configuration** - All columns with properties
2. **Data Structure** - Expected data shape
3. **Sorting Configuration** - Sorting behavior
4. **Filtering Configuration** - Filter behavior
5. **Pagination Configuration** - Pagination settings
6. **Row Selection** - Selection behavior (if applicable)
7. **States** - Empty, loading, error states
8. **Styling** - How table renders (using ShadCN Table components)

---

## Column Configuration

### Column Definition Properties

**Required Properties:**

**accessorKey** or **accessorFn**
- `accessorKey`: Simple data key (e.g., "firstName", "email")
- `accessorFn`: Custom accessor function (e.g., `(row) => row.user.email`)

**header**
- Column header display text or render function
- Example: "First Name", "Email Address"

**cell**
- Cell rendering (default or custom)
- Options:
  - Default: renders value as text
  - Custom: specify custom rendering (badge, button, etc.)

**Optional Properties:**

**id**
- Unique column ID (required if no accessorKey)
- Used for reference in sorting, filtering

**enableSorting**
- `true` (default) - Column can be sorted
- `false` - Disable sorting for this column

**enableColumnFilter**
- `true` - Column can be filtered
- `false` (default) - Disable column filtering

**enableGlobalFilter**
- `true` (default) - Included in global search
- `false` - Exclude from global search

**sortingFn**
- Custom sorting function
- Options: "alphanumeric", "datetime", "number", custom function

**filterFn**
- Custom filter function
- Options: "includesString", "equalsString", "betweenNumber", custom

**size**
- Column width (in pixels or percentage)
- Example: 100, 200, "25%"

**minSize**
- Minimum column width

**maxSize**
- Maximum column width

### Column Types & Examples

#### Text Column

```
Column: Customer Name
- accessorKey: "customerName"
- header: "Customer"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "includesString"
- size: 200
```

#### Number Column

```
Column: Quantity
- accessorKey: "quantity"
- header: "Qty"
- cell: Default (number)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: false
- sortingFn: "number"
- filterFn: "betweenNumber"
- size: 80
```

#### Date Column

```
Column: Created Date
- accessorKey: "createdAt"
- header: "Created"
- cell: Custom (format: "MMM DD, YYYY")
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: false
- sortingFn: "datetime"
- filterFn: "betweenDate"
- size: 120
```

#### Status Column (Badge)

```
Column: Status
- accessorKey: "status"
- header: "Status"
- cell: Custom (Badge component)
  - Status values: "active", "pending", "inactive"
  - Badge variants:
    - active: Badge variant="default" (green)
    - pending: Badge variant="secondary" (yellow)
    - inactive: Badge variant="outline" (gray)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "equalsString"
- size: 100
```

#### Actions Column

```
Column: Actions
- id: "actions"
- header: "Actions"
- cell: Custom (DropdownMenu)
  - Actions:
    - View: Navigate to detail page
    - Edit: Navigate to edit page
    - Delete: Open confirmation dialog
  - DropdownMenu with DropdownMenuItems
- enableSorting: false
- enableColumnFilter: false
- enableGlobalFilter: false
- size: 80
```

#### Nested Data Column

```
Column: User Email
- accessorFn: (row) => row.user.email
- id: "userEmail"
- header: "Email"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: true
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- filterFn: "includesString"
- size: 250
```

#### Computed Column

```
Column: Full Name
- accessorFn: (row) => `${row.firstName} ${row.lastName}`
- id: "fullName"
- header: "Name"
- cell: Default (text)
- enableSorting: true
- enableColumnFilter: false
- enableGlobalFilter: true
- sortingFn: "alphanumeric"
- size: 200
```

---

## Sorting Configuration

### Single-Column Sorting

```
Sorting:
- Type: Single-column
- Default Sort: createdAt DESC
- Sorting Enabled: true
- Sortable Columns: All except Actions
- Sort Indicator: Arrow icon (↑ ↓)
- Sort Behavior: Click header to toggle (none → asc → desc → none)
```

### Multi-Column Sorting

```
Sorting:
- Type: Multi-column
- Default Sort:
  - Primary: status ASC
  - Secondary: createdAt DESC
- Sorting Enabled: true
- Sortable Columns: All except Actions
- Sort Indicator: Arrow icon with number (1↑ 2↓)
- Sort Behavior:
  - Click: Add to sort stack
  - Shift+Click: Add secondary sort
  - Clear: Button to clear all sorts
```

### No Sorting

```
Sorting:
- Type: None
- Sorting Enabled: false
```

---

## Filtering Configuration

### Global Search Filter

```
Global Filter:
- Enabled: true
- Placeholder: "Search all columns..."
- Position: Above table
- Debounce: 300ms
- Columns Included: All with enableGlobalFilter: true
- Filter Function: "includesString" (case-insensitive)
- Clear Button: Yes
```

### Column Filters

```
Column Filters:
- Enabled: true
- Filter UI: Below column headers or in popover
- Columns with Filters:

  1. Status Filter (Select)
     - Type: Select dropdown
     - Options: All, Active, Pending, Inactive
     - Filter Function: "equalsString"

  2. Customer Name Filter (Text Input)
     - Type: Text input
     - Placeholder: "Filter customers..."
     - Filter Function: "includesString"
     - Debounce: 300ms

  3. Created Date Filter (Date Range)
     - Type: Date range picker
     - Fields: Start Date, End Date
     - Filter Function: "betweenDate"

- Clear All Filters Button: Yes
```

### No Filtering

```
Filtering:
- Global Filter: Disabled
- Column Filters: Disabled
```

---

## Pagination Configuration

### Standard Pagination

```
Pagination:
- Enabled: true
- Page Size Options: [10, 20, 50, 100]
- Default Page Size: 10
- Current Page: 1 (initial)
- Pagination UI:
  - Page size selector: Dropdown
  - Page info: "Showing 1-10 of 234"
  - Navigation:
    - First Page button
    - Previous Page button
    - Page numbers (1, 2, 3, ..., 24)
    - Next Page button
    - Last Page button
- Position: Below table
```

### Simple Pagination

```
Pagination:
- Enabled: true
- Page Size: 20 (fixed)
- Pagination UI:
  - Previous/Next buttons only
  - Page info: "Page 2 of 12"
- Position: Below table
```

### Infinite Scroll

```
Pagination:
- Type: Infinite scroll
- Page Size: 20
- Behavior: Load more on scroll to bottom
- Loading Indicator: Spinner at bottom
```

### No Pagination

```
Pagination:
- Enabled: false
- Display: All rows
```

---

## Row Selection Configuration

### Multi-Select with Checkboxes

```
Row Selection:
- Enabled: true
- Type: Multi-select
- Selection UI:
  - Select All checkbox in header
  - Checkbox in first column of each row
- Selection State:
  - All selected: Indeterminate if some selected
  - Show count: "3 rows selected"
  - Actions:
    - Bulk Delete button (enabled when rows selected)
    - Bulk Export button
- Clear Selection: Button or automatic on action
```

### Single-Select with Radio

```
Row Selection:
- Enabled: true
- Type: Single-select
- Selection UI:
  - Radio button in first column
- Selection State:
  - Show selected row highlight
  - Action:
    - Select button (enabled when row selected)
```

### Row Click Selection

```
Row Selection:
- Enabled: true
- Type: Row click
- Selection UI:
  - Entire row clickable
  - Selected row highlighted (bg-accent)
- Behavior:
  - Click row to select
  - Click again to deselect
  - Single or multi-select (specify)
```

### No Selection

```
Row Selection:
- Enabled: false
```

---

## Data Structure

Define expected data shape:

### Example: Shipment Data

```
Data Structure:

Type: Array of objects

Object Shape:
{
  id: string (unique identifier)
  shipmentNumber: string
  status: "pending" | "in_transit" | "delivered" | "cancelled"
  customer: {
    id: string
    name: string
    email: string
  }
  origin: string
  destination: string
  weight: number (kg)
  createdAt: Date (ISO 8601 string)
  updatedAt: Date (ISO 8601 string)
}

Data Source: API endpoint /api/shipments
Data Fetching: React Query (useQuery)
Cache: 5 minutes
Refetch: On window focus
```

---

## Table States

### Loading State

```
Loading State:
- Trigger: Initial load, refetch, page change
- UI:
  - Skeleton rows (5 rows)
  - Or spinner overlay
  - Disable interactions
- Message: "Loading shipments..."
```

### Empty State

```
Empty State:
- Trigger: No data or no results after filter
- UI:
  - Icon (empty box)
  - Title: "No shipments found"
  - Description: "Create your first shipment to get started"
  - Action: Button "Create Shipment" (if applicable)
- Conditional:
  - If filtered and empty: "No results match your filters"
  - Action: Button "Clear Filters"
```

### Error State

```
Error State:
- Trigger: API error, network error
- UI:
  - Alert (variant: destructive)
  - Icon (error icon)
  - Title: "Failed to load shipments"
  - Description: Error message from API
  - Action: Button "Retry"
- Fallback: Show cached data if available
```

---

## Styling with ShadCN Table

Tanstack Table provides logic, ShadCN Table provides UI:

```
Table Styling:
- Container:
  - Border: rounded-md border
  - Background: bg-background

- Table Element:
  - Component: ShadCN Table

- Table Header:
  - Component: ShadCN TableHeader
  - Row: ShadCN TableRow
  - Header Cell: ShadCN TableHead
  - Styling: h-12 px-4 text-left font-medium

- Table Body:
  - Component: ShadCN TableBody
  - Row: ShadCN TableRow
  - Row Hover: hover:bg-muted/50
  - Cell: ShadCN TableCell
  - Styling: p-4

- Empty Row:
  - Full width cell
  - Text: text-center text-muted-foreground
```

---

## Complete Table Specification Template

```
Table ID: TBL-XXX
Table Name: [Descriptive Name]
Wireframe ID: WF-XXX
Acceptance Criteria: AC-XXX, AC-XXX

## Data Structure
Type: Array of objects
Object Shape: { ... }
Data Source: API endpoint
Data Fetching: React Query / fetch

## Columns

### Column 1: [Name]
- accessorKey: "key"
- header: "Header Text"
- cell: Default | Custom (specify)
- enableSorting: true/false
- enableColumnFilter: true/false
- enableGlobalFilter: true/false
- sortingFn: "alphanumeric" | "number" | "datetime"
- filterFn: "includesString" | "equalsString" | "betweenNumber"
- size: number

### Column 2: [Name]
[Same structure...]

### Actions Column
- id: "actions"
- header: "Actions"
- cell: Custom (DropdownMenu)
  - Action 1: [Name] - [Behavior]
  - Action 2: [Name] - [Behavior]
- enableSorting: false
- size: 80

## Sorting
- Type: Single | Multi | None
- Default Sort: column ASC/DESC
- Sortable Columns: [List]
- Sort Indicator: Arrow icon

## Filtering
### Global Filter
- Enabled: true/false
- Placeholder: "..."
- Position: Above table
- Debounce: 300ms

### Column Filters
- Enabled: true/false
- [Column Name]: [Filter Type]
  - Type: Select | Text Input | Date Range
  - Options/Placeholder: [...]
  - Filter Function: [...]

## Pagination
- Enabled: true/false
- Page Size Options: [10, 20, 50, 100]
- Default Page Size: 10
- Pagination UI: [Specify controls]
- Position: Below table

## Row Selection
- Enabled: true/false
- Type: Multi-select | Single-select | Row click | None
- Selection UI: [Checkbox | Radio | Row highlight]
- Actions: [Bulk actions if applicable]

## States
### Loading State
- UI: Skeleton | Spinner
- Message: "..."

### Empty State
- UI: Icon, Title, Description, Action
- Message: "..."

### Error State
- UI: Alert, Title, Description, Action
- Message: "..."

## Styling
- Container: [Border, background, etc.]
- Header: [Styling]
- Body: [Styling]
- Row Hover: [Styling]
```

---

## Common Table Patterns

### Simple List Table

- Columns: ID, Name, Status, Created Date, Actions
- Sorting: Single-column, default: Created Date DESC
- Filtering: Global search only
- Pagination: Standard, 10 per page
- Row Selection: None
- Actions: View, Edit, Delete (DropdownMenu)

### Advanced Data Table

- Columns: 8-10 columns with various types
- Sorting: Multi-column
- Filtering: Global search + column filters
- Pagination: Standard with page size options
- Row Selection: Multi-select with bulk actions
- Actions: Row-level + bulk actions

### Simple Read-Only Table

- Columns: 4-6 columns
- Sorting: None or single-column
- Filtering: None
- Pagination: None (< 20 rows) or simple
- Row Selection: None
- Actions: None or View only

---

## Quality Checklist

- [ ] All columns defined with complete properties
- [ ] Data structure specified
- [ ] Sorting configuration clear
- [ ] Filtering configuration complete (if applicable)
- [ ] Pagination settings specified
- [ ] Row selection behavior defined (if applicable)
- [ ] All states addressed (loading, empty, error)
- [ ] Actions column detailed (if applicable)
- [ ] Styling/UI rendering specified
- [ ] Accessibility considerations (keyboard nav, ARIA labels)

---

**Reference:** [Tanstack Table Documentation](https://tanstack.com/table)
