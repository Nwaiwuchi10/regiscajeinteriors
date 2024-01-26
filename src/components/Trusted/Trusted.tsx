import React, { useEffect, useState } from "react";
import "./Trusted.css";
import trusted from "../../assets/images/mast.jpg";
import worldtrust from "../../assets/images/world.png";
// import Fade from "react-reveal/Fade";
// import { Fade } from 'react-reveal';
const Trusted = () => {
  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div>
      <div className="trusted-main-div">
        <div className="trusted-main-div-background-image">
          <div className="trusted-main-div-overlay"></div>

          <div className="trusted-display-div">
            <div className="trusted-side-one">
              <div className="trusted-img-div">
                {/* <Fade left> */}
                <img src={trusted} alt="trusted" className="trusted-img" />{" "}
                {/* </Fade> */}
              </div>
            </div>
            <div className="trusted-write-section">
              <div className="trusted-write-div">
                READY FOR NEXT PROJECT?
                {/* We are trusted by 35,000+ world-class brands and organizations
                of all sizes */}
              </div>
              <div className="trusted-write-div2">
                Let's build your dream home for you with REGISCAJE DELUX
                INTERIORS
              </div>
              <div className="trusted-btn" onClick={handleGmailClick}>
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
