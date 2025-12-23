# Component Specification: Listing Form

**Component ID:** COMP-002
**Component Name:** Listing Form
**Wireframe ID(s):** WF-004
**Story ID(s):** US-004, US-005
**Acceptance Criteria IDs:** AC-032 to AC-043
**Component Type:** Form
**Created:** 2024-05-21
**Last Updated:** 2024-05-21

---

## 1. Component Overview

### Purpose
A comprehensive form for sellers to create or edit a container listing. It collects technical specifications, media, and auction parameters.

### Context
- **Create Listing Page:** Empty state.
- **Edit Listing Page:** Pre-filled state.

### User Interaction
- **Input:** Text, Numbers, Selections, Date picking.
- **Validation:** Real-time or on-blur validation of required fields.
- **Submission:** "Create Listing" or "Save Changes" action.

### Key Functionality
- Form state management (react-hook-form + zod recommended).
- Validation rules (required fields, positive numbers, future dates).
- Image preview (for MVP URL input).

---

## 2. Component Structure

### Layout

**Container:**
- **Width:** `max-w-2xl` (centered).
- **Spacing:** `space-y-8` between sections.

**Sections:**
1.  **Container Details:** Type, Condition, Location, Description.
2.  **Media:** Image URL input + Preview.
3.  **Auction Settings:** Start Price, Buy Now Price, End Time.
4.  **Actions:** Cancel (Link/Button), Submit (Primary Button).

### Responsive Behavior
- **Mobile:** Single column layout for all fields.
- **Desktop:**
    -   Price fields can be side-by-side (`grid-cols-2`).
    -   Type and Condition can be side-by-side.

---

## 3. ShadCN Components & Props

### 1. Form Wrapper
- **Component:** `Form` (from `react-hook-form` wrapper)
- **Elements:** `FormField`, `FormItem`, `FormLabel`, `FormControl`, `FormMessage` (Error).

### 2. Inputs
- **Container Type:**
    -   **Component:** `Select`
    -   **Options:** 20ft Standard, 40ft Standard, 40ft High Cube, etc.
- **Condition:**
    -   **Component:** `RadioGroup`
    -   **Items:** New, Used, Damaged.
- **Location:**
    -   **Component:** `Input` (Text)
- **Description:**
    -   **Component:** `Textarea`
- **Prices:**
    -   **Component:** `Input`
    -   **Type:** `number`
    -   **Props:** `min="0"`, `step="0.01"`
- **End Time:**
    -   **Component:** `Popover` + `Calendar` (Date) + Time Input (or combined DateTime picker if available, otherwise DatePicker + Input for time).
    -   *Note:* Standard ShadCN `Calendar` is date only. May need a composite or simple `Input type="datetime-local"` for MVP simplicity.

### 3. Buttons
- **Submit:** `Button` (variant: `default`)
- **Cancel:** `Button` (variant: `outline` or `ghost`)

---

## 4. Data Requirements

### Schema (Zod Example)
```typescript
const listingSchema = z.object({
  type: z.enum(['20ft', '40ft', '40ft_hc']),
  condition: z.enum(['new', 'used', 'damaged']),
  location: z.string().min(2),
  description: z.string().optional(),
  imageUrl: z.string().url(),
  startPrice: z.number().positive(),
  buyNowPrice: z.number().positive().optional(),
  endTime: z.date().refine(date => date > new Date(), {
    message: "End time must be in the future"
  })
});
```

---

## 5. Accessibility (A11y)
- **Labels:** All inputs must have visible `FormLabel`.
- **Errors:** Validation errors must be linked via `aria-describedby` (handled by ShadCN Form).
- **Keyboard:** Full keyboard navigation support.
