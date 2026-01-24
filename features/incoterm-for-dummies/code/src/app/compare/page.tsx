"use client";

import * as React from "react";
import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Ship, Truck, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { incoterms } from "@/data/incoterms";

const presets = [
  { label: "FOB vs CIF", items: ["FOB", "CIF"] },
  { label: "EXW vs DDP", items: ["EXW", "DDP"] },
  { label: "FOB vs FCA", items: ["FOB", "FCA"] },
  { label: "CFR vs CPT", items: ["CFR", "CPT"] },
];

function CompareContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize from URL params
  const initialSelection = searchParams.get("items")?.split(",").filter(Boolean) || [];
  const [selected, setSelected] = React.useState<string[]>(initialSelection);

  // Update URL when selection changes
  React.useEffect(() => {
    const params = new URLSearchParams();
    if (selected.length > 0) {
      params.set("items", selected.join(","));
    }
    const newUrl = selected.length > 0 ? `/compare?${params.toString()}` : "/compare";
    window.history.replaceState(null, "", newUrl);
  }, [selected]);

  const toggleSelection = (code: string) => {
    setSelected((prev) => {
      if (prev.includes(code)) {
        return prev.filter((c) => c !== code);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, code];
    });
  };

  const handlePreset = (items: string[]) => {
    setSelected(items);
  };

  const handleCompare = () => {
    if (selected.length >= 2) {
      router.push(`/compare/view?items=${selected.join(",")}`);
    }
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Compare Incoterms</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Select 2-3 Incoterms to compare side by side
        </p>
      </div>

      {/* Selection Status */}
      <div className="mb-6 flex items-center justify-between rounded-lg border border-border bg-muted/50 p-4">
        <div className="flex items-center gap-3">
          <GitCompare className="h-5 w-5 text-muted-foreground" />
          <span className="font-medium">
            {selected.length === 0
              ? "Select Incoterms to compare"
              : `${selected.length} selected`}
          </span>
          {selected.length > 0 && (
            <div className="flex gap-1">
              {selected.map((code) => (
                <Badge key={code} variant="secondary">
                  {code}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {selected.length > 0 && (
            <Button variant="ghost" size="sm" onClick={() => setSelected([])}>
              Clear
            </Button>
          )}
          <Button
            size="sm"
            disabled={selected.length < 2}
            onClick={handleCompare}
          >
            Compare Now
          </Button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="mb-8">
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Quick Presets
        </p>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <Button
              key={preset.label}
              variant="outline"
              size="sm"
              onClick={() => handlePreset(preset.items)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Incoterm Selection Grid */}
      <TooltipProvider>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
          {incoterms.map((incoterm) => {
            const isSelected = selected.includes(incoterm.code);
            const isDisabled = !isSelected && selected.length >= 3;

            return (
              <Tooltip key={incoterm.code}>
                <TooltipTrigger asChild>
                  <button
                    onClick={() => toggleSelection(incoterm.code)}
                    disabled={isDisabled}
                    className={`
                      flex flex-col items-center rounded-lg border-2 p-4 transition-all
                      ${
                        isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }
                      ${isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
                    `}
                  >
                    {incoterm.transportMode === "sea" ? (
                      <Ship className="mb-2 h-5 w-5 text-primary" />
                    ) : (
                      <Truck className="mb-2 h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="text-lg font-bold">{incoterm.code}</span>
                    <span className="text-xs text-muted-foreground">
                      {incoterm.transportMode === "sea" ? "Sea" : "Any"}
                    </span>
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">{incoterm.fullName}</p>
                  {isDisabled && (
                    <p className="text-xs text-muted-foreground">
                      Maximum 3 items
                    </p>
                  )}
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>

      {/* Compare Button (Mobile) */}
      <div className="mt-8 md:hidden">
        <Button
          className="w-full"
          size="lg"
          disabled={selected.length < 2}
          onClick={handleCompare}
        >
          <GitCompare className="mr-2 h-5 w-5" />
          Compare {selected.length} Incoterms
        </Button>
      </div>
    </div>
  );
}

export default function ComparePage() {
  return (
    <Suspense fallback={<ComparePageSkeleton />}>
      <CompareContent />
    </Suspense>
  );
}

function ComparePageSkeleton() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-8 text-center">
        <div className="mx-auto h-10 w-64 animate-pulse rounded bg-muted" />
        <div className="mx-auto mt-4 h-6 w-80 animate-pulse rounded bg-muted" />
      </div>
      <div className="mb-6 h-16 animate-pulse rounded-lg bg-muted" />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {Array.from({ length: 11 }).map((_, i) => (
          <div key={i} className="h-24 animate-pulse rounded-lg bg-muted" />
        ))}
      </div>
    </div>
  );
}
