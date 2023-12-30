import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";
import dayjs from "dayjs";
import { Box } from "@mui/material";
const { beforeToday } = DateRangePicker;
const today = dayjs();
const RangePicker = ({ name, value, onChange }) => {
  return (
    <Box component="span">
      <DateRangePicker
        shouldDisableDate={beforeToday()}
        format="dd-MM-yyyy"
        name={name}
        value={value || [new Date(today), new Date(today.add(1, "day"))]}
        onChange={onChange}
        placeholder={["Check-in", "Checkout"]}
        size="lg"
        showOneCalendar
        ranges={[]}
      />
    </Box>
  );
};

export default RangePicker;
