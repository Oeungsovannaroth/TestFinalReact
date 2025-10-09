import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-zinc-500 text-white py-2 mt-10  ">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand Section */}
            <div>
              <h2 className="text-2xl font-bold mb-3">🌟 Puppy Land</h2>
              <p className="text-xl mt-6 opacity-70">
                Every tail wag and purr matters — thank you for being part of
                the Puppy Land!
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2 text-xl text-shadow-white ">
                <li>
                  <a
                    href="/"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/product"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Product
                  </a>
                </li>
                <li>
                  <a
                    href="/login"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="/signup"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 ">Service</h3>
              <ul className="space-y-2 text-xl text-shadow-white ">
                <li>
                  <a
                    href="/GetPrice"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    GetPrice
                  </a>
                </li>
                <li>
                  <a
                    href="/Payment"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Payment
                  </a>
                </li>
                <li>
                  <a
                    href="/service"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="/product"
                    className="hover:underline hover:font-bold hover:text-pink-300"
                  >
                    Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/17fv3hp22A/?mibextid=wwXIfr"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition hover:text-pink-300"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://t.me/Oeungsovannaroth"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition hover:text-pink-300"
                >
                  <FaTelegram size={20} />
                </a>
                <a
                  href="https://www.instagram.com/sele.leeee?igsh=MTBydWc2ZHVqMWx2bw==&utm_source=ig_contact_invite"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition hover:text-pink-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.tiktok.com/@ohhhleleleleeee?_t=ZS-90PVBtrUIWv&_r=1"
                  className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition hover:text-pink-300"
                >
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm">
            © {new Date().getFullYear()} Puppy Land. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
