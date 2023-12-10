import './login.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      username: 'hello',
      password: '123'
    }
  })
  return (
    <div className="login-page">
      <Paper style={{ maxWidth: 400, margin: 'auto', padding: '20px', marginBlock: 'auto' }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form>
          <Input
            name="username"
            label="Username"
            fullWidth
            margin="normal"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <Input
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Button type="submit" label='Login' fullWidth />
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
