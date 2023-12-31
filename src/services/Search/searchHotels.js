import { BASE_URL } from "../api-config";

const searchHotels = async ({
  checkout,
  checkin,
  // city,
  starRate,
  // sort,
  numberOfRooms,
  adults,
  children,
  search,
}) => {
  const queryParams = new URLSearchParams();

  const parameters = [
    ["checkInDate", checkin],
    ["checkOutDate", checkout],
    ["numberOfRooms", numberOfRooms],
    ["adults", adults],
    ["children", children],
    ["search", search],
  ];

  parameters.forEach(([key, value]) => {
    if (value) queryParams.append(key, value);
  });

  return fetch(BASE_URL + `/api/home/search?${queryParams.toString()}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error(error);
    });
};

export { searchHotels };
