import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import login from "../services/login";

const useLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    login(username, password).then((res) => {
      if (res.status === "success") {
        if (res.userType.toLowerCase() === "user") {
          navigate("user/home");
          // TODO: add welcomming message
        } else if (res.userType.toLowerCase() === "admin") {
          navigate("admin/home");
        }
        // TODO: update user context and navigate to next page dependint on user type
      }
    });
  };
  return {
    formik,
    onSubmit,
  };
};

export default useLogin;
