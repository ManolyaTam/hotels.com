import { useFormik } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { Card } from "@mui/material";

const paymentOptions = [
  { value: "select", label: "Select billing type" },
  { value: "creditCard", label: "Credit Card" },
  { value: "paypal", label: "PayPal" },
];

const UserDetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      paymentMethod: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Card
        style={{ padding: "30px", display: "flex", flexDirection: "column" }}
      >
        <Input
          label="First Name"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          required
        />
        <br />
        <Input
          label="Last Name"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          required
        />
        <br />
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />
        <br />
        <Input
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          required
        />
        <br />
        <Select
          label="paymentMethod"
          value={formik.values.paymentMethod}
          onChange={formik.values.paymentMethod}
          options={paymentOptions}
          required
        />
        <br />
        <Button type="submit" label="Submit" />
      </Card>
    </form>
  );
};

export default UserDetailsForm;
