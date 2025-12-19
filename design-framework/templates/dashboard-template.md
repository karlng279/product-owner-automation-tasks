# Dashboard Template

## Overview

Standard template for dashboard screens with stats, charts, and quick actions.

---

## Template

```
**Wireframe ID:** WF-XXX
**Screen Name:** [Screen Name]
**Story ID:** ST-XXX
**Acceptance Criteria:** AC-XXX, AC-XXX
**Screen Type:** Dashboard

---

## Purpose
[What metrics and information this dashboard displays]

## Desktop Layout (1024px+)

+------------------------------------------------------------------+
| {Logo} Navigation Links...                        [User Menu ▼] |
+------------------------------------------------------------------+
|                                                                  |
|  Dashboard Title (H1)                    Last updated: 2min ago  |
|                                                                  |
|  +---------------+  +---------------+  +---------------+  +------+ |
|  | Stat Card 1   |  | Stat Card 2   |  | Stat Card 3   |  | Stat | |
|  | Total Items   |  | Active        |  | Pending       |  | Card | |
|  | 1,234         |  | 856           |  | 378           |  | 4    | |
|  | +12% ↑        |  | +5% ↑         |  | -3% ↓         |  | N/A  | |
|  +---------------+  +---------------+  +---------------+  +------+ |
|                                                                  |
|  +---------------------------------------+ +------------------+  |
|  | Chart/Graph Area                      | | Quick Actions    |  |
|  | Title (H2)                            | +------------------+  |
|  |                                       | | [+ Create Item]  |  |
|  |   ^                                   | | [Upload File]    |  |
|  |   |  /\      /\                       | | [Generate Report]|  |
|  |   | /  \    /  \    /\                | +------------------+  |
|  |   |/    \  /    \  /  \               | | Recent Activity  |  |
|  |   +---------------------→             | +------------------+  |
|  |   Mon Tue Wed Thu Fri                 | | • Item updated   |  |
|  |                                       | | • New item added |  |
|  | [Filter by: Last 7 days ▼]           | | • Status changed |  |
|  +---------------------------------------+ | [View All >]     |  |
|                                            +------------------+  |
|  +-----------------------------------------------------------+   |
|  | Recent Items / Table                                      |   |
|  +-----------------------------------------------------------+   |
|  | Name         | Status    | Date       | Actions           |   |
|  +-----------------------------------------------------------+   |
|  | Item 1       | [Active]  | Jan 15     | [View] [Edit]     |   |
|  | Item 2       | [Pending] | Jan 14     | [View] [Edit]     |   |
|  | Item 3       | [Active]  | Jan 13     | [View] [Edit]     |   |
|  +-----------------------------------------------------------+   |
|  [View All Items →]                                              |
|                                                                  |
+------------------------------------------------------------------+
| Footer                                                           |
+------------------------------------------------------------------+

## Tablet Layout (640px - 1024px)

+-------------------------------+
| {Logo} Nav Links   [User ▼]   |
+-------------------------------+
|                               |
| Dashboard Title (H1)          |
|                               |
| +--------------+  +----------+ |
| | Stat Card 1  |  | Stat 2   | |
| | 1,234 +12% ↑ |  | 856 +5%  | |
| +--------------+  +----------+ |
|                               |
| +--------------+  +----------+ |
| | Stat Card 3  |  | Stat 4   | |
| | 378 -3% ↓    |  | N/A      | |
| +--------------+  +----------+ |
|                               |
| +---------------------------+ |
| | Chart Area                | |
| |  /\    /\                 | |
| | /  \  /  \   /\           | |
| +---------------------------+ |
|                               |
| Quick Actions                 |
| [+ Create Item____________]   |
| [Upload File______________]   |
|                               |
| Recent Items                  |
| • Item 1      [View] [Edit]   |
| • Item 2      [View] [Edit]   |
| [View All →]                  |
|                               |
+-------------------------------+

## Mobile Layout (< 640px)

+------------------------------+
| ☰  {Logo}      [User Icon]   |
+------------------------------+
|                              |
| Dashboard (H1)               |
|                              |
| +-------------------------+  |
| | Total Items             |  |
| | 1,234      +12% ↑       |  |
| +-------------------------+  |
|                              |
| +-------------------------+  |
| | Active                  |  |
| | 856        +5% ↑        |  |
| +-------------------------+  |
|                              |
| +-------------------------+  |
| | Pending                 |  |
| | 378        -3% ↓        |  |
| +-------------------------+  |
|                              |
| Quick Actions                |
| [+ Create Item___________]   |
| [Upload File_____________]   |
|                              |
| Chart (Tap to expand)        |
| [Mini chart preview]         |
|                              |
| Recent Activity              |
| • Item updated               |
| • New item added             |
| [View All →]                 |
|                              |
+------------------------------+

## Components Required
- Card (stat cards, chart containers, sections)
- Typography (H1, H2, numbers, labels)
- Badge (status)
- Button (quick actions)
- Chart component (third-party: Chart.js, Recharts)
- Table (recent items)
- List (recent activity)
- Select (filter dropdown)

## Interactions
1. Stat cards: Clickable to drill down to detail view
2. Chart: Hover for data points, filter by date range
3. Quick actions: Click to navigate or trigger action
4. Recent items: Click to view detail
5. View All links: Navigate to full list views

## Chart Types
- Line chart: Trends over time
- Bar chart: Comparisons
- Pie/Donut chart: Proportions
- Area chart: Volume over time

## States
- Loading: Skeleton cards and chart placeholders
- Loaded: Display all data
- Empty: "No data available" message
- Error: Error alert with Retry button

## Responsive Behavior
- Desktop: 4-column stat cards, chart + sidebar layout
- Tablet: 2-column stat cards, chart full width
- Mobile: Single column, stack everything

## Accessibility
- Stat cards: Semantic markup for numbers and trends
- Charts: Data table alternative or aria-label
- Quick actions: Clear button labels
- Tab order: Stats → Chart → Quick Actions → Recent Items
```

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Layout System](../design-rules/layout-system.md)
- [Data Display Patterns](../patterns/data-display-patterns.md)
