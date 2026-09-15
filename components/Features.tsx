"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Network, Cpu, Layers, GitBranch, Lock, Globe, Code2 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Intelligent Agent Builder",
    description:
      "Design and train custom AI agents with a visual drag-and-drop interface or our programmatic SDK. Define goals, constraints, and knowledge sources in minutes.",
  },
  {
    icon: Network,
    title: "Agent Collaboration",
    description:
      "Enable agents to communicate, share context, and delegate tasks to one another. Multi-agent orchestration that mirrors real-world team workflows.",
  },
  {
    icon: Cpu,
    title: "Real-Time Inference",
    description:
      "Deploy agents with sub-second inference latency. Auto-scaling infrastructure ensures consistent performance under any load, from prototype to production traffic.",
  },
  {
    icon: Layers,
    title: "Pipeline Orchestration",
    description:
      "Chain agents, data sources, and tools into robust pipelines. Conditional branching, parallel execution, and error recovery built in by default.",
  },
  {
    icon: GitBranch,
    title: "Version Control & Rollbacks",
    description:
      "Track every change to your agents and workflows. Roll back to any previous version with a single click, with full diff visibility and audit logs.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption, role-based access control, and private VPC deployment options. Your data never leaves your environment unless you choose otherwise.",
  },
  {
    icon: Globe,
    title: "Global Edge Deployment",
    description:
      "Ship agents to 40+ edge regions worldwide. Low-latency inference close to your users with automatic failover and geo-routing built into every deployment.",
  },
  {
    icon: Code2,
    title: "Developer-Friendly SDK",
    description:
      "Manage everything through our CLI, SDK, and REST API. Infrastructure-as-code support for teams that prefer terminal-driven workflows.",
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
      className="section bg-black"
      aria-label="Features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            Everything you need to build{" "}
            <span className="text-cyan-400">agentic systems</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From prototype to production, Helix provides the full toolkit for
            developing, deploying, and managing AI agents at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group p-6 rounded-xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-gray-800/40 transition-all duration-500 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <Icon className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
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