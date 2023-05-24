import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h1>Oops! It's a dead end</h1>
        <Link to='/' className='btn-primary'>
          Back to home page
        </Link>
      </div>
    </section>
  );
}
