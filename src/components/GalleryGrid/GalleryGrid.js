import React from "react";
import PropTypes from "prop-types";

import "./GalleryGrid.scss";

import { Animator } from "components";

const GalleryGrid = ({ images }) => {
  const generateImageContent = (images) => {
    if (Array.isArray(images) && images.length > 0) {
      return images.map((imageName, index) => {
        return (
          <Animator key={index}>
            <img src={require(`../../images/${imageName}`)} alt={imageName} />
          </Animator>
        );
      });
    }

    return null;
  };
  return (
    <section className="gallery-grid">{generateImageContent(images)}</section>
  );
};

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default GalleryGrid;
