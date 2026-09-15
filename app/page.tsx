// @helix:story USER-491000
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import LogoCloud from "../components/LogoCloud";

export const metadata: Metadata = {
  title: "Helix AI Orchestrator",
  description:
    "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision. Automate complex workflows, analyze real-time data, and scale effortlessly.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://helix-ai-orchestrator.vercel.app",
    siteName: "Helix AI Orchestrator",
    title: "Helix AI Orchestrator",
    description:
      "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision. Automate complex workflows, analyze real-time data, and scale effortlessly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Helix AI Orchestrator — AI Agent Pipeline Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helix AI Orchestrator",
    description:
      "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Workflow />
        <HowItWorks />
        <Testimonials />
      </main>
    </>
  );
}