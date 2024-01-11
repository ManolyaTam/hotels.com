import { BASE_URL } from "../../api-config";

const getAllRoomsInHotel = async (id) => {
  return fetch(
    BASE_URL + `/api/hotels/${id}/rooms?checkInDate=0&checkOutDate=0`,
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getAllRoomsInHotel };
