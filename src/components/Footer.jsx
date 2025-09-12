import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
        <footer className="bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 text-white py-10 mt-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold mb-3">🌟 MyWebsite</h2>
            <p className="text-sm opacity-90">
              Making the web more colorful, modern, and user-friendly.  
              Built with ❤️ and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer