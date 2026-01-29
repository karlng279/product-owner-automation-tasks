# Data Display Patterns

## Overview

Patterns for displaying data: cards, lists, tables, and stat displays.

---

## Card Patterns

### Basic Card

```
+----------------------------------+
| Card Title                       |
| Card description or subtitle    |
|----------------------------------|
| Main content goes here           |
|                                  |
|----------------------------------|
| [Action 1]          [Action 2]   |
+----------------------------------+
```

**Components:** Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter

---

### Stat Card

```
+------------------+
| Total Items      |
| 1,234            |
| +12% ↑ vs last   |
+------------------+
```

**Use when:** Dashboard metrics

**Layout:**
- Title (small text)
- Number (large, bold)
- Trend (optional: percentage, arrow)

---

### Feature Card

```
+----------------------------------+
| {Icon}                           |
| Feature Title                    |
| Short description of the         |
| feature and its benefits         |
| [Learn More →]                   |
+----------------------------------+
```

**Use when:** Feature comparison, product pages

---

### Image Card

```
+----------------------------------+
| [Image__________________]        |
| Title                            |
| Description text                 |
| [View Details]                   |
+----------------------------------+
```

**Use when:** Product listings, galleries

---

## List Patterns

### Simple List

```
• Item 1
• Item 2
• Item 3
```

**Components:** ul, li

**Variants:**
- Bulleted (•)
- Numbered (1. 2. 3.)
- Unstyled

---

### Interactive List

```
+----------------------------------+
| Item 1 Title                [>]  |
| Subtitle or description          |
+----------------------------------+
| Item 2 Title                [>]  |
| Subtitle or description          |
+----------------------------------+
```

**Use when:** Settings, menu items, selectable options

**Hover:** bg-accent
**Active:** bg-accent text-accent-foreground

---

### List with Actions

```
+----------------------------------+
| Item 1                     [⋮]   |
+----------------------------------+
| Item 2                     [⋮]   |
+----------------------------------+
```

**Actions:** DropdownMenu (View, Edit, Delete)

---

### Avatar List

```
+----------------------------------+
| [Avatar] John Doe                |
| john@example.com            [>]  |
+----------------------------------+
| [Avatar] Jane Smith              |
| jane@example.com            [>]  |
+----------------------------------+
```

**Use when:** User lists, contact lists

**Components:** Avatar, AvatarImage, AvatarFallback

---

## Table Patterns

### Basic Data Table

```
+----------------------------------------------------------------+
| Name         | Email             | Status    | Actions         |
+----------------------------------------------------------------+
| John Doe     | john@example.com  | [Active]  | [View] [Edit]   |
| Jane Smith   | jane@example.com  | [Pending] | [View] [Edit]   |
+----------------------------------------------------------------+
```

**Components:** Table (ShadCN) + Tanstack Table

**Features:**
- Sortable columns (click header)
- Hover row highlighting
- Actions column

---

### Table with Selection

```
+----------------------------------------------------------------+
| [×] | Name      | Email             | Status    | Actions      |
+----------------------------------------------------------------+
| [ ] | John      | john@example.com  | [Active]  | [⋮]          |
| [×] | Jane      | jane@example.com  | [Pending] | [⋮]          |
+----------------------------------------------------------------+
```

**Use when:** Bulk actions needed

**Pattern:**
- Select All checkbox in header
- Individual checkboxes per row
- Bulk action bar appears when rows selected

---

### Responsive Table (Mobile Cards)

**Desktop:** Standard table
**Mobile:** Card-based layout

```
Mobile:
+----------------------------------+
| John Doe                    [⋮]  |
| Email: john@example.com          |
| Status: [Active]                 |
+----------------------------------+
| Jane Smith                  [⋮]  |
| Email: jane@example.com          |
| Status: [Pending]                |
+----------------------------------+
```

---

## Description List (Key-Value Pairs)

```
Field Label:  Field Value
Field Label:  Field Value
Field Label:  Longer field value that
              may wrap to multiple lines
```

**Use when:** Detail views, profile information

**Layout:**
- Desktop: Two columns (label left, value right)
- Mobile: Stack vertically

---

## Timeline

```
○ Today
|
● Event 1 - 2 hours ago
| Details about event 1
|
● Event 2 - 5 hours ago
| Details about event 2
|
● Event 3 - Yesterday
| Details about event 3
```

**Use when:** Activity feeds, history

**Components:** Custom timeline component

**Elements:**
- Vertical line
- Circle indicators
- Timestamps
- Event descriptions

---

## Accordion

```
[v] Section 1 (Expanded)
    Content for section 1

[>] Section 2 (Collapsed)

[>] Section 3 (Collapsed)
```

**Components:** Accordion (ShadCN)

**Use when:** FAQs, collapsible sections

**Behavior:**
- Click to expand/collapse
- Single or multiple sections open

---

## Tabs

```
[Tab 1 (active)] [Tab 2] [Tab 3]
─────────────────
Tab 1 Content
```

**Components:** Tabs (ShadCN)

**Use when:** Multiple views of same data

---

## Grid Display

```
+------+  +------+  +------+  +------+
| Item |  | Item |  | Item |  | Item |
| 1    |  | 2    |  | 3    |  | 4    |
+------+  +------+  +------+  +------+
```

**Use when:** Image galleries, product grids

**Responsive:**
- Desktop: 4 columns
- Tablet: 2-3 columns
- Mobile: 1-2 columns

---

## Stat Dashboard

```
+----------+  +----------+  +----------+  +----------+
| Metric 1 |  | Metric 2 |  | Metric 3 |  | Metric 4 |
| 1,234    |  | 567      |  | 890      |  | 123      |
| +12% ↑   |  | +5% ↑    |  | -3% ↓    |  | +8% ↑    |
+----------+  +----------+  +----------+  +----------+
```

**Use when:** Dashboard overview

**Layout:** Grid of stat cards

---

## Progress Indicators

### Linear Progress

```
Task 1 [████████████░░░░░░░░] 60%
Task 2 [██████████████████░░] 90%
Task 3 [████░░░░░░░░░░░░░░░░] 20%
```

**Components:** Progress (ShadCN)

---

### Circular Progress (Donut Chart)

```
    ●●●●●
  ●●    ●●
 ●●  75%  ●●
  ●●    ●●
    ●●●●●
```

**Use when:** Single metric, percentage complete

---

## Badge Group

```
[Tag 1] [Tag 2] [Tag 3] [Tag 4]
```

**Use when:** Categories, tags, filters

**Components:** Badge (ShadCN)

**Variants:** Removable (X button) or static

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Responsive Design](../design-rules/responsive-design.md)
- [List View Template](../templates/list-view-template.md)
- [Dashboard Template](../templates/dashboard-template.md)
