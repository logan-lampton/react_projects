import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import unsplashKey from "/home/logan/Development/code/phase-6/private-key/unsplashKey.js";

const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashKey}&query=cat`;

function Gallery() {
  const response = useQuery({
    queryKey:['images'],
    queryFn: async () => {
      const resp = await axios.get(url)
      return resp.data
    }
  })
  console.log(response)
  return(<h2>Gallery</h2>)
}

export default Gallery;
