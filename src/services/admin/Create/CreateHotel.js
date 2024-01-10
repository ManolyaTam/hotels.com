import { BASE_URL } from "../../api-config";

const CreateHotel = async (
  auth,
  cityId,
  hotelName,
  hotelOwner,
  rooms,
  starRating,
  description,
  latitude,
  longitude,
) => {
  return fetch(BASE_URL + `/api/cities/${cityId}/hotels`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: hotelName,
      hotelOwner,
      rooms,
      starRating,
      description,
      latitude,
      longitude,
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

export { CreateHotel };
