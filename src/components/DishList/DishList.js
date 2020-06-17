import React from "react";
import PropTypes from "prop-types";

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

DishList.propTypes = {
  dishes: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DishList;
