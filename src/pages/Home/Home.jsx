import Divider from "@mui/material/Divider";
import useFetchUserHome from "../../hooks/useFetchUserHome";
import { useEffect, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { jwtDecode } from "jwt-decode";
import Featured from "./Featured";
import Recent from "./Recent";
import Trending from "./Trending";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const { featured, recent, trending } = useFetchUserHome();

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
  return (
    <div>
      <Featured featuredArr={featured} />
      <Divider light style={{ marginBottom: 20 }} />
      {user && (
        <>
          <Recent recentArr={recent} />
          <Divider light style={{ marginBottom: 20 }} />
        </>
      )}
      <Trending trendingArr={trending} />
    </div>
  );
};
export default Home;
