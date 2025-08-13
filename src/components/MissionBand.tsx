"use client";

import Link from "next/link"; // Assuming Next.js Link component is still preferred

export default function MissionSection() {
    return (
        <section className="bg-black py-20 px-4 flex flex-col items-center justify-center">
            <div className="max-w-4xl mx-auto text-center"> {/* Increased max-width for better fit */}
                {/* Section Label - Pill-shaped background */}
                <div className="inline-block bg-zinc-800 text-zinc-400 text-base font-medium px-6 py-2 rounded-full uppercase tracking-wider mb-8">
                    Our Mission
                </div>

                {/* Main Heading */}
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"> {/* Increased font size and adjusted line height */}
                    From <span className="text-yellow-400">Outdated</span> To <span className="text-yellow-400">Automated</span>
                </h2>

                {/* Description */}
                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"> {/* Adjusted text color, font size, and added max-width */}
                    We replace repetitive tasks with AI Employees, so your team can focus
                    on what truly matters.
                </p>

                {/* CTA Button */}
                <Link
                    href="#"
                    className="relative px-10 py-5 bg-gradient-to-br from-lime-500 to-emerald-600 rounded-full text-zinc-900 text-xl font-bold no-underline
                               overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 inline-block" // Added inline-block
                >
                    {/* Glowing border effect on hover - Reused from HeroSection */}
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    bg-gradient-to-r from-yellow-400 via-lime-400 to-emerald-400 blur-md -z-10"></div>
                    <span className="relative z-10">Book A Free Strategy Call</span>
                    <span className="absolute bottom-2 left-0 w-full text-center text-xs font-normal text-zinc-800 z-10">
                        Find your best AI use cases
                    </span>
                </Link>

                {/* Disclaimer */}
                <p className="mt-12 text-sm text-zinc-500 max-w-xl mx-auto"> {/* Adjusted text color and added max-width */}
                    <span className="text-yellow-500 mr-1">&#9888;</span>This is not a sales call, but a{' '}
                    <span className="font-bold">Free consultation</span> on
                    how you could start using AI in your business.
                </p>
            </div>
        </section>
    );
}