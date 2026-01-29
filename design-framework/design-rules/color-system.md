# Color System

## Overview

The color system is based on **ShadCN's theming system** and **Tailwind CSS v4** which uses modern CSS variables for maximum flexibility and automatic light/dark mode support. The **MDS Theme** provides the brand colors and design tokens.

## MDS Brand Colors

The MDS (Modern Design System) theme defines these brand colors:

### Primary Brand: Magenta
- **Hex:** `#bd1874`
- **Dark variant:** `#a01462`
- **HSL:** `326 77% 42%`
- **CSS Variable:** `var(--primary-magenta)` or `var(--primary)`
- **Tailwind:** `bg-magenta`, `text-magenta`
- **Usage:** Primary CTAs, buttons, links, active states, brand highlights

### Secondary Brand: Teal
- **Hex:** `#004d6c`
- **CSS Variable:** `var(--primary-teal)`
- **Tailwind:** `bg-teal`, `text-teal`
- **Usage:** Navigation, headers, secondary actions, professional/corporate contexts

### Accent: Teal Accent
- **Hex:** `#14b8a6`
- **CSS Variable:** `var(--accent-teal)` or `var(--teal-accent)`
- **Tailwind:** `text-teal-accent`
- **Usage:** Highlights, success states, positive indicators, decorative accents

---

## Color Palette

### Primary Colors

**Primary** - Main brand color (Magenta), used for primary actions and emphasis
- CSS Variable: `var(--primary)`
- Foreground: `var(--primary-foreground)`
- Hex: `#bd1874`
- Usage: Primary buttons, links, active states

**Secondary** - Supporting brand color (Teal)
- CSS Variable: `var(--secondary)`
- Foreground: `var(--secondary-foreground)`
- Usage: Secondary buttons, subtle emphasis, navigation

**Accent** - Highlight color for special emphasis (Teal Accent)
- CSS Variable: `var(--accent)`
- Foreground: `var(--accent-foreground)`
- Usage: Call-to-action elements, highlights, success indicators

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

**MDS Theme Implementation:**
```css
@import "tailwindcss";

/* Tailwind v4 Theme Configuration */
@theme {
    /* MDS Brand colors */
    --color-magenta: #bd1874;
    --color-magenta-dark: #a01462;
    --color-teal: #004d6c;
    --color-teal-accent: #14b8a6;

    /* Background & Foreground */
    --color-background: #ffffff;
    --color-foreground: #171717;
}

:root {
    --background: #ffffff;
    --foreground: #171717;
    --primary-magenta: #bd1874;
    --primary-teal: #004d6c;
    --accent-teal: #14b8a6;

    /* ShadCN UI Variables - Magenta Primary */
    --radius: 0.5rem;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 326 77% 42%;  /* Magenta */
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
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

## MDS Brand Color Usage Guide

### When to Use Magenta (Primary)
- Primary call-to-action buttons
- Important links and navigation highlights
- Active/selected states
- Form submit buttons
- Brand emphasis elements
- Hero section CTAs

### When to Use Teal (Secondary)
- Navigation bars and headers
- Secondary buttons and actions
- Professional/corporate contexts
- Section backgrounds (with low opacity)
- Footer elements
- Informational contexts

### When to Use Teal Accent
- Success messages and indicators
- Positive state highlights
- Decorative accents and borders
- Progress indicators
- Hover states on teal elements
- Interactive highlight effects

### Color Pairing Guidelines

**Magenta + White:** High contrast for CTAs
**Teal + White:** Professional headers
**Magenta + Teal:** Complementary brand pairing (use sparingly)
**Teal Accent + Dark backgrounds:** Vibrant highlights

---

## Related Rules

- [Accessibility](accessibility.md) - Color contrast requirements
- [Component Standards](component-standards.md) - Color usage in components
- [Typography](typography.md) - Text color standards
- [Animation System](animation-system.md) - MDS animation patterns

---

**Remember:** Consistent color usage creates visual hierarchy and improves usability. Always use the defined MDS color system for brand consistency.
