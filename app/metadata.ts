import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Helix AI Orchestrator",
    template: "%s | Helix AI Orchestrator",
  },
  description:
    "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision. Automate complex workflows, analyze real-time data, and scale effortlessly.",
  keywords: [
    "AI Orchestrator",
    "AI Agents",
    "Agent Pipelines",
    "Workflow Automation",
    "AI Infrastructure",
    "Machine Learning Ops",
    "Enterprise AI",
  ],
  creator: "Helix AI",
  authors: [{ name: "Helix AI", url: "https://helix-ai-orchestrator.vercel.app" }],
  publisher: "Helix AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://helix-ai-orchestrator.vercel.app",
    siteName: "Helix AI Orchestrator",
    title: "Helix AI Orchestrator",
    description:
      "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Helix AI Orchestrator — Orchestrate AI agents with unmatched precision",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix AI Orchestrator",
    description:
      "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision.",
    images: ["/og-image.png"],
    creator: "@helixai",
    site: "@helixai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://helix-ai-orchestrator.vercel.app",
  },
  category: "technology",
  manifest: "/site.webmanifest",
};