"use client";

import { useRef, useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ryan W.",
      role: "Owner | Pulse Fitness",
      text: "Before Sharpen AI, I was burning hours chasing no-shows and unqualified leads. Now, I only talk to people who are actually ready to commit. My close rate jumped from 30% to 57%, and I didn't have to do anything extra. I finally get to focus on what I love, coaching and helping my clients get real results.",
      img: "testimonials/person2.avif",
      tag: "Online Coach",
      users: "1,500 Users",
    },
    {
      name: "Alex O.",
      role: "CEO | EasyTax",
      text: "Sharpen AI's phone agent now handles our customer service line and qualifies new leads that come in through our forms. It's made a big difference for our sales team to let them focus on serious buyers instead of wasting time on unqualified leads.",
      img: "testimonials/person1.avif",
      tag: "SaaS",
      users: "50,000 Users",
    },
    {
      name: "Julia H.",
      role: "General Manager | Aurasia Spas",
      text: "I used to feel stressed about all the missed calls. Now, every guest gets booked in automatically through the AI receptionist, which is synced with our booking software. My staff can finally focus on providing great service to our in-person clients without worrying about answering the phone.",
      img: "testimonials/person3.avif",
      tag: "Spa Salon",
      users: "600 Monthly Guests",
    },
    {
      name: "James L.",
      role: "CEO | Stimubu",
      text: "Sharpen AI has really made a difference for us. Our WhatsApp agent is a real coach to our runners, answering questions and keeping them engaged. We barely touch admin work now, and signups went up by 17% in just a month. It's been a great addition to the team.",
      img: "testimonials/person4.avif",
      tag: "Community",
      users: "3,500 runners",
    },
  ];

  // Duplicate testimonials for the seamless infinite scroll effect
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="bg-black/20 backdrop-blur-sm py-20">
      {/* CSS for the marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-testimonials {
          /* Updated duration for a smoother loop */
          animation: marquee 60s linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Testimonials</h2>
        <p className="mt-4 text-lg text-gray-300">
          What our clients say about us
        </p>
      </div>

      {/* Main container for the testimonials. The outer div handles the overflow and padding. */}
      <div className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Fading gradient overlay on the left */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        {/* Fading gradient overlay on the right */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        
        {/* The scroll container with the CSS marquee animation class */}
        {/* Added w-max to ensure the width is exactly the content width for a seamless loop */}
        <div className="flex gap-6 animate-marquee-testimonials w-max">
          {looped.map((t, i) => (
            <div
              key={`${t.name}-${i}`} // Updated key for better stability
              className="flex-shrink-0 w-72 sm:w-80 bg-[#1E2024] rounded-2xl p-6 text-white shadow-lg flex flex-col h-full"
            >
              {/* Pill-shaped tag at the top of the card */}
              <div className="mb-4 inline-flex items-center space-x-2 rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-xs text-gray-400">
                <span className="font-medium text-white">{t.tag}</span>
                <span className="h-1 w-1 rounded-full bg-gray-500"></span>
                <span className="text-gray-400">{t.users}</span>
              </div>
              
              {/* This new div with 'flex-grow' pushes the user info to the bottom */}
              <div className="flex-grow">
                <p className="text-gray-200 text-sm sm:text-base mb-4">{t.text}</p>
              </div>
              
              <div className="flex items-center mt-auto">
                <img
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}