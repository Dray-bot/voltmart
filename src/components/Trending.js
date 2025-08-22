// components/Trending.jsx
"use client";

import { motion } from "framer-motion";

export default function Trending() {
  const trending = [
    {
      id: 1,
      name: "Wireless Earbuds",
      price: "$149",
      image: "https://cdn.thewirecutter.com/wp-content/media/2025/01/BEST-WIRELESS-BLUETOOTH-EARBUDS-2048px-5969-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp",
    },
    {
      id: 2,
      name: "4K Drone",
      price: "$499",
      image: "https://cdn.mos.cms.futurecdn.net/8vDseDCiBscAtPwCnQNjrf.jpg",
    },
    {
      id: 3,
      name: "Portable Speaker",
      price: "$99",
      image: "https://vipvendor.ng/wp-content/uploads/2024/09/IMG_3144-300x300.jpeg",
    },
    {
      id: 4,
      name: "VR Headset",
      price: "$399",
      image: "https://m.media-amazon.com/images/I/618PlE1DM8L.jpg",
    },
    {
      id: 5,
      name: "Smart Home Hub",
      price: "$249",
      image: "https://www.cnet.com/a/img/resize/f5a9d3d0bde4745d6f6d50559a6d6f5ab74aabaa/hub/2020/10/21/0608c58e-c3c8-4e25-85b9-9d155c0c56e2/amazon-echo-2020-2.jpg?auto=webp&fit=crop&height=675&width=1200",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Trending Now</h2>
          <a
            href="/shop"
            className="text-blue-500 font-medium hover:text-blue-600 transition"
          >
            View All
          </a>
        </motion.div>

        {/* Horizontal Scrollable Cards */}
        <motion.div
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {trending.map((item) => (
            <motion.div
              key={item.id}
              className="min-w-[220px] bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="relative w-full h-44 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-base font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-blue-500 font-bold">{item.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

