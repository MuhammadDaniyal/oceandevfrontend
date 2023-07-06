import React from "react";
import Layout from "../../Layout";
import classes from "./ContactUs.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import { useState } from "react";
// import SponserForm from "./SponserForm";

const ContactUs = () => {
  const [isJoinUsFormEnabled, setIsJoinUsFormEnabled] = useState(true);
  const [isSponserFormEnabled, setIsSponserFormEnabled] = useState(false);

  const handleJoinUsFormClick = () => {
    setIsJoinUsFormEnabled(true);
    setIsSponserFormEnabled(false);
  };

  const handleSponserFormClick = () => {
    setIsJoinUsFormEnabled(false);
    setIsSponserFormEnabled(true);
  };

  return (
    <Layout>
      <div className={classes.containerDiv}>
        <div className={classes.mainDiv}>
          <div className={classes.headingDiv}>
            <h1>Contact Us</h1>
            <p>Want to Join us? Just write us a message!</p>
          </div>
          <div className={classes.contactDiv}>
            <div className={classes.leftDiv}>
              <ContactInfo
                isJoinUsFormEnabled={isJoinUsFormEnabled}
                isSponserFormEnabled={isSponserFormEnabled}
                handleJoinUsFormClick={handleJoinUsFormClick}
                handleSponserFormClick={handleSponserFormClick}
              />
            </div>
            <div className={classes.rightDiv}>
              {isJoinUsFormEnabled && <ContactForm />}
              {/* {isSponserFormEnabled && <SponserForm />} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
