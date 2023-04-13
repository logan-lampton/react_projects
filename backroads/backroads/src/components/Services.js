import Title from './Title';
import { services } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Services() {
  return (
    <>
      <section className='section services' id='services'>
        <Title wordOne='our' wordTwo='services' />

        <div className='section-center services-center'>
        {services.map((service) => {
          const {id, icon, title, description} = service;
          return (
            <article className='service' key={id}>
              <span className='service-icon'>
                <FontAwesomeIcon icon={icon} />
              </span>
              <div className='service-info'>
                <h4 className='service-title'>{title}</h4>
                <p className='service-text'>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
        </div>
      </section>
    </>
  )
}

export default Services;
