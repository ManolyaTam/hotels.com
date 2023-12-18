import React from "react";
import { Container as MuiContainer } from "@mui/material";

const Container = ({ children }) => {
  return (
    <MuiContainer style={{ marginInline: "auto" }}>{children}</MuiContainer>
  );
};

export default Container;
