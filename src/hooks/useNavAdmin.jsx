import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/UserProvider";
import { fetchCities } from "../services/admin/Get/fetchCities";
import { fetchHotels } from "../services/admin/Get/fetchHotels";

const useNavAdmin = () => {
  const { userAuth } = useContext(UserContext);
  const [data, setData] = useState([]); // array of cities, hotels or roomss
  const [dataType, setDataType] = useState("cities"); // "cities", "hotels" or "rooms"
  const location = useLocation();
  const navigate = useNavigate();
  const route = location.pathname;

  useEffect(() => {
    const loadData = async () => {
      switch (route) {
        case "/admin/cities": {
          // fetch cities and set data
          setDataType("cities");
          const res = await fetchCities(userAuth);
          if (res.status === "success") {
            setData(res.data);
          }
          break;
        }
        case "/admin/hotels": {
          setDataType("hotels");
          const res = await fetchHotels(userAuth);
          if (res.status === "success") {
            setData(res.data);
          }
          break;
        }
        default: {
          navigate("/admin/cities");
        }
      }
    };
    if (route === "/admin") {
      navigate("/admin/cities");
    } else {
      loadData();
    }
  }, [route, navigate, userAuth]);

  return { data, dataType };
};
export default useNavAdmin;
