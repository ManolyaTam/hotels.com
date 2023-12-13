import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

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
}) => {
  return (
    <TextField
      style={style}
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
    />
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.oneOf(["password", "text"]),
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
