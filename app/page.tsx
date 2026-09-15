import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

// @helix:story USER-26000
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#signup"
                className="btn btn-primary w-full sm:w-auto"
              >
                Get Started Free
              </a>
              <a
                href="#demo"
                className="btn btn-secondary w-full sm:w-auto"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights
            reserved.
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">
              Docs
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}