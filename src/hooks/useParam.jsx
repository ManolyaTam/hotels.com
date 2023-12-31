import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";

const useParam = () => {
  const [param, setParam] = useSearchParams();

  const updateParams = (newParams) => {
    const queryParams = new URLSearchParams(param);

    for (const [key, value] of Object.entries(newParams)) {
      queryParams.set(key, value);
    }

    setParam(queryParams);
  };

  const params = useMemo(() => {
    // to avoid recalculation on every re-render
    const search = param.get("search") || "";
    const checkin = param.get("checkin") || 0;
    const checkout = param.get("checkout") || 0;
    const numberOfRooms = param.get("numberOfRooms") || 1;
    const adults = param.get("adults") || 2;
    const children = param.get("children") || 0;
    // const city = param.get("city") || "";
    const starRate = param.get("starRate") || "";
    const sort = param.get("sort") || "";
    return {
      search,
      checkin,
      checkout,
      numberOfRooms,
      adults,
      children,
      // city,
      starRate,
      sort,
    };
  }, [param]);

  return { params, setParam, updateParams };
};
export default useParam;
