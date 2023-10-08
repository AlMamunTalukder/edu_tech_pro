/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

import EventCards from "./EventCards";
import { useLoaderData } from "react-router-dom";

const Events = () => {
  const educations = useLoaderData();
  return (
    <div>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 px-14 w-full">
          {educations?.map((education) => (
            <EventCards key={education.id} education={education}></EventCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
