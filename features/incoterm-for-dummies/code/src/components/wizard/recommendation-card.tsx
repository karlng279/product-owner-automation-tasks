import Link from "next/link";
import { Star, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Recommendation } from "@/types";
import { getIncotermByCode } from "@/data/incoterms";
import { cn } from "@/lib/utils";

interface RecommendationCardProps {
  recommendation: Recommendation;
  variant: "primary" | "alternative";
}

export function RecommendationCard({
  recommendation,
  variant,
}: RecommendationCardProps) {
  const incoterm = getIncotermByCode(recommendation.code);
  if (!incoterm) return null;

  const getMatchColor = (percentage: number) => {
    if (percentage >= 90) return "text-green-600 bg-green-100";
    if (percentage >= 70) return "text-blue-600 bg-blue-100";
    return "text-yellow-600 bg-yellow-100";
  };

  const isPrimary = variant === "primary";

  return (
    <Card
      className={cn(
        "transition-all hover:shadow-md",
        isPrimary
          ? "border-2 border-primary shadow-lg"
          : "border border-border"
      )}
    >
      <CardHeader className={cn(isPrimary ? "pb-4" : "pb-2")}>
        {isPrimary && (
          <Badge className="mb-3 w-fit gap-1">
            <Star className="h-3 w-3" />
            BEST MATCH
          </Badge>
        )}
        <div className="flex items-start justify-between">
          <div>
            <h3
              className={cn(
                "font-bold text-primary",
                isPrimary ? "text-4xl" : "text-2xl"
              )}
            >
              {recommendation.code}
            </h3>
            <p
              className={cn(
                "text-muted-foreground",
                isPrimary ? "text-lg" : "text-base"
              )}
            >
              {incoterm.fullName}
            </p>
          </div>
          <div
            className={cn(
              "rounded-full px-3 py-1 font-bold",
              getMatchColor(recommendation.matchPercentage)
            )}
          >
            {recommendation.matchPercentage}%
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="mb-2 text-sm font-medium">Why this fits:</p>
          <ul className="space-y-1">
            {recommendation.reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <span className="text-muted-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant={isPrimary ? "default" : "outline"}
          size={isPrimary ? "lg" : "sm"}
          className="w-full"
          asChild
        >
          <Link href={`/learn/${recommendation.code.toLowerCase()}`}>
            Learn More About {recommendation.code}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
