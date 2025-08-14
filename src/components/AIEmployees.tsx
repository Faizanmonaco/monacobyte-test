"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Employee = {
  name: string;
  role: string;
  image: string;
};

const EMPLOYEES: Employee[] = [
  { name: "Henry", role: "Reminder Automation Manager", image: "/avatars/henry.png" },
  { name: "Jacky", role: "Inbound Call Manager", image: "/avatars/jacky.png" },
  { name: "Ringo", role: "AI Cold Caller", image: "/avatars/ringo.png" },
  { name: "Orion", role: "Booking Manager", image: "/avatars/orion.png" },
  { name: "Benji", role: "Personal Assistant", image: "/avatars/benji.png" },
  { name: "Adam", role: "Customer Support Manager", image: "/avatars/adam.png" },
];

const LOOPED_EMPLOYEES = [...EMPLOYEES, ...EMPLOYEES, ...EMPLOYEES];

export default function AIEmployees() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isTransitioning = useRef(false);
  const [activeIndex, setActiveIndex] = useState(EMPLOYEES.length);

  const CARD_WIDTH = 320;
  const GAP = 24;
  const STEP = CARD_WIDTH + GAP;

  const handleNav = (dir: "left" | "right") => {
    if (isTransitioning.current) return;
    setActiveIndex((prev) => prev + (dir === "left" ? -1 : 1));
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const scrollContainer = trackRef.current;
    const scrollLeft = activeIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2;

    scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
    isTransitioning.current = true;

    const transitionEnd = () => {
      isTransitioning.current = false;
      if (activeIndex < EMPLOYEES.length) {
        const newIndex = activeIndex + EMPLOYEES.length;
        setActiveIndex(newIndex);
        scrollContainer.scrollTo({
          left: newIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2,
          behavior: "instant" as ScrollBehavior,
        });
      } else if (activeIndex >= EMPLOYEES.length * 2) {
        const newIndex = activeIndex - EMPLOYEES.length;
        setActiveIndex(newIndex);
        scrollContainer.scrollTo({
          left: newIndex * STEP - (scrollContainer.clientWidth - CARD_WIDTH) / 2,
          behavior: "instant" as ScrollBehavior,
        });
      }
    };

    const timer = setTimeout(transitionEnd, 500);
    return () => clearTimeout(timer);
  }, [activeIndex, STEP]);

  return (
    <section id="ai-employees" className="bg-black text-white py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headings */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            World’s Best AI Employees
          </h2>
          <p className="mt-5 text-lg text-neutral-400">
            Automates work. Even while you sleep.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex items-center gap-6 overflow-x-hidden py-6 -mb-6 scroll-smooth"
          >
            {LOOPED_EMPLOYEES.map((emp, i) => {
              const isActive = i === activeIndex;
              return (
                <div
                  key={`${emp.name}-${i}`}
                  className={`flex-shrink-0 w-80 rounded-2xl p-8 text-center transition-all duration-500 ease-in-out
                    ${isActive ? "scale-105 opacity-100" : "scale-90 opacity-50"}`}
                  style={{
                    background: "linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)",
                  }}
                >
                  <div className="relative mx-auto mb-6 h-64 w-64">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-b from-black to-transparent blur-3xl"></div>
                    <Image
                      src={emp.image}
                      alt={emp.name}
                      fill
                      style={{ objectFit: "contain" }}
                      unoptimized
                    />
                  </div>
                  <div className="text-2xl font-bold">{emp.name}</div>
                  <div className="mt-1 text-md font-medium text-neutral-300">
                    {emp.role}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent z-10" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Arrows */}
          <button
            onClick={() => handleNav("left")}
            className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-75 transition-opacity"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={() => handleNav("right")}
            className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:opacity-75 transition-opacity"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
        </div>
      </div>
    </section>
  );
}