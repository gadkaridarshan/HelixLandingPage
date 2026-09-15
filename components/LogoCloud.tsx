"use client";

import { useEffect, useRef, useState } from "react";

const logos = [
  { name: "CloudScale", initial: "CS" },
  { name: "DataForge", initial: "DF" },
  { name: "NeuralPath", initial: "NP" },
  { name: "ByteStream", initial: "BS" },
  { name: "QuantumLeap", initial: "QL" },
  { name: "VertexAI", initial: "VA" },
  { name: "Synapse", initial: "SY" },
  { name: "ArcSystem", initial: "AS" },
];

export default function LogoCloud() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`w-full transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-8 font-medium">
        Trusted by teams at
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 items-center justify-items-center">
        {logos.map((logo, i) => (
          <div
            key={logo.name}
            className={`flex items-center gap-2.5 text-gray-400 hover:text-gray-200 transition-all duration-300 cursor-default select-none ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-800/60 border border-gray-700/50 text-xs font-bold text-cyan-400">
              {logo.initial}
            </div>
            <span className="text-sm font-semibold tracking-wide whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}