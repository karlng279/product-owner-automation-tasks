import Link from "next/link";
import { Ship, Truck } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Incoterm } from "@/types";

interface IncotermCardProps {
  incoterm: Incoterm;
}

export function IncotermCard({ incoterm }: IncotermCardProps) {
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
              variant={incoterm.transportMode === "sea" ? "default" : "secondary"}
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
