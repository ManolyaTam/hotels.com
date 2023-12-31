import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { UserContext } from "../../providers/UserProvider";
import { useContext } from "react";

const steps = ["Review your selection", "Add your Details", "Final Step"];

const CheckoutSteps = ({ activeStep, setActiveStep }) => {
  const { isLoggedIn } = useContext(UserContext);

  const onNextClick = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onBackClick = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h5" sx={{ mt: 2, mb: 1, textAlign: "center" }}>
            All steps completed!
          </Typography>
        </>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              disabled={activeStep === 0}
              onClick={onBackClick}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button disabled={!isLoggedIn} onClick={onNextClick}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
export default CheckoutSteps;
