# PRD: ONE API Portal - Developer Portal Redesign (MVP)
id: PRD-001
version: 0.2
owner: Technical PM
status: draft
last_updated: 2025-12-08

**Revision Notes (v0.2):**
- Moved Getting Started Wizard to Phase 2 (out of MVP scope)
- Moved Developer Dashboard to Phase 2 (out of MVP scope)
- Moved Authentication/Security to Phase 2 (out of MVP scope)
- MVP is now a public documentation portal (no user accounts or authentication)
- Simplified tech stack: static site generator, no backend/database
- Updated use cases, success metrics, and technical considerations
- Reduced timeline from 12-16 weeks to 8-10 weeks

## 1. Summary
We are rebuilding the ONE LINE developer portal (https://developers.one-line.com/) with a modern, developer-friendly interface that dramatically improves the developer experience. The MVP focuses on redesigning the core public portal experience: homepage, comprehensive API documentation, interactive code examples, search functionality, and mobile-responsive design. This is a public documentation portal (no authentication required) that makes ONE LINE APIs discoverable and easy to integrate. Phase 2 will add developer dashboard, authentication, and API monetization.

## 2. Problem Statement
### 2.1 Pain Points
  - **Outdated, non-intuitive UI**: Current portal has poor visual design and developer experience compared to modern API portals (Stripe, Twilio, GitHub).
  - **Poor information architecture**: Developers struggle to find API endpoints, documentation, and guides; navigation is unclear and search is limited or non-existent.
  - **Limited code examples**: Documentation lacks copy-paste code snippets in multiple languages and real-world integration examples; developers waste time figuring out basic requests.
  - **No mobile/responsive design**: Portal is desktop-only, making it difficult for developers to reference documentation on mobile devices or tablets.
  - **Poor discoverability**: Developers don't know what APIs are available, what use cases they support, or how to get started without extensive searching.

### 2.2 Opportunities
  - **Become the reference standard**: Position ONE LINE as having the best API documentation in the shipping/logistics space.
  - **Reduce support burden**: Clear documentation with code examples will significantly reduce "how do I get started" and "how do I call this endpoint" support tickets.
  - **Enable future monetization**: Modern, well-documented portal sets foundation for Phase 2 developer dashboard and API pricing tiers.
  - **Increase API adoption**: Better developer experience will accelerate integration by freight forwarders, logistics providers, and third-party developers.

## 3. Goals & Non-Goals
### 3.1 Business Goals
  - Reduce time-to-understand-APIs from current baseline (estimated 1-2 hours of searching) to under 15 minutes by end of Q1 2026.
  - Achieve developer satisfaction score of 4.0/5.0+ for documentation quality within 3 months of launch (via feedback widget).
  - Reduce support tickets tagged "getting started" or "documentation" by 50% within 6 months.
  - Increase portal engagement (page views, time on site, search usage) by 100% within 6 months of launch.

### 3.2 User Goals
  - **Freight Forwarders & Logistics Providers**: Quickly understand what APIs are available, find endpoint documentation, and copy code examples to integrate into their TMS/platforms.
  - **Third-Party Developers**: Find comprehensive documentation with request/response schemas and copy working code snippets to build shipping applications or SaaS products.
  - **Shippers**: Explore API capabilities and use cases for custom dashboards, automation tools, and multi-carrier integrations.
  - **All Developers**: Easily search for specific endpoints, understand parameters and error codes, and stay updated on API changes via changelog.

### 3.3 Non-Goals
  - **No authentication/user accounts in MVP**: No signup, login, or OAuth; portal is public and accessible without authentication. (Phase 2)
  - **No developer dashboard in MVP**: No API key management, usage statistics, or account settings. (Phase 2)
  - **No getting started wizard in MVP**: No step-by-step interactive onboarding flow; developers use static guides and code examples. (Phase 2)
  - **No API playground/sandbox in MVP**: No "try it in browser" functionality; developers test APIs using curl/Postman with their own credentials. (Phase 2)
  - **No API pricing/monetization in MVP**: Freemium, Professional, and Enterprise tiers are Phase 2; MVP provides free public documentation.
  - **No new API endpoints**: MVP redesigns the portal for existing ONE LINE APIs; no new shipping functionality.
  - **No multi-language localization**: MVP is English-only; internationalization (i18n) for APAC markets is future enhancement.
  - **No dedicated mobile apps**: MVP is responsive web design; native iOS/Android apps are out of scope.

## 4. Narrative / Use Cases
**Use Case 1 – Discovering Available APIs**
Alex, a freight forwarder developer, visits the new ONE API Portal homepage. Within 2 minutes, they understand what APIs are available (shipment tracking, schedules, routes, booking) and their key use cases. They click "API Reference" and see a clear overview of all endpoints organized by category. They find the "Getting Started" guide, which explains how to obtain API credentials by contacting ONE LINE support, and shows curl examples for the first API call. Alex bookmarks the portal for easy reference.

**Use Case 2 – Finding Endpoint Documentation**
Maria, a logistics platform engineer, needs to integrate shipment tracking into her multi-carrier visibility platform. She uses the search bar to find "track shipment" and is taken directly to the "GET /shipments/{id}" endpoint documentation. She reads the clear documentation showing parameters, request/response schemas, error codes, and sees code examples in curl, Node.js, Python, and Java. She copies the Node.js snippet, adapts it with her API credentials (obtained via support), and successfully makes her first API call within 10 minutes.

**Use Case 3 – Troubleshooting Integration Issues**
Jordan, an existing developer, encounters an error while integrating the booking API. He visits the portal, navigates to "GET /bookings" endpoint documentation, and scrolls to the "Error Codes" section. He finds error code "400 - Invalid container type" with a clear explanation and example. He also checks the changelog to see if anything changed recently. He fixes his code based on the documentation and successfully completes his integration without needing to contact support.

**Use Case 4 – Staying Updated on API Changes**
Sam, a third-party developer building a shipment notification SaaS, regularly checks the portal's changelog page. He sees that a new "estimatedDeliveryTime" field was added to the tracking API response. He clicks through to the updated "GET /shipments/{id}" documentation, sees the new field in the response schema with clear description, copies the updated Node.js example, and deploys the enhancement to his customers within an hour.

## 5. Scope & Constraints
### 5.1 In Scope
  - **Homepage Redesign**: Modern hero section with clear value proposition, key API categories (Tracking, Schedules, Booking, Routes), use case highlights, "View Documentation" CTA, customer logos/testimonials.
  - **API Reference Documentation**: Comprehensive reference docs for all endpoints organized by category, showing:
    - Endpoint URL and HTTP method (GET, POST, etc.)
    - Authentication requirements (API key in header)
    - Request parameters (path, query, body) with types and descriptions
    - Response schema with example JSON
    - Error codes and explanations
    - Rate limits and pagination details
  - **Code Examples**: Copy-paste code snippets in 4+ languages (curl, JavaScript/Node.js, Python, Java) for every endpoint, with syntax highlighting.
  - **Getting Started Guide (Static)**: Single-page guide explaining:
    - Overview of available APIs and use cases
    - How to obtain API credentials (contact ONE LINE support with email template)
    - Authentication method (API key in Authorization header)
    - First API call example (curl to GET /shipments)
    - Common error codes and troubleshooting tips
  - **Search Functionality**: Global search across documentation and endpoints with autocomplete; search by endpoint name, keyword, or use case.
  - **Changelog Page**: Public changelog showing API updates, new fields, deprecations, and migration guides with dates.
  - **Mobile-Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile (iOS/Android browsers); mobile-friendly code examples.
  - **Navigation & Information Architecture**: Clear top-level navigation (Home, API Reference, Guides, Changelog), sidebar navigation for API Reference with categories, breadcrumbs, anchor links.

### 5.2 Out of Scope
  - **Getting Started Wizard** (interactive step-by-step): Phase 2 feature.
  - **Developer Dashboard** (API keys, usage stats): Phase 2 feature.
  - **Authentication/User Accounts** (signup, login, OAuth): Phase 2 feature; MVP is public portal.
  - **API Playground/Sandbox** ("try in browser"): Phase 2 feature; developers test with curl/Postman.
  - **API pricing, billing, subscription management**: Phase 2.
  - **Advanced analytics and insights**: Phase 2.
  - **Self-service API key management**: Phase 2; MVP credentials obtained via support.
  - **Multi-language localization** (i18n) beyond English: Future enhancement.
  - **Native mobile apps** for iOS/Android: Responsive web only.
  - **Webhooks or event streaming APIs**: Future API enhancement.
  - **Community forum or developer support chat**: Consider for Phase 2.
  - **Postman collection or Swagger UI exports**: Future enhancement (basic OpenAPI spec only).

### 5.3 Constraints & Assumptions
  - **API Backend**: Existing ONE LINE APIs (tracking, schedules, booking) remain unchanged; portal is documentation-only and does not proxy or call APIs.
  - **No User Authentication**: MVP is public; no user accounts, sessions, or API key storage. API credentials are obtained via ONE LINE support (out-of-band).
  - **Tech Stack**: Static site generator (Next.js with SSG, Docusaurus, or similar) for SEO and performance; no backend or database required.
  - **Hosting**: Static hosting (Vercel, Netlify, AWS S3+CloudFront); CDN for global performance; target 99.9% uptime.
  - **Content Management**: Documentation content stored in Markdown/MDX files in git repository; updates via git commits (no CMS in MVP).
  - **Timeline**: MVP launch target Q1 2026 (8-10 weeks from kickoff, reduced scope from original 12-16 weeks).

## 6. Success Metrics
  - metric_id: MET-001
    description: Average time to find endpoint documentation and understand how to use it (measured via user testing or surveys).
    target: ≤15 minutes for 80% of new developers (baseline: 1-2 hours currently).

  - metric_id: MET-002
    description: Documentation satisfaction score (1-5 rating via feedback widget on each page).
    target: Average rating ≥4.0/5.0 within 3 months of launch.

  - metric_id: MET-003
    description: Support ticket volume for "getting started" and "documentation" categories.
    target: 50% reduction in tickets within 6 months vs. pre-MVP baseline.

  - metric_id: MET-004
    description: Portal engagement metrics (unique visitors, page views, search usage, time on site).
    target: 100% increase in page views and 50% increase in avg. time on site within 6 months.

  - metric_id: MET-005
    description: Search usage and success rate (% of searches that lead to clicking a result).
    target: ≥70% search success rate; ≥30% of sessions use search.

  - metric_id: MET-006
    description: Developer feedback and feature requests via feedback widget or support.
    target: Collect ≥50 pieces of qualitative feedback in first 3 months to inform Phase 2 priorities.

## 7. Links
  - design_figma: N/A (wireframes to be created in design phase)
  - wireframe_text: ./wireframes/PRD-001-homepage-wireframe.md
  - special_notes: ./notes/PRD-001-competitive-analysis.md
  - openapi_spec: N/A (to be generated from existing API documentation)

## 8. Technical Considerations
  - **Frontend Framework**: Next.js 14+ with Static Site Generation (SSG) or Docusaurus for documentation-focused sites; React 18+, TypeScript.
  - **Styling**: Tailwind CSS or shadcn/ui for modern design system; responsive design for mobile/tablet/desktop.
  - **API Documentation Format**: OpenAPI 3.0 spec as source of truth; custom React components to render endpoint docs with code examples.
  - **Content Management**: Markdown/MDX files stored in git repository for all guides and documentation; version control via git.
  - **Code Examples**: Syntax highlighting via Prism.js or Shiki; copy-to-clipboard functionality; support for curl, JavaScript, Python, Java.
  - **Search**: Algolia DocSearch (free for open-source docs) or Meilisearch for full-text search across documentation and endpoints.
  - **Hosting & Infrastructure**:
    - Static hosting: Vercel (Next.js SSG), Netlify, or AWS S3 + CloudFront
    - CDN: Cloudflare or built-in CDN from hosting provider
    - No backend servers, databases, or API gateways required
  - **Monitoring & Analytics**:
    - Google Analytics 4 for user behavior tracking (page views, search, navigation)
    - Hotjar or similar for heatmaps and user recordings (optional)
    - Uptime monitoring: Pingdom or UptimeRobot
  - **Security**: HTTPS-only (enforced via hosting provider); CSP headers; no user data storage or authentication in MVP.

## 9. Risks & Open Questions
### 9.1 Risks
  - id: RISK-001
    description: Existing ONE LINE APIs may have poor or incomplete documentation, making it hard to create accurate reference docs.
    mitigation: Conduct API audit early (test all endpoints, verify schemas); work with ONE LINE API team to fill documentation gaps or document known issues.

  - id: RISK-002
    description: Developers may expect interactive features (playground, dashboard, wizard) and be disappointed by static documentation portal.
    mitigation: Set clear expectations on homepage ("Phase 2 coming soon: Developer Dashboard"); highlight what IS available (comprehensive docs, code examples); collect feedback to prioritize Phase 2.

  - id: RISK-003
    description: Without authentication/dashboard, we cannot track individual developer usage or provide personalized onboarding.
    mitigation: Use aggregate analytics (Google Analytics) and feedback widget to measure success; Phase 2 will add personalized tracking.

  - id: RISK-004
    description: Static documentation may become outdated if API changes are not reflected quickly.
    mitigation: Establish process for updating docs when APIs change; use git-based workflow for fast updates; assign doc owner for each API.

### 9.2 Open Questions
  - id: Q-001
    description: What are the baseline metrics (current portal traffic, support ticket volume, time-to-find-documentation)?
    owner: Product + Analytics Team

  - id: Q-002
    description: How many programming languages should we support for code examples in MVP (target: 4+: curl, JavaScript, Python, Java)?
    owner: Developer Relations + Engineering

  - id: Q-003
    description: Should we use Next.js (SSG) or Docusaurus for documentation site? (Trade-off: flexibility vs. documentation-specific features)
    owner: Engineering Lead + Product

  - id: Q-004
    description: How will developers obtain API credentials if there's no signup flow? (Current answer: Contact ONE LINE support)
    owner: Product + Business Development
