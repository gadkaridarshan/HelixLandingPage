import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner} aria-label="Call to action">
      <div className={styles.ctaBackground} aria-hidden="true">
        <div className={styles.gradientOrb1} />
        <div className={styles.gradientOrb2} />
        <div className={styles.gridOverlay} />
      </div>

      <div className={styles.ctaContainer}>
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>
            <Sparkles className={styles.ctaBadgeIcon} aria-hidden="true" />
            <span>Get Started</span>
          </div>

          <h2 className={styles.ctaTitle}>
            Ready to orchestrate your{" "}
            <span className={styles.ctaTitleGradient}>AI agents?</span>
          </h2>

          <p className={styles.ctaSubtitle}>
            Join thousands of developers building smarter with Helix. Start
            free, scale as you grow.
          </p>

          <div className={styles.ctaActions}>
            <a href="#signup" className={styles.ctaButtonPrimary} aria-label="Get Started">
              Get Started{" "}
              <ArrowRight className={styles.ctaButtonIcon} aria-hidden="true" />
            </a>
            <a href="#demo" className={styles.ctaButtonSecondary} aria-label="View Demo">
              View Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}