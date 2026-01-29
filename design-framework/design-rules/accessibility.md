# Accessibility

## Overview

**WCAG 2.1 Level AA compliance** is mandatory for all interfaces. Accessibility is not optional.

## Color Contrast

### Text Contrast Ratios

**Normal Text (< 18px):**
- Minimum: 4.5:1
- Preferred: 7:1 (AAA)

**Large Text (≥ 18px or 14px bold):**
- Minimum: 3:1
- Preferred: 4.5:1 (AAA)

**UI Components & Graphics:**
- Minimum: 3:1

### Testing Contrast

Use tools:
- Chrome DevTools (Inspect element → Accessibility pane)
- WebAIM Contrast Checker
- Axe DevTools

**Common combinations:**
- `text-foreground` on `bg-background` ✅
- `text-primary-foreground` on `bg-primary` ✅
- `text-muted-foreground` on `bg-background` ⚠️ (verify)

## Keyboard Navigation

### Requirements

**All interactive elements must be keyboard accessible:**
- Buttons: `Enter` or `Space` to activate
- Links: `Enter` to follow
- Forms: `Tab` to navigate, `Enter` to submit
- Modals: `Escape` to close
- Dropdowns: Arrow keys to navigate

### Focus States

**Visible focus indicators required:**
- Default: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`
- Never use `outline: none` without replacement
- Focus must be visible on all interactive elements

### Tab Order

- Follow logical reading order (left-to-right, top-to-bottom)
- Skip navigation links for long nav menus
- Modal focus trap (keep focus within modal)

## Touch Targets

### Minimum Sizes

**Interactive Elements:**
- Minimum: 44x44px (iOS/Android guidelines)
- Preferred: 48x48px
- Applies to: Buttons, links, checkboxes, radio buttons

**Spacing:**
- Minimum gap between touch targets: 8px
- Preferred: 12px or more

## Semantic HTML

### Use Proper Elements

✅ **Do:**
- `<button>` for buttons
- `<a>` for links
- `<h1>` through `<h6>` for headings
- `<nav>` for navigation
- `<main>` for main content
- `<form>` for forms
- `<label>` for form labels

❌ **Don't:**
- `<div onClick>` for buttons (not keyboard accessible)
- `<span>` for links
- Skip heading levels
- Use `<br>` for spacing (use CSS)

### Heading Hierarchy

- One `<h1>` per page
- Don't skip levels (H1 → H2 → H3, not H1 → H3)
- Use headings for structure, not styling

## ARIA Labels

### When to Use ARIA

**Only when semantic HTML isn't enough:**
- Icon-only buttons: `aria-label="Close"`
- Complex widgets: `role="dialog"`, `aria-modal="true"`
- Live regions: `aria-live="polite"`
- State: `aria-expanded`, `aria-selected`

### Common ARIA Attributes

**Labels:**
- `aria-label`: Direct label
- `aria-labelledby`: Reference to label element
- `aria-describedby`: Additional description

**States:**
- `aria-expanded`: Dropdown/accordion state
- `aria-selected`: Selected tab/option
- `aria-checked`: Checkbox/radio state
- `aria-disabled`: Disabled state

**Roles:**
- `role="button"`: Non-button element acting as button
- `role="dialog"`: Modal dialog
- `role="navigation"`: Navigation landmark
- `role="alert"`: Important message

### ARIA Best Practices

✅ **Do:**
- Prefer semantic HTML over ARIA
- Keep labels concise
- Update ARIA states dynamically

❌ **Don't:**
- Use ARIA when HTML semantics suffice
- Use generic labels like "Click here"
- Forget to update dynamic content

## Screen Reader Support

### Text Alternatives

**Images:**
- Decorative: `alt=""` (empty)
- Informative: `alt="Descriptive text"`
- Complex: Provide longer description

**Icons:**
- With text: `aria-hidden="true"` on icon
- Without text: `aria-label` on button

### Hidden Content

**Visually Hidden (screen reader accessible):**
```html
<span class="sr-only">Screen reader only text</span>
```

**Hidden from everyone:**
```html
<div aria-hidden="true">Decorative content</div>
```

## Forms

### Form Accessibility

**Requirements:**
- Every input has a `<label>`
- Labels are associated (`for` attribute matches `id`)
- Required fields marked: `aria-required="true"`
- Error messages linked: `aria-describedby`

**Example:**
```html
<div>
  <label for="email">Email</label>
  <input
    id="email"
    type="email"
    aria-required="true"
    aria-describedby="email-error"
  />
  <p id="email-error" class="text-destructive">
    Error message
  </p>
</div>
```

### Error Handling

- Clear error messages
- Associate errors with fields
- Don't rely on color alone
- Provide recovery suggestions

## Modals/Dialogs

### Modal Accessibility

**Requirements:**
- Focus trap (Tab cycles within modal)
- Focus first element on open
- Restore focus on close
- Close on `Escape`
- `role="dialog"`, `aria-modal="true"`
- `aria-labelledby` for title

## Tables

### Data Table Accessibility

**Requirements:**
- Use `<table>`, `<thead>`, `<tbody>`, `<th>`, `<td>`
- Column headers: `<th scope="col">`
- Row headers: `<th scope="row">`
- Table caption or `aria-label`

## Animation & Motion

### Motion Sensitivity

**Respect user preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Guidelines:**
- Provide static alternative
- Avoid auto-playing videos
- Pause/stop controls for animations

## Testing Checklist

### Manual Testing

- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Screen reader announces content correctly
- [ ] Color contrast passes WCAG AA
- [ ] Touch targets meet 44x44px minimum
- [ ] Forms have proper labels
- [ ] Heading hierarchy is logical
- [ ] Alt text provided for images

### Automated Testing

Tools:
- Axe DevTools (browser extension)
- Lighthouse (Chrome DevTools)
- WAVE (browser extension)
- pa11y (CLI tool)

### Screen Reader Testing

Test with:
- NVDA (Windows, free)
- JAWS (Windows, paid)
- VoiceOver (macOS, built-in)
- TalkBack (Android, built-in)

## Common Mistakes

❌ **Missing alt text on images**
❌ **Poor color contrast**
❌ **Div/span used as buttons (not keyboard accessible)**
❌ **Missing form labels**
❌ **No focus indicators**
❌ **Skipping heading levels**
❌ **Auto-playing media**
❌ **Text too small (< 16px)**

## Quality Gates

Before shipping:

- [ ] All WCAG 2.1 Level AA criteria met
- [ ] Color contrast verified (4.5:1 for text, 3:1 for UI)
- [ ] Keyboard navigation tested
- [ ] Focus states visible
- [ ] Screen reader tested
- [ ] Touch targets minimum 44x44px
- [ ] Semantic HTML used
- [ ] ARIA used appropriately (not excessively)
- [ ] Forms accessible with labels and error handling
- [ ] Automated tests passing (Axe, Lighthouse)

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [Inclusive Components](https://inclusive-components.design/)

---

**Remember:** Accessibility is not a feature - it's a requirement. Design for everyone.
