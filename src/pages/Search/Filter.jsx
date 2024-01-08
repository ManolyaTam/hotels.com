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
  Rating,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useFormik } from "formik";
import Button from "../../components/Button";
import useParam from "../../hooks/useParam";
import { useState } from "react";
import Input from "../../components/Input";

const Filter = () => {
  const [rating, setRating] = useState(4);
  const { updateParams } = useParam();
  const formik = useFormik({
    initialValues: {
      priceRange: [100, 200],
      roomType: {
        standard: true,
        double: true,
        king: true,
      },
      sortBy: "none",
      city: "",
    },
    onSubmit: (values) => {
      updateParams({
        sort: values.sortBy,
        starRate: rating,
        city: values.city,
      });
    },
  });

  function valuetext(value) {
    return `$${value}`;
  }

  return (
    <Card style={{ marginTop: 5, paddingTop: 10 }}>
      <Container>
        <Typography variant="h6">Filters</Typography>
        <form onSubmit={formik.handleSubmit}>
          <List>
            <Box style={{ marginBottom: 2 }}>
              <ListItem disablePadding>
                <Typography fontWeight="bold">Price Range</Typography>
              </ListItem>
              <Slider
                name="priceRange"
                getAriaLabel={() => "Temperature range"}
                value={formik.values.priceRange}
                onChange={(_, newValue) => {
                  formik.setFieldValue("priceRange", newValue);
                }}
                valueLabelFormat={valuetext}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                min={50}
                max={500}
                step={10}
              />
            </Box>
            <Box style={{ marginBottom: 10 }}>
              <ListItem disablePadding>
                <Typography fontWeight="bold">City</Typography>
              </ListItem>
              <Input
                placeholder={"Ramallah"}
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
              />
            </Box>
            <Box>
              <ListItem disablePadding>
                <Typography fontWeight="bold">Room Type</Typography>
              </ListItem>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="roomType.standard"
                      checked={formik.values.roomType.standard}
                      onChange={formik.handleChange}
                    />
                  }
                  value="standard"
                  label="Standard"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="roomType.double"
                      checked={formik.values.roomType.double}
                      onChange={formik.handleChange}
                    />
                  }
                  value="double"
                  label="Double"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="roomType.king"
                      checked={formik.values.roomType.king}
                      onChange={formik.handleChange}
                    />
                  }
                  value="king"
                  label="King Suite"
                />
              </FormGroup>
            </Box>
            <Box>
              <ListItem disablePadding>
                <Typography fontWeight="bold">Rating</Typography>
              </ListItem>
              <Rating
                value={rating}
                onChange={(_, val) => setRating(val)}
                precision={1}
                name="rating"
              />
            </Box>
            <Box>
              <ListItem disablePadding>
                <Typography fontWeight="bold">Sort By</Typography>
              </ListItem>
              <RadioGroup
                name="sortBy"
                value={formik.values.sortBy}
                onChange={formik.handleChange}
              >
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
                <FormControlLabel
                  control={<Radio />}
                  value="none"
                  label="none"
                />
              </RadioGroup>
            </Box>
          </List>
          <Button
            type="submit"
            label="Filter"
            style={{ marginBottom: "10px" }}
          />
        </form>
      </Container>
    </Card>
  );
};

export default Filter;
