import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering, TechFlow",
    quote:
      "Helix transformed how our team builds AI workflows. What used to take weeks of integration work now ships in hours. The orchestration layer is incredibly reliable.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "CTO, DataPulse",
    quote:
      "We went from prototype to production in under a month. The real-time monitoring and observability tools alone saved us countless hours of debugging.",
    rating: 5,
  },
  {
    name: "Emily Nakamura",
    role: "Lead AI Researcher, MindForge",
    quote:
      "The agent pipeline abstraction is brilliant. Our researchers focus on model quality while Helix handles deployment, scaling, and routing automatically.",
    rating: 5,
  },
];

function TestimonialCard({
  name,
  role,
  quote,
  rating,
}: {
  name: string;
  role: string;
  quote: string;
  rating: number;
}) {
  return (
    <div className="testimonial-card">
      <Quote className="testimonial-quote-icon" aria-hidden="true" />
      <p className="testimonial-quote">&ldquo;{quote}&rdquo;</p>
      <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`testimonial-star ${
              i < rating ? "testimonial-star-filled" : ""
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="testimonial-author">
        <div className="testimonial-avatar" aria-hidden="true">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <p className="testimonial-name">{name}</p>
          <p className="testimonial-role">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section testimonials-section ${visible ? "fade-in" : ""}`}
      id="testimonials"
      ref={sectionRef}
      aria-label="Testimonials"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trusted by teams building the future</h2>
          <p className="section-subtitle">
            See why engineering leaders choose Helix to orchestrate their AI
            agents.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <TestimonialCard
              key={index}
              name={t.name}
              role={t.role}
              quote={t.quote}
              rating={t.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}