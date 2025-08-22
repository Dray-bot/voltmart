"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Heart, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const categories = [
  { label: "Phones", href: "/shop?cat=phones" },
  { label: "Laptops", href: "/shop?cat=laptops" },
  { label: "Consoles", href: "/shop?cat=consoles" },
  { label: "Audio", href: "/shop?cat=audio" },
  { label: "Wearables", href: "/shop?cat=wearables" },
  { label: "Accessories", href: "/shop?cat=accessories" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  const { cart } = useCart();
  const { wishlist } = useWishlist();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-[100] border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur border-gray-200"
          : "bg-white border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Left: Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-blue-500/10 grid place-items-center">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-gray-900">
                VoltMart
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1 relative">
              <Link
                href="/"
                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-500 transition"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-500 transition"
              >
                Shop
              </Link>

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-500 transition">
                  Categories <ChevronDown className="h-4 w-4" />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 w-[560px] rounded-2xl border border-gray-200 bg-white shadow-lg p-4 grid grid-cols-3 gap-2 z-[200]"
                    >
                      {categories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          className="px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-500 transition"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/deals"
                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-500 transition"
              >
                Deals
              </Link>
              <Link
                href="/compare"
                className="px-3 py-2 rounded-xl text-sm text-gray-700 hover:text-blue-500 transition"
              >
                Compare
              </Link>
            </nav>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-2">
            <Link href="/wishlist" className="relative p-2 rounded-xl hover:bg-blue-50">
              <Heart className="h-5 w-5 text-gray-700" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
              <span className="sr-only">Wishlist</span>
            </Link>
            <Link href="/cart" className="relative p-2 rounded-xl hover:bg-blue-50">
              <ShoppingCart className="h-5 w-5 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
                  {cart.length}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-xl hover:bg-blue-50"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[200]"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white border-l border-gray-200 shadow-lg flex flex-col"
            >
              <div className="h-16 px-4 flex items-center justify-between border-b border-gray-200">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-blue-50"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <div className="p-4 space-y-6 overflow-y-auto">
                <nav className="grid gap-3">
                  <Link
                    href="/"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Home
                  </Link>
                  <Link
                    href="/shop"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Shop
                  </Link>

                  <div>
                    <div className="px-3 py-2 text-sm uppercase tracking-wide text-gray-500 font-semibold">
                      Categories
                    </div>
                    <div className="grid gap-1">
                      {categories.map((cat) => (
                        <Link
                          key={cat.label}
                          href={cat.href}
                          className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                        >
                          {cat.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/deals"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Deals
                  </Link>
                  <Link
                    href="/compare"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Compare
                  </Link>
                  <Link
                    href="/wishlist"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="/cart"
                    className="px-3 py-3 rounded-xl text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-500"
                  >
                    Cart
                  </Link>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
