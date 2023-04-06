import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
