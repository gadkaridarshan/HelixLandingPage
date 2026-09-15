import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import LogoCloud from "../components/LogoCloud";

// @helix:story USER-491000
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
      "Build, deploy, and manage intelligent AI agent pipelines with unmatched precision. Automate complex workflows, analyze real-time data, and scale effortlessly.",
    images: ["/og-image.png"],
    creator: "@helixai",
    site: "@helixai",
  },
  alternates: {
    canonical: "https://helix-ai-orchestrator.vercel.app",
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
};

export default function Home() {
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
        <section id="contact" className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to orchestrate your AI agents?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Join thousands of teams building intelligent agent pipelines with
              Helix. Start free, scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-900 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
              Helix
            </span>
            <span className="text-gray-500 text-sm">AI Orchestrator</span>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Helix AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}