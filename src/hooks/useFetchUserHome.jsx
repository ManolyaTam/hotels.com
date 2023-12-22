import { useEffect, useState, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { getRecentlyVisited } from "../services/home/recentlyVisited";
import { getFeatured } from "../services/home/featuredDeals";
import { getTrending } from "../services/home/trendingDestinations";

const useFetchUserHome = () => {
  const { user } = useContext(UserContext);
  const [featured, setFeatured] = useState([]);
  const [trending, setTrending] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const loadFeatured = async () => {
      const result = await getFeatured();
      setFeatured(result);
    };
    loadFeatured();
    const loadTrending = async () => {
      const result = await getTrending();
      setTrending(result);
    };
    loadTrending();
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

  return { featured, recent, trending };
};

export default useFetchUserHome;
