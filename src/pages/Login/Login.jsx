import './login.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Input from '../../components/Input'
const LoginPage = () => {
  return (
    <div className="login-page">
      <Paper style={{ maxWidth: 400, margin: 'auto', padding: '20px', marginBlock: 'auto' }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form>
          <Input label="Username" fullWidth margin="normal" />
          <Input label="Password" type="password" fullWidth margin="normal" />
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
