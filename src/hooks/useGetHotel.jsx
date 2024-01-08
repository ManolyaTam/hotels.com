import { useState, useEffect } from "react";
import { getHotelById } from "../services/hotel/getHotelById";
import { getHotelReviews } from "../services/hotel/getHotelReviews";
import { getHotelGallery } from "../services/hotel/getHotelGallery";
import { getAllRoomsInHotel } from "../services/hotel/getHotelRooms";

const useFetchHotelData = (id) => {
  const [hotel, setHotel] = useState({});
  const [reviews, setReviews] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [rooms, setRooms] = useState([]);
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
      const photos = await getHotelGallery(id);
      setGallery(photos);
    };
    loadGallery();
    const loadRooms = async () => {
      const result = await getAllRoomsInHotel(id);
      setRooms(result);
    };
    loadRooms();
  }, [id]);

  return { hotel, reviews, gallery, rooms, setRooms };
};

export default useFetchHotelData;
