import React from "react";
import Hero from "../sections/home/Hero";
// Import the new component
import FeaturesGrid from "../sections/home/FeaturesGrid";
// Keep your temporary About section for later use or delete it
// import AboutCeylon from '../sections/home/AboutCeylon';

const Home = () => {
  return (
    <main className="overflow-hidden bg-[#FAFAFA]">
      <Hero />
      {/* Add the new section here */}
      <FeaturesGrid />

      {/* <AboutCeylon /> */}
    </main>
  );
};

export default Home;
