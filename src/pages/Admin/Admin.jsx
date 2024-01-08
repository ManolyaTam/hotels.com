import Input from "../../components/Input";
import Button from "../../components/Button";
import { Box } from "@mui/material";
import useNavAdmin from "../../hooks/useNavAdmin";
import Cities from "./Cities";
import Hotels from "./Hotels";
import NoResults from "../../components/NoResults";

const Admin = () => {
  const { data, dataType } = useNavAdmin();
  return (
    <Box marginInline="auto" maxWidth={1000}>
      {/* TODO: Search Form */}
      <Box display="flex">
        <Input label={`Search ${dataType}`} type="text" fullWidth />
        <Button
          label="Search"
          variant="contained"
          style={{ marginInline: 5 }}
        />
        <Button label="Create" variant="outlined" style={{ marginInline: 5 }} />
      </Box>

      {/* TODO:  City/Hotel/Room Create Form, activated by clicking create btn */}
      {/* TODO: Update Form activated by clicking a row */}
      {data?.length ? (
        dataType === "cities" ? (
          <Cities data={data} />
        ) : dataType === "hotels" ? (
          <Hotels data={data} />
        ) : dataType === "rooms" ? (
          "<Rooms data={data} />"
        ) : (
          ""
        )
      ) : (
        <NoResults />
      )}
    </Box>
  );
};
export default Admin;
