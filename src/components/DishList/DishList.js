import React from "react";

import "./DishList.scss";

import Animator from "../Animator";
import DishItem from "../DishItem";

const DishList = ({ dishes }) => {
  return (
    <section className="dish-list">
      {dishes.map((dish, index) => {
        return (
          <Animator key={index}>
            <DishItem {...dish} />
          </Animator>
        );
      })}
    </section>
  );
};

export default DishList;
