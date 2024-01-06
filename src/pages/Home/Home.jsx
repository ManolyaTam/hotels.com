import { Divider } from "@mui/material";
import useFetchUserHome from "../../hooks/useFetchUserHome";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import SearchForm from "../../components/SearchForm";
import Featured from "./Featured";
import Recent from "./Recent";
import Trending from "./Trending";

const Home = () => {
  const { user } = useContext(UserContext);
  const { featured, recent, trending } = useFetchUserHome();

  return (
    <div>
      <SearchForm />
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
