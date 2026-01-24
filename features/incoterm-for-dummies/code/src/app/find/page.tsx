"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { Compass, ArrowRight, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useWizard } from "@/components/wizard";

export default function FindStartPage() {
  const router = useRouter();
  const { reset } = useWizard();

  const handleStart = () => {
    reset();
    router.push("/find/question");
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Compass className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold md:text-4xl">Find Your Incoterm</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Answer a few simple questions to get personalized Incoterm
          recommendations for your situation
        </p>
      </div>

      {/* Info Cards */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="flex items-center gap-4 pt-6">
            <Clock className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">5 Questions</p>
              <p className="text-sm text-muted-foreground">
                Takes about 2 minutes
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center gap-4 pt-6">
            <HelpCircle className="h-8 w-8 text-muted-foreground" />
            <div>
              <p className="font-medium">No Expertise Needed</p>
              <p className="text-sm text-muted-foreground">
                Simple, plain-language questions
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* What to Expect */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What to Expect</CardTitle>
          <CardDescription>
            The wizard will ask you about your shipping scenario
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                1
              </span>
              <span className="text-sm text-muted-foreground">
                Transport mode (sea, air, road, multimodal)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                2
              </span>
              <span className="text-sm text-muted-foreground">
                Who should arrange shipping
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                3
              </span>
              <span className="text-sm text-muted-foreground">
                Customs clearance preferences
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                4
              </span>
              <span className="text-sm text-muted-foreground">
                Insurance requirements
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                5
              </span>
              <span className="text-sm text-muted-foreground">
                Risk transfer preferences
              </span>
            </li>
          </ol>
        </CardContent>
      </Card>

      {/* Start Button */}
      <Button size="lg" className="w-full" onClick={handleStart}>
        Start Wizard
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Alternative */}
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Want to learn first?{" "}
        <Link href="/learn" className="text-primary hover:underline">
          Explore all Incoterms
        </Link>
      </p>
    </div>
  );
}
