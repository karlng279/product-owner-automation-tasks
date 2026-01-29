# Plan: Convert PO Framework from CSV to Markdown

## Goal
Convert stages 3-5 (USL, USD, UAT) from CSV format to Markdown format:
- **USL**: Single aggregate MD file (all stories in one readable file)
- **USD**: One MD file per story (acceptance criteria)
- **UAT**: One MD file per story (test cases)

## Why This Change
- **CSV pain points**: Hard to read/edit (900+ char rows), difficult diffs, merge conflicts
- **Benefits of MD**: Human-readable, excellent version control diffs, easy to edit

---

## File Templates

### USL (Single File) - `usl.md`

```markdown
# User Story List

**PRD:** PRD-001 - Feature Name
**USM:** USM-001
**Last Updated:** 2025-01-21

## Summary

| Priority | Count | Story Points |
|----------|-------|--------------|
| Must-have | 10 | 35 |
| Should-have | 5 | 15 |

## Stories

### Homepage Module

| ID | Summary | Priority | Status | Points |
|----|---------|----------|--------|--------|
| ST-001 | Land on homepage | Must-have | Draft | 3 |
| ST-002 | View API categories | Must-have | Draft | 2 |

#### ST-001: Land on homepage and view value proposition

- **Activity:** ACT-001 / **Step:** STEP-001
- **Tags:** homepage, discovery, MVP
- **Dependencies:** TECH-API-01
- **Jira:** (none)

> As a developer, I want to land on a clear homepage with value proposition so that I can quickly understand what the APIs offer.

#### ST-002: View API categories overview
...
```

### USD (Per Story) - `usd/ST-001.md`

```markdown
# ST-001: Acceptance Criteria

**Story:** Land on homepage and view value proposition
**Last Updated:** 2025-01-21

---

## UI Elements
- **AC-001:** Homepage contains hero section with clear headline
- **AC-002:** API categories displayed as cards (Tracking, Schedules, Booking)
- **AC-003:** 'View Documentation' CTA button visible

## UI Behavior
- **AC-004:** Hero section loads immediately without delay
- **AC-005:** Clicking CTA navigates to API Reference page

## Logic
- **AC-006:** Homepage is publicly accessible (no auth required)
- **AC-007:** Each API category shows brief description

## Special Notes
- **AC-008:** Hero copy follows brand voice guidelines
- **AC-009:** Mobile viewport shows stacked layout

## Non-Functional Requirements
- **NFR-001:** Page loads in <2 seconds for 95% of users
- **NFR-002:** Lighthouse performance score >= 90
```

### UAT (Per Story) - `uat/ST-001.md`

```markdown
# ST-001: Test Cases

**Story:** Land on homepage and view value proposition
**Last Updated:** 2025-01-21

---

## TC-001: View homepage with API categories (P0)

**Scenario:** View homepage with API categories
**Precondition:** None

| Step | Description |
|------|-------------|
| **Given** | I am a developer visiting the API Portal |
| **When** | I land on the homepage |
| **Then** | I see a hero section, 4 API category cards, and a CTA button |

- **AC References:** AC-001, AC-002, AC-003
- **Test Result:** Not Tested
- **Notes:** Happy path for homepage first impression

---

## TC-002: Navigate to API Reference (P0)

**Scenario:** Navigate from homepage to API Reference
**Precondition:** User is on homepage

| Step | Description |
|------|-------------|
| **Given** | I am on the homepage |
| **When** | I click the 'View Documentation' CTA |
| **Then** | I am navigated to the API Reference page |

- **AC References:** AC-005
- **Test Result:** Not Tested
- **Notes:** Validates primary CTA
```

---

## Folder Structure Change

**Before (CSV):**
```
features/{feature}/po/
├── prd.md
├── usm.md
├── usl.csv      # All stories (hard to read)
├── usd.csv      # All ACs (900+ char rows)
└── uat.csv      # All tests
```

**After (Markdown):**
```
features/{feature}/po/
├── prd.md
├── usm.md
├── usl.md           # All stories (readable table + details)
├── usd/
│   ├── ST-001.md    # ACs for story 1
│   ├── ST-002.md    # ACs for story 2
│   └── ...
└── uat/
    ├── ST-001.md    # Tests for story 1
    ├── ST-002.md    # Tests for story 2
    └── ...
```

---

## Files to Modify

### po-framework/stage3-usl/
| File | Action |
|------|--------|
| [rules.md](po-framework/stage3-usl/rules.md) | Rewrite for Markdown format (single file with tables) |
| [example.csv](po-framework/stage3-usl/example.csv) | Replace with `example.md` |
| [prompts.md](po-framework/stage3-usl/prompts.md) | Update prompts for MD generation |
| [quality-gate.md](po-framework/stage3-usl/quality-gate.md) | Update checklist for MD validation |

### po-framework/stage4-usd/
| File | Action |
|------|--------|
| [rules.md](po-framework/stage4-usd/rules.md) | Rewrite for per-story MD files in `usd/` folder |
| [example.csv](po-framework/stage4-usd/example.csv) | Replace with `example.md` (single story AC example) |
| [prompts.md](po-framework/stage4-usd/prompts.md) | Update for per-story MD generation |
| [quality-gate.md](po-framework/stage4-usd/quality-gate.md) | Update for MD file validation |

### po-framework/stage5-uat/
| File | Action |
|------|--------|
| [rules.md](po-framework/stage5-uat/rules.md) | Rewrite for per-story MD files in `uat/` folder |
| [example.csv](po-framework/stage5-uat/example.csv) | Replace with `example.md` (single story test example) |
| [prompts.md](po-framework/stage5-uat/prompts.md) | Update for per-story MD generation |
| [quality-gate.md](po-framework/stage5-uat/quality-gate.md) | Update for MD file validation |

### po-framework/ (other files)
| File | Action |
|------|--------|
| [po-framework/framework-structure.md](po-framework/framework-structure.md) | Update structure diagram to show `usd/` and `uat/` folders |
| [po-framework/README.md](po-framework/README.md) | Update format descriptions (CSV → MD) |

### Root documentation
| File | Action |
|------|--------|
| [README.md](README.md) | Update PO Framework table (CSV → Markdown), update folder structure |
| [GETTING_STARTED.md](GETTING_STARTED.md) | Update references to CSV files |
| [CONTRIBUTING.md](CONTRIBUTING.md) | Update artifact format descriptions |

### design-framework/ (references USD as input)
| File | Action |
|------|--------|
| [design-framework/README.md](design-framework/README.md) | Update input format reference (USD.csv → usd/*.md) |
| [design-framework/design-workflow.md](design-framework/design-workflow.md) | Update "Input: USD" references to new MD format |
| [design-framework/stage1-wireframes/rules.md](design-framework/stage1-wireframes/rules.md) | Update USD input format references |
| [design-framework/stage1-wireframes/prompts.md](design-framework/stage1-wireframes/prompts.md) | Update prompts to read from MD instead of CSV |

### codebase-framework/ (references USD/UAT for code generation)
| File | Action |
|------|--------|
| [codebase-framework/README.md](codebase-framework/README.md) | Update USD/UAT format references |
| [codebase-framework/FRAMEWORK_INTEGRATION.md](codebase-framework/FRAMEWORK_INTEGRATION.md) | Update CSV examples to MD format |
| [codebase-framework/QUICK_START.md](codebase-framework/QUICK_START.md) | Update artifact references |

### features/
| File | Action |
|------|--------|
| [features/README.md](features/README.md) | Update folder structure documentation |
| [features/FEATURE_INDEX.md](features/FEATURE_INDEX.md) | Update artifact format references |

### New files to create
| File | Purpose |
|------|---------|
| `po-framework/stage3-usl/example.md` | Complete USL example with all stories |
| `po-framework/stage3-usl/template.md` | Blank template for new USL files |
| `po-framework/stage4-usd/example.md` | Single story AC example |
| `po-framework/stage4-usd/template.md` | Blank template for USD files |
| `po-framework/stage5-uat/example.md` | Single story test case example |
| `po-framework/stage5-uat/template.md` | Blank template for UAT files |

---

## Implementation Order

### Phase 1: PO Framework Core (stages 3-5)

1. **Stage 3 - USL (aggregate MD file)**
   - Create `example.md` and `template.md`
   - Rewrite `rules.md` for new format
   - Update `prompts.md` and `quality-gate.md`
   - Delete `example.csv`

2. **Stage 4 - USD (per-story MD files)**
   - Create `example.md` and `template.md`
   - Rewrite `rules.md` for `usd/` folder structure
   - Update `prompts.md` and `quality-gate.md`
   - Delete `example.csv`

3. **Stage 5 - UAT (per-story MD files)**
   - Create `example.md` and `template.md`
   - Rewrite `rules.md` for `uat/` folder structure
   - Update `prompts.md` and `quality-gate.md`
   - Delete `example.csv`

4. **PO Framework documentation**
   - Update `framework-structure.md` with new folder layout
   - Update `po-framework/README.md`

### Phase 2: Downstream Frameworks

5. **Design Framework updates**
   - Update `design-framework/README.md` (USD input format)
   - Update `design-framework/design-workflow.md`
   - Update `stage1-wireframes/rules.md` and `prompts.md`

6. **Codebase Framework updates**
   - Update `codebase-framework/README.md`
   - Update `FRAMEWORK_INTEGRATION.md` (remove CSV examples, add MD)
   - Update `QUICK_START.md`

### Phase 3: Root & Features Documentation

7. **Root documentation**
   - Update `README.md` (PO Framework table, folder structure)
   - Update `GETTING_STARTED.md`
   - Update `CONTRIBUTING.md`

8. **Features documentation**
   - Update `features/README.md`
   - Update `features/FEATURE_INDEX.md`

---

## Verification

After implementation:

**PO Framework:**
1. All 3 stages have `example.md` and `template.md` files
2. `rules.md` files document the new Markdown structure
3. `prompts.md` files generate valid Markdown output
4. `quality-gate.md` checklists validate Markdown format
5. `framework-structure.md` shows correct folder layout

**Cross-Framework Consistency:**
6. Design Framework references `usd/*.md` files as input (not CSV)
7. Codebase Framework examples use Markdown format
8. Root README shows correct formats in PO Framework table
9. No remaining references to `.csv` for USL/USD/UAT

**Grep Check:**
```bash
# Should return 0 results for PO framework CSV references
grep -r "\.csv" po-framework/ design-framework/ codebase-framework/ README.md --include="*.md"
```

---

## Out of Scope (Future)
- Migration script for existing features (`one-api-portal-mvp`)
- Automated tooling/linting
- CI validation
