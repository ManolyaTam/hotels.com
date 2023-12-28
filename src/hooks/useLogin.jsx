import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";
import { MessageContext } from "../providers/MessageProvider";
import { useContext } from "react";
import * as yup from "yup";
import login from "../services/login";

const validationSchema = yup.object({
  username: yup.string("Enter your username").required("Username is required"),
  password: yup.string("Enter your password").required("Password is required"),
});

const useLogin = () => {
  const userContext = useContext(UserContext);
  const { showMessage } = useContext(MessageContext);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    const username = values.username;
    const password = values.password;

    login(username, password)
      .then((res) => {
        if (res.status === "success") {
          const { status, ...userData } = res;
          userContext.setUser(userData);
          showMessage("success", `Welcome back, ${userData.firstName}!`);
          return res.userType.toLowerCase();
        } else if (res.status === "failed") {
          if (res.statusCode === 400) {
            showMessage("warning", "Username and password are required");
          } else if (res.statusCode === 401) {
            showMessage(
              "warning",
              "Username/Password combination is invalid, please try again",
            );
          }
        }
      })
      .then((userType) => {
        if (userType === "user") {
          navigate("/home");
        } else if (userType === "admin") {
          navigate("/admin");
        }
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return {
    formik,
  };
};

export default useLogin;
