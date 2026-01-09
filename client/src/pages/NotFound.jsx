import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const NotFound = () => {
  return (
    <main className="relative min-h-screen w-full bg-background flex flex-col lg:flex-row overflow-hidden">
      {/* Visual Side */}
      <div className="relative w-full lg:w-1/2 h-[40vh] lg:h-screen bg-primary">
        <img
          src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2000"
          alt="Sri Lanka Mist"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent lg:bg-gradient-to-r" />
        <div className="absolute bottom-10 left-10 hidden lg:block">
          <p className="text-secondary font-serif italic text-2xl">
            "Not all those who wander are lost..."
          </p>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16">
        <div className="max-w-lg">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary/30 font-serif text-[120px] md:text-[180px] font-bold leading-none block"
          >
            404
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              This path is <br />
              <span className="italic italic-text">Hidden in Mist.</span>
            </h2>
            <p className="text-gray-600 mb-10 text-lg font-light leading-relaxed">
              We couldn't find the page you're looking for. It might have been
              moved, or perhaps it's a secret spot yet to be discovered.
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full group hover:bg-secondary hover:text-primary transition-all duration-500 shadow-xl active:scale-95"
            >
              <span className="uppercase tracking-[0.2em] text-sm font-bold">
                Return to Main Road
              </span>
              <MoveRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
