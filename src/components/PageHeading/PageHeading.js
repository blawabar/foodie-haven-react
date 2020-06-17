import React from "react";
import PropTypes from "prop-types";

import "./PageHeading.scss";

const SCALE_MODIFIERS = Object.freeze({
  IS_SMALL: "--is-small",
  IS_NORMAL: "--is-normal",
  IS_LARGE: "--is-large",
});

const BASE_CLASS_NAME = "page-heading";

const PageHeading = (props) => {
  const { children, ...scales } = props;

  const generateClassName = (scales) => {
    const { small, normal, large } = scales;
    let modifier;

    if (small) {
      modifier = SCALE_MODIFIERS.IS_SMALL;
    } else if (normal) {
      modifier = SCALE_MODIFIERS.IS_NORMAL;
    } else if (large) {
      modifier = SCALE_MODIFIERS.IS_LARGE;
    }

    return modifier
      ? `${BASE_CLASS_NAME} ${BASE_CLASS_NAME}${modifier}`
      : BASE_CLASS_NAME;
  };

  return <h2 className={generateClassName(scales)}>{children}</h2>;
};

PageHeading.defaultProps = {
  normal: true,
};

PageHeading.propTypes = {
  children: PropTypes.string.isRequired,
  small: PropTypes.bool,
  normal: PropTypes.bool,
  large: PropTypes.bool,
};

export default PageHeading;
