import { Bot, Cpu, Layers, Workflow, Shield, Zap, Code2, Globe, Lock } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Agent Builder",
    description:
      "Design complex AI agents with visual workflows. Drag, drop, and connect agent capabilities with zero boilerplate.",
  },
  {
    icon: Cpu,
    title: "Multi-Agent Orchestration",
    description:
      "Coordinate teams of AI agents that collaborate, delegate, and reason together to solve multi-step tasks.",
  },
  {
    icon: Layers,
    title: "Modal Integration",
    description:
      "Plug into any LLM — OpenAI, Anthropic, local models, or your own. Switch providers without rewriting logic.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Automate multi-step pipelines with conditional branching, parallel execution, and human-in-the-loop approvals.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 compliant with end-to-end encryption, role-based access control, and audit logging built in.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized inference runtime with caching, batching, and streaming for sub-second agent responses.",
  },
  {
    icon: Code2,
    title: "SDK & APIs",
    description:
      "Full-featured TypeScript and Python SDKs. REST and GraphQL APIs for every platform and language.",
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description:
      "Deploy agents to 30+ edge regions worldwide with automatic scaling, health checks, and failover.",
  },
  {
    icon: Lock,
    title: "Observability",
    description:
      "Real-time dashboards, tracing, and analytics to monitor agent performance, costs, and quality metrics.",
  },
];

export default function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything you need to build agents</h2>
          <p className="section-description">
            Helix provides a complete toolkit for building, deploying, and managing
            intelligent AI agents — from concept to production.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        <Icon className="feature-icon-svg" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}