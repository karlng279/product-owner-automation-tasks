# Navigation Patterns

## Overview

Common navigation patterns using ShadCN UI components.

---

## Top Navigation Bar

**Use when:** Main site navigation, always visible

**Components:** NavigationMenu

**Desktop:**
```
+------------------------------------------------------------------+
| {Logo}  Nav Link 1  Nav Link 2  Nav Link 3       [User Menu ▼]  |
+------------------------------------------------------------------+
```

**Mobile:**
```
+------------------------------+
| ☰  {Logo}      [User Icon]   |
+------------------------------+
```

**Responsive:**
- Desktop: Horizontal links
- Mobile: Hamburger menu → Sheet (slide-in drawer)

**Accessibility:**
- role="navigation"
- Keyboard: Tab through links, Enter to activate
- Current page: aria-current="page"

---

## Sidebar Navigation

**Use when:** Dashboard, admin panels, complex applications

**Components:** Sheet (mobile), div with nav (desktop)

**Desktop:**
```
+------------+--------------------+
| {Logo}     |                    |
| Dashboard  |  Main Content      |
| Shipments  |                    |
| Reports    |                    |
| Settings   |                    |
|            |                    |
+------------+--------------------+
```

**Mobile:** Slide-in drawer (Sheet) triggered by hamburger

**States:**
- Active link: bg-accent text-accent-foreground
- Hover: bg-accent/50
- Collapsed (optional): Icons only, expand on hover

**Accessibility:**
- Keyboard navigable
- Focus visible
- Screen reader: Navigation landmark

---

## Breadcrumbs

**Use when:** Deep page hierarchies, help users understand location

```
Home > Section > Subsection > Current Page
```

**Components:** Custom breadcrumb component

**Interactions:**
- Click any segment to navigate up hierarchy
- Last segment (current page): Not a link, different style

**Accessibility:**
- role="navigation" aria-label="Breadcrumb"
- Current page: aria-current="page"

---

## Tabs

**Use when:** Multiple views of same content, settings panels

**Components:** Tabs (ShadCN)

```
+------------------------------------------+
| [Tab 1 (active)] [Tab 2] [Tab 3]        |
+------------------------------------------+
| Tab 1 Content                            |
|                                          |
+------------------------------------------+
```

**States:**
- Active: Underline or background highlight
- Hover: Subtle background change
- Focus: Focus ring

**Accessibility:**
- role="tablist", role="tab", role="tabpanel"
- Arrow keys to navigate tabs
- Selected: aria-selected="true"

---

## Pagination

**Use when:** Large lists, table data

**Components:** Custom pagination component with Button

**Pattern:**
```
Showing 1-10 of 234
[<< First] [< Previous] [1] [2] [3] ... [24] [Next >] [Last >>]
Rows per page: [10 ▼]
```

**States:**
- Current page: Highlighted, not clickable
- Disabled: First/Previous on page 1, Next/Last on last page

**Accessibility:**
- role="navigation" aria-label="Pagination"
- Buttons: aria-label with page number

---

## Dropdown Menu (Actions)

**Use when:** Row actions, more options

**Components:** DropdownMenu

```
[⋮]  →  +----------+
         | View     |
         | Edit     |
         | -------- |
         | Delete   |
         +----------+
```

**States:**
- Closed: Icon button
- Open: Menu overlay
- Focus: Ring on trigger, menu items navigable

**Accessibility:**
- Trigger: aria-label="Actions"
- Keyboard: Arrow keys, Enter to select, Escape to close

---

## Mobile Navigation (Sheet)

**Use when:** Mobile responsive nav

**Components:** Sheet

```
[☰] Click → +-----------------+
             |  {Logo}         |
             |  Dashboard      |
             |  Shipments      |
             |  Reports        |
             |  Settings       |
             |                 |
             |  [User Menu]    |
             +-----------------+
```

**Behaviors:**
- Swipe from left to open (optional)
- Click overlay to close
- Escape to close

**Accessibility:**
- Focus trap when open
- Focus returns to hamburger on close

---

## Back Button

**Use when:** Detail views, nested flows

```
[← Back to List]
```

**Component:** Button (variant: ghost or link)

**Behavior:** Navigate to previous page or parent list

**Accessibility:** Clear label, keyboard accessible

---

## Related
- [Component Standards](../design-rules/component-standards.md)
- [Responsive Design](../design-rules/responsive-design.md)
