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
      [entry] => {
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
      ref={sectionRef as React.RefObject<HTMLElement>}
      id="workflow"
      className="py-24 bg-gradient-to-b from-black via-gray-950 to-black"
      aria-label="Workflow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Your agents,{" "}
            <span className="text-cyan-400">working together</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Helix workflows turn individual agents into coordinated teams that
            think, plan, and execute together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`group relative p-6 rounded-xl border border-gray-800/50 bg-gray-900/30 hover:border-cyan-500/30 hover:bg-gray-900/50 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                    <Icon
                      className="w-5 h-5 text-cyan-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}