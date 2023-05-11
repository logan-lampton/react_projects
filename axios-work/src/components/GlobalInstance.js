import axios from "axios";
import { useEffect } from "react";

const productsUrl = "https://course-api.com/react-store-products";
const randomUserUrl = "https://randomuser.me/api";

function GlobalInstance() {
  const fetchData = async () => {
    try {
      const resp1 = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);
      console.log(resp1, resp2)
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>Global Instance</h2>;
}

export default GlobalInstance;
