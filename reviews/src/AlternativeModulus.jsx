import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const AlternativeModulus = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const prevPerson = () => {
    setIndex((currentIndex) => {
      // using modulus to return 0 index when we hit 4 % 4
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      // using modulus to return 0 index when we hit 4 % 4
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber === index + 1;
    }
    // using modulus to return 0 index when we hit 4 % 4
    const newIndex = randomNumber % reviews.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className='review'>
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
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn btn-hipster' onClick={randomPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  );
};

export default AlternativeModulus;
