import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const isLoggedIn = Boolean(user?.userType);
  const isAdmin = user?.userType.toLowerCase() === "admin";
  const userAuth = user?.authentication;

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

    // run checkSession every 5 minutes
    const intervalId = setInterval(checkSession, 5 * 60 * 1000);

    return () => clearInterval(intervalId);
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
      value={{ user, setUser: setUserOverride, isLoggedIn, isAdmin, userAuth }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
