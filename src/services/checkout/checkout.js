import { BASE_URL } from "../api-config";

const checkout = async (checkoutData, auth) => {
  return await fetch(`${BASE_URL}/api/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth}`,
    },
    body: JSON.stringify(checkoutData),
  })
    .then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error(
          `unexpected response ${response.status} ${response.statusText}`,
        );
      }
    })
    .then((res) => {
      return { status: "succuess", res };
    })
    .catch((error) => {
      return {
        status: "error",
        error: error,
      };
    });
};

export { checkout };
