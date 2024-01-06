import Input from "../../components/Input";
import Button from "../../components/Button";
import { Box } from "@mui/material";
import useNavAdmin from "../../hooks/useNavAdmin";

const Admin = () => {
  const { data } = useNavAdmin();
  return (
    <Box marginInline="auto" maxWidth={1000}>
      {/* TODO: Search Form */}
      <Box display="flex">
        <Input label={`Search ${data}`} type="text" fullWidth />
        <Button label="Search" variant="contained" />
      </Box>

      {/* TODO:  City/Hotel/Room Create Form, activated by clicking create btn */}
      <Button label="Create" variant="outlined" />

      {/* TODO: Update Form activated by clicking a row */}
    </Box>
  );
};
export default Admin;
