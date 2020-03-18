import React from "react";

import "./DishesMenuContainer.scss";

import useFetch from "../../hooks/useFetch";
import DishMenu from "../DishMenu";
import PageInfo from "../../components/PageInfo";

const API = "/data/dishes.json";

const DishesMenuContainer = () => {
  const { isLoading, data, error } = useFetch(API);

  let content = null;

  if (isLoading) {
    content = <PageInfo>Loading content...</PageInfo>;
  } else if (data) {
    const { categories } = data;

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
