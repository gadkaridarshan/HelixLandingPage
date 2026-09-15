import Hero from "./components/Hero";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Workflow from "./components/Workflow";
import Testimonials from "../components/Testimonials";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Workflow />
      <Testimonials />

      {/* CTA Section */}
      <section className="section cta-section" id="get-started">
        <div className="container">
          <div className="cta-card">
            <Sparkles className="cta-icon" aria-hidden="true" />
            <h2 className="cta-title">Ready to orchestrate your AI agents?</h2>
            <p className="cta-subtitle">
              Join thousands of developers building smarter with Helix. Start
              free, scale as you grow.
            </p>
            <div className="cta-actions">
              <a href="#signup" className="btn btn-primary">
                Get Started{" "}
                <ArrowRight className="btn-icon" aria-hidden="true" />
              </a>
              <a href="#demo" className="btn btn-secondary">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}