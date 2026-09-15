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
    title: "Developer-First SDK",
    description:
      "Native SDKs for TypeScript, Python, and Go. Comprehensive documentation, CLI tooling, and example repositories to get your first agent running in under five minutes.",
  },
];

export default function Features() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
    <section ref={sectionRef as React.RefObject<HTMLDivElement>} className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything you need to orchestrate AI agents</h2>
          <p className="section-subtitle">
            Helix provides a complete toolkit for building, deploying, and managing intelligent agent systems — from prototype to enterprise scale.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card ${visible ? "fade-in" : ""}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="feature-icon-wrapper">
                <feature.icon className="feature-icon" aria-hidden="true" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}