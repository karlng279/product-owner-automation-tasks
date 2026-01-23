# Naming Conventions

## Overview

Consistent naming improves collaboration and maintainability across PO specs, design, and code.

## Component Naming

### React Components (Code)

**Format:** PascalCase

**Examples:**
```
Button.tsx
UserProfile.tsx
DataTable.tsx
ShipmentCard.tsx
NavigationMenu.tsx
```

**Rules:**
- Start with capital letter
- No spaces or hyphens
- Descriptive names (not generic like `Component1`)
- Avoid abbreviations unless well-known (API, URL, ID)

### Component IDs (Design Specs)

**Format:** `COMP-XXX`

**Examples:**
```
COMP-001: LoginButton
COMP-002: UserProfileCard
COMP-003: ShipmentTable
COMP-004: NavigationHeader
```

**Rules:**
- Sequential numbering per feature
- Descriptive suffix
- Referenced in design specs and code comments

## File Naming

### Source Files

**React Components:**
- Format: PascalCase + `.tsx` or `.jsx`
- Examples: `Button.tsx`, `UserCard.tsx`

**Hooks:**
- Format: camelCase + `.ts` or `.js`
- Start with `use`
- Examples: `useAuth.ts`, `useShipments.ts`

**Utils/Helpers:**
- Format: kebab-case + `.ts` or `.js`
- Examples: `format-date.ts`, `api-client.ts`

**Types/Interfaces:**
- Format: PascalCase + `.ts`
- Examples: `User.ts`, `Shipment.ts`, `ApiResponse.ts`

**Tests:**
- Format: Match source file + `.test.tsx` or `.spec.tsx`
- Examples: `Button.test.tsx`, `useAuth.test.ts`

### Design Files

**Wireframes:**
- Format: `wireframes.md` (single file per feature)
- IDs: `WF-001`, `WF-002`

**Component Specs:**
- Format: `components.md` (single file per feature)
- IDs: `COMP-001`, `COMP-002`

**Interactions:**
- Format: `interactions.md` (single file per feature)
- IDs: `INT-001`, `INT-002`

### PO Files

- `prd.md` - Product Requirements Document
- `usm.md` - User Story Map
- `usl.md` - User Story List
- `usd/ST-XXX.md` - User Story Details (per-story files)
- `uat/ST-XXX.md` - User Acceptance Tests (per-story files)

## CSS Class Naming

### Tailwind Classes (Preferred)

Use Tailwind utility classes directly:
```html
<div class="bg-primary text-primary-foreground px-4 py-2 rounded-md">
  Content
</div>
```

### Custom Classes (When Needed)

**Format:** kebab-case

**Examples:**
```css
.card-header { }
.navigation-item { }
.data-table-row { }
```

**BEM (Optional):**
```css
.card { }
.card__header { }
.card__body { }
.card--featured { }
```

**Rules:**
- Use kebab-case for multi-word names
- Prefix custom classes to avoid conflicts (e.g., `app-button`)
- Avoid generic names like `.item` or `.content`

## Variable Naming

### JavaScript/TypeScript

**Format:** camelCase

**Examples:**
```typescript
const userName = "John";
const isLoading = false;
const shipmentList = [];
const fetchUserData = () => {};
```

**Boolean variables:**
- Prefix with `is`, `has`, `should`, `can`
- Examples: `isActive`, `hasPermission`, `shouldShow`

**Constants:**
- Format: SCREAMING_SNAKE_CASE
- Examples: `MAX_RETRY_COUNT`, `API_BASE_URL`

### CSS Variables

**Format:** kebab-case with `--` prefix

**Examples:**
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --foreground: 222.2 84% 4.9%;
  --border-radius: 0.5rem;
}
```

## ID Conventions (Traceability)

### PO Stage IDs

| Type | Format | Scope | Example |
|------|--------|-------|---------|
| PRD | `PRD-XXX` | Per feature | `PRD-001` |
| USM | `USM-XXX` | Per feature | `USM-001` |
| Story | `ST-XXX` | Global | `ST-001` |
| Activity | `ACT-XXX` | Per USM | `ACT-001` |
| Step | `STEP-XXX` | Per USM | `STEP-001` |
| AC | `AC-XXX` | Per USD | `AC-001` |
| Test | `TC-XXX` | Per UAT | `TC-001` |

### Design Stage IDs

| Type | Format | Scope | Example |
|------|--------|-------|---------|
| Wireframe | `WF-XXX` | Per feature | `WF-001` |
| Screen | `SCR-XXX` | Per feature | `SCR-001` |
| Component | `COMP-XXX` | Per feature | `COMP-001` |
| Table | `TBL-XXX` | Per feature | `TBL-001` |
| Interaction | `INT-XXX` | Per feature | `INT-001` |

### Code Stage IDs

Use file paths as identifiers:
- `components/Button.tsx`
- `hooks/useAuth.ts`
- Reference design IDs in comments: `// COMP-001`

## Folder Naming

### Feature Folders

**Format:** kebab-case

**Examples:**
```
features/
├── one-api-portal-mvp/
├── shipment-overview/
├── user-authentication/
└── booking-flow/
```

**Rules:**
- Lowercase
- Hyphens for spaces
- Descriptive names
- Avoid abbreviations

### Framework Folders

**Format:** kebab-case

**Examples:**
```
design-framework/
├── stage1-wireframes/
├── stage2-component-specs/
├── stage3-interactions/
└── design-rules/
```

## Branch Naming (Git)

**Format:** `{type}/{description}`

**Types:**
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation
- `refactor/` - Code refactoring
- `test/` - Testing

**Examples:**
```
feature/user-authentication
fix/login-button-alignment
docs/update-readme
refactor/shipment-table-component
```

## Terminology Consistency

### Standard Terms

Use consistent terminology across specs, design, and code:

| Concept | Term | Don't Use |
|---------|------|-----------|
| User login | Authentication | Sign-in, Login (verb) |
| User account | Profile | Account, Settings |
| Data list | Table | Grid, List |
| Remove item | Delete | Remove, Erase |
| Create new | Create | Add, New |
| Modify | Update | Edit, Change |
| View details | View | Show, Display |

### Domain-Specific Terms

Define project-specific terms in a glossary:
- Shipment, Booking, Container (logistics)
- Patient, Prescription (healthcare)
- Order, Cart, Checkout (e-commerce)

## Quality Gates

- [ ] Component names use PascalCase
- [ ] Files use appropriate casing (PascalCase for components, kebab-case for utilities)
- [ ] Variables use camelCase
- [ ] CSS classes use kebab-case
- [ ] IDs follow format (ST-XXX, COMP-XXX, etc.)
- [ ] Folder names use kebab-case
- [ ] Terminology is consistent across all artifacts
- [ ] No generic names (Component1, utils, temp)

## Examples

### Good Naming

**Component:**
```
File: ShipmentCard.tsx
Component: ShipmentCard
ID: COMP-003
Variable: shipmentData
Class: shipment-card (if custom CSS needed)
```

**Feature:**
```
Folder: shipment-overview/
Files: wireframes.md, components.md
Story: ST-015
Wireframe: WF-001
Component: COMP-001
```

### Bad Naming

**Component:**
```
❌ File: component1.tsx
❌ Component: comp
❌ ID: c1
❌ Variable: data, temp
❌ Class: myClass
```

## Related Rules

- [Component Standards](component-standards.md) - Component structure
- [Traceability System](../../TRACEABILITY_SYSTEM.md) - ID referencing

---

**Remember:** Good naming makes code self-documenting and improves team collaboration.
