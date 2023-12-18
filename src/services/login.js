import { BASE_URL } from "./api-config";
import { jwtDecode } from "jwt-decode";

const login = async (username, password) => {
  return await fetch(`${BASE_URL}/api/auth/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "text/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then(async (response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 400 || response.status === 401) {
        return { status: "failed", statusCode: response.status };
      } else {
        throw new Error("unexpected response", response.status);
      }
    })
    .then((body) => {
      const auth = body.authentication;
      const decoded = jwtDecode(auth);
      return {
        status: "success",
        firstName: decoded.given_name,
        lastName: decoded.family_name,
        userType: decoded.userType,
        authentication: body.authentication,
      };
    })
    .catch((error) => {
      console.error("ERROR", error);
      return {
        status: "error",
      };
    });
};

export default login;
