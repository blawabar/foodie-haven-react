import React from "react";

import "./RestaurantMenu.scss";

import PageHeading from "../../components/PageHeading/";

// 1. It will use MenuContainer component which accepts data gathered by a fetch request

const RestaurantMenu = () => {
  return (
    <section className="menu">
      <PageHeading large>discover our menu</PageHeading>
    </section>
  );
};

export default RestaurantMenu;
