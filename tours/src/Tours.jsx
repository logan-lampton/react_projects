import Tour from "./Tour";
import { useState } from "react";

function Tours({ tours, handleDelete }) {
  return (
    <section>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} handleDelete={handleDelete} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
