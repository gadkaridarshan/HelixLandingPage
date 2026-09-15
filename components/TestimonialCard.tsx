"use client";

import { useEffect, useRef, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";

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
    name: "James Okonkwo",
    role: "Director of Platform",
    company: "Streamline",
    avatar: "JO",
    rating: 5,
    quote:
      "We evaluated every major orchestrator on the market. Helix was the only one that delivered on its promise of precision. The agent-level traceability is unmatched.",
  },
];

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
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
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 bg-black"
      aria-label="Testimonials"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Trusted by teams building
            <span className="text-cyan-400"> smarter</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See what our customers have to say about transforming their AI
            infrastructure with Helix.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`transition-all duration-700 delay-${
                index * 100
              } ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                quote={testimonial.quote}
              />
            </div>
          ))}
        </div>

        {/* Success Indicators Row */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center p-6 rounded-xl border border-gray-800/60 bg-gray-900/30">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
              99.9%
            </p>
            <p className="text-sm text-gray-500">Uptime SLA</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-800/60 bg-gray-900/30">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
              500+
            </p>
            <p className="text-sm text-gray-500">Enterprise Clients</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-800/60 bg-gray-900/30">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
              2M+
            </p>
            <p className="text-sm text-gray-500">Agents Deployed</p>
          </div>
          <div className="text-center p-6 rounded-xl border border-gray-800/60 bg-gray-900/30">
            <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
              4.9/5
            </p>
            <p className="text-sm text-gray-500">Customer Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}