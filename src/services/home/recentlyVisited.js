import { BASE_URL } from "../api-config";

const getRecentlyVisited = async (userId, auth) => {
  return fetch(BASE_URL + `/api/home/users/${userId}/recent-hotels`, {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  })
    .then((response) => {
      if (response.status === 200) return response.json();
      else throw new Error("Unexpected response code");
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
      return { status: "error" };
    });
};

export { getRecentlyVisited };
