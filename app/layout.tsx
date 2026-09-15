import type { Metadata } from "next";
import "./globals.css";

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
        {/* ---- Navigation ---- */}
        <header className="site-header">
          <nav className="nav" aria-label="Main navigation">
            <a href="/" className="nav-logo" aria-label="Helix Home">
              <span className="nav-logo-icon" aria-hidden="true">
                ⚡
              </span>
              <span className="nav-logo-text">Helix</span>
            </a>
            <ul className="nav-links">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
              <li>
                <a href="#workflow">Workflow</a>
              </li>
              <li>
                <a href="#get-started">Get Started</a>
              </li>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}