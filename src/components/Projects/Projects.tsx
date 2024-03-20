import React, { useState } from "react";
import "./Projects.css";
import house from "../../assets/images/ceiling.jpg";
import residential from "../../assets/images/residential.jpg";
import white from "../../assets/images/white.jpg";
import deco from "../../assets/images/deco.jpg";
import decor from "../../assets/images/decor.jpg";
import bedroom from "../../assets/images/bedroom.jpg";
import { projectApi } from "../../Data/Api";
import axios from "axios";
import { Link } from "react-router-dom";
// import Zoom from "react-reveal/Zoom";
// import Flip from "react-reveal/Flip";
// import Fade from "react-reveal/Fade";
const Projects = () => {
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
          <div className="projects-btn">
            <Link
              to="/Projects"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              View All Project
            </Link>
          </div>
        </div>
      </div>

      {/* project pictures */}
      <div className="project-pictures-display">
        {ViewProjects?.slice(0, 6).map((item: any, index: any) => (
          <>
            <div key={item._id}>
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
  );
};

export default Projects;
