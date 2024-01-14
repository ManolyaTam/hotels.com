import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Container,
  Chip,
  Rating,
  CardActionArea,
} from "@mui/material";
import { Button } from "./index";
import { useNavigate } from "react-router-dom";

const DetailedRoomCard = ({
  imgUrl,
  alt,
  roomType,
  price,
  roomAmenities,
  hotelId,
  hotelName,
  rating,
  discount,
  city,
}) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ padding: "5px", border: "1px solid lightgrey", maxWidth: "300px" }}
    >
      <CardActionArea
        onClick={() => {
          navigate(`/hotel/${hotelId}`);
        }}
      >
        <CardMedia
          component="img"
          image={imgUrl}
          sx={{ objectFit: "cover", maxHeight: 200 }}
          alt={alt}
        />
      </CardActionArea>
      <CardContent>
        <Typography fontSize={15} color="text.secondary">
          {" "}
          <b>
            {hotelName}, {city}
          </b>
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          Room Type: <b>{roomType}</b>
        </Typography>
        <Rating readOnly value={rating} />

        <Box>
          <Typography>Services</Typography>
        </Box>
        {roomAmenities.map((service, index) => (
          <Box key={index}>
            <Container>
              <Typography fontSize={13}>
                <b>{service.name}</b>
              </Typography>
              <Typography fontSize={12}>{service.description}</Typography>
            </Container>
          </Box>
        ))}
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <Box>
            <Typography
              color="success.main"
              style={{ fontWeight: "bold", display: "block" }}
              component="span"
            >
              ${price}
            </Typography>
            {discount && (
              <Chip
                color="success"
                size="small"
                label={`Save ${discount * 100} %`}
              />
            )}
          </Box>
          <Button
            onClick={() => {
              navigate(`/hotel/${hotelId}`);
            }}
            label="View More"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DetailedRoomCard;
