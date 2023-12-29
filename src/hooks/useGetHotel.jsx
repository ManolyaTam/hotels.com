import { useState, useEffect } from "react";
import { getHotelById } from "../services/hotel/getHotelById";

const useGetHotel = (id) => {
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    const loadHotel = async () => {
      const result = await getHotelById(id);
      setHotel(result);
    };
    loadHotel();
  }, [id]);

  return { hotel };
};

export default useGetHotel;
