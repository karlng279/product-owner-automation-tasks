# Pipelines

CI/CD workflows and automation for the repository.

## Purpose

Pipelines provide:
- **Automated validation** of specs on pull requests
- **Continuous integration** for code changes
- **Automated testing** execution
- **Deployment automation** to staging and production

## Directory Structure

```
pipelines/
├── .github/
│   └── workflows/          # GitHub Actions (if using GitHub)
│       ├── validate-specs.yml
│       ├── test-automation.yml
│       └── deploy.yml
├── scripts/
│   ├── pre-commit-hook.sh
│   ├── validate-all.sh
│   └── deploy-to-staging.sh
└── README.md               # This file
```

## GitHub Actions Workflows

### validate-specs.yml
Validates specs on pull requests.

**Triggers:**
- Pull request to `main`
- Changes in `specs/features/**`

**Jobs:**
1. Checkout code
2. Run validators on changed files
3. Report results as PR check

**Example:**
```yaml
name: Validate Specs

on:
  pull_request:
    paths:
      - 'specs/features/**'

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Validate PRDs
        run: |
          cd tooling/validators
          for file in $(git diff --name-only origin/main | grep "prd.md"); do
            ./validate-prd.js ../../$file
          done

      - name: Validate USL
        run: |
          cd tooling/validators
          for file in $(git diff --name-only origin/main | grep "usl.csv"); do
            ./validate-usl.js ../../$file
          done
```

---

### test-automation.yml
Runs automated tests.

**Triggers:**
- Pull request to `main`
- Push to `main`
- Changes in `codebase/**`

**Jobs:**
1. Unit tests
2. Integration tests
3. E2E tests (optional)

**Example:**
```yaml
name: Test Automation

on:
  pull_request:
    paths:
      - 'codebase/**'
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install Dependencies
        run: |
          cd codebase/apps/web
          npm install

      - name: Run Unit Tests
        run: |
          cd codebase/apps/web
          npm test

      - name: Run Integration Tests
        run: |
          cd codebase/apps/api
          npm run test:integration
```

---

### deploy.yml
Deploys to staging and production.

**Triggers:**
- Push to `main` → Deploy to staging
- Tag `v*` → Deploy to production

**Jobs:**
1. Build application
2. Run tests
3. Deploy to environment
4. Run smoke tests

**Example:**
```yaml
name: Deploy

on:
  push:
    branches: [main]
    tags: ['v*']

jobs:
  deploy-staging:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Staging
        run: |
          cd tooling/pipelines/scripts
          ./deploy-to-staging.sh

  deploy-production:
    if: startsWith(github.ref, 'refs/tags/v')
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Production
        run: |
          cd tooling/pipelines/scripts
          ./deploy-to-production.sh
```

---

## Scripts

### pre-commit-hook.sh
Validates specs before allowing commit.

**Installation:**
```bash
cd tooling/pipelines/scripts
ln -s $(pwd)/pre-commit-hook.sh ../../../.git/hooks/pre-commit
chmod +x ../../../.git/hooks/pre-commit
```

**What it does:**
```bash
#!/bin/bash
set -e

echo "Running pre-commit validation..."

# Validate staged spec files
for file in $(git diff --cached --name-only); do
  if [[ $file == specs/features/*/prd.md ]]; then
    echo "Validating PRD: $file"
    ./tooling/validators/validate-prd.js "$file" || exit 1
  fi

  if [[ $file == specs/features/*/usl.csv ]]; then
    echo "Validating USL: $file"
    ./tooling/validators/validate-usl.js "$file" || exit 1
  fi
done

echo "✓ Pre-commit validation passed"
```

---

### validate-all.sh
Validates all specs in the repository.

**Usage:**
```bash
cd tooling/pipelines/scripts
./validate-all.sh
```

**What it does:**
```bash
#!/bin/bash
set -e

echo "Validating all specs..."

cd ../validators

failed=0

for feature in ../../specs/features/*/; do
  echo "Validating feature: $(basename $feature)"
  ./validate-quality-gate.js "$feature" || failed=1
done

if [ $failed -eq 0 ]; then
  echo "✓ All specs valid"
  exit 0
else
  echo "✗ Some specs failed validation"
  exit 1
fi
```

---

### deploy-to-staging.sh
Deploys application to staging environment.

**Usage:**
```bash
cd tooling/pipelines/scripts
./deploy-to-staging.sh
```

**Example:**
```bash
#!/bin/bash
set -e

echo "Deploying to staging..."

# Build
cd ../../../codebase/apps/web
npm run build

# Deploy (example: AWS, Docker, etc.)
# docker build -t app:latest .
# docker push registry/app:latest
# kubectl apply -f k8s/staging/

echo "✓ Deployed to staging"
```

---

## Implementation Status

- [ ] `validate-specs.yml` - TODO: Create GitHub Action
- [ ] `test-automation.yml` - TODO: Create GitHub Action
- [ ] `deploy.yml` - TODO: Create GitHub Action
- [ ] `pre-commit-hook.sh` - TODO: Implement script
- [ ] `validate-all.sh` - TODO: Implement script
- [ ] `deploy-to-staging.sh` - TODO: Implement script
- [ ] `deploy-to-production.sh` - TODO: Implement script

## Best Practices

### Do:
- ✅ Run validators on every PR
- ✅ Block merge if validation fails
- ✅ Run tests before deployment
- ✅ Use environment-specific configs
- ✅ Tag production releases

### Don't:
- ❌ Skip validation in CI/CD
- ❌ Deploy without tests passing
- ❌ Hardcode secrets in workflows
- ❌ Deploy main branch to production directly

## Environment Variables

Store secrets in CI/CD environment, not in code:

**GitHub Secrets:**
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `DATABASE_URL`
- `API_KEY`

**Access in workflows:**
```yaml
env:
  AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
```

## Deployment Checklist

Before deploying to production:
- [ ] All specs validated
- [ ] All tests passing
- [ ] UAT executed and passed
- [ ] No P0/P1 bugs open
- [ ] Release notes prepared
- [ ] Rollback plan ready
- [ ] Monitoring configured
- [ ] Team notified

## Related

- **Validators:** `/tooling/validators/` (used in pipelines)
- **Specs:** `/specs/` (validated by pipelines)
- **Codebase:** `/codebase/` (built and deployed by pipelines)
- **QA:** `/qa/` (test results tracked)
