import { useState, useEffect } from "react";
import { getHotelById } from "../services/hotel/getHotelById";
import { getHotelReviews } from "../services/hotel/getHotelReviews";
import { getHotelGallery } from "../services/hotel/getHotelGallery";

const useFetchHotelData = (id) => {
  const [hotel, setHotel] = useState({});
  const [reviews, setReviews] = useState([]);
  const [gallery, setGallery] = useState([]);
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
    const loadGallery = async () => {
      const gallery = await getHotelGallery(id);
      setGallery(gallery);
    };
    loadGallery();
  }, [id]);

  return { hotel, reviews, gallery };
};

export default useFetchHotelData;
