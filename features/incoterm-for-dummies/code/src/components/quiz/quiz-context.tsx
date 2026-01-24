"use client";

import * as React from "react";
import { QuizQuestion, Difficulty, QuizState } from "@/types";
import { getRandomQuestions, getQuestionCountByDifficulty } from "@/data/quiz";

interface QuizContextType {
  state: QuizState | null;
  startQuiz: (difficulty: Difficulty) => void;
  submitAnswer: (questionId: string, answerIndex: number) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
  currentQuestion: QuizQuestion | null;
  isAnswered: boolean;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  progress: number;
  score: number;
}

const QuizContext = React.createContext<QuizContextType | null>(null);

export function QuizProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<QuizState | null>(null);

  const startQuiz = (difficulty: Difficulty) => {
    const count = getQuestionCountByDifficulty(difficulty);
    const questions = getRandomQuestions(difficulty, count);
    setState({
      difficulty,
      questions,
      currentIndex: 0,
      answers: {},
      isComplete: false,
    });
  };

  const submitAnswer = (questionId: string, answerIndex: number) => {
    if (!state) return;
    setState((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        answers: { ...prev.answers, [questionId]: answerIndex },
      };
    });
  };

  const nextQuestion = () => {
    if (!state) return;
    const nextIndex = state.currentIndex + 1;
    if (nextIndex >= state.questions.length) {
      setState((prev) => (prev ? { ...prev, isComplete: true } : prev));
    } else {
      setState((prev) => (prev ? { ...prev, currentIndex: nextIndex } : prev));
    }
  };

  const resetQuiz = () => {
    setState(null);
  };

  const currentQuestion = state?.questions[state.currentIndex] ?? null;
  const selectedAnswer = currentQuestion
    ? state?.answers[currentQuestion.id] ?? null
    : null;
  const isAnswered = selectedAnswer !== null;
  const isCorrect =
    isAnswered && currentQuestion
      ? selectedAnswer === currentQuestion.correctIndex
      : null;
  const progress = state
    ? ((state.currentIndex + (isAnswered ? 1 : 0)) / state.questions.length) * 100
    : 0;
  const score = state
    ? Object.entries(state.answers).filter(([qId, answer]) => {
        const q = state.questions.find((q) => q.id === qId);
        return q && answer === q.correctIndex;
      }).length
    : 0;

  return (
    <QuizContext.Provider
      value={{
        state,
        startQuiz,
        submitAnswer,
        nextQuestion,
        resetQuiz,
        currentQuestion,
        isAnswered,
        selectedAnswer,
        isCorrect,
        progress,
        score,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = React.useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
