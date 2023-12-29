import AliceCarousel from "react-alice-carousel";
import ReviewCard from "../../components/ReviewCard";
import Button from "../../components/Button";
import Box from "@mui/material/Box";
import { useRef } from "react";

const GuestReviews = ({ reviews }) => {
  const items = reviews.map((rev) => (
    <ReviewCard key={rev.reviewId} review={rev} />
  ));
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    carouselRef.current.slideNext();
  };
  const handlePrevClick = () => {
    carouselRef.current.slidePrev();
  };

  return (
    <>
      <AliceCarousel
        mouseTracking
        disableButtonsControls
        infinite
        items={items}
        ref={carouselRef}
      />
      <Box display="flex" justifyContent="space-between">
        <Button onClick={handlePrevClick} label="◀" variant="text" />
        <Button onClick={handleNextClick} label="▶" variant="text" />
      </Box>
    </>
  );
};

export default GuestReviews;
