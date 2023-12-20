import { useEffect, useState } from "react";
import { getFeatured } from "../services/user/featuredDeals";
import Divider from "@mui/material/Divider";
import HotelCard from "../components/HotelCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { getRecentlyVisited } from "../services/user/recentlyVisited";

const UHomePage = () => {
  const [featured, setFeatured] = useState([]);
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    const loadFeatured = async () => {
      const result = await getFeatured();
      setFeatured(result);
    };
    loadFeatured();
    const loadRecent = async () => {
      const result = await getRecentlyVisited(1);
      setRecent(result);
    };
    loadFeatured();
    loadRecent();
  }, []);

  return (
    <div>
      <Typography variant="h6">Featured Deals</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {featured.map((item, index) => (
          <div key={"recent-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.roomPhotoUrl}
              price={item.finalPrice}
              city={item.cityName}
              rating={item.hotelStarRating}
              originalPrice={item.originalRoomPrice}
            />
          </div>
        ))}
      </Box>
      <Divider light style={{ marginBottom: 20 }} />
      <Typography variant="h6">Recently Visited Hotels</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {recent.map((item, index) => (
          <div key={"featured-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.thumbnailUrl}
              // price={item.finalPrice} TODO: check if price is always given
              city={item.cityName}
              rating={item.starRating}
              originalPrice={item.originalRoomPrice}
              date={item.visitDate}
            />
          </div>
        ))}
      </Box>
    </div>
  );
};
export default UHomePage;
