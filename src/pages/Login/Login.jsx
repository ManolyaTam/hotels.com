import "./login.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useFormik } from "formik";
import Input from "../../components/Input";
import Button from "../../components/Button";
import login from "../../services/login";

const LoginPage = () => {
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
      if (res === "success") {
        // update user context and navigate to next page dependint on user type
      }
    });
  };
  return (
    <div className="login-page">
      <Paper className="login-paper">
        <Typography variant="h5" align="center">
          {" "}
          Login{" "}
        </Typography>
        <form onSubmit={onSubmit}>
          <Input
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            required
          />
          <Input
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
          <Button type="submit" label="Login" fullWidth />
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
