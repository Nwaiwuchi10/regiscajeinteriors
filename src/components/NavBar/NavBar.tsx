import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
import { DownloadProfile, Profile } from "../DownloadProfile/DownloadProfile";
import { Link } from "react-router-dom";
import IPAddress from "../IPaddress";
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
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <img src={logo} alt="logo" className="logo-img" />
            </Link>
          </div>
        </div>
        <div className="navbar-menu-list">
          <ul>
            <li>
              {" "}
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/About-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Contact-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Profile />{" "}
            </li>
            <li>
              <IPAddress />{" "}
            </li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                {" "}
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/About-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Contact-us"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Contact
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Services"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Services
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to="/Projects"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Profile />{" "}
            </li>
            <li>
              <IPAddress />{" "}
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
