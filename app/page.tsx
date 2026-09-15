import { ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

// @helix:story USER-925000
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <HowItWorks />
        <Testimonials />
        <section
          id="contact"
          className="py-24 bg-black"
          aria-label="Contact"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to orchestrate your{" "}
              <span className="text-cyan-400">AI agents</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of teams building smarter with Helix. Start your
              free trial today and see the difference.
            </p>
            <div className="contact-actions">
              <a href="#" className="btn-primary">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p>© {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}