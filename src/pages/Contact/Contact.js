import React from "react";

import "./Contact.scss";

import { PageHeading, ContactInfo, ContactForm } from "components";

import { CONTACT_DETAILS_DATA } from "app-constants";

const renderContactDetails = (data) =>
  data.map((detail, index) => {
    return <ContactInfo {...detail} key={index} />;
  });

const Contact = () => {
  return (
    <section className="contact">
      <PageHeading large>get in touch with us</PageHeading>
      <section className="contact__details">
        {renderContactDetails(CONTACT_DETAILS_DATA)}
      </section>
      <PageHeading small>send us a message</PageHeading>
      <ContactForm />
    </section>
  );
};

export default Contact;
