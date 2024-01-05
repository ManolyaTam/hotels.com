import Input from "../../components/Input";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { Card } from "@mui/material";
import useCheckout from "../../hooks/useCheckout";

const paymentOptions = [
  { value: "none", label: "Select billing type" },
  { value: "creditCard", label: "Credit Card" },
  { value: "paypal", label: "PayPal" },
];

const UserDetailsForm = ({ setIsNextActive, checkoutRes, setCheckoutRes }) => {
  const { formik } = useCheckout(setIsNextActive, checkoutRes, setCheckoutRes);
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
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
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
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
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
          error={formik.touched.email && Boolean(formik.errors.email)}
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
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
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
          error={
            formik.touched.paymentMethod && Boolean(formik.errors.paymentMethod)
          }
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
