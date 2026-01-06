import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

// Placeholder pages for now
const Tours = () => (
  <div className="pt-24 text-center">Tours Page (Coming Soon)</div>
);
const Contact = () => (
  <div className="pt-24 text-center">Contact Page (Coming Soon)</div>
);
const NotFound = () => (
  <div className="pt-24 text-center">404 - Page Not Found</div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes using the Main Layout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* You can add /admin routes here later without the MainLayout */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
