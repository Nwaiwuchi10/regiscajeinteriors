import React, { useState } from "react";

import house from "../../assets/images/ceiling.jpg";
import residential from "../../assets/images/residential.jpg";
import white from "../../assets/images/white.jpg";
import deco from "../../assets/images/deco.jpg";
import decor from "../../assets/images/decor.jpg";
import bedroom from "../../assets/images/bedroom.jpg";
import { projectApi } from "../../Data/Api";
import axios from "axios";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
// import Zoom from "react-reveal/Zoom";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";
const ProjectsPage = () => {
  const email = "uc@regiscajeinteriors.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  const [ViewProjects, setViewProjects] = React.useState([]);
  const [display, setDisplay] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(projectApi);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setDisplay(true);
      setViewProjects(data);
    };

    fetchPosts();
  }, []);
  const [hovered, setHovered] = useState(null);
  const handleMouseEnter = (itemId: any) => {
    setHovered(itemId);
  };

  const handleMouseLeave = () => {
    setHovered(null);
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
              src={process.env.PUBLIC_URL + "/videos/proj.mp4"}
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
      {/* /// */}
      <div className="projects-main-div" id="projects">
        <div className="projects-div-display">
          <div className="projects-div-section-one">
            <div className="latest-project">OUR LATEST PROJECT</div>
            <div className="we-design">
              We Offer a Wide Variety of Interior and Home Design
              {/* We Design & Build the Space for Bright Future */}
            </div>
          </div>
          <div className="projects-div-section-two">
            <div>
              Our projects at REGISCAJE DELUX INTERIORS stand as living
              testimonials to our commitment to excellence. Each project is a
              canvas where innovation meets craftsmanship, and where our passion
              for design and construction shines through.
            </div>
            <div className="projects-btn">View All Project</div>
          </div>
        </div>

        {/* project pictures */}
        <div className="project-pictures-display">
          {ViewProjects?.map((item: any, idex: any) => (
            <>
              <div>
                <div
                  className={`image-container ${hovered ? "hovered" : ""}`}
                  onMouseEnter={() => handleMouseEnter(item._id)}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <Flip left> */}
                  <img src={item?.image} alt="ath" className="image" />
                  {/* </Flip> */}
                  {hovered === item._id && (
                    <div className="overlay">
                      <h3 className="text-center">{item?.title}</h3>
                      {/* <p>Fairmont & Raffles Lusail Hotel & Residence</p> */}
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
