import { BASE_URL } from "../api-config";

const searchHotels = async (
  checkInDate,
  checkOutDate,
  city,
  starRate,
  sort,
  numberOfRooms,
  adults,
  children,
) => {
  const queryParams = new URLSearchParams();

  const parameters = [
    ["checkInDate", checkInDate],
    ["checkOutDate", checkOutDate],
    ["city", city],
    ["starRate", starRate],
    ["sort", sort],
    ["numberOfRooms", numberOfRooms],
    ["adults", adults],
    ["children", children],
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
