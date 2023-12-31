import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Container,
  Chip,
  Rating,
} from "@mui/material";
import Button from "./Button";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const DetailedRoomCard = ({
  imgUrl,
  alt,
  roomType,
  adults,
  children,
  price,
  roomAmenities,
  showLinktoHotel,
  hotelId,
  hotelName,
  rating,
  discount,
  city,
}) => {
  const navigate = useNavigate();
  const [viewServices, setViewServices] = useState(true);

  return (
    <Card sx={{ padding: "5px", border: "1px solid lightgrey" }}>
      <Grid container>
        {/* First Column */}
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={imgUrl}
            sx={{ objectFit: "contain" }}
            alt={alt}
          />
        </Grid>
        {/* Second Column */}
        <Grid item xs={12} md={3}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography fontSize={15} color="text.secondary">
              {" "}
              <b>
                {hotelName}, {city}
              </b>
            </Typography>
            <Typography fontSize={12} color="text.secondary">
              Room Type: <b>{roomType}</b>
            </Typography>
            <Box>
              {Array.from({ length: adults }).map((_, i) => (
                <PersonIcon sx={{ fontSize: "20px" }} key={i} />
              ))}
              {Array.from({ length: children }).map((_, i) => (
                <PersonIcon sx={{ fontSize: "15px" }} key={i} />
              ))}
            </Box>
            <Rating value={rating} />
          </CardContent>
        </Grid>
        {/* Third Column */}
        <Grid item xs={12} md={5}>
          <CardContent>
            <Box
              className="master-detail"
              style={{
                border: "1px solid lightgrey",
                padding: "5px",
                margin: "2px",
                borderRadius: "4px",
              }}
            >
              <Box>
                <Box display="flex" alignItems="center">
                  {!showLinktoHotel && (
                    <Button
                      style={{ padding: 0, width: "25px" }}
                      variant="text"
                      label={viewServices ? "▶" : "▼"}
                      onClick={() =>
                        setViewServices((viewServices) => !viewServices)
                      }
                    />
                  )}
                  <Typography>Services</Typography>
                </Box>
              </Box>
              {(!viewServices || showLinktoHotel) && (
                <Grid>
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
                </Grid>
              )}
            </Box>

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
                    label={`Get ${discount * 100} % off`}
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
        </Grid>
      </Grid>
    </Card>
  );
};

export default DetailedRoomCard;
