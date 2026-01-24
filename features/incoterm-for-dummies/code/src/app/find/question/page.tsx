"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useWizard, WizardProgress } from "@/components/wizard";
import { WizardAnswer } from "@/types";

export default function WizardQuestionPage() {
  const router = useRouter();
  const {
    currentStep,
    totalSteps,
    currentQuestion,
    answers,
    setAnswer,
    nextStep,
    prevStep,
    canGoNext,
    isComplete,
  } = useWizard();

  // Redirect if complete or not started
  React.useEffect(() => {
    if (isComplete) {
      router.push("/find/results");
    }
  }, [isComplete, router]);

  React.useEffect(() => {
    if (currentStep >= totalSteps && !isComplete) {
      router.push("/find");
    }
  }, [currentStep, totalSteps, isComplete, router]);

  if (!currentQuestion) {
    return null;
  }

  const currentValue = answers[currentQuestion.id as keyof WizardAnswer] || "";

  const handleNext = () => {
    if (canGoNext) {
      nextStep();
      if (currentStep === totalSteps - 1) {
        router.push("/find/results");
      }
    }
  };

  const handleBack = () => {
    if (currentStep === 0) {
      router.push("/find");
    } else {
      prevStep();
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Progress */}
      <WizardProgress currentStep={currentStep} totalSteps={totalSteps} />

      {/* Question Card */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={currentValue}
            onValueChange={(value) =>
              setAnswer(currentQuestion.id as keyof WizardAnswer, value)
            }
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value}>
                <Label
                  htmlFor={option.value}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border-2 p-4 transition-all ${
                    currentValue === option.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="mt-0.5"
                  />
                  <div>
                    <p className="font-medium">{option.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {option.description}
                    </p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Help Accordion */}
      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="help">
          <AccordionTrigger className="text-sm">
            <div className="flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              Need help understanding this question?
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-muted-foreground">
              {currentQuestion.helpText}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={handleBack} className="flex-1">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={handleNext} disabled={!canGoNext} className="flex-1">
          {currentStep === totalSteps - 1 ? "See Results" : "Next"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
