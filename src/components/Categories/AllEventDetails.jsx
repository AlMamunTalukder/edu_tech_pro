import { useLoaderData } from "react-router-dom";
import EventDetails from "./EventDetails";

const AllEventDetails = () => {
  const educations = useLoaderData();

  return (
    <div>
      <EventDetails educations={educations}></EventDetails>
    </div>
  );
};

export default AllEventDetails;
