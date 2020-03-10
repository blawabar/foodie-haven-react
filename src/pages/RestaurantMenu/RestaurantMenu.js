import React from "react";

import "./RestaurantMenu.scss";

import PageHeading from "../../components/PageHeading/";
import Animator from "../../components/Animator";

import DishesMenuContainer from "../../components/DishesMenuContainer";

const RestaurantMenu = () => {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__wrapper">
        <Animator>
          <PageHeading large>discover our menu</PageHeading>
        </Animator>
        <DishesMenuContainer />
      </div>
    </section>
  );
};

export default RestaurantMenu;
