"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const rotatingTexts = ["Save Time", "Cut Costs", "Grow Sales"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-32 px-4 bg-black">
      {/* Top pill */}
      <div className="bg-emerald-600 bg-opacity-20 text-emerald-400 text-sm font-medium px-4 py-2 rounded-full mb-8 inline-flex items-center space-x-2">
        <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        <span>Start using AI before others</span>
      </div>

      {/* Main Heading with rotating text */}
      <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
        Worlds Best AI Employees that{" "}
        <span className="text-yellow-400 relative inline-block overflow-hidden h-12 md:h-20">
          <span
            key={currentTextIndex}
            className="absolute inset-0 animate-fade-in-out"
          >
            {rotatingTexts[currentTextIndex]}
          </span>
        </span>
      </h1>

      {/* Sub-heading */}
      <p className="text-zinc-400 text-lg md:text-xl mb-10 max-w-2xl">
        Build, grow, and scale your business with a team of AI employees.
      </p>

      {/* CTA Button */}
      <a
        href="#"
        className="relative px-10 py-5 bg-gradient-to-br from-lime-500 to-emerald-600 rounded-full text-zinc-900 text-xl font-bold overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-yellow-400 via-lime-400 to-emerald-400 blur-md -z-10"></div>
        <span className="relative z-10">Book A Free Strategy Call</span>
        <span className="absolute bottom-2 left-0 w-full text-center text-xs font-normal text-zinc-800 z-10">
          Find your best AI use cases
        </span>
      </a>

      {/* Disclaimer */}
      <p className="text-zinc-500 text-sm mt-12 max-w-xl">
        <span className="text-yellow-500 mr-1">&#9888;</span>
        Disclaimer: this is not a sales call, but a <span className="font-bold">Free</span> consultation on how you could start using AI in your business
      </p>
    </section>
  );
}