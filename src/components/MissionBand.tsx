"use client";

import Image from "next/image";

export default function OurMission() {
  return (
    <section
      id="our-mission"
      className="bg-black text-white py-20 px-6 text-center"
    >
      {/* Label */}
      <div className="inline-block px-4 py-1 mb-6 rounded-full bg-neutral-900 text-sm font-medium border border-neutral-800">
        Our Mission
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
        From{" "}
        <span className="text-lime-400">Outdated</span> To{" "}
        <span className="text-lime-400">Automated</span>
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
        We replace repetitive tasks with AI Employees, so your team can focus on
        what truly matters.
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <a
          href="#"
          className="inline-flex flex-col items-center justify-center px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg sm:text-xl shadow-lg hover:bg-lime-300 transition-colors duration-300"
        >
          Book A Free Strategy Call
          <span className="text-sm font-medium">Find your best AI use cases</span>
        </a>
      </div>

      {/* Disclaimer */}
        <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-sm mx-auto animate-fade-in-up delay-600">
          <span className="text-yellow-400 mr-1">&#9888;</span>Disclaimer: This is not a sales call, but a <span className="font-bold">Free</span> consultation
          on how you can start using AI in your business.
        </p>
    </section>
  );
}