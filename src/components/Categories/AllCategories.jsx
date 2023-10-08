/* eslint-disable react/prop-types */
import EventCards from "./EventCards";

const AllCategories = ({ educations }) => {
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

export default AllCategories;
