import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './style.css';
import books from './books';

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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
