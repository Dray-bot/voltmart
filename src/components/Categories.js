// components/Categories.jsx
"use client";

import { motion } from "framer-motion";

export default function Categories() {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      tagline: "Explore the latest phones",
      image: "https://cdn.mos.cms.futurecdn.net/M4nigVN3vvA5EEnNX9atxY.jpg",
      link: "/shop",
    },
    {
      id: 2,
      name: "Laptops",
      tagline: "Work and play anywhere",
      image: "https://lh5.googleusercontent.com/proxy/JMODJKiG9UQbFGBYvKxkTo8ppyVNqGhSjw9C_ru6BX5dQ07tv8A2yGsFw3J--SjxjGiJQR_7yrtB60u94QUJuUHQ2z40LOab7EtrkiPv7GCGI4ntINxdoJiXdPnC2SBz_V-VRxYSr4S2Sg",
      link: "/shop",
    },
    {
      id: 3,
      name: "Audio",
      tagline: "Headphones, earbuds & more",
      image: "https://control.spop.com.ng/pages/uploads/product/2024-10-24-J0E1azOo5g9nc2u8XyUx/IMG-20240928-WA0062.jpg",
      link: "/shop",
    },
    {
      id: 4,
      name: "Accessories",
      tagline: "Upgrade your space with accessories",
      image: "https://lh3.googleusercontent.com/cn4c6JPx9hm2cHMaYFEHJCH1wjr1RCtZXKUSvYZvC0582_gNXl6cp_6BNg5OUPnwBKf13h1IC-oryanFM-pmJBpcCHTyJrSQIy3_dV-6DrmQsmn2TSrc=w1000-e365",
      link: "/shop",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Shop by Category
        </motion.h2>

        {/* Categories Wrapper */}
        <motion.div
          className="flex gap-6 overflow-x-auto pb-6 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-8 sm:overflow-visible snap-x snap-mandatory"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {categories.map((category) => (
            <motion.a
              key={category.id}
              href={category.link}
              className="group relative min-w-[260px] sm:min-w-0 block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition snap-start"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition flex flex-col items-center justify-center text-center px-4">
                <p className="text-white text-xl font-semibold tracking-wide">
                  {category.name}
                </p>
                <p className="text-gray-200 text-sm mt-1">{category.tagline}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
