import { HotelCard } from "../components/index";

const HotelCardStory = {
  component: HotelCard,
  title: "HotelCard",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    price: 100.0,
    city: "Ramallah",
    hotelName: "Plaza Hotel",
    rating: 4.5,
    title: "Luxury South Suite",
    description:
      "Experience ultimate luxury in our South Suite at Plaza Hotel. This spacious suite offers breathtaking views of the city and is equipped with state-of-the-art amenities for an unforgettable stay.",
    imgUrl:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
};
export const WithDiscount = {
  args: {
    originalPrice: 200.0,
    discount: 0.5,
    finalPrice: 100.0,
    city: "Ramallah",
    hotelName: "Plaza Hotel",
    rating: 4.5,
    title: "Luxury South Suite",
    description:
      "Experience ultimate luxury in our South Suite at Plaza Hotel. This spacious suite offers breathtaking views of the city and is equipped with state-of-the-art amenities for an unforgettable stay.",
    imgUrl:
      "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
};

export default HotelCardStory;
