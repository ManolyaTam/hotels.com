import { CartContext } from "../../providers/CartProvider";
import { useContext, useState } from "react";
import { Container } from "@mui/material";

import CheckoutSteps from "./Steps";
import Cart from "./Cart";
import UserDetailsForm from "./UserDetailsForm";
import Bookings from "./Bookings";
import LoggedInOnly from "../../guards/LoggedInOnly";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutRes, setCheckoutRes] = useState([]); //array of all responses to all rooms reserved in a single process

  return (
    <>
      {!cart?.length || <CheckoutSteps activeStep={activeStep} />}
      <Container>
        {activeStep === 0 && <Cart setActiveStep={setActiveStep} />}
        {activeStep === 1 && (
          <LoggedInOnly>
            <UserDetailsForm
              setActiveStep={setActiveStep}
              setCheckoutRes={setCheckoutRes}
            />
          </LoggedInOnly>
        )}
        {activeStep === 2 && (
          <LoggedInOnly>
            <Bookings responses={checkoutRes} />
          </LoggedInOnly>
        )}
      </Container>
    </>
  );
};

export default Checkout;
