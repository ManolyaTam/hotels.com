import {
  MenuItem,
  Select as MuiSelect,
  InputLabel,
  Box,
  FormControl,
} from "@mui/material";

const Select = ({ label, options, name, value, onChange, style }) => {
  return (
    <Box
      sx={{ maxWidth: 200, backgroundColor: "white", marginBlock: 2, ...style }}
    >
      <FormControl fullWidth>
        <InputLabel id="payment-method-select">{label}</InputLabel>
        <MuiSelect
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
      </FormControl>
    </Box>
  );
};
export default Select;
