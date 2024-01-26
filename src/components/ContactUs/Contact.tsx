import React from "react";
import "./ContactUs.css";
import { IoCall } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa6";
const Contact = () => {
  return (
    <div className="Contact-us-main-div" id="contact-us">
      <div className="contact-sub-div-dsipaly">
        <div>
          <div>
            <IoCall className="contact-icon" />{" "}
          </div>
        </div>
        <div>
          <div className="contact-header">Phone Number</div>
          <div>+974 70088156</div>
          <div>+974 66040601</div>
        </div>
      </div>
      <div className="contact-hr"></div>
      <div className="contact-sub-div-dsipaly">
        <div>
          <div>
            <FaEnvelope className="contact-icon" />{" "}
          </div>
        </div>
        <div>
          <div className="contact-header">Email Address</div>
          <div>uc@regiscajeinteriors.com</div>
        </div>
      </div>
      <div className="contact-hr"></div>
      <div className="contact-sub-div-dsipaly">
        <div>
          <div>
            <MdLocationPin className="contact-icon" />{" "}
          </div>
        </div>
        <div>
          <div className="contact-header">Location</div>
          <div>
            Shop No 11 Retaj House (La Rose building) By Crazy Signal, Old Al
            Ghanim Doha, State of Qatar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
