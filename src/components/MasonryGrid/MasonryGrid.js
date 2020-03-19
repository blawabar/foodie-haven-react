import React from "react";

import "./MasonryGrid.scss";

// This is a temporary solution
// I'm going to use some automated mechanism for fetching img data statically

const masonryImages = [
  "kitchen_640.jpg",
  "asparagus_640.jpg",
  "cook_640.jpg",
  "breakfast_640.jpg",
  "table_640.jpg",
  "jause_640.jpg",
  "birthday_640.jpg",
  "catering_640.jpg",
  "kitchen_640.jpg",
  "asparagus_640.jpg",
  "cook_640.jpg",
  "breakfast_640.jpg",
  "table_640.jpg",
  "jause_640.jpg",
  "birthday_640.jpg",
  "catering_640.jpg"
];

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

const MasonryGrid = () => {
  return (
    <section className="masonry-grid">
      {masonryImages.map((imgSrc, indx) => {
        return <ImageCell key={indx} imgSrc={imgSrc} />;
      })}
    </section>
  );
};

export default MasonryGrid;
