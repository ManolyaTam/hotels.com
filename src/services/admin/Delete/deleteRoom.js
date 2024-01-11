import { BASE_URL } from "../../api-config";

const deleteRoom = async (hotelId, roomId, auth) => {
  return fetch(BASE_URL + `/api/hotels/${hotelId}/rooms/${roomId}`, {
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

export { deleteRoom };
