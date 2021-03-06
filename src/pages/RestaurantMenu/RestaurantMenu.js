import React from "react";

import "./RestaurantMenu.scss";

import {
  FilterList as DishesFilterList,
  PageHeading,
  DishesMenuContainer,
} from "components";

import { DISHES_FILTER_VALUES } from "app-constants";

const RestaurantMenu = () => {
  return (
    <section className="restaurant-menu">
      <div className="restaurant-menu__wrapper">
        <PageHeading large>discover our menu</PageHeading>
        <DishesFilterList
          initialValue={DISHES_FILTER_VALUES.ALL}
          filterValues={DISHES_FILTER_VALUES}
        >
          <DishesMenuContainer />
        </DishesFilterList>
      </div>
    </section>
  );
};

export default RestaurantMenu;
