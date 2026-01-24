# PRD: Incoterm for Dummies
id: PRD-001
version: 0.1
owner: Product Team
status: draft
last_updated: 2026-01-23

## 1. Summary
We are building an all-in-one Incoterm learning platform for import/export beginners and students. It combines educational content, a reference guide, and a comparison tool to help users understand, compare, and select the appropriate Incoterms 2020 for their trade transactions. The MVP focuses on making complex international trade terminology accessible and easy to understand.

## 2. Problem Statement
### 2.1 Pain Points
  - Beginners find Incoterms confusing due to complex legal terminology and similar-sounding abbreviations (FOB, FCA, CIF, etc.).
  - Existing resources are either too technical (ICC publications) or too scattered (random blog posts), lacking a single trusted source.
  - Users struggle to understand which party (buyer/seller) is responsible for costs, risks, and logistics at each stage.
  - Students and new professionals have no interactive way to test their understanding of Incoterms.
  - Choosing the wrong Incoterm can lead to costly disputes, unexpected charges, or compliance issues.

### 2.2 Opportunities
  - Provide a beginner-friendly, visual explanation of all 11 Incoterms 2020 with clear responsibility breakdowns.
  - Become the go-to resource for trade beginners and educational institutions.
  - Create an interactive learning experience with quizzes to reinforce understanding.
  - Enable side-by-side comparison to help users make informed decisions.

## 3. Goals & Non-Goals
### 3.1 Business Goals
  - Achieve 1,000 monthly active users within three months of launch.
  - Attain an average session duration of at least 5 minutes (indicating engaged learning).
  - Become a recommended resource in at least 3 international trade courses or training programs.

### 3.2 User Goals
  - Quickly understand what each Incoterm means in plain language.
  - Visually see the transfer point of cost and risk between buyer and seller.
  - Compare 2-3 Incoterms side-by-side to understand differences.
  - Test knowledge through interactive quizzes with immediate feedback.
  - Find the appropriate Incoterm based on their specific shipping scenario.

### 3.3 Non-Goals
  - No legal advice or contract generation features in MVP.
  - No user accounts or personalized learning paths in MVP.
  - No integration with actual shipping or customs systems.
  - No support for historical Incoterms versions (only Incoterms 2020).
  - No mobile native app (web responsive only).

## 4. Narrative / Use Cases
**Use Case 1 - Learning the basics**
Minh is a supply chain student who needs to understand Incoterms for an upcoming exam. She opens Incoterm for Dummies, browses through the educational section, reads the plain-language explanation of each term, views the visual diagrams showing responsibility transfer points, and takes the quiz to test her knowledge.

**Use Case 2 - Quick reference lookup**
Hoa receives a quotation with "CIF Ho Chi Minh" terms. She quickly searches for CIF in the reference guide, sees a visual breakdown showing that the seller pays for shipping and insurance to the destination port, and now understands what costs she needs to budget as the buyer.

**Use Case 3 - Comparing options**
Long is negotiating with a supplier and wants to choose between FOB and CIF. He uses the comparison tool to see both terms side-by-side, compares the cost and risk transfer points, and decides that FOB is better for his situation since he has a reliable freight forwarder.

**Use Case 4 - Scenario-based selection**
Nam is new to importing and doesn't know which Incoterm to request. He answers a few simple questions about his shipping scenario (mode of transport, who arranges shipping, insurance preferences), and the tool suggests appropriate Incoterms with explanations.

## 5. Scope & Constraints
### 5.1 In Scope
  - Landing page with clear value proposition and navigation.
  - Educational section covering all 11 Incoterms 2020 with plain-language explanations.
  - Visual diagrams showing cost and risk transfer points for each Incoterm.
  - Interactive quiz feature with multiple-choice questions and immediate feedback.
  - Reference guide with quick lookup and search functionality.
  - Comparison tool to view 2-3 Incoterms side-by-side.
  - Incoterm selector/wizard based on user scenario questions.
  - Responsive web design for desktop, tablet, and mobile.

### 5.2 Out of Scope
  - User registration and login functionality.
  - Progress tracking or learning analytics.
  - PDF export or printable guides.
  - Multi-language support (English only for MVP).
  - Community features (forums, comments).
  - Integration with external trade or shipping platforms.

### 5.3 Constraints & Assumptions
  - All Incoterm content is based on ICC Incoterms 2020 rules.
  - Content must include disclaimers that this is educational only, not legal advice.
  - Application must work offline-capable for basic reference (no backend dependency for core content).
  - Initial content will be curated from public domain sources and simplified for beginners.

## 6. Success Metrics
  - metric_id: MET-001
    description: Monthly Active Users (MAU) visiting the platform.
    target: >= 1,000 MAU by month 3.
  - metric_id: MET-002
    description: Average session duration indicating engagement.
    target: >= 5 minutes average session duration.
  - metric_id: MET-003
    description: Quiz completion rate as indicator of learning engagement.
    target: >= 40% of users who start a quiz complete it.
  - metric_id: MET-004
    description: Comparison tool usage indicating decision-making value.
    target: >= 30% of users use the comparison feature.

## 7. Links
  - design_figma: N/A
  - wireframe_text: ../design/wireframes/
  - special_notes: N/A

## 8. Technical Considerations
  - Frontend: Next.js 14+ with App Router, TypeScript, TailwindCSS, ShadCN UI.
  - Data: Static JSON data files for Incoterm content (no database needed for MVP).
  - State Management: React Context for quiz state and comparison selections.
  - Deployment: Vercel for hosting with static site generation where possible.
  - Analytics: Basic page view tracking (can use Vercel Analytics or similar).
  - SEO: Server-side rendering for educational content pages for discoverability.

## 9. Risks & Open Questions
### 9.1 Risks
  - id: RISK-001
    description: Content accuracy - simplified explanations may lose important nuances.
    mitigation: Have content reviewed by trade professionals; include disclaimers and links to official ICC resources.
  - id: RISK-002
    description: Legal concerns - users may rely on content for actual trade decisions.
    mitigation: Clear disclaimers on every page; recommend consulting professionals for actual transactions.
  - id: RISK-003
    description: User engagement - users may visit once and not return.
    mitigation: Focus on quiz gamification; create shareable results; consider future email course feature.

### 9.2 Open Questions
  - id: Q-001
    description: Should we include real-world examples with actual port names and scenarios?
    owner: Content Team
  - id: Q-002
    description: What level of detail should quiz questions cover (basic concepts vs. edge cases)?
    owner: Product Team
  - id: Q-003
    description: Should the Incoterm selector wizard be in MVP or phase 2?
    owner: Product Team
