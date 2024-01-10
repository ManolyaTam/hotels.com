import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Rating,
} from "@mui/material";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const RecentHotelCard = ({
  imgUrl,
  alt,
  rating,
  hotelName,
  city,
  priceMin,
  priceMax,
  date,
  hotelId,
}) => {
  const dateTime = new Date(date);
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" height="140" image={imgUrl} alt={alt} />
      <CardContent>
        <Typography fontSize={15}>
          {hotelName}, {city}
        </Typography>

        <Rating value={rating} size="small" precision={0.25} readOnly />
        <Typography fontSize={12} color="text.secondary">
          {dateTime?.toLocaleDateString()} at{" "}
          {dateTime?.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>

        <Box display="block">
          <Typography
            color="success.main"
            style={{ fontWeight: "bold" }}
            component="span"
          >
            ${priceMin} - ${priceMax}
          </Typography>
        </Box>

        <Button
          label="See details"
          onClick={() => {
            navigate(`/hotel/${hotelId}`);
          }}
        />
      </CardContent>
    </Card>
  );
};

export default RecentHotelCard;
