import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-background selection:bg-secondary/30">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
