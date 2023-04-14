import Title from './Title';
import { tours } from "../data"

function Tours() {
  return (
    <>
      <section className='section' id='tours'>
      <Title wordOne='featured' wordTwo='tours' />
      <div className='section-center featured-center'>

      {tours.map((tour) => {
        const {id, location, img, date, description, country, length, price} = tour;
        return (
          <article className='tour-card' key={id}>
            <div className='tour-img-container'>
              <img src={img} className='tour-img' alt={location} />
              <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
              <div className='tour-title'>
                <h4>{location}</h4>
              </div>
              <p>
                {description}
              </p>
              <div className='tour-footer'>
                <p>
                  <span>
                    <i className='fas fa-map'></i>
                  </span>{" "}
                  {country}
                </p>
                <p>{length}</p>
                <p>{price}</p>
              </div>
            </div>
          </article>
        )
      })}
      </div>
      </section>
    </>
  );
}

export default Tours;
