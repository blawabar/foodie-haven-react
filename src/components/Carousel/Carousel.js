/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import "./Carousel.scss";

import { CarouselContainer } from "components";

const Carousel = ({ slides }) => {
  const cloneSlidesData = (slides) => {
    // 1. Clone the first
    const firstCloned = slides[0];

    // 2. Insert the first after the last,
    slides.push(firstCloned);

    return slides;
  };

  return (
    <section className="carousel">
      <CarouselContainer slides={cloneSlidesData(slides)} />
    </section>
  );
};

export default Carousel;
