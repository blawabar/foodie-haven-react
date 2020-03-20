import React from "react";

import "./Gallery.scss";

import PageHeading from "../../components/PageHeading";
import MasonryGrid from "../../components/MasonryGrid";

import Animator from "../../components/Animator";

const images = [
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

const Gallery = () => {
  return (
    <section className="gallery">
      <Animator>
        <PageHeading large>Food and Restaurant Gallery</PageHeading>
      </Animator>
      <Animator>
        <MasonryGrid images={images}></MasonryGrid>
      </Animator>
    </section>
  );
};

export default Gallery;
