"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "CloudScale",
    avatar: "SC",
    rating: 5,
    quote:
      "Helix transformed how we manage our AI infrastructure. Our team went from manual orchestration to fully automated agent pipelines in under two weeks. The real-time monitoring alone saved us countless hours.",
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "CTO",
    company: "DataForge",
    avatar: "MR",
    rating: 5,
    quote:
      "The visual workflow builder is incredibly intuitive. We built complex agent dependencies that would have taken months with traditional approaches. Helix paid for itself in the first sprint.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Head of AI",
    company: "NeuralPath",
    avatar: "AP",
    rating: 5,
    quote:
      "Deployment and observability were seamless. Our agents are now running production workloads with 99.9% uptime, and we have full visibility into every decision they make.",
  },
  {
    id: 4,
    name: "James O'Brien",
    role: "Lead Developer",
    company: "RapidAPI",
    avatar: "JO",
    rating: 4,
    quote:
      "We needed a solution that could scale with our growing agent fleet. Helix handled it gracefully. The SDK is well-documented and the community support is outstanding.",
  },
];

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="section"
      id="testimonials"
      aria-label="Customer Testimonials"
      style={{
        padding: "6rem 1.5rem",
        background: "linear-gradient(180deg, #0f0f2a 0%, #0a0a1e 100%)",
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
            Customer Trust
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
            Trusted by Teams Building the Future
          </h2>
        </div>

        {/* ---- Testimonial Carousel ---- */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          {/* ---- Testimonial Card ---- */}
          <div
            style={{
              position: "relative",
              background: "rgba(31,31,46,0.5)",
              border: "1px solid rgba(39,39,42,0.5)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <Quote
              className="w-8 h-8 mb-4"
              style={{ color: "rgba(167,139,250,0.4)" }}
              aria-hidden="true"
            />

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "#e4e4e7",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* ---- Stars ---- */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "1.25rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5"
                  style={{
                    color: i < t.rating ? "#facc15" : "#27272a",
                    fill: i < t.rating ? "#facc15" : "transparent",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* ---- Author ---- */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  flexShrink: 0,
                }}
              >
                {t.avatar}
              </div>
              <div>
                <p style={{ fontWeight: 600, color: "#fff" }}>{t.name}</p>
                <p style={{ fontSize: "0.875rem", color: "#71717a" }}>
                  {t.role}, {t.company}
                </p>
              </div>
            </div>

            {/* ---- Navigation Arrows ---- */}
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
                position: "absolute",
                left: "-1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "#18181b",
                border: "1px solid #27272a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a1a1aa",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#3f3f46";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a1a1aa";
                e.currentTarget.style.borderColor = "#27272a";
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              style={{
                position: "absolute",
                right: "-1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                width: "40px",
                height: "40px",
                borderRadius: "9999px",
                background: "#18181b",
                border: "1px solid #27272a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#a1a1aa",
                cursor: "pointer",
                transition: "color 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.borderColor = "#3f3f46";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#a1a1aa";
                e.currentTarget.style.borderColor = "#27272a";
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* ---- Dot Indicators ---- */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "1.5rem",
            }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === activeIndex ? "24px" : "10px",
                  height: "10px",
                  borderRadius: "9999px",
                  background:
                    i === activeIndex ? "#a78bfa" : "#27272a",
                  border: "none",
                  cursor: "pointer",
                  transition: "width 0.3s, background 0.3s",
                }}
              />
            ))}
          </div>
        </div>

        {/* ---- All Testimonials Grid ---- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              style={{
                background: "rgba(31,31,46,0.3)",
                border: "1px solid rgba(39,39,42,0.4)",
                borderRadius: "0.75rem",
                padding: "1.25rem",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "9999px",
                  background:
                    "linear-gradient(135deg, #a78bfa 0%, #22d3ee 100%)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                {item.avatar}
              </div>
              <p style={{ fontWeight: 600, color: "#fff", fontSize: "0.875rem" }}>
                {item.name}
              </p>
              <p style={{ fontSize: "0.75rem", color: "#71717a" }}>
                {item.role}, {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}