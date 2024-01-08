import { useState } from "react";
import RangePicker from "../../components/RangePicker";
import dayjs from "dayjs";
import Button from "../../components/Button";

const RoomsSearch = () => {
  const today = dayjs();
  const [date, setDate] = useState([
    new Date(today),
    new Date(today.add(1, "day")),
  ]);
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    console.log(date);
  };

  return (
    <form onSubmit={onSubmit}>
      <RangePicker
        value={date}
        onChange={(value) => {
          setDate(value);
        }}
      />
      <Button label="Search" type="submit" style={{ marginInline: 5 }} />
    </form>
  );
};
export default RoomsSearch;
