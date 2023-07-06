import classes from "./ContactInfo.module.css";
//icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

import { Button } from "@mui/material";

const ContactInfo = (props) => {
  const {
    isJoinUsFormEnabled,
    isSponserFormEnabled,
    handleJoinUsFormClick,
    handleSponserFormClick,
  } = props;

  return (
    <div className={classes.container}>
      <h1>Contact Information</h1>
      <p>Fill up the form and our Team will get back to you within 24 hours.</p>
      <div className={classes.contactInfo}>
        <div className={classes.contactInfoItem}>
          <BsFillTelephoneFill />
          <p>+92 313 0260405</p>
        </div>
        <div className={classes.contactInfoItem}>
          <IoMdMail />
          <p>oceanDev@gmail.com</p>
        </div>
        <div className={classes.contactInfoItem}>
          <IoLocationSharp />
          <p>ABC Road, Common gali, Karachi</p>
        </div>
      </div>
      <div className={classes.btnDiv}>
        <Button
          type="button"
          variant="contained"
          disabled={isJoinUsFormEnabled}
          onClick={handleJoinUsFormClick}
        >
          Join Us
        </Button>
        <Button
          type="button"
          variant="contained"
          disabled={isSponserFormEnabled}
          onClick={handleSponserFormClick}
        >
          Become a Sponser
        </Button>
      </div>
      <div className={classes.socialDiv}>
        <BiLogoFacebook />
        <BiLogoInstagram />
        <BiLogoTwitter />
        <BiLogoLinkedin />
      </div>
    </div>
  );
};
export default ContactInfo;
