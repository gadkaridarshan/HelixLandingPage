"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Workflow, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Define Your Agents",
    description:
      "Specify your AI agents' roles, capabilities, and knowledge bases. Use our visual builder or define agents via code with our SDK.",
  },
  {
    icon: Workflow,
    title: "Configure Workflows",
    description:
      "Connect agents into intelligent workflows with conditional logic, human-in-the-loop checkpoints, and data routing between steps.",
  },
  {
    icon: Rocket,
    title: "Deploy & Monitor",
    description:
      "Launch your agent pipeline to production with real-time monitoring, alerting, and built-in observability from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description:
      "Grow from prototype to enterprise-scale. Analyze performance data, fine-tune agent behavior, and scale resources on demand.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      aria-label="How It Works"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #0a0a1e 0%, #111130 100%)",
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
            How It Works
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
            From Concept to Production in Four Steps
          </h2>
        </div>

        {/* ---- Steps ---- */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                style={{
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "12px",
                  padding: "1.75rem",
                }}
              >
                <div
                  style={{
                    flexShrink: 0,
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(167,139,250,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Icon
                    style={{ color: "#a78bfa", width: "28px", height: "28px" }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "#a78bfa",
                      color: "#0f0f2a",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 600,
                      color: "#ffffff",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.9375rem",
                      color: "#94a3b8",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}