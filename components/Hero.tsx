"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-container">
        {/* ---- Left Content ---- */}
        <div className="hero-content">
          <div className={`hero-badge ${mounted ? "fade-in" : ""}`}>
            <Sparkles className="hero-badge-icon" aria-hidden="true" />
            <span>Introducing Helix AI Orchestrator</span>
          </div>

          <h1 className={`hero-title ${mounted ? "fade-in" : ""}`}>
            Orchestrate AI agents with{" "}
            <span className="hero-title-gradient">unmatched precision</span>
          </h1>

          <p className={`hero-subtitle ${mounted ? "fade-in" : ""}`}>
            Build, deploy, and manage intelligent AI agent pipelines. Helix
            gives you the tools to automate complex workflows, analyze
            real-time data, and scale your operations effortlessly.
          </p>

          <div className={`hero-actions ${mounted ? "fade-in" : ""}`}>
            <a href="#signup" className="btn btn-primary">
              Get Started
              <ArrowRight className="btn-icon" aria-hidden="true" />
            </a>
            <a href="#demo" className="btn btn-secondary">
              View Demo
            </a>
          </div>
        </div>

        {/* ---- Right Visual ---- */}
        <div className={`hero-visual ${mounted ? "fade-in" : ""}`}>
          <div className="dashboard-mockup">
            <div className="dashboard-header">
              <div className="dashboard-dot red" />
              <div className="dashboard-dot yellow" />
              <div className="dashboard-dot green" />
              <span className="dashboard-title">Helix Dashboard</span>
            </div>
            <div className="dashboard-body">
              <div className="dashboard-sidebar">
                <div className="sidebar-item active" />
                <div className="sidebar-item" />
                <div className="sidebar-item" />
                <div className="sidebar-item" />
              </div>
              <div className="dashboard-main">
                <div className="main-card" />
                <div className="main-card" />
                <div className="main-row">
                  <div className="main-card small" />
                  <div className="main-card small" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}