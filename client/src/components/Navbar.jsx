import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-primary tracking-tighter"
        >
          CEYLONE<span className="text-secondary font-light">TOURIFY</span>
        </Link>
        <div className="space-x-8 font-sans text-sm uppercase tracking-widest font-medium">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/tours" className="hover:text-primary transition-colors">
            Tours
          </Link>
          <Link to="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
