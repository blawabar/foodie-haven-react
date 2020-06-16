/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react";

import "./CarouselContainer.scss";

import { CarouselSlide } from "components";

const CarouselContainer = ({ slides }) => {
  const carouselSlideRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newSlideIndex = slideIndex + 1;

      if (newSlideIndex === slides.length) {
        setSlideIndex(0);
      } else {
        setSlideIndex(newSlideIndex);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [slideIndex]);

  const generateStyle = (slideIndex) => {
    let style = {
      transform: `translateX(-${slideIndex * 100}%)`,
      transition: slideIndex === 0 ? "none" : "transform ease-in-out 0.4s",
    };

    return style;
  };

  const renderSlides = (slides) => {
    const lastIndex = slides.length - 1;

    return slides.map((slide, index) => {
      const type = index === lastIndex ? "first-cloned" : "normal";
      return <CarouselSlide type={type} key={index} {...slide} />;
    });
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-container__slide-holder"
        ref={carouselSlideRef}
        style={generateStyle(slideIndex)}
      >
        {renderSlides(slides)}
      </div>
    </div>
  );
};

export default CarouselContainer;
