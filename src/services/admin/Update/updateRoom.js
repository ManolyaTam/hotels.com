import { BASE_URL, formatDate } from "../../api-config";
const updateRoom = async (
  auth,
  roomId,
  roomNumber,
  type,
  adults,
  children,
  price,
) => {
  return fetch(BASE_URL + `/api/rooms/${roomId}`, {
    method: "PUT",
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
      modificationDate: formatDate(),
    }),
  })
    .then((response) => {
      if (
        response.status === 204 ||
        response.status === 200 ||
        response.status === 201
      ) {
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

export { updateRoom };
