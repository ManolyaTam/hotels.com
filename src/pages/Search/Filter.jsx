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
import { useFormik } from "formik";
import Button from "../../components/Button";
import useParam from "../../hooks/useParam";

const Filter = () => {
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
    },
    onSubmit: (values) => {
      updateParams({ sort: values.sortBy });
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
            <Box>
              <ListItem disablePadding>
                <Typography fontWeight="bold">Price Range</Typography>
              </ListItem>
              <Slider
                name="priceRange"
                getAriaLabel={() => "Temperature range"}
                value={formik.values.priceRange}
                onChange={(event, newValue) => {
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
