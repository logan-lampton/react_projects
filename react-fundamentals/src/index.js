import React from 'react';
import ReactDOM from 'react-dom/client';
import Book from './components/Book';
import './style.css';

function BookList() {
  return (
    <section className="booklist">
      <Book image="./images/Book1.jpg" title="Lessons in Chemistry" author="Bonnie Garmus"/>
      {/* <Book />
      <Book />
      <Book /> */}
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
