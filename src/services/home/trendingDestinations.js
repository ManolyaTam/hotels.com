import { BASE_URL } from "../api-config";

const getTrending = async () => {
  return fetch(BASE_URL + "/destinations/trending")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getTrending };
