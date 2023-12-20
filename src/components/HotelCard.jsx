import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Button from "./Button";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";

const HotelCard = ({
  onClick,
  imgUrl,
  alt,
  title,
  description,
  rating,
  originalPrice,
  finalPrice,
  discount,
  hotelName,
  city,
  price,
}) => {
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardActionArea onClick={onClick}>
        <CardMedia component="img" height="140" image={imgUrl} alt={alt} />
      </CardActionArea>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Rating value={rating} size="small" precision={0.25} readOnly />
        <Typography fontSize={12} color="text.secondary">
          {hotelName}, {city}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            {discount ? (
              <>
                <Typography
                  component="span"
                  style={{ textDecoration: "line-through" }}
                  color="text.secondary"
                >
                  ${originalPrice}
                </Typography>
                <Typography
                  component="span"
                  color="success.main"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  ${finalPrice}
                </Typography>
                <Typography color="success.main" fontSize={12}>
                  Save {discount * 100}%
                </Typography>
              </>
            ) : (
              <Typography
                color="success.main"
                style={{ fontWeight: "bold" }}
                component="span"
              >
                ${price}
              </Typography>
            )}
          </Box>
          <Button label="See details" />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
