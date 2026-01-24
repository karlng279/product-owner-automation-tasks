"use client";

import { useRouter } from "next/navigation";
import { Trophy, Clock, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useQuiz } from "@/components/quiz";
import { Difficulty } from "@/types";
import * as React from "react";

const difficulties: {
  value: Difficulty;
  label: string;
  questions: number;
  description: string;
}[] = [
  {
    value: "beginner",
    label: "Beginner",
    questions: 10,
    description: "Basic concepts and terminology",
  },
  {
    value: "intermediate",
    label: "Intermediate",
    questions: 15,
    description: "Deeper understanding and applications",
  },
  {
    value: "advanced",
    label: "Advanced",
    questions: 20,
    description: "Complex scenarios and edge cases",
  },
];

export default function QuizStartPage() {
  const router = useRouter();
  const { startQuiz } = useQuiz();
  const [selectedDifficulty, setSelectedDifficulty] =
    React.useState<Difficulty>("beginner");

  const handleStart = () => {
    startQuiz(selectedDifficulty);
    router.push("/quiz/question");
  };

  const selected = difficulties.find((d) => d.value === selectedDifficulty);

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Trophy className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold md:text-4xl">Test Your Knowledge</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Challenge yourself with quiz questions about Incoterms 2020
        </p>
      </div>

      {/* Difficulty Selection */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Select Difficulty</CardTitle>
          <CardDescription>
            Choose a difficulty level that matches your knowledge
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedDifficulty}
            onValueChange={(v) => setSelectedDifficulty(v as Difficulty)}
            className="space-y-4"
          >
            {difficulties.map((diff) => (
              <div key={diff.value}>
                <Label
                  htmlFor={diff.value}
                  className={`flex cursor-pointer items-center justify-between rounded-lg border-2 p-4 transition-all ${
                    selectedDifficulty === diff.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={diff.value} id={diff.value} />
                    <div>
                      <p className="font-medium">{diff.label}</p>
                      <p className="text-sm text-muted-foreground">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{diff.questions}</p>
                    <p className="text-xs text-muted-foreground">questions</p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Quiz Info */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-4 pt-6">
            <Clock className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">No Time Limit</p>
              <p className="text-sm text-muted-foreground">
                Take your time to think
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 pt-6">
            <Target className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">Instant Feedback</p>
              <p className="text-sm text-muted-foreground">
                Learn from each answer
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Start Button */}
      <Button size="lg" className="w-full" onClick={handleStart}>
        Start Quiz ({selected?.questions} Questions)
      </Button>
    </div>
  );
}
