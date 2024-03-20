import React from "react";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import clock from "../../assets/images/clock.png";
import int from "../../assets/images/interior.jpg";
import CountUp from "react-countup";
import good from "../../assets/images/good-removebg-preview.png";
// import Zoom from "react-reveal/Zoom";
import smart from "../../assets/images/execute-removebg-preview.png";
import Footer from "../../components/Footer/Footer";
import "./AboutUsPage.css";
// import Fade from "react-reveal/Fade";
const AboutUs = () => {
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
              src={process.env.PUBLIC_URL + "/videos/Time.mp4"}
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
      {/* ///// */}
      <div>
        <div className="About-us-main-div" id="about-us">
          {/* anoda page of who we are */}
          <div className="who-we-are-display-div ">
            <div>
              <div className="about-us-div2-img">
                {/* <Fade left> */}
                <img src={int} alt="int" className="who-img" />
                {/* </Fade> */}
              </div>
            </div>

            <div className="who-we-are-content-div">
              <div className="who-we-are-h1">WHO WE ARE</div>
              <div className="Builders-writeup">REGISCAJE DELUX INTERIORS</div>
              <div>
                Regiscaje delux interiors is a leading construction and design
                company specializing in crafting exceptional spaces across the
                GCC countries. With a diverse portfolio spanning hospitality,
                residential, commercial, luxury retail, private residences,
                cultural and tourism, as well as social infrastructure sectors,
                we bring innovation and expertise to every project. We help you
                choose right materials for your home to meet your luxury taste.
                We offer comprehensive design and build services that focus on
                creating comfortable and functional living spaces for our
                clients. Our team of experts is skilled in both interior and
                home design, bringing creativity and innovation to every
                project. Our design and build services cover every aspect of the
                process, from conceptualization to construction, ensuring a
                seamless and stress-free experience for our clients. Whether
                it's a complete home renovation or a small interior design
                project, we approach every project with the same level of care
                and attention to detail.{" "}
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
              <div className="know-more" onClick={handleGmailClick}>
                Know More
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
