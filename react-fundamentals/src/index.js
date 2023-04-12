import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './style.css';

const books = [
  {
    image: './images/Book1.jpg',
    title: 'Lessons in Chemistry',
    author: 'Bonnie Garmus',
    id: 1,
  },
  {
    image: 'https://m.media-amazon.com/images/I/81fyoFoaxlL.jpg',
    title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
    author: 'Dav Pilkey',
    id: 2,
  },
  {
    image:
      'https://cdn.thebooksiogroup.com/cover_images/642/9781524798642.jpg?width=300&height=446&image-type=product_page_main_image&fit=bounds',
    title: 'Daisy Jones & The Six',
    author: 'Taylor Jenkins Reid',
    id: 3,
  },
  {
    image: 'https://m.media-amazon.com/images/I/91StpJ4e8gL.jpg',
    title: 'Hello Beautiful',
    author: 'Ann Napolitano',
    id: 4,
  },
];

function BookList() {
  const getBook = (id) => {
    const book = books.find((book) => {
      return book.id === id;
    });
    console.log(book.title);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
}

// const EventExamples = () => {
//   const handleFormChange = () => {
//     console.log('handle form input');
//   };
//   const handleButtonClick = () => {
//     console.log('handle button click');
//   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
//   };

//   return (
//     <section>
//       <form onSubmit={handleFormSubmit}>
//         <input
//           type='text'
//           name='example'
//           onChange={handleFormChange}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={handleButtonClick}>Click me!</button>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
