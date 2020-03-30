import React from "react";

import "./ContactInfo.scss";

import PageHeading from "../PageHeading";

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

export default ContactInfo;
