import { useEffect } from "react";
import authFetchInterceptor from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

function Interceptors() {
  const fetchData = async () => {
    try {
        const resp = await authFetchInterceptor('/react-store-products')
    } catch (error) {

    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>interceptors</h2>;
}

export default Interceptors;
