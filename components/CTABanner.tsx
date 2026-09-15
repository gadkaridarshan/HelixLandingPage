"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Shield, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    label: "Fast",
    description: "Deploy in minutes",
  },
  {
    icon: Shield,
    label: "Secure",
    description: "Enterprise-grade",
  },
  {
    icon: Globe,
    label: "Global",
    description: "Scale anywhere",
  },
];

export default function CTABanner() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cta-banner"
      aria-label="Get Started"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #0a0a1e 0%, #060614 100%)",
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)",
            borderRadius: "1.5rem",
            padding: "4rem 2.5rem",
            overflow: "hidden",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-60%",
              left: "-10%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.04)",
              pointerEvents: "none",
            }}
          />

          {/* Sparkle icon */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <Sparkles
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "rgba(255,255,255,0.9)",
                marginBottom: "1.25rem",
              }}
              aria-hidden="true"
            />

            <h2
              style={{
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Ready to Orchestrate Your AI Agents?
            </h2>

            <p
              style={{
                fontSize: "1.0625rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "540px",
                margin: "0 auto 2rem",
                lineHeight: 1.6,
              }}
            >
              Start building intelligent agent pipelines today. Free for teams
              under 5 agents. No credit card required.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3rem",
              }}
            >
              <a
                href="#signup"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "#ffffff",
                  color: "#7c3aed",
                  textDecoration: "none",
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "none";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Get Started Free
                <ArrowRight style={{ width: "1rem", height: "1rem" }} />
              </a>
              <a
                href="#demo"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 2rem",
                  background: "transparent",
                  color: "#ffffff",
                  textDecoration: "none",
                  borderRadius: "0.75rem",
                  fontSize: "1rem",
                  fontWeight: 600,
                  border: "1px solid rgba(255,255,255,0.3)",
                  transition: "background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                View Demo
              </a>
            </div>

            {/* Highlights */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "2.5rem",
                flexWrap: "wrap",
                position: "relative",
                zIndex: 1,
              }}
            >
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    style={{ textAlign: "center" }}
                  >
                    <Icon
                      style={{
                        width: "1.25rem",
                        height: "1.25rem",
                        color: "rgba(255,255,255,0.7)",
                        marginBottom: "0.375rem",
                      }}
                      aria-hidden="true"
                    />
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#ffffff",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}