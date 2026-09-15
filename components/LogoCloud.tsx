"use client";
// @helix:story USER-344000

import { useEffect, useRef, useState, type ReactElement } from "react";

interface LogoItem {
  name: string;
  href: string;
}

const logos: LogoItem[] = [
  { name: "CloudScale", href: "https://cloudscale.io" },
  { name: "DataForge", href: "https://dataforge.io" },
  { name: "NeuralPath", href: "https://neuralpath.ai" },
  { name: "QuantumLab", href: "https://quantumlab.dev" },
  { name: "StreamLine", href: "https://streamline.co" },
  { name: "PixelPerfect", href: "https://pixelperfect.design" },
  { name: "ByteBrew", href: "https://bytebrew.io" },
  { name: "CodeCraft", href: "https://codecraft.dev" },
];

export default function LogoCloud(): ReactElement {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}
      aria-label="Trusted by leading companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
          Trusted by industry leaders
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              <span className="text-lg font-semibold text-gray-300 hover:text-white transition-colors duration-200">
                {logo.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}