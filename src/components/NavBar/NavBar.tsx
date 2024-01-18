import React, { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";
import { HiBars3BottomRight } from "react-icons/hi2";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

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
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
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
