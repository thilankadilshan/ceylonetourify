import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Change background opacity and color on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tour Packages", path: "/tours" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-primary shadow-2xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section - Now Square and Single Line */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-12 md:h-12 overflow-hidden transition-transform group-hover:scale-105">
              <img
                src="/assets/logo.png"
                alt="CeyloneTourify Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-white">
                CEYLONE
              </span>
              <span className="text-sm md:text-base font-sans tracking-[0.2em] uppercase font-light text-secondary">
                Tourify
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all hover:text-secondary text-white ${
                  isActive(link.path)
                    ? "text-secondary border-b-2 border-secondary pb-1"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="tel:+94771234567"
              className="flex items-center gap-2 bg-secondary text-primary px-6 py-2.5 rounded-sm text-xs uppercase tracking-widest font-bold hover:bg-white transition-all shadow-lg active:scale-95"
            >
              <Phone size={14} />
              Book Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Professional Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-primary/98 backdrop-blur-lg z-[-1] transition-all duration-500 ease-in-out lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <div className="space-y-6 text-center">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-3xl font-serif text-white hover:text-secondary transition-all transform ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="w-16 h-[1px] bg-secondary/40"></div>

          <div className="text-center space-y-6 w-full max-w-xs">
            <p className="text-secondary/80 text-[10px] tracking-[0.4em] uppercase font-bold">
              Experience Authentic Ceylon
            </p>
            <a
              href="tel:+94771234567"
              className="block w-full bg-secondary text-primary py-4 rounded-sm uppercase tracking-widest font-black shadow-xl"
            >
              Book Your Tour
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
