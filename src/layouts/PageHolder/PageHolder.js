import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Menu from "../../pages/Menu";
import Events from "../../pages/Events";
import Chef from "../../pages/Chef";
import Gallery from "../../pages/Gallery";
import Contact from "../../pages/Contact";
import ErrorInfo from "../../pages/ErrorInfo";

const PageHolder = () => {
  return (
    <>
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/menu/" component={Menu} />
        <Route exact strict path="/events/" component={Events} />
        <Route exact strict path="/chef/" component={Chef} />
        <Route exact strict path="/gallery/" component={Gallery} />
        <Route exact strict path="/contact/" component={Contact} />
        <Route component={ErrorInfo} />
      </Switch>
    </>
  );
};

export default PageHolder;
