import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { Card } from "@mui/material";

const paymentOptions = [
  { value: "none", label: "Select billing type" },
  { value: "creditCard", label: "Credit Card" },
  { value: "paypal", label: "PayPal" },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[\d()-]+$/, "Invalid phone number")
    .min(10, "Phone Number must be at least 10 characters")
    .required("Phone Number is required"),
  paymentMethod: Yup.string().notOneOf(["none"], "Payment method is required"),
});

const UserDetailsForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      paymentMethod: "none",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Card
        style={{ padding: "30px", display: "flex", flexDirection: "column" }}
      >
        <Input
          label="First Name"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          required
          error={formik.touched.firstName && formik.errors.firstName}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <br />
        <Input
          label="Last Name"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          required
          error={formik.touched.lastName && formik.errors.lastName}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <br />
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          required
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <br />
        <Input
          label="Phone Number"
          name="phoneNumber"
          type="tel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          required
          error={formik.touched.phoneNumber && formik.errors.phoneNumber}
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <br />
        <Select
          name="paymentMethod"
          label="Payment Method"
          value={formik.values.paymentMethod}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          options={paymentOptions}
          required
          error={formik.touched.paymentMethod && formik.errors.paymentMethod}
          helperText={
            formik.touched.paymentMethod && formik.errors.paymentMethod
          }
        />
        <br />
        <Button type="submit" label="Submit" />
      </Card>
    </form>
  );
};

export default UserDetailsForm;
