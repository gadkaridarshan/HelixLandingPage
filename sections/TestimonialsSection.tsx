"use client";

import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "CloudScale",
    avatar: "SC",
    rating: 5,
    quote:
      "Helix transformed how we manage our AI infrastructure. Our team went from manual orchestration to fully automated agent pipelines in under two weeks.",
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "CTO",
    company: "DataForge",
    avatar: "MR",
    rating: 5,
    quote:
      "The visual workflow builder is incredibly intuitive. We built complex agent dependencies that would have taken months with traditional approaches.",
  },
  {
    id: 3,
    name: "Aisha Patel",
    role: "Head of AI",
    company: "NeuralPath",
    avatar: "AP",
    rating: 5,
    quote:
      "Deployment and observability were seamless. Our agents are now running production workloads with 99.9% uptime.",
  },
  {
    id: 4,
    name: "James Liu",
    role: "Engineering Lead",
    company: "QuantumLab",
    avatar: "JL",
    rating: 5,
    quote:
      "The edge deployment model is a game-changer. We see 40% faster response times across our global user base since switching to Helix.",
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
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
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
      className={`py-24 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Loved by teams building agents
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            See why engineering teams trust Helix to power their AI agent
            pipelines in production.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-ink-900/50 border border-ink-800/50 rounded-xl p-6"
            >
              <div className="flex items-center gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="text-ink-200 leading-relaxed mb-6 text-sm">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-helix-500/20 flex items-center justify-center text-helix-300 text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-ink-500 text-xs">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}