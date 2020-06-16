import React from "react";

import "./CarouselSlide.scss";

import { PageHeading, PageParagraph } from "components";

const CarouselSlide = ({ type, img, title, description }) => {
  return (
    <div className="carousel-slide" data-type={type}>
      <div className="carousel-slide__image-container">
        <img src={require(`../../images/${img}`)} alt={title} />
      </div>
      <div className="carousel-slide__info">
        <PageHeading small>{title}</PageHeading>
        <PageParagraph>{description}</PageParagraph>
      </div>
    </div>
  );
};

export default CarouselSlide;
