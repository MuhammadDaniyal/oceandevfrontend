import React from "react";

import classes from "./Footer.module.css";
import { FaSquareFacebook, FaYoutube, FaLinkedin, FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const Footer = () => {

  return (
    <>
      <div className={classes.footer}>
        <h2 className={classes.footerheading}>Ocean <span>Dev</span></h2>
        <p className={classes.footerpara}>
        Diving into the Future: Ocean Dev presents extraordinary AI events, unlocking the potential of artificial intelligence.
        </p>
        <div className={classes["footer-links"]}>
          <div>
            <span>
              Home
            </span>
            <span>
              About
            </span>
            <span>Event</span>
            <span>Contact Us</span>
          </div>
        </div>
        <div className={classes.contact}>
          <span>
            <FaPhone style={{ margin: "0 10px 0 20px" }} />
            (92-21) 99261261-8
          </span>
          <span>
            <FaLocationDot style={{ margin: "0 10px 0 20px" }} />
            24.9324° N, 67.1127° E
          </span>
          <span>
            <IoMail style={{ margin: "0px 10px 0px 20px" }} />
            registrar@neduet.edu.pk
          </span>
        </div>
        <div className={classes["social-handles"]}>
          <FaSquareFacebook />
          <FaYoutube />
          <FaLinkedin />
        </div>
      </div>
      <div className={classes.copyright}>
        <p>NED © 2023, All rights reserved - Powered by OceanDev Corp.</p>
      </div>
    </>
  )
};

export default Footer;
