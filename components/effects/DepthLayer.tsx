"use client";

import { useEffect, useRef, useState } from "react";

interface DepthLayerProps {
  className?: string;
}

interface DepthBlob {
  top: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
  speed: number;
}

export default function DepthLayer({ className = "" }: DepthLayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const layers: DepthBlob[] = [
    { top: "5%", left: "10%", size: "400px", color: "rgba(34, 211, 238, 0.04)", speed: 0.02 },
    { top: "40%", right: "5%", size: "500px", color: "rgba(139, 92, 246, 0.035)", speed: 0.04 },
    { top: "70%", left: "20%", size: "350px", color: "rgba(6, 182, 212, 0.03)", speed: 0.015 },
  ];

  return (
    <div ref={containerRef} className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {layers.map((layer, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: layer.top,
            left: layer.left,
            right: layer.right,
            width: layer.size,
            height: layer.size,
            background: `radial-gradient(circle, ${layer.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
            transform: `translateY(${scrollY * layer.speed}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      ))}
    </div>
  );
}