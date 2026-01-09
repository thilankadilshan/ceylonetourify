import React from "react";
import { motion } from "framer-motion";

const PageLoader = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 0 }}
      exit={{ scaleY: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 bg-primary z-[999] origin-top"
    />
  );
};

export const EntranceLoader = () => {
  return (
    <motion.div
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[1000] bg-primary flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 mb-6 relative">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="w-full h-full object-contain brightness-0 invert"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-secondary rounded-full"
          />
        </div>
        <h1 className="text-white font-serif text-3xl tracking-[0.3em] font-bold">
          CEYLONE
        </h1>
        <span className="text-secondary text-xs tracking-[0.5em] uppercase mt-2">
          Authentic Journeys
        </span>
      </motion.div>
    </motion.div>
  );
};

export default PageLoader;
