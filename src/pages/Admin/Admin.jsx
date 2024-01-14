import { NoResults } from "../../components/index";
import { Box } from "@mui/material";
import useNavAdmin from "../../hooks/useNavAdmin";
import Cities from "./Cities";
import Hotels from "./Hotels";
import Search from "./Search";

const Admin = () => {
  const { data, dataType } = useNavAdmin();
  return (
    <Box marginInline="auto" maxWidth={1000}>
      <Search dataType={dataType} />

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
