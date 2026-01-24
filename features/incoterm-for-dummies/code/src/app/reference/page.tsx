"use client";

import * as React from "react";
import Link from "next/link";
import { Search, Ship, Truck, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { incoterms } from "@/data/incoterms";
import { Incoterm } from "@/types";

export default function ReferencePage() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [transportFilter, setTransportFilter] = React.useState<
    "all" | "sea" | "any"
  >("all");

  const filteredIncoterms = React.useMemo(() => {
    return incoterms.filter((incoterm) => {
      // Transport filter
      if (transportFilter !== "all" && incoterm.transportMode !== transportFilter) {
        return false;
      }
      // Search filter
      if (searchQuery.length > 0) {
        const query = searchQuery.toLowerCase();
        return (
          incoterm.code.toLowerCase().includes(query) ||
          incoterm.fullName.toLowerCase().includes(query) ||
          incoterm.keyPoint.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, transportFilter]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">Quick Reference</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find any Incoterm quickly with instant search
        </p>
      </div>

      {/* Search & Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1 sm:max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search by code, name, or keyword..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={transportFilter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setTransportFilter("all")}
          >
            All ({incoterms.length})
          </Button>
          <Button
            variant={transportFilter === "any" ? "default" : "outline"}
            size="sm"
            onClick={() => setTransportFilter("any")}
            className="gap-1"
          >
            <Truck className="h-3 w-3" />
            Any Mode (7)
          </Button>
          <Button
            variant={transportFilter === "sea" ? "default" : "outline"}
            size="sm"
            onClick={() => setTransportFilter("sea")}
            className="gap-1"
          >
            <Ship className="h-3 w-3" />
            Sea Only (4)
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-4 text-sm text-muted-foreground">
        Showing {filteredIncoterms.length} of {incoterms.length} Incoterms
      </p>

      {/* Reference Cards */}
      {filteredIncoterms.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          {filteredIncoterms.map((incoterm) => (
            <ReferenceCard key={incoterm.code} incoterm={incoterm} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-muted/50 p-8 text-center">
          <p className="text-muted-foreground">
            No Incoterms found matching your search.
          </p>
          <Button
            variant="link"
            className="mt-2"
            onClick={() => {
              setSearchQuery("");
              setTransportFilter("all");
            }}
          >
            Clear filters
          </Button>
        </div>
      )}
    </div>
  );
}

function ReferenceCard({ incoterm }: { incoterm: Incoterm }) {
  return (
    <Card className="transition-all hover:border-primary">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-2xl text-primary">
              {incoterm.code}
            </CardTitle>
            <CardDescription className="text-base">
              {incoterm.fullName}
            </CardDescription>
          </div>
          <Badge
            variant={incoterm.transportMode === "sea" ? "default" : "secondary"}
            className="shrink-0"
          >
            {incoterm.transportMode === "sea" ? (
              <Ship className="mr-1 h-3 w-3" />
            ) : (
              <Truck className="mr-1 h-3 w-3" />
            )}
            {incoterm.transportMode === "sea" ? "Sea" : "Any"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{incoterm.keyPoint}</p>
        <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-muted-foreground">Risk Transfer</p>
            <p className="text-lg font-semibold">{incoterm.riskTransferPoint}%</p>
          </div>
          <div>
            <p className="font-medium text-muted-foreground">Cost Transfer</p>
            <p className="text-lg font-semibold">{incoterm.costTransferPoint}%</p>
          </div>
        </div>
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={`/learn/${incoterm.code.toLowerCase()}`}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
