import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const isLoggedIn = user?.userType;
  const isAdmin = user?.userType.toLowerCase() === "admin";
  const setUserOverride = (user) => {
    setUser(user);

    if (user === null) {
      localStorage.removeItem("user");
      navigate("/login");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  return (
    <UserContext.Provider
      value={{ user, setUser: setUserOverride, isLoggedIn, isAdmin }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
