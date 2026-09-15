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

const features = [
  {
    icon: BrainCircuit,
    title: "Intelligent Agents",
    description:
      "Build AI agents that understand context, learn from data, and make autonomous decisions.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption, role-based access, and audit trails built in from day one.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized runtime with edge deployment ensures sub-second response times globally.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Monitor agent performance, track KPIs, and gain actionable insights through dashboards.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy worldwide with automatic scaling, load balancing, and multi-region failover.",
  },
  {
    icon: Layers,
    title: "Composable Architecture",
    description:
      "Mix and match agents, workflows, and integrations to build exactly what you need.",
  },
];

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
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
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything you need to{" "}
            <span className="text-cyan-400">ship AI agents</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Helix provides a complete toolkit for building, deploying, and
            managing intelligent agent pipelines at any scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gray-900/50 border border-gray-800/60 hover:border-cyan-500/30 transition-all duration-300 hover:bg-gray-800/50"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}