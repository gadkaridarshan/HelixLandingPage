import { useEffect, useRef, useState } from "react";
import { Quote, Star, TrendingUp, Users, Zap, CheckCircle } from "lucide-react";
import trustData from "../data/trust-signals.json";

export default function Testimonials() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const metrics = trustData.metrics as Array<{ value: string; label: string }>;
  const testimonials = trustData.testimonials as Array<{
    quote: string;
    name: string;
    role: string;
    company: string;
  }>;
  const partners = trustData.partners as string[];

  return (
    <section
      className={`section testimonials-section ${visible ? "fade-in" : ""}`}
      id="testimonials"
      ref={sectionRef}
      aria-label="Testimonials and Trust Signals"
    >
      <div className="container">
        {/* ---- Header ---- */}
        <div className="section-header">
          <p className="section-label">Trusted by teams everywhere</p>
          <h2 className="section-title">
            Why teams choose <span className="text-gradient">Helix</span>
          </h2>
          <p className="section-subtitle">
            See how companies of all sizes rely on Helix to orchestrate their
            AI agents with confidence.
          </p>
        </div>

        {/* ---- Metrics Row ---- */}
        <div className="metrics-row">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`metric-card ${visible ? "metric-fade-in" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="metric-value">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* ---- Testimonial Cards ---- */}
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <blockquote
              key={index}
              className={`testimonial-card ${visible ? "card-fade-in" : ""}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Quote className="testimonial-quote-icon" aria-hidden="true" />
              <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
              <footer className="testimonial-footer">
                <div className="testimonial-avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </div>
                <div className="testimonial-author">
                  <cite className="testimonial-name">{t.name}</cite>
                  <span className="testimonial-role">
                    {t.role} at {t.company}
                  </span>
                </div>
                <div className="testimonial-stars" aria-label="5 out of 5 stars">
                  <Star className="star-icon" aria-hidden="true" />
                  <Star className="star-icon" aria-hidden="true" />
                  <Star className="star-icon" aria-hidden="true" />
                  <Star className="star-icon" aria-hidden="true" />
                  <Star className="star-icon" aria-hidden="true" />
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* ---- Partner Logos ---- */}
        <div className="partners-section">
          <p className="partners-label">Trusted by leading companies</p>
          <div className="partners-row">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`partner-logo ${visible ? "partner-fade-in" : ""}`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <Zap className="partner-icon" aria-hidden="true" />
                <span className="partner-name">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}