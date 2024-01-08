import { BASE_URL, formatDate } from "../api-config";

const getAllRoomsInHotel = async (id) => {
  return fetch(
    BASE_URL + `/api/hotels/${id}/available-rooms?checkInDate=0&checkOutDate=0`,
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

const getHotelRoomsByDate = async (id, checkInDate, checkOutDate) => {
  const checkIn = formatDate(checkInDate);
  const checkOut = formatDate(checkOutDate);
  return fetch(
    BASE_URL +
      `/api/hotels/${id}/available-rooms?checkInDate=${checkIn}&checkOutDate=${checkOut}`,
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getAllRoomsInHotel, getHotelRoomsByDate };
