import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useNavAdmin = () => {
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

  return { data };
};
export default useNavAdmin;
