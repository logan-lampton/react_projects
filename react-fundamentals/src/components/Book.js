import Author from './Author';
import Image from './Image';
import Title from './Title';
import '../style.css';

function Book({ image, title, author, getBook, children, id }) {
  const getSingleBook = () => {
    getBook(id);
  };

  return (
    <article className='book'>
      <Image image={image} title={title} />
      <Title title={title} />
      <Author author={author} />
      <button onClick={getSingleBook}>Display Title</button>
      {children}
    </article>
  );
}

export default Book;
