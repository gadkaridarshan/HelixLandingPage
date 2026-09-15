"use client";

import { useEffect, useRef, useState } from "react";
import { Workflow, Shield, BarChart3, Plug, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Agent Workflows",
    description:
      "Design complex multi-agent workflows with visual drag-and-drop or define via code with our SDK.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, role-based access control, and audit logging built in from day one.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor agent performance with comprehensive dashboards and custom alerting rules.",
  },
  {
    icon: Plug,
    title: "Easy Integrations",
    description:
      "Connect to your existing stack with 100+ pre-built integrations and RESTful APIs.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    description:
      "Full data residency controls and compliance with SOC2, GDPR, and HIPAA standards.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized runtime engine delivers sub-100ms response times at any scale.",
  },
];

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section"
      id="features"
      aria-label="Features"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #0a0a1e 0%, #0f0f2a 50%, #0a0a1e 100%)",
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ---- Section Header ---- */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#a78bfa",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "0.75rem",
            }}
          >
            Features
          </span>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Everything You Need to Scale
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#94a3b8",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Powerful features designed to help you build, deploy, and manage AI agents with confidence.
          </p>
        </div>

        {/* ---- Feature Cards ---- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "rgba(167,139,250,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.25rem",
                  }}
                >
                  <Icon
                    style={{ color: "#a78bfa", width: "24px", height: "24px" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "0.5rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "#94a3b8",
                    lineHeight: "1.6",
                  }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}