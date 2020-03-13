import React from "react";

import Carousel from "../../components/Carousel";
import PageHeading from "../../components/PageHeading";
import PageParagraph from "../../components/PageParagraph";

import useFetch from "../../hooks/useFetch";

import "./Chef.scss";

const API = "/data/chef.json";

const Chef = () => {
  const { data, isLoading, error } = useFetch(API);

  let content = null;

  if (isLoading) {
    content = <h1>Loading content...</h1>;
  } else if (data) {
    content = (
      <section className="chef">
        <PageHeading large>meet our chef</PageHeading>
        <section className="chef__daily-routines">
          <PageHeading normal>just daily routines</PageHeading>
          <Carousel {...data}></Carousel>
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
            provident neque voluptatum. Perferendis recusandae magnam
            accusantium facilis, fuga sequi distinctio reprehenderit nisi
            laboriosam non doloribus maiores eius sint consectetur.
          </PageParagraph>
        </section>
      </section>
    );
  } else if (error) {
    content = <h1>An error has occured</h1>;
  }

  return content;
};

export default Chef;
