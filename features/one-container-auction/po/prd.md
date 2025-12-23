# PRD: Container Auction & Marketplace
id: PRD-002
version: 0.1
owner: Product Owner
status: draft
last_updated: 2025-12-23

## 1. Summary
The **Container Auction & Marketplace** is a digital platform designed to facilitate the buying and selling of shipping containers through an auction mechanism. It connects local business companies, container companies, and ocean carriers, providing a centralized marketplace for secondhand and dispose containers. The MVP focuses on the core auction flow, while future phases will expand to include container damage fix quotations and container leasing auctions.

## 2. Problem Statement
### 2.1 Pain Points
- **Fragmented Market**: Local businesses and container companies lack a centralized, transparent platform to trade containers.
- **Inefficient Process**: Current methods for selling dispose/secondhand containers are manual, slow, and lack competitive pricing mechanisms.
- **Lack of Transparency**: Buyers often struggle to find available inventory and fair market prices.
- **No Digital Quotation for Repairs**: (Phase 2) There is no easy way to get competitive bids for container repairs.

### 2.2 Opportunities
- **Streamline Operations**: Automate the bidding and transaction process to save time for both buyers and sellers.
- **Market Discovery**: Create a go-to marketplace for container inventory.
- **Price Discovery**: Auction mechanism ensures fair market value for assets.

## 3. Goals & Non-Goals
### 3.1 Business Goals
- Launch a functional MVP enabling end-to-end container auctions by Q1 2026.
- Onboard initial set of sellers (Ocean Carriers/Container Companies) and buyers (Local Biz).
- Facilitate successful auction transactions with transparent bidding history.

### 3.2 User Goals
- **Sellers**: Easily list containers, track bids, and finalize sales.
- **Buyers**: Search for containers, place bids, and win auctions.
- **Admins**: Manage users, listings, and oversee platform health.

### 3.3 Scope (MVP - Phase 1)
- **User Roles**: Seller, Bidder, Admin.
- **Core Flow**:
    - Seller posts a container (Secondhand/Dispose).
    - Bidder views listing and places bids.
    - Real-time (or near real-time) bid updates.
    - Auction timer expiration.
    - Winner determination.
- **Admin Portal**: Integrated `/admin` route for platform management (User management, Listing moderation).
- **Platform**: Web Application (Next.js).

### 3.4 Non-Goals (Phase 2 - Post-MVP)
- **Container Damage Fix Quotation**: Bidding for repair services.
- **Leasing Container Auction**: Auctions for leasing contracts.
- **Complex Payment Integration**: MVP may handle payments manually or via simple integration; full escrow/complex payment flows are Phase 2.
- **Mobile Native App**: Web responsive only for MVP.

## 4. User Personas
- **Local Biz Company (Buyer)**: Needs containers for storage, transport, or modification. Wants good prices and easy access.
- **Container Company (Seller/Buyer)**: Trades containers regularly. Needs a liquid market.
- **Ocean Carrier (Seller)**: Needs to dispose of aging container fleet efficiently.
- **Platform Admin**: Operates the marketplace.

## 5. Key User Flows
1.  **Listing Creation**: Seller logs in -> "Sell Container" -> Enters details (Type, Condition, Photos, Start Price, End Time) -> Publishes.
2.  **Bidding**: Buyer logs in -> Browses/Searches -> Views Detail -> Places Bid -> Receives Confirmation.
3.  **Auction End**: Time expires -> Highest bidder notified -> Seller notified -> Payment/Handover instructions generated.

## 6. Technical Considerations
- **Framework**: Next.js 14+ (App Router).
- **Styling**: Tailwind CSS + Shadcn UI.
- **Database/State**:
    - MVP: Mock data / JSON storage for initial prototype (following "Frontend First" approach).
    - Production: Postgres/SQL (future).
- **Admin**: Built as a protected route (`/admin`) within the main application.
