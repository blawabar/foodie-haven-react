import React from "react";

import "./Gallery.scss";

import PageHeading from "../../components/PageHeading";
import asparagus from "../../images/jause_640.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <PageHeading large>Food and Restaurant Gallery</PageHeading>
      <section className="gallery__masonry-grid">
        {Array.from({ length: 16 }, item => asparagus).map((imgSrc, indx) => {
          return (
            <div className="image-frame" key={indx}>
              <img src={imgSrc} alt="mock-data" />
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Gallery;
