// components/Hero.jsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    async function loadAnimation() {
      try {
        const res = await fetch("/lottie/Gadgets.json");
        const data = await res.json();
        setAnimationData(data);
      } catch (err) {
        console.error("Failed to load Lottie animation", err);
      }
    }
    loadAnimation();
  }, []);

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16 lg:py-24">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Next-Gen Tech.{" "}
              <span className="text-blue-500">Smart Prices.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 max-w-lg"
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              Shop the latest gadgets, explore new releases, and get deals that
              actually make sense. VoltMart puts the power in your hands.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <Link
                href="/shop"
                className="inline-block px-6 py-3 rounded-2xl bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
              >
                Shop Now
              </Link>
              <Link
                href="/deals"
                className="inline-block px-6 py-3 rounded-2xl border border-gray-300 text-gray-700 font-medium hover:border-blue-500 hover:text-blue-500 transition"
              >
                View Deals
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content: Lottie Animation */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="aspect-[4/3] w-full max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-xl bg-white flex items-center justify-center">
              {animationData ? (
                <Lottie animationData={animationData} loop autoplay />
              ) : (
                <div className="text-gray-500">Loading animation...</div>
              )}
            </div>

            {/* Accent Glow */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-green-400/20 blur-3xl rounded-full" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-400/20 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
