"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is an AI Employee?",
    answer:
      "An AI Employee is a digital assistant designed to handle repetitive or time-consuming tasks for your business, freeing up human employees for high-value work.",
  },
  {
    question: "How quickly can I implement AI Employees?",
    answer:
      "Implementation is fast — depending on your workflow, some AI Employees can be operational in a few hours to a couple of days.",
  },
  {
    question: "Do AI Employees replace my team?",
    answer:
      "No, they complement your existing team. AI Employees handle repetitive tasks while your team focuses on strategy and growth.",
  },
  {
    question: "Is my data safe with AI Employees?",
    answer:
      "Yes, we prioritize security and privacy. All data handled by AI Employees is encrypted and compliant with industry standards.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black py-20">
      <div className="max-w-5xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">FAQs</h2>
        <p className="text-gray-400 text-lg">
          Frequently Asked Questions about our AI Employees
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl hover:bg-gray-800 transition-colors"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full text-left py-5 px-6 flex justify-between items-center font-semibold text-white focus:outline-none"
            >
              {faq.question}
              <span className="text-gray-400">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="pb-5 px-6 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}