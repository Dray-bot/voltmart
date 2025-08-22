"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function PrivacyPage() {
  const sections = [
    {
      title: "Introduction",
      content:
        "At VoltMart, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or make purchases."
    },
    {
      title: "Information We Collect",
      content:
        "We may collect the following information:\n\n- Personal information you provide during account registration or checkout (name, email, phone number, address).\n- Payment information (processed securely through trusted payment providers).\n- Browsing behavior and usage data to improve our services.\n- Cookies and tracking technologies as described below."
    },
    {
      title: "How We Use Your Information",
      content:
        "Your data is used to:\n\n- Process and fulfill your orders.\n- Communicate updates, promotions, and support.\n- Improve our website and services.\n- Prevent fraud and unauthorized transactions."
    },
    {
      title: "Sharing Your Information",
      content:
        "We do not sell or rent your personal information. We may share information with trusted third-party service providers who help us operate the website, process payments, and deliver products. All partners are bound to protect your data."
    },
    {
      title: "Cookies & Tracking",
      content:
        "We use cookies to enhance your browsing experience, remember your preferences, and analyze website traffic. You can manage cookie settings in your browser."
    },
    {
      title: "Your Rights",
      content:
        "You have the right to:\n\n- Access the information we hold about you.\n- Request corrections or updates.\n- Request deletion of your personal data.\n- Opt out of marketing communications."
    },
    {
      title: "Contact Us",
      content:
        "If you have any questions or concerns about this Privacy Policy, please contact us via the Contact page or email support@voltmart.com."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const toggleIndex = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Privacy Policy</h1>
        <p className="text-gray-700 mb-10">
          Your privacy is important to us. Read below to understand how VoltMart collects, uses, and protects your information.
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
