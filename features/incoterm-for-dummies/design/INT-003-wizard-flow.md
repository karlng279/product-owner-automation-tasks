# Interaction Diagram: Wizard Flow

**Interaction ID:** INT-003
**Feature:** Incoterm for Dummies (PRD-001)
**Stories:** ST-013, ST-014, ST-015
**Wireframes:** WF-010, WF-011, WF-012
**Components:** COMP-006 (Wizard Progress), COMP-007 (Recommendation Card)
**Created:** 2026-01-23

---

## 1. Overview

This interaction diagram documents the Incoterm selector wizard flow from start through questions to personalized recommendations.

---

## 2. State Diagram

```
                         ┌─────────────────┐
                         │  Wizard Start   │
                         │    (WF-010)     │
                         └────────┬────────┘
                                  │
                         [Click Start Wizard]
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                      WIZARD QUESTIONS                           │
│                         (WF-011)                                │
│                                                                 │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐ │
│   │   Q1     │───▶│   Q2     │───▶│   Q3     │───▶│   Q4     │ │
│   │Transport │    │Shipping  │    │Customs   │    │Insurance │ │
│   │Mode      │    │Party     │    │Handling  │    │Needs     │ │
│   └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘ │
│        │               │               │               │       │
│        │◀──[Back]──────│◀──[Back]──────│◀──[Back]──────│       │
│        │               │               │               │       │
│        │               │               │               ▼       │
│        │               │               │         ┌──────────┐  │
│        │               │               └────────▶│   Q5     │  │
│        │               │                         │Risk      │  │
│        │               │                         │Preference│  │
│        │               │                         └────┬─────┘  │
│        │               │                              │        │
│        │               │◀─────────[Back]──────────────┤        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                                  │
                         [Complete Q5, Click Next]
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Calculate     │
                         │   Recommendations│
                         └────────┬────────┘
                                  │
                                  ▼
                         ┌─────────────────┐
                         │   Results       │
                         │   (WF-012)      │
                         └────────┬────────┘
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
              ▼                   ▼                   ▼
       [Start Over]        [Learn More]        [Compare These]
              │                   │                   │
              ▼                   ▼                   ▼
       Wizard Start       Incoterm Detail      Comparison View
       (clear state)                          (pre-selected)
```

---

## 3. Question Flow Logic

```
┌──────────────────────────────────────────────────────────────────┐
│                   QUESTION ADAPTATION                            │
└──────────────────────────────────────────────────────────────────┘

Q1: Transport Mode
├── Sea/Ocean ──────▶ Include sea-only questions
├── Air ────────────▶ Skip sea-specific, show any-mode
├── Road/Rail ──────▶ Skip sea-specific, show any-mode
└── Multimodal ─────▶ Show any-mode only

Q2-Q5: Standard questions (may be adapted based on Q1)

┌──────────────────────────────────────────────────────────────────┐
│                   ANSWER SCORING                                 │
└──────────────────────────────────────────────────────────────────┘

Each Incoterm has attributes that match answers:

FOB matches:
- Q1: Sea/Ocean ✓
- Q2: Buyer ships ✓
- Q3: Seller handles export ✓
- Q4: No insurance needed ✓
- Q5: Early risk transfer ✓

Score = count of matching attributes / total
Best match = highest score
```

---

## 4. Question Details

### Q1: Transport Mode
| Option | Value | Affects |
|--------|-------|---------|
| Sea/Ocean shipping | sea | Include FAS, FOB, CFR, CIF |
| Air freight | air | Exclude sea-only terms |
| Road/Rail | land | Exclude sea-only terms |
| Multiple modes | multi | Show any-mode terms |

### Q2: Who Arranges Shipping
| Option | Value | Matches |
|--------|-------|---------|
| The Seller | seller | CFR, CIF, CPT, CIP, DAP, DPU, DDP |
| The Buyer | buyer | EXW, FCA, FAS, FOB |
| Not sure | neutral | All (no filter) |

### Q3: Export Customs
| Option | Value | Matches |
|--------|-------|---------|
| The Seller | seller | Most terms (standard) |
| The Buyer | buyer | EXW only |
| Not sure | neutral | All |

### Q4: Insurance Requirement
| Option | Value | Matches |
|--------|-------|---------|
| Yes, include it | required | CIF, CIP |
| No, I'll arrange | optional | All others |
| Not sure | neutral | All |

### Q5: Risk Transfer Preference
| Option | Value | Matches |
|--------|-------|---------|
| As early as possible | early | EXW, FCA, FOB |
| Somewhere in transit | middle | CFR, CIF, CPT, CIP |
| As late as possible | late | DAP, DPU, DDP |

---

## 5. Scoring Algorithm

```javascript
function calculateRecommendations(answers) {
  const scores = {};

  for (const incoterm of ALL_INCOTERMS) {
    let score = 0;
    let total = 0;

    // Q1: Transport mode
    if (answers.transport !== 'neutral') {
      total++;
      if (incoterm.transportModes.includes(answers.transport)) {
        score++;
      }
    }

    // Q2: Shipping party
    if (answers.shippingParty !== 'neutral') {
      total++;
      if (incoterm.shippingParty === answers.shippingParty) {
        score++;
      }
    }

    // ... repeat for Q3, Q4, Q5

    scores[incoterm.code] = (score / total) * 100;
  }

  // Sort by score, return top 3
  return Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);
}
```

---

## 6. User Actions

### Wizard Start (WF-010)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Start Wizard | Click button | None | Go to Q1 | Button loading |
| Learn First | Click link | None | Go to Learn | Standard nav |

### Question Pages (WF-011)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Select Answer | Click option | None | Highlight option | Card highlight |
| Expand Help | Click accordion | None | Show explanation | Expand animation |
| Go Back | Click Back | Not on Q1 | Previous question | Preserve answer |
| Go Next | Click Next | Answer selected | Next question | Slide animation |

### Results Page (WF-012)

| Action | Trigger | Validation | Result | Feedback |
|--------|---------|------------|--------|----------|
| Learn More | Click button | None | Go to detail | Standard nav |
| Compare These | Click button | None | Go to comparison | Pre-select top 2-3 |
| Start Over | Click button | None | Clear, go to start | Optional confirm |
| Edit Answers | Click Edit | None | Go to Q1 | Preserve all |

---

## 7. URL State

```
Results can be shared via URL:

/find/results?t=sea&s=buyer&c=seller&i=no&r=early

Where:
- t = transport
- s = shipping party
- c = customs
- i = insurance
- r = risk preference

On load: Parse params, calculate recommendations
```

---

**Status:** Draft
