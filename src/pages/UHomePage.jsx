import { useEffect, useState } from "react";
import getFeatured from "../services/getFeatured";
import HotelCard from "../components/HotelCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const UHomePage = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    const loadFeatured = async () => {
      const result = await getFeatured();
      setFeatured(result);
    };
    loadFeatured();
  }, []);

  return (
    <div>
      <Typography variant="h6">featured deals</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {featured.map((item, index) => (
          <div key={"featured-" + index} style={{ margin: 10 }}>
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
    </div>
  );
};
export default UHomePage;
