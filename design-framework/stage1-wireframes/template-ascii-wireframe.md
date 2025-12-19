# ASCII Wireframe Template

## Wireframe: [Screen Name]

**ID:** WF-XXX | **Story:** ST-XXX | **Addresses:** AC-XXX, AC-YYY

---

## Desktop View (> 1024px)

```
+------------------------------------------------------------------+
| {Logo}  Nav Link 1  Nav Link 2  Nav Link 3      [User Menu ▼]   |
+------------------------------------------------------------------+
|                                                                  |
|  +----------------------------------------------------------+   |
|  | Page Title                                  [Action Btn]  |   |
|  +----------------------------------------------------------+   |
|  |                                                          |   |
|  |  Brief description or subtitle text...                  |   |
|  |                                                          |   |
|  |  +----------------------------------------------------+  |   |
|  |  | Section 1                                          |  |   |
|  |  |                                                    |  |   |
|  |  | Content area with text, images, or other          |  |   |
|  |  | elements...                                        |  |   |
|  |  |                                                    |  |   |
|  |  | <Input Field Label>                                |  |   |
|  |  | <Input Field________________________________>       |  |   |
|  |  |                                                    |  |   |
|  |  | [Primary Button]  [Secondary Button]               |  |   |
|  |  |                                                    |  |   |
|  |  +----------------------------------------------------+  |   |
|  |                                                          |   |
|  +----------------------------------------------------------+   |
|                                                                  |
+------------------------------------------------------------------+
| Footer Link 1  |  Footer Link 2  |  Footer Link 3  | © 2025      |
+------------------------------------------------------------------+
```

**Legend:**
- `+`, `-`, `|` = Borders and containers
- `{Logo}` = Logo/icon placeholder
- `[Button]` = Clickable button
- `<Input>` = Text input field
- `...` = Text content
- `▼` = Dropdown indicator

---

## Tablet View (640px - 1024px)

```
+------------------------------------------------+
| {Logo}  [Menu ☰]           [User Menu ▼]      |
+------------------------------------------------+
|                                                |
|  Page Title                      [Action Btn]  |
|  --------------------------------------------- |
|                                                |
|  Brief description text...                     |
|                                                |
|  +----------------------------------------+   |
|  | Section 1                              |   |
|  |                                        |   |
|  | Content area...                        |   |
|  |                                        |   |
|  | <Input Field>                          |   |
|  | <Input______________________>          |   |
|  |                                        |   |
|  | [Primary]  [Secondary]                 |   |
|  |                                        |   |
|  +----------------------------------------+   |
|                                                |
+------------------------------------------------+
| Footer Links             © 2025                |
+------------------------------------------------+
```

---

## Mobile View (< 640px)

```
+---------------------------+
| {Logo}  [☰]  [User ▼]    |
+---------------------------+
|                           |
| Page Title                |
|                           |
| Description text...       |
|                           |
| +----------------------+  |
| | Section 1            |  |
| |                      |  |
| | Content...           |  |
| |                      |  |
| | <Input>              |  |
| | <Input_________>     |  |
| |                      |  |
| | [Primary Button]     |  |
| | [Secondary Button]   |  |
| |                      |  |
| +----------------------+  |
|                           |
| [Action Btn]              |
|                           |
+---------------------------+
| Footer © 2025             |
+---------------------------+
```

---

## Common Element Patterns

### Buttons

```
[Primary Button]           Standard button
[Secondary Btn]            Secondary action
[× Close]                  Close button with icon
[⚙ Settings]              Button with icon
```

### Inputs

```
<Email Input>
<Email________________________________>

<Password Input>
<Password_____________________________>  [👁]

<Search>
[🔍] <Search_________________________>
```

### Checkboxes & Radio Buttons

```
(×) Remember me           Checked checkbox
( ) Remember me           Unchecked checkbox

(•) Option 1              Selected radio
( ) Option 2              Unselected radio
```

### Dropdowns

```
Select an option ▼
+------------------+
| Option 1         |
| Option 2      √  |  (selected)
| Option 3         |
+------------------+
```

### Cards

```
+------------------------+
| Card Title          [×]|
|------------------------|
| Card description or    |
| content goes here...   |
|                        |
| [Action] [Action]      |
+------------------------+
```

### Tables

```
+--------------------------------------------------+
| Column 1    | Column 2    | Column 3    | Actions |
|-------------|-------------|-------------|---------|
| Data 1      | Data 2      | Data 3      | [Edit]  |
| Data 1      | Data 2      | Data 3      | [Edit]  |
| Data 1      | Data 2      | Data 3      | [Edit]  |
+--------------------------------------------------+
| < Previous  |  Page 1 of 10  |  Next >           |
+--------------------------------------------------+
```

### Navigation

```
Horizontal Nav:
+----------------------------------------------------------+
| {Logo}  Home | About | Services | Contact   [Login]      |
+----------------------------------------------------------+

Sidebar Nav:
+----------------+
| {Logo}         |
|----------------|
| > Dashboard    |  (selected)
|   Users        |
|   Settings     |
|   Reports      |
|                |
| [Logout]       |
+----------------+
```

### Modals/Dialogs

```
Background (dimmed)
                +--------------------------------+
                | Modal Title              [× ]  |
                |--------------------------------|
                |                                |
                | Modal content goes here...     |
                |                                |
                | <Input Field>                  |
                | <Input_______________>         |
                |                                |
                |     [Cancel]  [Confirm]        |
                |                                |
                +--------------------------------+
```

### Tabs

```
+----------------------------------------------------------+
| [Tab 1] | Tab 2 | Tab 3 |                                 |
|----------------------------------------------------------|
|                                                          |
|  Content for Tab 1                                       |
|                                                          |
+----------------------------------------------------------+
```

### Breadcrumbs

```
Home > Products > Category > Item Name
```

### Alerts/Notifications

```
Success:
+--------------------------------------------------+
| ✓ Success! Your changes have been saved.    [×] |
+--------------------------------------------------+

Error:
+--------------------------------------------------+
| ✗ Error: Something went wrong. Please retry [×] |
+--------------------------------------------------+

Warning:
+--------------------------------------------------+
| ⚠ Warning: This action cannot be undone.    [×] |
+--------------------------------------------------+

Info:
+--------------------------------------------------+
| ℹ Info: New features are available.         [×] |
+--------------------------------------------------+
```

### Loading States

```
+------------------+
|                  |
|    ⟳ Loading...  |
|                  |
+------------------+
```

### Empty States

```
+---------------------------+
|                           |
|        📦                 |
|                           |
|   No items found          |
|                           |
|   Get started by adding   |
|   your first item.        |
|                           |
|   [Add Item]              |
|                           |
+---------------------------+
```

---

## Tips for Creating ASCII Wireframes

### Structure
- Start with outer border
- Define major zones first
- Add nested elements
- Keep alignment consistent

### Spacing
- Use blank lines to show spacing
- Consistent indentation
- Align related elements

### Symbols
- Keep symbols simple and recognizable
- Document custom symbols in legend
- Be consistent throughout all wireframes

### Width
- Aim for 60-80 characters width
- Adjust for readability
- Consider terminal/editor width

---

## Validation Checklist

Before finalizing ASCII wireframe:

- [ ] All major zones shown (header, main, footer)
- [ ] UI elements clearly indicated
- [ ] Borders aligned properly
- [ ] Legend provided for custom symbols
- [ ] Responsive views shown (mobile, tablet, desktop)
- [ ] Readable in monospace font
- [ ] Matches text description

---

**Related:**
- [Text Wireframe Template](template-text-wireframe.md)
- [Wireframe Examples](examples.md)
- [Wireframe Rules](rules.md)
