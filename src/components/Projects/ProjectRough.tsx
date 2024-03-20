import React, { useState } from "react";
import house from "../../assets/images/ceiling.jpg";
import residential from "../../assets/images/residential.jpg";
import white from "../../assets/images/white.jpg";
import deco from "../../assets/images/deco.jpg";
import decor from "../../assets/images/decor.jpg";
import bedroom from "../../assets/images/bedroom.jpg";
import { projectApi } from "../../Data/Api";
import axios from "axios";
const ProjectRough = () => {
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
  const [hovered, setHovered] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  const [hovered3, setHovered3] = useState(false);
  const [hovered4, setHovered4] = useState(false);
  const [hovered5, setHovered5] = useState(false);
  const [hovered6, setHovered6] = useState(false);
  return (
    <div>
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
          <div>
            <div
              className={`image-container ${hovered ? "hovered" : ""}`}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {/* <Flip left> */}
              <img src={white} alt="ath" className="image" />
              {/* </Flip> */}
              {hovered && (
                <div className="overlay">
                  <h3>Katara Towers</h3>
                  {/* <p>Fairmont & Raffles Lusail Hotel & Residence</p> */}
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className={`project-img-div ${hovered2 ? "hovered2" : ""}`}
              onMouseEnter={() => setHovered2(true)}
              onMouseLeave={() => setHovered2(false)}
            >
              <img src={decor} alt="ath" className="image" />

              {hovered2 && (
                <div className="overlay2">
                  <h3>Katara Towers</h3>
                  {/* <p>Fairmont & Raffles Lusail Hotel & Residence</p> */}
                </div>
              )}
            </div>
            <div
              className={`project-img-div ${hovered3 ? "hovered3" : ""}`}
              onMouseEnter={() => setHovered3(true)}
              onMouseLeave={() => setHovered3(false)}
            >
              <img src={bedroom} alt="ath" className="image" />

              {hovered3 && (
                <div className="overlay3">
                  <h3>Katara Towers</h3>
                  {/* <p>Fairmont & Raffles Lusail Hotel & Residence</p> */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="project-second-img-display">
          <div
            className={`project-img-div2 ${hovered4 ? "hovered4" : ""}`}
            onMouseEnter={() => setHovered4(true)}
            onMouseLeave={() => setHovered4(false)}
          >
            {" "}
            <img src={house} alt="ath" className="image" />
            {hovered4 && (
              <div className="overlay4">
                <h3>Katara Towers</h3>
                <p>Fairmont & Raffles Lusail Hotel & Residence</p>
              </div>
            )}
          </div>
          <div
            className={`project-img-div3 ${hovered5 ? "hovered5" : ""}`}
            onMouseEnter={() => setHovered5(true)}
            onMouseLeave={() => setHovered5(false)}
          >
            <img src={deco} alt="ath" className="image" />

            {hovered5 && (
              <div className="overlay5">
                <h3>Katara Towers</h3>
                <p>Fairmont & Raffles Lusail Hotel & Residence</p>
              </div>
            )}
          </div>
          <div
            className={`project-img-div4 ${hovered6 ? "hovered6" : ""}`}
            onMouseEnter={() => setHovered6(true)}
            onMouseLeave={() => setHovered6(false)}
          >
            <img src={residential} alt="ath" className="image" />

            {hovered6 && (
              <div className="overlay6">
                <h3>Katara Towers</h3>
                <p>Fairmont & Raffles Lusail Hotel & Residence</p>
              </div>
            )}
          </div>
        </div>

        {/* <div className="project-pictures-display">
        <div>
          {" "}
          <div
            className={`project-img-div-big${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <img src={house} alt="house" className="project-imgs" />
          </div>
          {hovered && (
            <div className="overlay">
              <div className="project-title">Katara Towers</div>
              <div className="project-description">
                Fairmont & Raffles Lusail Hotel & Residences
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="project-img-div">
            <img src={house} alt="house" className="project-imgs" />
          </div>
          <div className="project-img-div">
            <img src={house} alt="house" className="project-imgs" />
          </div>
        </div>
      </div>
      <div className="project-second-img-display">
        <div className="project-img-div2">
          <img src={house} alt="house" className="project-imgs" />
        </div>
        <div className="project-img-div3">
          <img src={house} alt="house" className="project-imgs" />
        </div>
        <div className="project-img-div4">
          <img src={house} alt="house" className="project-imgs" />
        </div>
      </div> */}
        {/* Project pictures */}
      </div>
    </div>
  );
};

export default ProjectRough;
