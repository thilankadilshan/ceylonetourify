import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Anchor, Compass, ArrowRight } from "lucide-react";

const FeaturesGrid = () => {
  // 1. Data for the cards
  const cards = [
    {
      id: "colombo",
      title: "Urban Heritage",
      subtitle: "The Soul of the City",
      description:
        "From the colonial charm of Colombo Fort to the vibrant street life of Pettah, experience the pulse of a city where history meets the horizon.",
      image: "/assets/features/colombo.jpg",
      icon: <Map className="w-8 h-8" />,
    },
    {
      id: "beach",
      title: "Pristine Escapes",
      subtitle: "Golden South Coast",
      description:
        "Relax along the endless golden sands of the South Coast, where turquoise waters and tropical palms create a true paradise escape.",
      image: "/assets/features/beach.jpg",
      icon: <Anchor className="w-8 h-8" />,
    },
    {
      id: "culture",
      title: "Soulful Traditions",
      subtitle: "Kandyan Legacy",
      description:
        "Witness the rhythmic beauty of traditional Kandyan dances, a mesmerizing display of Sri Lanka's living cultural legacy and heritage.",
      image: "/assets/features/culturedance.jpg",
      icon: <Compass className="w-8 h-8" />,
    },
  ];

  // 2. State to track the active (large) card
  const [activeCard, setActiveCard] = useState(cards[0]);

  return (
    <section className="py-20 md:py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-secondary font-sans uppercase tracking-[0.3em] text-[10px] font-bold block mb-2">
            Signature Experiences
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary italic">
            Pick your{" "}
            <span className="text-secondary not-italic font-bold">Vibe</span>.
          </h2>
        </div>

        {/* 3. The Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-6 h-auto lg:h-[600px]">
          {/* === THE LARGE ACTIVE CARD === */}
          <motion.div
            layout
            key={activeCard.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-[2.5] relative rounded-sm overflow-hidden shadow-2xl group min-h-[400px]"
          >
            <img
              src={activeCard.image}
              alt={activeCard.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-8 md:p-12 text-white w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-secondary mb-4">{activeCard.icon}</div>
                <h3 className="text-3xl md:text-5xl font-serif mb-4">
                  {activeCard.title}
                </h3>
                <p className="text-white/70 max-w-lg mb-8 font-light leading-relaxed">
                  {activeCard.description}
                </p>
                <button className="flex items-center gap-3 bg-secondary text-primary px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">
                  Explore More <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>
          </motion.div>

          {/* === THE SIDEBAR (TINY CARDS) === */}
          <div className="flex-1 flex flex-col gap-4">
            {cards.map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveCard(card)}
                className={`relative flex-1 rounded-sm overflow-hidden cursor-pointer border-2 transition-all duration-300 min-h-[120px] ${
                  activeCard.id === card.id
                    ? "border-secondary"
                    : "border-transparent opacity-60 grayscale hover:grayscale-0 hover:opacity-100"
                }`}
              >
                <img
                  src={card.image}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={card.title}
                />
                <div className="absolute inset-0 bg-primary/40" />
                <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-secondary mb-1">
                    {card.subtitle}
                  </p>
                  <h4 className="text-lg font-serif">{card.title}</h4>
                </div>

                {activeCard.id === card.id && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute inset-0 border-4 border-secondary pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
