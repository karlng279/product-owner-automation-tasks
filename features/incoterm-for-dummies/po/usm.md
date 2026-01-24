# USM: Incoterm for Dummies
id: USM-001
prd_id: PRD-001
owner: Product Team
status: draft
last_updated: 2026-01-23

## User Activities

  - activity_id: ACT-001
    name: "Learn Incoterms fundamentals"
    description: "User explores educational content to understand what Incoterms are and how they work."
    steps:
      - step_id: STEP-001
        name: "Discover the platform"
        description: "User lands on the homepage and understands the value proposition of the learning platform."
        stories: [ST-001]
      - step_id: STEP-002
        name: "Browse Incoterms overview"
        description: "User views the list of all 11 Incoterms to get a high-level understanding."
        stories: [ST-002]
      - step_id: STEP-003
        name: "Learn individual Incoterm"
        description: "User reads detailed explanation of a specific Incoterm with visual diagrams."
        stories: [ST-003, ST-004]
      - step_id: STEP-004
        name: "Understand responsibilities"
        description: "User views the buyer/seller responsibility breakdown for costs, risks, and logistics."
        stories: [ST-005]

  - activity_id: ACT-002
    name: "Test knowledge through quizzes"
    description: "User takes interactive quizzes to reinforce learning and validate understanding."
    steps:
      - step_id: STEP-005
        name: "Start a quiz"
        description: "User navigates to quiz section and begins an assessment."
        stories: [ST-006]
      - step_id: STEP-006
        name: "Answer quiz questions"
        description: "User answers multiple-choice questions about Incoterms concepts."
        stories: [ST-007]
      - step_id: STEP-007
        name: "Review quiz results"
        description: "User sees their score, correct answers, and explanations for incorrect responses."
        stories: [ST-008]

  - activity_id: ACT-003
    name: "Look up specific Incoterm"
    description: "User quickly finds information about a specific Incoterm for reference."
    steps:
      - step_id: STEP-008
        name: "Search for Incoterm"
        description: "User searches by Incoterm code (e.g., FOB, CIF) or keyword."
        stories: [ST-009]
      - step_id: STEP-009
        name: "View quick reference card"
        description: "User views a concise summary card with key information about the Incoterm."
        stories: [ST-010]

  - activity_id: ACT-004
    name: "Compare Incoterms"
    description: "User compares multiple Incoterms side-by-side to understand differences."
    steps:
      - step_id: STEP-010
        name: "Select Incoterms to compare"
        description: "User selects 2-3 Incoterms from a list or search results."
        stories: [ST-011]
      - step_id: STEP-011
        name: "View comparison table"
        description: "User views side-by-side comparison showing differences in responsibilities, costs, and risks."
        stories: [ST-012]

  - activity_id: ACT-005
    name: "Find the right Incoterm for a scenario"
    description: "User uses a guided wizard to determine which Incoterm suits their situation."
    steps:
      - step_id: STEP-012
        name: "Start the selector wizard"
        description: "User begins the guided questionnaire to find appropriate Incoterms."
        stories: [ST-013]
      - step_id: STEP-013
        name: "Answer scenario questions"
        description: "User answers questions about transport mode, who arranges shipping, insurance needs, etc."
        stories: [ST-014]
      - step_id: STEP-014
        name: "Review recommendations"
        description: "User views recommended Incoterms with explanations of why they fit the scenario."
        stories: [ST-015]

## Notes
  - Story IDs (ST-001 to ST-015) will be defined in the USL for PRD-001.
  - Activities align with the four main use cases described in the PRD: learning basics, quick reference, comparing options, and scenario-based selection.
  - ACT-002 (quizzes) is separated from ACT-001 (learning) to allow for independent prioritization in MVP vs post-MVP.
  - ACT-005 (selector wizard) may be deprioritized to post-MVP based on development resources.
  - Release slicing (MVP vs post-MVP) will be handled via MoSCoW priorities in the USL.
