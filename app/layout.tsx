import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Helix AI Orchestrator",
  description:
    "Build, deploy, and manage intelligent AI agent pipelines. Automate complex workflows, analyze real-time data, and scale effortlessly.",
  keywords: ["Helix", "AI Orchestrator", "AI Agents", "Automation", "Workflow"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}