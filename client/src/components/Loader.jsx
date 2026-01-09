import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[999] bg-primary flex flex-col items-center justify-center"
    >
      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <img
          src="/assets/logo.png"
          alt="Logo"
          className="w-20 h-20 object-contain"
        />
      </motion.div>

      {/* Brand Name Animation */}
      <div className="text-center overflow-hidden">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter"
        >
          CEYLONE{" "}
          <span className="text-secondary font-light font-sans tracking-[0.2em] uppercase text-2xl md:text-3xl ml-2">
            Tourify
          </span>
        </motion.h1>
      </div>

      {/* Luxury Progress Bar */}
      <div className="mt-10 w-48 h-[1px] bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="absolute inset-0 bg-secondary shadow-[0_0_15px_#D4AF37]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-white text-[10px] uppercase tracking-[0.5em] font-bold"
      >
        Ayubowan - Welcome to Paradise
      </motion.p>
    </motion.div>
  );
};

export default Loader;
