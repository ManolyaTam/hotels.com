import { BASE_URL } from "../../api-config";

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

export { CreateRoom };
