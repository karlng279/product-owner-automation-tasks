# Product Repository - Smart Compliance Hub

This repository contains the complete lifecycle artifacts for the product, from discovery and requirements through design, implementation, and testing.

## 🏗️ Repository Structure

```
/                               # Repo root = one product
│
├── po-framework/               # Global PO automation templates & rules
│   └── product-po-automation-spec/
│       ├── stage1-prd/         # PRD templates, rules, examples
│       ├── stage2-usm/         # USM templates, rules, examples
│       ├── stage3-usl/         # USL templates, rules, examples
│       ├── stage4-usd/         # USD templates, rules, examples
│       └── stage5-uat/         # UAT templates, rules, examples
│
├── resources/                  # Product-specific references & knowledge
│   ├── business-models/        # BMC, monetization, startup model
│   ├── domain-knowledge/       # Shipping/compliance notes, glossaries
│   ├── tech-stack/             # Chosen FE/BE/infra for THIS product
│   ├── pm-playbooks/           # Backlog rules, interview guides, etc.
│   └── design-system/          # Design tokens, UI patterns used here
│
├── discovery/                  # Problem space & market understanding
│   ├── business-model/         # Business model canvas, monetization
│   ├── market-research/        # User interviews, surveys, data
│   ├── competitor-analysis/    # Competitive landscape analysis
│   └── notes.md                # General discovery notes
│
├── specs/                      # Concrete PRD→UAT for this product
│   ├── features/               # One folder per feature
│   │   ├── {feature-name}/
│   │   │   ├── prd.md          # Stage 1: Product Requirements
│   │   │   ├── usm.md          # Stage 2: User Story Map
│   │   │   ├── usl.csv         # Stage 3: User Story List
│   │   │   ├── usd.csv         # Stage 4: User Story Details
│   │   │   └── uat.csv         # Stage 5: UAT Test Cases
│   │   └── ...
│   └── index.md                # Table of contents for all features
│
├── design/                     # UX & UI for this product
│   ├── wireframes/             # Exported PNG/PDF from Figma
│   ├── hi-fi/                  # Final UI mocks per feature
│   ├── prototypes/             # Links/notes about interactive prototypes
│   └── design-decisions.md     # Key design decisions and rationale
│
├── codebase/                   # Actual implementation
│   ├── apps/
│   │   ├── web/                # Frontend application (e.g., Next.js)
│   │   └── api/                # Backend service
│   ├── packages/               # Shared libraries (UI, domain, utilities)
│   └── infra/                  # IaC, Docker, k8s manifests, etc.
│
├── qa/                         # Testing artifacts & execution history
│   ├── test-runs/              # Dated copies of UAT with test_result updated
│   ├── bug-reports/            # Markdown summaries or links to Jira
│   └── regression-suites/      # Curated UAT subsets for regression
│
└── tooling/                    # Scripts & automation for the repo
    ├── generators/             # CLI to scaffold new features from framework
    ├── validators/             # Linters/checkers for PRD/USL/CSV structure
    └── pipelines/              # CI workflows, GitHub Actions, etc.
```

## 🚀 Quick Start

### For Product Owners

1. **Explore Discovery** - Start in `/discovery/` to understand the problem space
2. **Create Feature Spec** - Use `/tooling/generators/` to scaffold a new feature from framework templates
3. **Follow PO Workflow** - Progress through PRD → USM → USL → USD → UAT using `/po-framework/` rules

### For Designers

1. **Review Feature PRDs** - Check `/specs/features/{feature-name}/prd.md` for requirements
2. **Create Wireframes** - Add to `/design/wireframes/`
3. **Link in PRD** - Update PRD with design links

### For Developers

1. **Review USD** - Check `/specs/features/{feature-name}/usd.csv` for acceptance criteria
2. **Implement** - Work in `/codebase/`
3. **Link to Stories** - Reference story IDs in commits and PRs

### For QA

1. **Execute UAT** - Use `/specs/features/{feature-name}/uat.csv` as test cases
2. **Update Results** - Copy to `/qa/test-runs/` and update `test_result` column
3. **Report Bugs** - Document in `/qa/bug-reports/`

## 📋 PO Automation Workflow

This repository follows a structured 5-stage PO automation process:

```
Discovery → PRD → USM → USL → USD → UAT → Implementation → Testing
```

### Stage 1 - PRD (Product Requirements Document)
- **Purpose:** Single source of truth for *why* and *what*
- **Format:** Markdown
- **Location:** `/specs/features/{feature-name}/prd.md`
- **Template:** `/po-framework/product-po-automation-spec/stage1-prd/`

### Stage 2 - USM (User Story Map)
- **Purpose:** Bridge between PRD and backlog via Activities and Steps
- **Format:** Markdown
- **Location:** `/specs/features/{feature-name}/usm.md`
- **Template:** `/po-framework/product-po-automation-spec/stage2-usm/`

### Stage 3 - USL (User Story List)
- **Purpose:** Backlog index with MoSCoW prioritization
- **Format:** CSV
- **Location:** `/specs/features/{feature-name}/usl.csv`
- **Template:** `/po-framework/product-po-automation-spec/stage3-usl/`

### Stage 4 - USD (User Story Details)
- **Purpose:** Acceptance criteria and implementation details
- **Format:** CSV
- **Location:** `/specs/features/{feature-name}/usd.csv`
- **Template:** `/po-framework/product-po-automation-spec/stage4-usd/`

### Stage 5 - UAT (User Acceptance Testing)
- **Purpose:** BDD test scenarios (Given/When/Then)
- **Format:** CSV
- **Location:** `/specs/features/{feature-name}/uat.csv`
- **Template:** `/po-framework/product-po-automation-spec/stage5-uat/`

## 🛠️ Tooling

### Scaffold New Feature
```bash
cd tooling/generators
./new-feature.sh feature-name
```

### Validate PRD
```bash
cd tooling/validators
./validate-prd.js ../specs/features/feature-name/prd.md
```

### Run Quality Gates
```bash
cd tooling/validators
./validate-quality-gate.js ../specs/features/feature-name/
```

## 📖 Documentation

- **Framework Rules:** See `/po-framework/product-po-automation-spec/README.md`
- **Feature Index:** See `/specs/index.md`
- **Contributing Guide:** See `CONTRIBUTING.md`

## 🤝 Contributing

1. Create a new feature using the generator in `/tooling/generators/`
2. Follow the PO automation workflow (PRD → USM → USL → USD → UAT)
3. Validate using quality gates in `/tooling/validators/`
4. Submit PR with links to all stage artifacts

## 📝 License

[Add your license here]

## 🔗 Related Resources

- **PO Framework Documentation:** `/po-framework/README.md`
- **Design System:** `/resources/design-system/`
- **Tech Stack:** `/resources/tech-stack/`
- **Domain Knowledge:** `/resources/domain-knowledge/`
