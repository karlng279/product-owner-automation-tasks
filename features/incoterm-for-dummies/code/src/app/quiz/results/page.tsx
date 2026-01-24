"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Trophy, RefreshCw, BookOpen, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useQuiz } from "@/components/quiz";

export default function QuizResultsPage() {
  const router = useRouter();
  const { state, score, resetQuiz } = useQuiz();

  // Redirect if no quiz completed
  React.useEffect(() => {
    if (!state || !state.isComplete) {
      router.push("/quiz");
    }
  }, [state, router]);

  if (!state || !state.isComplete) {
    return null;
  }

  const totalQuestions = state.questions.length;
  const percentage = Math.round((score / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage === 100) return "Perfect Score! Outstanding!";
    if (percentage >= 80) return "Excellent Work!";
    if (percentage >= 60) return "Good Job!";
    if (percentage >= 40) return "Keep Learning!";
    return "Room for Improvement";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  const handleRetake = () => {
    resetQuiz();
    router.push("/quiz");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
      {/* Score Card */}
      <Card className="mb-8 text-center">
        <CardHeader>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Trophy className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-2xl">{getScoreMessage()}</CardTitle>
          <CardDescription>
            You completed the {state.difficulty} quiz
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className={`text-6xl font-bold ${getScoreColor()}`}>
            {percentage}%
          </div>
          <p className="mt-2 text-lg text-muted-foreground">
            {score} out of {totalQuestions} correct
          </p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row">
        <Button className="flex-1" onClick={handleRetake}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Retake Quiz
        </Button>
        <Button variant="outline" className="flex-1" asChild>
          <Link href="/learn">
            <BookOpen className="mr-2 h-4 w-4" />
            Study More
          </Link>
        </Button>
      </div>

      {/* Question Review */}
      <Card>
        <CardHeader>
          <CardTitle>Question Review</CardTitle>
          <CardDescription>
            Review your answers and learn from mistakes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {state.questions.map((question, index) => {
              const userAnswer = state.answers[question.id];
              const isCorrect = userAnswer === question.correctIndex;
              return (
                <AccordionItem key={question.id} value={question.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      {isCorrect ? (
                        <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                      ) : (
                        <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                      )}
                      <span className="line-clamp-1">
                        {index + 1}. {question.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pl-8">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Your Answer:
                        </p>
                        <p
                          className={
                            isCorrect ? "text-green-600" : "text-red-600"
                          }
                        >
                          {question.options[userAnswer]}
                        </p>
                      </div>
                      {!isCorrect && (
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">
                            Correct Answer:
                          </p>
                          <p className="text-green-600">
                            {question.options[question.correctIndex]}
                          </p>
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          Explanation:
                        </p>
                        <p className="text-sm">{question.explanation}</p>
                      </div>
                      <Link
                        href={`/learn/${question.relatedIncoterm.toLowerCase()}`}
                        className="inline-block text-sm text-primary hover:underline"
                      >
                        Learn more about {question.relatedIncoterm} →
                      </Link>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
