import React from "react";

import "./DishesMenuContainer.scss";

import useFetch from "../../hooks/useFetch";
import DishMenu from "../DishMenu";

const API = "/data/dishes.json";

const DishesMenuContainer = () => {
  const { isLoading, data, error } = useFetch(API);

  let content = null;

  if (isLoading) {
    content = <h1>Loading content</h1>;
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
    content = <h1>An error has occured</h1>;
  }

  return content;
};

export default DishesMenuContainer;
