/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const EventCards = ({ education }) => {
  const { id, name, image, price, short_description } = education || {};
  return (
    <div>
      <div className="relative flex w-90 flex-col rounded-xl bg-clip-border  shadow-md">
        <div className="relative overflow-hidden rounded-t-md">
          <img src={image} className="h-[244px] w-full object-cover" />
        </div>
        <div className="p-6 flex-grow">
          <div className="mb-2 flex items-center justify-between ">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {name}
            </p>
          </div>
          <div>
            <p>Price: ${price}</p>
            <br />
            <p className="text-justify">{short_description}</p>
          </div>
        </div>
        <div className="text-center mb-3">
          <Link to={`/details/${id}`}>
            <button className="btn btn-wide hover:bg-green-400 hover:text-black">
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCards;
