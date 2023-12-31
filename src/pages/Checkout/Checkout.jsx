import { CartContext } from "../../providers/CartProvider";
import { useContext, useState } from "react";
import { Container, Typography } from "@mui/material";
import { UserContext } from "../../providers/UserProvider";

import CheckoutSteps from "./Steps";
import Cart from "./Cart";

const Checkout = () => {
  const { isLoggedIn } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {!cart.length || (
        <CheckoutSteps activeStep={activeStep} setActiveStep={setActiveStep} />
      )}
      <Container>
        {!isLoggedIn && <Typography>Please log in to continue</Typography>}
        {activeStep === 0 && <Cart />}
        {activeStep === 1 && <>user Details Form</>}
        {activeStep === 2 && <>Confirmation + print + pdf</>}
      </Container>
    </>
  );
};

export default Checkout;
