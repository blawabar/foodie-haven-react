import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import "./Header.scss";

import { PATH_MAP } from "../../constants";

const Header = ({ location }) => {
  const extractHeaderProps = () => {
    const pathName = location.pathname.replace("/", "");
    const isAtHome = pathName.length === 0;

    const catchPhrase = isAtHome
      ? PATH_MAP.home.phrase
      : PATH_MAP[pathName].phrase;

    return {
      catchPhrase,
      pathName: isAtHome ? "home" : pathName,
    };
  };

  const { catchPhrase, pathName } = extractHeaderProps();

  return (
    <header className={`main-header main-header--is-showing-${pathName}`}>
      <div className="main-header__glass-pane">
        <h1 className="main-header__intro-heading">foodie haven</h1>
        <p className="main-header__catchline">{catchPhrase}</p>
        <Link to="/menu">check our menu</Link>
      </div>
    </header>
  );
};

export default () => (
  <Switch>
    <Route component={Header} />
  </Switch>
);
