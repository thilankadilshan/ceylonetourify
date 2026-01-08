import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "The Lion Fortress",
    location: "Sigiriya, Matale",
    description:
      "Scale the ancient rock citadel, a masterpiece of early urban planning featuring world-famous frescoes and the mirror wall.",
    image: "/assets/hero/sigiriya.jpg",
    // Adding a custom position property for specific slides
    position: "object-center",
  },
  {
    id: 2,
    title: "Colonial Heritage",
    location: "Galle Dutch Fort",
    description:
      "Explore Asia's best-preserved colonial sea fortress, where 17th-century Dutch architecture meets the rhythmic Indian Ocean.",
    image: "/assets/hero/galle.jpg",
    // This will push the image to show the right side (Lighthouse/Sea) on mobile
    position: "object-left md:object-center",
  },
  {
    id: 3,
    title: "Leopard Kingdom",
    location: "Yala National Park",
    description:
      "Journey into the wild; home to the highest density of leopards in the world, offering raw encounters with majestic predators.",
    image: "/assets/hero/yala.jpg",
    position: "object-center",
  },
  {
    id: 4,
    title: "The Misty Bridge",
    location: "Nine Arch, Ella",
    description:
      "Hidden amidst emerald tea plantations, this 'Bridge in the Sky' is a testament to colonial-era engineering and hill country beauty.",
    image: "/assets/hero/ella.jpg",
    position: "object-center",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src={slides[current].image}
            alt={slides[current].location}
            // Dynamic object-position based on the slide data
            className={`w-full h-full object-cover opacity-70 ${slides[current].position}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
        <div className="max-w-4xl text-left">
          <AnimatePresence mode="wait">
            <motion.div key={slides[current].id}>
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block text-secondary font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-4"
              >
                {slides[current].location}
              </motion.span>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:whitespace-nowrap"
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={
                      i === slides[current].title.split(" ").length - 1
                        ? "italic italic-text font-normal"
                        : "font-bold"
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-sm md:text-lg font-light mb-8 md:mb-10 max-w-xs md:max-w-xl leading-relaxed"
              >
                {slides[current].description}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex gap-4"
              >
                <button className="bg-primary hover:bg-[#1e3a1a] text-white px-6 py-3 md:px-8 md:py-4 rounded-sm flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
                  <span className="uppercase tracking-widest text-[9px] md:text-xs font-bold font-sans">
                    Discover The Tour
                  </span>
                  <ArrowRight size={14} className="md:w-4 md:h-4" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 z-20 flex gap-3">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-secondary hover:text-primary transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 z-20 flex flex-col gap-2 md:gap-3">
        {slides.map((_, index) => (
          <motion.div
            key={index}
            animate={{
              height: index === current ? 30 : 15,
              backgroundColor:
                index === current ? "#D4AF37" : "rgba(255,255,255,0.2)",
            }}
            className="w-[2px] rounded-full transition-all duration-500"
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
