import React from "react";

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

const MasonryGrid = ({ images }) => {
  return (
    <section className="masonry-grid">
      {images.map((imgSrc, indx) => {
        return <ImageCell key={indx} imgSrc={imgSrc} />;
      })}
    </section>
  );
};

export default MasonryGrid;
