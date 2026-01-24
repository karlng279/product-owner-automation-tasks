"use client";

import * as React from "react";
import { WizardAnswer, Recommendation } from "@/types";
import { wizardQuestions, calculateRecommendations } from "@/data/wizard";

interface WizardContextType {
  currentStep: number;
  totalSteps: number;
  answers: Partial<WizardAnswer>;
  recommendations: Recommendation[] | null;
  setAnswer: (key: keyof WizardAnswer, value: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  reset: () => void;
  canGoNext: boolean;
  isComplete: boolean;
  currentQuestion: (typeof wizardQuestions)[0] | null;
}

const WizardContext = React.createContext<WizardContextType | null>(null);

export function WizardProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<Partial<WizardAnswer>>({});
  const [recommendations, setRecommendations] = React.useState<Recommendation[] | null>(null);

  const totalSteps = wizardQuestions.length;
  const currentQuestion = currentStep < totalSteps ? wizardQuestions[currentStep] : null;

  const setAnswer = (key: keyof WizardAnswer, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  };

  const canGoNext = currentQuestion
    ? answers[currentQuestion.id as keyof WizardAnswer] !== undefined
    : false;

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentStep === totalSteps - 1) {
      // Calculate recommendations
      const recs = calculateRecommendations(answers as WizardAnswer);
      setRecommendations(recs);
      setCurrentStep(totalSteps);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      setRecommendations(null);
    }
  };

  const reset = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendations(null);
  };

  const isComplete = currentStep >= totalSteps && recommendations !== null;

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        totalSteps,
        answers,
        recommendations,
        setAnswer,
        nextStep,
        prevStep,
        reset,
        canGoNext,
        isComplete,
        currentQuestion,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = React.useContext(WizardContext);
  if (!context) {
    throw new Error("useWizard must be used within a WizardProvider");
  }
  return context;
}
