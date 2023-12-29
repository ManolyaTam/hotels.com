import { BASE_URL } from "../api-config";

const getHotelReviews = async (id) => {
  return fetch(BASE_URL + `/api/hotels/${id}/reviews`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getHotelReviews };
