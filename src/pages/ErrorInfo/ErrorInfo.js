import React from "react";

import "./ErrorInfo.scss";

import { Link } from "react-router-dom";

const ErrorInfo = () => {
  return (
    <section className="error-info">
      <div className="error-info__card">
        <h1 className="error-info__code">404</h1>
        <h2 className="error-info__message">page not found</h2>
        <Link to="/" className="error-info__link-btn">
          back to the home page
        </Link>
      </div>
    </section>
  );
};

export default ErrorInfo;
