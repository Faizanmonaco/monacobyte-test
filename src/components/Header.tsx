import React from 'react';

// Header component for the website
const Header: React.FC = () => {
    return (
        // Container for the entire header, now fixed at the top with full width
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-4 px-5">
            {/* Inner container for the pill-shaped header with frosted glass effect */}
            <div className="flex items-center justify-between w-full max-w-5xl px-5 py-3 md:px-8 bg-white bg-opacity-5 rounded-full border border-white border-opacity-10 backdrop-blur-lg shadow-lg
                           flex-wrap gap-4 md:gap-0">
                {/* Logo section */}
                <a href="#" className="flex items-center text-white text-2xl font-bold no-underline">
                    <span>Sharpen</span>
                    <span className="text-blue-400 opacity-80 text-2xl font-normal ml-0.5">/</span>
                </a>

                {/* Navigation links */}
                <nav className="flex items-center space-x-6 md:space-x-10 flex-wrap justify-center">
                    <a href="#" className="text-white text-opacity-80 text-base font-medium no-underline transition-colors duration-300 hover:text-white">
                        AI Employees
                    </a>
                    <a href="#" className="text-white text-opacity-80 text-base font-medium no-underline transition-colors duration-300 hover:text-white">
                        Custom Solutions
                    </a>
                    <a href="#" className="text-white text-opacity-80 text-base font-medium no-underline transition-colors duration-300 hover:text-white">
                        Our Works
                    </a>
                </nav>

                {/* Let&apos;s Chat button */}
                <a href="#" className="px-6 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full text-white text-base font-medium no-underline cursor-pointer
                                       transition-colors duration-300 hover:bg-opacity-20 hover:border-opacity-40">
                    Let&apos;s Chat
                </a>
            </div>
        </header>
    );
};

export default Header; // Exporting Header directly