# Stage 1: Wireframes - Rules

## Overview

Wireframes translate User Story Details (USD) acceptance criteria into visual layouts using **text descriptions + ASCII art**.

## Level of Detail

**Level 2: Layout Zones + UI Elements**

Show both:
- Layout zones (header, sidebar, main, footer)
- Individual UI elements (buttons, inputs, cards)

## Wireframe Components

### Required Sections

1. **Metadata**
   - Wireframe ID: `WF-XXX`
   - Screen Name
   - Related Story IDs: `ST-XXX`
   - Related AC IDs: `AC-XXX`

2. **Text Description**
   - Screen purpose
   - Layout structure
   - Key UI elements
   - User interactions

3. **ASCII Wireframe**
   - Visual representation
   - Layout zones clearly marked
   - UI elements indicated

4. **Component List**
   - ShadCN components needed
   - Custom components needed

5. **Responsive Behavior**
   - Mobile layout
   - Tablet layout
   - Desktop layout

6. **AC Mapping**
   - Which ACs this wireframe addresses

## ASCII Art Guidelines

### Symbols to Use

**Borders:**
- `+` for corners
- `-` for horizontal lines
- `|` for vertical lines

**Elements:**
- `[Button]` for buttons
- `<Input>` for input fields
- `(x)` for checkboxes
- `( )` for radio buttons
- `{Logo}` for logos/icons
- `...` for text content
- `^^^` for dropdown indicators

**Layout:**
- Use consistent width (60-80 characters)
- Align elements properly
- Show spacing with empty lines

### Example Structure

```
+----------------------------------------------------------+
| {Logo}  Navigation Links                    [User Menu]  |
+----------------------------------------------------------+
|                                                          |
|  +--------------------------------------------------+   |
|  | Section Title                        [Action Btn]|   |
|  +--------------------------------------------------+   |
|  |                                                  |   |
|  | Content area with description text...           |   |
|  |                                                  |   |
|  | <Input Field>                                    |   |
|  | [Primary Button] [Secondary Button]              |   |
|  |                                                  |   |
|  +--------------------------------------------------+   |
|                                                          |
+----------------------------------------------------------+
| Footer Links                          © 2025 Company     |
+----------------------------------------------------------+
```

## Text Description Format

```markdown
## Screen: [Screen Name]

**Wireframe ID:** WF-XXX
**Story:** ST-XXX - [Story Title]
**Addresses:** AC-XXX, AC-YYY, AC-ZZZ

### Purpose
[What this screen does and why it exists]

### Layout Structure

**Desktop (> 1024px):**
- Header: Fixed at top, contains logo, nav, user menu
- Main: Centered container (max-width 1280px)
- Sidebar: 320px wide, left-aligned (if applicable)
- Footer: Full-width, sticky or static

**Tablet (640px - 1024px):**
- [How layout changes for tablet]

**Mobile (< 640px):**
- [How layout changes for mobile]

### UI Elements

1. **Header**
   - Logo (left)
   - Navigation menu (center or right)
   - User profile menu (right)

2. **Main Content**
   - Title section
   - Content cards
   - Action buttons

3. **Footer**
   - Links
   - Copyright

### Interactions

1. [User clicks X] → [Y happens]
2. [User enters input] → [Validation occurs]
3. [User submits form] → [Navigates to Z]

### Components Required

- ShadCN Button (variant: default, size: default)
- ShadCN Input
- ShadCN Card
- Custom: NavigationHeader

### Acceptance Criteria Mapping

- **AC-XXX:** [Description] → Addressed by [element/section]
- **AC-YYY:** [Description] → Addressed by [element/section]
```

## Naming Conventions

**Wireframe IDs:**
- Format: `WF-XXX`
- Sequential per feature
- Examples: `WF-001`, `WF-002`

**Screen Names:**
- Format: Descriptive, PascalCase or Title Case
- Examples: `Login Screen`, `Dashboard`, `UserProfile`

**File Organization:**
- One `wireframes.md` file per feature
- All wireframes in single file
- Organized by user flow or story priority

## Traceability

### From USD to Wireframe

**Input:** Acceptance Criteria (AC-XXX) from USD files (`usd/*.md`)
**Output:** Wireframe (WF-XXX) showing how AC is addressed

**Mapping:**
```
AC-015: User can see login form
  → WF-001: Login Screen
    → Shows: Email input, password input, submit button

AC-016: Form validates input before submission
  → WF-001: Login Screen
    → Shows: Error message placement below inputs
```

### Cross-References

- Reference story IDs: `ST-XXX`
- Reference AC IDs: `AC-XXX`
- Forward reference to components: `COMP-XXX` (from Stage 2)

## Validation Rules

### Must Have

- [ ] Wireframe ID assigned (WF-XXX)
- [ ] Screen name provided
- [ ] Story ID(s) referenced
- [ ] AC ID(s) referenced
- [ ] Text description written
- [ ] ASCII wireframe drawn
- [ ] Component list provided
- [ ] Responsive behavior described
- [ ] AC mapping documented

### Should Have

- [ ] Multiple screen sizes shown (mobile, tablet, desktop)
- [ ] Interaction flows described
- [ ] Error states shown
- [ ] Loading states indicated

### Quality Checks

- [ ] ASCII art is readable and well-formatted
- [ ] Text description matches ASCII wireframe
- [ ] All UI elements from ACs are shown
- [ ] Layout is responsive-friendly
- [ ] Component references are accurate

## Common Wireframe Types

### Form Screen
- Input fields
- Labels
- Validation messages
- Submit/cancel buttons

### List/Table Screen
- Column headers
- Row data
- Pagination
- Filters/search

### Detail Screen
- Title/header
- Content sections
- Related information
- Action buttons

### Dashboard Screen
- Stat cards
- Charts/graphs
- Quick actions
- Recent activity

### Modal/Dialog
- Title
- Content area
- Primary/secondary actions
- Close button

## Tips for Good Wireframes

**Do:**
- Keep ASCII art simple and clear
- Focus on layout and structure
- Show element hierarchy
- Indicate spacing with blank lines
- Use consistent symbols

**Don't:**
- Include actual content (use placeholders)
- Try to make it pixel-perfect
- Worry about exact colors/fonts
- Include implementation details

## Example Reference

See [examples.md](examples.md) for complete wireframe examples.

---

**Next Stage:** [Stage 2: Component Specs](../stage2-component-specs/rules.md)
