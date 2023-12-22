import { Container as MuiContainer } from "@mui/material";

const Container = ({ children }) => {
  return <MuiContainer maxWidth="xl">{children}</MuiContainer>;
};

export default Container;
