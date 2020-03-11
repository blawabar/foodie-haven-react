import React from "react";

import "./EventItem.scss";

import PageParagraph from "../../components/PageParagraph";
import { Link } from "react-router-dom";

const EventItem = ({ img, title, date, excerpt, id }) => {
  return (
    <div className="event-item">
      <div className="event-item__image-container">
        <img
          src={require(`../../images/${img}_640.jpg`)}
          alt=""
          className="event-item__image"
        />
      </div>
      <section className="event-item__info">
        <h3 className="event-item__title">{title}</h3>
        <h4 className="event-item__date">{date}</h4>
        <PageParagraph className="event-item__excerpt">{excerpt}</PageParagraph>
        <Link to={`/event-details/${id}`}>read more</Link>
      </section>
    </div>
  );
};

export default EventItem;
