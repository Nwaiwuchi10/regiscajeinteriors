import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Container } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  return (
    <footer className="footer-main-div">
      <div className="footer-main-div-background-image">
        <div className="footer-main-div-overlay"></div>
        <div className="footer-divs-display">
          <div className="footer-section1">
            <div className="footer-img-div">
              <img src={logo} alt="logo" className="footer-img" />{" "}
            </div>
            <div className="footer-regis">REGISCAJE DELUX INTERIORS</div>
          </div>

          <div className="footer-section2">
            <div className="footer-header">Quick links</div>
            <div style={{ fontSize: "15px" }}>Home</div>
            <div style={{ fontSize: "15px" }}>About</div>
            <div style={{ fontSize: "15px" }}>Services</div>
            <div style={{ fontSize: "15px" }}>Contact Us</div>
            <div style={{ fontSize: "15px" }}>Profile</div>
          </div>
          <div className="footer-section3">
            <div className="footer-header">Services</div>
            <div style={{ fontSize: "15px" }}>Window Blind Design</div>
            <div style={{ fontSize: "15px" }}>Cautains Design</div>
            <div style={{ fontSize: "15px" }}>Kitchen Units Design</div>
            <div style={{ fontSize: "15px" }}>Lighting Decoration</div>
            <div style={{ fontSize: "15px" }}>Furnitures Design</div>
            <div style={{ fontSize: "15px" }}>Wall Design</div>
            <div style={{ fontSize: "15px" }}>Screeding & Pop Design</div>
            <div style={{ fontSize: "15px" }}>Carpet & Wood Floor Design</div>
            <div style={{ fontSize: "15px" }}>Sales of interiror materials</div>
          </div>
          <div className="footer-section4">
            <div className="footer-header">Contact Us</div>
            <div style={{ fontSize: "15px" }}>
              P.O. Box : Shop No 11 Retaj House (La Rose building) By Crazy
              Signal, Old Al Ghanim Doha, State of Qatar
            </div>
            <div style={{ fontSize: "15px" }}>
              Email: uc@regiscajeinteriors.com
            </div>
            <div style={{ fontSize: "15px" }}>Phone: +974 70088156</div>
            <div style={{ fontSize: "15px" }}>Phone: +974 66040601</div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 "
        style={{
          fontSize: "medium",
          color: "whitesmoke",
          position: "relative",
        }}
      >
        © 2024 Copyright: Regiscaje delux interiors
      </div>
      <div className="designed">
        {" "}
        <Typewriter
          words={["Designed By"]}
          cursor
          deleteSpeed={50}
          typeSpeed={200}
          delaySpeed={1000}
          loop={false}
        />
      </div>
      <div className="nchrys">N'CHRYS Tech (+234 8136757488)</div>
    </footer>
  );
};

export default Footer;
