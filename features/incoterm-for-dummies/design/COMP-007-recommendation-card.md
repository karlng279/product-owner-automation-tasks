# Component Specification: Recommendation Card

**Component ID:** COMP-007
**Component Name:** Recommendation Card
**Wireframe ID(s):** WF-012
**Story ID(s):** ST-015
**Acceptance Criteria IDs:** AC-001, AC-002, AC-003, AC-005, AC-007
**Component Type:** Card
**Created:** 2026-01-23
**Last Updated:** 2026-01-23

---

## 1. Component Overview

### Purpose
Display an Incoterm recommendation from the wizard results, showing match percentage, explanation of why it fits, and link to learn more.

### Context
Used on Wizard Results page (WF-012). Primary recommendation is large/featured, alternatives are smaller.

### Key Functionality
- Display Incoterm code and name
- Show match percentage
- List reasons why it fits
- Link to detail page
- Variant: Primary (large) vs Alternative (compact)

---

## 2. Component Structure

### Primary Variant

**Container:**
- Width: 100%
- Padding: p-8
- Background: bg-card
- Border: border-2 border-primary rounded-xl
- Shadow: shadow-lg

### Alternative Variant

**Container:**
- Width: 100% or 50% in grid
- Padding: p-6
- Background: bg-card
- Border: border rounded-lg
- Shadow: shadow-sm

---

## 3. UI Elements

### Element 1: Best Match Badge (Primary only)

**Element ID:** COMP-007-EL-001
**ShadCN Component:** Badge

**Styling:**
- Variant: default
- Icon: Star
- Text: "BEST MATCH"
- Position: Top of card, centered

---

### Element 2: Incoterm Code

**Element ID:** COMP-007-EL-002
**Type:** Heading

**Styling:**
- Primary: text-4xl font-bold
- Alternative: text-2xl font-bold

---

### Element 3: Full Name

**Element ID:** COMP-007-EL-003
**Type:** Text

**Styling:**
- text-lg text-muted-foreground

---

### Element 4: Match Percentage

**Element ID:** COMP-007-EL-004
**Type:** Badge or ring indicator

**Visual:**
- Primary: Large ring indicator (e.g., 95%)
- Alternative: Badge with percentage

**Styling:**
- Color based on match:
  - 90%+: green
  - 70-89%: blue
  - <70%: yellow

---

### Element 5: Fit Reasons

**Element ID:** COMP-007-EL-005
**Type:** Bulleted list

**Content:**
- Checkmark icon + reason text
- 3-4 bullet points

**Styling:**
- Icon: CheckCircle text-green-500
- Text: text-sm

---

### Element 6: Learn More Button

**Element ID:** COMP-007-EL-006
**ShadCN Component:** Button

**Props:**
- Primary: variant="default", size="lg"
- Alternative: variant="outline", size="sm"

**Text:** "Learn More About {CODE}"

---

## 4. Props Interface

```typescript
interface RecommendationCardProps {
  code: string;
  fullName: string;
  matchPercentage: number;
  reasons: string[];
  variant: "primary" | "alternative";
  href: string;
}
```

---

## 5. Component States

### Default State
Full card displayed with all information

### Hover State
- Primary: Subtle glow or scale
- Alternative: Border color change

---

## 6. Design Rules Applied

### Colors
- Primary border: border-primary
- Match badge: green/blue/yellow based on score
- Checkmarks: text-green-500

### Spacing
- Primary padding: p-8
- Alternative padding: p-6
- Gap between elements: gap-4

### Typography
- Code: text-4xl/2xl font-bold
- Name: text-lg
- Reasons: text-sm

---

**Status:** Draft
