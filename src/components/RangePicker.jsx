import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Box } from "@mui/material";
const { beforeToday } = DateRangePicker;

const RangePicker = ({ name, value, onChange }) => {
  return (
    <Box component="span">
      <DateRangePicker
        shouldDisableDate={beforeToday()}
        format="dd-MM-yyyy"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={["Check-in :", " Checkout"]}
        size="lg"
        showOneCalendar
        ranges={[]}
        cleanable={false}
      />
    </Box>
  );
};

export default RangePicker;
