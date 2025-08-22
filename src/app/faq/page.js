"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "Once your gadget ships, you&apos;ll get a tracking number via email so you can monitor its journey in real time."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, PayPal, and mobile payment options for a smooth checkout experience."
    },
    {
      question: "Do your products come with warranties?",
      answer: "Yes, all electronics come with a standard manufacturer warranty. Warranty details are included on each product page."
    },
    {
      question: "Can I return or exchange a product?",
      answer: "Yes, returns or exchanges are accepted within 30 days of delivery. Items must be in original condition and packaging."
    },
    {
      question: "Do you offer technical support for devices?",
      answer: "Absolutely. Our support team is available via the Contact page, email, or live chat to help with setup, troubleshooting, or product questions."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-700 mb-10">
          Answers to common questions about ordering, shipping, products, and support at VoltMart.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              layout
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <span className="text-gray-800 font-semibold text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl text-blue-600"
                >
                  +
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6 text-gray-700"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
