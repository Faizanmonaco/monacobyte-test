"use client";

// We're replacing Next.js specific components with standard HTML elements to fix the compilation error.
// The `Link` component is replaced with an `a` tag.
// The `Image` component is replaced with a standard `img` tag.

export default function HeroSection() {
  const logos = [
    { src: "/logos/client1.avif", alt: "Client 1 logo" },
    { src: "/logos/client2.avif", alt: "Client 2 logo" },
    { src: "/logos/client3.png", alt: "Client 3 logo" },
    { src: "/logos/client4.avif", alt: "Client 4 logo" },
    { src: "/logos/client5.avif", alt: "Client 5 logo" },
    { src: "/logos/client6.avif", alt: "Client 6 logo" },
  ];

  return (
    <section
      className="relative bg-black text-white overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-black opacity-90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Small top text with pill shape and glow effect */}
        <div className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-400 font-medium mb-3 sm:mb-4 px-4 py-2 rounded-full border border-gray-700 bg-black animate-fade-in-down">
          {/* Green glowing dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span>Start using AI before others</span>
        </div>

        {/* Main Heading */}
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold max-w-3xl mx-auto leading-tight sm:leading-tight lg:leading-tight tracking-tight sm:tracking-tighter animate-fade-in-up"
        >
          World’s Best AI Employees that{" "}
          <span className="text-green-400">Cut Costs</span>
        </h1>

        {/* Subheading */}
        <p className="mt-4 max-w-2xl mx-auto text-gray-400 text-base sm:text-lg animate-fade-in-up delay-200">
          Build, grow, and scale your business with a team of AI employees.
        </p>

        {/* CTA Button and sub-text */}
        <div className="mt-8 flex flex-col items-center animate-fade-in-up delay-400">
          <a
            href="#"
            className="inline-flex items-center justify-center bg-green-400 text-black font-extrabold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:bg-green-500 transform hover:scale-105
                             border border-green-400
                             focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-75"
            aria-label="Book a free strategy call"
          >
            Book A Free Strategy Call
          </a>
          <p className="mt-2 text-sm text-gray-400">
            Find your best AI use cases
          </p>
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-sm mx-auto animate-fade-in-up delay-600">
          <span className="text-yellow-400 mr-1">&#9888;</span>Disclaimer: This is not a sales call, but a <span className="font-bold">Free</span> consultation
          on how you can start using AI in your business.
        </p>

        {/* "Our employees are already helping:" text */}
        <p className="mt-12 text-gray-400 text-base font-medium animate-fade-in-up delay-700">
          Our employees are already helping:
        </p>

        {/* Smooth Infinite Logo Marquee */}
        <div className="mt-8 overflow-hidden py-4 relative">
          {/* Marquee Track */}
          <div className="flex w-full animate-marquee">
            {/* First set of logos */}
            <div className="flex flex-shrink-0">
              {logos.map((logo, i) => (
                <div key={`first-${i}`} className="flex-shrink-0 px-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {/* Second set of logos */}
            <div className="flex flex-shrink-0">
              {logos.map((logo, i) => (
                <div key={`second-${i}`} className="flex-shrink-0 px-8 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    width={160}
                    height={64}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Left fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black from-40% to-transparent z-10" />

          {/* Right fade */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black from-40% to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}