import { BASE_URL } from "./api-config";

const login = async (username, password) => {
  return await fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "text/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400) {
        alert("Bad Request, password and username are required...");
        return;
      } else if (response.status === 401) {
        alert(
          "unautherized???, check email password combination and try again?",
        );
        return;
      } else {
        throw new Error(
          "unexpected response",
          response.status,
          response.statusText,
        );
      }
    })
    .then((body) => {
      console.log(body.userType); // TODO: add to useContext
      // TODO: get auth token
    })
    .catch((error) => {
      console.error(error);
    });
};

export default login;
