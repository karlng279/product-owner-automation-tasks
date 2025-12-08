# Backlog

*Prioritized list of features, improvements, and ideas*

*Last updated: 2025-12-05*

---

## P0 - Working On Now

**Repository Setup & Infrastructure**
- Status: ✅ Complete (as of 2025-12-05)
- What: Full repository structure with documentation
- Result: Ready for feature development

---

## P1 - Next Up

### Define First Feature
- Status: Planning
- Why: Need to validate the PO automation workflow with real feature
- Effort: 1-2 days (discovery + PRD)
- Target: This week
- Consider: Shipment Overview, Booking Flow, or Document Upload

### Implement Validators (Tooling)
- Status: Idea
- Why: Quality gates are critical for PO automation workflow
- Effort: ~1 week
- Target: As needed (after first feature is defined)
- Files: `/tooling/validators/validate-prd.js`, etc.

---

## P2 - Soon

### Implement Generators (Tooling)
- Status: Idea
- Why: Automate feature scaffolding
- Effort: ~2-3 days
- Target: After creating 2-3 features manually
- Files: `/tooling/generators/new-feature.sh`

### Complete Example Feature
- Status: Idea
- Why: Demonstrate full workflow (PRD → USM → USL → USD → UAT → Code → QA)
- Effort: ~1 week
- Target: Q1 2026
- Suggested: Shipment Overview (already documented in framework examples)

### Populate Resources
- Status: Idea
- Why: Provide domain knowledge and tech stack context
- Effort: Ongoing
- Items:
  - Tech stack documentation
  - Domain glossary
  - Design system basics
  - Business model canvas

---

## P3 - Someday/Maybe

### CI/CD Pipeline Setup
- Status: Idea
- Why: Automate validation and deployment
- Effort: ~1 week
- Complexity: Needs hosting environment decisions
- Files: `/tooling/pipelines/`

### Auto-sync with External Tools
- Status: Idea
- Why: If using Jira/Linear, sync automatically
- Effort: ~3-5 days
- Depends: Decision on external tools

### Metrics Dashboard
- Status: Idea
- Why: Visualize project health
- Effort: ~3 days
- File: `/tooling/project-management/dashboard.sh`

---

## 🔧 Technical Debt

*None yet - greenfield project*

---

## 🐛 Known Issues

*None yet*

---

## 💡 Ideas Parking Lot

*Capture here, refine later*

- Create video walkthrough of PO automation workflow
- Write blog post about the framework
- Create VSCode snippets for markdown templates
- Add GraphQL schema for specs (if building API)
- AI assistant integration (use framework templates as context)

---

## 📋 Repository Improvements

- [ ] Add .gitignore with common patterns
- [ ] Add LICENSE file
- [ ] Add CODE_OF_CONDUCT.md (if open sourcing)
- [ ] Add CHANGELOG.md
- [ ] Clean up proposal documents (move to /archive/)

---

## 🎯 Next Actions

**Immediate (This Week):**
1. Decide on first feature to build
2. Start discovery and/or PRD
3. Test the PO automation workflow

**Short Term (This Month):**
1. Complete first feature through all 5 stages
2. Implement basic validators (validate-prd.js at minimum)
3. Populate some resources (tech stack, domain knowledge)

**Medium Term (Q1 2026):**
1. Complete 2-3 features
2. Implement generators
3. Set up basic CI/CD

---

*Use this backlog to capture everything. Review weekly, prioritize monthly.*
