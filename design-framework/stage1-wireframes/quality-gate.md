# Stage 1: Wireframes - Quality Gate

## Overview

Wireframes must pass these validation checks before moving to Stage 2 (Component Specs).

---

## Required Elements

### Metadata
- [ ] Wireframe ID assigned (WF-XXX)
- [ ] Screen name provided
- [ ] Story ID(s) referenced (ST-XXX)
- [ ] Acceptance Criteria IDs listed (AC-XXX)
- [ ] Screen type specified (Form, List, Detail, Dashboard, Modal)

### Text Description
- [ ] Purpose statement written
- [ ] Layout structure described for desktop
- [ ] Layout structure described for tablet
- [ ] Layout structure described for mobile
- [ ] UI elements detailed
- [ ] Interactions documented
- [ ] Component list provided

### ASCII Wireframe
- [ ] Desktop view created
- [ ] Mobile view created (or noted as same)
- [ ] Tablet view created (or noted as same)
- [ ] ASCII art is readable
- [ ] Borders aligned properly
- [ ] Elements clearly labeled
- [ ] Legend provided (if using custom symbols)

### Traceability
- [ ] All ACs from USD are addressed
- [ ] AC mapping table completed
- [ ] Each UI element maps to at least one AC
- [ ] No orphaned UI elements (not mapped to ACs)

---

## Design Rules Compliance

### Color System
- [ ] Color references use design system names (e.g., [Primary], [Muted])
- [ ] No hardcoded colors mentioned
- [ ] Semantic colors used appropriately

### Spacing System
- [ ] Spacing follows 4px scale
- [ ] Spacing notation used (e.g., [space-4], [space-6])
- [ ] Consistent spacing between similar elements

### Typography
- [ ] Text sizes specified using design system (e.g., text-base, text-xl)
- [ ] Heading hierarchy logical (H1 → H2 → H3)
- [ ] Font weights specified

### Layout System
- [ ] Container usage specified
- [ ] Grid/Flexbox layout defined
- [ ] Responsive breakpoints addressed

### Component Standards
- [ ] ShadCN components referenced correctly
- [ ] Component variants specified (e.g., Button variant: default)
- [ ] Custom components clearly identified

### Accessibility
- [ ] Focus order logical
- [ ] Interactive elements clearly identified
- [ ] Error message placement shown
- [ ] ARIA needs documented (if applicable)
- [ ] Touch target sizes considered (minimum 44x44px)

### Responsive Design
- [ ] Mobile-first approach followed
- [ ] Breakpoint-specific changes documented
- [ ] Layout adapts appropriately for each screen size
- [ ] Navigation behavior specified for mobile

---

## Content Quality

### Completeness
- [ ] All screens in user flow covered
- [ ] All states shown (default, loading, error, empty, success)
- [ ] Navigation between screens documented
- [ ] Form validation states shown

### Clarity
- [ ] ASCII art is easy to understand
- [ ] Text description matches ASCII wireframe
- [ ] No ambiguous or vague descriptions
- [ ] Technical terms explained

### Consistency
- [ ] Similar elements use same representation
- [ ] Naming conventions followed
- [ ] Symbol usage consistent across all wireframes
- [ ] Spacing notation consistent

---

## Technical Validation

### ASCII Art Quality
- [ ] Width: 60-80 characters (readable)
- [ ] Borders aligned using `+`, `-`, `|`
- [ ] Elements indicated with brackets `[Button]`, angles `<Input>`
- [ ] No broken or misaligned borders
- [ ] Renders correctly in monospace font

### File Format
- [ ] Markdown format (.md)
- [ ] Proper heading hierarchy
- [ ] Code blocks used for ASCII art
- [ ] Links to related files working

---

## Validation Checklist by Screen Type

### Form Screens
- [ ] All input fields shown
- [ ] Labels positioned correctly
- [ ] Required field indicators (*)
- [ ] Error message placement defined
- [ ] Submit/cancel buttons shown
- [ ] Field validation rules noted

### List/Table Screens
- [ ] Column headers defined
- [ ] Sample data rows shown
- [ ] Sorting indicators (if applicable)
- [ ] Filter UI shown (if applicable)
- [ ] Pagination controls shown
- [ ] Empty state shown
- [ ] Row actions defined

### Detail Screens
- [ ] Title/header shown
- [ ] Content sections organized
- [ ] Related data placement defined
- [ ] Action buttons positioned
- [ ] Back/navigation shown

### Dashboard Screens
- [ ] Stat cards layout defined
- [ ] Charts/graphs placement shown
- [ ] Widget organization logical
- [ ] Quick actions accessible
- [ ] Responsive behavior specified

### Modal/Dialog Screens
- [ ] Title shown
- [ ] Content area defined
- [ ] Primary/secondary actions shown
- [ ] Close mechanism (X button, Escape) shown
- [ ] Background overlay indicated

---

## Common Issues to Check

### Missing Elements
- [ ] No missing required fields from ACs
- [ ] No missing user interactions
- [ ] No missing error states
- [ ] No missing navigation

### Inconsistencies
- [ ] Consistent button placement
- [ ] Consistent spacing between elements
- [ ] Consistent terminology
- [ ] Consistent symbol usage

### Accessibility Issues
- [ ] Touch targets too small
- [ ] Focus order unclear
- [ ] Missing labels
- [ ] Poor contrast (noted in description)

### Responsive Issues
- [ ] Elements don't fit on mobile
- [ ] Navigation unclear on mobile
- [ ] Too many columns on mobile
- [ ] Content hierarchy lost on mobile

---

## Approval Criteria

**Minimum Requirements (Must Pass):**
- All required elements present
- All ACs addressed
- ASCII wireframe readable
- Design rules followed
- Responsive views shown

**Quality Requirements (Should Pass):**
- All states documented
- Interactions clear
- Components appropriate
- Accessibility considered
- Naming conventions followed

**Excellence Requirements (Nice to Have):**
- Multiple user flows shown
- Edge cases considered
- Detailed interaction notes
- Thorough AC mapping
- Alternative layouts explored

---

## Sign-Off

**Wireframe ID:** WF-XXX
**Screen:** [Screen Name]
**Reviewed By:** [Name/Role]
**Date:** [Date]
**Status:** [ ] Approved [ ] Needs Revision [ ] Rejected

**Revision Notes:**
[If needs revision, list specific items to address]

---

## Next Steps After Approval

Once wireframe passes quality gate:
1. Move to Stage 2: Component Specs
2. Create component specifications based on wireframe
3. Map components to code implementation
4. Link wireframe ID to component IDs

---

**Related:**
- [Wireframe Rules](rules.md)
- [Component Specs Quality Gate](../stage2-component-specs/quality-gate.md)
- [Design Rules](../design-rules/)
