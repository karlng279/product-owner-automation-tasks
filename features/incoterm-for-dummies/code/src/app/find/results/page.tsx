"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { RefreshCw, GitCompare, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWizard, RecommendationCard } from "@/components/wizard";

export default function WizardResultsPage() {
  const router = useRouter();
  const { recommendations, reset, isComplete } = useWizard();

  // Redirect if not complete
  React.useEffect(() => {
    if (!isComplete || !recommendations) {
      router.push("/find");
    }
  }, [isComplete, recommendations, router]);

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  const handleStartOver = () => {
    reset();
    router.push("/find");
  };

  const handleEditAnswers = () => {
    router.push("/find/question");
  };

  // Build comparison URL with top recommendations
  const compareUrl = `/compare/view?items=${recommendations
    .slice(0, 3)
    .map((r) => r.code)
    .join(",")}`;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Your Recommendations</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Based on your answers, here are the best Incoterms for your situation
        </p>
      </div>

      {/* Primary Recommendation */}
      <div className="mb-6">
        <RecommendationCard
          recommendation={recommendations[0]}
          variant="primary"
        />
      </div>

      {/* Alternative Recommendations */}
      {recommendations.length > 1 && (
        <div className="mb-8">
          <h2 className="mb-4 text-lg font-semibold">Other Good Options</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {recommendations.slice(1).map((rec) => (
              <RecommendationCard
                key={rec.code}
                recommendation={rec}
                variant="alternative"
              />
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button variant="outline" onClick={handleEditAnswers} className="flex-1">
          <Edit className="mr-2 h-4 w-4" />
          Edit Answers
        </Button>
        <Button variant="outline" asChild className="flex-1">
          <Link href={compareUrl}>
            <GitCompare className="mr-2 h-4 w-4" />
            Compare These
          </Link>
        </Button>
        <Button variant="outline" onClick={handleStartOver} className="flex-1">
          <RefreshCw className="mr-2 h-4 w-4" />
          Start Over
        </Button>
      </div>

      {/* Disclaimer */}
      <p className="mt-8 text-center text-xs text-muted-foreground">
        These recommendations are for educational purposes only. Always consult
        with trade professionals before making decisions about actual
        transactions.
      </p>
    </div>
  );
}
