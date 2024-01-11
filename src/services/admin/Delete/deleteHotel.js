import { BASE_URL } from "../../api-config";

const deleteHotel = async (cityId, hotelId, auth) => {
  return fetch(BASE_URL + `/api/cities/${cityId}/hotels/${hotelId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  })
    .then((response) => {
      if (response.status === 204) {
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

export { deleteHotel };
