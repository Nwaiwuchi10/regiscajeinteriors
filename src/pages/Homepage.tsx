import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import NavBar from "../components/NavBar/NavBar";
import TopNavBar from "../components/TopNavBar/TopNavBar";
import AboutUs from "../components/About Us/AboutUs";
import Services from "../components/Services/Services";
import Services2 from "../components/Services/Services2";
import Trusted from "../components/Trusted/Trusted";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";
import Contact from "../components/ContactUs/Contact";
import IPAddress from "../components/IPaddress";

const Homepage = () => {
  return (
    <div>
      <TopNavBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Services2 />
      <Trusted />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Homepage;
