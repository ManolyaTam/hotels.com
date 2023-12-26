import { Container as MuiContainer } from "@mui/material";

const Container = ({ children }) => {
  return (
    <MuiContainer maxWidth="xl">
      {children}
      <div style={{ marginTop: "80px" }}>{/* footer */}</div>
    </MuiContainer>
  );
};

export default Container;
