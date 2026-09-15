"use client";

import { ArrowRight, Sparkles, Zap, Shield, BarChart3, Bot, Cpu, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="features">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          <span>v2.0 — Now with multi-agent orchestration</span>
        </div>
        <h1 className="hero-title">
          Build & Deploy{" "}
          <span className="hero-title-gradient">AI Agents</span> at Scale
        </h1>
        <p className="hero-subtitle">
          Helix is the AI orchestrator that empowers developers to build, deploy,
          and scale intelligent agents with ease. From prototype to production in
          minutes.
        </p>
        <div className="hero-actions">
          <a href="#get-started" className="btn btn-primary">
            Get Started <ArrowRight className="btn-icon" aria-hidden="true" />
          </a>
          <a href="#docs" className="btn btn-secondary">
            Read Documentation
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">10K+</div>
            <div className="hero-stat-label">Developers</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">1M+</div>
            <div className="hero-stat-label">Agents Deployed</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">99.9%</div>
            <div className="hero-stat-label">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
}