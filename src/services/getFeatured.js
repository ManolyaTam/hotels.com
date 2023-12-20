import { BASE_URL } from "./api-config";

const getFeatured = () => {
  return fetch(BASE_URL + "/api/home/featured-deals")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });
};

export default getFeatured;
