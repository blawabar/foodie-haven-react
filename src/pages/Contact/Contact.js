import React from "react";

import "./Contact.scss";

import PageHeading from "../../components/PageHeading";

const contactDetailsData = [
  {
    title: "Reservations",
    content: ["Please call", "(00) 123-456-789"]
  },
  {
    title: "Address",
    content: ["Street Name, Number", "City Name, Postal Code, Country Name"]
  },
  {
    title: "Opening hours",
    content: ["Mon-Thurs: 10:00 - 23:00", "Fri-Sun: 11:00 - 02:00"]
  }
];

// It will be moved into a separate component later on
const ContactInfo = ({ title, content }) => {
  return (
    <div className="contact-info">
      <PageHeading small>{title}</PageHeading>
      {content.map((text, index) => {
        return (
          <p className="contact-info__content" key={index}>
            {text}
          </p>
        );
      })}
    </div>
  );
};

// export default ContactInfo;

const Contact = () => {
  return (
    <section className="contact">
      <PageHeading large>get in touch with us</PageHeading>
      <section className="contact__details">
        {/* Add ContactInfo components */}
        {contactDetailsData.map((detail, index) => {
          return <ContactInfo {...detail} key={index} />;
        })}
      </section>
      <PageHeading small>send us a message</PageHeading>
      <form className="contact__form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit">send message</button>
      </form>
    </section>
  );
};

export default Contact;
