/* eslint-disable react/prop-types */
const EventDetails = ({ education }) => {
  const { name, image, price, short_description } = education || {};
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <img src={image} alt="Album" />

        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price: ${price}</p>
          <br />
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Gallery</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
