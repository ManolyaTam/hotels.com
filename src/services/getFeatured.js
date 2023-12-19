import { BASE_URL } from "./api-config";

const getFeatured = () => {
  fetch(BASE_URL + "/api/home/featured-deals")
    .then((response) => response.json())
    .then((data) => {
      console.dir(data);
    })
    .catch((error) => {
      // Handle any errors here
      console.error(error);
    });
};

export default getFeatured;
