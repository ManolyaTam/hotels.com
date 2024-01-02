import {
  MenuItem,
  Select as MuiSelect,
  InputLabel,
  Box,
  FormControl,
  FormHelperText,
} from "@mui/material";

const Select = ({
  label,
  options,
  name,
  value,
  onChange,
  style,
  error,
  helperText,
  onBlur,
}) => {
  return (
    <Box
      sx={{ maxWidth: 200, backgroundColor: "white", marginBlock: 2, ...style }}
    >
      <FormControl fullWidth error={error}>
        <InputLabel id="payment-method-select">{label}</InputLabel>
        <MuiSelect
          onBlur={onBlur}
          labelId="payment-method-select"
          label={label}
          name={name}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </MuiSelect>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </Box>
  );
};
export default Select;
