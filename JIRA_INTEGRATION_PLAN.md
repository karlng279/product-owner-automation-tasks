# Jira Integration Plan

**Last Updated:** 2026-01-06
**Status:** Draft

This document outlines the plan to integrate the new Python-based Jira tooling (`tooling/jira`) into the existing "SOLO" task management framework.

The goal is to bridge the gap between our Markdown-based planning (PRD/USM/USL) and execution tracking (Jira) with minimal manual effort.

---

## 1. Tooling Overview

We have added a lightweight, dependency-free Python toolchain in `tooling/jira/`:

- **Admin/Setup:** `jira_api.py` (Core Client), `get_custom_fields.py` (Field Mapper).
- **Execution:** `jira_tasks.py` (Creates Epics/Stories/Tasks from JSON).
- **Documentation:** `confluence_publisher.py` (Publishes Docs to Confluence).
- **Maintenance:** `delete_issues.py` (Cleanup utility).

## 2. Setup & Configuration

Before running any automation, the environment must be configured.

1. **Environment Variables:**
   - Create `jira-config.env` in the root (ensure it is `.gitignore`'d).
   - specific keys required:
     ```env
     JIRA_BASE_URL=https://your-domain.atlassian.net
     JIRA_EMAIL=your-email@company.com
     JIRA_API_TOKEN=your-token-here
     JIRA_PROJECT_KEY=PROJ
     CONFLUENCE_SPACE_KEY=DEV
     ```

2. **Field Mapping:**
   - Different Jira Cloud instances use different IDs for custom fields like "Acceptance Criteria" or "Story Points".
   - **Action:** Run `python3 tooling/jira/get_custom_fields.py` to identify these IDs.
   - **Action:** Update `jira_api.py` `create_story()` method with your specific IDs.

## 3. Workflow Integration (The "Sync" Step)

We will modify the "SOLO" framework to include a hard sync step between **Phase 2 (Detailing)** and **Phase 3 (Building)**.

### Current Flow
`PRD` -> `USM` -> `USL/USD` -> [Manual Entry] -> `Code`

### New Flow
`PRD` -> `USM` -> `USL/USD` -> **`jira.json`** -> **[Auto-Sync]** -> `Jira Board` -> `Code`

### The Process

1. **Define Tasks:**
   - Once the User Story List (USL) and User Story Details (USD) are approved, translate them into a machine-readable format.
   - Create a file: `specs/<feature-name>/jira.json`.
   - *Future Optimization:* Update script to parse `usl.csv` directly.

2. **Execute Sync:**
   - Run the generator script:
     ```bash
     python3 tooling/jira/jira_tasks.py specs/<feature-name>/jira.json
     ```
   - This creates the Epic and all child Stories/Tasks automatically.

3. **Update Index:**
   - Copy the generated Epic Link (e.g., `PROJ-123`) into `specs/index.md` for reference.

4. **Publish Documentation:**
   - Push the approved PRD to Confluence for broader visibility:
     ```bash
     python3 tooling/jira/confluence_publisher.py specs/<feature-name>/prd.md "PRD: Feature Name"
     ```

## 4. Updates to Documentation Standards

We will update `task-management/TASK_MANAGEMENT_SOLO.md` to formally include these tools.

- **Definition of Ready (DoR):** A feature is "Ready for Dev" only after the `jira.json` has been successfully synced and an Epic link exists.
- **Single Source of Truth:**
  - **Planning:** The Markdown files in `specs/`.
  - **Status:** The Jira Board (synced initially from specs).

## 5. Directory Structure Changes

We will standardize the feature folder structure to include the task definition:

```text
specs/
└── feature-name/
    ├── prd.md          # Product Requirements
    ├── usm.md          # Story Map
    ├── usl.csv         # Story List
    ├── usd.csv         # Story Details
    ├── uat.csv         # Acceptance Tests
    └── jira.json       # [NEW] Jira Task Configuration
```

## 6. Implementation Checklist

- [ ] **Config**: Create `jira-config.env` (User to do).
- [ ] **Config**: Configure Custom Field IDs in `jira_api.py`.
- [ ] **Docs**: Update `TASK_MANAGEMENT_SOLO.md` with new workflow steps.
- [ ] **Pilot**: Create a `jira.json` for an existing feature (e.g., `shipment-overview`) and test the sync.
- [ ] **Automation**: (Optional) Create a shell wrapper `tooling/scripts/sync-feature.sh` to combine steps.
