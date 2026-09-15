"use client";
// @helix:story USER-870000

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
    name: "James O'Brien",
    role: "Director of Platform",
    company: "QuantumLab",
    avatar: "JO",
    rating: 5,
    quote:
      "The autonomous agent scheduling alone saved our team hundreds of hours this quarter. Helix is a force multiplier.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-700"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: TestimonialCardProps }) {
  return (
    <article className="glass-card p-6 rounded-xl">
      <StarRating rating={testimonial.rating} />
      <blockquote className="mt-4 text-gray-300 text-sm leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
      <div className="mt-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-helix-500 to-brand-violet flex items-center justify-center text-white text-xs font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
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
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      id="testimonials"
      aria-label="Testimonials"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by teams building
            <span className="text-helix-400"> agent pipelines</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            See why engineering leaders choose Helix to orchestrate AI agents at
            scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}