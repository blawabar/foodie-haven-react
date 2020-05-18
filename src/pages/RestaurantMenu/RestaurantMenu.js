import React from "react";

import "./RestaurantMenu.scss";

import PageHeading from "../../components/PageHeading/";

import DishesMenuContainer from "../../components/DishesMenuContainer";

const RestaurantMenu = () => {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__wrapper">
        <PageHeading large>discover our menu</PageHeading>
        <DishesMenuContainer />
      </div>
    </section>
  );
};

export default RestaurantMenu;
