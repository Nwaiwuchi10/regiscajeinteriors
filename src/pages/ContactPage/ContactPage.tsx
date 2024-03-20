import React from "react";
import Contact from "../../components/ContactUs/Contact";
import Footer from "../../components/Footer/Footer";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./ContactPage.css";
const ContactPage = () => {
  const phoneNumber = "+97470088156";

  const facebookProfile = "https://www.facebook.com/Regiscaje/";

  const whatsapp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const Twitter = "https://twitter.com/Regiscajedelux";

  const instagram = "https://www.instagram.com/regiscajedeluxinteriors/";

  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };

  return (
    <div>
      <TopNavBar />
      <NavBar />
      <div className="hero-container">
        <div className="hero-video-div">
          {/* <Slider {...settings}> */}
          <div className="background-div-overlay"></div>
          <video autoPlay loop muted className="video-background">
            <source
              src={process.env.PUBLIC_URL + "/videos/scont.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* <video autoPlay loop muted className="video-background2">
            <source
              src={process.env.PUBLIC_URL + "/videos/vivi.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
          {/* </Slider> */}
        </div>
        <div className="hero-caption">
          {" "}
          Discover Most Suitable Interior Property Design
        </div>
        <div className="caption-writeup">
          Trading and Contracting Company where creativity meets comfort
        </div>
        <div className="btn-btn-navbar" onClick={handleGmailClick}>
          Visit Us
        </div>
      </div>
      <div>
        <div className="social-icons">
          <a href="" className="text-white me-4">
            <Link
              to={facebookProfile}
              target="_blank"
              style={{ color: "inherit" }}
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
          </a>
          <a href="" className="text-white me-4">
            <Link to={Twitter} target="_blank" style={{ color: "inherit" }}>
              <i className="fab fa-twitter"></i>
            </Link>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google" onClick={handleGmailClick}></i>
          </a>
          <a href="" className="text-white me-4">
            <Link to={instagram} target="_blank" style={{ color: "inherit" }}>
              <i className="fab fa-instagram"></i>
            </Link>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-whatsapp" onClick={whatsapp}></i>
          </a>
        </div>
        <div className="Contact-us-main-div" id="contact-us">
          <div className="contact-sub-div-dsipaly">
            <div>
              <div>
                <IoCall className="contact-icon" />{" "}
              </div>
            </div>
            <div>
              <div className="contact-header">Phone Number</div>
              <div>+974 70088156</div>
              <div>+974 66040601</div>
            </div>
          </div>
          <div className="contact-hr"></div>
          <div className="contact-sub-div-dsipaly">
            <div>
              <div>
                <FaEnvelope className="contact-icon" />{" "}
              </div>
            </div>
            <div>
              <div className="contact-header">Email Address</div>
              <div>uc@regiscajeinteriors.com</div>
            </div>
          </div>
          <div className="contact-hr"></div>
          <div className="contact-sub-div-dsipaly">
            <div>
              <div>
                <MdLocationPin className="contact-icon" />{" "}
              </div>
            </div>
            <div>
              <div className="contact-header">Location</div>
              <div>
                Shop No 11 Retaj House (La Rose building) By Crazy Signal, Old
                Al Ghanim Doha, State of Qatar
              </div>
            </div>
          </div>
          {/* ./// */}

          {/* /// */}
        </div>

        {/* <Contact /> */}
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
