import React from "react";
import office from "../../assets/images/office-building.png";
import modern from "../../assets/images/modern-house.png";
import steel from "../../assets/images/steel-2.png";
import room from "../../assets/images/room-service.png";
import construct from "../../assets/images/construction.png";
import "./Services2.css";
const Services2 = () => {
  return (
    <div className="service-ext-main-div">
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
    </div>
  );
};

export default Services2;
