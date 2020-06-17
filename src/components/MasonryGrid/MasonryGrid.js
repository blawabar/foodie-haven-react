import React from "react";
import PropTypes from "prop-types";

import "./MasonryGrid.scss";

const ImageCell = ({ imgSrc }) => {
  return (
    <div className="image-cell">
      <img
        src={require(`../../images/${imgSrc}`)}
        alt={imgSrc.substring(0, imgSrc.indexOf("_"))}
      />
    </div>
  );
};

ImageCell.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

const MasonryGrid = ({ images }) => {
  return (
    <section className="masonry-grid">
      {images.map((imgSrc, indx) => {
        return <ImageCell key={indx} imgSrc={imgSrc} />;
      })}
    </section>
  );
};

MasonryGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default MasonryGrid;
