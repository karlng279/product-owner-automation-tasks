# Wireframe Examples

## Example 1: Login Form

**WF-001** | **Story:** ST-001 - User Login | **Addresses:** AC-001, AC-002, AC-003

### Text Description

Simple login form with email and password fields, remember me checkbox, and forgot password link.

### ASCII Wireframe

```
+------------------------------------------+
|                                          |
|            {Company Logo}                |
|                                          |
|        Sign in to your account           |
|                                          |
|  Email Address                           |
|  <email_________________>                |
|                                          |
|  Password                                |
|  <password______________>  [👁]          |
|                                          |
|  (×) Remember me    Forgot password?     |
|                                          |
|        [Sign In]                         |
|                                          |
|  Don't have an account? [Sign up]        |
|                                          |
+------------------------------------------+
```

### Components Required
- ShadCN Input (email, password)
- ShadCN Button (primary)
- ShadCN Checkbox
- Custom: Logo component

### AC Mapping
- AC-001: Email input visible → Email field shown
- AC-002: Password input visible → Password field with visibility toggle
- AC-003: Remember me option → Checkbox provided

---

## Example 2: Dashboard

**WF-002** | **Story:** ST-005 - View Dashboard | **Addresses:** AC-015, AC-016, AC-017

### ASCII Wireframe

```
+---------------------------------------------------------------------+
| {Logo}  Dashboard  Reports  Settings             [User Menu ▼]     |
+---------------------------------------------------------------------+
|                                                                     |
|  Welcome back, John!                                    [+ New]     |
|  ------------------------------------------------------------------ |
|                                                                     |
|  +---------------+  +---------------+  +---------------+            |
|  | Total Users   |  | Active Now    |  | Revenue       |            |
|  |               |  |               |  |               |            |
|  |   1,234       |  |     89        |  |  $12,345      |            |
|  |   ↑ 12%       |  |   ↑ 5%        |  |  ↑ 8%         |            |
|  +---------------+  +---------------+  +---------------+            |
|                                                                     |
|  Recent Activity                                      [View All]    |
|  ------------------------------------------------------------------ |
|                                                                     |
|  +---------------------------------------------------------------+  |
|  | User      | Action          | Time       | Status  | [...]   |  |
|  |-----------|-----------------|------------|---------|---------|  |
|  | Jane Doe  | Created account | 2 min ago  | ✓       | [View]  |  |
|  | John Smith| Updated profile | 5 min ago  | ✓       | [View]  |  |
|  | Alice Wu  | Made purchase   | 10 min ago | ✓       | [View]  |  |
|  +---------------------------------------------------------------+  |
|                                                                     |
+---------------------------------------------------------------------+
```

### Components Required
- ShadCN Card (stat cards)
- Tanstack Table (activity table)
- ShadCN Button (New, View All, View)

---

## Example 3: Data Table (Shipment List)

**WF-003** | **Story:** ST-010 - View Shipments | **Addresses:** AC-025, AC-026, AC-027, AC-028

### ASCII Wireframe

```
+------------------------------------------------------------------------+
| Shipments                                                    [+ New]   |
|------------------------------------------------------------------------|
|                                                                        |
|  [🔍] <Search shipments____________>  [Filter ▼]  [Export ▼]          |
|                                                                        |
|  +------------------------------------------------------------------+  |
|  | (☐) | ID ↕ | Status ↕ | Origin ↕ | Dest ↕ | Date ↕ | Actions  |  |
|  |-----|------|----------|----------|--------|--------|------------|  |
|  | (☐) | SH-1 | In Trans | SFO      | NYC    | Jan 15 | [View]...|  |
|  | (☐) | SH-2 | Delivered| LAX      | CHI    | Jan 14 | [View]...|  |
|  | (☐) | SH-3 | Pending  | SEA      | BOS    | Jan 16 | [View]...|  |
|  | (☐) | SH-4 | In Trans | PDX      | MIA    | Jan 15 | [View]...|  |
|  | (☐) | SH-5 | Delivered| DEN      | ATL    | Jan 13 | [View]...|  |
|  +------------------------------------------------------------------+  |
|                                                                        |
|  Showing 1-5 of 127    [10 ▼] per page    [< Prev] [1] 2 3 [Next >]   |
|                                                                        |
+------------------------------------------------------------------------+
```

### Components Required
- Tanstack Table with:
  - Column sorting
  - Row selection (checkboxes)
  - Pagination
  - Filters
- ShadCN Input (search)
- ShadCN Button (New, Filter, Export, View)
- ShadCN Select (items per page)

### AC Mapping
- AC-025: Table visible with shipments → Table shown with data rows
- AC-026: Sortable columns → ↕ indicators on headers
- AC-027: Search functionality → Search input provided
- AC-028: Pagination → Page controls at bottom

---

## Example 4: Form (Create Shipment)

**WF-004** | **Story:** ST-012 - Create Shipment | **Addresses:** AC-030, AC-031, AC-032

### ASCII Wireframe

```
+---------------------------------------------------+
| Create New Shipment                         [×]   |
|---------------------------------------------------|
|                                                   |
|  Basic Information                                |
|  ----------------------------------------------- |
|                                                   |
|  Shipment ID                                      |
|  <auto-generated (read-only)>                     |
|                                                   |
|  Customer *                                       |
|  <Select customer________________> ▼              |
|                                                   |
|  Origin *                        Destination *    |
|  <Select origin_____> ▼          <Select dest> ▼  |
|                                                   |
|  Shipping Details                                 |
|  ----------------------------------------------- |
|                                                   |
|  Weight (kg) *          Dimensions (cm)           |
|  <weight_>              L: <_> W: <_> H: <_>      |
|                                                   |
|  Service Type *                                   |
|  ( ) Standard  (•) Express  ( ) Overnight         |
|                                                   |
|  Special Instructions                             |
|  <instructions_____________________________>      |
|  <______________________________________>          |
|                                                   |
|  * Required fields                                |
|                                                   |
|            [Cancel]  [Save Draft]  [Create]       |
|                                                   |
+---------------------------------------------------+
```

### Components Required
- ShadCN Input (text, number)
- ShadCN Select (dropdowns)
- ShadCN RadioGroup (service type)
- ShadCN Textarea (instructions)
- ShadCN Button (Cancel, Save Draft, Create)
- ShadCN Dialog (modal container)

### AC Mapping
- AC-030: All required fields marked → * indicators shown
- AC-031: Dropdowns for origin/destination → Select components
- AC-032: Service type selection → Radio buttons

---

## Example 5: Modal/Dialog

**WF-005** | **Story:** ST-015 - Confirm Delete | **Addresses:** AC-040

### ASCII Wireframe

```
Background (dimmed overlay)

        +-----------------------------------+
        | Confirm Delete              [×]   |
        |-----------------------------------|
        |                                   |
        |  ⚠️  Are you sure?                 |
        |                                   |
        |  This will permanently delete     |
        |  shipment SH-12345. This action   |
        |  cannot be undone.                |
        |                                   |
        |  Type DELETE to confirm:          |
        |  <type here____________>          |
        |                                   |
        |        [Cancel]  [Delete]         |
        |                                   |
        +-----------------------------------+
```

### Components Required
- ShadCN Dialog (modal)
- ShadCN Input (confirmation text)
- ShadCN Button (Cancel - outline, Delete - destructive)

---

## Example 6: Empty State

**WF-006** | **Story:** ST-018 - Empty State | **Addresses:** AC-045

### ASCII Wireframe

```
+------------------------------------------+
|                                          |
|               📦                         |
|                                          |
|         No shipments yet                 |
|                                          |
|    Create your first shipment to         |
|    start tracking deliveries.            |
|                                          |
|        [Create Shipment]                 |
|                                          |
+------------------------------------------+
```

### Components Required
- ShadCN Button (primary)
- Custom: EmptyState component

---

## Common Patterns Summary

**Form Pattern:** Labels, inputs, validation messages, action buttons
**List Pattern:** Search, filters, table, pagination
**Detail Pattern:** Title, sections, related data, actions
**Modal Pattern:** Title, content, confirm/cancel buttons
**Empty Pattern:** Icon, message, call-to-action

---

**Related:**
- [Wireframe Rules](rules.md)
- [Text Template](template-text-wireframe.md)
- [ASCII Template](template-ascii-wireframe.md)
