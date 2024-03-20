import React from "react";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";
import Services2 from "../../components/Services/Services2";
import Footer from "../../components/Footer/Footer";
const ServicesPage = () => {
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
              src={process.env.PUBLIC_URL + "/videos/servi.mp4"}
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
        <Services />
        <Services2 />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
