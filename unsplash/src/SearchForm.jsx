// Create a form with an input and a submit button. The input should have the following attributes: type='text', name='search', placeholder='cat', and className='form-input search-input'. When the user submits the form, access (for now log)the input value.

function SearchForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input search-input'
        ></input>
        <button type='submit' className='btn'>
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
