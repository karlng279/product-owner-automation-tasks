"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizAnswerCardProps {
  letter: string;
  text: string;
  isSelected: boolean;
  isCorrect: boolean | null;
  isAnswered: boolean;
  correctAnswer: boolean;
  onClick: () => void;
  disabled: boolean;
}

export function QuizAnswerCard({
  letter,
  text,
  isSelected,
  isCorrect,
  isAnswered,
  correctAnswer,
  onClick,
  disabled,
}: QuizAnswerCardProps) {
  // Determine the state
  const showCorrect = isAnswered && correctAnswer;
  const showIncorrect = isAnswered && isSelected && !isCorrect;
  const showSelected = !isAnswered && isSelected;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left transition-all",
        // Default state
        !isAnswered &&
          !isSelected &&
          "border-border bg-card hover:border-primary/50 hover:bg-accent",
        // Selected (before answer)
        showSelected && "border-primary bg-primary/10",
        // Correct answer revealed
        showCorrect && "border-green-500 bg-green-50 dark:bg-green-950/20",
        // Incorrect answer
        showIncorrect && "border-red-500 bg-red-50 dark:bg-red-950/20",
        // Disabled state
        disabled && !showCorrect && !showIncorrect && "opacity-50 cursor-not-allowed"
      )}
    >
      {/* Letter Badge */}
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold",
          !isAnswered && !isSelected && "bg-muted text-muted-foreground",
          showSelected && "bg-primary text-primary-foreground",
          showCorrect && "bg-green-500 text-white",
          showIncorrect && "bg-red-500 text-white"
        )}
      >
        {isAnswered ? (
          showCorrect ? (
            <CheckCircle className="h-5 w-5" />
          ) : showIncorrect ? (
            <XCircle className="h-5 w-5" />
          ) : (
            letter
          )
        ) : (
          letter
        )}
      </div>

      {/* Answer Text */}
      <span className="flex-1 text-base">{text}</span>

      {/* Correct Answer Badge */}
      {showCorrect && !isSelected && (
        <span className="shrink-0 text-xs font-medium text-green-600">
          Correct Answer
        </span>
      )}
    </button>
  );
}
