import {
  Card,
  Slider,
  Box,
  Container,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useState } from "react";
const Filter = () => {
  function valuetext(value) {
    return `$${value}`;
  }
  const [value, setValue] = useState([100, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card>
      <Container>
        <Typography variant="h6">Filters</Typography>
        <Box>
          Price Range
          <Slider
            name="priceRange"
            getAriaLabel={() => "Temperature range"}
            value={value}
            onChange={handleChange}
            valueLabelFormat={valuetext}
            valueLabelDisplay="auto"
            getAriaValueText={(text) => valuetext}
            disableSwap
            min={50}
            max={500}
          />
        </Box>
        <Box>
          Room Type:
          <RadioGroup style={{ fontSize: 16 }}>
            {/* replace with checkbox */}
            <FormControlLabel
              value="option1"
              control={<Radio />}
              label="Option 1"
            />
            <FormControlLabel
              value="option2"
              control={<Radio />}
              label="Option 2"
            />
            <FormControlLabel
              value="option3"
              control={<Radio />}
              label="Option 3"
            />
          </RadioGroup>
        </Box>
      </Container>
    </Card>
  );
};
export default Filter;
