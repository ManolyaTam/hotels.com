import { BASE_URL, formatDate } from "../../api-config";

const UpdateCity = async (
  auth,
  cityId,
  cityName,
  country,
  postOffice,
  hotels,
) => {
  return fetch(BASE_URL + `/api/cities/${cityId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: cityName,
      country: country,
      postOffice: postOffice,
      hotels: hotels,
      modificationDate: formatDate(),
    }),
  })
    .then((response) => {
      if (response.status === 200) {
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

export { UpdateCity };
