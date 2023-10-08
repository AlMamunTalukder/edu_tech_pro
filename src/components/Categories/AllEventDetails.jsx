import { useLoaderData, useParams } from "react-router-dom";
import EventDetails from "./EventDetails";
import { useEffect, useState } from "react";

const AllEventDetails = () => {
  const educations = useLoaderData(); //data load

  const [education, setEducation] = useState({}); //data set

  const { id } = useParams();

  useEffect(() => {
    const eventDetails = educations?.find(
      (education) => education.id === Number(id)
    );
    setEducation(eventDetails);
  }, [id, educations]);

  return (
    <div>
      <EventDetails education={education}></EventDetails>
    </div>
  );
};

export default AllEventDetails;
