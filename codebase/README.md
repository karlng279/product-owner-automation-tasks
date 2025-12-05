# Codebase

This directory contains the actual implementation of the product, or pointers to external repositories if using a multi-repo setup.

## Directory Structure

```
codebase/
├── apps/
│   ├── web/                # Frontend application
│   └── api/                # Backend service
├── packages/               # Shared libraries
└── infra/                  # Infrastructure as Code
```

## Purpose

This directory:
- **Implements** features defined in `/specs/`
- **References** designs from `/design/`
- **Validates** against UAT from `/qa/`
- **Provides** the actual product to users

## Setup Options

### Option 1: Monorepo (Recommended for Small Teams)
Keep all code in this directory:

```
codebase/
├── apps/
│   ├── web/                # Next.js / React app
│   ├── api/                # Node.js / Express API
│   └── mobile/             # React Native (if applicable)
├── packages/
│   ├── ui/                 # Shared UI components
│   ├── domain/             # Business logic / domain models
│   ├── utils/              # Utility functions
│   └── types/              # TypeScript types
└── infra/
    ├── docker/             # Dockerfiles
    ├── k8s/                # Kubernetes manifests
    └── terraform/          # Terraform configs
```

### Option 2: Multi-Repo (Recommended for Large Teams)
Use this directory as a pointer:

```
codebase/
└── README.md               # Links to external repos
```

**Example README content:**
```markdown
# Codebase

The actual implementation is in separate repositories:

- **Frontend:** https://github.com/company/product-web
- **Backend:** https://github.com/company/product-api
- **Mobile:** https://github.com/company/product-mobile
- **Infrastructure:** https://github.com/company/product-infra

See respective repos for setup and development instructions.
```

## Subdirectories (Monorepo)

### apps/web/
Frontend application:
- Framework: Next.js / React / Vue / etc.
- Implements UI from `/design/`
- Consumes API from `apps/api/`

**Key Files:**
- `package.json` - Dependencies
- `README.md` - Setup instructions
- `src/` - Source code

### apps/api/
Backend service:
- Framework: Node.js / Python / Go / etc.
- Implements business logic from USD acceptance criteria
- Provides REST/GraphQL API

**Key Files:**
- `package.json` - Dependencies
- `README.md` - Setup instructions
- `src/` - Source code
- `tests/` - Unit and integration tests

### packages/
Shared libraries used by multiple apps:

**packages/ui/**
- Shared React components
- Design system implementation
- Follows `/resources/design-system/`

**packages/domain/**
- Business logic
- Domain models
- Validation rules

**packages/utils/**
- Common utilities
- Helper functions
- Formatters, parsers, etc.

**packages/types/**
- TypeScript type definitions
- Shared interfaces
- API contracts

### infra/
Infrastructure as Code:

**infra/docker/**
```
docker/
├── web.Dockerfile
├── api.Dockerfile
└── docker-compose.yml
```

**infra/k8s/**
```
k8s/
├── deployment.yaml
├── service.yaml
├── ingress.yaml
└── configmap.yaml
```

**infra/terraform/**
```
terraform/
├── main.tf
├── variables.tf
├── outputs.tf
└── modules/
```

## Linking Code to Specs

### Story References in Code

When implementing a story, reference it in commits and code:

**Git Commits:**
```
feat(shipment): implement list view (ST-001)

- Add shipment table component
- Implement filters by POL/POD
- Add search by booking number

Implements:
- ST-001: Open Shipment Overview page
- ST-002: See list of upcoming departures

PRD: /specs/features/shipment-overview/prd.md
USD: /specs/features/shipment-overview/usd.csv (AC-001 to AC-017)
```

**Code Comments:**
```javascript
// Story: ST-001 - Open Shipment Overview page
// AC-001: Shipment Overview page accessible from main navigation
// AC-002: Page title clearly shows 'Shipment Overview'
export function ShipmentOverview() {
  return (
    <Page title="Shipment Overview">
      {/* AC-003: Table with columns: Booking No, Customer Ref, POL, POD... */}
      <ShipmentTable />
    </Page>
  );
}
```

**Pull Request Templates:**
```markdown
## Description
[Brief description of changes]

## Related Specs
- **Story:** ST-001, ST-002
- **PRD:** /specs/features/shipment-overview/prd.md
- **USD:** /specs/features/shipment-overview/usd.csv
- **UAT:** /specs/features/shipment-overview/uat.csv

## Acceptance Criteria
- [x] AC-001: Page accessible from navigation
- [x] AC-002: Title shows 'Shipment Overview'
- [x] AC-003: Table displays required columns
- [ ] AC-004: SPA navigation (blocked by routing refactor)

## Testing
- [ ] All UAT test cases pass (TC-001, TC-002)
- [ ] Unit tests added
- [ ] Integration tests added

## Screenshots
[Attach if UI changes]
```

## Development Workflow

### From Spec to Code

```
1. Spec Ready
   └─> PRD approved, USD complete, UAT defined

2. Development Planning
   └─> Break USD into technical tasks
   └─> Assign to developers

3. Implementation
   └─> Reference story IDs in code
   └─> Implement acceptance criteria
   └─> Write tests based on UAT

4. Code Review
   └─> Verify AC implementation
   └─> Check UAT alignment

5. QA Testing
   └─> Execute UAT from /specs/
   └─> Update test results in /qa/

6. Deployment
   └─> Merge to main
   └─> Deploy via pipelines
```

## Testing

### Test Types

**Unit Tests:**
- Test individual functions/components
- Located in `__tests__/` or `*.test.js` files
- Run on every commit

**Integration Tests:**
- Test API endpoints
- Test component integration
- Run before merge

**E2E Tests:**
- Based on UAT scenarios
- Test full user flows
- Run before deployment

**Example (Jest):**
```javascript
// Story: ST-005 - Search shipment by reference
// UAT: TC-004 - Search by booking number

describe('Shipment Search (ST-005)', () => {
  it('should find shipment by booking number (TC-004)', () => {
    // Given: I am on the Shipment Overview page
    render(<ShipmentOverview />);

    // When: I search by booking number "BK-12345"
    const searchInput = screen.getByPlaceholderText('Search by booking number');
    fireEvent.change(searchInput, { target: { value: 'BK-12345' } });
    fireEvent.click(screen.getByRole('button', { name: 'Search' }));

    // Then: I see the shipment with booking number "BK-12345"
    expect(screen.getByText('BK-12345')).toBeInTheDocument();
  });
});
```

## Best Practices

### Do:
- ✅ Reference story IDs in commits, PRs, and code comments
- ✅ Implement exactly what's in USD acceptance criteria
- ✅ Write tests based on UAT scenarios
- ✅ Keep code aligned with design from `/design/`
- ✅ Update specs if requirements change during development

### Don't:
- ❌ Implement features without specs
- ❌ Change acceptance criteria without updating USD
- ❌ Skip UAT test coverage
- ❌ Forget to link PRs to stories
- ❌ Deviate from designs without PO/designer approval

## Tech Stack

Document your tech stack choices in `/resources/tech-stack/`:

**Example:**
```markdown
# Tech Stack

## Frontend
- Framework: Next.js 14
- UI Library: React 18
- Styling: Tailwind CSS
- State Management: Zustand
- Forms: React Hook Form + Zod

## Backend
- Runtime: Node.js 20
- Framework: Express.js
- Database: PostgreSQL 16
- ORM: Prisma
- Authentication: JWT + Passport.js

## Infrastructure
- Hosting: AWS (ECS + RDS)
- CI/CD: GitHub Actions
- Monitoring: Datadog
- Logging: CloudWatch
```

## Related Directories

- `/specs/` - Feature specifications to implement
- `/design/` - UI/UX designs to follow
- `/qa/` - Test cases to validate against
- `/resources/tech-stack/` - Tech decisions and standards
- `/tooling/pipelines/` - CI/CD automation
