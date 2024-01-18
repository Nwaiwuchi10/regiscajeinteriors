import React from "react";
import "./TopNavBar.css";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";
const TopNavBar = () => {
  return (
    <div className="Topnavbar">
      <div className="topnavbar-divs-display">
        <div>
          <div>
            <MdLocationPin className="topnav-icons" />
            <span>No 109 Doha, State of Qatar</span>{" "}
          </div>
        </div>
        <div>
          <div>
            <IoCall className="topnav-icons" />
            <span>+974 (70088156 / 66040601)</span>{" "}
          </div>
        </div>
        <div>
          <div>
            <FaEnvelope className="topnav-icons" />
            <span>regiscajedeluxinteriors@gmail.com</span>{" "}
          </div>
        </div>
      </div>
      <div className="topnav-hr"></div>
    </div>
  );
};

export default TopNavBar;
