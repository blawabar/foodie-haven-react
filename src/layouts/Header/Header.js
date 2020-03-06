import React from "react";

import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header className="main-header">
      <div className="main-header__glass-pane">
        <h1 className="main-header__intro-heading">foodie haven</h1>
        {/* <p className="main-header__catchline">wide option of choice</p> */}
        <p className="main-header__catchline">
          Delicious recipes and wide option of choice
        </p>
        <Link to="/menu/">check our menu</Link>
      </div>
    </header>
  );
};

export default Header;
