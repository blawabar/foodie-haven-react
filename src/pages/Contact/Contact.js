import React from "react";

import "./Contact.scss";

import PageHeading from "../../components/PageHeading";
import ContactInfo from "../../components/ContactInfo";
import ContactForm from "../../components/ContactForm";

const CONTACT_DETAILS_DATA = [
  {
    title: "Reservations",
    content: ["Please call", "(00) 123-456-789"],
  },
  {
    title: "Address",
    content: ["Street Name, Number", "City Name, Postal Code, Country Name"],
  },
  {
    title: "Opening hours",
    content: ["Mon-Thurs: 10:00 - 23:00", "Fri-Sun: 11:00 - 02:00"],
  },
];

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
