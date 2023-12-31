import { CartContext } from "../../providers/CartProvider";
import { useContext } from "react";
import { Container } from "@mui/material";
import { useState } from "react";

import CheckoutSteps from "./Steps";
import Cart from "./Cart";

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      {!cart.length || (
        <CheckoutSteps activeStep={activeStep} setActiveStep={setActiveStep} />
      )}
      <Container>
        {activeStep === 0 && <Cart />}
        {activeStep === 1 && <>user Details Form</>}
        {activeStep === 2 && <>Confirmation + print + pdf</>}
      </Container>
    </>
  );
};

export default Checkout;
