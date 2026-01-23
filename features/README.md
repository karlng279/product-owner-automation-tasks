# Specs

This directory contains concrete product specifications following the PO Automation workflow (PRD → USM → USL → USD → UAT).

## Directory Structure

```
specs/
├── {feature-name}/         # One folder per feature
│   ├── prd.md              # Stage 1: Product Requirements Document
│   ├── usm.md              # Stage 2: User Story Map
│   ├── usl.md              # Stage 3: User Story List (all stories in one file)
│   ├── usd/                # Stage 4: User Story Details (one file per story)
│   │   ├── ST-001.md
│   │   └── ST-002.md
│   └── uat/                # Stage 5: UAT Test Cases (one file per story)
│       ├── ST-001.md
│       └── ST-002.md
├── {another-feature}/
│   └── ...
└── index.md                # Table of contents for all features
```

## Feature Naming Convention

Feature folder names should be:
- **Lowercase** with hyphens (kebab-case)
- **Descriptive** but concise
- **Unique** across the product

**Examples:**
- ✅ `shipment-overview`
- ✅ `booking-flow`
- ✅ `document-upload`
- ❌ `Feature1` (not descriptive)
- ❌ `Shipment_Overview` (wrong case)

## PO Automation Workflow

Each feature follows a structured 5-stage process:

### Stage 1: PRD (prd.md)
**Purpose:** Single source of truth for *why* and *what*

**Contains:**
- Problem statement & pain points
- Business & user goals
- Scope & constraints
- Success metrics
- Risks & open questions

**ID Format:** `id: PRD-001` (inside file)

**Template:** `/po-framework/product-po-automation-spec/stage1-prd/`

---

### Stage 2: USM (usm.md)
**Purpose:** Bridge between PRD and backlog via Activities, Steps, and story IDs

**Contains:**
- User Activities (3-7 per feature)
- Steps per Activity (2-6 per Activity)
- Story ID references (ST-001, ST-002, etc.)

**ID Format:** `id: USM-001` (inside file)

**Template:** `/po-framework/product-po-automation-spec/stage2-usm/`

---

### Stage 3: USL (usl.md)
**Purpose:** Backlog index with MoSCoW prioritization

**Contains:**
- Summary table with story counts and points
- Stories by module tables with anchor links
- Detailed story entries with metadata

**Format:** Single Markdown file (`usl.md`)

**Template:** `/po-framework/stage3-usl/`

---

### Stage 4: USD (usd/*.md)
**Purpose:** Acceptance criteria and implementation details

**Contains:**
- Structured acceptance criteria (UI Elements, UI Behavior, Logic, Special Notes)
- Non-functional requirements with metrics
- Dependencies
- Effort estimates
- Traceability to UAT

**Format:** One Markdown file per story in `usd/` folder (e.g., `usd/ST-001.md`)

**Template:** `/po-framework/stage4-usd/`

---

### Stage 5: UAT (uat/*.md)
**Purpose:** BDD test scenarios (Given/When/Then)

**Contains:**
- Test cases with Given/When/Then tables
- AC references for traceability
- Test results (Pass/Failed/Not Tested/Blocked)
- Summary table and AC Coverage Matrix

**Format:** One Markdown file per story in `uat/` folder (e.g., `uat/ST-001.md`)

**Template:** `/po-framework/stage5-uat/`

---

## Creating a New Feature

### Option 1: Use Generator (Recommended)
```bash
cd tooling/generators
./new-feature.sh feature-name
```

This will:
1. Create `/specs/feature-name/` folder
2. Copy templates from `/po-framework/`
3. Set up proper IDs
4. Update `/specs/index.md`

### Option 2: Manual Creation
1. Create folder: `mkdir specs/feature-name`
2. Copy templates from `/po-framework/product-po-automation-spec/`
3. Rename to: `prd.md`, `usm.md`, `usl.md`, and create `usd/` and `uat/` folders
4. Assign next available IDs (check existing features)
5. Update `/specs/index.md`

## ID Assignment

IDs are assigned sequentially across ALL features:

| Feature | PRD | USM | USL | USD | UAT | Stories |
|---------|-----|-----|-----|-----|-----|---------|
| shipment-overview | PRD-001 | USM-001 | USL-001 | USD-001 | UAT-001 | ST-001 to ST-008 |
| booking-flow | PRD-002 | USM-002 | USL-002 | USD-002 | UAT-002 | ST-009 to ST-020 |
| document-upload | PRD-003 | USM-003 | USL-003 | USD-003 | UAT-003 | ST-021 to ST-025 |

**Important:** Story IDs (ST-XXX) are global across all features to avoid conflicts.

## Quality Gates

Before moving to the next stage, validate with quality gates:

```bash
cd tooling/validators
./validate-quality-gate.js ../specs/feature-name/
```

### PRD → USM
- [ ] All mandatory PRD sections complete
- [ ] Problems are specific and observable
- [ ] Goals are measurable
- [ ] Non-goals populated (>=2 items)

### USM → USL
- [ ] Activities support PRD user goals
- [ ] Steps form coherent flows
- [ ] Story IDs are valid and will be defined in USL

### USL → USD
- [ ] Every story in USL has USD row
- [ ] Stories are INVEST-compliant
- [ ] MVP derivable from MoSCoW priority

### USD → UAT
- [ ] Acceptance criteria are atomic and testable
- [ ] NFRs are story-specific
- [ ] Dependencies are explicit

### UAT → Implementation
- [ ] All Must-have stories have happy-path scenarios
- [ ] Given/When/Then are clear
- [ ] AC references are valid

## Feature Status Tracking

Track feature progress in `/specs/index.md`:

| Feature | PRD | USM | USL | USD | UAT | Design | Dev | QA | Status |
|---------|-----|-----|-----|-----|-----|--------|-----|-------|--------|
| shipment-overview | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | 🚧 | ⏳ | In Development |
| booking-flow | ✅ | ✅ | 🚧 | ⏳ | ⏳ | ⏳ | ⏳ | ⏳ | Planning |

**Legend:**
- ✅ Complete
- 🚧 In Progress
- ⏳ Not Started
- ❌ Blocked

## Best Practices

### Do:
- ✅ Follow the 5-stage workflow sequentially
- ✅ Validate at each quality gate
- ✅ Link discovery docs in PRD
- ✅ Reference design files in PRD
- ✅ Keep IDs consistent across stages
- ✅ Update index.md when status changes

### Don't:
- ❌ Skip stages (e.g., PRD → USD without USM)
- ❌ Create specs without discovery
- ❌ Reuse IDs across features
- ❌ Mark stage complete without quality gate validation
- ❌ Change PRD without updating downstream artifacts

## Traceability

Every artifact links back through IDs:

```
PRD-001 (Shipment Overview)
  └─> USM-001
      └─> ACT-001 (Monitor shipments)
          └─> STEP-001 (Open overview)
              └─> ST-001 (Open Shipment Overview page)
                  └─> USD-001 (row for ST-001 with AC-001, AC-002, AC-003)
                      └─> UAT-001 (TC-001 tests AC-001, AC-002, AC-003)
```

## Related Directories

- `/po-framework/` - Templates and rules for each stage
- `/discovery/` - Problem space research that informs PRDs
- `/design/` - UX/UI artifacts referenced in PRDs
- `/codebase/` - Implementation of these specs
- `/qa/` - Execution of UAT test cases
