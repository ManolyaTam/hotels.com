import { useEffect } from "react";
import getFeatured from "../services/getFeatured";
const Dummy = () => {
  useEffect(() => {
    getFeatured();
  }, []);
  return (
    <div>
      <h1>Dummy Component</h1>
      <p>This is a dummy component.</p>
    </div>
  );
};

export default Dummy;
