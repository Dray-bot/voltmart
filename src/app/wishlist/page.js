"use client";
import { useWishlist } from "@/context/WishlistContext";
import Link from "next/link";
import Image from "next/image";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-white text-electricBlue px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-10 text-black">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="text-center py-20 border border-gray-200 rounded-2xl shadow-sm bg-gray-50">
            <p className="text-gray-500 text-lg mb-4">Your wishlist is empty</p>
            <Link
              href="/shop"
              className="px-6 py-3 bg-electricBlue text-gray-500 font-semibold rounded-xl hover:opacity-90 transition"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-2xl bg-white hover:shadow-md transition shadow-sm flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 rounded-t-2xl overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 text-sm">
                      No Image
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 p-4 flex flex-col justify-between">
                  <div>
                    <h2 className="font-semibold text-lg mb-1 text-gray-500">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => toggleWishlist(item)}
                      className="flex-1 px-4 py-2 text-sm rounded-xl border border-electricBlue text-gray-600 hover:bg-electricBlue hover:text-gray-600 transition cursor-pointer"
                    >
                      Remove
                    </button>
                    <Link
                      href="/cart"
                      className="flex-1 px-4 py-2 text-sm rounded-xl bg-electricBlue text-gray-600 font-semibold hover:opacity-90 transition text-center"
                    >
                      Move to Cart
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
