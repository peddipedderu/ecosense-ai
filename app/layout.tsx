import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoSense AI — Community Environmental Intelligence Platform",
  description: "Official EurekaDev 2026 Submission. Crowdsourced biomonitoring, AI ecological diagnostics, and civic environmental remediation.",
  keywords: ["EurekaDev 2026", "Environmental Science", "AI Biomonitoring", "Citizen Science", "Biology Hackathon"],
  openGraph: {
    title: "EcoSense AI — EurekaDev 2026",
    description: "Crowdsourced environmental monitoring powered by AI.",
    url: "https://ecosense-ai.fly.dev",
    siteName: "EcoSense AI",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
