# Wireframe: Wizard Start Page

**Wireframe ID:** WF-010
**Feature:** Incoterm for Dummies (PRD-001)
**Story:** ST-013 - Start Incoterm selector wizard
**Addresses:** AC-001 to AC-013
**Screen Type:** Landing / Entry

---

## Purpose

Introduce the Incoterm selector wizard, explain its purpose, and provide a clear starting point for users who want guided help finding the right Incoterm for their situation.

---

## ASCII Wireframe

### Desktop (> 1024px)

```
+--------------------------------------------------------------------------------+
| {Logo} Incoterm for Dummies    [Learn]  [Quiz]  [Reference]  [Compare]  [Find] |
+--------------------------------------------------------------------------------+
| Home > Find Right Incoterm                                                     |
+--------------------------------------------------------------------------------+
|                                                                                |
|                                                                                |
|                       🧭 Find the Right Incoterm                               |
|                                                                                |
|            Not sure which Incoterm to use? Answer a few simple                 |
|            questions about your shipping situation and we'll                   |
|            suggest the best options for you.                                   |
|                                                                                |
|                                                                                |
|            +----------------------------------------------------------+        |
|            |                                                          |        |
|            |  How it works:                                           |        |
|            |                                                          |        |
|            |  ① Answer 4-5 simple questions                           |        |
|            |  ② Get personalized recommendations                      |        |
|            |  ③ Learn why each Incoterm fits your needs               |        |
|            |                                                          |        |
|            |  ⏱️ Takes about 2 minutes                                 |        |
|            |                                                          |        |
|            +----------------------------------------------------------+        |
|                                                                                |
|                                                                                |
|            Step 1 of 5  ○───○───○───○───○                                      |
|                                                                                |
|                                                                                |
|                              [Start Wizard]                                    |
|                                                                                |
|                                                                                |
|  ┌────────────────────────────────────────────────────────────────────────┐    |
|  │  💡 Not sure? You can also [Learn about Incoterms first →] before     │    |
|  │     using the wizard.                                                  │    |
|  └────────────────────────────────────────────────────────────────────────┘    |
|                                                                                |
+--------------------------------------------------------------------------------+
```

### Mobile (< 640px)

```
+----------------------------------+
| ≡  Incoterm for Dummies          |
+----------------------------------+
| Home > Find                      |
+----------------------------------+
|                                  |
|  🧭 Find the Right               |
|     Incoterm                     |
|                                  |
|  Answer a few questions and      |
|  we'll suggest the best          |
|  Incoterms for your situation.   |
|                                  |
|  +----------------------------+  |
|  | How it works:              |  |
|  |                            |  |
|  | ① Answer 4-5 questions     |  |
|  | ② Get recommendations      |  |
|  | ③ Learn why they fit       |  |
|  |                            |  |
|  | ⏱️ ~2 minutes              |  |
|  +----------------------------+  |
|                                  |
|  Step 1 of 5                     |
|  ○───○───○───○───○               |
|                                  |
|  [Start Wizard]                  |
|                                  |
|  💡 [Learn first →]              |
|                                  |
+----------------------------------+
```

---

## UI Elements Detail

### Header

**Elements:**
- Icon: Compass (🧭)
- Title: "Find the Right Incoterm" (h1)
- Subtitle: Explanation of what the wizard does

### How It Works Card

**Elements:**
- Numbered steps (1, 2, 3)
- Time estimate badge

### Progress Indicator

**Elements:**
- Step indicator: "Step 1 of 5"
- Visual dots showing progress

### Actions

**Elements:**
- Primary CTA: "Start Wizard" button
- Alternative: Link to learning section

---

## Components Required

### ShadCN Components

- [ ] Button (size: lg, for Start Wizard)
- [ ] Card (for how it works section)

### Custom Components

- [ ] StepIndicator: Dot-based progress

---

**Created:** 2026-01-23
**Status:** Draft
