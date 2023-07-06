import React from "react";
import Layout from "../../Layout";
import classes from "./ContactUs.module.css";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs = () => {
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
              <ContactInfo />
            </div>
            <div className={classes.rightDiv}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
