import React from "react";
import "./LandingPage.css";
import Spline from "@splinetool/react-spline";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
