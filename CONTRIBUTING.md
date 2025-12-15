# Contributing Guide

Thank you for contributing to this product! This guide will help you navigate the repository and follow the established workflows.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Repository Structure](#repository-structure)
3. [PO Automation Workflow](#po-automation-workflow)
4. [Adding a New Feature](#adding-a-new-feature)
5. [Making Changes](#making-changes)
6. [Quality Standards](#quality-standards)
7. [Code Contribution](#code-contribution)
8. [Review Process](#review-process)

---

## Getting Started

### Prerequisites

- Familiarity with the PO automation workflow (PRD → USM → USL → USD → UAT)
- Access to the repository
- Required tools installed (see `/codebase/README.md` for development setup)

### First Steps

1. **Read the README**
   ```bash
   cat README.md
   ```

2. **Explore the Framework**
   ```bash
   ls po-framework/product-po-automation-spec/
   ```

3. **Review Existing Features**
   ```bash
   ls specs/
   cat specs/index.md
   ```

4. **Understand Your Role**
   - **Product Owner:** Focus on `/discovery/` and `/specs/`
   - **Designer:** Focus on `/design/` and `/resources/design-system/`
   - **Developer:** Focus on `/codebase/` and `/specs/`
   - **QA:** Focus on `/qa/` and `/specs/`

---

## Repository Structure

```
/                           # One product, complete lifecycle
├── po-framework/           # Templates & rules (don't edit often)
├── resources/              # Product knowledge & standards
├── discovery/              # Problem space research
├── specs/                  # Feature specifications (PRD → UAT)
├── design/                 # UX/UI artifacts
├── codebase/               # Implementation
├── qa/                     # Testing & bug reports
└── tooling/                # Automation scripts
```

**Full structure explained in:** [README.md](./README.md)

---

## PO Automation Workflow

Every feature follows a 5-stage process:

```
Discovery → PRD → USM → USL → USD → UAT → Design → Development → QA
```

### Stage 1: PRD (Product Requirements Document)
- **Who:** Product Owner
- **Format:** Markdown
- **Purpose:** Define *why* and *what*
- **Quality Gate:** `/tooling/validators/validate-prd.js`

### Stage 2: USM (User Story Map)
- **Who:** Product Owner
- **Format:** Markdown
- **Purpose:** Map Activities, Steps, and Stories
- **Quality Gate:** `/tooling/validators/validate-usm.js`

### Stage 3: USL (User Story List)
- **Who:** Product Owner
- **Format:** CSV
- **Purpose:** Backlog with MoSCoW priorities
- **Quality Gate:** `/tooling/validators/validate-usl.js`

### Stage 4: USD (User Story Details)
- **Who:** Product Owner + Tech Lead
- **Format:** CSV
- **Purpose:** Acceptance criteria
- **Quality Gate:** `/tooling/validators/validate-usd.js`

### Stage 5: UAT (User Acceptance Testing)
- **Who:** QA + Product Owner
- **Format:** CSV (BDD)
- **Purpose:** Test scenarios
- **Quality Gate:** `/tooling/validators/validate-uat.js`

**Rules for each stage:** See `/po-framework/product-po-automation-spec/stageN-*/rules.md`

---

## Adding a New Feature

### Step 1: Discovery (Optional but Recommended)

Before creating specs, understand the problem:

```bash
cd discovery/
# Add user interviews, market research, competitor analysis
# Document in appropriate subdirectories
```

**Templates:** See `/discovery/README.md`

### Step 2: Generate Feature Structure

Use the generator to scaffold a new feature:

```bash
cd tooling/generators
./new-feature.sh your-feature-name
```

This creates:
```
specs/your-feature-name/
├── prd.md          # Assigned PRD-XXX
├── usm.md          # Assigned USM-XXX
├── usl.csv         # Template with proper columns
├── usd.csv         # Template with proper columns
└── uat.csv         # Template with proper columns
```

### Step 3: Fill Out PRD

```bash
cd specs/your-feature-name
# Edit prd.md following the template
```

**Reference:**
- Template: `/po-framework/product-po-automation-spec/stage1-prd/template.md`
- Rules: `/po-framework/product-po-automation-spec/stage1-prd/rules.md`
- Example: `/po-framework/product-po-automation-spec/stage1-prd/example.md`

**Required Sections:**
1. Summary
2. Problem Statement
3. Goals & Non-Goals
4. Narrative / Use Cases
5. Scope & Constraints
6. Success Metrics
7. Links
8. Technical Considerations
9. Risks & Open Questions

### Step 4: Validate PRD

```bash
cd tooling/validators
./validate-prd.js ../../specs/your-feature-name/prd.md
```

**Must pass before moving to USM.**

### Step 5: Create USM → USL → USD → UAT

Repeat for each stage:
1. Fill out the artifact using template and rules
2. Validate using appropriate validator
3. Fix issues if validation fails
4. Move to next stage

**Full validation:**
```bash
cd tooling/validators
./validate-quality-gate.js ../../specs/your-feature-name/
```

### Step 6: Update Feature Index

```bash
# Edit specs/index.md
# Add your feature to the status table
```

---

## Making Changes

### Updating an Existing Feature

1. **Determine Impact**
   - PRD change → Affects all downstream (USM, USL, USD, UAT)
   - USM change → Affects USL, USD, UAT
   - USL change → Affects USD, UAT
   - USD change → Affects UAT

2. **Update PRD**
   ```bash
   cd specs/your-feature-name
   # Edit prd.md
   # Increment version number
   # Update last_updated date
   ```

3. **Cascade Changes**
   - Update USM if Activities/Steps changed
   - Update USL if story priorities changed
   - Update USD if acceptance criteria changed
   - Update UAT if test scenarios changed

4. **Validate**
   ```bash
   cd tooling/validators
   ./validate-quality-gate.js ../../specs/your-feature-name/
   ```

5. **Mark Downstream as "Needs Update"**
   - In `/specs/index.md`, mark affected stages with 🔄

### Adding Design Artifacts

1. **Create Designs**
   - Wireframes → `/design/wireframes/your-feature-name/`
   - Hi-Fi Mockups → `/design/hi-fi/your-feature-name/`

2. **Link in PRD**
   ```markdown
   ## 7. Links
   - design_figma: https://figma.com/file/...
   - wireframe_text: /design/wireframes/your-feature-name/
   ```

3. **Document Decisions**
   - Add to `/design/design-decisions.md`

### Adding Code

1. **Review Specs**
   - Read PRD for context
   - Read USD for acceptance criteria
   - Read UAT for test scenarios

2. **Implement**
   - Reference story IDs in commits
   - Reference ACs in code comments
   - Follow tech stack in `/resources/tech-stack/`

3. **Test**
   - Write unit tests
   - Validate against UAT scenarios

4. **Pull Request**
   - Link to story IDs
   - Checklist for ACs
   - Screenshots if UI changes

---

## Quality Standards

### PRD Quality Gate

A PRD must:
- ✅ Have all 9 mandatory sections
- ✅ Use proper ID format (PRD-XXX)
- ✅ Have specific, observable problems (not vague)
- ✅ Have measurable goals
- ✅ Have ≥2 non-goals
- ✅ Link to discovery docs (if applicable)
- ✅ Have risks with mitigations
- ✅ Have questions with owners

### USL Quality Gate (INVEST)

Stories must be:
- **I**ndependent - Can be implemented separately
- **N**egotiable - Not a rigid contract
- **V**aluable - Clear user/business value
- **E**stimable - Concrete enough to estimate
- **S**mall - Fits in a sprint
- **T**estable - Clear pass/fail criteria

### UAT Quality Gate (FIRST)

Tests must be:
- **F**ast - Run quickly
- **I**ndependent - Don't depend on other tests
- **R**epeatable - Consistent results
- **S**elf-validating - Clear pass/fail
- **T**imely - Written early enough

### Code Quality

- ✅ Implements USD acceptance criteria
- ✅ Has test coverage (unit + integration)
- ✅ Follows tech stack standards
- ✅ References story IDs
- ✅ Passes CI/CD checks

---

## Code Contribution

### Branch Naming

```
feature/ST-001-shipment-overview
bugfix/BUG-042-filter-date-range
refactor/improve-search-performance
docs/update-contributing-guide
```

### Commit Messages

```
feat(shipment): implement list view (ST-001)

- Add shipment table component
- Implement filters by POL/POD
- Add search by booking number

Implements: ST-001, ST-002
PRD: /specs/shipment-overview/prd.md
USD: AC-001 to AC-017
```

**Format:**
```
<type>(<scope>): <subject> (STORY-ID)

<body>

Implements: STORY-IDs
PRD: path/to/prd.md
USD: AC-XXX to AC-YYY
```

**Types:** `feat`, `fix`, `refactor`, `docs`, `test`, `chore`

### Pull Request Template

```markdown
## Description
[Brief description]

## Related Specs
- **Stories:** ST-001, ST-002
- **PRD:** /specs/your-feature/prd.md
- **USD:** /specs/your-feature/usd.csv
- **UAT:** /specs/your-feature/uat.csv

## Acceptance Criteria
- [x] AC-001: Description
- [x] AC-002: Description
- [ ] AC-003: Not implemented (reason)

## Testing
- [x] Unit tests pass
- [x] Integration tests pass
- [x] UAT scenarios TC-001, TC-002 pass
- [ ] E2E tests (pending)

## Screenshots
[If UI changes]

## Checklist
- [ ] Code follows tech stack standards
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

---

## Review Process

### For Specs (PRD, USM, USL, USD, UAT)

1. **Self-Review**
   - Run validators
   - Check all sections complete
   - Verify links and references

2. **Peer Review**
   - Another PO or tech lead reviews
   - Checks for clarity, completeness, feasibility

3. **Stakeholder Review**
   - Design reviews designs
   - Tech Lead reviews technical feasibility
   - QA reviews testability

4. **Approval**
   - Update status from `draft` to `approved`
   - Increment version if major changes

### For Code

1. **Automated Checks**
   - Linters pass
   - Tests pass
   - Build succeeds
   - Validators pass (if specs changed)

2. **Code Review**
   - At least one approval required
   - Checks:
     - ACs implemented correctly
     - Code quality
     - Test coverage
     - No regressions

3. **QA Review**
   - Execute UAT scenarios
   - Document results in `/qa/test-runs/`
   - Create bug reports if failures

4. **Merge**
   - Squash and merge to `main`
   - Deploy via CI/CD

---

## Common Tasks

### I want to propose a new feature
1. Start in `/discovery/` - document the problem
2. Use generator: `tooling/generators/new-feature.sh feature-name`
3. Fill out PRD
4. Share with team for feedback

### I want to update an existing feature
1. Edit the appropriate artifact in `/specs/{feature}/`
2. Increment version number
3. Cascade changes to downstream artifacts
4. Re-validate

### I want to fix a bug
1. Check if bug already reported in `/qa/bug-reports/`
2. If not, create `BUG-XXX-description.md`
3. Link to failing UAT test case
4. Create branch: `bugfix/BUG-XXX-description`
5. Fix and submit PR

### I want to add a design
1. Create designs in Figma
2. Export to `/design/wireframes/` or `/design/hi-fi/`
3. Link in PRD section 7
4. Document decisions in `/design/design-decisions.md`

### I want to run tests
```bash
# Validate specs
cd tooling/validators
./validate-quality-gate.js ../../specs/{feature}/

# Run unit tests
cd codebase/apps/web
npm test

# Execute UAT
cd qa/test-runs
# Copy UAT and update test_result column
```

---

## Getting Help

- **Framework Questions:** See `/po-framework/product-po-automation-spec/README.md`
- **Tooling Issues:** See `/tooling/README.md`
- **Process Questions:** Ask in #product-team Slack channel
- **Technical Issues:** Ask in #engineering Slack channel

---

## Code of Conduct

- Be respectful and constructive
- Follow established processes
- Ask questions when unsure
- Document decisions
- Keep quality high

---

Thank you for contributing! 🎉
