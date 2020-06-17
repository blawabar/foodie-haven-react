import React from "react";

import "./Gallery.scss";

import { PageHeading, MasonryGrid, Animator } from "components";

import { GALLERY_IMAGES } from "app-constants";

const Gallery = () => {
  return (
    <section className="gallery">
      <PageHeading large>Food and Restaurant Gallery</PageHeading>
      <Animator>
        <MasonryGrid images={GALLERY_IMAGES}></MasonryGrid>
      </Animator>
    </section>
  );
};

export default Gallery;
