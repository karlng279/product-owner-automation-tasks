"use client";

import { Incoterm } from "@/types";

interface ResponsibilityDiagramProps {
  incoterm: Incoterm;
}

export function ResponsibilityDiagram({ incoterm }: ResponsibilityDiagramProps) {
  const stages = [
    { label: "Packaging", position: 0 },
    { label: "Loading", position: 15 },
    { label: "Export", position: 25 },
    { label: "Carriage", position: 50 },
    { label: "Import", position: 75 },
    { label: "Delivery", position: 90 },
    { label: "Unloading", position: 100 },
  ];

  return (
    <div className="rounded-lg border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Risk & Cost Transfer Points
      </h3>

      {/* Diagram */}
      <div className="relative mb-8">
        {/* Background bar */}
        <div className="h-12 rounded-full bg-muted" />

        {/* Seller portion (blue) */}
        <div
          className="absolute left-0 top-0 h-12 rounded-l-full bg-blue-500"
          style={{ width: `${incoterm.riskTransferPoint}%` }}
        />

        {/* Buyer portion (orange) */}
        <div
          className="absolute right-0 top-0 h-12 rounded-r-full bg-orange-500"
          style={{ width: `${100 - incoterm.riskTransferPoint}%` }}
        />

        {/* Cost transfer marker */}
        <div
          className="absolute top-0 flex h-12 items-center"
          style={{ left: `${incoterm.costTransferPoint}%` }}
        >
          <div className="h-14 w-1 -translate-y-1 bg-foreground" />
        </div>

        {/* Risk transfer marker */}
        <div
          className="absolute top-0 flex h-12 items-center"
          style={{ left: `${incoterm.riskTransferPoint}%` }}
        >
          <div className="h-16 w-1 -translate-y-2 bg-destructive" />
        </div>

        {/* Stage markers */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between text-xs text-muted-foreground">
          {stages.map((stage) => (
            <span
              key={stage.label}
              className="w-12 text-center"
              style={{
                position: "absolute",
                left: `${stage.position}%`,
                transform: "translateX(-50%)",
              }}
            >
              {stage.label}
            </span>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-12 flex flex-wrap gap-6">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-blue-500" />
          <span className="text-sm">Seller Responsibility</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded bg-orange-500" />
          <span className="text-sm">Buyer Responsibility</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-1 bg-destructive" />
          <span className="text-sm">Risk Transfer Point</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-1 bg-foreground" />
          <span className="text-sm">Cost Transfer Point</span>
        </div>
      </div>

      {/* Transfer Points Info */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium">Risk Transfers at</p>
          <p className="text-2xl font-bold text-destructive">
            {incoterm.riskTransferPoint}%
          </p>
          <p className="text-xs text-muted-foreground">of the delivery journey</p>
        </div>
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium">Cost Transfers at</p>
          <p className="text-2xl font-bold">{incoterm.costTransferPoint}%</p>
          <p className="text-xs text-muted-foreground">of the delivery journey</p>
        </div>
      </div>
    </div>
  );
}
