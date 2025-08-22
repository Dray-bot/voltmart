"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function DealsPage() {
  const { addToCart } = useCart();

  const deals = [
    { id: 1, name: "iPhone 16 Pro Max", price: 1199, discountPrice: 999, image: "https://www.techadvisor.com/wp-content/uploads/2024/10/iPhone-16-Pro-Max-Being-Held-in-Hand-4.jpg?quality=50&strip=all" },
    { id: 2, name: "MacBook Air M3", price: 1299, discountPrice: 1099, image: "https://media.cnn.com/api/v1/images/stellar/prod/apple-macbook-air-m3-cnnu-lead-options-8.jpg?c=16x9&q=h_833,w_1480,c_fill" },
    { id: 3, name: "Sony WH-1000XM5", price: 399, discountPrice: 299, image: "https://jotem.in/wp-content/uploads/2023/02/Sony-WH1000XM5-5.jpg" },
    { id: 4, name: "Samsung Watch Ultra 2", price: 799, discountPrice: 649, image: "https://www.techadvisor.com/wp-content/uploads/2025/07/Samsung_Galaxy_Watch_Ultra_1ss-2.jpg?quality=50&strip=all" },
    { id: 5, name: "Samsung Galaxy Tab S9", price: 899, discountPrice: 749, image: "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/08/samsung-galaxy-tab-s9-ultra-colorful-wallpaper.jpg" },
  ];

  const getDiscountPercent = (price, discountPrice) =>
    Math.round(((price - discountPrice) / price) * 100);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-16 border-b">
        <h1 className="text-5xl font-bold text-black">Hot Tech Deals</h1>
        <p className="text-gray-500 mt-3 text-lg">Premium gadgets at unbeatable prices</p>
      </div>

      {/* Deals Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {deals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition relative"
            >
              {/* Image */}
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
                {/* Small discount badge */}
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {getDiscountPercent(item.price, item.discountPrice)}% OFF
                </span>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <div className="mt-3 flex justify-center items-baseline gap-2">
                  <span className="text-2xl font-bold text-gray-900">${item.discountPrice}</span>
                  <span className="text-gray-400 line-through">${item.price}</span>
                </div>
                <button
                  onClick={() =>
                    addToCart({
                      id: item.id,
                      name: item.name,
                      price: item.discountPrice,
                      image: item.image,
                      qty: 1,
                    })
                  }
                  className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg font-medium hover:bg-blue-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
