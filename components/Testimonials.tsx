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
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              position: "absolute",
              left: "-3rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(167, 139, 250, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#a78bfa",
              transition: "background 0.2s ease",
            }}
            className="testimonial-nav"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            style={{
              position: "absolute",
              right: "-3rem",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(167, 139, 250, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              borderRadius: "50%",
              width: "48px",
              height: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#a78bfa",
              transition: "background 0.2s ease",
            }}
            className="testimonial-nav"
          >
            <ChevronRight size={24} />
          </button>

          {/* Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "1rem",
              padding: "2.5rem",
              position: "relative",
            }}
          >
            {/* Quote Icon */}
            <Quote
              size={36}
              style={{
                color: "rgba(167, 139, 250, 0.4)",
                marginBottom: "1rem",
              }}
              aria-hidden="true"
            />

            {/* Stars */}
            <div
              style={{
                display: "flex",
                gap: "0.25rem",
                marginBottom: "1.25rem",
              }}
              aria-label={`${t.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill={i < t.rating ? "#fbbf24" : "transparent"}
                  stroke={i < t.rating ? "#fbbf24" : "rgba(255,255,255,0.2)"}
                />
              ))}
            </div>

            {/* Quote Text */}
            <p
              style={{
                fontSize: "1.125rem",
                lineHeight: 1.7,
                color: "#e2e8f0",
                marginBottom: "2rem",
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>

            {/* Author */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #a78bfa, #7c3aed)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "1rem",
                  color: "#ffffff",
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                {t.avatar}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 600,
                    color: "#ffffff",
                    fontSize: "1rem",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255, 255, 255, 0.5)",
                  }}
                >
                  {t.role}, {t.company}
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              marginTop: "2rem",
            }}
            role="tablist"
            aria-label="Testimonial navigation"
          >
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                role="tab"
                aria-selected={idx === activeIndex}
                aria-label={`Go to testimonial ${idx + 1}`}
                style={{
                  width: idx === activeIndex ? "2rem" : "0.625rem",
                  height: "0.625rem",
                  borderRadius: "9999px",
                  background:
                    idx === activeIndex ? "#a78bfa" : "rgba(255,255,255,0.2)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}