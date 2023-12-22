import { BASE_URL } from "../api-config";

const getFeatured = async () => {
  return fetch(BASE_URL + "/api/home/featured-deals")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getFeatured };
