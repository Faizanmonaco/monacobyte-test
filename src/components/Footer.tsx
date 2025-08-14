"use client";

import { FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Brand/Logo Section */}
        <div className="mb-8">
          <a href="#" aria-label="MonacoByte Home" className="text-3xl font-bold hover:text-gray-300 transition-colors duration-300">
            MONACOBYTE
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://youtube.com" aria-label="MonacoByte on YouTube" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaYoutube size={24} />
          </a>
          <a href="https://linkedin.com" aria-label="MonacoByte on LinkedIn" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://instagram.com" aria-label="MonacoByte on Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright and Legal Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
            <span>&copy; {new Date().getFullYear()} MonacoByte. All rights reserved.</span>
            <div className="flex space-x-4">
              <a href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}