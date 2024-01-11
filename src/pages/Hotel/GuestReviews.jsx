import AliceCarousel from "react-alice-carousel";
import { Button, ReviewCard } from "../../components/index";
import { Box } from "@mui/material";
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
