import React from "react";

import "./DishMenu.scss";

import { PageHeading, Animator, TYPE, DishList } from "components";

const DishMenu = ({ type, dishes }) => {
  return (
    <section className="dish-menu">
      <Animator animationType={TYPE.PULL_UP}>
        <PageHeading normal>{type}</PageHeading>
      </Animator>
      <DishList dishes={dishes} />
    </section>
  );
};

export default DishMenu;
