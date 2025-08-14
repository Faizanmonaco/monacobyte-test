"use client";

import { useState } from "react";

// The FAQ data remains the same
const faqs = [
    {
    question: "1. What Business Problems Can Sharpen AI Solve On Day One?",
    answer:
      "On day one, Sharpen AI can immediately handle tasks like 24/7 customer support, lead qualification, appointment scheduling, and answering common queries, freeing up your team to focus on more complex issues.",
  },
  {
    question: "2. How Fast Can Sharpen AI Deploy Voice Or WhatsApp Agent?",
    answer:
      "Deployment is swift. A standard agent can be up and running in a matter of days. More complex integrations may take a few weeks, but we prioritize a fast and efficient setup process to deliver value quickly.",
  },
  {
    question: "3. Which Integrations Do Sharpen AI Agents Support?",
    answer:
      "Our AI agents support a wide range of integrations with popular CRMs, helpdesks, calendar apps, and other business software. We also offer custom API integrations to fit your specific workflow.",
  },
  {
    question: "4. What Is Sharpen AI's Pricing Model?",
    answer:
      "Our pricing is flexible and designed to scale with your business. We offer various plans based on usage and features, ensuring you only pay for what you need. Contact us for a custom quote.",
  },
  {
    question: "5. Will This Really Be Worth It For My Business?",
    answer:
      "Absolutely. Businesses typically see a significant return on investment through increased efficiency, reduced operational costs, improved customer satisfaction, and the ability to scale support without proportional hiring.",
  },
  {
    question: "6. How Does Sharpen AI Handle Data Protection And GDPR Compliance?",
    answer:
      "We take data security very seriously. All data is encrypted, and our platform is fully compliant with GDPR and other major data protection regulations to ensure your and your customers' data is always safe.",
  },
  {
    question: "7. Can The AI Match My Brand Voice And Handle Multiple Languages?",
    answer:
      "Yes. We customize the AI's tone and personality to match your unique brand voice. Our agents are also multilingual, allowing you to seamlessly communicate with a global audience.",
  },
  {
    question: "8. What Support And Optimisation Do You Provide After Launch?",
    answer:
      "Our partnership doesn't end at launch. We provide ongoing support, performance monitoring, and continuous optimisation to ensure your AI agent is always performing at its best and adapting to your business needs.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <div className="flex justify-center mb-4">
          <span className="bg-[#1E2024] text-white text-sm font-semibold px-4 py-1 rounded-full">
            Need to Know
          </span>
        </div>
        <h2 className="text-5xl font-bold text-white">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-3xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            // Add 'group' for hover states and apply conditional background colors
            className={`group rounded-xl transition-colors duration-300 ${
              openIndex === index ? 'bg-[#1E2024]' : 'bg-black hover:bg-[#1E2024]'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full py-5 px-6 flex justify-between items-center text-left focus:outline-none"
            >
              {/* Question text with conditional color based on open and hover states */}
              <span
                className={`flex-1 pr-4 font-semibold transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-gray-300 group-hover:text-white'
                }`}
              >
                {faq.question}
              </span>

              {/* Chevron Icon with matching color logic */}
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transition-colors duration-300 ${
                    openIndex === index ? 'text-white' : 'text-gray-400 group-hover:text-white'
                  }`}
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            
            {/* The answer panel with its own transition */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="pt-0 pb-5 px-6 text-gray-300">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}