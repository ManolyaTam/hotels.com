import { BASE_URL, formatDate } from "../../api-config";
const CreateRoom = async (
  auth,
  hotelId,
  roomNumber,
  type,
  adults,
  children,
  price,
) => {
  return fetch(BASE_URL + `/api/hotels/${hotelId}/rooms`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      roomNumber,
      type,
      adults,
      children,
      cost: price,
      creationDate: formatDate(),
    }),
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

export { CreateRoom };
