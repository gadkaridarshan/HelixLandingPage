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
            <div className="nav-actions">
              <a href="#signin" className="btn btn-ghost">
                Sign In
              </a>
              <a href="#signup" className="btn btn-primary">
                Get Started
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="/" className="nav-logo" aria-label="Helix Home">
                  <span className="nav-logo-icon" aria-hidden="true">
                    ⚡
                  </span>
                  <span className="nav-logo-text">Helix</span>
                </a>
                <p className="footer-tagline">
                  Orchestrate AI agents with unmatched precision.
                </p>
              </div>
              <div className="footer-column">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="#features">Features</a>
                  </li>
                  <li>
                    <a href="#pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="#changelog">Changelog</a>
                  </li>
                  <li>
                    <a href="#docs">Documentation</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Resources</h4>
                <ul>
                  <li>
                    <a href="#blog">Blog</a>
                  </li>
                  <li>
                    <a href="#guides">Guides</a>
                  </li>
                  <li>
                    <a href="#api">API Reference</a>
                  </li>
                  <li>
                    <a href="#community">Community</a>
                  </li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                  <li>
                    <a href="#legal">Legal</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.</p>
              <div className="footer-legal">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}