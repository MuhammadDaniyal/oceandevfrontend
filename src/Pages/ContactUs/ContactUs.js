import React from "react";
import Layout from "../../Layout";
import classes from "./ContactUs.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

import { useState } from "react";
import SponsorForm from "./SponsorForm";

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
            {isSponserFormEnabled && <SponsorForm />}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
