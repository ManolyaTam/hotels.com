import { BASE_URL } from "../../api-config";

const searchCities = async (auth, searchQuery) => {
  return fetch(BASE_URL + `/api/cities?searchQuery=${searchQuery}`, {
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

export { searchCities };

const transformData = (data) => {
  return data.map((item) => ({
    ...item,
    city: item.name,
  }));
};
