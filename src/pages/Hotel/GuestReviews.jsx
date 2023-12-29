import AliceCarousel from "react-alice-carousel";
import ReviewCard from "../../components/ReviewCard";

const GuestReviews = () => {
  const items = reviews.map((rev) => <ReviewCard review={rev} />);
  return <AliceCarousel mouseTracking infinite items={items} />;
};

export default GuestReviews;

const reviews = [
  {
    reviewId: 1,
    customerName: "Alice Johnson",
    rating: 4.0,
    description:
      "Enjoyed my stay. The room was comfortable, and the staff was friendly.",
  },
  {
    reviewId: 2,
    customerName: "Bob Smith",
    rating: 5.0,
    description:
      "Outstanding service! The hotel exceeded my expectations in every way.",
  },
  {
    reviewId: 3,
    customerName: "Charlie Brown",
    rating: 3.0,
    description: "Decent stay, but the room could have been cleaner.",
  },
  {
    reviewId: 4,
    customerName: "David Wilson",
    rating: 5.0,
    description:
      "Amazing experience. The hotel staff went above and beyond to make me feel welcome.",
  },
];
