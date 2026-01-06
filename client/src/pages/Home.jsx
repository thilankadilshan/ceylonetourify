import React from "react";
import Hero from "../sections/home/Hero";
import AboutCeylon from "../sections/home/AboutCeylon";
// We will add more sections as we go

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#FAFAFA]">
      <Hero />
      <AboutCeylon />
      {/* FeaturedTours will go here later */}
    </main>
  );
};

export default Home;
