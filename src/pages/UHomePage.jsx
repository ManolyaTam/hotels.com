import Divider from "@mui/material/Divider";
import HotelCard from "../components/HotelCard";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useFetchUserHome from "../hooks/useFetchUserHome";
import { useEffect, useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { jwtDecode } from "jwt-decode";

const UHomePage = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const checkSession = () => {
      if (!user) {
        return;
      }
      const auth = user.authentication;
      const exp = new Date(jwtDecode(auth).exp * 1000);
      if (exp < Date.now()) {
        setUser(null);
      }
    };
    checkSession();
  }, [user, setUser]);
  const { featured, recent } = useFetchUserHome();

  return (
    <div>
      <Typography variant="h6">Featured Deals</Typography>
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {featured.map((item, index) => (
          <div key={"recent-" + index} style={{ margin: 10 }}>
            <HotelCard
              {...item}
              imgUrl={item.roomPhotoUrl}
              price={item.finalPrice}
              city={item.cityName}
              rating={item.hotelStarRating}
              originalPrice={item.originalRoomPrice}
            />
          </div>
        ))}
      </Box>
      <Divider light style={{ marginBottom: 20 }} />
      {user && (
        <>
          <Typography variant="h6">Recently Visited Hotels</Typography>
          <Box style={{ display: "flex", flexWrap: "wrap" }}>
            {recent.map((item, index) => (
              <div key={"featured-" + index} style={{ margin: 10 }}>
                <HotelCard
                  {...item}
                  imgUrl={item.thumbnailUrl}
                  // price={item.finalPrice} TODO: check if price is always given
                  city={item.cityName}
                  rating={item.starRating}
                  originalPrice={item.originalRoomPrice}
                  date={item.visitDate}
                />
              </div>
            ))}
          </Box>
        </>
      )}
    </div>
  );
};
export default UHomePage;
