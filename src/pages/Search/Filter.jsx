import {
  Card,
  Slider,
  Checkbox,
  Box,
  Container,
  Typography,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  RadioGroup,
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
    <Card style={{ marginTop: 5, paddingTop: 10 }}>
      <Container>
        <Typography variant="h6">Filters</Typography>
        <List>
          <Box>
            <ListItem disablePadding>
              <Typography fontWeight="bold">Price Range</Typography>
            </ListItem>
            <Slider
              name="priceRange"
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelFormat={valuetext}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
              min={50}
              max={500}
              step={10}
            />
          </Box>
          <Box>
            <ListItem disablePadding>
              <Typography fontWeight="bold">Room Type</Typography>
            </ListItem>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                value="standard"
                label="Standard"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                value="double"
                label="Double"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                value="king"
                label="King Suite"
              />
            </FormGroup>
          </Box>
          <Box>
            <ListItem disablePadding>
              <Typography fontWeight="bold">Sort By</Typography>
            </ListItem>
            <RadioGroup defaultValue={"none"}>
              <FormControlLabel
                control={<Radio />}
                value="rating"
                label="Rating"
              />
              <FormControlLabel
                control={<Radio />}
                value="price"
                label="Price"
              />
              <FormControlLabel control={<Radio />} value="none" label="none" />
            </RadioGroup>
          </Box>
        </List>
      </Container>
    </Card>
  );
};
export default Filter;
