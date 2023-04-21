import { useState } from "react";

function Tour({ id, name, info, image, price, handleDelete }) {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <button className='btn btn-block' onClick={toggleReadMore}>Info</button>
        {readMore && <p>{info}</p>}
        <button
          className='btn btn-block delete-btn'
          onClick={() => handleDelete(id)}
        >
          Remove
        </button>
      </div>
    </article>
  );
}

export default Tour;
