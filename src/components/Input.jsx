import PropTypes from "prop-types";
import { TextField } from "@mui/material";

const Input = ({
  name,
  type,
  label,
  required,
  size,
  fullWidth,
  margin,
  value,
  onChange,
  placeholder,
  style,
  error,
  helperText,
  onBlur,
}) => {
  return (
    <TextField
      style={{ backgroundColor: "white", ...style }}
      name={name}
      type={type || "text"}
      label={label}
      size={size || "small"}
      fullWidth={fullWidth}
      margin={margin}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      helperText={helperText}
      onBlur={onBlur}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["password", "text", "number"]),
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "normal"]),
  fullWidth: PropTypes.bool,
  margin: PropTypes.oneOf(["none", "dense", "normal"]),
  required: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
