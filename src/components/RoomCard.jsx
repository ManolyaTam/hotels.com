import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Container,
} from "@mui/material";
import Button from "./Button";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

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
}) => {
  const [viewServices, setViewServices] = useState(false);
  return (
    <Card sx={{ maxheight: "140px", display: "flex" }}>
      <Box sx={{ maxWidth: "300px" }}>
        <CardMedia
          component="img"
          image={imgUrl}
          sx={{ objectFit: "contain" }}
          alt={alt}
        />
      </Box>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", width: "100%" }}
      >
        <Typography fontSize={12} color="text.secondary">
          Room Number: <b>{roomNumber}</b>
        </Typography>
        <Box>
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
        </Box>
        <Box className="master-detail">
          <Box
            style={{
              border: "1px solid lightgrey",
              padding: "5px",
              margin: "2px",
              borderRadius: "4px",
            }}
          >
            <Box display="flex" alignItems="center">
              <Button
                style={{ padding: 0, width: "25px" }}
                variant="text"
                label={viewServices ? "▶" : "▼"}
                onClick={() => setViewServices((viewServices) => !viewServices)}
              />
              <Typography>Services</Typography>
            </Box>
            {viewServices && (
              <Box>
                {roomAmenities.map((service, index) => (
                  <Box key={index}>
                    <Container>
                      <Typography fontSize={13}>
                        <b>{service.name}</b>
                      </Typography>
                      <Typography fontSize={12}>
                        {service.description}
                      </Typography>
                    </Container>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
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
