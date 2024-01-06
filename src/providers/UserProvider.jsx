import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const isLoggedIn = Boolean(user?.userType);
  const isAdmin = user?.userType.toLowerCase() === "admin";

  useEffect(() => {
    const checkSession = () => {
      if (!user) {
        return;
      }
      const auth = user.authentication;
      const exp = new Date(jwtDecode(auth).exp * 1000);
      if (exp < Date.now()) {
        setUser(null);
        navigate("/login");
      }
    };
    checkSession();
  }, [user, setUser, navigate]);

  const setUserOverride = (user) => {
    setUser(user);
    localStorage.removeItem("cart");
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
