# Product Owner Automation Framework

> A structured workflow system for managing product development from discovery to deployment

**Purpose:** Systematic approach to feature development using a 5-stage specification workflow (PRD → USM → USL → USD → UAT)

---

## 🎯 Framework Overview

### What This Framework Provides

A complete product lifecycle management system with:
1. **Structured Specification Process** - 5-stage workflow from requirements to acceptance tests
2. **Task Management System** - Solo PM workflow for prioritizing and tracking work
3. **Reusable Templates** - Standardized formats for all product artifacts
4. **Automation Tools** - Scripts and validators to streamline repetitive tasks

### Who This Is For
- **Solo Product Managers** - Managing entire product lifecycles independently
- **Technical PMs** - Bridging product strategy and technical implementation
- **Startup Teams** - Small teams needing efficient product processes
- **Product Engineers** - Engineers taking on PM responsibilities

---

## 🏗️ Repository Structure

This repository contains the complete product lifecycle workflow - from discovery to deployment.

```
/
├── Task-management/            # Solo PM workflow tracking
│   ├── NOW.md                  # Current work focus
│   ├── BACKLOG.md              # Prioritized feature backlog
│   └── TASK_MANAGEMENT_SOLO.md # Task management methodology
│
├── po-framework/               # PO automation templates (PRD→USM→USL→USD→UAT) + PM playbooks
├── discovery/                  # Market research, user interviews, competitor analysis, domain knowledge, business models
├── specs/                      # Feature specifications (PRD → UAT)
├── design/                     # Wireframes, mockups, design decisions, design system
├── codebase/                   # Implementation (web app, API, infrastructure) + tech stack
├── qa/                         # Test cases, bug reports, test runs
└── tooling/                    # Generators, validators, CI/CD scripts
```

**Sample Project:** The [specs/one-api-portal-mvp](specs/one-api-portal-mvp) folder contains a complete example of the framework in action.

**Full structure:** See [PROJECT_SETUP_COMPLETE.md](PROJECT_SETUP_COMPLETE.md)

---

## 📋 PO Automation Workflow

The framework uses a structured 5-stage workflow for feature development:

```
Discovery → PRD → USM → USL → USD → UAT → Design → Build → Test → Deploy
```

### The 5 Stages

| Stage | Artifact | Purpose | Format |
|-------|----------|---------|--------|
| 1 | **PRD** | Product Requirements Document - the *why* and *what* | Markdown |
| 2 | **USM** | User Story Map - Activities, Steps, Stories | Markdown |
| 3 | **USL** | User Story List - Prioritized backlog (MoSCoW) | CSV |
| 4 | **USD** | User Story Details - Acceptance criteria | CSV |
| 5 | **UAT** | User Acceptance Tests - BDD scenarios (Given/When/Then) | CSV |

**Templates & Rules:** [po-framework/product-po-automation-spec/](po-framework/product-po-automation-spec/)
**Contributing Guide:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 🛠️ Development Workflow

### 1. Discovery & Research
- Analyze competitors, interview users, define problems
- Document in [discovery/](discovery/)

### 2. Define Feature (PRD)
- Create PRD following framework templates
- Store in `specs/{feature-name}/prd.md`

### 3. Map & Detail (USM → USL → USD → UAT)
- Follow 5-stage workflow using templates
- All artifacts in `specs/{feature-name}/`

### 4. Design
- Create wireframes and mockups
- Store in [design/](design/) and link in PRD

### 5. Build & Test
- Implement in [codebase/](codebase/)
- Execute UAT, document results in [qa/](qa/)

---

## 🚀 Getting Started

### Prerequisites

Before using this framework, you should have:
- A text editor or IDE (VS Code, Sublime, etc.)
- Basic understanding of product management concepts
- Familiarity with user stories and acceptance criteria
- CSV-compatible spreadsheet tool (Excel, Google Sheets, Numbers)

### Quick Start: Create Your First Feature Spec in 15 Minutes

Follow this step-by-step guide to spec your first feature:

#### Step 1: Study the Sample Project (5 minutes)

Navigate to [specs/one-api-portal-mvp](specs/one-api-portal-mvp) and review:
- `prd.md` - See how product requirements are structured
- `usm.md` - Understand the user story mapping format
- `usl.csv` - Review how stories are prioritized (MoSCoW)
- `usd.csv` - See detailed acceptance criteria format
- `uat.csv` - Understand BDD test scenarios (Given/When/Then)

**Key Learning:** Notice how each stage builds on the previous one, adding more detail as you progress.

#### Step 2: Review Framework Templates (3 minutes)

Open [po-framework/](po-framework/) and read:
- `README.md` - Framework overview
- `framework-structure.md` - Detailed structure explanation
- Each `stage{X}-{name}/rules.md` - Rules and validation criteria for each stage

#### Step 3: Create Your Feature Folder (2 minutes)

```bash
# Create a new feature folder
mkdir -p specs/your-feature-name

# Navigate to the folder
cd specs/your-feature-name
```

#### Step 4: Write Your PRD (5 minutes)

Create `prd.md` using this structure:

```markdown
# [Feature Name] - Product Requirements Document

## Problem Statement
[What problem are you solving? Who has this problem?]

## Goals & Success Metrics
- Goal 1: [Specific, measurable goal]
- Metric: [How will you measure success?]

## Target Users
- [Primary user persona]
- [Secondary user persona]

## User Stories (High-Level)
1. As a [user type], I want to [action], so that [benefit]
2. As a [user type], I want to [action], so that [benefit]

## Out of Scope
- [What you're NOT building in this version]

## Design Resources
- [Link to wireframes/mockups if available]
```

**Done!** You now have a PRD. Next, you'll break it down into detailed user stories.

---

## 📚 Common Workflows

### Workflow 1: Spec a New Feature from Scratch

**When to use:** Starting a brand new feature with no existing documentation

```bash
# 1. Create feature folder
mkdir -p specs/my-new-feature
cd specs/my-new-feature

# 2. Write PRD (Stage 1)
# Create prd.md - Define the WHY and WHAT
# Time: 30-60 minutes

# 3. Create User Story Map (Stage 2)
# Create usm.md - Map activities → steps → stories
# Time: 45-90 minutes

# 4. Prioritize Stories (Stage 3)
# Create usl.csv - Apply MoSCoW prioritization
# Time: 30 minutes

# 5. Detail Stories (Stage 4)
# Create usd.csv - Write acceptance criteria
# Time: 1-2 hours

# 6. Write Test Scenarios (Stage 5)
# Create uat.csv - BDD Given/When/Then scenarios
# Time: 1-2 hours
```

**Total Time:** ~4-7 hours for a medium-sized feature

---

### Workflow 2: Add Stories to Existing Feature

**When to use:** Extending a feature that's already been spec'd

```bash
# 1. Navigate to existing feature
cd specs/existing-feature

# 2. Update USM
# Add new stories to usm.md under relevant activities

# 3. Update USL
# Add new rows to usl.csv with MoSCoW priority

# 4. Update USD
# Add acceptance criteria rows to usd.csv

# 5. Update UAT
# Add test scenarios to uat.csv
```

**Time:** ~1-2 hours depending on complexity

---

### Workflow 3: Manage Your Product Backlog

**When to use:** Daily/weekly task management as a solo PM

```bash
# 1. Update NOW.md with current focus
vim Task-management/NOW.md

# 2. Review and reprioritize BACKLOG.md
vim Task-management/BACKLOG.md

# 3. Move completed items from NOW to DONE
# Move next priority items from BACKLOG to NOW
```

**Frequency:** Daily for NOW.md, Weekly for BACKLOG.md

---

## 📖 Documentation

### For Product Management
- **Current Focus:** [Task-management/NOW.md](Task-management/NOW.md)
- **Backlog:** [Task-management/BACKLOG.md](Task-management/BACKLOG.md)
- **Task Management Guide:** [Task-management/TASK_MANAGEMENT_SOLO.md](Task-management/TASK_MANAGEMENT_SOLO.md)
- **Feature Index:** [specs/index.md](specs/index.md)
- **Framework:** [po-framework/README.md](po-framework/README.md)

### For Research & Discovery
- **Competitor Analysis:** [discovery/competitor-analysis/](discovery/competitor-analysis/)
- **Business Model:** [discovery/business-model/](discovery/business-model/)
- **Market Research:** [discovery/market-research/](discovery/market-research/)

### For Development
- **Tech Stack:** [codebase/tech-stack/](codebase/tech-stack/)
- **Domain Knowledge:** [discovery/domain-knowledge/](discovery/domain-knowledge/)
- **Design System:** [design/design-system/](design/design-system/)
- **PM Playbooks:** [po-framework/pm-playbooks/](po-framework/pm-playbooks/)
- **Contributing:** [CONTRIBUTING.md](CONTRIBUTING.md)

---

## ❓ FAQ

### Q: Do I need to complete all 5 stages for every feature?
**A:** Yes, for production features. The 5 stages ensure completeness. However, for quick experiments or spikes, you might only need a PRD.

### Q: Can I modify the templates?
**A:** Yes! The templates are guidelines. Adapt them to your team's needs, but maintain the core structure (PRD → USM → USL → USD → UAT).

### Q: How long should each stage take?
**A:**
- PRD: 30-60 minutes
- USM: 45-90 minutes
- USL: 30 minutes
- USD: 1-2 hours
- UAT: 1-2 hours

For medium-sized features, expect ~4-7 hours total.

### Q: What if my feature is too big?
**A:** Break it down! Create multiple smaller features. Aim for features that can be spec'd in one sitting.

### Q: Do I need to follow the exact CSV format?
**A:** The column headers are important for automation/tooling. You can add columns but keep the required ones from the templates.

### Q: Can I use this for non-software projects?
**A:** Yes! The framework works for any product development (hardware, services, etc.). Adapt the terminology as needed.

### Q: What's the difference between USL and USD?
**A:**
- **USL** (User Story List): High-level story titles with priority (MoSCoW)
- **USD** (User Story Details): Detailed acceptance criteria for each story

### Q: How do I know if my PRD is good enough?
**A:** A good PRD answers: Why are we building this? Who is it for? What problem does it solve? What does success look like?

### Q: Should I write UATs before or after development?
**A:** Before! UATs define "done" and guide development. They're your contract for what needs to work.

---

## 🛠️ Validation & Tooling

### Manual Validation Checklist

Before considering a feature spec complete, verify:

**PRD Checklist:**
- [ ] Problem statement clearly defined
- [ ] Target users identified
- [ ] Success metrics are measurable
- [ ] High-level user stories listed
- [ ] Out of scope items documented

**USM Checklist:**
- [ ] Activities represent major user goals
- [ ] Steps break down activities logically
- [ ] Stories are small and testable
- [ ] Story IDs follow naming convention (US-XXX)

**USL Checklist:**
- [ ] All stories from USM are included
- [ ] MoSCoW priority assigned to each story
- [ ] Story points/estimation provided
- [ ] Dependencies identified
- [ ] CSV format is valid (no missing columns)

**USD Checklist:**
- [ ] Every story has at least 2-3 acceptance criteria
- [ ] Criteria are testable (can verify true/false)
- [ ] Criteria are specific, not vague
- [ ] Acceptance Criteria IDs follow convention (AC-XXX-Y)

**UAT Checklist:**
- [ ] Given/When/Then format followed
- [ ] Scenarios cover happy path
- [ ] Scenarios cover error cases
- [ ] Test IDs follow convention (UAT-XXX)
- [ ] Each test maps to a Story ID

---

## 🗺️ Roadmap & Next Plans

### Current Focus: Business & Product Specification ✅

The framework currently supports the **product specification phase**:
- ✅ Discovery & Research
- ✅ 5-Stage Specification Workflow (PRD → USM → USL → USD → UAT)
- ✅ Task Management System
- ✅ Sample Project (ONE API Portal MVP)

### Upcoming Features: Design, Development & Release

The following capabilities are planned but **not yet implemented**:

#### 1. Design Phase
- [ ] Design system templates
- [ ] Wireframe/mockup guidelines
- [ ] UI/UX specification formats
- [ ] Design handoff documentation
- **Location:** [design/](design/) folder

#### 2. Codebase & Development
- [ ] Technical architecture templates
- [ ] Code structure guidelines
- [ ] Development workflow integration
- [ ] Implementation tracking
- **Location:** [codebase/](codebase/) folder

#### 3. QA & Testing
- [ ] Test execution tracking
- [ ] Bug reporting templates
- [ ] Quality metrics
- **Location:** [qa/](qa/) folder

#### 4. Release Management
- [ ] Release planning templates
- [ ] Deployment checklists
- [ ] Release notes formats
- [ ] Post-release retrospectives

**Note:** This framework currently focuses on the **business and product specification** aspects of product management. Design, development, and release workflows will be added in future iterations.

---

## 📝 License

**Proprietary License - All Rights Reserved**

```
Copyright © 2025 Karl Nguyen
All Rights Reserved.

This Product Owner Automation Framework and its contents are proprietary and confidential.
Unauthorized copying, distribution, modification, or use is strictly prohibited
without explicit written permission from the copyright holder.
```

---

**Framework:** Product Owner Automation
**Purpose:** Structured product development workflow
**Last Updated:** 2025-12-11
