import { useEffect, useState, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { getRecentlyVisited } from "../services/user/recentlyVisited";
import { getFeatured } from "../services/user/featuredDeals";

const useFetchUserHome = () => {
  const { user } = useContext(UserContext);
  const [featured, setFeatured] = useState([]);
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    const loadFeatured = async () => {
      const result = await getFeatured();
      setFeatured(result);
    };
    loadFeatured();
  }, []);
  useEffect(() => {
    if (user) {
      const loadRecent = async () => {
        const result = await getRecentlyVisited(
          user.userId,
          user.authentication,
        );
        setRecent(result);
      };
      loadRecent();
    }
  }, [user]);

  return { featured, recent };
};

export default useFetchUserHome;
