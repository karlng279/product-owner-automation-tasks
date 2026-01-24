import { QuizProvider } from "@/components/quiz";

export default function QuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <QuizProvider>{children}</QuizProvider>;
}
