import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

// @helix:story USER-44000
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
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
              <button className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition-colors text-base">
                Get Started Free
              </button>
              <button className="px-8 py-3.5 border border-gray-700 hover:bg-gray-900 font-semibold rounded-lg transition-colors text-base text-gray-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
        <footer className="border-t border-gray-900/50 py-12 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights
              reserved.
            </span>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                Docs
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}