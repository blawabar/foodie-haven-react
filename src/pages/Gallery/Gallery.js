import React from "react";

import "./Gallery.scss";

import { PageHeading, MasonryGrid, Animator } from "components";

const IMAGES = [
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
  "catering_640.jpg",
];

const Gallery = () => {
  return (
    <section className="gallery">
      <PageHeading large>Food and Restaurant Gallery</PageHeading>
      <Animator>
        <MasonryGrid images={IMAGES}></MasonryGrid>
      </Animator>
    </section>
  );
};

export default Gallery;
