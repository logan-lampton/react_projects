import { useEffect } from "react";

import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

function CustomInstance() {
  const fetchData = async () => {
    try {
      const resp1 = await authFetch("/react-store-products");
      const resp2 = await axios(randomUserUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Custom Instance</h2>;
}

export default CustomInstance;
