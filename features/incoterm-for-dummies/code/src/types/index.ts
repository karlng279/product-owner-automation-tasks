// Incoterm Data Types

export type TransportMode = "sea" | "any";

export interface Responsibility {
  id: string;
  label: string;
  description: string;
}

export interface Incoterm {
  code: string;
  fullName: string;
  transportMode: TransportMode;
  keyPoint: string;
  description: string;
  whenToUse: string[];
  commonMistakes: string[];
  riskTransferPoint: number; // 0-100 representing position on delivery timeline
  costTransferPoint: number; // 0-100 representing position on delivery timeline
  sellerResponsibilities: Responsibility[];
  buyerResponsibilities: Responsibility[];
}

// Quiz Types
export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface QuizQuestion {
  id: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  relatedIncoterm: string;
}

export interface QuizState {
  difficulty: Difficulty;
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Record<string, number>;
  isComplete: boolean;
}

// Wizard Types
export interface WizardAnswer {
  transport: "sea" | "air" | "land" | "multi" | "neutral";
  shippingParty: "seller" | "buyer" | "neutral";
  customs: "seller" | "buyer" | "neutral";
  insurance: "required" | "optional" | "neutral";
  riskPreference: "early" | "middle" | "late";
}

export interface Recommendation {
  code: string;
  matchPercentage: number;
  reasons: string[];
}

// Comparison Types
export interface ComparisonAttribute {
  key: string;
  label: string;
  getValue: (incoterm: Incoterm) => string;
}
