import React from "react";
import PropTypes from "prop-types";

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

DishMenu.propTypes = {
  type: PropTypes.string.isRequired,
  dishes: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DishMenu;
