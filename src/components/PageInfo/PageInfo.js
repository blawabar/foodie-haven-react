import React from "react";

import "./PageInfo.scss";

const CLASS_PREFIX = "page-info__message";
const CLASS_SUFFIX = "--is-error";

const PageInfo = ({ children, error }) => {
  const className = error
    ? `${CLASS_PREFIX} ${CLASS_PREFIX}${CLASS_SUFFIX}`
    : CLASS_PREFIX;

  return (
    <div className="page-info">
      <h1 className={className}>{children}</h1>
    </div>
  );
};

export default PageInfo;
