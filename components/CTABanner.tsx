"use client";
// @helix:story USER-817000

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLElement>}
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-r from-ink-950 via-ink-900 to-ink-950 border border-helix-500/20 p-12 text-center">
        <div className="absolute inset-0 bg-gradient-radial from-helix-500/10 via-transparent to-transparent" />
        <div className="relative">
          <Sparkles className="w-8 h-8 text-helix-400 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to orchestrate your AI agents?
          </h2>
          <p className="text-ink-400 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of teams already building intelligent agent pipelines with Helix.
          </p>
          <button
            className="inline-flex items-center gap-2 bg-helix-500 hover:bg-helix-400 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            aria-label="Get started with Helix"
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}