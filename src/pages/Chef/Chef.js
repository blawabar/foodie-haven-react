import React from "react";

import Carousel from "../../components/Carousel";
import PageHeading from "../../components/PageHeading";
import PageParagraph from "../../components/PageParagraph";
import PageInfo from "../../components/PageInfo";

import Animator, { TYPE } from "../../components/Animator";

import useFetch from "../../hooks/useFetch";

import "./Chef.scss";

const API = "/data/chef.json";

const Chef = () => {
  const { data, isLoading, error } = useFetch(API);

  let content = null;

  if (isLoading) {
    content = <PageInfo>Loading content...</PageInfo>;
  } else if (data) {
    content = (
      <section className="chef">
        <PageHeading large>meet our chef</PageHeading>
        <Animator animationType={TYPE.PULL_UP}>
          <section className="chef__daily-routines">
            <PageHeading normal>just daily routines</PageHeading>
            <Carousel {...data}></Carousel>
          </section>
        </Animator>
        <Animator animationType={TYPE.PULL_UP}>
          <section className="chef__detailed-info">
            <PageHeading normal>his secret of success</PageHeading>
            <PageParagraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              commodi eum fugiat rerum enim autem dolore minus accusamus ex
              odit, explicabo nostrum dignissimos deserunt hic.
            </PageParagraph>
            <PageParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea
              in facilis, quasi optio corrupti rerum amet unde culpa asperiores
              nisi, quis veniam autem voluptates totam tenetur quidem
              perspiciatis aut provident neque voluptatum. Perferendis
              recusandae magnam accusantium facilis, fuga sequi distinctio
              reprehenderit nisi laboriosam non doloribus maiores eius sint
              consectetur.
            </PageParagraph>
          </section>
        </Animator>
      </section>
    );
  } else if (error) {
    content = (
      <PageInfo error>An error has occured - Please try again</PageInfo>
    );
  }

  return content;
};

export default Chef;
