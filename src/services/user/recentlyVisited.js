import { BASE_URL } from "../api-config";

const getRecentlyVisited = async (userId) => {
  return fetch(BASE_URL + `/users/${userId}/recent-hotels`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMSIsImdpdmVuX25hbWUiOiJNb2hhbWFkIiwiZmFtaWx5X25hbWUiOiJNaWxoZW0iLCJ1c2VyVHlwZSI6IkFkbWluIiwibmJmIjoxNzAzMDk1NzczLCJleHAiOjE3MDMwOTkzNzMsImlzcyI6Imh0dHBzOi8vYXBwLWhvdGVsLXJlc2VydmF0aW9uLXdlYmFwaS11YWUtZGV2LTAwMS5henVyZXdlYnNpdGVzLm5ldCJ9.oIAKVk6g9LBiOxaTRYXVHupegckx_ce8_SKO1Widl6s`,
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
