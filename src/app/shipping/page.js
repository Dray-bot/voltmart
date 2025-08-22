"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ShippingPage() {
  const sections = [
    {
      title: "Shipping Options",
      content: "VoltMart offers fast shipping across Nigeria. Most orders arrive within 3-7 business days depending on your location. We provide tracking numbers for every shipment so you can follow your order in real time."
    },
    {
      title: "Express Delivery",
      content: "Need your gadgets faster? Choose Express Shipping at checkout. Delivery takes 1-3 business days for major cities. Express shipping fees are applied based on weight and distance."
    },
    {
      title: "Returns & Refunds",
      content: "If you’re not satisfied with your purchase, you can return it within 30 days for a full refund, provided the item is in original condition and packaging. Contact support to receive a return label and instructions."
    },
    {
      title: "Return Process",
      content: "1. Contact our support team via the Contact page or email.\n2. Receive a prepaid return label.\n3. Ship the item back.\n4. Refund processed within 5-7 business days after we receive the item."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Shipping & Returns</h1>
        <p className="text-gray-700 mb-10">
          Everything you need to know about shipping options, delivery times, and returning products at VoltMart.
        </p>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden"
              layout
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none"
              >
                <span className="text-gray-800 font-semibold text-lg">{section.title}</span>
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
                    className="px-6 pb-6 text-gray-700 whitespace-pre-line"
                  >
                    {section.content}
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
