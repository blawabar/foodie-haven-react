import React from "react";

import "./DishMenu.scss";

import PageHeading from "../PageHeading";
import Animator from "../Animator";
import DishList from "../DishList";

const DishMenu = ({ type, dishes }) => {
  return (
    <section className="dish-menu">
      <Animator>
        <PageHeading normal>{type}</PageHeading>
      </Animator>
      <DishList dishes={dishes} />
    </section>
  );
};

export default DishMenu;
