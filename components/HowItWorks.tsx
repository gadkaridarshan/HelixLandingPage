"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  Workflow,
  Rocket,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: MessageSquare,
    title: "Define Your Agents",
    description:
      "Specify your AI agents' roles, capabilities, and knowledge bases. Use our visual builder or define agents via code with our SDK.",
  },
  {
    icon: Workflow,
    title: "Configure Workflows",
    description:
      "Connect agents into intelligent workflows with conditional logic, human-in-the-loop checkpoints, and data routing between steps.",
  },
  {
    icon: Rocket,
    title: "Deploy & Monitor",
    description:
      "Launch your agent pipeline to production with real-time monitoring, alerting, and built-in observability from day one.",
  },
  {
    icon: TrendingUp,
    title: "Scale & Optimize",
    description:
      "Grow from prototype to enterprise-scale. Analyze performance data, fine-tune agent behavior, and scale resources on demand.",
  },
];

export default function HowItWorks() {
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
      id="how-it-works"
      aria-label="How It Works"
    >
      <div className="container">
        {/* ---- Section Header ---- */}
        <div
          className={`${styles.sectionHeader} ${visible ? styles.visible : ""}`}
        >
          <span className="section-badge">How It Works</span>
          <h2 className="section-title">Four steps to intelligent automation</h2>
          <p className="section-subtitle">
            From concept to production — Helix guides your agents from idea to
            impact in four simple stages.
          </p>
        </div>

        {/* ---- Steps ---- */}
        <div className={styles.stepsContainer}>
          {/* Vertical Line */}
          <div className={styles.verticalLine} aria-hidden="true" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;
            return (
              <div
                key={index}
                className={`${styles.step} ${visible ? styles.visible : ""} ${isEven ? styles.stepReverse : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={styles.stepContent}>
                  <div className={styles.stepIcon}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className={styles.stepText}>
                    <span className={styles.stepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.stepArrow} aria-hidden="true">
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}