import React from "react";

import "./Events.scss";

import PageHeading from "../../components/PageHeading";
import EventItem from "../../components/EventItem";
import useFetch from "../../hooks/useFetch";

const API = "/data/events.json";

const Events = () => {
  const { isLoading, data, error } = useFetch(API);
  let content = null;

  const renderEventsContent = ({ events }) => {
    return (
      <section className="events">
        <PageHeading large>stay up to date with us</PageHeading>
        {events.map(event => {
          const { id } = event;
          return <EventItem key={id} {...event} />;
        })}
      </section>
    );
  };

  if (isLoading) {
    content = <h1>Loading content...</h1>;
  } else if (data) {
    content = renderEventsContent(data);
  } else if (error) {
    content = <h1>Loading error</h1>;
  }

  return content;
};

export default Events;
