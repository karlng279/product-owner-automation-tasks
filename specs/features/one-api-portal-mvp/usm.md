# USM: ONE API Portal - Developer Portal Redesign (MVP)
id: USM-001
prd_id: PRD-001
owner: Technical PM
status: draft
last_updated: 2025-12-08

## User Activities

  - activity_id: ACT-001
    name: "Discover and explore available APIs"
    description: "User visits the portal to understand what ONE LINE APIs are available and what use cases they support."
    steps:
      - step_id: STEP-001
        name: "Land on homepage"
        description: "User arrives at the portal homepage and sees clear value proposition and API categories."
        stories: [ST-001]
      - step_id: STEP-002
        name: "Explore API categories"
        description: "User browses API categories (Tracking, Schedules, Booking, Routes) to understand offerings."
        stories: [ST-002]
      - step_id: STEP-003
        name: "View getting started guide"
        description: "User navigates to the Getting Started guide to understand how to obtain credentials and make first API call."
        stories: [ST-003]

  - activity_id: ACT-002
    name: "Find and understand endpoint documentation"
    description: "User searches for specific API endpoint and reads comprehensive documentation to integrate it."
    steps:
      - step_id: STEP-004
        name: "Search for endpoint or use case"
        description: "User uses search functionality to find specific endpoint (e.g., 'track shipment') or browses API reference."
        stories: [ST-004, ST-005]
      - step_id: STEP-005
        name: "Read endpoint documentation"
        description: "User reads endpoint details including URL, HTTP method, parameters, request/response schemas, and error codes."
        stories: [ST-006]
      - step_id: STEP-006
        name: "Copy code examples"
        description: "User selects programming language (curl, JavaScript, Python, Java) and copies code snippet to use in their application."
        stories: [ST-007]

  - activity_id: ACT-003
    name: "Navigate API reference structure"
    description: "User browses the API reference using navigation and categories to find relevant endpoints."
    steps:
      - step_id: STEP-007
        name: "Browse API reference by category"
        description: "User uses sidebar navigation to explore endpoints organized by category (Tracking, Schedules, Booking, Routes)."
        stories: [ST-008]
      - step_id: STEP-008
        name: "Use breadcrumbs and anchor links"
        description: "User navigates within documentation using breadcrumbs, table of contents, and anchor links to specific sections."
        stories: [ST-009]

  - activity_id: ACT-004
    name: "Troubleshoot integration issues"
    description: "User encounters an error or issue and uses the documentation to diagnose and fix the problem."
    steps:
      - step_id: STEP-009
        name: "Look up error code"
        description: "User searches for specific error code (e.g., '400 - Invalid container type') or browses error documentation."
        stories: [ST-010]
      - step_id: STEP-010
        name: "Review error explanation and examples"
        description: "User reads error code explanation, common causes, and example showing correct request format."
        stories: [ST-011]
      - step_id: STEP-011
        name: "Check authentication and rate limits"
        description: "User reviews authentication requirements and rate limit documentation to ensure correct implementation."
        stories: [ST-012]

  - activity_id: ACT-005
    name: "Stay updated on API changes"
    description: "User regularly checks the changelog to stay informed about API updates, new fields, and deprecations."
    steps:
      - step_id: STEP-012
        name: "Visit changelog page"
        description: "User navigates to the Changelog page to see recent API updates sorted by date."
        stories: [ST-013]
      - step_id: STEP-013
        name: "Review API update details"
        description: "User clicks on specific changelog entry to see detailed description, affected endpoints, and migration guide."
        stories: [ST-014]
      - step_id: STEP-014
        name: "View updated endpoint documentation"
        description: "User follows link from changelog to updated endpoint documentation to see new fields or parameters."
        stories: [ST-015]

  - activity_id: ACT-006
    name: "Provide feedback on documentation"
    description: "User encounters unclear documentation or has a suggestion and provides feedback to improve the portal."
    steps:
      - step_id: STEP-015
        name: "Rate documentation page"
        description: "User uses feedback widget to rate documentation page (1-5 stars) for helpfulness."
        stories: [ST-016]
      - step_id: STEP-016
        name: "Submit feedback or suggestion"
        description: "User optionally provides written feedback or suggestion to improve documentation clarity."
        stories: [ST-017]

## Notes
  - Story IDs (ST-001 to ST-017) will be defined in the USL for PRD-001.
  - Activities align with the four main use cases in PRD v0.2: discovering APIs, finding endpoint documentation, troubleshooting issues, and staying updated on changes.
  - Added ACT-003 (navigation) and ACT-006 (feedback) to cover all MVP scope items from PRD.
  - MVP is public documentation portal (no authentication); all activities assume anonymous users.
  - Release slicing (MVP vs Phase 2) will be handled via MoSCoW priorities in the USL.
  - Estimated 17 stories total for MVP scope; actual count may adjust during USL creation.
