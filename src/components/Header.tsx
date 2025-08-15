"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-4 px-5">
      <div className="flex items-center justify-between w-full max-w-5xl px-5 py-3 md:px-8 bg-white bg-opacity-5 rounded-full border border-white border-opacity-10 backdrop-blur-lg shadow-lg">
        
        {/* Logo */}
        <a href="#" className="flex items-center text-white text-2xl font-bold no-underline">
          <span>MonacoByte</span>
          <span className="text-blue-400 opacity-80 text-2xl font-normal ml-0.5">/</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10">
          <a href="#" className="text-white text-opacity-80 text-base font-medium hover:text-white transition-colors">AI Employees</a>
          <a href="#" className="text-white text-opacity-80 text-base font-medium hover:text-white transition-colors">Custom Solutions</a>
          <a href="#" className="text-white text-opacity-80 text-base font-medium hover:text-white transition-colors">Our Works</a>
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#" className="px-6 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full text-white text-base font-medium hover:bg-opacity-20 hover:border-opacity-40 transition-colors">
            Let&apos;s Chat
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full mt-3 w-full max-w-5xl px-5 md:hidden">
          <div
            className="flex flex-col items-center p-6 space-y-4 bg-white bg-opacity-5 border border-white border-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg animate-scaleFade"
          >
            <a href="#" className="block text-white text-base font-medium hover:text-white transition-colors">AI Employees</a>
            <a href="#" className="block text-white text-base font-medium hover:text-white transition-colors">Custom Solutions</a>
            <a href="#" className="block text-white text-base font-medium hover:text-white transition-colors">Our Works</a>
            <a href="#" className="block w-full text-center px-6 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full text-white text-base font-medium hover:bg-opacity-20 hover:border-opacity-40 transition-colors">
              Let&apos;s Chat
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;