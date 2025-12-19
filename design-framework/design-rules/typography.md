# Typography

## Overview

Typography system based on **Tailwind's type scale** with sensible defaults for readability and hierarchy.

## Font Families

### Sans-serif (Default)

**Primary Font:** System font stack
- Class: `font-sans` (default)
- Stack: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- Usage: Body text, UI elements, headings

### Monospace

**Code Font:** Monospace stack
- Class: `font-mono`
- Stack: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
- Usage: Code blocks, technical data, monospaced content

## Type Scale

### Base Size: 16px (1rem)

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `text-xs` | 12px (0.75rem) | 16px (1rem) | Captions, labels, metadata |
| `text-sm` | 14px (0.875rem) | 20px (1.25rem) | Small body text, secondary info |
| `text-base` | 16px (1rem) | 24px (1.5rem) | Body text, paragraphs |
| `text-lg` | 18px (1.125rem) | 28px (1.75rem) | Large body text, intro paragraphs |
| `text-xl` | 20px (1.25rem) | 28px (1.75rem) | Small headings (h4) |
| `text-2xl` | 24px (1.5rem) | 32px (2rem) | Medium headings (h3) |
| `text-3xl` | 30px (1.875rem) | 36px (2.25rem) | Large headings (h2) |
| `text-4xl` | 36px (2.25rem) | 40px (2.5rem) | Extra large headings (h1) |
| `text-5xl` | 48px (3rem) | 48px (1) | Display headings, hero text |

## Font Weights

| Class | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text, paragraphs |
| `font-medium` | 500 | Emphasized text, labels |
| `font-semibold` | 600 | Headings, strong emphasis |
| `font-bold` | 700 | Strong headings, important text |

## Heading Styles

### H1 - Page Title
- Size: `text-4xl` (36px)
- Weight: `font-bold`
- Color: `text-foreground`
- Line Height: Default
- Usage: Main page heading, hero title

```
<h1 class="text-4xl font-bold">Page Title</h1>
```

### H2 - Section Heading
- Size: `text-3xl` (30px)
- Weight: `font-bold`
- Color: `text-foreground`
- Line Height: Default
- Usage: Major section headings

```
<h2 class="text-3xl font-bold">Section Heading</h2>
```

### H3 - Subsection Heading
- Size: `text-2xl` (24px)
- Weight: `font-semibold`
- Color: `text-foreground`
- Line Height: Default
- Usage: Subsections, card titles

```
<h3 class="text-2xl font-semibold">Subsection Heading</h3>
```

### H4 - Minor Heading
- Size: `text-xl` (20px)
- Weight: `font-semibold`
- Color: `text-foreground`
- Line Height: Default
- Usage: Minor sections, list headings

```
<h4 class="text-xl font-semibold">Minor Heading</h4>
```

### H5 & H6 - Smallest Headings
- Size: `text-lg` (18px) or `text-base` (16px)
- Weight: `font-medium` or `font-semibold`
- Color: `text-foreground`
- Usage: Inline headings, component titles

```
<h5 class="text-lg font-medium">Small Heading</h5>
<h6 class="text-base font-medium">Smallest Heading</h6>
```

## Body Text Styles

### Standard Body Text
- Size: `text-base` (16px)
- Weight: `font-normal`
- Color: `text-foreground`
- Line Height: `leading-relaxed` (1.625) or default

```
<p class="text-base">Standard paragraph text.</p>
```

### Large Body Text
- Size: `text-lg` (18px)
- Weight: `font-normal`
- Color: `text-foreground`
- Usage: Introduction paragraphs, featured content

```
<p class="text-lg">Large introductory text.</p>
```

### Small Body Text
- Size: `text-sm` (14px)
- Weight: `font-normal`
- Color: `text-muted-foreground`
- Usage: Secondary information, captions

```
<p class="text-sm text-muted-foreground">Secondary information.</p>
```

### Extra Small Text
- Size: `text-xs` (12px)
- Weight: `font-normal`
- Color: `text-muted-foreground`
- Usage: Labels, metadata, timestamps

```
<span class="text-xs text-muted-foreground">Posted 2 hours ago</span>
```

## Special Text Styles

### Emphasis
- Weight: `font-medium` or `font-semibold`
- Usage: Emphasized words, important phrases

```
<p>This is <span class="font-medium">emphasized</span> text.</p>
```

### Muted Text
- Color: `text-muted-foreground`
- Usage: Less important information, placeholders

```
<p class="text-muted-foreground">This is muted text.</p>
```

### Links
- Color: `text-primary` or underlined
- Hover: `hover:text-primary/80 hover:underline`
- Usage: Hyperlinks, clickable text

```
<a href="#" class="text-primary hover:underline">Link text</a>
```

### Code (Inline)
- Font: `font-mono`
- Size: `text-sm`
- Background: `bg-muted`
- Padding: `px-1 py-0.5`
- Border Radius: `rounded`

```
<code class="font-mono text-sm bg-muted px-1 py-0.5 rounded">code</code>
```

## Line Height

### Default Line Heights

Tailwind provides sensible defaults, but you can override:

| Class | Value | Usage |
|-------|-------|-------|
| `leading-none` | 1 | Tight spacing, display text |
| `leading-tight` | 1.25 | Headings |
| `leading-snug` | 1.375 | Card titles |
| `leading-normal` | 1.5 | Default |
| `leading-relaxed` | 1.625 | Body text, paragraphs |
| `leading-loose` | 2 | Very spacious text |

**Recommendation:** Use `leading-relaxed` for body paragraphs to improve readability.

```
<p class="text-base leading-relaxed">Comfortable paragraph text.</p>
```

## Letter Spacing

| Class | Value | Usage |
|-------|-------|-------|
| `tracking-tighter` | -0.05em | Very tight, display headings |
| `tracking-tight` | -0.025em | Tight, large headings |
| `tracking-normal` | 0 | Default |
| `tracking-wide` | 0.025em | Slightly spaced, buttons |
| `tracking-wider` | 0.05em | Spaced, all-caps text |
| `tracking-widest` | 0.1em | Very spaced, labels |

**Usage:**
```
<button class="tracking-wide uppercase">Button</button>
<h1 class="text-5xl tracking-tight">Hero Title</h1>
```

## Text Alignment

| Class | Alignment | Usage |
|-------|-----------|-------|
| `text-left` | Left | Default, body text |
| `text-center` | Center | Headings, hero sections |
| `text-right` | Right | Metadata, timestamps |
| `text-justify` | Justified | Long-form content (use sparingly) |

## Text Decoration

| Class | Decoration | Usage |
|-------|------------|-------|
| `underline` | Underline | Links, emphasis |
| `line-through` | Strikethrough | Deleted content, old prices |
| `no-underline` | None | Remove default link underline |

## Text Transform

| Class | Transform | Usage |
|-------|-----------|-------|
| `uppercase` | UPPERCASE | Buttons, labels, badges |
| `lowercase` | lowercase | Rare usage |
| `capitalize` | Capitalize Each Word | Titles, names |
| `normal-case` | Normal | Default |

## Typography Guidelines

### Do's

✅ **Maintain hierarchy**
- Use larger sizes and bold weights for headings
- Use consistent sizes for similar content

✅ **Ensure readability**
- Use `text-base` (16px) minimum for body text
- Use `leading-relaxed` for paragraphs
- Maintain proper contrast (see [accessibility.md](accessibility.md))

✅ **Be consistent**
- Use same heading sizes across the app
- Use same body text size

✅ **Respect semantic HTML**
- Use `<h1>` through `<h6>` for headings
- Use `<p>` for paragraphs
- Use proper heading hierarchy

### Don'ts

❌ **Don't skip heading levels**
- Bad: H1 → H3 (skipping H2)
- Good: H1 → H2 → H3

❌ **Don't use arbitrary sizes**
- Use the defined scale
- Avoid `text-[15px]`

❌ **Don't make body text too small**
- Minimum: 14px (`text-sm`)
- Preferred: 16px (`text-base`)

❌ **Don't over-emphasize**
- Use bold sparingly
- Not every word needs emphasis

## Responsive Typography

Scale typography for different screen sizes:

```
<!-- Hero heading: larger on desktop -->
<h1 class="text-3xl md:text-4xl lg:text-5xl font-bold">
  Hero Title
</h1>

<!-- Body text: slightly larger on desktop -->
<p class="text-base md:text-lg leading-relaxed">
  Paragraph content that scales up on larger screens.
</p>
```

## Wireframe Typography Notation

When specifying typography in wireframes:

**Format:** `[size] [weight] [color]`

**Examples:**
```
Heading: [text-4xl] [bold] [foreground] "Page Title"
Body: [text-base] [normal] [foreground] "Paragraph text..."
Caption: [text-sm] [normal] [muted-foreground] "Caption text"
Link: [text-base] [normal] [primary] "Click here"
```

## Common Typography Patterns

### Card Title + Description
```
<h3 class="text-xl font-semibold">Card Title</h3>
<p class="text-sm text-muted-foreground mt-1">Brief description</p>
```

### Form Label + Input
```
<label class="text-sm font-medium">Label</label>
<input class="text-base" />
<p class="text-xs text-muted-foreground mt-1">Helper text</p>
```

### Hero Section
```
<h1 class="text-4xl md:text-5xl font-bold">Hero Title</h1>
<p class="text-lg md:text-xl text-muted-foreground mt-4">
  Hero subtitle or description
</p>
```

## Quality Gates

Before finalizing typography:

- [ ] Heading hierarchy follows semantic structure (H1 → H2 → H3)
- [ ] Body text is minimum 16px (`text-base`)
- [ ] Proper line height for readability (`leading-relaxed` for body text)
- [ ] Consistent typography for similar elements
- [ ] Color contrast meets WCAG AA (see [accessibility.md](accessibility.md))
- [ ] Responsive scaling applied for different screen sizes
- [ ] Font weights create clear hierarchy

## Related Rules

- [Color System](color-system.md) - Text colors
- [Accessibility](accessibility.md) - Contrast ratios, readable text
- [Responsive Design](responsive-design.md) - Typography scaling

---

**Remember:** Good typography is invisible. Focus on readability and hierarchy.
