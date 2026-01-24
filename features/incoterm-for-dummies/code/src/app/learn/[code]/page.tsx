import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Ship,
  Truck,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ResponsibilityDiagram } from "@/components/incoterm";
import { incoterms, getIncotermByCode } from "@/data/incoterms";

interface PageProps {
  params: Promise<{ code: string }>;
}

export async function generateStaticParams() {
  return incoterms.map((incoterm) => ({
    code: incoterm.code.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  const incoterm = getIncotermByCode(code);
  if (!incoterm) {
    return { title: "Incoterm Not Found" };
  }
  return {
    title: `${incoterm.code} - ${incoterm.fullName} | Incoterm for Dummies`,
    description: incoterm.description.slice(0, 160),
  };
}

export default async function IncotermDetailPage({ params }: PageProps) {
  const { code } = await params;
  const incoterm = getIncotermByCode(code);

  if (!incoterm) {
    notFound();
  }

  // Get prev/next incoterms for navigation
  const currentIndex = incoterms.findIndex(
    (i) => i.code.toLowerCase() === code.toLowerCase()
  );
  const prevIncoterm = currentIndex > 0 ? incoterms[currentIndex - 1] : null;
  const nextIncoterm =
    currentIndex < incoterms.length - 1 ? incoterms[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/learn">Learn</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{incoterm.code}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold text-primary">
                {incoterm.code}
              </h1>
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
            <p className="mt-1 text-xl text-muted-foreground">
              {incoterm.fullName}
            </p>
          </div>
        </div>
        <p className="mt-4 text-lg font-medium">{incoterm.keyPoint}</p>
      </div>

      {/* Description */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {incoterm.description}
          </p>
        </CardContent>
      </Card>

      {/* Responsibility Diagram */}
      <div className="mb-8">
        <ResponsibilityDiagram incoterm={incoterm} />
      </div>

      {/* Responsibilities Grid */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Seller Responsibilities */}
        <Card>
          <CardHeader className="bg-blue-50 dark:bg-blue-950/20">
            <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                S
              </div>
              Seller Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              {incoterm.sellerResponsibilities.map((resp) => (
                <li key={resp.id} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                  <div>
                    <p className="font-medium">{resp.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {resp.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Buyer Responsibilities */}
        <Card>
          <CardHeader className="bg-orange-50 dark:bg-orange-950/20">
            <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-white">
                B
              </div>
              Buyer Responsibilities
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <ul className="space-y-3">
              {incoterm.buyerResponsibilities.map((resp) => (
                <li key={resp.id} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                  <div>
                    <p className="font-medium">{resp.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {resp.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* When to Use & Common Mistakes */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* When to Use */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-green-500" />
              When to Use
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {incoterm.whenToUse.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Common Mistakes */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              Common Mistakes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {incoterm.commonMistakes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border pt-6">
        {prevIncoterm ? (
          <Button variant="outline" asChild>
            <Link href={`/learn/${prevIncoterm.code.toLowerCase()}`}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              {prevIncoterm.code}
            </Link>
          </Button>
        ) : (
          <div />
        )}
        <Button variant="outline" asChild>
          <Link href="/learn">View All</Link>
        </Button>
        {nextIncoterm ? (
          <Button variant="outline" asChild>
            <Link href={`/learn/${nextIncoterm.code.toLowerCase()}`}>
              {nextIncoterm.code}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
