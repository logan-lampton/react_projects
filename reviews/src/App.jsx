import reviews from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);

  const { name, job, image, text } = reviews[index];

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber === index + 1;
      return setIndex(randomNumber)
    }
    setIndex(randomNumber);
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

// optional function to check on the index
// const checkIndex = (number) => {
//   if (number > reviews.length - 1) {
//     return 0;
//   } else if (number < 0) {
//     return reviews.length - 1;
//   } else {
//     return number;
//   }
// };
// the click events would look like:
// const prevPerson = () => {
//   setIndex((currentIndex) => {
//     const newIndex = currentIndex - 1;
//     if (newIndex < 0) {
//       return reviews.length - 1;
//     }
//     return checkIndex(newIndex)
//   });
// };

export default App;
