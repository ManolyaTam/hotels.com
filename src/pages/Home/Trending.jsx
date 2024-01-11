import { Typography, Box } from "@mui/material";
import { DestinationCard } from "../../components/index";

const Trending = ({ trendingArr }) => {
  return (
    <>
      <Typography variant="h6">Trending Destinations</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {trendingArr.map((item, index) => (
          <Box key={"trending-" + index} style={{ margin: 10 }}>
            <DestinationCard
              {...item}
              imgUrl={item.thumbnailUrl}
              city={item.cityName}
              country={item.countryName}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Trending;
