import React from "react";
import Layout from "../../Layout";
import classes from "./ContactUs.module.css";
import ContactInfo from "./ContactInfo";

const ContactUs = () => {
  return (
    <Layout>
      <div className={classes.containerDiv}>
        <div className={classes.contactDiv}>
          <div className={classes.leftDiv}>
            <ContactInfo />
          </div>
          <div className={classes.rightDiv}></div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
