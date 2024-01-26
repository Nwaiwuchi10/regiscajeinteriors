import React from "react";
import office from "../../assets/images/office-building.png";
import modern from "../../assets/images/modern-house.png";
import steel from "../../assets/images/steel-2.png";
import room from "../../assets/images/room-service.png";
import blind from "../../assets/images/blind.jpg";
import construct from "../../assets/images/construction.png";
import "./Services2.css";
import cautin from "../../assets/images/cautin.jpg";
import serviceImg from "../../assets/images/interior.jpg";
import kitchen from "../../assets/images/kitchen.jpg";
import { DownloadProfile } from "../DownloadProfile/DownloadProfile";
import light from "../../assets/images/light.jpg";
import furniture from "../../assets/images/furniture.jpg";
import wall from "../../assets/images/wall.jpg";
import sales from "../../assets/images/sales.jpg";
import carpet from "../../assets/images/carpet.jpg";
import pop from "../../assets/images/popp.jpg";
const Services2 = () => {
  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="service-ext-main-div" id="services">
      <div className="border-modern">
        <div>
          <div className="office-img-div">
            <img src={office} alt="comm" className="office-img" />{" "}
          </div>
          <div className="commercial">Commercial</div>
          <div className="office-writeup">
            Transforms commercial spaces into dynamic and functional
            environments that drive innovation and success.
          </div>
        </div>
        <div className="office-hr"></div>
        <div>
          <div className="office-img-div">
            <img src={modern} alt="comm" className="office-img" />{" "}
          </div>
          <div className="commercial">Residential</div>
          <div className="office-writeup">
            Crafts residential spaces that blend comfort and creativity, turning
            houses into homes.
          </div>
        </div>
        <div className="office-hr"></div>
        <div>
          <div className="office-img-div">
            <img src={room} alt="comm" className="office-img" />{" "}
          </div>
          <div className="commercial">Hospitality</div>
          <div className="office-writeup">
            Creates immersive hospitality spaces that enchant guests with unique
            experiences and timeless design.
          </div>
        </div>
        <div className="office-hr"></div>
        <div>
          <div className="office-img-div">
            <img src={construct} alt="comm" className="office-img" />{" "}
          </div>
          <div className="commercial">Construction</div>
          <div className="office-writeup">
            Contributes to the community's well-being by constructing social
            infrastructure that fosters growth and connectivity.
          </div>
        </div>
        <div className="office-hr"></div>
        <div>
          <div className="office-img-div">
            <img src={steel} alt="comm" className="office-img" />{" "}
          </div>
          <div className="commercial">Commercial</div>
          <div className="office-writeup">
            From intricate designs to structural elements, we bring metal to
            life, creating functional and aesthetic components for diverse
            projects.
          </div>
        </div>
      </div>
      {/* hr div line */}

      <div className="hr-serve"></div>

      {/* hr div line */}
      {/* service range */}
      <div>
        <div className="our-services-div">OUR SERVICES</div>
        <div className="range-services">Explore Our Range of Services</div>
        <div className="comp-services">
          Our comprehensive services encompass fit-out, interior work,
          construction, project management, and trading, seamlessly merging
          innovation and expertise to bring visionary spaces to life.
        </div>
        <div className="Download-profile">
          <DownloadProfile />{" "}
        </div>
        <div className="service-range-hr"></div>
      </div>
      <div className="servce-range-grid">
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={blind} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">WINDOW BLINDS DESIGN</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Window Blinds.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
          <div className="service-range-btn">Book Now</div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={cautin} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">CAUTAINS DESIGN</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Curtains.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={kitchen} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">KITCHEN UNITS DESIGN</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Kitchen units &
            cabinets.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={light} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">LIGHTING DECORATIONS</div>

          <div className="fit-out-write-up">
            Our Lighting Decorations are top-notch aimed to meet up client’s
            satisfaction.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={furniture} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">FURNITURES DESIGNS</div>

          <div className="fit-out-write-up">
            Design, measure to fit and install all kinds of Furnitures to our
            customers test.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={wall} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">WALL DESIGNS</div>

          <div className="fit-out-write-up">
            We have experts that can Design, measure to fit, and install all
            kinds Wall Designs
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={pop} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SCREEDING & POP DESIGN</div>

          <div className="fit-out-write-up">
            Our fit-out work in screeding is a symphony of precision and
            creativity, transforming empty spaces into vibrant realities.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={carpet} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">CARPET/WOOD FLOOR DESIGNS</div>

          <div className="fit-out-write-up">
            Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities.
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
        <div className="service-range-card">
          <div className="service-range-img-div">
            <img src={sales} alt="top" className="service-range-img" />{" "}
          </div>
          <div className="fit-out">SALES OF INTERIORS MATERIALS</div>

          <div className="fit-out-write-up">
            We are our client’s and customers representatives from conception,
            planning to furnishing of the project.
            {/* Our fit-out work is a symphony of precision and creativity,
            transforming empty spaces into vibrant realities. */}
          </div>
          <div className="service-range-btn" onClick={handleGmailClick}>
            Book Now
          </div>
        </div>
      </div>
      {/* service range */}
    </div>
  );
};

export default Services2;
