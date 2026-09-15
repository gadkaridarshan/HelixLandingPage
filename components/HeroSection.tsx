"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero-section" aria-label="Hero">
      <div className="hero-section-container">
        <div className="hero-section-grid">
          <div className={`hero-section-content ${mounted ? "fade-in" : ""}`}>
            <div className={`hero-section-badge ${mounted ? "fade-in" : ""}`}>
              <Sparkles className="hero-section-badge-icon" aria-hidden="true" />
              <span>Introducing Helix AI Orchestrator</span>
            </div>

            <h1 className={`hero-section-title ${mounted ? "fade-in" : ""}`}>
              Orchestrate AI agents with{" "}
              <span className="hero-section-title-gradient">unmatched precision</span>
            </h1>

            <p className={`hero-section-subtitle ${mounted ? "fade-in" : ""}`}>
              Build, deploy, and manage intelligent AI agent pipelines. Helix
              gives you the tools to automate complex workflows, analyze
              real-time data, and scale your operations effortlessly.
            </p>

            <div className={`hero-section-actions ${mounted ? "fade-in" : ""}`}>
              <a href="#signup" className="btn btn-primary">
                Get Started{" "}
                <ArrowRight className="btn-icon" aria-hidden="true" />
              </a>
              <a href="#demo" className="btn btn-secondary">
                View Demo
              </a>
            </div>

            <div className={`hero-section-stats ${mounted ? "fade-in" : ""}`}>
              <div className="hero-stat">
                <span className="hero-stat-value">10K+</span>
                <span className="hero-stat-label">Active Agents</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">99.9%</span>
                <span className="hero-stat-label">Uptime</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">500+</span>
                <span className="hero-stat-label">Teams</span>
              </div>
            </div>
          </div>

          <div className={`hero-section-visual ${mounted ? "fade-in" : ""}`}>
            <div className="hero-card hero-card-back" />
            <div className="hero-card hero-card-front">
              <div className="hero-card-header">
                <div className="hero-card-dot" />
                <div className="hero-card-dot" />
                <div className="hero-card-dot" />
              </div>
              <div className="hero-card-body">
                <div className="hero-card-line hero-card-line-short" />
                <div className="hero-card-line" />
                <div className="hero-card-line hero-card-line-medium" />
                <div className="hero-card-pipeline">
                  <div className="hero-card-node" />
                  <div className="hero-card-connector" />
                  <div className="hero-card-node hero-card-node-active" />
                  <div className="hero-card-connector" />
                  <div className="hero-card-node hero-card-node-active" />
                </div>
                <div className="hero-card-line hero-card-line-short" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}