import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { Button } from "./index";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const RoomCard = ({
  imgUrl,
  alt,
  roomType,
  adults,
  children,
  price,
  roomNumber,
  roomAmenities,
  onClick,
  showLinktoHotel,
  hotelId,
  style,
}) => {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: "300px" }} style={style}>
      <CardMedia
        component="img"
        image={imgUrl}
        sx={{ objectFit: "cover", maxHeight: 200 }}
        alt={alt}
      />

      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography fontSize={12} color="text.secondary">
          Room Number: <b>{roomNumber}</b>
        </Typography>
        <Typography fontSize={12} color="text.secondary">
          Type: <b>{roomType}</b>
        </Typography>
        <Box>
          {Array.from({ length: adults }).map((_, i) => (
            <PersonIcon sx={{ fontSize: "20px" }} key={i} />
          ))}
          {Array.from({ length: children }).map((_, i) => (
            <PersonIcon sx={{ fontSize: "15px" }} key={i} />
          ))}
        </Box>
        {showLinktoHotel && (
          <Button
            label="View Hotel"
            onClick={() => navigate(`/hotel/${hotelId}`)}
          />
        )}
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
              style={{ fontWeight: "bold" }}
              component="span"
            >
              ${price}
            </Typography>
          </Box>
          <Button label="Add to Cart" onClick={onClick} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
