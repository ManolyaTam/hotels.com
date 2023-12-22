import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
