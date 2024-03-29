import React from "react";
import "./Services.css";
import modern from "../../assets/images/modern.jpg";
import closed from "../../assets/images/close.jpg";
import CountUp from "react-countup";

const Services = () => {
  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="Services-main-div">
      <div className="Services-div-dsiplay ">
        <div className="Service-first-div">
          <div className="sectors-we-serve">SECTORS WE SERVE</div>
          <div className="dedicate">
            We're dedicated to transforming spaces and creating lasting impacts
            in the sectors we serve
          </div>
          <div className="service-hr"></div>
          <div className="Service-disover-border" onClick={handleGmailClick}>
            Visit Us
          </div>
        </div>
        <div className="Service-div-second">
          <div>
            REGISCAJE DELUX INTERIORS specializes in serving a diverse range of
            sectors, each with its own unique demands and possibilities. From
            crafting exceptional hospitality spaces to designing innovative
            residential environments, from shaping vibrant commercial landscapes
            to redefining luxury retail experiences, our expertise extends
            across various domains.
          </div>
          <div className="service-img-display-div">
            <div className="closed-img-div">
              <img src={modern} alt="modern" className="service-mode-pix" />{" "}
            </div>
            <div className="closed-img-div">
              <img src={closed} alt="modern" className="service-mode-pix" />
            </div>
          </div>
          <div className="border-twenty">
            <div className="border-twenty-three">
              {" "}
              <CountUp end={5} duration={50} />+
            </div>
            <div className="experience">Years of Experience</div>
          </div>
        </div>
      </div>
      {/* card on service */}

      {/* card on service div */}
    </div>
  );
};

export default Services;
