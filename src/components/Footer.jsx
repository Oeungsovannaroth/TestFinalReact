import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-purple-400 text-white py-10 mt-10">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold mb-3">🌟 YUYU Pet Care</h2>
              <p className="text-xl mt-6 opacity-90">
                Every tail wag and purr matters — thank you for being part of
                the YUYU family!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-xl text-shadow-white ">
                <li>
                  <a href="/" className="hover:underline hover:font-bold ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline hover:font-bold">
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="hover:underline hover:font-bold"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:underline hover:font-bold"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Service</h3>
              <ul className="space-y-2 text-xl text-shadow-white ">
                <li>
                  <a href="/" className="hover:underline hover:font-bold ">
                    Dog Walking
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline hover:font-bold">
                    Vacation Dog Sitting
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="hover:underline hover:font-bold"
                  >
                   Private dog Training
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:underline hover:font-bold"
                  >
                    Specialized Care
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm">
            © {new Date().getFullYear()} YUYU Pet Care. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
