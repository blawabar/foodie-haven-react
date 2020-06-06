import React, { lazy } from "react";

import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../../pages/Home"));
const RestaurantMenu = lazy(() => import("../../pages/RestaurantMenu"));
const Events = lazy(() => import("../../pages/Events"));
const Chef = lazy(() => import("../../pages/Chef"));
const Gallery = lazy(() => import("../../pages/Gallery"));
const Contact = lazy(() => import("../../pages/Contact"));
const ErrorInfo = lazy(() => import("../../pages/ErrorInfo"));

const PageHolder = () => {
  return (
    <>
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/menu" component={RestaurantMenu} />
        <Route exact strict path="/events" component={Events} />
        <Route exact strict path="/chef" component={Chef} />
        <Route exact strict path="/gallery" component={Gallery} />
        <Route exact strict path="/contact" component={Contact} />
        <Route component={ErrorInfo} />
      </Switch>
    </>
  );
};

export default PageHolder;
