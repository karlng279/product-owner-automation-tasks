# Implementation Plan: PO Framework CLI Tool

## Overview

Transform the PO Framework into a reusable CLI tool published as an NPM package. The tool will allow you to initialize the framework in any web development project with commands like `po init`, `po add <component>`, `po update`, and `po info`.

**Distribution Method:** NPM package with CLI binary
**Target Users:** Personal use across multiple web development projects
**Scope:** Templates only (no validators/generators initially)

---

## Goals

1. **Easy Installation**: `npm install -g po-framework-cli` or `npx po-framework-cli init`
2. **Works Everywhere**: Initialize in new projects or add to existing ones
3. **Simple Updates**: Update framework templates with `po update` command
4. **Zero Dependencies**: Framework templates work standalone (no runtime dependencies)

---

## New Package Structure

Create a new npm package with this structure:

```
po-framework-cli/                   # New package (separate from current repo)
├── package.json                    # NPM package metadata
├── README.md                       # CLI tool documentation
├── LICENSE                         # MIT license
├── .gitignore
├── .npmignore                      # Exclude dev files from npm
│
├── bin/
│   └── po.js                       # CLI entry point (#!/usr/bin/env node)
│
├── src/
│   ├── cli.js                      # Command router (using Commander.js)
│   ├── commands/
│   │   ├── init.js                 # Initialize framework
│   │   ├── add.js                  # Add components to existing project
│   │   ├── update.js               # Update framework templates
│   │   └── info.js                 # Show version and status
│   ├── utils/
│   │   ├── file-operations.js      # File copying, directory creation
│   │   ├── template-manager.js     # Template processing
│   │   └── version-manager.js      # Version tracking
│   └── constants.js                # Paths and configuration
│
└── templates/                      # Copy from current repo
    ├── po-framework/               # Core 5-stage framework
    ├── task-management/            # Task tracking templates
    ├── discovery/                  # Research templates
    ├── design/                     # Design templates
    ├── qa/                         # QA templates
    ├── tooling/                    # Tooling templates
    ├── codebase/                   # Code structure templates
    ├── .gitignore.template         # Template gitignore
    ├── README.template.md          # Template README
    └── CONTRIBUTING.template.md    # Template contributing guide
```

---

## CLI Commands

### 1. `po init [options]`
Initialize framework in current directory.

**What it does:**
- Prompts user to select components (core, task-management, discovery, design, qa, tooling, example)
- Copies selected templates to current directory
- Creates `.po-framework-version` file to track version
- Creates directory structure: `specs/`, `po-framework/`, etc.
- Shows "Next steps" message

**Options:**
- `--full` - Include everything
- `--minimal` - Only core framework (po-framework + specs)
- `--no-interaction` - Skip prompts, use defaults

**Example:**
```bash
$ po init
? Include optional components:
  [x] Task management
  [x] Discovery templates
  [ ] Example project
✓ Framework initialized successfully!
```

### 2. `po add <component> [options]`
Add specific component to existing project.

**Supported components:**
- `discovery`, `design`, `qa`, `task-management`, `tooling`, `example`

**What it does:**
- Checks `.po-framework-version` exists (requires `po init` first)
- Copies component files
- Handles existing files (skip by default, `--force` to overwrite)

**Example:**
```bash
$ po add discovery
✓ Added discovery templates
```

### 3. `po update [options]`
Update framework templates to latest version.

**What it does:**
- Reads `.po-framework-version` to get current version
- Shows changelog for new version
- Updates framework templates (skips existing by default)
- Never touches user content (specs/, task-management/NOW.md, etc.)

**Options:**
- `--force` - Overwrite all framework files
- `--dry-run` - Show what would be updated

### 4. `po info`
Show framework version and status.

**What it shows:**
- Current framework version
- Installed components
- Number of features in specs/
- Available updates

---

## Implementation Steps

### Phase 1: Setup New Package (1-2 hours)
1. Create new directory `po-framework-cli/` outside current repo
2. Initialize npm package: `npm init`
3. Configure `package.json`:
   - Add `bin` entry pointing to `bin/po.js`
   - Add dependencies: `commander`, `inquirer`, `chalk`, `fs-extra`
   - Set engines: `"node": ">=14.0.0"`
4. Copy framework templates from current repo to `templates/` directory
5. Create `.npmignore` to exclude dev files
6. Test local install: `npm link`

### Phase 2: Core Command - Init (3-4 hours)
7. Create `bin/po.js` with shebang and basic entry point
8. Create `src/cli.js` with Commander.js command routing
9. Implement `src/commands/init.js`:
   - Validate target directory
   - Show interactive component selection (using inquirer)
   - Copy selected templates
   - Create `.po-framework-version` file
   - Show success message with next steps
10. Implement `src/utils/file-operations.js`:
    - Safe file copying with error handling
    - Directory creation
    - Check file exists
11. Test: `po init` in empty directory

### Phase 3: Utilities (2-3 hours)
12. Implement `src/utils/template-manager.js`:
    - List available components
    - Get template paths
    - Process template variables (project name, date)
13. Implement `src/utils/version-manager.js`:
    - Create/read `.po-framework-version` file format:
      ```json
      {
        "version": "1.0.1",
        "installedAt": "2025-12-17",
        "components": ["core", "task-management", "discovery"]
      }
      ```
14. Test all utilities with unit tests

### Phase 4: Additional Commands (3-4 hours)
15. Implement `src/commands/add.js`:
    - Validate component name
    - Check `.po-framework-version` exists
    - Copy component with conflict handling
16. Implement `src/commands/info.js`:
    - Read version file
    - Scan directories for installed components
    - Count features in specs/
    - Show formatted output
17. Implement `src/commands/update.js`:
    - Compare versions
    - Show changelog
    - Update templates (skip existing by default)
18. Test all commands end-to-end

### Phase 5: Polish & Documentation (2-3 hours)
19. Write comprehensive README.md for CLI tool:
    - Installation instructions
    - Command reference with examples
    - Use cases
    - FAQ
20. Add help text to all commands
21. Add error handling and validation
22. Create LICENSE file (MIT recommended)
23. Final testing in clean environments

### Phase 6: Publish to NPM (1-2 hours)
24. Create npm account (if needed): https://www.npmjs.com/signup
25. Login: `npm login`
26. Choose package name: `po-framework-cli` or `@yourname/po-framework`
27. Test publish locally: `npm publish --dry-run`
28. Publish: `npm publish`
29. Test global install: `npm install -g po-framework-cli`
30. Create GitHub repo for CLI tool (optional but recommended)

**Total Time Estimate:** 12-18 hours

---

## Critical Files to Create

### 1. `/po-framework-cli/package.json`
NPM package metadata with dependencies and bin entry point.

**Key sections:**
```json
{
  "name": "po-framework-cli",
  "version": "1.0.0",
  "bin": {
    "po": "./bin/po.js"
  },
  "dependencies": {
    "commander": "^11.0.0",
    "inquirer": "^9.0.0",
    "chalk": "^5.0.0",
    "fs-extra": "^11.0.0"
  },
  "files": ["bin/", "src/", "templates/", "README.md", "LICENSE"]
}
```

### 2. `/po-framework-cli/bin/po.js`
CLI entry point with shebang. Imports and executes main CLI logic.

```javascript
#!/usr/bin/env node
require('../src/cli.js');
```

### 3. `/po-framework-cli/src/cli.js`
Command router using Commander.js. Defines all commands with options and help text.

**Structure:**
- Parse commands: init, add, update, info
- Route to command handlers
- Global error handling

### 4. `/po-framework-cli/src/commands/init.js`
Core initialization logic:
- Validate directory (empty or confirm if not)
- Interactive component selection prompts
- Copy template files
- Create `.po-framework-version`
- Show next steps

### 5. `/po-framework-cli/src/utils/file-operations.js`
Reusable file utilities:
- `copyFile(src, dest, options)` - Safe copy with conflict handling
- `createDirectory(path)` - Recursive directory creation
- `fileExists(path)` - Check if file exists
- `copyDirectory(src, dest, options)` - Copy entire directory tree

### 6. `/po-framework-cli/README.md`
User-facing documentation for the CLI tool:
- Quick start guide
- Command reference
- Examples
- Troubleshooting

---

## File Handling Strategy

### Files to Copy (from current repo → templates/)
- `po-framework/**/*` - All 5 stages
- `task-management/**/*` - Task tracking (except NOW.md/BACKLOG.md with content)
- `discovery/**/*` - Research templates
- `design/**/*` - Design templates
- `qa/**/*` - QA templates
- `tooling/**/*` - Tooling documentation
- `codebase/**/*` - Code structure
- `README.md` → `README.template.md`
- `CONTRIBUTING.md` → `CONTRIBUTING.template.md`
- `.gitignore` → `.gitignore.template`

### Files NEVER to Overwrite (user content)
- `specs/**/*` - User's feature specifications
- `codebase/*/src/**/*` - User's code
- `task-management/NOW.md` - User's active tasks (if has content)
- `task-management/BACKLOG.md` - User's backlog (if has content)

### Conflict Handling
**Default strategy (safe):** Skip existing files, only copy new ones
**With `--force`:** Overwrite all files
**On update:** Skip by default, show which files were skipped

---

## Dependencies

### Runtime Dependencies (package.json)
- **commander** (^11.0.0) - CLI framework for command parsing
- **inquirer** (^9.0.0) - Interactive prompts
- **chalk** (^5.0.0) - Colored terminal output
- **fs-extra** (^11.0.0) - Enhanced file operations

### Dev Dependencies (optional)
- **eslint** (^8.0.0) - Code linting
- **jest** (^29.0.0) - Unit testing

**Note:** The framework templates themselves have zero dependencies - they're pure markdown and CSV files.

---

## Testing Strategy

### Manual Testing Checklist
1. **Fresh install in empty directory**
   ```bash
   mkdir test-project && cd test-project
   po init
   # Verify all files copied correctly
   ```

2. **Add component to existing project**
   ```bash
   po add discovery
   # Verify discovery templates added
   ```

3. **Update existing installation**
   ```bash
   po update --dry-run
   # Verify shows correct files to update
   ```

4. **Info command**
   ```bash
   po info
   # Verify shows correct version and components
   ```

5. **Conflict handling**
   ```bash
   po init  # Initialize
   echo "custom" > po-framework/README.md
   po update
   # Verify custom file not overwritten
   ```

### Automated Testing (optional)
- Unit tests for file operations
- Integration tests for commands
- Test on different Node versions (14, 16, 18, 20)

---

## Publishing to NPM

### Pre-publish Checklist
- [ ] Choose unique package name (search npm registry first)
- [ ] Add LICENSE file (MIT recommended)
- [ ] Write comprehensive README.md
- [ ] Test `npm pack` to see what files will be included
- [ ] Test `npm publish --dry-run`
- [ ] Bump version in package.json for updates

### Publishing Commands
```bash
# First time
npm login
npm publish

# Updates
npm version patch  # or minor, major
npm publish
```

### Post-publish
- Test global install: `npm install -g po-framework-cli`
- Test npx: `npx po-framework-cli init`
- Create GitHub repo for issue tracking and visibility

---

## Version Strategy

### Semantic Versioning
- **Major (2.0.0)**: Breaking changes to CLI commands or file structure
- **Minor (1.1.0)**: New commands or components added
- **Patch (1.0.1)**: Bug fixes or template improvements

### Version File (`.po-framework-version`)
Tracks framework version in user's project:
```json
{
  "version": "1.0.1",
  "cliVersion": "1.2.0",
  "installedAt": "2025-12-17T10:30:00Z",
  "components": ["core", "task-management", "discovery", "design", "qa"]
}
```

Used by `po update` to detect available updates and by `po info` to show status.

---

## Migration from Current Repo

### For New Projects
Simply run: `po init`

### For Existing Projects Using Current Repo
1. Note any customizations to framework files
2. Initialize CLI tool in new directory
3. Copy `specs/` folder from old project
4. Manually merge customizations if needed

**Recommendation:** Keep current repo as-is for ongoing work. Use CLI tool for new projects going forward.

---

## Future Enhancements (Not in Initial Scope)

These can be added later if needed:
- Validators (validate PRD, USM, USL, USD, UAT)
- Generators (scaffold new features with `po new <feature-name>`)
- Templates with variable substitution (project name, author, date)
- Plugin system for custom components
- Integration with Jira/Linear/etc.
- VS Code extension

**Current Focus:** Simple, reliable template distribution via CLI.

---

## Key Decisions & Rationale

1. **Separate package vs. same repo?**
   - **Decision:** Separate npm package
   - **Why:** Clean separation, independent versioning, better for distribution

2. **NPM package vs. git submodule?**
   - **Decision:** NPM package with CLI
   - **Why:** Easier to use, better version management, works without git

3. **Overwrite existing files?**
   - **Decision:** Skip by default, `--force` to overwrite
   - **Why:** Safe for users, preserves customizations

4. **Include example project?**
   - **Decision:** Optional during `po init`
   - **Why:** Useful for learning but increases package size

5. **Auto-update check?**
   - **Decision:** Manual `po update` command
   - **Why:** User has full control, no surprise changes

---

## Success Criteria

The CLI tool is successful when:
- ✅ Can be installed globally: `npm install -g po-framework-cli`
- ✅ Works with npx: `npx po-framework-cli init`
- ✅ Initializes framework in any directory: `po init`
- ✅ Adds components to existing projects: `po add discovery`
- ✅ Updates templates safely: `po update`
- ✅ Shows version and status: `po info`
- ✅ Never overwrites user content (specs/, code, tasks)
- ✅ Works offline after installation (no API calls)
- ✅ Clear error messages and help text
- ✅ Published to npm registry

---

## Files from Current Repo

These files from `/Users/huynh.nguyenq/Downloads/Sites/ppo-automation-tasks-otsv/` will be used:

**Templates to copy:**
- `po-framework/` → `templates/po-framework/`
- `task-management/` → `templates/task-management/`
- `discovery/` → `templates/discovery/`
- `design/` → `templates/design/`
- `qa/` → `templates/qa/`
- `tooling/` → `templates/tooling/`
- `codebase/` → `templates/codebase/`
- `README.md` → `templates/README.template.md`
- `CONTRIBUTING.md` → `templates/CONTRIBUTING.template.md`
- `.gitignore` → `templates/.gitignore.template`

**Example project (optional):**
- `specs/one-api-portal-mvp/` → `templates/examples/one-api-portal-mvp/`

**Documentation to reference:**
- `README.md` - For understanding framework structure
- `po-framework/README.md` - For framework overview
- `PROJECT_SETUP_COMPLETE.md` - For complete structure reference

---

## Next Steps After Plan Approval

1. Create new directory `po-framework-cli/` (outside current repo)
2. Initialize npm package with `npm init`
3. Follow implementation phases 1-6
4. Test thoroughly
5. Publish to npm
6. Document usage in README

**Estimated Total Time:** 12-18 hours spread over 3-4 work sessions
