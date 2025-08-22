"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Contact Us</h1>
        <p className="text-gray-700 mb-10">
          Have a question or need support? Reach out to us. We're here to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-4 bg-gray-50 p-6 rounded-xl shadow-md"
          >
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1FB6FF]" 
                placeholder="Your Name" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1FB6FF]" 
                placeholder="you@example.com" 
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea 
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1FB6FF]" 
                rows={5} 
                placeholder="Your message"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="bg-blue-700 text-white w-full py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Address */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Office</h2>
              <p className="text-gray-700">
                12 VoltMart Street<br/>
                Lagos Island, Lagos, NG
              </p>
            </div>

            {/* Phone & Email */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Info</h2>
              <p className="text-gray-700">Phone: +234 123 456 7890</p>
              <p className="text-gray-700">Email: support@voltmart.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Follow Us</h2>
              <div className="flex gap-3">
                <a href="#" className="p-3 rounded-full bg-gray-800 text-white hover:bg-[#1FB6FF] hover:text-white transition">
                  <FaFacebookF size={16} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gray-800 text-white hover:bg-[#1FB6FF] hover:text-white transition">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="p-3 rounded-full bg-gray-800 text-white hover:bg-[#1FB6FF] hover:text-white transition">
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="w-full h-64 rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.182348986381!2d3.357375575472835!3d6.449123327591054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7f5e0d9c0b5%3A0x2d0e00c1f6e5d0e!2sIdumota%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1692712345678"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
