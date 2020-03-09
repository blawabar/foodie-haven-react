import React from "react";

import "./PageHeading.scss";

class Modifiers {
  static IS_SMALL = "--is-small";
  static IS_NORMAL = "--is-normal";
  static IS_LARGE = "--is-large";
}
const BASE_CLASS_NAME = "page-heading";

const PageHeading = props => {
  const { children, ...scales } = props;

  const generateClassName = scales => {
    const { small, normal, large } = scales;
    let modifier;

    if (small) {
      modifier = Modifiers.IS_SMALL;
    } else if (normal) {
      modifier = Modifiers.IS_NORMAL;
    } else if (large) {
      modifier = Modifiers.IS_LARGE;
    }

    return modifier
      ? `${BASE_CLASS_NAME} ${BASE_CLASS_NAME}${modifier}`
      : BASE_CLASS_NAME;
  };

  return <h2 className={generateClassName(scales)}>{children}</h2>;
};

export default PageHeading;
