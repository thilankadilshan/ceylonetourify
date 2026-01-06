import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">
            CEYLONE<span className="text-secondary">TOURIFY</span>
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
            Bringing you the timeless beauty of Sri Lanka through curated,
            private journeys. Discover the soul of Ceylon with us.
          </p>
          <div className="flex space-x-4">
            <Facebook
              size={20}
              className="text-secondary cursor-pointer hover:text-white transition-colors"
            />
            <Instagram
              size={20}
              className="text-secondary cursor-pointer hover:text-white transition-colors"
            />
            <Twitter
              size={20}
              className="text-secondary cursor-pointer hover:text-white transition-colors"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif font-semibold mb-6 border-b border-secondary/30 pb-2 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-300 font-light">
            <li>
              <Link to="/" className="hover:text-secondary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/tours"
                className="hover:text-secondary transition-colors"
              >
                Our Tours
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="hover:text-secondary transition-colors"
              >
                Image Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-secondary transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif font-semibold mb-6 border-b border-secondary/30 pb-2 inline-block">
            Get In Touch
          </h4>
          <div className="space-y-4 text-sm text-gray-300 font-light">
            <div className="flex items-center gap-3">
              <Phone size={16} className="text-secondary" />
              <span>+94 77 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-secondary" />
              <span>hello@ceylonetourify.com</span>
            </div>
            <p className="mt-4 italic">
              "Ayubowan! We are ready to show you the paradise."
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-8 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
        <p>
          © {new Date().getFullYear()} CeyloneTourify. Built for Sri Lanka
          Tourism.
        </p>
      </div>
    </footer>
  );
};

// THIS LINE FIXES YOUR ERROR!
export default Footer;
