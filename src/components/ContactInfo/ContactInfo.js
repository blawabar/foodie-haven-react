import React from "react";
import PropTypes from "prop-types";

import "./ContactInfo.scss";

import { PageHeading } from "components";

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

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ContactInfo;
