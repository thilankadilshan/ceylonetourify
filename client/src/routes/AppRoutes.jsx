import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound"; // Import the new page

// Placeholder pages
const Tours = () => (
  <div className="pt-24 text-center h-screen bg-background">
    Tours Page (Coming Soon)
  </div>
);
const Contact = () => (
  <div className="pt-24 text-center h-screen bg-background">
    Contact Page (Coming Soon)
  </div>
);
const Gallery = () => (
  <div className="pt-24 text-center h-screen bg-background">
    Gallery Page (Coming Soon)
  </div>
);
const About = () => (
  <div className="pt-24 text-center h-screen bg-background">
    About Page (Coming Soon)
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* 404 Route - Outside of MainLayout for full-screen impact */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
