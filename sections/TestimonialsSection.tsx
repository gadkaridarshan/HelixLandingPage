"use client";

import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  avatar,
  rating,
  quote,
}: TestimonialCardProps) {
  return (
    <div className="group relative flex flex-col gap-4 p-6 rounded-2xl border border-gray-800/60 bg-gray-900/40 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-gray-800/40 transition-all duration-300">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-cyan-400"
        >
          <path
            d="M11 7.5C11 5.567 9.433 4 7.5 4C5.567 4 4 5.567 4 7.5C4 9.433 5.567 11 7.5 11C7.5 11 7.5 10.5 7.5 10C7.5 8.5 8.5 7.5 10 7.5H11V7.5ZM19 7.5C19 5.567 17.433 4 15.5 4C13.567 4 12 5.567 12 7.5C12 9.433 13.567 11 15.5 11C15.5 11 15.5 10.5 15.5 10C15.5 8.5 16.5 7.5 18 7.5H19V7.5Z"
            fill="currentColor"
          />
          <path
            d="M7.5 11C5.567 11 4 12.567 4 14.5V19C4 19.552 4.448 20 5 20H8C8.552 20 9 19.552 9 19V14.5C9 12.567 7.433 11 5.5 11H7.5ZM19 11C17.067 11 15.5 12.567 15.5 14.5V19C15.5 19.552 15.948 20 16.5 20H19.5C20.052 20 20.5 19.552 20.5 19V14.5C20.5 12.567 18.933 11 17 11H19Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-700"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-300 text-base leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto pt-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-gray-700/50 text-sm font-semibold text-cyan-300">
          {avatar}
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="text-xs text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}