import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://course-api.com/react-store-products";

function FirstRequest() {
    const [initialRender, setInitialRender] = useState('First Request')
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data[0])
      setInitialRender(`First Request: ${data[0].name}`)
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>{initialRender}</h2>;
}

export default FirstRequest;
