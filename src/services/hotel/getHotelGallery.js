import { BASE_URL } from "../api-config";

const getHotelGallery = async (id) => {
  return fetch(BASE_URL + `/api/hotels/${id}/gallery`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getHotelGallery };
