import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleDelete = (id) => {
    const filteredTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(filteredTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <h2>Please refresh tours</h2>
        <button
          type='button'
          style={{ marginTop: "2rem"}}
          className='btn'
          onClick={fetchTours}
        >Refresh</button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} handleDelete={handleDelete} />
    </main>
  );
};
export default App;
