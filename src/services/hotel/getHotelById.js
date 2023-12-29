import { BASE_URL } from "../api-config";

const getHotelById = async (id) => {
  return fetch(BASE_URL + `/api/hotels/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getHotelById };
