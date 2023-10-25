// import React from "react";
import "./LandingPage.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import BelowHeroSection from "./Components/BelowHeroSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <BelowHeroSection/>
    </div>
  );
}

export default App;
