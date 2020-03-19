import React from "react";

import "./RestaurantMenu.scss";

import PageHeading from "../../components/PageHeading/";
import Animator, { TYPE } from "../../components/Animator";

import DishesMenuContainer from "../../components/DishesMenuContainer";

const RestaurantMenu = () => {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__wrapper">
        <Animator animationType={TYPE.PULL_UP}>
          <PageHeading large>discover our menu</PageHeading>
        </Animator>
        <DishesMenuContainer />
      </div>
    </section>
  );
};

export default RestaurantMenu;
