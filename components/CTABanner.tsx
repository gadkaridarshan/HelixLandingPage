"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="cta-banner" aria-label="Call to action">
      <div className="cta-banner-container">
        <div className={`cta-banner-content ${visible ? "fade-in" : ""}`}>
          <h2 className="cta-banner-title">
            Ready to transform your AI infrastructure?
          </h2>
          <p className="cta-banner-subtitle">
            Join hundreds of teams building intelligent agent pipelines with
            Helix. Start building today — it takes less than 5 minutes.
          </p>
          <div className="cta-banner-actions">
            <button
              type="button"
              className="cta-banner-button"
            >
              Get Started
              <ArrowRight
                className="cta-banner-button-icon"
                aria-hidden="true"
              />
            </button>
            <a href="#how-it-works" className="cta-banner-link">
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}