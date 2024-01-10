import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";

const DestinationCard = ({ imgUrl, alt, country, city, description }) => {
  return (
    <Card sx={{ maxWidth: 470 }}>
      <CardMedia component="img" height="280" image={imgUrl} alt={alt} />
      <CardContent>
        <Typography variant="h5" color="text.primary">
          {city}, {country}
        </Typography>

        <Typography variant="body2" color="text.primary" gutterBottom>
          {description}
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        ></Box>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
