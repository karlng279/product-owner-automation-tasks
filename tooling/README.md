# Tooling

This directory contains scripts and automation tools for the repository, including generators, validators, and CI/CD pipelines.

## Directory Structure

```
tooling/
├── generators/             # CLI to scaffold new features
├── validators/             # Linters/checkers for spec structure
└── pipelines/              # CI workflows, GitHub Actions
```

## Purpose

Tooling provides:
- **Automation** for repetitive tasks
- **Validation** to enforce quality standards
- **Scaffolding** to create new features quickly
- **CI/CD** integration for continuous quality

## Subdirectories

### generators/
Scripts to scaffold new features from framework templates:

**Files:**
```
generators/
├── new-feature.sh          # Main generator script
├── README.md               # Usage documentation
└── templates/              # Additional custom templates (if needed)
```

**Usage:**
```bash
cd tooling/generators
./new-feature.sh feature-name
```

**What it does:**
1. Creates `/specs/feature-name/` folder
2. Copies templates from `/po-framework/product-po-automation-spec/`
3. Renames files: `template.md` → `prd.md`, etc.
4. Assigns next available IDs (PRD-XXX, USM-XXX, etc.)
5. Updates `/specs/index.md` with new feature
6. Creates placeholder entries in feature tracking

**Example:**
```bash
$ ./new-feature.sh booking-flow

Creating new feature: booking-flow
✓ Created /specs/booking-flow/
✓ Copied PRD template → prd.md (assigned ID: PRD-002)
✓ Copied USM template → usm.md (assigned ID: USM-002)
✓ Copied USL template → usl.csv
✓ Copied USD template → usd.csv
✓ Copied UAT template → uat.csv
✓ Updated /specs/index.md
✓ Allocated story IDs: ST-009 to ST-XXX

Next steps:
1. Edit /specs/booking-flow/prd.md
2. Validate with: cd ../validators && ./validate-prd.js
```

### validators/
Scripts to validate specs against quality gates:

**Files:**
```
validators/
├── validate-prd.js         # Validates PRD structure and content
├── validate-usm.js         # Validates USM structure
├── validate-usl.js         # Validates USL CSV format
├── validate-usd.js         # Validates USD CSV format
├── validate-uat.js         # Validates UAT CSV format
├── validate-quality-gate.js # Runs all validators for a feature
└── README.md               # Usage documentation
```

**Usage - Single Stage:**
```bash
cd tooling/validators
./validate-prd.js ../../specs/shipment-overview/prd.md
```

**Usage - All Stages:**
```bash
cd tooling/validators
./validate-quality-gate.js ../../specs/shipment-overview/
```

**What it validates:**

**PRD:**
- ✅ All mandatory sections present
- ✅ ID format correct (PRD-XXX)
- ✅ Status is valid (draft | approved | deprecated)
- ✅ Version format correct (X.Y)
- ✅ Problem statement is specific (not vague)
- ✅ Goals are measurable
- ✅ Non-goals populated (>=2)
- ✅ Success metrics have metric_id, description, target
- ✅ Risks have mitigations
- ✅ Open questions have owners

**USM:**
- ✅ References valid PRD ID
- ✅ Has 3-7 Activities
- ✅ Each Activity has 2-6 Steps
- ✅ Each Step has 1-3 story IDs
- ✅ Story IDs follow format (ST-XXX)

**USL:**
- ✅ CSV has all required columns
- ✅ Story IDs match those in USM
- ✅ MoSCoW priority is valid
- ✅ User story follows "As a... I want... so that..." format
- ✅ At least one Must-have story exists

**USD:**
- ✅ CSV has all required columns
- ✅ Every story in USL has a USD row
- ✅ Acceptance criteria formatted as "- AC-XXX: <condition>"
- ✅ ACs are atomic (one behavior per AC)

**UAT:**
- ✅ CSV has all required columns
- ✅ Every Must-have story has at least one test case
- ✅ Given/When/Then are present
- ✅ AC references exist in USD
- ✅ Test result is valid (Pass | Failed | Not Testable)

**Example Output:**
```bash
$ ./validate-prd.js ../../specs/shipment-overview/prd.md

Validating: /specs/shipment-overview/prd.md

✓ ID format correct: PRD-001
✓ All mandatory sections present
✓ Problem statement is specific
✗ Non-goals section has only 1 item (minimum 2 required)
✗ Success metric MET-002 missing target value
✓ All risks have mitigations
✓ All questions have owners

Result: FAILED (2 issues)

Fix these issues before proceeding to USM stage.
```

### pipelines/
CI/CD workflows and automation:

**Files:**
```
pipelines/
├── .github/
│   └── workflows/
│       ├── validate-specs.yml     # Runs validators on PR
│       ├── update-index.yml       # Auto-updates /specs/index.md
│       └── test-automation.yml    # Runs automated UAT tests
├── scripts/
│   ├── pre-commit-hook.sh         # Validates before commit
│   └── deploy-to-staging.sh       # Deployment script
└── README.md
```

**GitHub Actions Examples:**

**validate-specs.yml:**
```yaml
name: Validate Specs

on:
  pull_request:
    paths:
      - 'specs/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Validate changed specs
        run: |
          cd tooling/validators
          for file in $(git diff --name-only origin/main); do
            if [[ $file == specs/*/prd.md ]]; then
              ./validate-prd.js ../../$file
            fi
          done
```

**Pre-commit Hook:**
```bash
#!/bin/bash
# Install: ln -s ../../tooling/pipelines/scripts/pre-commit-hook.sh .git/hooks/pre-commit

# Validate staged spec files
for file in $(git diff --cached --name-only | grep "specs/"); do
  if [[ $file == *.md ]]; then
    ./tooling/validators/validate-prd.js "$file" || exit 1
  elif [[ $file == *.csv ]]; then
    echo "Validating CSV: $file"
    # Add CSV validation
  fi
done
```

## Quick Reference

### Create New Feature
```bash
cd tooling/generators
./new-feature.sh <feature-name>
```

### Validate PRD
```bash
cd tooling/validators
./validate-prd.js ../../specs/<feature-name>/prd.md
```

### Validate All Stages
```bash
cd tooling/validators
./validate-quality-gate.js ../../specs/<feature-name>/
```

### Run Pre-commit Hook
```bash
cd tooling/pipelines/scripts
ln -s $(pwd)/pre-commit-hook.sh ../../../.git/hooks/pre-commit
```

## Development

### Adding a New Generator

1. Create script in `/tooling/generators/`
2. Make it executable: `chmod +x new-script.sh`
3. Follow naming convention: `new-{thing}.sh`
4. Update `/tooling/generators/README.md`

**Generator Template:**
```bash
#!/bin/bash
set -e

THING_NAME=$1

if [ -z "$THING_NAME" ]; then
  echo "Usage: ./new-thing.sh <thing-name>"
  exit 1
fi

echo "Creating new thing: $THING_NAME"

# Create directories
mkdir -p "../../path/to/$THING_NAME"

# Copy templates
# ...

echo "✓ Thing created successfully"
```

### Adding a New Validator

1. Create script in `/tooling/validators/`
2. Make it executable: `chmod +x validate-thing.js`
3. Follow naming convention: `validate-{stage}.js`
4. Use consistent exit codes:
   - `0` = validation passed
   - `1` = validation failed
5. Output format:
   ```
   ✓ Check passed
   ✗ Check failed (details)
   ```

**Validator Template (Node.js):**
```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: ./validate-thing.js <file-path>');
  process.exit(1);
}

console.log(`Validating: ${filePath}\n`);

let passed = true;

// Validation logic
if (condition) {
  console.log('✓ Check name passed');
} else {
  console.log('✗ Check name failed (details)');
  passed = false;
}

console.log(`\nResult: ${passed ? 'PASSED' : 'FAILED'}`);
process.exit(passed ? 0 : 1);
```

## Best Practices

### Do:
- ✅ Use generators for consistency
- ✅ Validate before committing
- ✅ Run quality gates before stage transitions
- ✅ Integrate validators into CI/CD
- ✅ Keep scripts simple and focused

### Don't:
- ❌ Manually create feature folders (use generator)
- ❌ Skip validation because "it looks fine"
- ❌ Commit invalid specs
- ❌ Hardcode paths (use relative paths)
- ❌ Make validators too strict (allow flexibility)

## Testing Tooling

### Test Generators
```bash
# Create a test feature
./new-feature.sh test-feature

# Verify structure
ls ../../specs/test-feature/

# Clean up
rm -rf ../../specs/test-feature/
```

### Test Validators
```bash
# Create a deliberately broken PRD
# Run validator
./validate-prd.js path/to/broken-prd.md

# Should fail with specific errors
```

## Roadmap

### Planned Tools
- [ ] `validate-all.sh` - Validate entire repo at once
- [ ] `generate-report.sh` - Generate feature status report
- [ ] `migrate-ids.sh` - Renumber IDs if needed
- [ ] `export-to-jira.sh` - Export USL to JIRA format
- [ ] `import-from-jira.sh` - Import stories from JIRA

### Automation Opportunities
- [ ] Auto-update /specs/index.md on feature creation
- [ ] Auto-assign story IDs based on highest existing ID
- [ ] Auto-generate UAT from USD acceptance criteria
- [ ] Auto-check for broken links in PRDs

## Related Directories

- `/po-framework/` - Templates used by generators
- `/specs/` - Artifacts validated by validators
- `.github/workflows/` - Where pipelines run in CI/CD
