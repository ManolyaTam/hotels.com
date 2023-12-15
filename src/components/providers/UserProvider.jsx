import { createContext, useState } from "react";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const setUserOverride = (user) => {
    setUser(user);

    if (user === null) {
      localStorage.removeItem("user");
    } else {
      localStorage.setItem("user", JSON.stringify(user));
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser: setUserOverride }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
