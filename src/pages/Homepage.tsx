import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import AboutUs from "../components/About Us/AboutUs";

const Homepage = () => {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
    </div>
  );
};

export default Homepage;
