# Vercel Deployment Plan for Sample Projects

This guide standardizes how to deploy any sample project in this repo to Vercel's free tier. It assumes a Next.js app in a `features/<feature-name>/code` directory, mirroring current samples. Adapt paths if a project differs.

## 1. Prerequisites
- **Node.js 20+** locally to match Vercel's default runtime and the samples' guidance.
- **Vercel account** (free tier is sufficient) and CLI installed if using terminal: `npm i -g vercel`.
- **Repository access** so Vercel can import the monorepo and select the correct project root.

## 2. Project Discovery (per sample)
1. Identify the feature folder (e.g., `features/one-api-portal-mvp/code`).
2. Confirm `package.json` includes standard Next.js scripts:
   - `npm run dev`
   - `npm run build`
   - `npm run start`
3. List required environment variables (if any) in `.env.local`; prepare matching keys for Vercel Project Settings.

## 3. Create a Vercel Project
Use either the dashboard or CLI for each sample:

### Dashboard path (recommended)
1. **Import Project** → select this Git repo.
2. Set **Project Root** to the feature's `code` directory.
3. Build settings (defaults usually auto-detected):
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Save and trigger the initial deployment (creates a preview URL).

### CLI path
```bash
cd features/<feature-name>/code
vercel          # creates a preview deployment
vercel --prod   # promotes to production
```

## 4. Pre-deploy Checklist (repeat for every feature)
- ✅ `npm run build` succeeds locally on Node 20+.
- ✅ All environment variables are present locally and in Vercel.
- ✅ Public routes and API endpoints are reachable locally.
- ✅ No hardcoded localhost URLs in client code; use relative paths or env-driven base URLs.

## 5. Post-deploy Validation
- Hit the deployed URL (preview and production) for smoke tests: `/`, key pages, and API routes.
- Run quick quality checks: Lighthouse/AXE for accessibility and performance (target ≥90 where applicable).
- Confirm 404 handling and redirect rules if defined.
- Share the Vercel URL with stakeholders for sign-off.

## 6. Ongoing Maintenance
- Each PR triggers a Vercel preview; review before merging.
- Use Vercel Environment Variables for secrets; avoid committing sensitive data.
- Rotate tokens/keys on a cadence and update Vercel settings accordingly.
- If a feature adds custom domains, map them via **Domains** in the Vercel project and verify SSL status.

## 7. Troubleshooting Quick Reference
- **Build fails:** Check Node version, missing env vars, or outdated lockfile; re-run `npm install` and `npm run build` locally.
- **API errors in production:** Verify env vars and base URLs; Vercel serverless functions use the same `.env` keys when configured.
- **Unexpected routing:** Ensure Next.js `app` or `pages` structure is intact; clear stale cache with a fresh deployment if needed.
- **Large assets:** Prefer CDN-hosted assets or Next.js Image Optimization; keep repo assets lean for faster builds.

## 8. Template for New Feature Setup
Copy and adjust this snippet when adding a new sample:

```md
### <Feature Name> (features/<feature-name>/code)
- Project root: `features/<feature-name>/code`
- Build: `npm run build`
- Output: `.next`
- Env vars: <list or `None`>
- Deploy: Vercel dashboard import or `vercel --prod`
- Notes: <routing quirks, API mocks, etc.>
```