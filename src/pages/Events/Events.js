import React from "react";

import "./Events.scss";

import { PageHeading, PageInfo, EventItem, Animator } from "components";

import useFetch from "hooks/useFetch";

import { API } from "app-constants";

const Events = () => {
  const { isLoading, data, error } = useFetch(API.EVENTS);
  let content = null;

  const renderEventsContent = ({ events }) => {
    return (
      <section className="events">
        <PageHeading large>stay up to date with us</PageHeading>
        {events.map((event) => {
          const { id } = event;
          return (
            <Animator key={id}>
              <EventItem {...event} />
            </Animator>
          );
        })}
      </section>
    );
  };

  if (isLoading) {
    content = <PageInfo>Loading content...</PageInfo>;
  } else if (data) {
    content = renderEventsContent(data);
  } else if (error) {
    content = (
      <PageInfo error>An error has occured - Please try again</PageInfo>
    );
  }

  return content;
};

export default Events;
