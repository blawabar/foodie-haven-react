import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./EventItem.scss";

import { PageParagraph } from "components";

const EventItem = ({ id, img, title, date, excerpt }) => {
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

EventItem.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default EventItem;
