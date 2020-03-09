import React from "react";

import "./GalleryGrid.scss";

const GalleryGrid = ({ images }) => {
  const generateImageContent = images => {
    if (Array.isArray(images) && images.length > 0) {
      return images.map((imageName, index) => {
        return (
          <img
            key={index}
            src={require(`../../images/${imageName}`)}
            alt={imageName}
          />
        );
      });
    }

    return null;
  };
  return (
    <section className="gallery-grid">{generateImageContent(images)}</section>
  );
};

export default GalleryGrid;
