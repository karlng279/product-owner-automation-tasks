# Design System Rules

**Version:** 1.0.0
**Last Updated:** 2025-12-18

## Overview

This design system provides comprehensive rules and guidelines for creating consistent, accessible, and high-quality user interfaces. It is built on top of **ShadCN UI** components and **Tailwind CSS**, providing a structured approach to design without requiring traditional design tools.

## Philosophy

- **Text-based design**: All design specifications use text descriptions and ASCII wireframes
- **Component-driven**: Leverage ShadCN's pre-built, accessible components
- **Utility-first**: Use Tailwind CSS for styling consistency
- **Accessibility-first**: WCAG 2.1 Level AA compliance is mandatory
- **Mobile-first**: Responsive design starting from mobile breakpoints

## Design Rules Structure

This folder contains 8 core rule sets:

### 1. [Color System](color-system.md)
- ShadCN theme colors and CSS variables
- Light/dark mode support
- Semantic color usage (success, error, warning, info)

### 2. [Spacing System](spacing-system.md)
- 4px base unit spacing scale
- Margin and padding conventions
- Component and layout spacing rules

### 3. [Typography](typography.md)
- Font family hierarchy
- Type scale (text-xs through text-5xl)
- Font weights, line heights, letter spacing
- Heading and body text styles

### 4. [Layout System](layout-system.md)
- Container widths and responsive breakpoints
- Grid and flexbox patterns
- Common layout compositions

### 5. [Component Standards](component-standards.md)
- Button variants and usage guidelines
- Input field standards
- Card, modal, form, and navigation patterns

### 6. [Accessibility](accessibility.md)
- WCAG 2.1 Level AA requirements
- Color contrast ratios
- Keyboard navigation and focus states
- ARIA labels and semantic HTML

### 7. [Responsive Design](responsive-design.md)
- Mobile-first approach
- Breakpoint strategy
- Component behavior across screen sizes

### 8. [Naming Conventions](naming-conventions.md)
- Component naming (PascalCase)
- CSS class naming (kebab-case)
- File and ID naming standards

## Integration with ShadCN + Tailwind

This design system extends (not replaces) ShadCN and Tailwind:

- **ShadCN Components**: Use as-is for standard components (Button, Input, Card, etc.)
- **Tailwind Utilities**: Follow Tailwind's spacing, color, and typography scales
- **Custom Rules**: Add consistency and team-specific standards on top of base frameworks

## How to Use These Rules

### For Designers (Creating Wireframes)

1. Read [color-system.md](color-system.md), [spacing-system.md](spacing-system.md), and [typography.md](typography.md)
2. Use these rules when creating ASCII wireframes and text descriptions
3. Reference component standards when specifying UI elements

### For Developers (Implementing Designs)

1. Follow [component-standards.md](component-standards.md) when building features
2. Ensure [accessibility.md](accessibility.md) compliance for all interactive elements
3. Apply [responsive-design.md](responsive-design.md) patterns for multi-device support

### For Reviewers (Quality Assurance)

1. Check designs against quality gates in each rule file
2. Verify accessibility requirements are met
3. Ensure naming conventions are followed

## Quick Reference

### Colors
- Use CSS variables: `var(--primary)`, `var(--secondary)`, `var(--accent)`
- Semantic colors: `var(--success)`, `var(--error)`, `var(--warning)`, `var(--info)`

### Spacing
- Base unit: 4px
- Scale: `space-1` (4px), `space-2` (8px), `space-4` (16px), `space-8` (32px)

### Typography
- Headings: `text-4xl` (h1), `text-3xl` (h2), `text-2xl` (h3), `text-xl` (h4)
- Body: `text-base` (16px), `text-sm` (14px), `text-xs` (12px)

### Breakpoints
- Mobile: < 640px (default)
- Tablet: 640px - 1024px (`sm:`, `md:`)
- Desktop: > 1024px (`lg:`, `xl:`, `2xl:`)

## Updates and Maintenance

These rules are living documents. Update them when:
- New design patterns emerge
- Component standards evolve
- Accessibility requirements change
- Team feedback identifies improvements

## Related Documentation

- [Design Workflow](../design-workflow.md) - How to use design rules in the workflow
- [Stage 1: Wireframes](../stage1-wireframes/) - Creating wireframes with these rules
- [Stage 2: Component Specs](../stage2-component-specs/) - Applying rules to component specs
- [Stage 3: Interactions](../stage3-interactions/) - Interaction design standards

---

**Remember:** Consistent design starts with consistent rules. Follow these guidelines to create interfaces that are beautiful, accessible, and maintainable.
