import "./login.css";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import Input from "../../components/Input";
import Button from "../../components/Button";
import useLogin from "../../hooks/useLogin";

const LoginPage = () => {
  const { formik, onSubmit } = useLogin();
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
