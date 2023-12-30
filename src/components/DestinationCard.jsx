import { Card, CardContent, CardMedia, Box, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";

const DestinationCard = ({
  onClick,
  imgUrl,
  alt,
  country,
  city,
  description,
}) => {
  return (
    <Card sx={{ maxWidth: 470 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height="280" image={imgUrl} alt={alt} />
      </CardActionArea>
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
