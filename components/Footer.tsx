"use client";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Active Agents", href: "#active-cards" },
    { label: "Workflows", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Changelog", href: "#changelog" },
  ],
  Resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "SDK", href: "#sdk" },
    { label: "Guides", href: "#guides" },
    { label: "Blog", href: "#blog" },
    { label: "Community", href: "#community" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
    { label: "Partners", href: "#partners" },
    { label: "Press Kit", href: "#press" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "#twitter" },
  { label: "GitHub", href: "#github" },
  { label: "LinkedIn", href: "#linkedin" },
  { label: "Discord", href: "#discord" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#060614",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 1.5rem 2rem",
      }}
    >
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* ---- Main Footer Grid ---- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(4, 1fr)",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: "span 1" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2.25rem",
                  height: "2.25rem",
                  background: "linear-gradient(135deg, #7c3aed, #3b82f6)",
                  borderRadius: "0.5rem",
                  padding: "0.375rem",
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                </svg>
              </div>
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Helix
              </span>
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Build, deploy, and manage intelligent AI agent pipelines with
              unmatched precision and scale.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="mailto:hello@helix.ai"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#a78bfa")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(255,255,255,0.5)")
                }
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                hello@helix.ai
              </a>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="10" r="3" />
                </svg>
                San Francisco, CA
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                </svg>
                +1 (555) 123-4567
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1rem",
                }}
              >
                {category}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                }}
              >
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      style={{
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.4)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#a78bfa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "rgba(255,255,255,0.4)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---- Divider ---- */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
            marginBottom: "1.5rem",
          }}
        />

        {/* ---- Bottom Bar ---- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              color: "rgba(255,255,255,0.3)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Helix AI, Inc. All rights reserved.
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", gap: "1rem" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "0.375rem",
                  color: "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s ease, background 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#a78bfa";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {social.label === "Twitter" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  </svg>
                )}
                {social.label === "GitHub" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  </svg>
                )}
                {social.label === "LinkedIn" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  </svg>
                )}
                {social.label === "Discord" && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}