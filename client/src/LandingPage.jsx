// import React from "react";
import "./LandingPage.css";
import HeroSection from "./Components/HeroSection";
import BelowHeroSection from "./Components/BelowHeroSection";
import ExploreProducts from "./Components/ExploreProducts";

function App() {
  return (
    <div className="app">
      <HeroSection />
      <BelowHeroSection/>
      <ExploreProducts/>
    </div>
  );
}

export default App;
