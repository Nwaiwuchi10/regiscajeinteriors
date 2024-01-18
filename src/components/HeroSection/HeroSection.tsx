import React from "react";

import "./HeroSection.css"; // Create this file for styling

const HeroSection: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-video-div">
        <div className="background-div-overlay"></div>
        <video autoPlay loop muted className="video-background">
          <source
            src={process.env.PUBLIC_URL + "/videos/video.mp4"}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-caption">
        {" "}
        Discover Most Suitable Interior Property Design
      </div>
      <div className="caption-writeup">
        Trading and Contracting Company where creativity meets comfort
      </div>
      <div className="btn-btn-navbar">Visit Us</div>
    </div>
  );
};

export default HeroSection;
