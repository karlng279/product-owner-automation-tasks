"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useQuiz, QuizAnswerCard } from "@/components/quiz";

const letters = ["A", "B", "C", "D"];

export default function QuizQuestionPage() {
  const router = useRouter();
  const {
    state,
    currentQuestion,
    isAnswered,
    selectedAnswer,
    isCorrect,
    progress,
    submitAnswer,
    nextQuestion,
  } = useQuiz();

  // Redirect if no quiz started
  React.useEffect(() => {
    if (!state) {
      router.push("/quiz");
    }
  }, [state, router]);

  if (!state || !currentQuestion) {
    return null;
  }

  const handleAnswerSelect = (index: number) => {
    if (!isAnswered) {
      submitAnswer(currentQuestion.id, index);
    }
  };

  const handleNext = () => {
    if (state.currentIndex >= state.questions.length - 1) {
      router.push("/quiz/results");
    } else {
      nextQuestion();
    }
  };

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isAnswered) {
        const key = parseInt(e.key);
        if (key >= 1 && key <= 4) {
          handleAnswerSelect(key - 1);
        }
      } else if (e.key === "Enter") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnswered, currentQuestion]);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8">
      {/* Progress */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-muted-foreground">
            Question {state.currentIndex + 1} of {state.questions.length}
          </span>
          <span className="font-medium capitalize">{state.difficulty}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold md:text-2xl">
            {currentQuestion.question}
          </h2>
        </CardContent>
      </Card>

      {/* Answer Options */}
      <div className="mb-6 space-y-3">
        {currentQuestion.options.map((option, index) => (
          <QuizAnswerCard
            key={index}
            letter={letters[index]}
            text={option}
            isSelected={selectedAnswer === index}
            isCorrect={isCorrect}
            isAnswered={isAnswered}
            correctAnswer={index === currentQuestion.correctIndex}
            onClick={() => handleAnswerSelect(index)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <Alert
          className={
            isCorrect
              ? "border-green-500 bg-green-50 dark:bg-green-950/20"
              : "border-red-500 bg-red-50 dark:bg-red-950/20"
          }
        >
          <Lightbulb className="h-4 w-4" />
          <AlertDescription>
            <p className="font-medium">
              {isCorrect ? "Correct!" : "Incorrect"}
            </p>
            <p className="mt-1 text-sm">{currentQuestion.explanation}</p>
            <Link
              href={`/learn/${currentQuestion.relatedIncoterm.toLowerCase()}`}
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              Learn more about {currentQuestion.relatedIncoterm} →
            </Link>
          </AlertDescription>
        </Alert>
      )}

      {/* Next Button */}
      {isAnswered && (
        <Button className="mt-6 w-full" size="lg" onClick={handleNext}>
          {state.currentIndex >= state.questions.length - 1
            ? "See Results"
            : "Next Question"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      )}

      {/* Keyboard Hints */}
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Press 1-4 to select an answer, Enter to continue
      </p>
    </div>
  );
}
