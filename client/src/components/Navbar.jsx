import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full border-2 border-secondary/30 transition-transform group-hover:scale-110">
              {/* Pointing to your favicon folder */}
              <img
                src="/assets/logo.png"
                alt="CeyloneTourify Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl md:text-2xl font-serif font-bold tracking-tight leading-none transition-colors ${
                  scrolled ? "text-primary" : "text-white"
                }`}
              >
                CEYLONE
              </span>
              <span
                className={`text-[9px] md:text-[10px] font-sans tracking-[0.3em] uppercase font-bold transition-colors ${
                  scrolled ? "text-secondary" : "text-secondary/90"
                }`}
              >
                Tourify
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-all hover:text-secondary ${
                  scrolled ? "text-gray-700" : "text-white"
                } ${
                  isActive(link.path)
                    ? "text-secondary border-b border-secondary pb-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+94771234567"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest hover:bg-[#1f3f1b] transition-all shadow-md"
            >
              <Phone size={14} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary z-[-1] transition-transform duration-500 ease-in-out md:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-serif text-white hover:text-secondary transition-colors italic"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-12 h-[1px] bg-secondary/30"></div>
          <p className="text-white/60 text-xs tracking-widest uppercase">
            Ayubowan - Welcome to Ceylon
          </p>
          <button className="w-full border-2 border-secondary text-secondary py-4 rounded-sm uppercase tracking-widest font-bold">
            Call a Guide
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
