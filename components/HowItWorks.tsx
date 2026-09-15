import { useEffect, useRef, useState } from "react";
import { MessageSquare, Workflow, Rocket, TrendingUp } from "lucide-react";

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
    <section ref={sectionRef} className="section how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From concept to production in four steps</h2>
          <p className="section-subtitle">
            Helix simplifies the entire lifecycle of AI agent deployment — no complex infrastructure required.
          </p>
        </div>

        <div className="steps-container">
          <div className={`steps-line ${visible ? "animate" : ""}`} aria-hidden="true" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-row ${visible ? "fade-in" : ""} step-${index % 2 === 0 ? "left" : "right"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="step-node">
                <div className="step-icon-wrapper">
                  <step.icon className="step-icon" aria-hidden="true" />
                </div>
                <span className="step-number">{index + 1}</span>
              </div>

              <div className="step-content-card">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}