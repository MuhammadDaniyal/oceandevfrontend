import classes from "./ContactInfo.module.css";
//icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
// import { FaLocationDot } from "react-icons/fa";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";

const ContactInfo = () => {
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
          <p>ABC Road, Common gali, Karachi.</p>
        </div>
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
