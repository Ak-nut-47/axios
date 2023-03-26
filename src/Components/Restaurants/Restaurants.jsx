import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import { reducer } from "./Reducer";
import RestaurantCard from "./RestaurantCard";
import { getRestaurants } from "../../Api/api";
import AddRestaurant from "./AddRestaurant";
// const getData = (url) => {
//   return axios.get(url);
// };

const initState = {
  loading: false,
  data: [],
  err: false,
};

export default function Restaurants() {
  const [state, dispatch] = useReducer(reducer, initState);
  const [page, setPage] = useState(1);
  const [totalItem, setTotalItem] = useState();
  const [order, setOrder] = useState("asc");
  useEffect(() => {
    dispatch({ type: "FETCH_LOADING" });
    getRestaurants({
      page: page,
      limit: 4,
      sort: "rating",
      order: "asc",
    })
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res?.data });
        setTotalItem(Number(res.headers["x-total-count"]));
      })
      .catch(() => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, [page, order]);

  const handleRestaurant = (data) => {
    axios
      .post(`http://localhost:8080/restaurants`, data)
      .then((res) => console.log(res));
  };

  const { data, err, loading } = state;
  return loading ? (
    <h1>Loading...</h1>
  ) : err ? (
    <h1>Something went wrong</h1>
  ) : (
    <>
      <AddRestaurant handleRestaurant={handleRestaurant} />
      <hr />
      <hr />
      <button onClick={() => setOrder("asc")}>Sort By Ascending</button>
      <button onClick={() => setOrder("desc")}>Sort By Descending</button>
      {data.map((restaurant) => (
        <RestaurantCard key={restaurant.id} {...restaurant} />
      ))}
      <div>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button disabled>{page}</button>
        <button
          disabled={page === Math.ceil(totalItem / 4)}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
