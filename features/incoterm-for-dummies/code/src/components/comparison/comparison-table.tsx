"use client";

import Link from "next/link";
import { X, Ship, Truck, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Incoterm } from "@/types";
import { comparisonAttributes } from "@/data/incoterms";
import { cn } from "@/lib/utils";

interface ComparisonTableProps {
  selectedIncoterms: Incoterm[];
  onRemove: (code: string) => void;
}

export function ComparisonTable({
  selectedIncoterms,
  onRemove,
}: ComparisonTableProps) {
  // Check if values differ for highlighting
  const hasDifference = (key: string): boolean => {
    const attr = comparisonAttributes.find((a) => a.key === key);
    if (!attr || selectedIncoterms.length < 2) return false;
    const values = selectedIncoterms.map((i) => attr.getValue(i));
    return new Set(values).size > 1;
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {/* Header */}
        <thead>
          <tr>
            <th className="sticky left-0 z-10 min-w-[140px] border-b border-r border-border bg-background p-4 text-left font-medium">
              Attribute
            </th>
            {selectedIncoterms.map((incoterm) => (
              <th
                key={incoterm.code}
                className="min-w-[180px] border-b border-border bg-muted/50 p-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <Link
                      href={`/learn/${incoterm.code.toLowerCase()}`}
                      className="text-2xl font-bold text-primary hover:underline"
                    >
                      {incoterm.code}
                    </Link>
                    <p className="text-sm font-normal text-muted-foreground">
                      {incoterm.fullName}
                    </p>
                  </div>
                  {selectedIncoterms.length > 2 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onRemove(incoterm.code)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <Badge
                  variant={
                    incoterm.transportMode === "sea" ? "default" : "secondary"
                  }
                  className="mt-2"
                >
                  {incoterm.transportMode === "sea" ? (
                    <Ship className="mr-1 h-3 w-3" />
                  ) : (
                    <Truck className="mr-1 h-3 w-3" />
                  )}
                  {incoterm.transportMode === "sea" ? "Sea Only" : "Any Mode"}
                </Badge>
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {comparisonAttributes.map((attr) => {
            const isDifferent = hasDifference(attr.key);
            return (
              <tr key={attr.key}>
                <td
                  className={cn(
                    "sticky left-0 z-10 border-b border-r border-border bg-background p-4 font-medium",
                    isDifferent && "bg-yellow-50 dark:bg-yellow-950/20"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {attr.label}
                    {isDifferent && (
                      <Badge variant="outline" className="text-xs">
                        Different
                      </Badge>
                    )}
                  </div>
                </td>
                {selectedIncoterms.map((incoterm) => (
                  <td
                    key={`${incoterm.code}-${attr.key}`}
                    className={cn(
                      "border-b border-border p-4 text-center",
                      isDifferent && "bg-yellow-50 dark:bg-yellow-950/20"
                    )}
                  >
                    {attr.getValue(incoterm)}
                  </td>
                ))}
              </tr>
            );
          })}

          {/* Key Point Row */}
          <tr>
            <td className="sticky left-0 z-10 border-b border-r border-border bg-background p-4 font-medium">
              Key Point
            </td>
            {selectedIncoterms.map((incoterm) => (
              <td
                key={`${incoterm.code}-keypoint`}
                className="border-b border-border p-4 text-sm text-muted-foreground"
              >
                {incoterm.keyPoint}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
