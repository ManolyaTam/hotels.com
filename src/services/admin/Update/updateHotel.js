import { BASE_URL, formatDate } from "../../api-config";

const updateHotel = async (
  auth,
  hotelId,
  hotelName,
  hotelOwner,
  rooms,
  starRating,
  description,
  latitude,
  longitude,
) => {
  return fetch(BASE_URL + `/api/hotels/${hotelId}`, {
    method: "PUT",
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
      latitude: 0,
      longitude,
      modificationDate: formatDate(),
    }),
  })
    .then((response) => {
      if (response.status === 200 || response.status === 204) {
        return { status: "success" };
      } else if (response.status === 404) {
        return { status: "not found" };
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

export { updateHotel };
