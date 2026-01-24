import { Incoterm, WizardAnswer, Recommendation } from "@/types";
import { incoterms } from "./incoterms";

// Wizard question definitions
export const wizardQuestions = [
  {
    id: "transport",
    question: "What mode of transport will you primarily use?",
    helpText: "Sea-only Incoterms (FAS, FOB, CFR, CIF) can only be used for ocean/sea shipping.",
    options: [
      { value: "sea", label: "Sea/Ocean shipping", description: "Container ships, bulk carriers, tankers" },
      { value: "air", label: "Air freight", description: "Cargo planes, express air services" },
      { value: "land", label: "Road/Rail", description: "Trucks, trains, or combination" },
      { value: "multi", label: "Multiple modes", description: "Combination of sea, air, and/or land" },
    ],
  },
  {
    id: "shippingParty",
    question: "Who should arrange the main transportation?",
    helpText: "This determines whether the seller or buyer is responsible for booking and paying for the main carriage.",
    options: [
      { value: "seller", label: "The Seller", description: "Seller books freight, often better rates" },
      { value: "buyer", label: "The Buyer", description: "Buyer controls shipping, uses own forwarder" },
      { value: "neutral", label: "Not sure / Either", description: "Open to either arrangement" },
    ],
  },
  {
    id: "customs",
    question: "Who should handle export customs clearance?",
    helpText: "Export clearance happens in the seller's country. Usually the seller handles this as they know local requirements.",
    options: [
      { value: "seller", label: "The Seller", description: "Standard practice for most international sales" },
      { value: "buyer", label: "The Buyer", description: "Only practical if buyer has presence in seller's country" },
      { value: "neutral", label: "Not sure", description: "Recommend seller handles export clearance" },
    ],
  },
  {
    id: "insurance",
    question: "Should the seller be required to provide cargo insurance?",
    helpText: "CIF and CIP require seller to provide insurance. Other terms leave insurance optional.",
    options: [
      { value: "required", label: "Yes, include insurance", description: "Seller must provide transit insurance" },
      { value: "optional", label: "No, I'll arrange my own", description: "Buyer arranges insurance if needed" },
      { value: "neutral", label: "Not sure", description: "Consider your risk tolerance" },
    ],
  },
  {
    id: "riskPreference",
    question: "When should risk transfer from seller to buyer?",
    helpText: "Early transfer means buyer bears more transit risk. Late transfer means seller bears more risk.",
    options: [
      { value: "early", label: "As early as possible", description: "Buyer takes risk from pickup/port" },
      { value: "middle", label: "Somewhere in transit", description: "Risk transfers at origin but seller pays freight" },
      { value: "late", label: "As late as possible", description: "Seller bears risk until destination" },
    ],
  },
];

// Incoterm attributes for matching
interface IncotermAttributes {
  transportModes: string[];
  shippingParty: "seller" | "buyer";
  exportClearance: "seller" | "buyer";
  insuranceRequired: boolean;
  riskTransfer: "early" | "middle" | "late";
}

const incotermAttributes: Record<string, IncotermAttributes> = {
  EXW: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "buyer",
    exportClearance: "buyer",
    insuranceRequired: false,
    riskTransfer: "early",
  },
  FCA: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "buyer",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "early",
  },
  CPT: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "middle",
  },
  CIP: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: true,
    riskTransfer: "middle",
  },
  DAP: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "late",
  },
  DPU: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "late",
  },
  DDP: {
    transportModes: ["air", "land", "multi", "sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "late",
  },
  FAS: {
    transportModes: ["sea"],
    shippingParty: "buyer",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "early",
  },
  FOB: {
    transportModes: ["sea"],
    shippingParty: "buyer",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "early",
  },
  CFR: {
    transportModes: ["sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: false,
    riskTransfer: "middle",
  },
  CIF: {
    transportModes: ["sea"],
    shippingParty: "seller",
    exportClearance: "seller",
    insuranceRequired: true,
    riskTransfer: "middle",
  },
};

// Calculate recommendations based on wizard answers
export function calculateRecommendations(answers: WizardAnswer): Recommendation[] {
  const scores: Record<string, { score: number; total: number; reasons: string[] }> = {};

  for (const incoterm of incoterms) {
    const attrs = incotermAttributes[incoterm.code];
    if (!attrs) continue;

    let score = 0;
    let total = 0;
    const reasons: string[] = [];

    // Q1: Transport mode
    if (answers.transport !== "neutral") {
      total++;
      if (attrs.transportModes.includes(answers.transport)) {
        score++;
        if (answers.transport === "sea" && incoterm.transportMode === "sea") {
          reasons.push("Designed specifically for sea transport");
        } else if (answers.transport !== "sea" && incoterm.transportMode === "any") {
          reasons.push(`Works for ${answers.transport} transport`);
        }
      }
    }

    // Q2: Shipping party
    if (answers.shippingParty !== "neutral") {
      total++;
      if (attrs.shippingParty === answers.shippingParty) {
        score++;
        reasons.push(
          attrs.shippingParty === "seller"
            ? "Seller arranges main carriage"
            : "Buyer controls shipping arrangements"
        );
      }
    }

    // Q3: Export customs
    if (answers.customs !== "neutral") {
      total++;
      if (attrs.exportClearance === answers.customs) {
        score++;
        reasons.push(
          attrs.exportClearance === "seller"
            ? "Seller handles export clearance"
            : "Buyer handles export clearance"
        );
      }
    }

    // Q4: Insurance
    if (answers.insurance !== "neutral") {
      total++;
      const wantsInsurance = answers.insurance === "required";
      if (attrs.insuranceRequired === wantsInsurance) {
        score++;
        reasons.push(
          attrs.insuranceRequired
            ? "Seller must provide insurance coverage"
            : "Flexible insurance arrangements"
        );
      }
    }

    // Q5: Risk preference
    if (answers.riskPreference) {
      total++;
      if (attrs.riskTransfer === answers.riskPreference) {
        score++;
        switch (attrs.riskTransfer) {
          case "early":
            reasons.push("Risk transfers early, giving buyer control");
            break;
          case "middle":
            reasons.push("Balanced risk transfer point");
            break;
          case "late":
            reasons.push("Seller bears most transit risk");
            break;
        }
      }
    }

    scores[incoterm.code] = { score, total, reasons };
  }

  // Calculate percentages and sort
  const recommendations = Object.entries(scores)
    .map(([code, { score, total, reasons }]) => ({
      code,
      matchPercentage: total > 0 ? Math.round((score / total) * 100) : 0,
      reasons: reasons.slice(0, 4), // Max 4 reasons
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage)
    .slice(0, 3); // Top 3

  // Ensure we have at least some reasons for top recommendations
  recommendations.forEach((rec) => {
    if (rec.reasons.length === 0) {
      const incoterm = incoterms.find((i) => i.code === rec.code);
      if (incoterm) {
        rec.reasons.push(incoterm.keyPoint);
      }
    }
  });

  return recommendations;
}

// Parse URL params to wizard answers
export function parseWizardParams(params: URLSearchParams): Partial<WizardAnswer> {
  return {
    transport: (params.get("t") as WizardAnswer["transport"]) || undefined,
    shippingParty: (params.get("s") as WizardAnswer["shippingParty"]) || undefined,
    customs: (params.get("c") as WizardAnswer["customs"]) || undefined,
    insurance: (params.get("i") as WizardAnswer["insurance"]) || undefined,
    riskPreference: (params.get("r") as WizardAnswer["riskPreference"]) || undefined,
  };
}

// Convert wizard answers to URL params
export function answersToParams(answers: WizardAnswer): string {
  const params = new URLSearchParams();
  if (answers.transport) params.set("t", answers.transport);
  if (answers.shippingParty) params.set("s", answers.shippingParty);
  if (answers.customs) params.set("c", answers.customs);
  if (answers.insurance) params.set("i", answers.insurance);
  if (answers.riskPreference) params.set("r", answers.riskPreference);
  return params.toString();
}
