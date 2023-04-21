import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = reviews[index];

  return (
    <main>
      <article className='review' key={id}>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            {/* quote symbol by image */}
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
      </article>
    </main>
  );
};

export default App;
