"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image"; // Using next/image for optimization
import { ChevronLeft, ChevronRight } from "lucide-react";

// The Employee type definition using TypeScript
type Employee = {
  name: string;
  role: string;
  image: string;
};

// Employee data now includes an 'image' property
const EMPLOYEES: Employee[] = [
  { name: "Henry", role: "Reminder Automation Manager", image: "/employees/henry.png" },
  { name: "Jacky", role: "Inbound Call Manager", image: "/employees/jacky.png" },
  { name: "Ringo", role: "AI Cold Caller", image: "/employees/ringo.png" },
  { name: "Orion", role: "Booking Manager", image: "/employees/orion.png" },
  { name: "Benji", role: "Personal Assistant", image: "/employees/benji.png" },
  { name: "Adam", role: "Customer Support Manager", image: "/employees/adam.png" },
];

// We triple the array to ensure seamless looping
const LOOPED_EMPLOYEES = [...EMPLOYEES, ...EMPLOYEES, ...EMPLOYEES];

export default function AIEmployees() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);

  // Start at the first item of the middle set of employees
  const [activeIndex, setActiveIndex] = useState(EMPLOYEES.length);

  const CARD_WIDTH = 320; // Corresponds to w-80
  const GAP = 24; // Corresponds to gap-6
  const STEP = CARD_WIDTH + GAP;

  // Function to handle navigation
  const handleNav = (dir: "left" | "right") => {
    if (isTransitioning.current) return;
    setActiveIndex((prev) => prev + (dir === "left" ? -1 : 1));
  };

  // useEffect to handle the actual scrolling and infinite loop logic
  useEffect(() => {
    if (!trackRef.current) return;

    const scrollContainer = trackRef.current;
    
    // Center the active card by calculating the required scroll position
    const scrollLeft = activeIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2;
    
    scrollContainer.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });

    // Set a flag to prevent rapid clicks during the transition
    isTransitioning.current = true;
    
    const transitionEnd = () => {
      isTransitioning.current = false;

      // If we've scrolled to a buffer clone, silently jump back to the real one
      if (activeIndex < EMPLOYEES.length) {
        const newActiveIndex = activeIndex + EMPLOYEES.length;
        const newScrollLeft = newActiveIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2;
        setActiveIndex(newActiveIndex);
        scrollContainer.scrollTo({ left: newScrollLeft, behavior: 'instant' });
      } else if (activeIndex >= EMPLOYEES.length * 2) {
        const newActiveIndex = activeIndex - EMPLOYEES.length;
        const newScrollLeft = newActiveIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2;
        setActiveIndex(newActiveIndex);
        scrollContainer.scrollTo({ left: newScrollLeft, behavior: 'instant' });
      }
    };
    
    // The timeout should match the CSS transition duration
    const timer = setTimeout(transitionEnd, 500); 

    return () => clearTimeout(timer);
  }, [activeIndex, STEP]);

  return (
    <section id="ai-employees" className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headings */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold">Worlds Best AI Employees</h2>
          <p className="mt-4 text-lg text-neutral-400">Automates work. Even while you sleep.</p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative">
          {/* Main track for scrolling, typed with useRef */}
          <div ref={trackRef} className="flex items-center gap-6 overflow-x-hidden py-4 -mb-4">
            {LOOPED_EMPLOYEES.map((emp, i) => (
              <div
                key={`${emp.name}-${i}`}
                className={`flex-shrink-0 w-80 rounded-2xl p-8 text-center transition-all duration-500 ease-in-out ${
                  i === activeIndex ? "scale-100 opacity-100" : "scale-[0.8] opacity-50"
                }`}
                style={{
                  background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)'
                }}
              >
                {/* 3D Avatar Image */}
                <div className="relative mx-auto mb-6 h-64 w-64">
                   <Image
                      src={emp.image}
                      alt={emp.name}
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized // Remove if you host images on a provider that supports optimization
                    />
                </div>

                <div className="text-2xl font-bold text-white">{emp.name}</div>
                <div className="mt-1 text-md font-medium text-neutral-300">{emp.role}</div>
              </div>
            ))}
          </div>

          {/* Left/Right Navigation Arrows */}
          <button
            onClick={() => handleNav("left")}
            aria-label="Scroll left"
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-75 transition-opacity"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={() => handleNav("right")}
            aria-label="Scroll right"
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-75 transition-opacity"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      </div>
    </section>
  );
}