# Data Table Specification Template (Tanstack Table)

**Table ID:** TBL-XXX
**Table Name:** [Descriptive Name, e.g., "Shipment List Table"]
**Component ID:** COMP-XXX
**Wireframe ID(s):** WF-XXX
**Story ID(s):** ST-XXX
**Acceptance Criteria IDs:** AC-XXX, AC-XXX, AC-XXX
**Created:** [Date]
**Last Updated:** [Date]

---

## 1. Table Overview

### Purpose
[What this table displays. 1-2 sentences explaining its purpose.]

### Context
[Where this table appears. What page? What user flow?]

### User Interaction
[What can users do with this table? Sort, filter, select rows, perform actions?]

### Key Features
- [Feature 1, e.g., "Multi-column sorting"]
- [Feature 2, e.g., "Global search with column filters"]
- [Feature 3, e.g., "Row selection with bulk actions"]
- [Feature 4, e.g., "Pagination with page size options"]

---

## 2. Data Structure

### Data Source
**Endpoint:** [API endpoint, e.g., "/api/shipments"]
**Method:** [GET, POST]
**Authentication:** [Required/Not required]

### Data Fetching
**Library:** [e.g., "React Query", "fetch", "axios"]
**Hook:** [e.g., "useQuery('shipments', fetchShipments)"]
**Cache Duration:** [e.g., "5 minutes"]
**Refetch:** [e.g., "On window focus", "Manual only"]
**Background Refetch:** [Yes/No]

### Data Type
**Type:** Array of objects

### Object Shape

```typescript
{
  id: string                    // Unique identifier
  [field1]: [type]              // Description
  [field2]: [type]              // Description
  [nestedField]: {
    [subfield1]: [type]
    [subfield2]: [type]
  }
  createdAt: string              // ISO 8601 date string
  updatedAt: string              // ISO 8601 date string
}
```

### Example Data Object

```json
{
  "id": "SHP-001",
  "shipmentNumber": "SHP-2024-001",
  "status": "in_transit",
  "customer": {
    "id": "CUST-001",
    "name": "Acme Corp",
    "email": "contact@acme.com"
  },
  "origin": "New York, NY",
  "destination": "Los Angeles, CA",
  "weight": 150.5,
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-16T14:20:00Z"
}
```

---

## 3. Column Definitions

### Column 1: [Column Name]

**Column ID:** COL-001

**Data Access:**
- accessorKey: "[field]" OR
- accessorFn: (row) => [expression]
- id: "[unique_id]" (required if using accessorFn)

**Header:**
- Text: "[Header Display Text]"
- Alignment: [left | center | right]

**Cell:**
- Type: [Default (text) | Custom]
- Rendering: [If custom, describe how cell renders]
- Format: [If applicable, e.g., "Date format: MMM DD, YYYY", "Currency: $X,XXX.XX"]

**Sorting:**
- enableSorting: [true | false]
- sortingFn: ["alphanumeric" | "datetime" | "number" | custom]
- Default Sort: [If applicable, e.g., "DESC"]

**Filtering:**
- enableColumnFilter: [true | false]
- enableGlobalFilter: [true | false]
- filterFn: ["includesString" | "equalsString" | "betweenNumber" | custom]

**Size:**
- size: [number in px or percentage]
- minSize: [number] (optional)
- maxSize: [number] (optional)

**Visibility:**
- Default: [visible | hidden]
- Toggle: [Can user toggle visibility? Yes/No]

**Accessibility:**
- Header ARIA Label: [If needed]
- Cell ARIA Label: [If needed]

---

### Column 2: [Column Name]

[Same structure as Column 1...]

---

### Column 3: Status Column (Badge Example)

**Column ID:** COL-003

**Data Access:**
- accessorKey: "status"

**Header:**
- Text: "Status"
- Alignment: left

**Cell:**
- Type: Custom (Badge component)
- Rendering:
  - Use ShadCN Badge component
  - Badge variants based on status value:
    - "active" → Badge variant="default" (green background)
    - "pending" → Badge variant="secondary" (yellow background)
    - "inactive" → Badge variant="outline" (gray border)
  - Badge text: Capitalized status (e.g., "Active", "Pending", "Inactive")

**Sorting:**
- enableSorting: true
- sortingFn: "alphanumeric"

**Filtering:**
- enableColumnFilter: true
- enableGlobalFilter: true
- filterFn: "equalsString"
- Filter UI: Select dropdown with options: All, Active, Pending, Inactive

**Size:**
- size: 120

---

### Column 4: Date Column Example

**Column ID:** COL-004

**Data Access:**
- accessorKey: "createdAt"

**Header:**
- Text: "Created"
- Alignment: left

**Cell:**
- Type: Custom (formatted date)
- Rendering: Format date as "MMM DD, YYYY" (e.g., "Jan 15, 2024")
- Library: [e.g., "date-fns format()"]

**Sorting:**
- enableSorting: true
- sortingFn: "datetime"
- Default Sort: DESC (newest first)

**Filtering:**
- enableColumnFilter: true
- enableGlobalFilter: false
- filterFn: "betweenDate"
- Filter UI: Date range picker (Start Date, End Date)

**Size:**
- size: 130

---

### Column 5: Nested Data Column Example

**Column ID:** COL-005

**Data Access:**
- accessorFn: (row) => row.customer.name
- id: "customerName"

**Header:**
- Text: "Customer"
- Alignment: left

**Cell:**
- Type: Default (text)
- Rendering: Display customer name

**Sorting:**
- enableSorting: true
- sortingFn: "alphanumeric"

**Filtering:**
- enableColumnFilter: true
- enableGlobalFilter: true
- filterFn: "includesString"
- Filter UI: Text input, placeholder "Filter customers..."

**Size:**
- size: 200

---

### Actions Column

**Column ID:** COL-ACTIONS

**Data Access:**
- id: "actions"
- accessorKey: N/A (no data access, UI only)

**Header:**
- Text: "Actions"
- Alignment: center

**Cell:**
- Type: Custom (DropdownMenu)
- Rendering: ShadCN DropdownMenu component
  - Trigger: Button (variant="ghost", size="icon", icon: "⋮" or "...")
  - Menu Items:
    1. **View**
       - Icon: Eye icon
       - Label: "View Details"
       - Action: Navigate to detail page (/shipments/[id])
    2. **Edit**
       - Icon: Pencil icon
       - Label: "Edit"
       - Action: Navigate to edit page (/shipments/[id]/edit)
    3. **Separator**
    4. **Delete**
       - Icon: Trash icon
       - Label: "Delete"
       - Style: Text color destructive
       - Action: Open confirmation dialog

**Sorting:**
- enableSorting: false

**Filtering:**
- enableColumnFilter: false
- enableGlobalFilter: false

**Size:**
- size: 80

**Accessibility:**
- Button aria-label: "Actions for [row identifier]"
- Keyboard: Arrow keys to navigate menu items, Enter to select, Escape to close

---

[Add more columns as needed...]

---

## 4. Sorting Configuration

### Sorting Type
[Choose one:]
- ☐ None (no sorting)
- ☐ Single-column sorting
- ☑ Multi-column sorting

### Default Sort
**Primary Sort:**
- Column: [Column name/id]
- Direction: [ASC | DESC]

**Secondary Sort:** (if multi-column)
- Column: [Column name/id]
- Direction: [ASC | DESC]

### Sortable Columns
- [ ] [Column 1 name]
- [ ] [Column 2 name]
- [ ] [Column 3 name]
- [ ] [Column 4 name]
- [ ] Actions (typically not sortable)

### Sort Indicator
**UI:**
- Icon: [e.g., "Arrow icon (↑ asc, ↓ desc)"]
- Position: [e.g., "Right side of header text"]
- Multi-column indicator: [e.g., "Number badge (1↑ 2↓)"]

**Behavior:**
- Click header: [e.g., "Toggle sort (none → asc → desc → none)"]
- Multi-column: [e.g., "Shift+Click to add secondary sort"]
- Clear sorts: [e.g., "Button to clear all sorts"]

---

## 5. Filtering Configuration

### Global Search Filter

**Enabled:** [Yes | No]

**If Enabled:**
- **Placeholder:** "[Placeholder text, e.g., 'Search all columns...']"
- **Position:** [e.g., "Above table, top-left"]
- **Debounce:** [e.g., "300ms"]
- **Columns Included:** [All columns with enableGlobalFilter: true]
- **Filter Function:** [e.g., "includesString (case-insensitive)"]
- **Clear Button:** [Yes | No]
- **Icon:** [e.g., "Search icon (magnifying glass)"]

---

### Column Filters

**Enabled:** [Yes | No]

**If Enabled:**

#### Column 1 Filter: [Column Name]

**Filter Type:** [Text Input | Select Dropdown | Date Range | Number Range | Multi-Select]

**If Text Input:**
- Placeholder: "[e.g., 'Filter by name...']"
- Debounce: [e.g., "300ms"]
- Filter Function: "includesString"

**If Select Dropdown:**
- Options:
  - All (clear filter)
  - [Option 1]
  - [Option 2]
  - [Option 3]
- Filter Function: "equalsString"

**If Date Range:**
- Fields: Start Date, End Date
- Date Picker: [ShadCN Calendar component]
- Filter Function: "betweenDate"

**If Number Range:**
- Fields: Min, Max
- Input Type: Number
- Filter Function: "betweenNumber"

**Position:** [e.g., "Below column header in popover", "In dedicated filter bar"]

#### Column 2 Filter: [Column Name]

[Same structure...]

---

**Clear All Filters Button:**
- Enabled: [Yes | No]
- Position: [e.g., "Above table, top-right"]
- Label: "Clear Filters"

---

## 6. Pagination Configuration

### Enabled
[Yes | No]

### If Enabled:

**Page Size Options:**
- [10]
- [20]
- [50]
- [100]

**Default Page Size:** [e.g., 10]

**Initial Page:** [e.g., 1]

**Pagination UI:**

**Page Size Selector:**
- Type: Select dropdown
- Label: "Rows per page:"
- Position: [e.g., "Bottom-left"]

**Page Info:**
- Format: "Showing [start]-[end] of [total]"
- Example: "Showing 1-10 of 234"
- Position: [e.g., "Bottom-center"]

**Navigation Controls:**
- [ ] First Page button (<<)
- [ ] Previous Page button (<)
- [ ] Page numbers (1, 2, 3, ..., 24)
- [ ] Next Page button (>)
- [ ] Last Page button (>>)
- Position: [e.g., "Bottom-right"]

**Disabled States:**
- First/Previous: Disabled on first page
- Next/Last: Disabled on last page

**Position:** Below table

---

## 7. Row Selection Configuration

### Enabled
[Yes | No]

### If Enabled:

**Selection Type:**
[Choose one:]
- ☐ Multi-select (checkboxes)
- ☐ Single-select (radio buttons)
- ☐ Row click

### Multi-Select Configuration

**Selection UI:**
- **Select All Checkbox:**
  - Position: First column header
  - Behavior:
    - Unchecked: No rows selected
    - Checked: All rows on current page selected
    - Indeterminate: Some rows selected
- **Row Checkboxes:**
  - Position: First column of each row
  - Size: 16x16px (h-4 w-4)

**Selection State:**
- **Selection Count:**
  - Display: "[N] rows selected"
  - Position: [e.g., "Above table, replaces global search when rows selected"]
- **Clear Selection:**
  - Button: "Clear Selection"
  - Position: [e.g., "Next to selection count"]

**Bulk Actions:**
- **Action Bar:**
  - Trigger: Appears when rows selected
  - Position: [e.g., "Above table"]
  - Actions:
    1. **Bulk Delete**
       - Button: variant="destructive"
       - Label: "Delete ([N])"
       - Action: Open confirmation dialog, delete selected rows
    2. **Bulk Export**
       - Button: variant="outline"
       - Label: "Export ([N])"
       - Action: Export selected rows to CSV
    3. [Add more bulk actions...]

**Keyboard Support:**
- Shift+Click: Select range
- Ctrl+Click (Cmd+Click): Toggle individual row selection

---

### Single-Select Configuration

**Selection UI:**
- Radio button in first column
- Only one row selectable at a time

**Selection State:**
- Highlight selected row (bg-accent)
- Show selected row indicator

**Action:**
- Button: "Select" (enabled when row selected)
- Action: [Describe action]

---

### Row Click Configuration

**Behavior:**
- Click entire row to select
- Click again to deselect (if multi-select)
- Selected row styling: bg-accent

---

## 8. Table States

### Loading State

**Trigger:**
- Initial data load
- Data refetch
- Page change
- Filter/sort change

**UI:**
- [ ] Skeleton rows (specify number, e.g., 5 rows)
- [ ] Spinner overlay
- [ ] Progress bar

**Behavior:**
- Disable all interactions
- Show loading indicator
- Maintain table structure

**Message:** (if applicable)
"[Loading message, e.g., 'Loading shipments...']"

**Accessibility:**
- aria-live="polite"
- aria-busy="true"

---

### Empty State

**Trigger:**
- No data returned from API
- No results after filtering

**UI Components:**
- Icon: [e.g., "Empty box icon"]
- Title: "[e.g., 'No shipments found']"
- Description: "[e.g., 'Create your first shipment to get started']"
- Action Button: (if applicable)
  - Label: "[e.g., 'Create Shipment']"
  - Variant: "default"
  - Action: [e.g., "Navigate to create page"]

**Conditional Message:**
- If no data: "[e.g., 'No shipments yet']"
- If filtered and empty: "[e.g., 'No results match your filters']"
  - Show "Clear Filters" button

**Styling:**
- Center content in table area
- py-12 (48px vertical padding)
- text-center
- text-muted-foreground

---

### Error State

**Trigger:**
- API error (4xx, 5xx)
- Network error
- Timeout

**UI Components:**
- Alert component (variant: destructive)
- Icon: Error icon (⚠️)
- Title: "[e.g., 'Failed to load shipments']"
- Description: Error message from API or generic error
- Action Button:
  - Label: "Retry"
  - Variant: "default"
  - Action: Retry data fetch

**Error Messages:**
- Network error: "Unable to connect. Please check your internet connection."
- Server error: "Something went wrong. Please try again later."
- Not found: "Resource not found."
- Unauthorized: "You don't have permission to view this data."

**Fallback:**
- Show cached data if available (with warning)
- Or show empty state with error message

**Accessibility:**
- role="alert"
- aria-live="assertive"

---

## 9. Styling & UI

### Table Container

**Styling:**
- Border: rounded-md border border-border
- Background: bg-background
- Shadow: [none | shadow-sm | shadow-md]
- Overflow: overflow-x-auto (for horizontal scroll on small screens)

### Table Element

**Component:** ShadCN Table

### Table Header

**Component:** ShadCN TableHeader

**Row:**
- Component: ShadCN TableRow
- Background: bg-muted/50
- Border: border-b border-border

**Header Cell:**
- Component: ShadCN TableHead
- Height: h-12 (48px)
- Padding: px-4
- Text: font-medium text-left
- Alignment: [left | center | right] (per column)

**Sortable Header:**
- Cursor: cursor-pointer
- Hover: hover:bg-muted
- Icon: Sort indicator (arrow)

### Table Body

**Component:** ShadCN TableBody

**Row:**
- Component: ShadCN TableRow
- Height: h-16 (64px) or auto
- Border: border-b border-border
- Hover: hover:bg-muted/50

**Selected Row:**
- Background: bg-accent

**Cell:**
- Component: ShadCN TableCell
- Padding: p-4
- Text: text-base
- Alignment: [left | center | right] (per column)

### Empty/Error/Loading Row

**Styling:**
- Full-width cell (colspan: all columns)
- Center alignment: text-center
- Padding: py-12
- Text color: text-muted-foreground

---

## 10. Responsive Behavior

### Desktop (> 1024px)
- Standard table layout
- All columns visible
- Horizontal scroll if needed

### Tablet (640px - 1024px)
- Standard table layout
- Hide less important columns (specify which)
- Horizontal scroll

### Mobile (< 640px)

**Option A: Horizontal Scroll**
- Table scrolls horizontally
- Sticky first column (optional)
- Show hint: "Swipe to see more"

**Option B: Card Layout**
- Hide table
- Show card-based layout instead
- Each row = Card component
- Stack key information vertically
- Actions at bottom of card

**Chosen Approach:** [Option A | Option B]

**If Card Layout:**
- Card structure:
  - CardHeader: [Key field, e.g., "Shipment Number"]
  - CardContent: [Important fields]
  - CardFooter: [Actions]

---

## 11. Accessibility

### Semantic HTML
- Use proper `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>` elements
- Table caption: [Caption text, e.g., "Shipment List"]

### ARIA Attributes

**Table:**
- role="table"
- aria-label="[Table name]"
- aria-describedby="[description id]" (if applicable)

**Headers:**
- scope="col" on column headers
- aria-sort="ascending" | "descending" | "none" (for sortable columns)

**Rows:**
- role="row"
- aria-selected="true" | "false" (for selectable rows)

**Cells:**
- role="cell"

**Interactive Elements:**
- ARIA labels on icon buttons
- ARIA expanded on dropdown menus
- ARIA live regions for dynamic content

### Keyboard Navigation

**Tab Order:**
1. Global search input
2. Column filter controls
3. Table headers (sortable)
4. Checkbox (select all)
5. Table rows (each row stop)
6. Row checkboxes
7. Action buttons/menus
8. Pagination controls

**Keyboard Shortcuts:**
- Tab: Navigate through interactive elements
- Shift+Tab: Navigate backward
- Enter/Space: Activate button, toggle checkbox, open menu
- Escape: Close dropdown, deselect (if applicable)
- Arrow keys: Navigate within dropdown menus

### Focus Management
- Visible focus indicators (ring-2 ring-ring)
- Logical tab order
- Focus trap in modals (e.g., delete confirmation)

### Screen Reader Support
- Announce sort changes: "Sorted by [column] [direction]"
- Announce filter changes: "Filtered by [filter], [N] results"
- Announce selection changes: "[N] rows selected"
- Announce page changes: "Page [N] of [total]"

### Touch Targets
- Minimum 44x44px for all interactive elements (buttons, checkboxes)
- 8px spacing between targets

### Color Contrast
- Text: 4.5:1 minimum
- UI components: 3:1 minimum
- Don't rely on color alone (use icons, text)

---

## 12. Performance Considerations

### Data Loading
- Pagination reduces initial load
- Consider virtual scrolling for 1000+ rows
- Background refetch with cached data

### Filtering/Sorting
- Debounce text input filters (300ms)
- Client-side for < 1000 rows
- Server-side for > 1000 rows

### Optimization
- Memoize column definitions
- Memoize filter/sort functions
- Lazy load action dropdown menus

---

## 13. Traceability

### Wireframe Mapping

| Wireframe Element | Wireframe ID | Table Column | Column ID |
|-------------------|--------------|--------------|-----------|
| [Element from WF] | WF-XXX | [Column name] | COL-001 |
| [Element from WF] | WF-XXX | [Column name] | COL-002 |
| [Element from WF] | WF-XXX | Actions | COL-ACTIONS |

### Acceptance Criteria Mapping

| AC ID | Acceptance Criteria | Table Feature | Status |
|-------|---------------------|---------------|--------|
| AC-001 | [AC description] | [Feature, e.g., "Display shipment list"] | ✅ Addressed |
| AC-002 | [AC description] | [Feature, e.g., "Sort by date"] | ✅ Addressed |
| AC-003 | [AC description] | [Feature, e.g., "Filter by status"] | ✅ Addressed |
| AC-004 | [AC description] | [Feature, e.g., "Delete action"] | ✅ Addressed |

### Coverage Checklist
- [ ] All wireframe elements mapped
- [ ] All acceptance criteria addressed
- [ ] All columns defined
- [ ] All interactions specified
- [ ] All states handled (loading, empty, error)

---

## 14. Implementation Notes

### Technical Considerations
- Use React Query for data fetching
- Tanstack Table v8+
- ShadCN Table components for UI
- Form library: react-hook-form (for filters)
- Date library: date-fns

### Dependencies
- @tanstack/react-table
- @tanstack/react-query (optional, for data fetching)
- date-fns (for date formatting)
- ShadCN UI components: Table, Button, Input, Select, Badge, DropdownMenu, Checkbox, Alert, Skeleton

### State Management
- Table state: Tanstack Table (built-in)
- Data fetching state: React Query
- Selection state: Tanstack Table (built-in)
- Filter state: Tanstack Table (built-in)

### API Integration
- Endpoint: [API endpoint]
- Query params: page, pageSize, sortBy, sortOrder, filters
- Response format: { data: [], total: number }

---

## 15. Related Documents

- **Wireframe:** [WF-XXX - Link to wireframe file]
- **User Story:** [ST-XXX - Link to USD or USL]
- **Acceptance Criteria:** [Link to USD file]
- **Component Specs:** [Links to related component specs]
- **Tanstack Table Reference:** [Link to tanstack-table-reference.md]
- **Design Rules:** [Links to relevant design-rules files]

---

## 16. Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | [Name] | Initial creation |
| 1.1 | [Date] | [Name] | [Description of changes] |

---

## Notes

[Any additional notes, open questions, or considerations]

---

**Status:** ☐ Draft ☐ In Review ☐ Approved ☐ Implemented

**Approved By:** [Name/Role]
**Approval Date:** [Date]
