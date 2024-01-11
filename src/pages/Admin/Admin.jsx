import { Button, Input, NoResults } from "../../components/index";
import { Box } from "@mui/material";
import useNavAdmin from "../../hooks/useNavAdmin";
import Cities from "./Cities";
import Hotels from "./Hotels";

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
      </Box>

      {/* TODO:  City/Hotel/Room Create Form, activated by clicking create btn */}
      {/* TODO: Update Form activated by clicking a row */}
      {data?.length ? (
        dataType === "cities" ? (
          <Cities data={data} />
        ) : dataType === "hotels" ? (
          <Hotels data={data} />
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
