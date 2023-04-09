import Author from './Author';
import Image from './Image';
import Title from './Title';
import "../style.css";

function Book({image, title, author, children}) {
  return (
    <article className="book">
      <Image image={image} title={title}/>
      <Title title={title}/>
      <Author author={author}/>
      {children}
    </article>
  );
}

export default Book;
