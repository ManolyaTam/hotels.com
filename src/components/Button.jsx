import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  color,
  label,
  variant,
  onClick,
  type,
  fullWidth,
  style,
  disabled,
}) => {
  return (
    <MuiButton
      onClick={onClick}
      variant={variant || "outlined"}
      type={type || "button"}
      fullWidth={fullWidth}
      style={style}
      color={color}
      disabled={disabled}
    >
      {label}
    </MuiButton>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["outlined", "text", "contained"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  fullWidth: PropTypes.bool,
};

export default Button;
