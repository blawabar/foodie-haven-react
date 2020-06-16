import React, { lazy } from "react";

import { Switch, Route } from "react-router-dom";

import { PATHS } from "../../constants";

const Home = lazy(() => import("../../pages/Home"));
const RestaurantMenu = lazy(() => import("../../pages/RestaurantMenu"));
const Events = lazy(() => import("../../pages/Events"));
const EventDetails = lazy(() => import("../../pages/EventDetails"));
const Chef = lazy(() => import("../../pages/Chef"));
const Gallery = lazy(() => import("../../pages/Gallery"));
const Contact = lazy(() => import("../../pages/Contact"));
const ErrorInfo = lazy(() => import("../../pages/ErrorInfo"));

const PageHolder = () => {
  return (
    <>
      <Switch>
        <Route exact strict path={PATHS.HOME} component={Home} />
        <Route exact strict path={PATHS.MENU} component={RestaurantMenu} />
        <Route exact strict path={PATHS.EVENTS} component={Events} />
        <Route
          exact
          strict
          path={PATHS.EVENT_DETAILS}
          component={EventDetails}
        />
        <Route exact strict path={PATHS.CHEF} component={Chef} />
        <Route exact strict path={PATHS.GALLERY} component={Gallery} />
        <Route exact strict path={PATHS.CONTACT} component={Contact} />
        <Route component={ErrorInfo} />
      </Switch>
    </>
  );
};

export default PageHolder;
