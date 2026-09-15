"use client";

import { useEffect, useRef, useState } from "react";
import {
  Brain,
  Workflow,
  Activity,
  Database,
  ShieldCheck,
  Gauge,
  MessageSquare,
  Zap,
} from "lucide-react";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: Brain,
    title: "Intelligent Agents",
    description:
      "Build AI agents with custom personas, knowledge bases, and reasoning capabilities. Each agent understands its role and executes with precision.",
  },
  {
    icon: Workflow,
    title: "Visual Workflow Builder",
    description:
      "Design complex agent pipelines with a drag-and-drop interface. Add conditional branches, parallel execution, and human-in-the-loop checkpoints.",
  },
  {
    icon: Activity,
    title: "Real-Time Monitoring",
    description:
      "Track every agent decision, workflow step, and output in real-time. Get instant alerts when anomalies or bottlenecks are detected.",
  },
  {
    icon: Database,
    title: "Knowledge Integration",
    description:
      "Connect agents to your data sources — databases, APIs, documents, and web endpoints. Agents retrieve and reason over information dynamically.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Guardrails",
    description:
      "Built-in content filtering, output validation, and compliance checks ensure your agents stay within defined boundaries at all times.",
  },
  {
    icon: Gauge,
    title: "Performance Analytics",
    description:
      "Measure agent accuracy, latency, and throughput with detailed dashboards. Identify improvement opportunities with actionable insights.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Agent Collaboration",
    description:
      "Enable agents to communicate, share context, and delegate tasks to each other. Orchestrate complex multi-step workflows across teams.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description:
      "Ship agent pipelines to production in minutes. One-click deploy with automatic scaling, versioning, and rollback capabilities.",
  },
];

export default function FeaturesSection() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      ref={sectionRef}
      className="section"
      id="features"
      aria-label="Features"
    >
      <div className="container">
        {/* ---- Section Header ---- */}
        <div
          className={`${styles.sectionHeader} ${visible ? styles.visible : ""}`}
        >
          <span className="section-badge">Features</span>
          <h2 className="section-title">Everything you need to build</h2>
          <h2 className={`${styles.sectionTitleGradient} ${visible ? styles.visible : ""}`}>
            intelligent agents
          </h2>
          <p className="section-subtitle">
            Helix provides a complete toolkit for designing, deploying, and
            managing AI agent pipelines at any scale.
          </p>
        </div>

        {/* ---- Features Grid ---- */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${styles.featureCard} ${visible ? styles.visible : ""}`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className={styles.featureIcon}>
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
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