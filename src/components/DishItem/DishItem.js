import React from "react";
import PropTypes from "prop-types";

import "./DishItem.scss";

import { PageParagraph } from "components";

const DishItem = ({ name, description, price }) => {
  return (
    <div className="dish-item">
      <header className="dish-item__info">
        <h3 className="dish-item__name">{name}</h3>
        <p className="dish-item__price">${price}</p>
      </header>
      <PageParagraph className="dish-item__description">
        {description}
      </PageParagraph>
    </div>
  );
};

DishItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default DishItem;
