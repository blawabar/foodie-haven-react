import React, { useContext } from "react";

import "./DishesMenuContainer.scss";

import useFetch from "hooks/useFetch";

import {
  DishMenu,
  PageInfo,
  FilterContext as DishesFilterContext,
} from "components";

import { API, DISHES_FILTER_VALUES } from "app-constants";

const DishesMenuContainer = () => {
  const { filterValue } = useContext(DishesFilterContext);
  const { isLoading, data, error } = useFetch(API.DISHES);

  let content = null;

  if (isLoading) {
    content = <PageInfo>Loading content...</PageInfo>;
  } else if (data) {
    let { categories } = data;

    categories =
      filterValue === DISHES_FILTER_VALUES.ALL
        ? categories
        : categories.filter(({ type }) => type === filterValue);

    content = (
      <section className="dishes-menu-container">
        {categories.map(({ type, dishes }, index) => {
          return <DishMenu key={index} type={type} dishes={dishes} />;
        })}
      </section>
    );
  } else if (error) {
    content = (
      <PageInfo error>An error has occured - Please try again</PageInfo>
    );
  }

  return content;
};

export default DishesMenuContainer;
