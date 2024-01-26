import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { DownloadProfile, Profile } from "../DownloadProfile/DownloadProfile";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const handleServicesClick = () => {
    const serviceSection: any = document.getElementById("services");
    serviceSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleAboutUsClick = () => {
    const aboutSection: any = document.getElementById("about-us");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleProjectsClick = () => {
    const projectSection: any = document.getElementById("projects");
    projectSection.scrollIntoView({ behavior: "smooth" });
  };
  const handleContactClick = () => {
    const contactSection: any = document.getElementById("contact-us");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
        <div className="navbar-logo">
          <div className="logo-img-div">
            <img src={logo} alt="logo" className="logo-img" />
          </div>
        </div>
        <div className="navbar-menu-list">
          <ul>
            <li>Home</li>
            <li onClick={handleAboutUsClick}>About</li>
            <li onClick={handleContactClick}>Contact</li>
            <li onClick={handleServicesClick}>Services</li>
            <li onClick={handleProjectsClick}>Projects</li>
            <li>
              <Profile />{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li onClick={handleAboutUsClick}>About</li>
            <li onClick={handleContactClick}>Contact</li>
            <li onClick={handleServicesClick}>Services</li>
            <li onClick={handleProjectsClick}>Projects</li>
            <li>
              <Profile />{" "}
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>

        <div className="navbar-icon" onClick={toggleMenu}>
          <div>
            <HiBars3BottomRight className="bars" />
          </div>
          {/* <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
