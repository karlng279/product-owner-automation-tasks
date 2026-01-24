"use client";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface WizardProgressProps {
  currentStep: number;
  totalSteps: number;
}

export function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Question {Math.min(currentStep + 1, totalSteps)} of {totalSteps}
        </span>
        <span className="text-sm font-medium">{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />

      {/* Step Indicators */}
      <div className="mt-3 flex justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium transition-all",
              index < currentStep
                ? "bg-primary text-primary-foreground"
                : index === currentStep
                ? "border-2 border-primary text-primary"
                : "bg-muted text-muted-foreground"
            )}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
