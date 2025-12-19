# Design Framework

## Overview

The **Design Framework** provides a complete, text-based design system for creating UI/UX specifications without visual design tools. It bridges the gap between Product Owner specifications and code implementation.

**Philosophy:** Design through text and ASCII art, leverage AI assistance, maintain traceability from requirements to implementation.

---

## Why This Framework?

- **No design tools required:** Uses text descriptions and ASCII wireframes
- **AI-friendly:** Optimized for AI-assisted design work
- **Complete traceability:** Links wireframes → components → interactions → code
- **ShadCN UI integration:** Built around ShadCN UI component library
- **Tanstack Table support:** Comprehensive table specifications
- **Accessible by default:** WCAG AA compliance built into design rules

---

## Framework Structure

```
design-framework/
├── README.md                      # This file
├── design-workflow.md             # Complete workflow guide
│
├── design-rules/                  # Design system rules
│   ├── color-system.md
│   ├── spacing-system.md
│   ├── typography.md
│   ├── layout-system.md
│   ├── component-standards.md
│   ├── accessibility.md
│   ├── responsive-design.md
│   └── naming-conventions.md
│
├── stage1-wireframes/             # Text + ASCII wireframes
│   ├── rules.md
│   ├── template-text-wireframe.md
│   ├── template-ascii-wireframe.md
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage2-component-specs/        # ShadCN + Tanstack Table specs
│   ├── rules.md
│   ├── shadcn-component-catalog.md
│   ├── tanstack-table-reference.md
│   ├── template-component-spec.md
│   ├── template-table-spec.md
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── stage3-interactions/           # State diagrams & flows
│   ├── rules.md
│   ├── template-state-diagram.md
│   ├── template-interaction-flow.md
│   ├── examples.md
│   ├── prompts.md
│   └── quality-gate.md
│
├── templates/                     # Reusable wireframe templates
│   ├── form-layout-template.md
│   ├── list-view-template.md
│   ├── detail-view-template.md
│   ├── dashboard-template.md
│   └── modal-template.md
│
└── patterns/                      # Common UI patterns
    ├── navigation-patterns.md
    ├── form-patterns.md
    ├── feedback-patterns.md
    ├── data-display-patterns.md
    └── responsive-patterns.md
```

---

## Three-Stage Design Process

### Stage 1: Wireframes (Text + ASCII)

**Input:** User Story Details (USD) with Acceptance Criteria
**Output:** Wireframes (WF-XXX)

**Purpose:** Translate acceptance criteria into visual layout using text descriptions and ASCII art.

**Deliverables:**
- Text description of layout and UI elements
- ASCII wireframes (desktop, tablet, mobile)
- Component list (what ShadCN components needed)
- AC mapping (which wireframe elements address which ACs)

**Example:**
```
WF-001: Login Form
- Email input
- Password input
- Submit button
- Remember me checkbox

ASCII:
+---------------------------+
| Email                     |
| <Input_________________>  |
| Password                  |
| <Input_________________>  |
| [×] Remember me           |
| [Sign In]                 |
+---------------------------+
```

**Templates:** form-layout, list-view, detail-view, dashboard, modal

**Documentation:** [stage1-wireframes/](stage1-wireframes/)

---

### Stage 2: Component Specifications (ShadCN + Tanstack Table)

**Input:** Approved wireframes (WF-XXX)
**Output:** Component specs (COMP-XXX), Table specs (TBL-XXX)

**Purpose:** Define which ShadCN components to use and how to configure them. For tables, provide full Tanstack Table configuration.

**Deliverables:**
- Component specs with ShadCN component names, variants, props, states
- Table specs with complete column definitions, sorting, filtering, pagination
- Validation rules (for forms)
- Accessibility specifications
- Design rules application

**Example:**
```
COMP-001: Login Form

Element 1: Email Input
- Component: Input (ShadCN)
- Variant: default
- Size: default (h-10)
- Props: type="email", required=true
- States: default, focus, error
- Validation: Required, email format
```

**Simple Component References:** No code snippets, just component names and variants

**Full Table Configurations:** Complete Tanstack Table setup with all options

**Documentation:** [stage2-component-specs/](stage2-component-specs/)

---

### Stage 3: Interactions (State Diagrams)

**Input:** Approved component specs (COMP-XXX)
**Output:** Interaction specs (INT-XXX)

**Purpose:** Document how components behave, state transitions, user flows using ASCII state diagrams.

**Deliverables:**
- ASCII state diagrams showing all states and transitions
- State definitions (what each state means)
- Transition definitions (triggers, conditions, actions)
- User flows (happy path + alternatives)
- Edge cases and error scenarios
- API integration (if applicable)

**Example:**
```
INT-001: Login Form Submission

State Diagram:
→ [Idle] --submit--> [Submitting] --success--> [Success]
                          |
                          +--error--> [Error]
```

**Format:** State diagrams (Format B) using ASCII art

**Documentation:** [stage3-interactions/](stage3-interactions/)

---

## Design Rules (Foundation)

The **design-rules/** folder contains the design system rules that apply to all stages:

1. **Color System:** ShadCN theme colors, CSS variables, semantic usage
2. **Spacing System:** 4px base unit, spacing scale, component spacing
3. **Typography:** Text sizes, font weights, heading hierarchy
4. **Layout System:** Container widths, responsive breakpoints, grid/flexbox
5. **Component Standards:** ShadCN component variants, sizing, states
6. **Accessibility:** WCAG AA compliance, keyboard nav, screen readers
7. **Responsive Design:** Mobile-first, breakpoint behavior, adaptive layouts
8. **Naming Conventions:** Component, file, ID naming standards

**All wireframes, component specs, and interactions must follow these rules.**

**Documentation:** [design-rules/](design-rules/)

---

## UI Libraries

### ShadCN UI

**Component library** built on Radix UI + Tailwind CSS

**Why ShadCN:**
- Copy-paste components (not npm dependency)
- Full customization control
- Built on solid foundations (Radix + Tailwind)
- Excellent accessibility
- TypeScript support

**Reference:** [shadcn-component-catalog.md](stage2-component-specs/shadcn-component-catalog.md)

**Official Docs:** https://ui.shadcn.com

---

### Tanstack Table

**Headless table library** for complex data tables

**Why Tanstack Table:**
- Headless (full UI control)
- Sorting, filtering, pagination built-in
- Row selection, column visibility
- Excellent performance
- Framework agnostic

**Reference:** [tanstack-table-reference.md](stage2-component-specs/tanstack-table-reference.md)

**Official Docs:** https://tanstack.com/table

---

## Traceability System

**ID System:**
- `WF-XXX` - Wireframes
- `COMP-XXX` - Component specs
- `TBL-XXX` - Table specs
- `INT-XXX` - Interactions
- `AC-XXX` - Acceptance criteria (from USD)

**Mapping:**
```
Acceptance Criteria (AC-XXX)
  ↓
Wireframes (WF-XXX)
  ↓
Component Specs (COMP-XXX)
  ↓
Interactions (INT-XXX)
  ↓
Code Implementation
  ↓
Test Cases (UAT → Tests)
```

**Every design artifact must map back to acceptance criteria.**

---

## Quality Gates

Each stage has quality gates that must pass before proceeding:

- **Stage 1:** [Wireframes Quality Gate](stage1-wireframes/quality-gate.md)
- **Stage 2:** [Component Specs Quality Gate](stage2-component-specs/quality-gate.md)
- **Stage 3:** [Interactions Quality Gate](stage3-interactions/quality-gate.md)

**No stage is complete until it passes its quality gate.**

---

## AI Assistance

Each stage includes AI prompts for generating specifications:

- **Wireframes:** [stage1-wireframes/prompts.md](stage1-wireframes/prompts.md)
- **Component Specs:** [stage2-component-specs/prompts.md](stage2-component-specs/prompts.md)
- **Interactions:** [stage3-interactions/prompts.md](stage3-interactions/prompts.md)

**Use AI to:**
- Generate wireframes from acceptance criteria
- Create component specs from wireframes
- Build state diagrams from component specs
- Validate against quality gates

---

## Templates & Patterns

### Templates (Reusable Wireframe Structures)

Pre-built wireframe templates for common screen types:

- **Form Layout:** [form-layout-template.md](templates/form-layout-template.md)
- **List View:** [list-view-template.md](templates/list-view-template.md)
- **Detail View:** [detail-view-template.md](templates/detail-view-template.md)
- **Dashboard:** [dashboard-template.md](templates/dashboard-template.md)
- **Modal/Dialog:** [modal-template.md](templates/modal-template.md)

**Use templates as starting points, customize as needed.**

### Patterns (Common UI Solutions)

Reference patterns for common UI challenges:

- **Navigation:** [navigation-patterns.md](patterns/navigation-patterns.md)
- **Forms:** [form-patterns.md](patterns/form-patterns.md)
- **Feedback:** [feedback-patterns.md](patterns/feedback-patterns.md)
- **Data Display:** [data-display-patterns.md](patterns/data-display-patterns.md)
- **Responsive:** [responsive-patterns.md](patterns/responsive-patterns.md)

**Patterns show best practices and proven solutions.**

---

## Getting Started

1. **Read the workflow:** [design-workflow.md](design-workflow.md)
2. **Understand design rules:** [design-rules/](design-rules/)
3. **Review examples:**
   - [Wireframe examples](stage1-wireframes/examples.md)
   - [Component spec examples](stage2-component-specs/examples.md)
   - [Interaction examples](stage3-interactions/examples.md)
4. **Use templates:** Pick appropriate template from [templates/](templates/)
5. **Follow the stages:** Wireframes → Components → Interactions
6. **Pass quality gates:** Validate before moving to next stage

---

## Quick Start Example

**Scenario:** Design a login form

1. **Stage 1:** Create wireframe (WF-001) from acceptance criteria
   - Use [form-layout-template.md](templates/form-layout-template.md)
   - Draw ASCII wireframe
   - List components needed: Input, Button, Checkbox

2. **Stage 2:** Create component spec (COMP-001)
   - Map wireframe elements to ShadCN components
   - Specify variants: Button variant="default"
   - Define validation rules for email and password
   - Document all states: default, loading, error, success

3. **Stage 3:** Create interaction spec (INT-001)
   - Draw state diagram: Idle → Validating → Submitting → Success/Error
   - Document transitions and triggers
   - Define error handling and recovery paths

4. **Quality Gates:** Validate each stage passes before proceeding

5. **Handoff to Dev:** All specs ready for implementation

---

## Best Practices

1. **Mobile-First:** Always start with mobile wireframes, enhance for desktop
2. **Design Rules First:** Apply design system rules from the start
3. **Traceability:** Link every design element back to acceptance criteria
4. **Accessibility:** Build WCAG AA compliance into every spec
5. **Simple References:** Use component names, not code snippets
6. **Full Table Configs:** Provide complete Tanstack Table specifications
7. **State Diagrams:** Document all states, transitions, and error paths
8. **Quality Gates:** Don't skip validation checklists
9. **AI Assistance:** Leverage AI prompts to speed up work
10. **Iterate:** Design is iterative, refine based on feedback

---

## Integration with PO Framework

The Design Framework integrates seamlessly with the PO Framework:

**PO Framework Output → Design Framework Input:**
- USD (User Story Details) with Acceptance Criteria → Stage 1 Wireframes

**Design Framework Output → Code Implementation:**
- Interaction Specs → Developer Implementation
- UAT (User Acceptance Tests) → Test Cases

**Complete Flow:**
```
PRD → USM → USL → USD (AC) → Wireframes → Components → Interactions → Code → Tests
```

---

## Who Uses This Framework?

**Product Designers:** Create wireframes, component specs, interactions
**UI/UX Designers:** Define design system, create patterns
**Frontend Developers:** Implement based on complete specifications
**QA Engineers:** Generate test cases from interaction specs
**Product Owners:** Review designs against acceptance criteria
**AI Assistants:** Generate specs using provided prompts

---

## Support & Resources

**Framework Documentation:**
- [Design Workflow](design-workflow.md) - Complete workflow guide
- [Design Rules](design-rules/) - Design system rules
- [Stage 1](stage1-wireframes/) - Wireframes
- [Stage 2](stage2-component-specs/) - Component specs
- [Stage 3](stage3-interactions/) - Interactions

**External Resources:**
- [ShadCN UI Docs](https://ui.shadcn.com)
- [Tanstack Table Docs](https://tanstack.com/table)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Contributing

To improve this framework:

1. Propose changes via issues or pull requests
2. Follow existing structure and conventions
3. Update all related documentation
4. Ensure examples remain accurate
5. Maintain consistency across all stages

---

**Ready to start designing?** Begin with [design-workflow.md](design-workflow.md) for a complete walkthrough.
