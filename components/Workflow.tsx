"use client";

import { useEffect, useRef, useState } from "react";
import { GitBranch, Network, ShieldCheck, Zap } from "lucide-react";

const workflowSteps = [
  {
    icon: Network,
    title: "Connect Agents",
    description:
      "Wire your AI agents together with visual drag-and-drop connections. Define data flows, triggers, and dependencies in seconds.",
  },
  {
    icon: GitBranch,
    title: "Define Logic",
    description:
      "Add conditional branching, parallel execution, and fallback paths. Build complex decision trees without writing boilerplate.",
  },
  {
    icon: ShieldCheck,
    title: "Guard & Validate",
    description:
      "Enforce guardrails, input validation, and safety checks at every step. Keep your agents on-task and within policy bounds.",
  },
  {
    icon: Zap,
    title: "Execute at Scale",
    description:
      "Run thousands of agent workflows concurrently with automatic retries, queuing, and priority management built in.",
  },
];

export default function Workflow() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-black"
      aria-label="Workflow"
      id="workflow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Workflow in{" "}
            <span className="text-cyan-400">four simple steps</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            From connection to execution, Helix guides your agents through a
            clear, repeatable pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`group p-6 rounded-2xl border border-gray-800/60 bg-gray-900/40 hover:border-cyan-500/30 hover:bg-gray-800/40 transition-all duration-700 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-5 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}