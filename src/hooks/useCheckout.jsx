import { useFormik } from "formik";
import * as yup from "yup";
import { UserContext } from "../providers/UserProvider";
import { useContext } from "react";

const useCheckout = () => {
  const { user } = useContext(UserContext);

  const validationSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[\d()-]+$/, "Invalid phone number")
      .min(10, "Phone Number must be at least 10 characters")
      .required("Phone Number is required"),
    paymentMethod: yup
      .string()
      .notOneOf(["none"], "Payment method is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: "",
      paymentMethod: "none",
      phoneNumber: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return { formik };
};
export default useCheckout;
