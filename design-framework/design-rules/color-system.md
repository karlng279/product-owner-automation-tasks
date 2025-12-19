# Color System

## Overview

The color system is based on **ShadCN's theming system** which uses CSS variables for maximum flexibility and automatic light/dark mode support.

## Color Palette

### Primary Colors

**Primary** - Main brand color, used for primary actions and emphasis
- CSS Variable: `var(--primary)`
- Foreground: `var(--primary-foreground)`
- Usage: Primary buttons, links, active states

**Secondary** - Supporting brand color
- CSS Variable: `var(--secondary)`
- Foreground: `var(--secondary-foreground)`
- Usage: Secondary buttons, subtle emphasis

**Accent** - Highlight color for special emphasis
- CSS Variable: `var(--accent)`
- Foreground: `var(--accent-foreground)`
- Usage: Call-to-action elements, highlights

### Neutral Colors

**Background** - Base background color
- CSS Variable: `var(--background)`
- Usage: Page background, card backgrounds

**Foreground** - Base text color
- CSS Variable: `var(--foreground)`
- Usage: Body text, headings

**Muted** - Subtle background for less emphasis
- CSS Variable: `var(--muted)`
- Foreground: `var(--muted-foreground)`
- Usage: Disabled states, placeholder text, subtle backgrounds

**Card** - Card background
- CSS Variable: `var(--card)`
- Foreground: `var(--card-foreground)`
- Usage: Card components, elevated surfaces

**Popover** - Popover background
- CSS Variable: `var(--popover)`
- Foreground: `var(--popover-foreground)`
- Usage: Dropdowns, tooltips, popovers

### Semantic Colors

**Destructive** - Error/danger color
- CSS Variable: `var(--destructive)`
- Foreground: `var(--destructive-foreground)`
- Usage: Delete buttons, error messages, destructive actions

**Success** - Success/positive color
- CSS Variable: `var(--success)` (custom)
- Usage: Success messages, positive states, completed actions

**Warning** - Warning/caution color
- CSS Variable: `var(--warning)` (custom)
- Usage: Warning messages, caution states

**Info** - Information color
- CSS Variable: `var(--info)` (custom)
- Usage: Informational messages, help text

### Border Colors

**Border** - Default border color
- CSS Variable: `var(--border)`
- Usage: Input borders, card borders, dividers

**Input** - Input field border color
- CSS Variable: `var(--input)`
- Usage: Form input borders

**Ring** - Focus ring color
- CSS Variable: `var(--ring)`
- Usage: Focus states, accessibility indicators

## Light/Dark Mode Support

All colors automatically adapt to light and dark modes through CSS variables defined in the theme.

**Implementation:**
```css
/* Light mode */
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... other colors */
}

/* Dark mode */
.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 217.2 91.2% 59.8%;
  /* ... other colors */
}
```

## Color Usage Guidelines

### Do's

✅ **Use semantic colors for their intended purpose**
- Use `destructive` for delete actions
- Use `success` for confirmations
- Use `warning` for caution messages

✅ **Use CSS variables, not hardcoded colors**
- Correct: `bg-primary text-primary-foreground`
- Incorrect: `bg-blue-500 text-white`

✅ **Maintain proper contrast ratios**
- Text on background: 4.5:1 minimum
- UI components: 3:1 minimum
- See [accessibility.md](accessibility.md) for details

✅ **Test in both light and dark modes**
- Ensure colors work in both themes
- Verify contrast ratios in both modes

### Don'ts

❌ **Don't use arbitrary Tailwind colors**
- Avoid: `bg-blue-600`, `text-red-500`
- Use theme variables instead

❌ **Don't mix color systems**
- Stick to the defined palette
- Don't introduce random colors

❌ **Don't ignore foreground colors**
- Always pair background with foreground
- Example: `bg-primary text-primary-foreground`

## Color Application

### Buttons

**Primary Button:**
- Background: `bg-primary`
- Text: `text-primary-foreground`
- Hover: `hover:bg-primary/90`

**Secondary Button:**
- Background: `bg-secondary`
- Text: `text-secondary-foreground`
- Hover: `hover:bg-secondary/80`

**Destructive Button:**
- Background: `bg-destructive`
- Text: `text-destructive-foreground`
- Hover: `hover:bg-destructive/90`

**Ghost Button:**
- Background: `transparent`
- Text: `text-foreground`
- Hover: `hover:bg-accent hover:text-accent-foreground`

### Inputs

**Default State:**
- Background: `bg-background`
- Border: `border-input`
- Text: `text-foreground`

**Focus State:**
- Ring: `focus:ring-ring`
- Border: `focus:border-primary`

**Error State:**
- Border: `border-destructive`
- Text: `text-destructive`

### Cards

**Standard Card:**
- Background: `bg-card`
- Text: `text-card-foreground`
- Border: `border-border`

### Feedback Messages

**Success:**
- Background: `bg-success/10`
- Border: `border-success`
- Text: `text-success`

**Error:**
- Background: `bg-destructive/10`
- Border: `border-destructive`
- Text: `text-destructive`

**Warning:**
- Background: `bg-warning/10`
- Border: `border-warning`
- Text: `text-warning`

**Info:**
- Background: `bg-info/10`
- Border: `border-info`
- Text: `text-info`

## Opacity Modifiers

Use Tailwind's opacity modifiers for subtle variations:

- `/10` - 10% opacity (very subtle backgrounds)
- `/20` - 20% opacity (subtle backgrounds)
- `/50` - 50% opacity (disabled states)
- `/80` - 80% opacity (hover states)
- `/90` - 90% opacity (active states)

**Example:**
```
bg-primary/10  /* Very subtle primary background */
bg-muted/50    /* 50% opacity muted background */
hover:bg-primary/90  /* Slightly darker primary on hover */
```

## Wireframe Color References

When creating wireframes, specify colors using descriptive names:

**Format:** `[color-name]`

**Examples:**
```
Button: [Primary] "Submit"
Card Background: [Card]
Error Text: [Destructive]
Border: [Border]
```

## Quality Gates

Before finalizing a design:

- [ ] All colors use CSS variables (no hardcoded hex/rgb)
- [ ] Foreground colors are paired with backgrounds
- [ ] Contrast ratios meet WCAG AA standards
- [ ] Design works in both light and dark modes
- [ ] Semantic colors used appropriately
- [ ] No arbitrary Tailwind colors introduced

## Examples

### Good Color Usage

```markdown
## Login Form

- Card Background: [Card]
- Input Background: [Background]
- Input Border: [Input]
- Submit Button: [Primary] with [Primary-Foreground] text
- Error Message: [Destructive] text on [Destructive/10] background
```

### Bad Color Usage

```markdown
## Login Form (BAD - Don't do this)

- Card Background: #ffffff (hardcoded)
- Input Border: blue-500 (arbitrary Tailwind)
- Submit Button: green (no foreground specified)
- Error Message: red text (not using semantic color)
```

## Related Rules

- [Accessibility](accessibility.md) - Color contrast requirements
- [Component Standards](component-standards.md) - Color usage in components
- [Typography](typography.md) - Text color standards

---

**Remember:** Consistent color usage creates visual hierarchy and improves usability. Always use the defined color system.
