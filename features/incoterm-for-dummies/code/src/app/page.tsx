import Link from "next/link";
import {
  BookOpen,
  Search,
  GitCompare,
  CheckCircle,
  Compass,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Educational Content",
    description:
      "Plain-language explanations of all 11 Incoterms 2020 with visual diagrams",
    href: "/learn",
  },
  {
    icon: Search,
    title: "Quick Reference",
    description: "Look up any of the 11 Incoterms with instant search",
    href: "/reference",
  },
  {
    icon: GitCompare,
    title: "Compare",
    description: "Side-by-side comparison of 2-3 Incoterms to see differences",
    href: "/compare",
  },
  {
    icon: CheckCircle,
    title: "Interactive Quiz",
    description:
      "Test your knowledge with fun quizzes and learn from mistakes",
    href: "/quiz",
  },
  {
    icon: Compass,
    title: "Find Right Term",
    description:
      "Answer simple questions to find the best Incoterm for your situation",
    href: "/find",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-16 text-center md:py-24 lg:py-32">
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
          Learn Incoterms the{" "}
          <span className="text-primary">Easy Way</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Master international trade terms with interactive lessons, visual
          guides, and practical tools. Everything you need to understand
          Incoterms 2020.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/learn">
              Start Learning
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/find">Find Your Incoterm</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-2xl font-semibold md:text-3xl">
            Everything You Need to Master Incoterms
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.href} href={feature.href}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-md">
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* What are Incoterms Section */}
      <section className="px-4 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold md:text-3xl">
            What are Incoterms?
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Incoterms (International Commercial Terms) are a set of 11
            internationally recognized rules published by the International
            Chamber of Commerce (ICC). They define the responsibilities of
            sellers and buyers in international trade transactions, specifying
            who is responsible for shipping, insurance, and tariffs.
          </p>
          <div className="mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link href="/learn">
                Explore All 11 Incoterms
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="bg-muted/50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                11
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Incoterms 2020
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                7
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Any Transport Mode
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                4
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Sea Transport Only
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                45+
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                Quiz Questions
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
