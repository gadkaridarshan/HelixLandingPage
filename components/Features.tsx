"use client";
// @helix:story USER-344000

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
      "Helix deploys worldwide with automatic scaling built in, so your agents reach users anywhere.",
  },
  {
    icon: Layers,
    title: "Seamless Integrations",
    description:
      "Helix connects with your existing tools, databases, and services through a growing library of integrations.",
  },
];

export default function Features() {
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-black"
      id="features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything you need to build agent pipelines
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Helix provides a complete toolkit for building, deploying, and managing AI agents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent: ElementType = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm transition-all duration-500 hover:border-helix-500/30 hover:bg-gray-900/50 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-helix-500/10">
                  <IconComponent className="w-6 h-6 text-helix-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
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