"use client";

import { useEffect, useRef, useState } from "react";
import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
  Layers,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BrainCircuit,
    title: "Intelligent Agents",
    description:
      "Helix builds AI agents that understand context, learns from data, and makes autonomous decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Helix provides bank-grade encryption, role-based access, and builds audit trails in from day one.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Helix optimizes runtime with edge deployment ensures sub-second response times globally.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Helix monitors agent performance, tracks KPIs, so the Product Team gains actionable insights through dashboards.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Helix deploys worldwide with automatic scaling, load balancing, and multi-region failover support.",
  },
  {
    icon: Layers,
    title: "Extensible Architecture",
    description:
      "Helix plugins and modular components let you extend functionality without touching core infrastructure.",
  },
];

export default function Features() {
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
      id="features"
      className={`py-24 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to ship AI agents
          </h2>
          <p className="text-ink-400 text-lg max-w-2xl mx-auto">
            Helix provides a complete toolkit for building, deploying, and
            managing intelligent agent pipelines at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-ink-900/50 border border-ink-800/50 rounded-xl p-6 hover:border-helix-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-helix-500/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-helix-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-ink-400 text-sm leading-relaxed">
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