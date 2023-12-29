import { useState, useEffect } from "react";
import { getHotelById } from "../services/hotel/getHotelById";
import { getHotelReviews } from "../services/hotel/getHotelReviews";

const useFetchHotelData = (id) => {
  const [hotel, setHotel] = useState({});
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const loadHotel = async () => {
      const result = await getHotelById(id);
      setHotel(result);
    };
    loadHotel();
    const loadReviews = async () => {
      const reviews = await getHotelReviews(id);
      setReviews(reviews);
    };
    loadReviews();
  }, [id]);

  return { hotel, reviews };
};

export default useFetchHotelData;
