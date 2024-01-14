import {
  Card,
  Grid,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Container,
  CardActionArea,
} from "@mui/material";
import { Button } from "./index";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CartCard = ({
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
}) => {
  const navigate = useNavigate();
  const [viewServices, setViewServices] = useState(true);

  return (
    <Card sx={{ padding: "5px", border: "1px solid lightgrey" }}>
      <Grid container>
        {/* First Column */}
        <Grid item xs={12} md={4}>
          <CardActionArea onClick={() => navigate(`/hotel/${hotelId}`)}>
            <CardMedia
              component="img"
              image={imgUrl}
              sx={{ objectFit: "contain" }}
              alt={alt}
            />
          </CardActionArea>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={3}>
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
                  style={{ fontWeight: "bold" }}
                  component="span"
                >
                  ${price}
                </Typography>
              </Box>
              <Button onClick={onClick} color="error" label="Delete"></Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartCard;
