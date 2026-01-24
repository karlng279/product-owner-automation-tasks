"use client";

import * as React from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, RefreshCw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ComparisonTable } from "@/components/comparison";
import { getIncotermByCode } from "@/data/incoterms";
import { Incoterm } from "@/types";
import { toast } from "sonner";

function CompareViewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Parse selected items from URL
  const selectedCodes = searchParams.get("items")?.split(",").filter(Boolean) || [];
  const selectedIncoterms = selectedCodes
    .map((code) => getIncotermByCode(code))
    .filter((i): i is Incoterm => i !== undefined);

  // Handle removal of an incoterm
  const handleRemove = (code: string) => {
    const newCodes = selectedCodes.filter((c) => c.toLowerCase() !== code.toLowerCase());
    if (newCodes.length >= 2) {
      router.push(`/compare/view?items=${newCodes.join(",")}`);
    } else if (newCodes.length === 1) {
      router.push(`/compare?items=${newCodes.join(",")}`);
    } else {
      router.push("/compare");
    }
  };

  // Handle share
  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard!");
    } catch {
      toast.error("Failed to copy link");
    }
  };

  // Redirect if not enough items
  if (selectedIncoterms.length < 2) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Select Incoterms to Compare</h1>
        <p className="mt-4 text-muted-foreground">
          Please select at least 2 Incoterms to view a comparison.
        </p>
        <Button className="mt-6" asChild>
          <Link href="/compare">Go to Selection</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-2">
            <Link href="/compare">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Selection
            </Link>
          </Button>
          <h1 className="text-2xl font-bold md:text-3xl">
            Comparing: {selectedIncoterms.map((i) => i.code).join(" vs ")}
          </h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          {selectedIncoterms.length < 3 && (
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <Link href={`/compare?items=${selectedCodes.join(",")}`}>
                <Plus className="mr-2 h-4 w-4" />
                Add Another
              </Link>
            </Button>
          )}
          <Button variant="outline" size="sm" asChild>
            <Link href="/compare">
              <RefreshCw className="mr-2 h-4 w-4" />
              Compare Different
            </Link>
          </Button>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="rounded-lg border border-border">
        <ComparisonTable
          selectedIncoterms={selectedIncoterms}
          onRemove={handleRemove}
        />
      </div>

      {/* Legend */}
      <div className="mt-6 rounded-lg border border-border bg-muted/50 p-4">
        <h3 className="mb-2 font-medium">How to Read This Comparison</h3>
        <ul className="space-y-1 text-sm text-muted-foreground">
          <li>
            <span className="inline-block w-3 h-3 bg-yellow-200 dark:bg-yellow-900 rounded mr-2" />
            Highlighted rows indicate differences between selected Incoterms
          </li>
          <li>
            Click on an Incoterm code to view its full details
          </li>
          <li>
            Risk/Cost percentages show how far along the delivery journey responsibility transfers
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function CompareViewPage() {
  return (
    <Suspense fallback={<CompareViewSkeleton />}>
      <CompareViewContent />
    </Suspense>
  );
}

function CompareViewSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6">
        <div className="h-8 w-32 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-10 w-64 animate-pulse rounded bg-muted" />
      </div>
      <div className="h-96 animate-pulse rounded-lg bg-muted" />
    </div>
  );
}
