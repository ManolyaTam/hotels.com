import Input from "../../components/Input";
import Button from "../../components/Button";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Admin = () => {
  const [data, setData] = useState(); // array of cities, hotels or roomss
  const location = useLocation();
  const navigate = useNavigate();
  const route = location.pathname;

  useEffect(() => {
    switch (route) {
      case "/admin/cities": {
        // fetch cities and set data
        setData("cities");
        break;
      }
      case "/admin/hotels": {
        // fetch hotels and set data
        setData("hotes");
        break;
      }
      case "/admin/rooms": {
        //fetch rooms and set data
        setData("rooms");
        break;
      }
      default: {
        navigate("/admin/cities");
      }
    }
    if (route === "/admin") {
      navigate("/admin/cities");
    }
  }, [route, navigate]);

  return (
    <Box marginInline="auto" maxWidth={1000}>
      {/* TODO: Search Form */}
      <Box display="flex">
        <Input label={`Search ${data}`} type="text" fullWidth />
        <Button label="Search" variant="contained" />
      </Box>

      {/* TODO:  City/Hotel/Room Create Form, activated by clicking create btn */}
      <Button label="Create" variant="outlined" />

      {/* TODO: Update Form activated by clicking a row */}
    </Box>
  );
};
export default Admin;
