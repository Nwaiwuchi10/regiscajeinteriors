import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import AboutUs from "../components/About Us/AboutUs";
import Services from "../components/Services/Services";
import Services2 from "../components/Services/Services2";

const Homepage = () => {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Services2 />
    </div>
  );
};

export default Homepage;
