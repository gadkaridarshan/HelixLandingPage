"use client";

import { ShieldCheck, Zap, Globe, Lock } from "lucide-react";
import LogoCloud from "../components/LogoCloud";

const trustIndicators = [
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified with end-to-end encryption for all agent communications and data pipelines.",
  },
  {
    icon: Zap,
    title: "99.99% Uptime",
    description:
      "Built on resilient infrastructure with automatic failover, ensuring your agents never miss a beat.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description:
      "Deploy across 12 regions worldwide with automatic geo-routing and low-latency execution.",
  },
  {
    icon: Lock,
    title: "Compliance Ready",
    description:
      "GDPR, HIPAA, and SOC 2 compliant out of the box. Stay ahead of regulatory requirements.",
  },
];

export default function TrustedBySection() {
  return (
    <section
      id="trusted-by"
      className="relative py-20 sm:py-24 border-t border-gray-800/50"
      aria-label="Trusted by"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo Cloud */}
        <div className="mb-16 sm:mb-20">
          <LogoCloud />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent mb-16 sm:mb-20" />

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trustIndicators.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col gap-3 p-5 rounded-xl border border-gray-800/60 bg-gray-900/30 hover:border-gray-700/50 hover:bg-gray-800/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <item.icon className="w-4.5 h-4.5" strokeWidth={2} />
                </div>
                <h3 className="text-sm font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}