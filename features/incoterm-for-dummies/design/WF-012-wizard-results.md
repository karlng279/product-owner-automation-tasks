# Wireframe: Wizard Results Page

**Wireframe ID:** WF-012
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-015 - View Incoterm recommendations
**Addresses:** AC-001 to AC-017
**Screen Type:** Results / Summary

---

## Purpose

Display personalized Incoterm recommendations based on user's answers, with clear explanations of why each term fits their scenario and next steps for learning more.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
|                                                                                |
|                                                                                |
|                   🎯 Recommended Incoterms for Your Scenario                   |
|                                                                                |
|                                                                                |
|  ╔════════════════════════════════════════════════════════════════════════╗    |
|  ║                                                                        ║    |
|  ║                           ⭐ BEST MATCH                                ║    |
|  ║                                                                        ║    |
|  ║                              FOB                                       ║    |
|  ║                         Free On Board                                  ║    |
|  ║                                                                        ║    |
|  ║                           95% Match                                    ║    |
|  ║                                                                        ║    |
|  ║  -------------------------------------------------------------------- ║    |
|  ║                                                                        ║    |
|  ║  Why this fits your needs:                                             ║    |
|  ║                                                                        ║    |
|  ║  ✓ You want to arrange your own shipping - FOB lets you control       ║    |
|  ║    the freight process from the origin port                           ║    |
|  ║                                                                        ║    |
|  ║  ✓ Sea transport selected - FOB is specifically designed for          ║    |
|  ║    ocean freight                                                       ║    |
|  ║                                                                        ║    |
|  ║  ✓ You prefer to arrange your own insurance - FOB doesn't include     ║    |
|  ║    seller-provided insurance                                           ║    |
|  ║                                                                        ║    |
|  ║                     [Learn More About FOB →]                           ║    |
|  ║                                                                        ║    |
|  ╚════════════════════════════════════════════════════════════════════════╝    |
|                                                                                |
|                                                                                |
|  Also Consider:                                                                |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  +----------------------------------+  +----------------------------------+    |
|  |  FCA                      85%    |  |  EXW                      70%    |    |
|  |  Free Carrier                    |  |  Ex Works                        |    |
|  |                                  |  |                                  |    |
|  |  Similar to FOB but works for    |  |  Maximum buyer control - you     |    |
|  |  any transport mode, not just    |  |  handle everything from the      |    |
|  |  sea. Good if you might use      |  |  seller's door. Lowest price     |    |
|  |  multimodal transport.           |  |  but most responsibility.        |    |
|  |                                  |  |                                  |    |
|  |  [Learn More →]                  |  |  [Learn More →]                  |    |
|  +----------------------------------+  +----------------------------------+    |
|                                                                                |
|                                                                                |
|  ============================================================================  |
|                                                                                |
|  Your Answers                                                         [Edit]   |
|  ----------------------------------------------------------------------------  |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  Transport mode:        Sea/Ocean shipping                            │    |
|  │  Who ships:             The Buyer (you)                               │    |
|  │  Export customs:        The Seller                                    │    |
|  │  Insurance:             You'll arrange your own                       │    |
|  │  Risk preference:       Early transfer (at origin)                    │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
|                                                                                |
|  +----------------------------------+  +----------------------------------+    |
|  |       [Compare These →]          |  |       [Start Over]               |    |
|  +----------------------------------+  +----------------------------------+    |
|                                                                                |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  ⚠️ Disclaimer: This is educational guidance only. Please consult     │    |
|  │     with trade professionals for actual business transactions.         │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
+--------------------------------------------------------------------------------+
```

---

## UI Elements Detail

### Primary Recommendation

**Elements:**
- "Best Match" badge with star
- Large Incoterm code
- Full name
- Match percentage (ring/badge)
- "Why this fits" explanation with checkmarks
- "Learn More" button

### Alternative Recommendations

**Elements:**
- 1-2 alternative cards
- Incoterm code and name
- Match percentage
- Brief explanation of fit
- "Learn More" link

### Your Answers Summary

**Elements:**
- Collapsible section
- All 5 answers listed
- "Edit" link to go back

### Actions

**Elements:**
- "Compare These" - pre-loads comparison with recommended terms
- "Start Over" - reset wizard

### Disclaimer

**Elements:**
- Warning callout
- Educational disclaimer

---

## Interactions

### Primary Interactions

1. **Learn More**
   - Trigger: Click button
   - Response: Navigate to Incoterm detail page
   - Feedback: Standard navigation

2. **Compare These**
   - Trigger: Click button
   - Response: Navigate to comparison with top 2-3 pre-selected
   - Feedback: URL includes selections

3. **Start Over**
   - Trigger: Click button
   - Response: Clear answers, return to wizard start
   - Feedback: Confirmation optional

4. **Edit Answers**
   - Trigger: Click "Edit"
   - Response: Return to wizard with answers preserved
   - Feedback: Can navigate through steps

---

## Components Required

### ShadCN Components

- [ ] Card (for recommendations)
- [ ] Badge (for match percentage, "Best Match")
- [ ] Button (for actions)
- [ ] Collapsible (for answers summary)
- [ ] Alert (for disclaimer)

### Custom Components

- [ ] RecommendationCard: Primary recommendation display
- [ ] AlternativeCard: Secondary recommendation
- [ ] MatchBadge: Percentage indicator

---

**Created:** 2026-01-23
**Status:** Draft
