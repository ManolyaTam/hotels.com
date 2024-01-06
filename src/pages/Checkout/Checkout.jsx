import { CartContext } from "../../providers/CartProvider";
import { useContext, useState } from "react";
import { Container, Typography } from "@mui/material";
import { UserContext } from "../../providers/UserProvider";

import CheckoutSteps from "./Steps";
import Cart from "./Cart";
import UserDetailsForm from "./UserDetailsForm";
import Bookings from "./Bookings";

const Checkout = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutRes, setCheckoutRes] = useState([]); //array of all responses to all rooms reserved in a single process

  return (
    <>
      {!cart.length || (
        <CheckoutSteps isLoggedIn={isLoggedIn} setActiveStep={setActiveStep} />
      )}
      <Container>
        {!isLoggedIn && (
          <Typography color="error">Please log in to continue</Typography>
        )}
        {activeStep === 0 && <Cart setActiveStep={setActiveStep} />}
        {activeStep === 1 && (
          <UserDetailsForm
            setActiveStep={setActiveStep}
            checkoutRes={checkoutRes}
            setCheckoutRes={setCheckoutRes}
          />
        )}
        {activeStep === 2 && <Bookings responses={checkoutRes} />}
        {/*page 2: Confirmation + print + pdf */}
      </Container>
    </>
  );
};

export default Checkout;
