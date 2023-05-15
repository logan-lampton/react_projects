import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import unsplashKey from "/home/logan/Development/code/phase-6/private-key/unsplashKey.js";
import { useGlobalContext } from "./context";

const url = `https://api.unsplash.com/search/photos/?client_id=${unsplashKey}`;

function Gallery() {
  const {searchTerm} = useGlobalContext();

  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const resp = await axios.get(`${url}&query=${searchTerm}`);
      return resp.data;
    },
  });
  if (response.isLoading) {
    return (
      <section className='image-container'>
        <h4>Loading...</h4>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section className='image-container'>
        <h4>There is an error, please re-enter your search</h4>
      </section>
    );
  }
  const results = response.data.results;

  if (results.length < 1) {
    return (
      <section className='image-container'>
        <h4>There are no results for your search term</h4>
      </section>
    );
  }

  return (
    <section className='image-container'>
      {results.map((image) => {
        const url = image?.urls?.regular;
        return (
          <img
            src={url}
            key={image.id}
            alt={image.alt_description}
            className='img'
          />
        );
      })}
    </section>
  );
}

export default Gallery;
