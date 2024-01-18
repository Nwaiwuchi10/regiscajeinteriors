import React from "react";
import "./AboutUs.css";
import clock from "../../assets/images/clock.png";
import int from "../../assets/images/interior.jpg";
import CountUp from "react-countup";
import good from "../../assets/images/good-removebg-preview.png";
import Zoom from "react-reveal/Zoom";
import smart from "../../assets/images/execute-removebg-preview.png";
const AboutUs = () => {
  return (
    <div className="About-us-main-div">
      <div className="About-us-div-display">
        <Zoom up>
          <div className="About-us-card-div">
            <div className="about-us-img-div">
              <img src={clock} alt="clock" className="about-us-img" />
            </div>
            <div className="about-us-caption">Fast Building</div>
            <div className="about-us-writeup">
              Through optimized methodologies, advanced materials, and a skilled
              workforce, we accelerate project timelines without compromising
              quality. With Fast Building, your vision is swiftly translated
              into a structurally sound and aesthetically pleasing reality.
            </div>
          </div>
        </Zoom>
        <Zoom down>
          <div className="About-us-card-div">
            <div className="about-us-img-div">
              <img src={good} alt="clock" className="about-us-img" />
            </div>
            <div className="about-us-caption">Smart Execute</div>
            <div className="about-us-writeup">
              With cutting-edge technology, streamlined processes, and a team of
              experts, we ensure efficient and precise project implementation.
              From concept to completion, Smart Execute transforms ideas into
              reality, delivering excellence every step of the way.
            </div>
          </div>
        </Zoom>
        <Zoom left>
          <div className="About-us-card-div">
            <div className="about-us-img-div">
              <img src={smart} alt="clock" className="about-us-img" />
            </div>
            <div className="about-us-caption">Perfect Handing Over</div>
            <div className="about-us-writeup">
              We meticulously inspect, refine, and ensure that every detail is
              flawlessly executed. Our dedication to quality and precision
              ensures that your project is not just delivered, but handed over
              with pride, confidence, and the assurance of perfection.
            </div>
          </div>
        </Zoom>
      </div>

      {/* anoda page of who we are */}
      <div className="who-we-are-display-div ">
        <div>
          <div className="about-us-div2-img">
            <img src={int} alt="int" className="who-img" />
          </div>
        </div>

        <div className="who-we-are-content-div">
          <div className="who-we-are-h1">WHO WE ARE</div>
          <div className="Builders-writeup">REGISCAJE DELUX INTERIORS</div>
          <div>
            Regiscaje delux interiors is a leading construction and design
            company specializing in crafting exceptional spaces across the GCC
            countries. With a diverse portfolio spanning hospitality,
            residential, commercial, luxury retail, private residences, cultural
            and tourism, as well as social infrastructure sectors, we bring
            innovation and expertise to every project.{" "}
          </div>
          <div className="numbers-display-div">
            <div>
              <div className="number-div">
                <CountUp end={1} duration={20} />K{" "}
              </div>

              <div>Project Done</div>
            </div>
            <div className="about-us-hr"></div>
            <div>
              <div className="number-div">
                {" "}
                <CountUp end={100} duration={20} />%
              </div>

              <div>Happy Clients</div>
            </div>
            <div className="about-us-hr"></div>
            <div>
              <div className="number-div">
                <CountUp end={50} duration={20} />+{" "}
              </div>
              <span></span>
              <div>Professioinal Worker</div>
            </div>
          </div>
          <div className="know-more">Know More</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
