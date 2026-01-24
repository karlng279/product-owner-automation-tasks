import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationHeader, Footer } from "@/components/layout";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Incoterm for Dummies - Learn International Trade Terms",
  description:
    "Master Incoterms 2020 with interactive lessons, quizzes, and visual guides. Learn international trade terms the easy way.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationHeader />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
