import { Brain, MessageSquare, Zap, CheckCircle, ArrowRight } from "lucide-react";

const pipelineNodes = [
  { icon: Brain, label: "Input" },
  { icon: MessageSquare, label: "Reason" },
  { icon: Zap, label: "Act" },
  { icon: CheckCircle, label: "Verify" },
];

export default function Workflow() {
  return (
    <section className="section workflow-section" id="workflow">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Agent Pipeline</span>
          <h2 className="section-title">Intelligent agent workflows</h2>
          <p className="section-description">
            Every Helix agent follows a sophisticated pipeline — reasoning,
            acting, and verifying with built-in quality gates.
          </p>
        </div>
        <div className="workflow-visual">
          {pipelineNodes.map((node, index) => (
            <div key={node.label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="workflow-node">
                <div className="workflow-node-icon" aria-hidden="true">
                  <node.icon />
                </div>
                <span className="workflow-node-label">{node.label}</span>
              </div>
              {index < pipelineNodes.length - 1 && (
                <ArrowRight className="workflow-arrow" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}