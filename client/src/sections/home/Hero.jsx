import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Cinematic Background Layer */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/hero-main.jpg"
          className="w-full h-full object-cover opacity-60"
          alt="Ceylon Landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#FAFAFA]"></div>
      </motion.div>

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-block text-secondary font-sans uppercase tracking-[0.5em] text-xs font-bold mb-6"
        >
          Est. 1948 • The Authentic Experience
        </motion.span>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-6xl md:text-8xl font-serif mb-8 leading-tight"
        >
          Travel the <span className="italic italic-text">Royal</span> <br />
          Way of Ceylon
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-primary hover:bg-[#1f3f1b] text-white px-10 py-5 rounded-full flex items-center gap-4 transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="uppercase tracking-widest text-sm font-bold">
              Start Your Journey
            </span>
            <ArrowRight size={20} />
          </button>

          <button className="flex items-center gap-3 text-white hover:text-secondary transition-colors group">
            <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-secondary transition-all">
              <Play size={18} fill="currentColor" />
            </div>
            <span className="uppercase tracking-widest text-xs font-bold">
              Watch Film
            </span>
          </button>
        </motion.div>
      </div>

      {/* 3. Floating Heritage Card (The Unique Touch) */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
        className="absolute bottom-20 right-10 hidden lg:flex bg-white/10 backdrop-blur-md p-6 rounded-sm border border-white/20 items-center gap-4 shadow-2xl"
      >
        <div className="w-16 h-16 rounded-sm overflow-hidden">
          <img
            src="/assets/logoname.png"
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="text-secondary text-[10px] uppercase tracking-widest font-bold">
            Signature Tour
          </p>
          <p className="text-white font-serif text-lg italic">
            The Tea Country Rail
          </p>
        </div>
      </motion.div>

      {/* 4. Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
