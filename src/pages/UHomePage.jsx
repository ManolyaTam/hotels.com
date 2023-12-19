import { useEffect } from "react";
import getFeatured from "../services/getFeatured";

const UHomePage = () => {
  useEffect(() => {
    getFeatured();
  }, []);

  return (
    <div>
      <h3>User Home Page</h3>
    </div>
  );
};
export default UHomePage;
