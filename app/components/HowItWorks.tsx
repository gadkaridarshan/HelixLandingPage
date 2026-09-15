import { MessageSquare, Play, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Define Your Agent",
    description:
      "Describe what your agent should do in natural language, or use our visual builder for complex multi-step logic.",
  },
  {
    icon: Play,
    title: "Deploy Instantly",
    description:
      "One-click deploy to our global edge network. Your agent is live with a public API endpoint in seconds.",
  },
  {
    icon: CheckCircle,
    title: "Monitor & Iterate",
    description:
      "Track performance, costs, and quality with built-in observability. Improve your agents with real-world feedback.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section hiw-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">From idea to production in 3 steps</h2>
          <p className="section-description">
            No complex setup or infrastructure to manage. Helix handles the heavy
            lifting so you can focus on building great agents.
          </p>
        </div>
        <div className="hiw-grid">
          {steps.map((step, index) => (
            <div className="hiw-step" key={step.title}>
              <div className="hiw-step-number" aria-hidden="true">
                {index + 1}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}