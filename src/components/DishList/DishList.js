import React from "react";

import "./DishList.scss";

import { Animator, TYPE, DishItem } from "components";

const DishList = ({ dishes }) => {
  return (
    <section className="dish-list">
      {dishes.map((dish, index) => {
        return (
          <Animator key={index} animationType={TYPE.PULL_UP}>
            <DishItem {...dish} />
          </Animator>
        );
      })}
    </section>
  );
};

export default DishList;
