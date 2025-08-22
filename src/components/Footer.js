import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 pt-8 pb-6 sm:pt-10 sm:pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-[#1FB6FF] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">VoltMart</h2>
          <p className="leading-relaxed text-gray-400 text-sm sm:text-base">
            Your next-gen gadget store. Tech made simple, stylish, and smart.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-[#1FB6FF] text-base sm:text-lg font-semibold mb-2 sm:mb-3">Shop</h3>
          <ul className="flex flex-wrap sm:flex-col gap-1 sm:gap-1">
            <li><a href="/shop" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Smartphones</a></li>
            <li><a href="/shop" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Laptops</a></li>
            <li><a href="/shop" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Audio</a></li>
            <li><a href="/shop" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Smart Home</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-[#1FB6FF] text-base sm:text-lg font-semibold mb-2 sm:mb-3">Support</h3>
          <ul className="flex flex-wrap sm:flex-col gap-1 sm:gap-1">
            <li><a href="/contact" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Contact Us</a></li>
            <li><a href="/faq" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">FAQs</a></li>
            <li><a href="/shipping" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Shipping & Returns</a></li>
            <li><a href="/privacy" className="hover:text-[#1FB6FF] transition text-sm sm:text-base">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-[#1FB6FF] text-base sm:text-lg font-semibold mb-2 sm:mb-3">Follow Us</h3>
          <div className="flex gap-2 sm:gap-3">
            <a
              href="#"
              className="p-2 rounded-full bg-[#1E293B] hover:bg-[#1FB6FF] hover:text-white transition"
            >
              <FaFacebookF size={14} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#1E293B] hover:bg-[#1FB6FF] hover:text-white transition"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-[#1E293B] hover:bg-[#1FB6FF] hover:text-white transition"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 sm:mt-10 border-t border-[#1E293B] pt-3 sm:pt-4 text-center text-gray-500 text-xs sm:text-sm">
        © {new Date().getFullYear()} VoltMart. All rights reserved. Built by Dray.
      </div>
    </footer>
  );
}
