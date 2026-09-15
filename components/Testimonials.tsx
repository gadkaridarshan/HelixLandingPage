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
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "1.25rem",
              padding: "2.5rem",
              position: "relative",
            }}
          >
            {/* Quote icon */}
            <Quote
              style={{
                width: "2.5rem",
                height: "2.5rem",
                color: "#7c3aed",
                opacity: 0.4,
                marginBottom: "1rem",
              }}
              aria-hidden="true"
            />

            {/* Quote text */}
            <p
              key={t.id}
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                animation: `fadeIn 0.4s ease`,
              }}
            >
              "{t.quote}"
            </p>

            {/* Stars */}
            <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  style={{
                    width: "1rem",
                    height: "1rem",
                    color: i < t.rating ? "#fbbf24" : "rgba(255,255,255,0.15)",
                    fill: i < t.rating ? "#fbbf24" : "transparent",
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Author */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#ffffff",
                }}
              >
                {t.avatar}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              position: "absolute",
              top: "50%",
              left: "-1rem",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(10,10,30,0.9)",
              color: "#ffffff",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <ChevronLeft style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              position: "absolute",
              top: "50%",
              right: "-1rem",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(10,10,30,0.9)",
              color: "#ffffff",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <ChevronRight style={{ width: "1.25rem", height: "1.25rem" }} />
          </button>

          {/* Dots */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "1.5rem",
            }}
          >
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === activeIndex ? "1.5rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "9999px",
                  border: "none",
                  background:
                    i === activeIndex ? "#7c3aed" : "rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ---- Company Logos Strip ---- */}
        <div
          style={{
            marginTop: "3.5rem",
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "1.5rem",
            }}
          >
            Powering teams at
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {["CloudScale", "DataForge", "NeuralPath", "RapidAPI", "VertexAI"].map(
              (name) => (
                <span
                  key={name}
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.2)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}