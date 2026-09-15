"use client";
// @helix:story USER-344000

/// <reference types="react" />
/// <reference types="react-dom" />

import { useEffect, useRef, useState, type ElementType } from "react";
import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
  Layers,
} from "lucide-react";

interface Feature {
  icon: ElementType;
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
      "Helix deploys worldwide with automatic scaling and regional failover, ensuring your agents are always online.",
  },
  {
    icon: Layers,
    title: "Multi-Agent Orchestration",
    description:
      "Compose complex systems from simple agent blocks. Route data, handle failures, and manage dependencies effortlessly.",
  },
];

export default function Features(): JSX.Element {
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
      id="features"
      ref={sectionRef}
      className={`py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to build agent pipelines
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Helix provides a complete toolkit for building, deploying, and managing intelligent AI agents at scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
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