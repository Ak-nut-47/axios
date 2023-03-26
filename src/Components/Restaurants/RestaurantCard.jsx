const RestaurantCard = ({
  id,
  name,
  type,
  rating,
  number_of_votes,
  price_starts_from,
  image,
}) => {
  return (
    <div style={{ border: "1px solid grey", margin: "15px" }}>
      <img src={image} alt={name} />
      <p>{id}</p>
      <p>Name : {name}</p>
      <p>Type : {type}</p>
      <p>Rating : {rating}</p>
      <p>Number of Votes : {number_of_votes}</p>
      <p>Price Starts From : {price_starts_from}</p>
    </div>
  );
};

export default RestaurantCard;
