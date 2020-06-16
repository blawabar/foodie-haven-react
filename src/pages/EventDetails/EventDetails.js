import React from "react";
import { Link } from "react-router-dom";

import "./EventDetails.scss";

import { PageHeading, PageParagraph, Animator, TYPE } from "components";
import pageImage from "images/jause_1280.jpg";
import { PATHS } from "app-constants";

const EventDetails = () => {
  return (
    <section className="event-details">
      <PageHeading large>A day with a regional cuisine</PageHeading>
      <span className="event-details__editor-info">June 21, 2019</span>
      <Animator animationType={TYPE.FADE_OUT}>
        <img src={pageImage} alt="" className="event-details__image" />
      </Animator>
      <Animator animationType={TYPE.PULL_UP}>
        <section className="event-details__content">
          <PageParagraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ea in
            facilis, quasi optio corrupti rerum amet unde culpa asperiores nisi,
            quis veniam autem voluptates totam tenetur quidem perspiciatis aut
            provident neque voluptatum. Perferendis recusandae magnam
            accusantium facilis, fuga sequi distinctio reprehenderit nisi
            laboriosam non doloribus maiores eius sint consectetur.
          </PageParagraph>
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
      </Animator>
      <Link className="event-details__back-btn" to={PATHS.EVENTS}>
        go back to events
      </Link>
    </section>
  );
};

export default EventDetails;
