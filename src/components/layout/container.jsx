import { Container as MuiContainer } from "@mui/material";
import { Box } from "@mui/material";

const Container = ({ children }) => {
  return (
    <MuiContainer maxWidth="xl">
      {children}
      <Box style={{ marginTop: "80px" }}>{/* footer */}</Box>
    </MuiContainer>
  );
};

export default Container;
