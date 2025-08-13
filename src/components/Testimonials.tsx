"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Alice Johnson",
      role: "CEO, TechCorp",
      text: "SharpenAI transformed our workflow. Our team is more efficient than ever.",
      img: "/placeholders/profile1.jpg",
    },
    {
      name: "Mark Stevens",
      role: "Founder, BizSolutions",
      text: "The AI employees are incredible. They handle repetitive tasks flawlessly.",
      img: "/placeholders/profile2.jpg",
    },
    {
      name: "Sophie Lee",
      role: "COO, CreativeWorks",
      text: "Automation has never been this seamless. Truly a game-changer.",
      img: "/placeholders/profile3.jpg",
    },
  ];

  // Infinite scroll effect
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1; // pixels per frame
    let requestId: number;

    const animate = () => {
      if (!container) return;
      scrollAmount += speed;
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
      container.scrollLeft = scrollAmount;
      requestId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(requestId);
  }, []);

  // Duplicate testimonials for infinite scroll effect
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="bg-black 900 py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Testimonials</h2>
        <p className="mt-4 text-lg text-gray-300">What our clients say about us</p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden px-6 lg:px-0 cursor-grab"
      >
        {looped.map((t, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-80 bg-gray-800 rounded-2xl p-6 text-white shadow-lg"
          >
            <div className="flex items-center mb-4">
              <Image
                src={t.img}
                alt={t.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-300">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-200">{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}