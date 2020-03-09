import React from "react";

import "./Home.scss";

import PageHeading from "../../components/PageHeading";
import PageParagraph from "../../components/PageParagraph";
import GalleryGrid from "../../components/GalleryGrid";

const GALLERY_IMAGES = [
  "asparagus_640.jpg",
  "kitchen_640.jpg",
  "breakfast_640.jpg",
  "table_640.jpg"
];

const Home = () => {
  return (
    <section className="home">
      <PageHeading large>our restaurant</PageHeading>
      <PageParagraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ducimus
        voluptatem amet nobis sunt ea blanditiis consequatur exercitationem
        tempore! Quod delectus accusamus nostrum repellat nam sequi vero nemo.
      </PageParagraph>
      <PageParagraph>
        Aperiam fuga eaque sapiente quasi nisi quo beatae sunt sint atque, ipsum
        rem culpa maxime provident nulla voluptatem, dignissimos laboriosam
        eveniet aliquid. Laudantium ducimus distinctio, a deserunt delectus
        numquam pariatur totam consectetur necessitatibus facilis iusto cum
        quisquam nobis ipsa! Magnam blanditiis est molestiae reiciendis
        distinctio.
      </PageParagraph>
      <GalleryGrid images={GALLERY_IMAGES} />
    </section>
  );
};

export default Home;
