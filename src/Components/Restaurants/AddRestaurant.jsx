import { useReducer } from "react";

const initState = {
  name: "",
  type: "",
  rating: "",
  number_of_votes: "",
  price_starts_from: "",
  image: "",
};
const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      throw new Error("Action type is invalid");
    }
  }
};
export default function AddRestaurant({ handleRestaurant }) {
  const [state, dispatch] = useReducer(formReducer, initState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    handleRestaurant(state);
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    const payload = {
      name: name,
      value: value,
    };
    if (
      name === "number_of_votes" ||
      name === "price_starts_from" ||
      name === "rating"
    ) {
      payload.value = Number(value);
    }

    dispatch({
      type: "CHANGE_INPUT",
      payload: payload,
    });
  };
  const { name, type, rating, number_of_votes, price_starts_from, image } =
    state;
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>Add Restaurant</h1>
        <div>
          <input
            type="text"
            value={name}
            name="name"
            placeholder="Add Restaurant Name"
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <select name="type" id="" value={type} onChange={handleChange}>
            <option value="">select Restaurant Type</option>
            <option value="ethnic">Ethnic</option>
            <option value="cafe">Cafe</option>
            <option value="casual_dining">Casual Dining</option>
            <option value="fast_ food">Fast Food</option>
            <option value="fine_dining">Fine Dining</option>
          </select>
        </div>
        <br />
        <div>
          <select name="rating" id="" value={rating} onChange={handleChange}>
            <option value="">Select Rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5 </option>
          </select>
        </div>
        <br />
        <div>
          <input
            name="number_of_votes"
            type="text"
            placeholder="Add Number of votes"
            value={number_of_votes}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            name="price_starts_from"
            type="text"
            placeholder="Add Price Starts from"
            value={price_starts_from}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <input
            type="text"
            name="image"
            id=""
            placeholder="Add Image Url"
            value={image}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Add Restaurant" />
        </div>
      </form>
    </div>
  );
}
