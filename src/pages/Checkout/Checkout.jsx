import { CartContext } from "../../providers/CartProvider";
import { useContext, useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";
import { UserContext } from "../../providers/UserProvider";

import CheckoutSteps from "./Steps";
import Cart from "./Cart";
import UserDetailsForm from "./UserDetailsForm";

const Checkout = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);
  const [isNextActive, setIsNextActive] = useState(isLoggedIn);
  const [checkoutRes, setCheckoutRes] = useState([]); //array of all responses to all rooms reserved in a single process

  useEffect(() => {
    console.log(checkoutRes);
  }, [checkoutRes]);

  return (
    <>
      {!cart.length || (
        <CheckoutSteps
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          isNextActive={isNextActive}
          setIsNextActive={setIsNextActive}
        />
      )}
      <Container>
        {!isLoggedIn && (
          <Typography color="error">Please log in to continue</Typography>
        )}
        {activeStep === 0 && <Cart />}
        {activeStep === 1 && (
          <UserDetailsForm
            setIsNextActive={setIsNextActive}
            checkoutRes={checkoutRes}
            setCheckoutRes={setCheckoutRes}
          />
        )}
        {activeStep === 2 && <></>}
        {/*page 2: Confirmation + print + pdf */}
      </Container>
    </>
  );
};

export default Checkout;
