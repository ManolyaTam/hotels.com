import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const useNavAdmin = () => {
  const [data, setData] = useState([]); // array of cities, hotels or roomss
  const [dataType, setDataType] = useState("cities"); // "cities", "hotels" or "rooms"
  const location = useLocation();
  const navigate = useNavigate();
  const route = location.pathname;

  useEffect(() => {
    switch (route) {
      case "/admin/cities": {
        // fetch cities and set data
        setDataType("cities");
        setData([{
          id: 8,
          name: "Cape Town",
          description: "Enjoy the breathtaking landscapes of Cape Town. From the iconic Table Mountain to pristine beaches, experience the natural beauty and cultural richness of this South African gem."
        },
        {
          id: 4,
          name: "Denver",
          description: "Nestled at the foothills of the Rocky Mountains, Denver, the Mile-High City, is a vibrant metropolis known for its outdoor recreation, craft breweries, and cultural attractions. With a mix of modern skyscrapers and historic architecture, Denver offers a dynamic urban experience against the stunning backdrop of the nearby mountains, making it a gateway to both urban sophistication and natural beauty."
        },
        ]);
        break;
      }
      case "/admin/hotels": {
        // fetch hotels and set data
        setDataType("hotels");
        setData(null);
        break;
      }
      case "/admin/rooms": {
        //fetch rooms and set data
        setDataType("rooms");
        setData(null);
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

  return { data, dataType };
};
export default useNavAdmin;
