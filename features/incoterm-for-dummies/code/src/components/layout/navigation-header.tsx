"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  HelpCircle,
  FileText,
  GitCompare,
  Compass,
  Menu,
  Search,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { incoterms } from "@/data/incoterms";

const navLinks = [
  { label: "Learn", path: "/learn", icon: BookOpen },
  { label: "Quiz", path: "/quiz", icon: HelpCircle },
  { label: "Reference", path: "/reference", icon: FileText },
  { label: "Compare", path: "/compare", icon: GitCompare },
  { label: "Find", path: "/find", icon: Compass },
];

export function NavigationHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [showResults, setShowResults] = React.useState(false);
  const searchRef = React.useRef<HTMLDivElement>(null);

  // Filter incoterms based on search query
  const searchResults = React.useMemo(() => {
    if (searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return incoterms
      .filter(
        (i) =>
          i.code.toLowerCase().includes(query) ||
          i.fullName.toLowerCase().includes(query)
      )
      .slice(0, 5);
  }, [searchQuery]);

  // Close search results when clicking outside
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold transition-opacity hover:opacity-80"
          aria-label="Go to homepage"
        >
          <span className="text-primary">Incoterm</span>
          <span className="text-muted-foreground">for Dummies</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 md:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.path);
            return (
              <Button
                key={link.path}
                variant="ghost"
                size="sm"
                asChild
                className={cn(
                  "gap-2",
                  active
                    ? "text-foreground font-medium"
                    : "text-muted-foreground"
                )}
              >
                <Link
                  href={link.path}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </Button>
            );
          })}
        </nav>

        {/* Desktop Search */}
        <div className="relative hidden md:block" ref={searchRef}>
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search Incoterms..."
            className="w-[200px] pl-9 lg:w-[280px]"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
          />
          {/* Search Results Dropdown */}
          {showResults && searchQuery.length >= 2 && (
            <div className="absolute top-full left-0 right-0 mt-1 rounded-md border border-border bg-background shadow-lg">
              {searchResults.length > 0 ? (
                <ul className="py-1">
                  {searchResults.map((incoterm) => (
                    <li key={incoterm.code}>
                      <Link
                        href={`/learn/${incoterm.code.toLowerCase()}`}
                        className="flex items-center gap-3 px-3 py-2 hover:bg-accent"
                        onClick={() => {
                          setShowResults(false);
                          setSearchQuery("");
                        }}
                      >
                        <span className="font-semibold text-primary">
                          {incoterm.code}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {incoterm.fullName}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="px-3 py-2 text-sm text-muted-foreground">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle className="text-left">
                <span className="text-primary">Incoterm</span>
                <span className="text-muted-foreground"> for Dummies</span>
              </SheetTitle>
            </SheetHeader>
            <div className="mt-6 flex flex-col gap-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search Incoterms..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              {/* Mobile Search Results */}
              {searchQuery.length >= 2 && (
                <div className="rounded-md border border-border">
                  {searchResults.length > 0 ? (
                    <ul className="py-1">
                      {searchResults.map((incoterm) => (
                        <li key={incoterm.code}>
                          <Link
                            href={`/learn/${incoterm.code.toLowerCase()}`}
                            className="flex items-center gap-3 px-3 py-2 hover:bg-accent"
                            onClick={() => {
                              setIsOpen(false);
                              setSearchQuery("");
                            }}
                          >
                            <span className="font-semibold text-primary">
                              {incoterm.code}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {incoterm.fullName}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      No results found
                    </div>
                  )}
                </div>
              )}
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-1" aria-label="Main navigation">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.path);
                  return (
                    <Button
                      key={link.path}
                      variant="ghost"
                      asChild
                      className={cn(
                        "justify-start gap-3",
                        active
                          ? "text-foreground font-medium bg-accent"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link
                        href={link.path}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon className="h-5 w-5" />
                        {link.label}
                      </Link>
                    </Button>
                  );
                })}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
