import RecentHotelCard from "../../components/RecentHotelCard";
import { Typography, Box } from "@mui/material";
const Recent = ({ recentArr }) => {
  return (
    <>
      <Typography variant="h6">Recently Visited Hotels</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {recentArr.map((item, index) => (
          <Box key={"recent-" + index} style={{ margin: 10 }}>
            <RecentHotelCard
              {...item}
              imgUrl={item.thumbnailUrl}
              // price={item.finalPrice} TODO: check if price is always given
              city={item.cityName}
              rating={item.starRating}
              originalPrice={item.originalRoomPrice}
              date={item.visitDate}
              priceMax={item.priceUpperBound}
              priceMin={item.priceLowerBound}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Recent;
