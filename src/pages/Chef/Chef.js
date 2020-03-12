import React from "react";

import Carousel from "../../components/Carousel";
import PageHeading from "../../components/PageHeading";
import PageParagraph from "../../components/PageParagraph";

import "./Chef.scss";

const slides = [
  {
    img: "service_640.jpg",
    title: "Preparing for the work",
    description:
      "Eius error consequatur ex! Nemo fugiat nisi dolores neque dolorem inventore quo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iusto?"
  },
  {
    img: "cook_640.jpg",
    title: "Fighting with vegetables",
    description:
      "Eius error consequatur ex! Nemo fugiat nisi dolores neque dolorem inventore quo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iusto?"
  },
  {
    img: "serving_640.jpg",
    title: "The final stage",
    description:
      "Eius error consequatur ex! Nemo fugiat nisi dolores neque dolorem inventore quo ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iusto?"
  }
];

const Chef = () => {
  const cloneSlidesData = slides => {
    // 1. Clone the first
    const firstCloned = slides[0];

    // 2. Insert the first after the last,
    slides.push(firstCloned);

    return slides;
  };

  return (
    <section className="chef">
      <PageHeading large>meet our chef</PageHeading>
      <section className="chef__daily-routines">
        <PageHeading normal>just daily routines</PageHeading>
        <Carousel slides={cloneSlidesData(slides)}></Carousel>
      </section>
      <section className="chef__detailed-info">
        <PageHeading normal>his secret of success</PageHeading>
        <PageParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
          commodi eum fugiat rerum enim autem dolore minus accusamus ex odit,
          explicabo nostrum dignissimos deserunt hic.
        </PageParagraph>
        <PageParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea in
          facilis, quasi optio corrupti rerum amet unde culpa asperiores nisi,
          quis veniam autem voluptates totam tenetur quidem perspiciatis aut
          provident neque voluptatum. Perferendis recusandae magnam accusantium
          facilis, fuga sequi distinctio reprehenderit nisi laboriosam non
          doloribus maiores eius sint consectetur.
        </PageParagraph>
      </section>
    </section>
  );
};

export default Chef;
