import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  Youtube,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import ContactForm from "./ContactForm";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Workflows", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#changelog" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Blog", href: "#blog" },
    { label: "Guides", href: "#guides" },
    { label: "Community", href: "#community" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact", href: "#contact" },
    { label: "Partners", href: "#partners" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#twitter", label: "Twitter" },
  { icon: Github, href: "#github", label: "GitHub" },
  { icon: Linkedin, href: "#linkedin", label: "LinkedIn" },
  { icon: Youtube, href: "#youtube", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* ---- Contact Section ---- */}
      <section className="footer-contact-section">
        <div className="container">
          <div className="footer-contact-grid">
            <div className="footer-contact-info">
              <div className="footer-logo">
                <Sparkles className="footer-logo-icon" aria-hidden="true" />
                <span className="footer-logo-text">Helix</span>
              </div>
              <p className="footer-tagline">
                Orchestrate AI agents with unmatched precision. Build, deploy,
                and scale intelligent pipelines with confidence.
              </p>

              <div className="footer-contact-details">
                <a href="mailto:hello@helix.ai" className="footer-contact-item">
                  <Mail className="footer-contact-icon" aria-hidden="true" />
                  <span>hello@helix.ai</span>
                </a>
                <a href="tel:+15551234567" className="footer-contact-item">
                  <Phone className="footer-contact-icon" aria-hidden="true" />
                  <span>+1 (555) 123-4567</span>
                </a>
                <div className="footer-contact-item">
                  <MapPin className="footer-contact-icon" aria-hidden="true" />
                  <span>123 Innovation Drive, San Francisco, CA 94102</span>
                </div>
              </div>

              <div className="footer-social">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="footer-social-link"
                    aria-label={social.label}
                  >
                    <social.icon className="footer-social-icon" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="footer-contact-form-wrapper">
              <h3 className="footer-section-title">Get in Touch</h3>
              <p className="footer-section-subtitle">
                Have a question or want to learn more? Send us a message and we&apos;ll respond quickly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Footer Links ---- */}
      <div className="footer-links-section">
        <div className="container">
          <div className="footer-links-grid">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-link-group">
                <h4 className="footer-link-group-title">{category}</h4>
                <ul className="footer-link-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-link">
                        {link.label}
                        <ArrowRight className="footer-link-arrow" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---- Footer Bottom ---- */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="#privacy" className="footer-bottom-link">
                Privacy
              </Link>
              <Link href="#terms" className="footer-bottom-link">
                Terms
              </Link>
              <Link href="#cookies" className="footer-bottom-link">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}