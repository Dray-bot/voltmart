// components/FeaturedProducts.jsx
"use client";

import { motion } from "framer-motion";

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Samsung S25",
      price: "$799",
      image: "https://cdn.mos.cms.futurecdn.net/qanDYTZE2K3BN3ACPiXMJD.jpg",
    },
    {
      id: 2,
      name: "Noise Cancelling Headphones",
      price: "$299",
      image: "https://i5.walmartimages.com/seo/VILINICE-Noise-Cancelling-Headphones-Wireless-Bluetooth-Over-Ear-Headphones-with-Microphone-Black-Q8_b994b99c-835f-42fc-8094-9f6be0f9273b.be59955399cdbd1c25011d4a4251ba9b.jpeg",
    },
    {
      id: 3,
      name: "Smartwatch Pro",
      price: "$199",
      image: "https://5.imimg.com/data5/ANDROID/Default/2022/12/IS/PP/AI/139115783/product-jpeg-500x500.jpg",
    },
    {
      id: 4,
      name: "Gaming Laptop",
      price: "$1299",
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/Leihsteller/best_16_inch_gaming_laptop.jpg",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <a
            href="/shop"
            className="text-blue-500 font-medium hover:text-blue-600 transition"
          >
            View All
          </a>
        </div>

        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="group bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {product.name}
                </h3>
                <p className="text-blue-500 font-bold">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
