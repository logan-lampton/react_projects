import heroImg from "../assets/hero.svg";

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            incidunt dolorem eaque numquam ipsum esse nihil commodi mollitia,
            voluptatem dolore sint reprehenderit eveniet inventore eius quae,
            distinctio alias aliquam modi.
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='woman and the browser' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
