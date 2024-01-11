import "./login.css";
import {
  Box,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Button, Input } from "../../components/index";
import useLogin from "../../hooks/useLogin";

import { UserContext } from "../../providers/UserProvider";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!user || !user?.userType) return;
    if (user.userType?.toLowerCase() === "user") {
      navigate("/home");
    } else if (user.userType?.toLowerCase() === "admin") {
      navigate("/admin/home");
    }
  }, [user, navigate]);

  const { formik } = useLogin();
  return (
    <Box className="login-page">
      <Paper className="login-paper">
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={formik.handleSubmit} noValidate>
          <Input
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
            required
          />
          <TextField
            margin="normal"
            size="small"
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.password)}
            helperText={formik.touched.username && formik.errors.password}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" label="Login" fullWidth />
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
