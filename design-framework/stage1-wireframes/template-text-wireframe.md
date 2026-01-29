# Wireframe: [Screen Name]

**Wireframe ID:** WF-XXX
**Feature:** [Feature Name] (PRD-XXX)
**Story:** ST-XXX - [Story Title]
**Addresses:** AC-XXX, AC-YYY, AC-ZZZ
**Screen Type:** [Form | List | Detail | Dashboard | Modal]

---

## Purpose

[Brief description of what this screen does and why it exists. 1-2 sentences.]

---

## Layout Structure

### Desktop (> 1024px)

**Page Structure:**
- Header: [Description - e.g., "Fixed at top, full-width"]
- Main Content: [Description - e.g., "Centered container, max-width 1280px"]
- Sidebar: [Description - if applicable]
- Footer: [Description]

**Content Zones:**

1. **Zone A (Header):**
   - Elements: [List of UI elements]
   - Purpose: [Why this zone exists]
   - Height: [Approximate height or auto]

2. **Zone B (Main Content):**
   - Elements: [List of UI elements]
   - Purpose: [Why this zone exists]
   - Layout: [Grid, flex, stack, etc.]

3. **Zone C (Sidebar):** *(if applicable)*
   - Elements: [List of UI elements]
   - Purpose: [Why this zone exists]
   - Width: [320px, 25%, etc.]

4. **Zone D (Footer):**
   - Elements: [List of UI elements]
   - Purpose: [Why this zone exists]

### Tablet (640px - 1024px)

**Layout Changes:**
- [Describe how layout adapts for tablet]
- [E.g., "Sidebar moves below main content"]
- [E.g., "Navigation collapses to hamburger menu"]

### Mobile (< 640px)

**Layout Changes:**
- [Describe how layout adapts for mobile]
- [E.g., "Single column layout"]
- [E.g., "Cards stack vertically"]

---

## UI Elements Detail

### Header

**Elements:**
- Logo: [Position, size]
- Navigation Menu: [Links, behavior]
- User Profile Menu: [Options, dropdown]
- [Other elements]

**Behavior:**
- Sticky/Fixed: [Yes/No]
- Mobile: [Describe mobile header behavior]

### Main Content

**Section 1: [Section Name]**
- Title: [Text style - e.g., "h1, text-4xl, font-bold"]
- Description: [Text style]
- Action Buttons: [List buttons with variants]

**Section 2: [Section Name]**
- Cards/List: [Layout, number of columns]
- Content: [What each card/item shows]
- Interactions: [Hover states, click actions]

**Section 3: [Forms/Inputs]** *(if applicable)*
- Fields: [List all input fields]
- Validation: [Where errors appear]
- Actions: [Submit, cancel, etc.]

### Sidebar *(if applicable)*

**Elements:**
- [List sidebar contents]
- [Navigation, filters, related info, etc.]

### Footer

**Elements:**
- Links: [List footer links]
- Copyright: [Copyright text]
- Social Icons: [If applicable]

---

## Interactions

### Primary Interactions

1. **[User Action 1]**
   - Trigger: [What user does - e.g., "User clicks Submit button"]
   - Response: [What happens - e.g., "Form validates, then submits"]
   - Feedback: [Visual feedback - e.g., "Button shows loading spinner"]

2. **[User Action 2]**
   - Trigger: [What user does]
   - Response: [What happens]
   - Feedback: [Visual feedback]

3. **[User Action 3]**
   - Trigger: [What user does]
   - Response: [What happens]
   - Feedback: [Visual feedback]

### States

**Loading State:**
- [What user sees while data loads]
- [Skeleton screens, spinners, etc.]

**Error State:**
- [What user sees when errors occur]
- [Error message placement and styling]

**Empty State:**
- [What user sees when no data available]
- [Illustration, message, call-to-action]

**Success State:**
- [What user sees after successful action]
- [Success message, redirect, etc.]

---

## Components Required

### ShadCN Components

- [ ] Button (variant: [default|secondary|outline|ghost], size: [sm|default|lg])
- [ ] Input (type: [text|email|password|number])
- [ ] Card (with CardHeader, CardContent, CardFooter)
- [ ] [Other ShadCN components needed]

### Tanstack Table *(if applicable)*

- [ ] Data Table with columns: [List columns]
- [ ] Features: [Sorting, filtering, pagination, selection]

### Custom Components

- [ ] [CustomComponent1]: [Purpose]
- [ ] [CustomComponent2]: [Purpose]

---

## Responsive Behavior Summary

| Breakpoint | Layout | Navigation | Sidebar | Content |
|------------|--------|------------|---------|---------|
| Mobile (< 640px) | Single column | Hamburger menu | Hidden/Bottom | Stacked |
| Tablet (640-1024px) | 2 columns | Partial visible | Below main | Grid 2-col |
| Desktop (> 1024px) | Full layout | Full visible | Left/Right | Grid 3-col |

---

## Acceptance Criteria Mapping

Map each AC to specific UI elements in this wireframe:

- **AC-XXX:** [AC Description]
  - **Addressed by:** [Specific element/section - e.g., "Login form in main content zone"]
  - **How:** [Brief explanation]

- **AC-YYY:** [AC Description]
  - **Addressed by:** [Specific element/section]
  - **How:** [Brief explanation]

- **AC-ZZZ:** [AC Description]
  - **Addressed by:** [Specific element/section]
  - **How:** [Brief explanation]

---

## Notes / Open Questions

- [Any design decisions that need clarification]
- [Technical constraints or considerations]
- [Follow-up items for component specs]
- [Accessibility considerations]

---

## ASCII Wireframe Reference

See [template-ascii-wireframe.md](template-ascii-wireframe.md) for ASCII art version of this wireframe.

---

**Created:** [Date]
**Last Updated:** [Date]
**Designer:** [Name/AI]
**Status:** [Draft | Review | Approved]
