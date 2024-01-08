import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Rating,
} from "@mui/material";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

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
  hotelId,
}) => {
  const navigate = useNavigate();
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
                  &nbsp;&nbsp;${finalPrice}
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
          <Button
            label="See details"
            onClick={() => {
              navigate(`/hotel/${hotelId}`);
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
