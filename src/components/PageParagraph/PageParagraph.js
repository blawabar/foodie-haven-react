import React from "react";
import PropTypes from "prop-types";

import "./PageParagraph.scss";

const PageParagraph = ({ children }) => {
  return <p className="page-paragraph">{children}</p>;
};

PageParagraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default PageParagraph;
