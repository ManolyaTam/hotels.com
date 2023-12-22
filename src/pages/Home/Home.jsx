import Divider from "@mui/material/Divider";
import useFetchUserHome from "../../hooks/useFetchUserHome";
import { useEffect, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { jwtDecode } from "jwt-decode";
import Featured from "./Featured";
import Recent from "./Recent";

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const checkSession = () => {
      if (!user) {
        return;
      }
      const auth = user.authentication;
      const exp = new Date(jwtDecode(auth).exp * 1000);
      if (exp < Date.now()) {
        setUser(null);
      }
    };
    checkSession();
  }, [user, setUser]);
  const { featured, recent } = useFetchUserHome();
  return (
    <div>
      <Featured featuredArr={featured} />
      <Divider light style={{ marginBottom: 20 }} />
      {user && (
        <>
          <Recent recentArr={recent} />
          <Divider />
        </>
      )}
    </div>
  );
};
export default Home;
