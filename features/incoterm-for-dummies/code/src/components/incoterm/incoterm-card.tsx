import Link from "next/link";
import { ChevronRight, Ship, Truck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Incoterm } from "@/types";
import { cn } from "@/lib/utils";

interface IncotermCardProps {
  incoterm: Incoterm;
  variant?: "list" | "grid";
}

export function IncotermCard({
  incoterm,
  variant = "list",
}: IncotermCardProps) {
  if (variant === "list") {
    return (
      <Link href={`/learn/${incoterm.code.toLowerCase()}`}>
        <Card className="transition-all hover:border-primary hover:shadow-md">
          <CardContent className="flex items-center gap-4 p-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              {incoterm.transportMode === "sea" ? (
                <Ship className="h-6 w-6 text-primary" />
              ) : (
                <Truck className="h-6 w-6 text-primary" />
              )}
            </div>
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  {incoterm.code}
                </span>
                <span className="text-muted-foreground">•</span>
                <span className="truncate font-medium">
                  {incoterm.fullName}
                </span>
              </div>
              <p className="truncate text-sm text-muted-foreground">
                {incoterm.keyPoint}
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground/50" />
          </CardContent>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/learn/${incoterm.code.toLowerCase()}`}>
      <Card className="h-full transition-all hover:border-primary hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-primary">
                {incoterm.code}
              </h3>
              <p className="text-sm text-muted-foreground">
                {incoterm.fullName}
              </p>
            </div>
            <Badge
              variant={
                incoterm.transportMode === "sea" ? "default" : "secondary"
              }
              className="flex items-center gap-1"
            >
              {incoterm.transportMode === "sea" ? (
                <Ship className="h-3 w-3" />
              ) : (
                <Truck className="h-3 w-3" />
              )}
              {incoterm.transportMode === "sea" ? "Sea Only" : "Any Mode"}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {incoterm.keyPoint}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
