import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppRoutes from "./routes/AppRoutes";
import { EntranceLoader } from "./components/PageLoader";

function App() {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();

  // Handle Initial Site Entry
  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Handle Page-to-Page Navigation Loading
  useEffect(() => {
    if (!isFirstLoad) {
      setIsNavigating(true);
      const timer = setTimeout(() => setIsNavigating(false), 800); // Quick sweep
      return () => clearTimeout(timer);
    }
    // Scroll to top on every route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isFirstLoad && <EntranceLoader key="entrance" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isNavigating && (
          <div className="fixed inset-0 z-[999] bg-secondary pointer-events-none origin-bottom animate-slide-up" />
        )}
      </AnimatePresence>

      <AppRoutes />
    </>
  );
}

export default App;
