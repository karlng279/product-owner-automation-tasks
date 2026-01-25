"use client";

import { useState } from "react";
import { LayoutGrid, LayoutList, Ship, Truck } from "lucide-react";
import { IncotermCard } from "@/components/incoterm";
import { getSeaOnlyIncoterms, getAnyModeIncoterms } from "@/data/incoterms";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LearnContent() {
    const [viewMode, setViewMode] = useState<"list" | "grid">("list");
    const anyModeTerms = getAnyModeIncoterms();
    const seaOnlyTerms = getSeaOnlyIncoterms();

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
                <div className="text-center md:text-left">
                    <h1 className="text-3xl font-bold md:text-4xl">Incoterms 2020</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Learn all 11 international commercial terms used in global trade
                    </p>
                </div>
                <div className="flex items-center rounded-lg border bg-background p-1 shadow-sm">
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewMode("list")}
                        className={cn(
                            "h-8 px-2 lg:px-3",
                            viewMode === "list" && "bg-muted text-foreground shadow-sm"
                        )}
                        title="List View"
                    >
                        <LayoutList className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">List</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setViewMode("grid")}
                        className={cn(
                            "h-8 px-2 lg:px-3",
                            viewMode === "grid" && "bg-muted text-foreground shadow-sm"
                        )}
                        title="Grid View"
                    >
                        <LayoutGrid className="mr-2 h-4 w-4" />
                        <span className="hidden sm:inline">Grid</span>
                    </Button>
                </div>
            </div>

            {/* Any Mode Section */}
            <section className="mb-12">
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <Truck className="h-5 w-5" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Any Mode of Transport</h2>
                        <p className="text-sm text-muted-foreground">
                            Can be used for sea, air, road, rail, or multimodal transport
                        </p>
                    </div>
                </div>
                <div
                    className={cn(
                        "gap-4",
                        viewMode === "grid"
                            ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            : "flex flex-col"
                    )}
                >
                    {anyModeTerms.map((incoterm) => (
                        <IncotermCard
                            key={incoterm.code}
                            incoterm={incoterm}
                            variant={viewMode}
                        />
                    ))}
                </div>
            </section>

            {/* Sea Only Section */}
            <section>
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Ship className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold">Sea and Inland Waterway Only</h2>
                        <p className="text-sm text-muted-foreground">
                            Exclusively for ocean and river transport
                        </p>
                    </div>
                </div>
                <div
                    className={cn(
                        "gap-4",
                        viewMode === "grid"
                            ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                            : "flex flex-col"
                    )}
                >
                    {seaOnlyTerms.map((incoterm) => (
                        <IncotermCard
                            key={incoterm.code}
                            incoterm={incoterm}
                            variant={viewMode}
                        />
                    ))}
                </div>
            </section>

            {/* Info Box */}
            <div className="mt-12 rounded-lg border border-border bg-muted/50 p-6">
                <h3 className="font-semibold">Understanding Incoterms 2020</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                    Incoterms (International Commercial Terms) are standardized trade
                    terms published by the International Chamber of Commerce (ICC). The
                    2020 version contains 11 terms that define the responsibilities of
                    buyers and sellers in international transactions, including who is
                    responsible for shipping, insurance, documentation, customs clearance,
                    and risk transfer.
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-3">
                        <Truck className="mt-0.5 h-5 w-5 text-muted-foreground" />
                        <div>
                            <p className="font-medium">7 Any Mode Terms</p>
                            <p className="text-sm text-muted-foreground">
                                EXW, FCA, CPT, CIP, DAP, DPU, DDP
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <Ship className="mt-0.5 h-5 w-5 text-primary" />
                        <div>
                            <p className="font-medium">4 Sea Only Terms</p>
                            <p className="text-sm text-muted-foreground">FAS, FOB, CFR, CIF</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
