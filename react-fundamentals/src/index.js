import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './style.css';

const firstBook = {
  image: './images/Book1.jpg',
  title: 'Lessons in Chemistry',
  author: 'Bonnie Garmus',
};
const secondBook = {
  image: 'https://m.media-amazon.com/images/I/81fyoFoaxlL.jpg',
  title: 'Dog Man: Twenty Thousand Fleas Under the Sea',
  author: 'Dav Pilkey',
};
const thirdBook = {
  image:
    'https://cdn.thebooksiogroup.com/cover_images/642/9781524798642.jpg?width=300&height=446&image-type=product_page_main_image&fit=bounds',
  title: 'Daisy Jones & The Six',
  author: 'Taylor Jenkins Reid',
};
const fourthBook = {
  image: 'https://m.media-amazon.com/images/I/91StpJ4e8gL.jpg',
  title: 'Hello Beautiful',
  author: 'Ann Napolitano',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book {...firstBook}>
        <button>Buy Now!</button>
      </Book>
      <Book {...secondBook} />
      <Book {...thirdBook} />
      <Book {...fourthBook} />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
