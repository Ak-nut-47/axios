import axios from "axios";



export const getRestaurants = (params = {}) => {
    console.log(params)
    return axios.get(`http://localhost:8080/restaurants`, {
        params: {
            _page: params.page,
            _limit: params.limit,
            _sort: params.sort,
            _order: params.order
        }
    })
};