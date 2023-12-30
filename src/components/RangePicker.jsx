import React from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

const RangePicker = ({ name, value, onChange }) => {
  return (
    <DateRangePicker
      format="dd-MM-yyyy"
      name={name}
      value={
        value || [
          new Date("2022-02-01 00:00:00"),
          new Date("2022-05-01 23:59:59"),
        ]
      }
      onChange={onChange}
      placeholder={["Check-in", "Checkout"]}
      size="lg"
      showOneCalendar
      ranges={[]}
      // style={{
      //   boxSizing: 'border-box',
      //   height: 40,
      //   fontFamily: 'roboto',
      //   borderRadius: '4px',
      // }}
      // defaultValue={[
      //   defaultDate?.start || new Date(),
      //   defaultDate?.end || dayjs().add(1, 'day').toDate(), // Adding one day
      // ]}
    />
  );
};

export default RangePicker;
