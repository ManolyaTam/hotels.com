import { BASE_URL } from "../../api-config";

const searchHotels = async (auth, searchQuery) => {
  return fetch(BASE_URL + `/api/hotels?searchQuery=${searchQuery}`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  })
    .then((response) => response.json())
    .then((data) => transformData(data))
    .catch((error) => {
      console.error(error);
    });
};

export { searchHotels };

const transformData = (data) => {
  return data.map((item) => ({
    ...item,
    hotel: item.name,
  }));
};
