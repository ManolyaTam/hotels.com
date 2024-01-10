import { BASE_URL } from "../../api-config";

const CreateCity = async (auth, cityName, country, postOffice, hotels) => {
  return fetch(BASE_URL + `/api/cities`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: cityName,
      country: country,
      postOffice: postOffice,
      hotels: hotels,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        return { status: "success" };
      } else {
        throw new Error(
          `unexpected response ${response.status} ${response.statusText}`,
        );
      }
    })
    .catch((error) => {
      return {
        status: "error",
        error: error,
      };
    });
};

export { CreateCity };
