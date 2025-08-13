"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold">MONACOBYTE</div>

        {/* Links / CTA (if needed, can add buttons here later) */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
          <span>All Rights Reserved © 2025 MonacoByte.</span>
          <a href="mailto:team@monacobyte.com" className="hover:text-white transition-colors">
            team@monacobyte.com
          </a>
        </div>
      </div>
    </footer>
  );
}