"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="relative bg-gradient-to-r from-[#1FB6FF] via-white to-[#1FB6FF] py-12 sm:py-16 text-white overflow-hidden">
      {/* Glow Accents */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-12 -left-12 w-40 h-40 sm:w-64 sm:h-64 bg-[#1FB6FF]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 -right-12 w-44 h-44 sm:w-72 sm:h-72 bg-[#1FB6FF]/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 tracking-tight text-[#1FB6FF]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Stay in the Loop
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Get early access to new drops and exclusive offers delivered to your inbox.
        </motion.p>

        {/* Form */}
        <motion.form
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 sm:px-5 sm:py-3 rounded-xl w-full sm:w-auto flex-1 text-gray-900 focus:outline-none shadow-md focus:ring-2 focus:ring-[#1FB6FF]/70"
          />
          <button
            type="submit"
            className="px-5 py-2 sm:px-6 sm:py-3 rounded-xl bg-[#1FB6FF] text-white font-semibold hover:bg-[#0ea5e9] transition shadow-md"
          >
            Subscribe
          </button>
        </motion.form>

        {/* Small print */}
        <motion.p
          className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          No spam. Unsubscribe anytime.
        </motion.p>
      </div>
    </section>
  );
}
