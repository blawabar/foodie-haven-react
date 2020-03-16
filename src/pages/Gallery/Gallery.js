import React from "react";

import "./Gallery.scss";

import PageHeading from "../../components/PageHeading";
import asparagus from "../../images/jause_640.jpg";

const Gallery = () => {
  return (
    <section className="gallery">
      <PageHeading large>Food and Restaurant Gallery</PageHeading>
      <section className="gallery__masonry-grid">
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
        <div className="image-frame">
          <img src={asparagus} alt="asparagus_640.jpg" />
        </div>
      </section>
    </section>
  );
};

export default Gallery;
