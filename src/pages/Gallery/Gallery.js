import React from "react";

import "./Gallery.scss";

import PageHeading from "../../components/PageHeading";
import MasonryGrid from "../../components/MasonryGrid";

import Animator from "../../components/Animator";

const Gallery = () => {
  return (
    <section className="gallery">
      <Animator>
        <PageHeading large>Food and Restaurant Gallery</PageHeading>
      </Animator>
      <Animator>
        <MasonryGrid></MasonryGrid>
      </Animator>
    </section>
  );
};

export default Gallery;
