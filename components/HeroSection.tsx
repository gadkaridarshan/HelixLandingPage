import { useEffect, useState } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.heroBackground} aria-hidden="true">
        <div className={styles.orbOr1} />
        <div className={styles.orbOr2} />
        <div className={styles.orbOr3} />
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div
            className={`${styles.heroBadge} ${mounted ? styles.fadeInUp : ""}`}
          >
            <Sparkles className={styles.heroBadgeIcon} aria-hidden="true" />
            <span>Introducing Helix AI Orchestrator</span>
          </div>

          <h1
            className={`${styles.heroTitle} ${mounted ? styles.fadeInUp : ""}`}
          >
            Orchestrate AI agents with{" "}
            <span className={styles.heroTitleGradient}>unmatched precision</span>
          </h1>

          <p
            className={`${styles.heroSubtitle} ${mounted ? styles.fadeInUp : ""}`}
          >
            Build, deploy, and manage intelligent AI agent pipelines. Helix
            gives you the tools to automate complex workflows, analyze
            real-time data, and scale your operations effortlessly.
          </p>

          <div
            className={`${styles.heroActions} ${mounted ? styles.fadeInUp : ""}`}
          >
            <a href="#signup" className={styles.btnPrimary} aria-label="Get Started">
              Get Started{" "}
              <ArrowRight className={styles.btnIcon} aria-hidden="true" />
            </a>
            <a href="#demo" className={styles.btnSecondary} aria-label="Watch Demo">
              <Play className={styles.btnIcon} aria-hidden="true" />
              Watch Demo
            </a>
          </div>

          <div
            className={`${styles.heroStats} ${mounted ? styles.fadeInUp : ""}`}
          >
            <div className={styles.stat}>
              <span className={styles.statValue}>10K+</span>
              <span className={styles.statLabel}>Active Agents</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>99.9%</span>
              <span className={styles.statLabel}>Uptime</span>
            </div>
            <div className={styles.statDivider} aria-hidden="true" />
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Enterprise Clients</span>
            </div>
          </div>
        </div>

        <div
          className={`${styles.heroVisual} ${mounted ? styles.fadeInUp : ""}`}
          aria-hidden="true"
        >
          <div className={styles.visualCard}>
            <div className={styles.visualHeader}>
              <div className={styles.visualDot} />
              <div className={styles.visualDot} />
              <div className={styles.visualDot} />
            </div>
            <div className={styles.visualBody}>
              <div className={styles.avatarRow}>
                <div className={styles.avatar}>
                  <Sparkles className={styles.avatarIcon} />
                </div>
                <div className={styles.avatar}>
                  <Play className={styles.avatarIcon} />
                </div>
                <div className={styles.avatar}>
                  <ArrowRight className={styles.avatarIcon} />
                </div>
              </div>
              <div className={styles.barChart}>
                <div className={styles.bar} style={{ height: "40%" }} />
                <div className={styles.bar} style={{ height: "70%" }} />
                <div className={styles.bar} style={{ height: "55%" }} />
                <div className={styles.bar} style={{ height: "90%" }} />
                <div className={styles.bar} style={{ height: "65%" }} />
                <div className={styles.bar} style={{ height: "80%" }} />
              </div>
              <div className={styles.statusRow}>
                <span className={styles.statusBadge}>Active</span>
                <span className={styles.statusText}>Pipeline running</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}